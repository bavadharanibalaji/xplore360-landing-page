import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';
import DemoDialog from '../demo/DemoDialog';
import Button from '../ui/Button';

const EASE = [0.16, 1, 0.3, 1];

const ROWS = [
  {
    before: 'Registers, files and three different Excel sheets',
    after: 'One student record every department can see',
    gain: 'Single source of truth',
  },
  {
    before: 'Fee follow-ups done by memory and phone calls',
    after: 'Reminders and receipts sent automatically',
    gain: 'Faster collections',
  },
  {
    before: 'Reports compiled by hand, always a week late',
    after: 'Live dashboards, exported in one click',
    gain: 'Decisions on time',
  },
  {
    before: 'Admissions queued at the front desk on paper',
    after: 'Online applications that land in the pipeline',
    gain: 'Less desk load',
  },
  {
    before: 'Parents calling the office for every update',
    after: 'Attendance, fees and results on their phone',
    gain: 'Fewer calls, happier parents',
  },
];

export default function Transformation() {
  const ref = useRef(null);

  // Only becomes true when the section actually enters the viewport
  const inView = useInView(ref, {
    amount: 0.35,
    once: true,
  });

  const [flipped, setFlipped] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  /*
   * Start with BEFORE.
   * Once the user scrolls into the section,
   * automatically switch to AFTER after a short delay.
   */
  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => {
      setFlipped(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden section-pad"
    >
      <div className="mx-auto w-full max-w-[1080px] px-5 sm:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 max-w-[560px] md:mb-12"
        >
          
          <h2 className="text-ink">
            Built for <span className="display-italic">modern institutes</span>
          </h2>
          <p className="section-lead">
            See how everyday institute operations transform with Xplore 360.
          </p>
        </motion.div>

        {/* ================= TOGGLE ================= */}
        <div className="mb-8 flex justify-center">
          <div className="relative flex items-center gap-1 rounded-full border border-line bg-surface-2 p-1">

            {[
              { label: 'Before', value: false },
              { label: 'After Xplore 360', value: true },
            ].map((opt) => {
              const isOn = flipped === opt.value;

              return (
                <button
                  key={opt.label}
                  onClick={() => setFlipped(opt.value)}
                  className={`relative z-10 cursor-pointer rounded-full px-5 py-2 text-[13px] font-bold transition-colors duration-300 ${
                    isOn
                      ? 'text-page-bg'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {isOn && (
                    <motion.span
                      layoutId="switch-pill"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                      className={`absolute inset-0 -z-10 rounded-full ${
                        opt.value ? 'bg-brand' : 'bg-shell'
                      }`}
                    />
                  )}

                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= FLIP ROWS ================= */}
        <div className="overflow-hidden rounded-[22px] border border-line bg-surface-2 shadow-[0_50px_110px_-70px_rgba(23,18,31,0.5)]">

          {ROWS.map((r, i) => (
            <div
              key={i}
              className={`relative h-[92px] sm:h-[86px] ${
                i !== ROWS.length - 1
                  ? 'border-b border-line'
                  : ''
              }`}
              style={{ perspective: '1200px' }}
            >
              <motion.div
                className="relative h-full w-full"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateX: flipped ? 180 : 0,
                }}
                transition={{
                  duration: 0.85,
                  ease: EASE,
                  delay: flipped
                    ? i * 0.18
                    : (ROWS.length - i) * 0.05,
                }}
              >

                {/* ================= BEFORE ================= */}
                <div
                  className="absolute inset-0 flex items-center gap-4 bg-surface px-5 sm:px-8"
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-page-bg text-faint">
                    <X
                      size={14}
                      strokeWidth={3}
                    />
                  </span>

                  <span className="text-[13.5px] font-medium leading-snug text-faint line-through decoration-flame/40 sm:text-[15px]">
                    {r.before}
                  </span>

                  <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* ================= AFTER ================= */}
                <div
                  className="absolute inset-0 flex items-center gap-4 bg-[#D7CCE7] px-5 sm:px-8"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateX(180deg)',
                  }}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-shell">
                    <Check
                      size={14}
                      strokeWidth={3.2}
                    />
                  </span>

                  <span className="text-[13.5px] font-semibold leading-snug text-shell sm:text-[15px]">
                    {r.after}
                  </span>

                  <span className="ml-auto hidden shrink-0 rounded-full border border-brand-3/30 bg-white px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.14em] text-shell md:block">
                    {r.gain}
                  </span>
                </div>

              </motion.div>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-5 flex flex-col items-center justify-between gap-5 rounded-[20px] border border-line bg-surface p-6 sm:flex-row sm:p-7"
        >
          <div className="text-center sm:text-left">
            <p className="m-0 font-display text-[19px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[21px]">
              Five lines. One afternoon of setup.
            </p>

            <p className="m-0 mt-1.5 text-[13px] text-muted">
              We migrate your existing records for you.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => setIsDemoOpen(true)}
          >
            Book a demo

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Button>
        </motion.div>
      </div>

      {/* ================= DEMO ================= */}
      <DemoDialog
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </section>
  );
}