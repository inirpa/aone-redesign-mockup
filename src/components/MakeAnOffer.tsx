import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  DollarSign, 
  Calendar, 
  FileCheck, 
  User, 
  Mail, 
  Phone, 
  Home, 
  MessageSquare,
  ChevronLeft,
  ShieldCheck,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface MakeAnOfferProps {
  onBack: () => void;
  initialAddress?: string;
  key?: string;
}

export default function MakeAnOffer({ onBack, initialAddress = '' }: MakeAnOfferProps) {
  const [formData, setFormData] = useState({
    propertyAddress: initialAddress,
    fullName: '',
    email: '',
    mobile: '',
    residentialAddress: '',
    offerPrice: '',
    deposit: '',
    settlementDays: '30',
    financeType: 'Finance',
    buildingInspection: false,
    pestInspection: false,
    subjectToSale: false,
    otherConditions: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.propertyAddress) newErrors.propertyAddress = 'Property address is required';
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.offerPrice) newErrors.offerPrice = 'Offer price is required';
    else if (isNaN(Number(formData.offerPrice.replace(/[^0-9]/g, '')))) newErrors.offerPrice = 'Please enter a valid price';
    if (!formData.deposit) newErrors.deposit = 'Deposit is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-[4vw] bg-cream pt-[90px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-gold/20 rounded-[12px] p-12 max-w-2xl w-full text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="text-gold" size={40} />
          </div>
          <h2 className="font-serif text-[40px] font-medium text-brand-night mb-4">Offer Lodged Successfully</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Thank you, <span className="text-brand-night font-bold">{formData.fullName}</span>. 
            Your formal interest in <span className="text-brand-night font-bold">{formData.propertyAddress}</span> has been securely submitted to our sales team. 
            We will review the terms and contact you shortly.
          </p>
          <button 
            onClick={onBack}
            className="bg-brand text-cream px-10 py-4 text-[13px] tracking-[0.2em] uppercase rounded-[2px] hover:bg-gold hover:text-brand-night transition-all font-bold shadow-lg"
          >
            Return to Homepage
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-cream pt-[120px] pb-24"
    >
      <div className="max-w-4xl mx-auto px-[4vw]">
        {/* HEADER */}
        <div className="mb-16">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-gold font-bold mb-8 hover:text-brand-night transition-colors group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Cancel & Return
          </button>
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-4">Official Submission</p>
          <h1 className="font-serif text-[clamp(40px,6vw,72px)] font-light leading-[1.05] text-brand-night mb-6">
            Make an <em className="italic text-gold not-italic font-serif font-light">Offer</em>
          </h1>
          <p className="text-[16px] leading-relaxed text-slate-500 max-w-2xl">
            This form is a formal expression of interest. Our agents will process your request and mediate between you and the vendor as per South Australian regulatory standards.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* SECTION 1: PROPERTY */}
          <section className="bg-white border border-gold/15 rounded-[12px] p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Building2 size={20} />
              </div>
              <h2 className="font-serif text-2xl font-medium text-brand-night">Property Information</h2>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500">Property Address</label>
              <input 
                type="text" 
                value={formData.propertyAddress}
                onChange={e => setFormData({ ...formData, propertyAddress: e.target.value })}
                className={`text-[15px] p-4 border rounded-[4px] bg-cream/30 focus:bg-white outline-none transition-all ${errors.propertyAddress ? 'border-red-400' : 'border-gold/30 focus:border-gold'}`}
                placeholder="Example: 12 Seventh Avenue, Ascot Park SA 5043"
              />
              {errors.propertyAddress && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.propertyAddress}</p>}
            </div>
          </section>

          {/* SECTION 2: PURCHASER */}
          <section className="bg-white border border-gold/15 rounded-[12px] p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <User size={20} />
              </div>
              <h2 className="font-serif text-2xl font-medium text-brand-night">Purchaser Details</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500">Full Name(s)</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className={`text-[15px] p-4 border rounded-[4px] bg-cream/30 focus:bg-white outline-none transition-all ${errors.fullName ? 'border-red-400' : 'border-gold/30 focus:border-gold'}`}
                  placeholder="John & Mary Smith"
                />
                {errors.fullName && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.fullName}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500">Mobile Number</label>
                <input 
                  type="tel" 
                  value={formData.mobile}
                  onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                  className={`text-[15px] p-4 border rounded-[4px] bg-cream/30 focus:bg-white outline-none transition-all ${errors.mobile ? 'border-red-400' : 'border-gold/30 focus:border-gold'}`}
                  placeholder="04xx xxx xxx"
                />
                {errors.mobile && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.mobile}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className={`text-[15px] p-4 border rounded-[4px] bg-cream/30 focus:bg-white outline-none transition-all ${errors.email ? 'border-red-400' : 'border-gold/30 focus:border-gold'}`}
                  placeholder="john@email.com"
                />
                {errors.email && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500">Residential Address</label>
                <input 
                  type="text" 
                  value={formData.residentialAddress}
                  onChange={e => setFormData({ ...formData, residentialAddress: e.target.value })}
                  className="text-[15px] p-4 border border-gold/30 rounded-[4px] bg-cream/30 focus:bg-white outline-none focus:border-gold transition-all"
                  placeholder="Current Home Address"
                />
              </div>
            </div>
          </section>

          {/* SECTION 3: OFFER TERMS */}
          <section className="bg-white border border-gold/15 rounded-[12px] p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <DollarSign size={20} />
              </div>
              <h2 className="font-serif text-2xl font-medium text-brand-night">Offer Terms</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500">Offer Price ($)</label>
                <input 
                  type="text" 
                  value={formData.offerPrice}
                  onChange={e => setFormData({ ...formData, offerPrice: e.target.value })}
                  className={`text-[15px] p-4 border rounded-[4px] bg-cream/30 focus:bg-white outline-none transition-all ${errors.offerPrice ? 'border-red-400' : 'border-gold/30 focus:border-gold'}`}
                  placeholder="e.g. 750,000"
                />
                {errors.offerPrice && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.offerPrice}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500">Deposit ($ or %)</label>
                <input 
                  type="text" 
                  value={formData.deposit}
                  onChange={e => setFormData({ ...formData, deposit: e.target.value })}
                  className={`text-[15px] p-4 border rounded-[4px] bg-cream/30 focus:bg-white outline-none transition-all ${errors.deposit ? 'border-red-400' : 'border-gold/30 focus:border-gold'}`}
                  placeholder="e.g. 10%"
                />
                {errors.deposit && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.deposit}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500">Settlement (Days)</label>
                <select 
                  value={formData.settlementDays}
                  onChange={e => setFormData({ ...formData, settlementDays: e.target.value })}
                  className="text-[15px] p-4 border border-gold/30 rounded-[4px] bg-cream/30 focus:bg-white outline-none focus:border-gold transition-all appearance-none"
                >
                  <option value="30">30 Days</option>
                  <option value="45">45 Days</option>
                  <option value="60">60 Days</option>
                  <option value="90">90 Days</option>
                  <option value="Custom">Other...</option>
                </select>
              </div>
            </div>

            <div className="mt-10">
              <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500 mb-4 block">Finance Conditions</label>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Finance', 'Cash Offer'].map(type => (
                  <label 
                    key={type}
                    className={`flex items-center justify-between p-4 border rounded-[4px] cursor-pointer transition-all ${formData.financeType === type ? 'bg-gold/10 border-gold shadow-sm' : 'bg-cream/20 border-gold/20 hover:border-gold/50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.financeType === type ? 'border-gold' : 'border-slate-300'}`}>
                        {formData.financeType === type && <div className="w-2 h-2 rounded-full bg-gold" />}
                      </div>
                      <span className="text-[14px] font-medium text-brand-night">{type}</span>
                    </div>
                    <input 
                      type="radio" 
                      name="financeType" 
                      value={type} 
                      className="hidden"
                      onChange={() => setFormData({ ...formData, financeType: type })}
                    />
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: CONDITIONS */}
          <section className="bg-white border border-gold/15 rounded-[12px] p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <FileCheck size={20} />
              </div>
              <h2 className="font-serif text-2xl font-medium text-brand-night">Special Conditions</h2>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { id: 'buildingInspection', label: 'Subject to Building' },
                { id: 'pestInspection', label: 'Subject to Pest' },
                { id: 'subjectToSale', label: 'Subject to Sale' }
              ].map(item => (
                <label 
                  key={item.id}
                  className={`flex items-center gap-3 p-4 border rounded-[4px] cursor-pointer transition-all ${formData[item.id as keyof typeof formData] ? 'bg-gold/10 border-gold' : 'bg-cream/20 border-gold/20'}`}
                >
                  <input 
                    type="checkbox" 
                    checked={formData[item.id as keyof typeof formData] as boolean}
                    onChange={e => setFormData({ ...formData, [item.id]: e.target.checked })}
                    className="w-4 h-4 accent-gold"
                  />
                  <span className="text-[13px] font-medium text-brand-night">{item.label}</span>
                </label>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-widest uppercase font-bold text-slate-500">Other Conditions / Comments</label>
              <textarea 
                value={formData.otherConditions}
                onChange={e => setFormData({ ...formData, otherConditions: e.target.value })}
                className="text-[15px] p-4 border border-gold/30 rounded-[4px] bg-cream/30 focus:bg-white outline-none focus:border-gold transition-all min-h-[120px]"
                placeholder="List any additional conditions or notes here..."
              />
            </div>
          </section>

          <div className="pt-8">
            <button 
              type="submit"
              className="w-full bg-brand text-cream py-6 rounded-[4px] font-serif text-2xl font-medium tracking-wide hover:bg-gold hover:text-brand-night transition-all shadow-xl group border-b-4 border-black/20"
            >
              Lodge Formal Offer
              <ArrowRight className="inline-ml-2 group-hover:translate-x-2 transition-transform h-6 w-6 ml-3 mb-1" />
            </button>
            <p className="text-center text-[12px] text-slate-400 mt-6 max-w-lg mx-auto leading-relaxed">
              By clicking "Lodge Formal Offer", you acknowledge that this is a notice of interest. A representative of A ONE Real Estate will contact you to verify details before legal documents are prepared.
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
