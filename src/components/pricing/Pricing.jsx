import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Zap, Crown, Building2, ArrowRight } from 'lucide-react';
import DemoDialog from '../demo/DemoDialog';

const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small institutes and tuition centers just getting started.',
    monthlyPrice: 2999,
    yearlyPrice: 2399, // 20% discount
    icon: Zap,
    popular: false,
    buttonText: 'Start Free Trial',
    features: [
      'Up to 500 Students',
      'Basic Admission CRM',
      'Fee Collection & Receipts',
      'Manual Attendance Tracking',
      'Email Support',
    ],
    missingFeatures: [
      'WhatsApp Integration',
      'Custom Role-based Access',
      'Multi-Branch Management',
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'Everything you need to automate a growing school or college.',
    monthlyPrice: 5999,
    yearlyPrice: 4799,
    icon: Crown,
    popular: true, // This highlights the middle card
    buttonText: 'Get Started',
    features: [
      'Up to 2,000 Students',
      'Advanced Admission Workflows',
      'Automated Fee Reminders',
      'Biometric & App Attendance',
      'WhatsApp Business Integration',
      'Priority 24/7 Support',
    ],
    missingFeatures: [
      'Multi-Branch Management',
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom-built infrastructure for large educational trusts and universities.',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    icon: Building2,
    popular: false,
    buttonText: 'Book a Demo',
    features: [
      'Unlimited Students',
      'Multi-Branch Management',
      'Custom Role-Based Access',
      'Dedicated Account Manager',
      'Custom ERP Integrations',
      'On-Premise Deployment Option',
    ],
    missingFeatures: []
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    // FIX: Reduced overall section padding to fit inside 800px height screens
    <section id="pricing" ref={sectionRef} className="relative w-full py-10 lg:py-14 bg-page-bg overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // FIX: Reduced bottom margin
          className="text-center max-w-[680px] mx-auto mb-8 lg:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 mb-4 shadow-sm">
            <Sparkles size={13} className="text-[#7C3AED]" />
            <span className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-[#7C3AED]">
              Simple Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold text-ink leading-[1.2] tracking-tight mb-3 lg:mb-4">
            Plans that Scale with <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#9333EA] to-[#7C3AED] bg-clip-text text-transparent italic pr-2">Your Institute</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-muted font-medium leading-relaxed m-0 px-4">
            No hidden fees. No surprise charges. Choose the plan that best fits your current operational needs.
          </p>
        </motion.div>

        {/* --- MONTHLY / YEARLY TOGGLE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          // FIX: Reduced bottom margin to bring cards closer (offsetting the pt-6 we added below to prevent badge clipping)
          className="flex justify-center mb-4 lg:mb-12"
        >
          <div className="relative flex items-center p-1.5 bg-surface-2 border border-line shadow-sm rounded-full">
            
            <motion.div
              className="absolute top-1.5 bottom-1.5 w-[110px] sm:w-[130px] bg-[#7C3AED] rounded-full shadow-md"
              initial={false}
              animate={{ x: isYearly ? '100%' : '0%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />

            <button
              onClick={() => setIsYearly(false)}
              className={`relative z-10 w-[110px] sm:w-[130px] py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-bold rounded-full transition-colors duration-300 outline-none ${
                !isYearly ? 'text-white' : 'text-muted hover:text-ink'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 w-[110px] sm:w-[130px] py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-bold rounded-full transition-colors duration-300 outline-none flex items-center justify-center gap-1.5 ${
                isYearly ? 'text-white' : 'text-muted hover:text-ink'
              }`}
            >
              Yearly
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-extrabold transition-colors duration-300 ${
                isYearly ? 'bg-surface-2 text-[#7C3AED]' : 'bg-[#7C3AED]/10 text-[#7C3AED]'
              }`}>
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* --- PRICING CARDS GRID --- */}
        <div className="flex lg:grid lg:grid-cols-3 flex-nowrap overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-5 lg:gap-6 items-stretch lg:items-center max-w-[1050px] mx-auto pt-6 lg:pt-0 pb-8 lg:pb-0 px-5 sm:px-8 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {PRICING_PLANS.map((plan, index) => {
            const isPopular = plan.popular;
            const Icon = plan.icon;
            
            const price = plan.monthlyPrice === 'Custom' 
              ? 'Custom' 
              : `₹${isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1), ease: "easeOut" }}
                // FIX: Configured for horizontal scrolling on mobile (fixed width, shrink-0, snap-center)
                className={`relative flex flex-col h-full w-[85vw] sm:w-[340px] lg:w-full shrink-0 snap-center mx-auto rounded-[2rem] p-6 lg:p-8 transition-all duration-500 ${
                  isPopular 
                    ? 'bg-gradient-to-br from-[#7C3AED] via-[#6d28d9] to-[#7C3AED] text-white shadow-[0_24px_50px_-12px_rgba(124,58,237,0.4)] lg:scale-[1.03] z-10 border-0' 
                    : 'bg-surface-2 text-ink border border-line/80 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 z-0'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-2 text-[#7C3AED] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isPopular ? 'bg-surface-2/10 text-white' : 'bg-[#7C3AED]/10 text-[#7C3AED]'
                  }`}>
                    <Icon size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className={`text-xl font-extrabold tracking-tight ${isPopular ? 'text-white' : 'text-ink'}`}>
                    {plan.name}
                  </h3>
                </div>

                <p className={`text-[12.5px] leading-relaxed font-medium mb-6 min-h-[40px] ${
                  isPopular ? 'text-white/80' : 'text-muted'
                }`}>
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-end gap-1.5">
                    <AnimatePresence mode="wait">
                      <motion.h4 
                        key={price}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className={`text-4xl font-black tracking-tight ${isPopular ? 'text-white' : 'text-ink'}`}
                      >
                        {price}
                      </motion.h4>
                    </AnimatePresence>
                    {plan.monthlyPrice !== 'Custom' && (
                      <span className={`text-[13px] font-bold mb-1.5 ${isPopular ? 'text-white/70' : 'text-faint'}`}>
                        / month
                      </span>
                    )}
                  </div>
                  {/* Billed Annually Text */}
                  <div className="h-4 mt-1.5">
                    {isYearly && plan.monthlyPrice !== 'Custom' && (
                      <motion.span 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                        className={`text-[11px] font-bold ${isPopular ? 'text-[#C4B5FD]' : 'text-[#7C3AED]'}`}
                      >
                        Billed annually (Save 20%)
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Call to Action Button */}
                {/* FIX: Tightened button padding */}
                <button 
                  onClick={() => plan.id === 'enterprise' ? setIsDemoOpen(true) : null}
                  className={`w-full py-3 px-6 rounded-xl text-[13.5px] font-bold flex items-center justify-center gap-2 transition-all duration-300 group mb-6 ${
                    isPopular 
                      ? 'bg-surface-2 text-[#7C3AED] hover:bg-surface shadow-sm' 
                      : 'bg-line-soft text-ink hover:bg-[#7C3AED] hover:text-white hover:shadow-[0_8px_20px_-6px_rgba(124,58,237,0.4)]'
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight size={16} strokeWidth={2.5} className={`transition-transform duration-300 ${isPopular ? 'group-hover:translate-x-1' : 'group-hover:translate-x-1'}`} />
                </button>

                {/* Features List */}
                <div className="flex flex-col gap-3 mt-auto">
                  <p className={`text-[10px] font-extrabold uppercase tracking-widest ${isPopular ? 'text-white/60' : 'text-faint'}`}>
                    What's included
                  </p>
                  
                  {/* Included Features */}
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${isPopular ? 'text-white' : 'text-[#7C3AED]'}`} strokeWidth={2.5} />
                      <span className={`text-[13px] font-bold leading-snug ${isPopular ? 'text-white/95' : 'text-ink-soft'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}

                  {/* Missing Features */}
                  {plan.missingFeatures.map((feature, i) => (
                    <div key={`missing-${i}`} className="flex items-start gap-2.5 opacity-40">
                      <div className={`w-[16px] h-[16px] shrink-0 mt-0.5 flex items-center justify-center rounded-full border-[1.5px] ${isPopular ? 'border-line-soft/50' : 'border-slate-300'}`} />
                      <span className={`text-[13px] font-bold leading-snug ${isPopular ? 'text-white' : 'text-muted'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      <DemoDialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
}