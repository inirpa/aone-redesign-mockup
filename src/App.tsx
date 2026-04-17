/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Search, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Star, 
  Briefcase, 
  CircleCheck, 
  Languages, 
  ShieldCheck,
  Bed,
  Bath,
  Car
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Rent');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-brand-night scroll-smooth">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[4vw] h-[90px] bg-cream/98 backdrop-blur-xl border-b border-gold/30 shadow-sm transition-all duration-300">
        <div className="flex items-center">
          <img 
            src="https://aonerealestate.com.au/wp-content/uploads/2026/04/aone-logo.png" 
            alt="A ONE Real Estate" 
            className="h-[56px] w-auto object-contain"
          />
        </div>
        <ul className="hidden md:flex gap-9 list-none items-center">
          {['Buy', 'Sell', 'Rent', 'Management', 'About'].map((item) => (
            <li key={item}>
              <a href="#" className="text-[13px] font-normal tracking-widest uppercase text-muted hover:text-brand transition-colors">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="bg-brand text-cream px-[22px] py-[10px] rounded-[2px] text-[12px] tracking-widest uppercase no-underline hover:bg-gold hover:text-brand-night transition-colors">
              Get Appraisal
            </a>
          </li>
        </ul>
        <button className="md:hidden text-brand-night">
          <Menu size={24} />
        </button>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 pt-[72px] min-h-screen">
        <div className="flex flex-col justify-center px-[8vw] py-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[11px] tracking-[0.2em] uppercase text-gold font-medium mb-7"
          >
            Adelaide's Trusted Agency · RLA 309133
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-[clamp(52px,6vw,88px)] font-light leading-[1.05] text-brand-night mb-7"
          >
            Find Your<br />
            <em className="italic text-gold not-italic">Perfect</em><br />
            Adelaide Home
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[15px] leading-relaxed text-slate-500 max-w-[380px] mb-12"
          >
            A ONE Real Estate delivers premium buying, selling, and property management services across Adelaide and South Australia — with a personal touch that sets us apart.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 items-center mb-16"
          >
            <a href="#listings" className="bg-brand text-cream px-8 py-[14px] text-[13px] tracking-widest uppercase rounded-[2px] transition-colors hover:bg-gold hover:text-brand-night">
              View Properties
            </a>
            <a href="#contact" className="bg-transparent text-brand-night border border-brand-night px-8 py-[14px] text-[13px] tracking-widest uppercase rounded-[2px] transition-all hover:bg-brand-night hover:text-cream">
              Free Appraisal
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-10 pt-10 border-t border-gold/20"
          >
            {[
              { num: '500+', label: 'Properties Managed' },
              { num: '12+', label: 'Years Experience' },
              { num: '98%', label: 'Client Satisfaction' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-4xl font-medium text-brand-night">{stat.num}</div>
                <div className="text-[12px] text-slate-500 tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative overflow-hidden bg-brand min-h-[600px] hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="absolute top-[10%] right-[8%] w-[200px] height-[200px] border border-gold/15 rounded-full" />
            <div className="absolute top-[25%] right-[20%] w-[120px] height-[120px] border border-gold/25 rounded-full" />
            <div className="absolute bottom-[30%] left-[10%] w-[300px] height-[300px] border border-gold/10 rotate-45" />
          </div>

          <div className="absolute top-9 left-9 bg-cream/10 border border-gold/20 rounded-[2px] px-5 py-3 flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-[12px] text-cream/70 tracking-widest">2/2A Daws Road, Ascot Park SA 5043</span>
          </div>

          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80" 
              alt="Premium Adelaide Home" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand/40" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-10 right-10 bg-cream/95 backdrop-blur-md rounded-[4px] p-8 flex gap-4 items-start border border-gold/20"
          >
            <div className="bg-gold text-brand-night text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1.5 rounded-[2px] whitespace-nowrap">New Listing</div>
            <div className="text-brand-night">
              <strong className="block text-[15px] font-medium mb-1">23 Chelmsford St, Craigmore</strong>
              <span className="text-[13px] text-slate-500">4 bed · 2 bath · 2 car — $680/week</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="bg-brand-night px-[8vw] py-20 relative overflow-hidden">
        {/* Abstract background elements for depth */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="mb-10 text-center md:text-left">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-4">Property Discovery</p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light leading-tight text-cream">
              {activeTab === 'For Rent' && <>Find your next <em className="italic text-gold not-italic">Rental</em> home</>}
              {activeTab === 'For Sale' && <>Search premium <em className="italic text-gold not-italic">Sales</em> listings</>}
              {activeTab === 'Sold' && <>Explore recently <em className="italic text-gold not-italic">Sold</em> properties</>}
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-2 md:p-3 rounded-[12px] shadow-2xl">
            {/* SEGMENTED CONTROL TABS */}
            <div className="flex bg-brand-night/50 p-1 rounded-[8px] mb-6 w-full md:w-fit border border-white/5">
              {['For Rent', 'For Sale', 'Sold'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-1 md:flex-none px-8 py-3 text-[12px] tracking-widest uppercase cursor-pointer rounded-[6px] transition-all duration-300 z-10 font-bold ${
                    activeTab === tab 
                      ? 'text-brand-night bg-gold shadow-lg' 
                      : 'text-cream/50 hover:text-cream'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* SEARCH INPUTS GROUP */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              <div className="md:col-span-5 relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gold/50 group-focus-within:text-gold transition-colors">
                  <MapPin size={18} />
                </div>
                <input 
                  type="text" 
                  className="w-full pl-14 pr-6 py-5 text-[15px] bg-brand-night/40 border border-white/10 text-cream outline-none rounded-[8px] focus:border-gold/50 focus:bg-brand-night/60 transition-all placeholder:text-cream/20" 
                  placeholder={activeTab === 'Sold' ? "Enter street, suburb or postcode..." : "Where would you like to live?"} 
                />
              </div>

              <div className="md:col-span-3 relative">
                <select className="w-full px-6 py-5 text-[15px] bg-brand-night/40 border border-white/10 text-cream outline-none rounded-[8px] cursor-pointer appearance-none focus:border-gold/50 focus:bg-brand-night/60 transition-all">
                  <option className="bg-brand-night">Any Price</option>
                  {activeTab === 'For Rent' ? (
                    <>
                      <option className="bg-brand-night">Up to $400/wk</option>
                      <option className="bg-brand-night">$400 – $600/wk</option>
                      <option className="bg-brand-night">$600 – $800/wk</option>
                      <option className="bg-brand-night">$800 – $1,000/wk</option>
                      <option className="bg-brand-night">$1,000+/wk</option>
                    </>
                  ) : (
                    <>
                      <option className="bg-brand-night">Up to $600k</option>
                      <option className="bg-brand-night">$600k – $800k</option>
                      <option className="bg-brand-night">$800k – $1.2M</option>
                      <option className="bg-brand-night">$1.2M – $2M</option>
                      <option className="bg-brand-night">$2M+</option>
                    </>
                  )}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold/30">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              </div>

              <div className="md:col-span-2 relative">
                <select className="w-full px-6 py-5 text-[15px] bg-brand-night/40 border border-white/10 text-cream outline-none rounded-[8px] cursor-pointer appearance-none focus:border-gold/50 focus:bg-brand-night/60 transition-all">
                  <option className="bg-brand-night">Beds</option>
                  <option className="bg-brand-night">1+ Bed</option>
                  <option className="bg-brand-night">2+ Beds</option>
                  <option className="bg-brand-night">3+ Beds</option>
                  <option className="bg-brand-night">4+ Beds</option>
                  <option className="bg-brand-night">5+ Beds</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold/30">
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              </div>

              <div className="md:col-span-2">
                <button className="w-full h-full bg-gold text-brand-night py-5 px-6 rounded-[8px] text-[13px] font-bold tracking-[0.14em] uppercase transition-all hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 group">
                  <Search size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <span className="text-[11px] uppercase tracking-widest text-cream/30">Quick Search:</span>
            {['Adelaide CBD', 'Ascot Park', 'Craigmore', 'Marion', 'Glenelg'].map(suburb => (
              <button key={suburb} className="text-[12px] text-cream/50 hover:text-gold transition-colors underline-offset-4 hover:underline">
                {suburb}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-[8vw] py-[120px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">What We Do</p>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-brand-night">
              Complete Property<br /><em className="italic text-gold not-italic">Solutions</em>
            </h2>
          </div>
          <a href="#" className="text-[12px] tracking-widest uppercase no-underline text-brand-night border-b border-brand-night pb-0.5 hover:text-gold hover:border-gold transition-all">
            View all services →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
          {[
            { id: '01', icon: <Home />, name: 'Buy', desc: 'Find your ideal home across Adelaide. We guide you through every step, from first inspection to settlement.' },
            { id: '02', icon: <ArrowRight />, name: 'Sell', desc: 'Strategic marketing and expert negotiation to achieve the best possible price in the current market.' },
            { id: '03', icon: <Languages />, name: 'Rent', desc: 'Quality rental properties to suit every lifestyle and budget, with responsive support throughout your tenancy.' },
            { id: '04', icon: <Briefcase />, name: 'Manage', desc: 'End-to-end investment property management — tenant sourcing, rent collection, maintenance and reporting.' }
          ].map((service) => (
            <motion.div 
              {...fadeInUp}
              key={service.id}
              className="group bg-card p-12 relative overflow-hidden cursor-pointer transition-colors hover:bg-brand-night duration-300 border border-black/5"
            >
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
              <div className="text-2xl mb-8 text-gold transition-colors">{service.icon}</div>
              <div className="absolute top-6 right-7 font-serif text-5xl font-light text-black/[0.03] leading-none group-hover:text-white/[0.03] transition-colors">{service.id}</div>
              <div className="font-serif text-2xl font-medium text-brand-night mb-4 group-hover:text-cream transition-colors">{service.name}</div>
              <p className="text-[13px] leading-relaxed text-slate-500 group-hover:text-cream/60 transition-colors mb-8">{service.desc}</p>
              <div className="text-xl text-slate-400 group-hover:text-gold transition-colors">→</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LISTINGS */}
      <section className="px-[8vw] pb-[120px]" id="listings">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Featured Rentals</p>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-brand-night">
              Current <em className="italic text-gold not-italic">Listings</em>
            </h2>
          </div>
          <a href="#" className="text-[12px] tracking-widest uppercase no-underline text-brand-night border-b border-brand-night pb-0.5 hover:text-gold hover:border-gold transition-all">
            All properties →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { suburb: 'Craigmore', address: '23 Chelmsford Street', price: '$680', beds: 4, bath: 2, car: 2, img: 'https://aonerealestate.com.au/wp-content/uploads/2026/03/uploads1773975848813-zz94m7n96u-062143486b6658ee93177071924e7184main.jpg' },
            { suburb: 'Dover Gardens', address: '121B Sturt Road', price: '$750', beds: 3, bath: 2, car: 1, img: 'https://aonerealestate.com.au/wp-content/uploads/2026/04/uploads1774496182720-jdaqa9xht7t-f3fef655796da46e15bacd2885542c54AB240598_hdr-1.jpg' },
            { suburb: 'Paradise', address: '18 Clark Crescent', price: '$690', beds: 4, bath: 2, car: 2, img: 'https://aonerealestate.com.au/wp-content/uploads/2026/04/uploads1774837414656-85p0k3u8puk-28494fa9800ffb261acb1e70437083aemain.jpg' }
          ].map((list, i) => (
            <motion.div 
              {...fadeInUp}
              key={i}
              className="bg-card rounded-[4px] overflow-hidden border border-black/5 hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="h-[220px] relative overflow-hidden bg-brand-night">
                <img 
                  src={list.img} 
                  alt={list.address} 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-gold text-brand-night text-[10px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-[2px]">For Rent</div>
              </div>
              <div className="p-6">
                <p className="text-[11px] tracking-widest uppercase text-slate-500 mb-2">{list.suburb}</p>
                <p className="font-serif text-xl font-medium text-brand-night mb-4 leading-tight">{list.address}</p>
                <p className="font-serif text-2xl font-medium text-brand-night mb-4">
                  {list.price} <span className="font-sans text-[13px] font-normal text-slate-500">/ week</span>
                </p>
                <div className="flex gap-5 pt-4 border-t border-gold/10">
                  <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
                    <Bed size={15} className="text-gold" /> {list.beds}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
                    <Bath size={15} className="text-gold" /> {list.bath}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
                    <Car size={15} className="text-gold" /> {list.car}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SELL CTA SECTION */}
      <section className="bg-cream px-[8vw] py-[120px] overflow-hidden">
        <div className="max-w-[1240px] mx-auto bg-brand-night rounded-[12px] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
          <div className="flex-1 p-12 md:p-20 relative z-10">
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-6">Sell With A ONE</p>
            <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-tight text-cream mb-8">
              Maximize the <em className="italic text-gold not-italic">True Value</em> of your property
            </h2>
            <p className="text-[16px] leading-relaxed text-cream/60 mb-12 max-w-lg">
              Our team combines strategic marketing, professional styling advice, and expert negotiation to ensure your home doesn't just sell — it achieves a premium result.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="bg-gold text-brand-night px-10 py-5 text-[14px] font-bold tracking-widest uppercase rounded-[4px] hover:bg-gold-light hover:scale-105 transition-all shadow-xl">
                Get a Free Appraisal
              </a>
              <a href="tel:0882777567" className="border border-white/20 text-cream px-10 py-5 text-[14px] font-bold tracking-widest uppercase rounded-[4px] hover:bg-white/5 transition-all">
                Call Our Experts
              </a>
            </div>
          </div>
          <div className="flex-1 min-h-[400px] relative">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Home Interior" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-night/20" />
            <div className="absolute bottom-10 right-10 bg-cream p-8 rounded-[4px] shadow-2xl border-l-[6px] border-gold max-w-[280px] hidden sm:block">
              <div className="text-[13px] italic font-serif text-brand-night/80 mb-2 leading-relaxed">
                "They made selling our family home stress-free and achieved a record price for our street."
              </div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-gold">— Client from Marion</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-brand-night px-[8vw] py-[120px] grid lg:grid-cols-2 gap-20 items-center">
        <motion.div {...fadeInUp} className="max-w-xl">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Why A ONE</p>
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-cream mb-6">
            Your Property,<br /><em className="italic text-gold not-italic">Our Priority</em>
          </h2>
          <p className="text-[15px] leading-relaxed text-cream/60 mb-10">
            We combine deep local knowledge with a genuinely personal approach — speaking your language, understanding your goals, and delivering results you can count on.
          </p>
          <a href="#contact" className="bg-brand text-cream px-8 py-[14px] text-[13px] tracking-widest uppercase rounded-[2px] transition-colors hover:bg-gold hover:text-brand-night">
            Work With Us
          </a>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
          {[
            { icon: <Star size={24} />, title: 'Local Expertise', desc: 'Deep knowledge of Adelaide suburbs and the SA property market.' },
            { icon: <Languages size={24} />, title: 'Bilingual Service', desc: 'Nepali-speaking agents ensure nothing is lost in translation.' },
            { icon: <ShieldCheck size={24} />, title: 'Transparent Reporting', desc: 'Clear financial statements and proactive communication.' },
            { icon: <CircleCheck size={24} />, title: 'Proven Results', desc: 'Trusted by investors and families across South Australia.' }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-8 border border-white/10 hover:bg-gold/10 transition-colors">
              <div className="mb-5 text-gold">{item.icon}</div>
              <div className="font-serif text-[18px] font-medium text-cream mb-2">{item.title}</div>
              <p className="text-[13px] leading-relaxed text-cream/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="px-[8vw] py-[120px]">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">The Team</p>
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-brand-night">
            Meet Our <em className="italic text-gold not-italic">Experts</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              img: 'https://aonerealestate.com.au/wp-content/uploads/2023/07/img-9-1024x1024.jpg', 
              name: 'Nabin Kambang', 
              role: 'Principal Director', 
              phone: '0452 198 640' 
            },
            { 
              img: 'https://aonerealestate.com.au/wp-content/uploads/2023/07/cropped-img-14-scaled-1-1024x1024.jpg', 
              name: 'Romarsh Hamal', 
              role: 'Director & Land Agent', 
              phone: '0416 534 447' 
            },
            { 
              img: 'https://aonerealestate.com.au/wp-content/uploads/2025/09/aone-300.png', 
              name: 'Nitesh Subedi', 
              role: 'Property Manager', 
              phone: '08 8277 7567' 
            },
            { 
              img: 'https://aonerealestate.com.au/wp-content/uploads/2024/10/Deena-2-1024x1024.jpg', 
              name: 'Deena Shrestha', 
              role: 'Admin & Accounts', 
              phone: '08 8277 7567' 
            }
          ].map((person, i) => (
            <motion.div 
              {...fadeInUp}
              key={i}
              className="group relative bg-card rounded-[8px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-night/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="p-7 text-center">
                <div className="font-serif text-2xl font-medium text-brand-night mb-1.5 group-hover:text-brand transition-colors">{person.name}</div>
                <div className="text-[12px] tracking-[0.15em] uppercase text-gold font-medium mb-4">{person.role}</div>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-[13px] border-t border-gold/10 pt-4">
                  <Phone size={14} className="text-gold" />
                  {person.phone}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-brand px-[8vw] py-[120px]">
        <div className="mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Client Stories</p>
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-cream">
            What Our <em className="italic text-gold not-italic">Clients</em> Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { author: 'Tara Thapa', text: 'Nabin and his team members are amazing. Easy to deal, quick to respond and supportive.' },
            { author: 'Kuma Raj Subedi', text: 'Very professional, competitively priced, responsive, respectful and friendly. Highly recommend.' },
            { author: 'Kapil Pande', text: 'Very happy with the service. They have depth of knowledge of the market and are very honest.' }
          ].map((review, i) => (
            <motion.div 
              {...fadeInUp}
              key={i}
              className="bg-white/5 border border-white/10 rounded-[4px] p-9 hover:border-gold transition-colors"
            >
              <div className="text-gold text-sm tracking-widest mb-5">★★★★★</div>
              <p className="font-serif text-[17px] italic leading-relaxed text-cream/70 mb-6 italic">"{review.text}"</p>
              <div className="text-[13px] font-medium text-cream tracking-[0.04em]">{review.author}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-[8vw] py-[120px] grid lg:grid-cols-2 gap-20 items-center" id="contact">
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Get In Touch</p>
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-brand-night">
            Ready to <em className="italic text-gold not-italic">Begin?</em>
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-500 mt-5 mb-8">
            Whether you're buying your first home, selling an investment, or seeking expert property management — our team is here to help every step of the way.
          </p>
          <a href="tel:0882777567" className="bg-brand text-cream px-8 py-[14px] text-[13px] tracking-widest uppercase rounded-[2px] transition-colors hover:bg-gold hover:text-brand-night">
            Call Us Now
          </a>
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4 py-4 border-b border-gold/20">
              <Phone className="text-gold" size={16} />
              <a href="tel:0882777567" className="text-sm text-brand-night">08 8277 7567</a>
            </div>
            <div className="flex items-center gap-4 py-4 border-b border-gold/20">
              <Mail className="text-gold" size={16} />
              <span className="text-sm text-brand-night">info@aonerealestate.com.au</span>
            </div>
            <div className="flex items-center gap-4 py-4 border-b border-gold/20">
              <MapPin className="text-gold" size={16} />
              <span className="text-sm text-brand-night">2/2A Daws Road, Ascot Park SA 5043</span>
            </div>
          </div>
        </div>
        <div className="bg-card p-12 rounded-[4px] border border-black/5">
          <div className="font-serif text-[28px] font-medium text-brand-night mb-8">Send an Enquiry</div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase text-slate-500">First Name</label>
                <input type="text" className="text-sm p-3 border border-gold/30 rounded-[2px] bg-white outline-none focus:border-gold transition-colors" placeholder="Sarah" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase text-slate-500">Last Name</label>
                <input type="text" className="text-sm p-3 border border-gold/30 rounded-[2px] bg-white outline-none focus:border-gold transition-colors" placeholder="Smith" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase text-slate-500">Email</label>
                <input type="email" className="text-sm p-3 border border-gold/30 rounded-[2px] bg-white outline-none focus:border-gold transition-colors" placeholder="sarah@email.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase text-slate-500">Phone</label>
                <input type="tel" className="text-sm p-3 border border-gold/30 rounded-[2px] bg-white outline-none focus:border-gold transition-colors" placeholder="04xx xxx xxx" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-widest uppercase text-slate-500">I'm interested in</label>
              <select className="text-sm p-3 border border-gold/30 rounded-[2px] bg-white outline-none focus:border-gold transition-colors appearance-none">
                <option>Buying a property</option>
                <option>Selling a property</option>
                <option>Renting a property</option>
                <option>Property Management</option>
                <option>Free Appraisal</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-widest uppercase text-slate-500">Message</label>
              <textarea className="text-sm p-3 border border-gold/30 rounded-[2px] bg-white outline-none focus:border-gold transition-colors min-h-[100px]" placeholder="Tell us a bit about your property needs…"></textarea>
            </div>
            <button className="bg-brand text-cream w-full py-4 text-[13px] tracking-widest uppercase rounded-[2px] hover:bg-gold hover:text-brand-night transition-colors mt-2">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="px-[8vw] pb-[120px]">
        <div className="bg-card p-4 rounded-[4px] border border-black/5 shadow-sm overflow-hidden h-[450px] relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6540.368305004128!2d138.5663673!3d-34.9908129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf972d567c8b%3A0xd3f8f9f239f6f6e8!2s2%2F2A%20Daws%20Rd%2C%20Ascot%20Park%20SA%205043!5e0!3m2!1sen!2sau!4v1713346900000!5m2!1sen!2sau"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
          <div className="absolute bottom-10 left-10 bg-brand-night text-cream p-6 rounded-[2px] shadow-2xl border border-gold/30 hidden md:block">
            <div className="text-gold text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">Office Location</div>
            <div className="font-serif text-[18px] mb-3">A ONE Real Estate</div>
            <div className="flex items-center gap-2 text-cream/60 text-[13px]">
              <MapPin size={14} className="text-gold" />
              2/2A Daws Road, Ascot Park SA 5043
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-night px-[8vw] pt-16 pb-10 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="max-w-[280px]">
            <div className="mb-8 flex justify-start">
              <img 
                src="https://aonerealestate.com.au/wp-content/uploads/2026/04/aone-logo.png" 
                alt="A ONE Real Estate" 
                className="h-[48px] w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-[13px] leading-relaxed text-cream/45">
              Adelaide's trusted property specialists — delivering exceptional results for buyers, sellers, landlords and tenants across South Australia.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-gold mb-5">Services</p>
            <ul className="space-y-3 p-0 list-none">
                {['Buy Property', 'Sell Property', 'Rent Property', 'Property Management', 'Free Appraisal'].map(link => (
                  <li key={link}><a href="#" className="text-[13px] text-cream/45 hover:text-cream transition-colors no-underline">{link}</a></li>
                ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-gold mb-5">Company</p>
            <ul className="space-y-3 p-0 list-none">
                {['About Us', 'Meet the Team', 'Testimonials', 'FAQ', 'Contact'].map(link => (
                  <li key={link}><a href="#" className="text-[13px] text-cream/45 hover:text-cream transition-colors no-underline">{link}</a></li>
                ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.15em] uppercase text-gold mb-5">Contact</p>
            <ul className="space-y-3 p-0 list-none">
                <li><span className="text-[13px] text-cream/45">08 8277 7567</span></li>
                <li><span className="text-[13px] text-cream/45">info@aonerealestate.com.au</span></li>
                <li><span className="text-[13px] text-cream/45">2/2A Daws Road</span></li>
                <li><span className="text-[13px] text-cream/45">Ascot Park SA 5043</span></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[12px] text-cream/30 tracking-[0.04em]">© 2025 A ONE Real Estate Pty Ltd. All rights reserved. · Privacy Policy · Terms</p>
          <p className="text-[12px] text-gold tracking-widest uppercase">RLA 309133</p>
        </div>
      </footer>
    </div>
  );
}

