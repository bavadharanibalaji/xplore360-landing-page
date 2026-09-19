import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, MessageCircleQuestion } from 'lucide-react';
import DemoDialog from '../demo/DemoDialog';

const EASE = [0.16, 1, 0.3, 1];

const FAQS = [
  {
    q: 'Is Xplore 360 suitable for all types of educational institutions?',
    a: 'Yes. Xplore 360 is a custom CRM built for schools, colleges, coaching centres, universities and training institutes of every size.',
  },
  {
    q: 'Can we manage admissions digitally?',
    a: 'Yes. The cloud platform handles enquiries, admissions, batches, attendance and transactions from one centralised place.',
  },
  {
    q: 'Can attendance be tracked digitally?',
    a: 'Yes. Digital attendance supports biometric integration, real-time reporting and instant notifications for administrators and parents.',
  },
  {
    q: "Is our institution's data secure?",
    a: 'Xplore 360 provides role-based access control, secure cloud infrastructure and regular backups, so your records stay protected.',
  },
  {
    q: 'Why choose Xplore 360 over other CRM software?',
    a: 'Twelve years of working directly with educational institutions went into it. We built Xplore 360 specifically to remove the bottlenecks in admissions, student management, attendance, fee collection and reporting.',
  },
  {
    q: "Can Xplore 360 be customised for our institution's needs?",
    a: "Yes. Our development team can tailor workflows, modules, permissions and reports to your institution's exact requirements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <section id="faq" className="relative w-full section-pad">
      <div className="section-px mx-auto w-full max-w-[1160px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* =================================================
              LEFT — sticky intro + CTA card
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            
            <h2 className="text-ink">
              Everything you were <span className="display-italic">about to ask</span>
            </h2>
            <p className="section-lead">
              Straight answers about admissions, attendance, security and how
              Xplore 360 fits your institution.
            </p>

            <div className="mt-8 flex flex-col gap-4 rounded-[18px] border border-line bg-surface p-5 sm:p-6">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-page-bg">
                <MessageCircleQuestion size={19} />
              </span>
              <div>
                <p className="m-0 font-display text-[16px] font-semibold text-ink">
                  Still have a question?
                </p>
                <p className="m-0 mt-1 text-[13px] leading-[1.6] text-muted">
                  Talk to someone who has set this up for a hundred institutes.
                </p>
              </div>
              <button
                onClick={() => setIsDemoOpen(true)}
                className="group/link inline-flex w-fit cursor-pointer items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-brand"
              >
                Talk to us
                <ArrowRight
                  size={14}
                  strokeWidth={2.4}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </button>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — accordion list
          ================================================= */}
          <div className="flex flex-col">
            {FAQS.map((item, i) => {
              const isOpen = i === open;

              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                  className={`
                    rounded-[16px] border px-4 py-1 transition-colors duration-300 sm:px-5
                    ${isOpen ? 'border-brand/30 bg-brand-wash' : 'border-line bg-surface-2'}
                    ${i > 0 ? 'mt-3' : ''}
                  `}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full cursor-pointer items-center gap-3 bg-transparent py-4 text-left outline-none sm:gap-4 sm:py-5"
                  >
                    <span
                      className={`
                        grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-[10px] font-bold
                        transition-colors duration-300
                        ${isOpen ? 'bg-brand text-page-bg' : 'bg-page-bg text-faint'}
                      `}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span
                      className={`
                        flex-1 text-[14.5px] font-semibold leading-[1.4] transition-colors duration-300 sm:text-[16.5px]
                        ${isOpen ? 'text-brand' : 'text-ink group-hover:text-brand'}
                      `}
                    >
                      {item.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className={`
                        grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors duration-300
                        ${isOpen ? 'border-brand bg-brand text-page-bg' : 'border-line text-muted group-hover:border-brand/40 group-hover:text-brand'}
                      `}
                    >
                      <Plus size={13} strokeWidth={2.5} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="m-0 max-w-[560px] pb-5 pl-10 text-[13px] leading-[1.65] text-muted sm:pl-11 sm:text-[14px]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <DemoDialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  );
}
