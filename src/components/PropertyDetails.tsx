import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Car, 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  FileText, 
  Phone, 
  Mail, 
  ChevronLeft,
  Share2,
  Heart,
  Wind,
  Shield,
  Zap,
  Wifi,
  ExternalLink,
  Star,
  Home,
  X,
  ChevronRight
} from 'lucide-react';

interface PropertyDetailsProps {
  property: any;
  onBack: () => void;
  onMakeOffer: () => void;
  key?: string;
}

export default function PropertyDetails({ property, onBack, onMakeOffer }: PropertyDetailsProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-cream pt-[90px]"
    >
      {/* HEADER ACTIONS */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gold/20 px-[4vw] py-4 sticky top-[90px] z-40 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[13px] font-medium tracking-widest uppercase text-brand-night hover:text-gold transition-colors group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Listings
        </button>
        <div className="flex gap-4">
          <button className="p-2.5 rounded-full border border-gold/20 hover:bg-gold/5 text-brand-night transition-colors">
            <Share2 size={18} />
          </button>
          <button className="p-2.5 rounded-full border border-gold/20 hover:bg-gold/5 text-brand-night transition-colors">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* HERO GALLERY */}
      <section className="px-[4vw] pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[65vh]">
          <div 
            className="lg:col-span-8 h-[380px] md:h-[500px] lg:h-full rounded-[12px] overflow-hidden relative group cursor-pointer shadow-md"
            onClick={() => {
              setActiveImageIndex(0);
              setIsGalleryOpen(true);
            }}
          >
            <img 
              src={property.images[0]} 
              alt={property.address} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-night/10 group-hover:bg-brand-night/0 transition-colors duration-500" />
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-4 h-[180px] md:h-[250px] lg:h-full">
            <div 
              className="rounded-[12px] overflow-hidden relative group cursor-pointer shadow-md"
              onClick={() => {
                setActiveImageIndex(1);
                setIsGalleryOpen(true);
              }}
            >
              <img 
                src={property.images[1]} 
                alt="Property Detail 1" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div 
              className="rounded-[12px] overflow-hidden relative group cursor-pointer shadow-md"
              onClick={() => {
                setActiveImageIndex(2);
                setIsGalleryOpen(true);
              }}
            >
              <img 
                src={property.images[2]} 
                alt="Property Detail 2" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-night/40 flex items-center justify-center text-cream font-medium tracking-[0.2em] uppercase text-[10px] md:text-sm backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                View All Photos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TITLE BAR - EXPLICIT SEPARATION */}
      <section className="px-[4vw] py-12 relative z-10">
        <div className="bg-white border border-gold/20 rounded-[16px] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="space-y-5">
             <div className="flex items-center gap-4">
               <span className="bg-gold text-brand-night text-[11px] font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-[2px] shadow-sm">{property.type}</span>
               <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={14} className="text-gold" />
                  <span className="text-[12px] tracking-[0.2em] uppercase font-bold">{property.suburb}</span>
               </div>
             </div>
             <h1 className="font-serif text-[clamp(32px,5vw,64px)] font-medium text-brand-night leading-[1.1] tracking-tight max-w-3xl">{property.address}</h1>
          </div>
          <div className="bg-cream/40 px-12 py-10 rounded-[12px] border border-gold/15 min-w-[320px] w-full lg:w-auto shadow-inner text-center lg:text-left">
             <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-4">Market Valuation</p>
             <div className="font-serif text-4xl md:text-6xl font-medium text-brand-night flex flex-col sm:flex-row items-baseline justify-center lg:justify-start gap-2">
                {property.price}
                {property.type === 'Rental' && <span className="font-sans text-[18px] font-normal text-slate-400 italic">/ week</span>}
             </div>
          </div>
        </div>
      </section>

      {/* GALLERY LIGHTBOX */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-night/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-10 right-10 text-cream hover:text-gold transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            <div className="relative w-full max-w-6xl aspect-video rounded-[12px] overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  src={property.images[activeImageIndex]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* NAVIGATION */}
              <button 
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-night/50 border border-gold/30 flex items-center justify-center text-cream hover:bg-gold hover:text-brand-night transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => setActiveImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-night/50 border border-gold/30 flex items-center justify-center text-cream hover:bg-gold hover:text-brand-night transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="flex gap-4 mt-8 overflow-x-auto max-w-full px-4 scrollbar-hide py-2">
              {property.images.map((img: string, i: number) => (
                <button 
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative w-24 h-16 rounded-[4px] overflow-hidden border-2 transition-all flex-shrink-0 ${activeImageIndex === i ? 'border-gold p-0.5' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>

            <div className="mt-6 text-cream/40 text-[12px] tracking-widest uppercase font-bold">
              {activeImageIndex + 1} / {property.images.length} · {property.address}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-[8vw] py-8 grid lg:grid-cols-12 gap-16 relative">
        <div className="lg:col-span-8 space-y-16">
          {/* OVERVIEW */}
          <section>
            <div className="flex flex-wrap gap-12 py-8 border-y border-gold/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                  <Bed size={22} />
                </div>
                <div>
                  <div className="text-xl font-medium text-brand-night leading-none">{property.beds}</div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">Bedrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                  <Bath size={22} />
                </div>
                <div>
                  <div className="text-xl font-medium text-brand-night leading-none">{property.bath}</div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">Bathrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                  <Car size={22} />
                </div>
                <div>
                  <div className="text-xl font-medium text-brand-night leading-none">{property.car}</div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">Car Spaces</div>
                </div>
              </div>
            </div>
          </section>

          {/* DESCRIPTION */}
          <section>
            <h3 className="font-serif text-3xl font-light text-brand-night mb-8">About this <em className="italic text-gold not-italic">Property</em></h3>
            <div className="text-[16px] leading-[1.8] text-slate-600 space-y-6">
              <p>{property.description}</p>
              <p>Nestled in a quiet cul-de-sac, this home boasts a meticulously planned interior that emphasizes open spaces and natural light. The gourmet kitchen serves as the heart of the home, featuring premium appliances and an expansive island bench perfect for hosting family and friends.</p>
            </div>
          </section>

          {/* AMENITIES */}
          <section className="bg-white border border-gold/10 rounded-[12px] p-10">
            <h3 className="font-serif text-2xl font-light text-brand-night mb-10 flex items-center gap-3">
              <Star className="text-gold" size={24} /> 
              Premium <em className="italic text-gold not-italic">Features</em>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">
              {[
                { icon: <Wind size={20} />, label: 'Ducted AC' },
                { icon: <Shield size={20} />, label: 'Security System' },
                { icon: <Zap size={20} />, label: 'Solar Power' },
                { icon: <Wifi size={20} />, label: 'NBN Ready' },
                { icon: <Home size={20} />, label: 'Dishwasher' },
                { icon: <CheckCircle size={20} />, label: 'Large Shed' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="text-gold group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-[14px] text-brand-night tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* LOCATION */}
          <section>
             <h3 className="font-serif text-3xl font-light text-brand-night mb-8">Prime <em className="italic text-gold not-italic">Location</em></h3>
             <div className="bg-card rounded-[12px] border border-black/5 p-4 h-[400px] relative overflow-hidden group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13149.336446820527!2d138.68!3d-34.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzAwLjAiUyAxMzjCsDQwJzQ4LjAiRQ!5e0!3m2!1sen!2sau!4v1713346900000!5m2!1sen!2sau"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute top-8 right-8 bg-brand-night text-cream p-6 rounded-[8px] shadow-2xl border border-gold/30 max-w-[240px]">
                  <div className="text-gold text-[10px] tracking-[0.2em] uppercase mb-2 font-bold select-none">Area Map</div>
                  <div className="text-[13px] leading-relaxed text-cream/70">
                    Quiet residential street with close proximity to schools, shopping precincts, and public transport.
                  </div>
                </div>
             </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-4 lg:sticky lg:top-[180px] self-start space-y-8">
          <div className="bg-brand-night rounded-[12px] shadow-2xl p-8 border border-gold/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            
            <div className="relative z-10 space-y-6">
              <button 
                onClick={property.type === 'For Sale' ? onMakeOffer : undefined}
                className="w-full bg-gold text-brand-night py-5 px-6 rounded-[8px] text-[13px] font-bold tracking-[0.14em] uppercase transition-all hover:bg-gold-light hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3"
              >
                <FileText size={18} />
                <span>{property.type === 'For Sale' ? 'Make an Offer' : 'Apply Now'}</span>
              </button>
              <button className="w-full border border-white/20 text-cream py-5 px-6 rounded-[8px] text-[13px] font-bold tracking-[0.14em] uppercase transition-all hover:bg-white/5 flex items-center justify-center gap-3">
                <Calendar size={18} />
                <span>Book Inspection</span>
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10 space-y-10">
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-6">Listing Agents</p>
              
              {[
                {
                  name: "Nabin Kambang",
                  role: "Principal Director",
                  phone: "0452 198 640",
                  email: "nabin@aonerealestate.com.au",
                  image: "https://aonerealestate.com.au/wp-content/uploads/2023/07/img-9-1024x1024.jpg"
                },
                {
                  name: "Romarsh Hamal",
                  role: "Director & Land Agent",
                  phone: "0416 534 447",
                  email: "romarsh@aonerealestate.com.au",
                  image: "https://aonerealestate.com.au/wp-content/uploads/2023/07/cropped-img-14-scaled-1-1024x1024.jpg"
                }
              ].map((agent, index) => (
                <div key={index} className="group flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={agent.image} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-gold/30 group-hover:border-gold transition-colors"
                        alt={agent.name}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gold rounded-full flex items-center justify-center text-brand-night">
                        <Star size={10} fill="currentColor" />
                      </div>
                    </div>
                    <div>
                      <div className="text-cream font-medium text-[16px] group-hover:text-gold transition-colors">{agent.name}</div>
                      <div className="text-[10px] text-gold/70 uppercase tracking-[0.2em] font-bold mt-1">{agent.role}</div>
                    </div>
                  </div>
                  <div className="space-y-2.5 bg-white/5 p-4 rounded-[8px] border border-white/5 group-hover:border-gold/20 transition-all">
                    <a href={`tel:${agent.phone}`} className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors text-[13px] font-medium">
                      <Phone size={14} className="text-gold" /> {agent.phone}
                    </a>
                    <a href={`mailto:${agent.email}`} className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors text-[13px] font-medium lowercase">
                      <Mail size={14} className="text-gold" /> {agent.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-[12px] p-8 shadow-sm">
            <h4 className="font-serif text-[18px] font-medium text-brand-night mb-4">Inspection Times</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-black/5">
                <div className="text-sm font-medium">Saturday, 18 Apr</div>
                <div className="text-[12px] text-brand-night px-2 py-1 bg-gold/10 rounded-[2px] font-bold uppercase tracking-wider">10:45 AM - 11:15 AM</div>
              </div>
              <div className="flex justify-between items-center py-3">
                <div className="text-sm font-medium text-slate-400">Wednesday, 22 Apr</div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">TBA</div>
              </div>
            </div>
            <button className="w-full mt-6 text-[12px] tracking-widest uppercase text-gold font-bold hover:text-brand transition-colors flex items-center justify-center gap-2 group">
              Get notified of new times
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
