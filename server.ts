import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

// Fix for "unable to verify the first certificate" error in some environments
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cachedToken: string | null = null;
let lastAuthError: string | null = null;

async function getEagleAccessToken() {
  if (cachedToken) return cachedToken;
  
  const clientId = process.env.EAGLE_CRM_CLIENT_ID?.trim();
  const clientSecret = process.env.EAGLE_CRM_CLIENT_SECRET?.trim();
  
  if (!clientId || !clientSecret) {
    console.warn('[AUTH] EAGLE_CRM_CLIENT_ID or EAGLE_CRM_CLIENT_SECRET not configured');
    lastAuthError = 'Environment variables missing';
    return null;
  }

  const endpoints = [
    { 
      name: 'Eagle v3 Token Bearer (Curl Style)',
      url: 'https://www.eagleagent.com.au/api/v3/token', 
      headers: { 
        'Authorization': `Bearer ${clientId}:${clientSecret}`,
        'Content-Type': 'application/json' 
      },
      body: undefined // No body, match curl
    },
    { 
      name: 'Eagle v3 Token Basic Auth',
      url: 'https://www.eagleagent.com.au/api/v3/token', 
      headers: { 
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/json' 
      },
      body: undefined // No body
    },
    { 
      name: 'Eagle v1 Token Client Credentials',
      url: 'https://api.eagleagent.com.au/token', 
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId || '',
        client_secret: clientSecret || '',
        grant_type: 'client_credentials'
      }).toString()
    }
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`[AUTH] Trying ${endpoint.name}: ${endpoint.url}`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); 

      const fetchOptions: any = {
        method: 'POST',
        headers: {
          ...endpoint.headers,
          'Accept': 'application/json',
          'User-Agent': 'AONE-RealEstate/1.0',
        },
        signal: controller.signal
      };

      if (endpoint.body !== undefined) {
        fetchOptions.body = endpoint.body;
      }

      const response = await fetch(endpoint.url, fetchOptions)
        .finally(() => clearTimeout(timeoutId));

      const bodyText = await response.text();
      console.log(`[AUTH DEBUG] ${endpoint.name} response body:`, bodyText.substring(0, 500));
      
      if (response.ok) {
        console.log(`[AUTH] ${endpoint.name} succeeded (200 OK)`);
        try {
          const data = JSON.parse(bodyText);
          console.log(`[AUTH DEBUG] Data from ${endpoint.name}:`, JSON.stringify(data));
          
          let token: any = data.token || data.access_token || data.data?.login?.token || data.data?.token;
          
          // If the token is an object, check if it has a nested 'token' property
          if (token && typeof token === 'object' && token.token) {
            token = token.token;
          }
          
          console.log(`[AUTH DEBUG] Extracted token:`, token, `Type:`, typeof token);
          
          if (token) {
            console.log(`[AUTH] SUCCESS: token acquired from ${endpoint.name}`);
            cachedToken = typeof token === 'string' ? token : JSON.stringify(token);
            return cachedToken;
          }
          console.warn(`[AUTH] ${endpoint.name} failed to find token in JSON:`, bodyText.substring(0, 200));
        } catch (e) {
          // If not JSON, but the response was OK, maybe the body IS the token?
          if (bodyText && bodyText.length > 0 && !bodyText.includes('<html')) {
            console.log(`[AUTH] SUCCESS: treating raw response from ${endpoint.name} as token`);
            cachedToken = bodyText.trim();
            return cachedToken;
          }
          console.warn(`[AUTH] ${endpoint.name} returned non-JSON/invalid body:`, bodyText.substring(0, 100));
        }
      } else {
        const errorText = `Failed (${response.status}): ${bodyText.substring(0, 200)}`;
        console.warn(`[AUTH] ${endpoint.name} ${errorText}`);
        lastAuthError = `${endpoint.name}: ${errorText}`;
      }
    } catch (error: any) {
      const errorMsg = error.name === 'AbortError' ? 'Timeout' : error.message;
      console.error(`[AUTH] Error with ${endpoint.name}:`, errorMsg);
      lastAuthError = `${endpoint.name}: ${errorMsg}`;
    }
  }

  return null;
}

async function fetchGraphQL(query: string, variables: any = {}) {
  const token = await getEagleAccessToken();
  if (!token) return null;

  // Use the verified working endpoint from curl
  const url = 'https://www.eagleagent.com.au/api/v3/graphql';

  try {
    console.log(`[GRAPHQL] Fetching from ${url}`);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const payload: any = { query };
    if (variables && Object.keys(variables).length > 0) {
      payload.variables = variables;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'AONE-RealEstate/1.0',
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    }).finally(() => clearTimeout(timeoutId));

    const bodyText = await response.text();
    console.log(`[GRAPHQL] Response Status: ${response.status}`);
    console.log(`[GRAPHQL] Response Body (first 500 chars):`, bodyText.substring(0, 500));
    console.log(`[GRAPHQL] Authorization Header Used: Bearer ${token.substring(0, 10)}...`);
    console.log(`[GRAPHQL] FULL TOKEN: ${token}`);

    if (response.ok) {
      const data = JSON.parse(bodyText);
      if (!data.errors) {
        console.log(`[GRAPHQL] SUCCESS with ${url}`);
        return data;
      }
      console.warn(`[GRAPHQL] ${url} returned errors:`, JSON.stringify(data.errors));
      
      if (JSON.stringify(data.errors).toLowerCase().includes('unauthorized') || 
          JSON.stringify(data.errors).toLowerCase().includes('token')) {
        console.warn('[GRAPHQL] Unauthorized error detected in GraphQL response, clearing token cache');
        cachedToken = null;
      }
      return data;
    } else {
      console.warn(`[GRAPHQL] ${url} failed (${response.status}): ${bodyText.substring(0, 200)}`);
      if (response.status === 401) {
        console.warn('[GRAPHQL] 401 Unauthorized, clearing token cache');
        cachedToken = null;
      }
    }
  } catch (error: any) {
    console.error(`[GRAPHQL] Error with ${url}:`, error.message);
  }
  
  return null;
}

async function startServer() {
  console.log('Starting server initialization...');
  const app = express();
  const PORT = 3000;

  // GLOBAL LOGGER
  app.use((req, res, next) => {
    console.log(`[SERVER] ${req.method} ${req.url}`);
    next();
  });

  // Request logger
  app.use((req, res, next) => {
    if (req.url.startsWith('/api')) {
      console.log(`[API REQUEST] ${req.method} ${req.url} - ${new Date().toISOString()}`);
    }
    next();
  });

  app.use(express.json());

  // API ROUTER
  const apiRouter = express.Router();

  // HEALTH CHECK
  apiRouter.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // DIAGNOSTIC ROUTE
  apiRouter.get('/debug/eagle', async (req, res) => {
    const clientId = process.env.EAGLE_CRM_CLIENT_ID;
    const clientSecret = process.env.EAGLE_CRM_CLIENT_SECRET;
    
    const diagnostics = {
      clientIdSet: !!clientId,
      clientSecretSet: !!clientSecret,
      clientIdPrefix: clientId ? clientId.substring(0, 4) + '...' : null,
      clientSecretPrefix: clientSecret ? clientSecret.substring(0, 4) + '...' : null,
      cachedToken: typeof cachedToken === 'string' ? cachedToken.substring(0, 10) + '...' : (cachedToken ? 'Invalid Token Type' : null),
      lastAuthError,
      url: 'https://www.eagleagent.com.au/api/v3/graphql',
      nodeEnv: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    };

    res.json(diagnostics);
  });

  // TEST ROUTE
  apiRouter.get('/api-test', async (req, res) => {
    console.log('--- API TEST START ---');
    const token = await getEagleAccessToken();
    if (!token) {
      return res.status(401).json({ error: 'Failed to acquire token' });
    }

    const query = `
      query {
        properties(first: 5) {
          nodes {
            id
            formattedAddress
            price
            status
          }
        }
      }
    `;

    try {
      const response = await fetch('https://www.eagleagent.com.au/api/v3/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'User-Agent': 'AONE-RealEstate/1.0'
        },
        body: JSON.stringify({ query }),
      });

      const bodyText = await response.text();
      console.log('Test Route Status:', response.status);
      
      let data;
      try {
        data = JSON.parse(bodyText);
      } catch (e) {
        return res.json({ status: response.status, rawBody: bodyText });
      }

      res.json({
        status: response.status,
        tokenPrefix: typeof token === 'string' ? token.substring(0, 10) + '...' : 'Invalid Token Type',
        data
      });
    } catch (error: any) {
      console.error('Test Route Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // API Route for Properties For Sale
  apiRouter.get('/properties/sale', async (req, res) => {
    console.log('[API] Hit /api/properties/sale');
    
    // For now, let's also return sample data for sales to ensure the route works
    const sampleSales = [
      {
        id: 'sale-1',
        suburb: 'North Adelaide',
        address: '22/99 Melbourne St',
        price: '$1,250,000',
        beds: 3,
        bath: 2,
        car: 2,
        description: 'Luxury penthouse with panoramic city views.',
        type: 'For Sale',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80']
      },
      {
        id: 'sale-2',
        suburb: 'Adelaide CBD',
        address: '150 Grenfell St',
        price: '$850,000',
        beds: 2,
        bath: 2,
        car: 1,
        description: 'Modern city living at its finest.',
        type: 'For Sale',
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80']
      }
    ];

    try {
      // We still try to fetch real data but if it fails we have a fallback or we can just send sample for now
      const query = 'query { properties(first: 3) { nodes { id formattedAddress price status } } }';
      const data = await fetchGraphQL(query);
      
      if (data && data.data && data.data.properties) {
        const listings = data.data.properties.nodes.map((node: any) => ({
          id: node.id,
          suburb: 'Property',
          address: node.formattedAddress,
          price: node.price,
          status: node.status,
          beds: 0,
          bath: 0,
          car: 0,
          type: 'For Sale',
          img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
        }));
        return res.json(listings);
      }
    } catch (err) {
      console.error('[SALES] Real fetch failed, returning sample', err);
    }

    res.json(sampleSales);
  });

  // API Route for Rental Properties
  apiRouter.get('/properties/rental', async (req, res) => {
    console.log('[API] Hit /api/properties/rental - Returning Sample Data');
    const sampleRentals = [
      {
        id: 'rental-1',
        suburb: 'North Adelaide',
        address: '15/88 O\'Connell Street',
        price: '$550 / week',
        beds: 2,
        bath: 1,
        car: 1,
        description: 'Modern executive apartment in the heart of North Adelaide. Features include open plan living, private balcony, and secure underground parking.',
        type: 'Rental',
        img: 'https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?auto=format&fit=crop&w=600&q=80']
      },
      {
        id: 'rental-2',
        suburb: 'Glenelg',
        address: '4/12 Colley Terrace',
        price: '$720 / week',
        beds: 3,
        bath: 2,
        car: 2,
        description: 'Breathtaking beach front living. This spacious unit offers stunning sea views and is just steps away from Jetty Road.',
        type: 'Rental',
        img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80']
      },
      {
        id: 'rental-3',
        suburb: 'Unley',
        address: '22 King William Road',
        price: '$480 / week',
        beds: 1,
        bath: 1,
        car: 1,
        description: 'Stylish studio apartment perfectly located for city workers. High ceilings, industrial feel, and amazing local cafes.',
        type: 'Rental',
        img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80',
        images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80']
      }
    ];
    res.json(sampleRentals);
  });

  // STATIC TEST ROUTE
  apiRouter.get('/test-static', (req, res) => {
    res.json([{ 
      id: 'test', 
      suburb: 'Static Test', 
      address: '123 Fake Street', 
      price: '$500,000', 
      beds: 2, 
      bath: 1, 
      car: 1, 
      type: 'For Sale',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    }]);
  });

  // Mount API router
  app.use('/api', apiRouter);

  // CATCH ALL FOR UNMATCHED /api ROUTES
  app.all('/api/*', (req, res) => {
    console.warn(`[API 404] Unmatched API route: ${req.method} ${req.url}`);
    res.status(404).json({ 
      error: 'API route not found', 
      method: req.method,
      path: req.url 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // GLOBAL ERROR HANDLER
  app.use((err: any, req: any, res: any, next: any) => {
    console.error('[SERVER ERROR]', err);
    res.status(500).json({ 
      error: 'Internal Server Error', 
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined 
    });
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
