"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  School,
  GraduationCap,
  BookOpen,
  Award,
  Rocket,
  Users,
  Building2,
  Check,
  ArrowRight,
} from "lucide-react";

const SECTORS = [
  {
    id: "schools",
    title: "Schools",
    icon: School,
    line: "K-12 campuses running admissions, attendance, fees and parent updates in one place.",
    inside: [
      "Class & section attendance",
      "Term fee plans with reminders",
      "Exam records and report cards",
      "Parent app for daily updates",
    ],
    scale: "Up to 5,000 students",
  },
  {
    id: "colleges",
    title: "Colleges & Universities",
    icon: GraduationCap,
    line: "The full student lifecycle across departments, semesters and administration.",
    inside: [
      "Department & semester structure",
      "Multi-programme admissions",
      "Faculty and staff records",
      "Management-level analytics",
    ],
    scale: "Multi-department",
  },
  {
    id: "coaching",
    title: "Coaching Centres",
    icon: BookOpen,
    line: "High enquiry volume, tight batches and daily performance tracking.",
    inside: [
      "Enquiry-to-admission pipeline",
      "Flexible batch timetables",
      "Daily attendance capture",
      "Test score tracking",
    ],
    scale: "High enquiry volume",
  },
  {
    id: "training",
    title: "IT & Training Institutes",
    icon: Award,
    line: "Short-cycle courses, trainers, certifications and placement follow-through.",
    inside: [
      "Course & trainer allocation",
      "Day-wise syllabus tracking",
      "Certification records",
      "Placement follow-up",
    ],
    scale: "Short-cycle courses",
  },
  {
    id: "skill",
    title: "Skill Development Centres",
    icon: Rocket,
    line: "Funded programmes that live or die by clean enrolment and outcome records.",
    inside: [
      "Batch enrolment records",
      "Assessment tracking",
      "Placement outcome logs",
      "Audit-ready exports",
    ],
    scale: "Outcome-driven",
  },
  {
    id: "tuition",
    title: "Tuition Centres",
    icon: Users,
    line: "Small batches, monthly fees and parents who want to know how it is going.",
    inside: [
      "Small-batch scheduling",
      "Monthly fee collection",
      "Individual progress notes",
      "WhatsApp parent updates",
    ],
    scale: "One or few branches",
  },
  {
    id: "trusts",
    title: "Educational Trusts",
    icon: Building2,
    line: "Central control across every campus in the group, with branch-level detail intact.",
    inside: [
      "Multi-branch dashboard",
      "Consolidated finance view",
      "Role-based branch access",
      "Group-wide reporting",
    ],
    scale: "Many campuses",
  },
];

/* =========================================================
   DESKTOP / TABLET AUTO SLIDE
   3.3 seconds
========================================================= */
const AUTO_SLIDE_TIME = 3300;

const SMOOTH_EASE = [0.16, 1, 0.3, 1];

export default function Industries() {
  const [open, setOpen] = useState(0);
  const sectionRef = useRef(null);

  // Section must actually be visible on screen before it is
  // allowed to auto-advance — this is what keeps the slide in
  // sync with scroll position instead of drifting silently
  // while the user is elsewhere on the page.
  const inView = useInView(sectionRef, { amount: 0.35 });

  /* =========================================================
     AUTO SLIDE — DESKTOP / TABLET ONLY, AND ONLY WHILE VISIBLE

     >= 768px  → AUTO SLIDE
     < 768px   → NO AUTO SLIDE
  ========================================================= */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    let timer = null;

    const startAutoSlide = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }

      // IMPORTANT:
      // Do not start auto-slide on mobile, and do not run it
      // while the section is scrolled out of view.
      if (!mediaQuery.matches || !inView) {
        return;
      }

      timer = setInterval(() => {
        setOpen((prev) => {
          const next = prev + 1;

          if (next >= SECTORS.length) {
            return 0;
          }

          return next;
        });
      }, AUTO_SLIDE_TIME);
    };

    // Start only for desktop/tablet, and only when in view
    startAutoSlide();

    // If user resizes between mobile and desktop,
    // correctly start/stop the auto-slide.
    const handleMediaChange = () => {
      startAutoSlide();
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      if (timer) {
        clearInterval(timer);
      }

      mediaQuery.removeEventListener(
        "change",
        handleMediaChange
      );
    };
  }, [inView]);

  /* =========================================================
     MANUAL SELECT
  ========================================================= */
  const handleSelect = (index) => {
    setOpen(index);
  };

  const activeSector = SECTORS[open] || SECTORS[0];

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative w-full overflow-hidden section-pad"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: SMOOTH_EASE,
          }}
          className="mb-7 sm:mb-9 md:mb-10"
        >
         
          <h2 className="max-w-[680px] text-ink">
            Built for{" "}
            <span className="display-italic">
              every kind of institute
            </span>
          </h2>

          <p className="section-lead">
            One flexible platform, shaped to how each kind of
            institute actually runs.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP / TABLET VIEW
            AUTO SLIDE = ON
        ===================================================== */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[0.92fr_1.08fr] gap-5 lg:gap-7">

            {/* =================================================
                LEFT — SECTOR LIST
            ================================================= */}
            <div className="relative">
              <div className="overflow-hidden rounded-[26px] border border-line bg-surface/70 p-2">

                {SECTORS.map((sector, index) => {
                  const Icon = sector.icon;
                  const isActive = index === open;

                  return (
                    <button
                      key={sector.id}
                      type="button"
                      onClick={() => handleSelect(index)}
                      className="group relative flex w-full items-center gap-4 rounded-[20px] px-5 py-4 text-left outline-none"
                    >
                      {/* ACTIVE BACKGROUND */}
                      {isActive && (
                        <motion.div
                          layoutId="industry-active"
                          className="absolute inset-0 rounded-[20px] bg-brand/[0.08]"
                          transition={{
                            duration: 0.65,
                            ease: SMOOTH_EASE,
                          }}
                        />
                      )}

                      {/* ICON */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1 : 0.94,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: SMOOTH_EASE,
                        }}
                        className={[
                          "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500",
                          isActive
                            ? "border-brand/30 bg-brand text-white"
                            : "border-line bg-surface-2 text-ink-soft group-hover:border-brand/20",
                        ].join(" ")}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                        />
                      </motion.div>

                      {/* TITLE */}
                      <div className="relative z-10 min-w-0 flex-1">
                        <motion.div
                          animate={{
                            x: isActive ? 3 : 0,
                          }}
                          transition={{
                            duration: 0.55,
                            ease: SMOOTH_EASE,
                          }}
                          className={[
                            "font-medium transition-colors duration-500",
                            isActive
                              ? "text-ink"
                              : "text-ink-soft group-hover:text-ink",
                          ].join(" ")}
                        >
                          {sector.title}
                        </motion.div>

                        <div className="mt-1 text-[11px] text-muted">
                          {sector.scale}
                        </div>
                      </div>

                      {/* ARROW */}
                      <motion.div
                        animate={{
                          x: isActive ? 0 : -4,
                          opacity: isActive ? 1 : 0.35,
                        }}
                        transition={{
                          duration: 0.55,
                          ease: SMOOTH_EASE,
                        }}
                        className="relative z-10 text-brand"
                      >
                        <ArrowRight size={17} />
                      </motion.div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                RIGHT — DETAIL PANEL
            ================================================= */}
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-line bg-[#D7CCE7]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSector.id}
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: SMOOTH_EASE,
                  }}
                  className="absolute inset-0 p-8 lg:p-10"
                >

                  {/* TOP */}
                  <div className="flex items-start justify-between gap-5">
                    <div>

                      {/* ICON */}
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                        <activeSector.icon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="max-w-[520px] text-3xl font-medium tracking-[-0.03em] text-ink lg:text-4xl">
                        {activeSector.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-4 max-w-[580px] text-[15px] leading-7 text-ink-soft">
                        {activeSector.line}
                      </p>
                    </div>

                    {/* SCALE */}
                    <div className="shrink-0 rounded-full border border-line bg-surface-2 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-muted">
                      {activeSector.scale}
                    </div>
                  </div>

                  {/* DIVIDER */}
                  <div className="my-8 h-px w-full bg-line" />

                  {/* FEATURES */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                    {activeSector.inside.map(
                      (item, itemIndex) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.55,
                            delay:
                              0.08 +
                              itemIndex * 0.05,
                            ease: SMOOTH_EASE,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                            <Check
                              size={12}
                              strokeWidth={2.5}
                            />
                          </div>

                          <span className="text-[13px] leading-5 text-ink-soft">
                            {item}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* DESKTOP PROGRESS */}
                  <div className="absolute bottom-8 left-8 right-8 lg:bottom-10 lg:left-10 lg:right-10">

                    <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.15em] text-muted">
                      <span>
                        {String(open + 1).padStart(
                          2,
                          "0"
                        )}{" "}
                        /{" "}
                        {String(
                          SECTORS.length
                        ).padStart(2, "0")}
                      </span>

                      <span>
                        Built around your workflow
                      </span>
                    </div>

                    <div className="h-[2px] w-full overflow-hidden rounded-full bg-line">
                      <motion.div
                        animate={{
                          width: `${
                            ((open + 1) /
                              SECTORS.length) *
                            100
                          }%`,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: SMOOTH_EASE,
                        }}
                        className="h-full bg-brand"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE VIEW
            AUTO SLIDE = COMPLETELY OFF
            MANUAL ONLY
        ===================================================== */}
        <div className="md:hidden">
          <div className="flex flex-col gap-2.5">

            {SECTORS.map((sector, index) => {
              const Icon = sector.icon;
              const isOpen = index === open;

              return (
                <motion.div
                  key={sector.id}
                  layout
                  transition={{
                    layout: {
                      duration: 0.65,
                      ease: SMOOTH_EASE,
                    },
                  }}
                  className={[
                    "overflow-hidden rounded-[14px] border bg-surface transition-colors duration-500 sm:rounded-[16px]",
                    isOpen
                      ? "border-brand/25"
                      : "border-line",
                  ].join(" ")}
                >

                  {/* =========================================
                      MOBILE HEADER
                  ========================================= */}
                  <button
                    type="button"
                    onClick={() => {
                      /*
                       * MOBILE IS MANUAL ONLY.
                       *
                       * No timer runs on mobile.
                       *
                       * Tap open card → open.
                       * Tap same card → close.
                       */
                      if (isOpen) {
                        setOpen(-1);
                      } else {
                        setOpen(index);
                      }
                    }}
                    className="relative flex w-full items-center gap-3 px-3.5 py-3.5 text-left outline-none sm:gap-4 sm:p-4"
                  >

                    {/* ACTIVE BACKGROUND */}
                    {isOpen && (
                      <motion.div
                        layoutId="mobile-active"
                        className="absolute inset-0 bg-brand/[0.045]"
                        transition={{
                          duration: 0.65,
                          ease: SMOOTH_EASE,
                        }}
                      />
                    )}

                    {/* ICON */}
                    <motion.div
                      animate={{
                        scale: isOpen ? 1 : 0.94,
                        rotate: isOpen ? 0 : -2,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: SMOOTH_EASE,
                      }}
                      className={[
                        "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] border sm:h-10 sm:w-10",
                        isOpen
                          ? "border-brand/20 bg-brand text-white"
                          : "border-line bg-surface-2 text-ink-soft",
                      ].join(" ")}
                    >
                      <Icon
                        size={15}
                        className="sm:hidden"
                        strokeWidth={1.8}
                      />

                      <Icon
                        size={17}
                        className="hidden sm:block"
                        strokeWidth={1.8}
                      />
                    </motion.div>

                    {/* TITLE */}
                    <div className="relative z-10 min-w-0 flex-1">
                      <motion.div
                        animate={{
                          x: isOpen ? 2 : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: SMOOTH_EASE,
                        }}
                        className="truncate text-[14px] font-medium tracking-[-0.01em] text-ink sm:text-[16px]"
                      >
                        {sector.title}
                      </motion.div>

                      <div className="mt-0.5 truncate text-[8px] uppercase tracking-[0.08em] text-muted sm:text-[9px]">
                        {sector.scale}
                      </div>
                    </div>

                    {/* PLUS */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 45 : 0,
                        scale: isOpen ? 1 : 0.95,
                      }}
                      transition={{
                        duration: 0.55,
                        ease: SMOOTH_EASE,
                      }}
                      className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-[16px] text-ink-soft sm:h-8 sm:w-8"
                    >
                      +
                    </motion.div>
                  </button>

                  {/* =========================================
                      MOBILE CONTENT
                  ========================================= */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.65,
                            ease: SMOOTH_EASE,
                          },
                          opacity: {
                            duration: 0.4,
                            ease: "easeOut",
                          },
                        }}
                      >
                        <div className="px-3.5 pb-4 pt-0 sm:px-4 sm:pb-5">

                          {/* DIVIDER */}
                          <div className="mb-3 h-px bg-line" />

                          {/* DESCRIPTION */}
                          <motion.p
                            initial={{
                              opacity: 0,
                              y: 6,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.5,
                              delay: 0.08,
                              ease: SMOOTH_EASE,
                            }}
                            className="max-w-[620px] text-[11.5px] leading-[1.6] text-ink-soft sm:text-[13px]"
                          >
                            {sector.line}
                          </motion.p>

                          {/* FEATURES */}
                          <div className="mt-3 grid grid-cols-1 gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-2.5">

                            {sector.inside.map(
                              (item, itemIndex) => (
                                <motion.div
                                  key={item}
                                  initial={{
                                    opacity: 0,
                                    x: -6,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    duration: 0.45,
                                    delay:
                                      0.12 +
                                      itemIndex *
                                        0.055,
                                    ease: SMOOTH_EASE,
                                  }}
                                  className="flex items-center gap-2"
                                >
                                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand sm:h-[18px] sm:w-[18px]">
                                    <Check
                                      size={9}
                                      strokeWidth={2.7}
                                    />
                                  </div>

                                  <span className="text-[11px] leading-4 text-ink-soft sm:text-[12.5px]">
                                    {item}
                                  </span>
                                </motion.div>
                              )
                            )}

                          </div>

                          {/* MOBILE PROGRESS */}
                          <div className="mt-4 sm:mt-5">

                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-[8px] uppercase tracking-[0.13em] text-muted">
                                {String(
                                  index + 1
                                ).padStart(2, "0")}{" "}
                                /{" "}
                                {String(
                                  SECTORS.length
                                ).padStart(2, "0")}
                              </span>

                              <span className="text-[8px] uppercase tracking-[0.13em] text-muted">
                                {sector.scale}
                              </span>
                            </div>

                            <div className="h-[2px] w-full overflow-hidden rounded-full bg-line">
                              <motion.div
                                initial={{
                                  width: 0,
                                }}
                                animate={{
                                  width: `${
                                    ((index + 1) /
                                      SECTORS.length) *
                                    100
                                  }%`,
                                }}
                                transition={{
                                  duration: 0.8,
                                  ease: SMOOTH_EASE,
                                }}
                                className="h-full bg-brand"
                              />
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}