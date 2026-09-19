"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  GraduationCap,
  Wallet,
  CalendarCheck,
  BarChart3,
} from "lucide-react";

const PURPLE = "var(--color-brand-dark)";
const PURPLE_LIGHT = "var(--color-brand)";
const PURPLE_BORDER = "var(--color-line)";
const EASE = [0.16, 1, 0.3, 1];

const AUTO_SLIDE_TIME = 3000;

/* One purple family, graduated dark → light, plus the site's single
   secondary accent (amber/gold) reserved for the "live" module —
   replaces the old unrelated rainbow of module colors. */
const STEPS = [
  {
    id: 1,
    title: "Lead Enquiry Management",
    desc: "Capture, organize, and track student enquiries through a cloud-based CRM.",
    tag: "Lead Capture",
    icon: Sparkles,
    color: "var(--color-purple-600)",
    bg: "var(--color-purple-50)",
  },
  {
    id: 2,
    title: "Lead Follow-up",
    desc: "Automated reminders and pre-built email templates for every enrollment stage.",
    tag: "Zero Leakage",
    icon: MessageCircle,
    color: "var(--color-purple-500)",
    bg: "var(--color-purple-100)",
  },
  {
    id: 3,
    title: "Academic Management",
    desc: "Manage courses, batch schedules, and fee structures from one platform.",
    tag: "Paperless",
    icon: GraduationCap,
    color: "var(--color-purple-800)",
    bg: "var(--color-purple-50)",
  },
  {
    id: 4,
    title: "Attendance Tracking",
    desc: "Monitor attendance with biometric integration and real-time notifications.",
    tag: "Live",
    icon: CalendarCheck,
    color: "var(--color-flame)",
    bg: "var(--color-flame-soft)",
  },
  {
    id: 5,
    title: "Transactions Tracking",
    desc: "A centralized dashboard for income, expenses, and outstanding dues.",
    tag: "Auto-reconciled",
    icon: Wallet,
    color: "var(--color-purple-700)",
    bg: "var(--color-purple-100)",
  },
  {
    id: 6,
    title: "Reports & Analytics",
    desc: "Live dashboards covering admissions, academics, attendance, and finances.",
    tag: "Insights",
    icon: BarChart3,
    color: "var(--color-purple-400)",
    bg: "var(--color-purple-50)",
  },
];

const SLIDES = [STEPS.slice(0, 3), STEPS.slice(3, 6)];

const slideVariants = {
  enter: {
    opacity: 0,
    x: 40,
  },

  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
      staggerChildren: 0.12,
    },
  },

  exit: {
    opacity: 0,
    x: -40,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
};

const cardVariants = {
  enter: {
    opacity: 0,
    y: 24,
  },

  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
};

function ModuleCard({ step }) {
  const Icon = step.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="
        flex
        flex-col
        rounded-[24px]
        border
        bg-surface-2
        p-6
        shadow-[0_10px_30px_-18px_rgba(23,18,31,0.16)]
        transition-transform
        duration-400
        hover:-translate-y-1
        sm:p-7
      "
      style={{
        borderColor: PURPLE_BORDER,
      }}
    >
      {/* Icon */}
      <div
        className="
          mb-5
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-[16px]
        "
        style={{
          backgroundColor: step.bg,
          color: step.color,
        }}
      >
        <Icon size={26} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold tracking-tight text-ink">
        {step.title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">
        {step.desc}
      </p>

      {/* Tag */}
      <span
        className="
          mt-5
          inline-flex
          w-fit
          items-center
          rounded-full
          px-3
          py-1
          text-[10.5px]
          font-bold
          uppercase
          tracking-widest
        "
        style={{
          backgroundColor: step.bg,
          color: step.color,
        }}
      >
        {step.tag}
      </span>
    </motion.div>
  );
}

export default function Journey() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const headerInView = useInView(headerRef, {
    once: true,
    amount: 0.4,
  });

  const isSectionInView = useInView(sectionRef, {
    amount: 0.35,
  });

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance only while the section is actually on screen
  useEffect(() => {
    if (!isSectionInView) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_SLIDE_TIME);

    return () => clearInterval(timer);
  }, [isSectionInView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-page-bg section-px section-pad"
    >
      <div className="mx-auto w-full max-w-[1280px]">

        {/* ================= HEADER ================= */}
        <motion.div
          ref={headerRef}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            headerInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            mb-12
            max-w-[700px]
            sm:mb-16
          "
        >
          {/* Eyebrow — same pattern every other section uses */}
         

          {/* Main Heading */}
          <h2 className="text-ink">
            Everything you need,{" "}
            <span className="display-italic">
              handled by one platform
            </span>
          </h2>

          {/* Description */}
          <p className="section-lead">
            From the first enquiry to the final report — six connected
            modules that carry a student through the entire journey.
          </p>
        </motion.div>

        {/* ================= SLIDER ================= */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-3
                sm:gap-7
              "
            >
              {SLIDES[activeSlide].map((step) => (
                <ModuleCard
                  key={step.id}
                  step={step}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= PROGRESS DOTS ================= */}
        <div
          className="
            mt-9
            flex
            items-center
            justify-start
            gap-2
          "
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveSlide(i)}
              aria-label={`Show slide ${i + 1}`}
              className="
                relative
                h-1.5
                overflow-hidden
                rounded-full
                transition-all
                duration-500
              "
              style={{
                width: i === activeSlide ? 34 : 10,
                background: PURPLE_BORDER,
              }}
            >
              {i === activeSlide && isSectionInView && (
                <motion.span
                  key={`progress-${activeSlide}`}
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: AUTO_SLIDE_TIME / 1000,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-y-0
                    left-0
                    rounded-full
                  "
                  style={{
                    background: PURPLE,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}