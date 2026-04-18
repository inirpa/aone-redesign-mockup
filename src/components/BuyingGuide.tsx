import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Wallet, 
  Search, 
  Eye, 
  ClipboardCheck, 
  FileSignature, 
  Landmark, 
  Truck, 
  PartyPopper,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface BuyingGuideProps {
  onBack: () => void;
  key?: string;
}

export default function BuyingGuide({ onBack }: BuyingGuideProps) {
  const steps = [
    {
      title: "Step 1: Define Your Goals",
      desc: "Determine what you are looking for in a home. Consider location, size, budget, and must-have features. List your priorities to help narrow down your search effectively.",
      icon: <Target className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Step 2: Organise Your Finances",
      desc: "Get a clear picture of your budget. Consult with a mortgage broker to understand your borrowing capacity and obtain pre-approval. Don't forget to account for stamp duty and legal fees.",
      icon: <Wallet className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Step 3: Start the Property Search",
      desc: "Begin your search online and through local networks. Use filters to match your defined goals and sign up for alerts to stay ahead of the market competition.",
      icon: <Search className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Step 4: Attend Property Inspections",
      desc: "Visit potential homes to get a feel for the property beyond the photos. Check for structural integrity, natural light, and the overall neighborhood vibe during different times of the day.",
      icon: <Eye className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Step 5: Due Diligence",
      desc: "Before making a move, perform thorough checks. This includes building and pest inspections, reviewing the Form 1 statement, and understanding any local zoning or encumbrances.",
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Step 6: Make an Offer",
      desc: "Once you find 'the one', it's time to submit a formal offer. We'll help you negotiate terms, price, and conditions to reach an agreement with the vendor.",
      icon: <FileSignature className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Step 7: Finalise Your Loan",
      desc: "Once your offer is accepted, work with your lender to finalize your mortgage application. Ensure all required documentation is provided promptly for formal approval.",
      icon: <Landmark className="w-8 h-8" />,
      color: "bg-sky-50 text-sky-600"
    },
    {
      title: "Step 8: Prepare for Settlement",
      desc: "Your conveyancer will handle the legal transfer of title. Arrange for insurance, utilities, and a final pre-settlement inspection to ensure the property is in the agreed condition.",
      icon: <Truck className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Step 9: Move In and Celebrate",
      desc: "Settlement day is here! Collect your keys, organize your move, and begin the next chapter of your life in your new Adelaide home. Welcome home!",
      icon: <PartyPopper className="w-8 h-8" />,
      color: "bg-pink-50 text-pink-600"
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
      <div className="max-w-6xl mx-auto px-[4vw]">
        {/* HERO SECTION */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-gold font-bold mb-10 hover:text-brand-night transition-colors group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <motion.div {...fadeInUp}>
            <p className="text-[12px] tracking-[0.3em] uppercase text-gold font-bold mb-6">Expert Resources</p>
            <h1 className="font-serif text-[clamp(48px,6vw,84px)] font-light leading-[1] text-brand-night mb-8">
              Your Guide to <em className="italic text-gold not-italic">Buying</em>
            </h1>
            <p className="text-[18px] leading-relaxed text-slate-500">
              Navigating the Adelaide property market can be complex. We've simplified the journey into 9 clear steps to help you secure your dream home with confidence.
            </p>
          </motion.div>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gold/10 rounded-[16px] p-10 hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative Number */}
              <div className="absolute -top-4 -right-4 font-serif text-[120px] font-bold text-black/[0.07] leading-none select-none group-hover:text-gold/[0.12] transition-colors">
                {index + 1}
              </div>

              <div className={`w-16 h-16 ${step.color} rounded-[12px] flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                {step.icon}
              </div>
              
              <h3 className="font-serif text-2xl font-medium text-brand-night mb-4 relative z-10 transition-colors group-hover:text-brand">
                {step.title}
              </h3>
              
              <p className="text-[15px] leading-relaxed text-slate-500 relative z-10 group-hover:text-brand-night/70 transition-colors">
                {step.desc}
              </p>

              {index < steps.length - 1 && (
                <div className="mt-8 pt-6 border-t border-gold/5 flex justify-end">
                   <div className="text-gold/30 group-hover:text-gold transition-colors">
                      <ArrowRight size={20} />
                   </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <motion.section 
          {...fadeInUp}
          className="mt-32 bg-brand-night rounded-[24px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light text-cream mb-8 leading-tight">
              Ready to start your <em className="italic text-gold not-italic">Search?</em>
            </h2>
            <p className="text-cream/60 mb-12 text-[16px] leading-relaxed">
              Our experts are ready to guide you through every step of this journey. Whether you're a first home buyer or an experienced investor, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="#contact" 
                onClick={onBack}
                className="bg-gold text-brand-night px-10 py-5 text-[14px] font-bold tracking-widest uppercase rounded-[4px] hover:bg-gold-light hover:scale-105 transition-all w-full sm:w-auto text-center"
              >
                Contact an Agent
              </a>
              <div className="flex items-center gap-3 text-gold text-[13px] font-bold tracking-widest uppercase">
                <ShieldCheck size={20} />
                RLA 309133 Trusted Service
              </div>
            </div>
          </div>
        </motion.section>

        {/* DOWNLOAD SECTION */}
        <motion.div 
          {...fadeInUp}
          className="mt-20 border border-gold/20 rounded-[12px] p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-white/40 backdrop-blur-sm"
        >
          <div className="flex items-center gap-6">
            <div className="bg-brand/10 p-4 rounded-full text-brand">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h4 className="font-serif text-[20px] font-medium text-brand-night">Comprehensive Buying Checklist</h4>
              <p className="text-[14px] text-slate-500 mt-1">Don't miss a detail. Download our printer-friendly guide.</p>
            </div>
          </div>
          <button className="bg-brand-night text-cream px-8 py-4 text-[12px] tracking-widest uppercase rounded-[2px] hover:bg-gold hover:text-brand-night transition-all whitespace-nowrap">
            Download PDF Guide
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
