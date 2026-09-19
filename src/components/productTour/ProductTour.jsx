"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  CalendarCheck,
  Wallet,
  Smartphone,
  BarChart3,
  ArrowUpRight,
  Check,
} from "lucide-react";

import admissionImg from "../../assets/modules/admission-management.webp";
import feeImg from "../../assets/modules/fee-management.webp";
import attendanceImg from "../../assets/modules/attendance-management.webp";
import reportsImg from "../../assets/modules/reports-management.webp";
import studentImg from "../../assets/modules/student-management.webp";

const AUTO_DELAY = 2800;

const EASE = [0.22, 1, 0.36, 1];

const MODULES = [
  {
    id: "admission",
    number: "01",
    icon: UserPlus,
    name: "Admissions",
    label: "Lead Management",
    title: "Turn every enquiry into an opportunity.",
    description:
      "Capture enquiries, manage follow-ups and move prospective students smoothly towards admission.",
    image: admissionImg,
    points: ["Enquiries", "Follow-ups", "Admissions"],
  },
  {
    id: "students",
    number: "02",
    icon: CalendarCheck,
    name: "Students",
    label: "Student Management",
    title: "Everything about your students, connected.",
    description:
      "Keep student profiles, batches, academic details and daily activity organised in one place.",
    image: studentImg,
    points: ["Profiles", "Batches", "Academics"],
  },
  {
    id: "fees",
    number: "03",
    icon: Wallet,
    name: "Finance",
    label: "Fee Management",
    title: "Make fee management effortless.",
    description:
      "Track collections, instalments, pending payments and receipts without manual spreadsheets.",
    image: feeImg,
    points: ["Collections", "Instalments", "Receipts"],
  },
  {
    id: "attendance",
    number: "04",
    icon: Smartphone,
    name: "Attendance",
    label: "Daily Operations",
    title: "Attendance that keeps everyone connected.",
    description:
      "Record attendance quickly and keep daily student activity organised for your entire team.",
    image: attendanceImg,
    points: ["Daily Records", "Tracking", "Communication"],
  },
  {
    id: "reports",
    number: "05",
    icon: BarChart3,
    name: "Reports",
    label: "Business Insights",
    title: "See your entire institute at a glance.",
    description:
      "Turn everyday institute activity into clear information that helps your team make better decisions.",
    image: reportsImg,
    points: ["Analytics", "Performance", "Insights"],
  },
];

export default function ProductTour() {
  const sectionRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const active = MODULES[activeIndex];
  const ActiveIcon = active.icon;

  /* =========================================
     VIEWPORT DETECTION
  ========================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =========================================
     FAST + SMOOTH AUTO SLIDE
  ========================================= */

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % MODULES.length;
      });
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden section-pad"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[18%] h-[300px] w-[300px] rounded-full bg-brand/5 blur-[120px]" />

        <div className="absolute bottom-[10%] right-[-120px] h-[350px] w-[350px] rounded-full bg-brand-3/5 blur-[130px]" />
      </div>

      {/* =========================================
          DESKTOP / TABLET HEADER
      ========================================= */}

      <div className="mx-auto mb-8 hidden max-w-[1400px] px-5 sm:mb-10 sm:px-8 md:mb-12 md:block">
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.55,
            ease: EASE,
          }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="rule-label mb-4 inline-flex">
              Inside Xplore 360
            </span>

            <h2 className="max-w-[850px] text-ink">
              One platform.
              <span className="display-italic">
                {" "}
                Every operation.
              </span>
            </h2>
          </div>

          <p className="max-w-[320px] text-[13px] leading-[1.75] text-muted sm:text-sm">
            Everything your institute needs to manage students, operations
            and growth in one connected platform.
          </p>
        </motion.div>
      </div>

      {/* =========================================
          MOBILE HEADER
          ONLY TITLE
      ========================================= */}

      <div className="mb-7 px-5 md:hidden">
        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            ease: EASE,
          }}
          className="text-[30px] font-semibold leading-[1.04] tracking-[-0.045em] text-ink"
        >
          One platform.
          <span className="display-italic">
            {" "}
            Every operation.
          </span>
        </motion.h2>
      </div>

      {/* =========================================
          PRODUCT SCREEN
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.7,
          ease: EASE,
        }}
        className="relative w-full overflow-hidden border-y border-line bg-shell"
      >
        {/* =====================================
            IMAGE AREA
        ===================================== */}

        <div className="relative h-[500px] w-full sm:h-[590px] md:h-[680px] lg:h-[740px]">
          <AnimatePresence mode="sync">
            <motion.div
              key={active.id}
              initial={{
                opacity: 0,
                x: 55,
                scale: 1.02,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -40,
                scale: 1.01,
              }}
              transition={{
                duration: 0.55,
                ease: EASE,
              }}
              className="absolute inset-0"
            >
              <img
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover object-top"
              />

              {/* Main overlay */}
              <div className="absolute inset-0 bg-shell/20" />

              {/* Left readability gradient */}
              <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-shell via-shell/85 to-transparent md:w-[70%]" />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-shell/80 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* =====================================
              HUGE BACKGROUND NUMBER
          ===================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`number-${active.id}`}
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 25,
              }}
              transition={{
                duration: 0.55,
                ease: EASE,
              }}
              className="pointer-events-none absolute left-[-20px] top-[-45px] select-none font-display text-[190px] font-semibold leading-none tracking-[-0.12em] text-page-bg/[0.045] sm:text-[290px] md:left-[2%] md:top-[-70px] md:text-[400px] lg:text-[480px]"
            >
              {active.number}
            </motion.div>
          </AnimatePresence>

          {/* =====================================
              CONTENT
          ===================================== */}

          <div className="absolute inset-0 z-20">
            <div className="mx-auto flex h-full max-w-[1400px] items-center px-5 sm:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${active.id}`}
                  initial={{
                    opacity: 0,
                    x: -35,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: EASE,
                  }}
                  className="max-w-[530px]"
                >
                  {/* Category */}
                  <div className="mb-5 flex items-center gap-3 sm:mb-6">
                    <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-brand text-shell shadow-xl sm:h-11 sm:w-11">
                      <ActiveIcon size={17} />
                    </span>

                    <div>
                      <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-brand-3 sm:text-[8px]">
                        {active.number} / 05
                      </p>

                      <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-page-bg/50 sm:text-[9px]">
                        {active.label}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="max-w-[500px] font-display text-[33px] font-semibold leading-[1.04] tracking-[-0.045em] text-page-bg sm:text-[45px] md:text-[55px] lg:text-[62px]">
                    {active.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-[430px] text-[10px] leading-[1.8] text-page-bg/55 sm:mt-6 sm:text-[11px] md:text-[12px]">
                    {active.description}
                  </p>

                  {/* Points */}
                  <div className="mt-6 flex flex-wrap gap-1.5 sm:mt-7 sm:gap-2">
                    {active.points.map((point) => (
                      <span
                        key={point}
                        className="flex items-center gap-1.5 rounded-full border border-page-bg/10 bg-page-bg/5 px-2.5 py-1.5 backdrop-blur-md sm:px-3 sm:py-2"
                      >
                        <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-brand text-shell sm:h-4 sm:w-4">
                          <Check size={7} strokeWidth={3} />
                        </span>

                        <span className="text-[7px] font-semibold text-page-bg/65 sm:text-[8px]">
                          {point}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Module indicator */}
                  <div className="mt-7 flex items-center gap-3 sm:mt-9">
                    <span className="h-px w-8 bg-brand-3 sm:w-10" />

                    <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-page-bg/35 sm:text-[8px]">
                      {active.name}
                    </span>

                    <ArrowUpRight
                      size={10}
                      className="text-brand-3"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* =====================================
              DESKTOP RIGHT NAVIGATION
              HIDDEN ON MOBILE/TABLET
          ===================================== */}

          <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
            <div className="flex flex-col items-center gap-3">
              {MODULES.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${item.name}`}
                    className="group relative cursor-pointer"
                  >
                    {/* Label */}
                    <span
                      className={`absolute right-[48px] top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.14em] transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 opacity-100 text-page-bg/70"
                          : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-page-bg/40"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Icon */}
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-brand bg-brand text-shell shadow-[0_0_0_6px_rgba(255,255,255,0.05)]"
                          : "border-page-bg/15 bg-shell/35 text-page-bg/35 backdrop-blur-md group-hover:border-page-bg/30 group-hover:text-page-bg/70"
                      }`}
                    >
                      <Icon size={13} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================
              DESKTOP PROGRESS
              HIDDEN ON MOBILE
          ===================================== */}

          <div className="absolute bottom-7 left-5 z-30 hidden items-center gap-3 sm:left-8 md:flex lg:left-10">
            <span className="font-mono text-[8px] text-page-bg/30">
              {active.number}
            </span>

            <div className="flex items-center gap-1.5">
              {MODULES.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${item.name}`}
                  className="cursor-pointer"
                >
                  <motion.span
                    animate={{
                      width: index === activeIndex ? 30 : 5,
                      opacity: index === activeIndex ? 1 : 0.3,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: EASE,
                    }}
                    className="block h-[3px] rounded-full bg-page-bg"
                  />
                </button>
              ))}
            </div>

            <span className="font-mono text-[8px] text-page-bg/30">
              05
            </span>
          </div>
        </div>
      </motion.div>

      {/* =========================================
          BOTTOM INFO
          DESKTOP / TABLET ONLY
      ========================================= */}

      <div className="mx-auto mt-6 hidden max-w-[1400px] items-center justify-between px-5 sm:px-8 md:flex">
        <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-faint sm:text-[8px]">
          Built for everyday operations
        </span>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />

          <span className="text-[7px] font-semibold uppercase tracking-[0.14em] text-muted sm:text-[8px]">
            Xplore 360
          </span>
        </div>
      </div>
    </section>
  );
}