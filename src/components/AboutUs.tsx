import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  MapPin, 
  ShieldCheck, 
  Target, 
  Award, 
  Languages, 
  Briefcase, 
  Gem,
  CheckCircle2,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';

interface AboutUsProps {
  onBack: () => void;
  key?: string;
}

export default function AboutUs({ onBack }: AboutUsProps) {
  const values = [
    {
      title: "Local Market Specialists",
      desc: "Deeply rooted in Ascot Park and surrounding Adelaide suburbs, providing unparalleled local knowledge.",
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: "Client-Focused Approach",
      desc: "Our journey is yours. We prioritize clear communication, transparency, and personalizing every strategy.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Multicultural Property Partners",
      desc: "Proudly serving the diverse community of South Australia with multilingual expertise and cultural understanding.",
      icon: <Languages className="w-8 h-8" />
    },
    {
      title: "Full-Service Support",
      desc: "From residential sales to expert property management and buyer's advocacy, we cover all your real estate needs.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  const services = [
    {
      title: "Residential Property Sales",
      desc: "Achieving record-breaking results through tailored marketing and expert negotiation.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Expert Property Management",
      desc: "Maximizing yields and protecting your investment with rigorous tenant selection and care.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Buyer’s Advocacy",
      desc: "Helping you find and secure the perfect property at the right price, with none of the stress.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-cream pt-[120px] pb-24"
    >
      <div className="max-w-7xl mx-auto px-[4vw]">
        {/* HERO SECTION - REFINED LUXURY */}
        <section className="mb-32">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-gold font-bold mb-12 hover:text-brand-night transition-colors group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Return Home
          </button>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-[12px] tracking-[0.3em] uppercase text-gold font-bold mb-6">Our Legacy</p>
              <h1 className="font-serif text-[clamp(48px,6vw,84px)] font-light leading-[1] text-brand-night mb-8">
                Absolutely <em className="italic text-gold not-italic">Elevate</em> Your Journey
              </h1>
              <p className="text-[18px] leading-relaxed text-slate-500 mb-10 max-w-xl">
                A ONE Real Estate is more than an agency; we are your trusted property partners in Adelaide. Built on a foundation of integrity, excellence, and community focus.
              </p>
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif text-brand-night font-bold">RLA 309133</span>
                  <span className="text-[11px] tracking-widest uppercase text-gold font-bold mt-1">Accredited Agency</span>
                </div>
                <div className="w-[1px] h-12 bg-gold/20" />
                <div className="flex flex-col">
                  <span className="text-3xl font-serif text-brand-night font-bold">100%</span>
                  <span className="text-[11px] tracking-widest uppercase text-gold font-bold mt-1">Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative p-4 md:p-8"
            >
              {/* Decorative Shape Behind Image */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-2xl -z-10" />
              
              <div className="absolute top-0 right-0 w-full h-full border-t border-r border-gold/30 rounded-tr-[100px] -z-10 translate-x-8 -translate-y-8 h-[80%]" />
              <div className="absolute bottom-0 left-0 w-full h-full border-b border-l border-gold/30 rounded-bl-[100px] -z-10 -translate-x-8 translate-y-8 h-[80%]" />
              
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="A ONE Real Estate Team Collaborating"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover rounded-[12px] shadow-2xl transition-all duration-700 hover:scale-[1.02]"
              />
              
              {/* Floating Arrow Element */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden xl:block text-gold/40 animate-pulse">
                <svg width="40" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0V110M20 110L5 95M20 110L35 95" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                </svg>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-brand-night p-8 rounded-[8px] border-l-4 border-gold shadow-2xl hidden md:block">
                <p className="text-cream text-lg font-serif italic mb-2">"Community first, results always."</p>
                <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-bold">- Our Philosophy</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES - ORGANIC GRID */}
        <section className="mb-40 relative">
          {/* Connecting Line from Hero */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-gold/30 hidden md:block" />
          
          <div className="text-center mb-20 relative">
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light text-brand-night">
              Top 10 Reasons to <span className="italic text-gold">Trust Us</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6" />
            
            {/* Swirly Line Graphic */}
            <div className="absolute top-0 right-[15%] opacity-20 hidden lg:block">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                <path d="M0 30C30 30 30 0 60 0C90 0 90 60 120 60" stroke="#C9A96E" strokeWidth="1"/>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[12px] border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all group overflow-hidden relative"
              >
                {/* Visual Connector for next card */}
                {idx < 3 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-[1px] bg-gold/10 hidden lg:block" />
                )}
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="font-serif text-2xl font-medium text-brand-night mb-4">{value.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed">{value.desc}</p>
                <div className="absolute -bottom-4 -right-4 text-black/[0.03] font-serif text-8xl font-bold select-none group-hover:text-gold/[0.08] transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMPREHENSIVE SERVICES - ELEGANT LIST */}
        <section className="mb-40 bg-brand-night p-12 md:p-24 rounded-[32px] text-cream relative overflow-hidden shadow-2xl">
          {/* Abstract Circle Graphics */}
          <div className="absolute -top-20 -left-20 w-64 h-64 border border-gold/10 rounded-full" />
          <div className="absolute -top-10 -left-10 w-64 h-64 border border-gold/5 rounded-full" />
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="relative">
              {/* Guide Arrow */}
              <div className="absolute -left-12 top-0 hidden xl:block text-gold/30">
                <svg width="2" height="100" viewBox="0 0 2 100" fill="none">
                  <line x1="1" y1="0" x2="1" y2="100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                </svg>
              </div>
              
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-6">What We Do</p>
              <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-light mb-8 leading-tight">
                Our Comprehensive <br/>Real Estate <em className="italic text-gold not-italic">Services</em>
              </h2>
              <p className="text-cream/60 leading-relaxed text-lg mb-12">
                Whether you're looking for expert management solutions or the perfect new home, our team provides full-spectrum support across the Adelaide market.
              </p>
              <button 
                onClick={onBack}
                className="bg-gold text-brand-night px-10 py-5 text-[14px] font-bold tracking-widest uppercase rounded-[4px] hover:bg-gold-light transition-all flex items-center gap-3"
              >
                Explore Services
                <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="space-y-6">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeInUp}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[12px] hover:bg-white/10 transition-all group"
                >
                  <div className="flex gap-6 items-start">
                    <div className="mt-1 text-gold">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl font-medium mb-2 group-hover:text-gold transition-colors">{service.title}</h4>
                      <p className="text-cream/50 text-[15px] leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION & VISION - TYPOGRAPHIC FOCUSED */}
        <section className="max-w-4xl mx-auto mb-20">
          <motion.div {...fadeInUp} className="text-center">
            <div className="inline-flex p-4 rounded-full bg-gold/10 text-gold mb-8">
              <Gem size={32} />
            </div>
            <h2 className="font-serif text-[clamp(40px,5vw,72px)] italic text-brand-night mb-10">
              Ready to work with Adelaide's <br/> <span className="not-italic font-light">Trusted Real Estate Team?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-12 mt-16">
              <div className="flex items-center gap-3 text-brand-night font-bold uppercase tracking-widest text-[12px]">
                <CheckCircle2 className="text-gold" />
                Ethical Practice
              </div>
              <div className="flex items-center gap-3 text-brand-night font-bold uppercase tracking-widest text-[12px]">
                <CheckCircle2 className="text-gold" />
                Community Driven
              </div>
              <div className="flex items-center gap-3 text-brand-night font-bold uppercase tracking-widest text-[12px]">
                <CheckCircle2 className="text-gold" />
                Result Oriented
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
