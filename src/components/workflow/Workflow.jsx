"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  FileCheck2,
  MessageCircle,
  MessageSquareText,
  PhoneCall,
  Sparkles,
  UserPlus,
  Wallet,
} from "lucide-react";

/* ============================================================
   MODULE DATA
============================================================ */

const MODULES = [
  {
    number: "01",
    title: "Lead Enquiry",
    short: "Capture every opportunity",
    description:
      "Bring enquiries from every channel into one organised system.",
    icon: MessageSquareText,
    position: "top-left",
  },
  {
    number: "02",
    title: "Follow-Up",
    short: "Never miss a conversation",
    description:
      "Track conversations, reminders and every important interaction.",
    icon: PhoneCall,
    position: "top-center-left",
  },
  {
    number: "03",
    title: "Admission",
    short: "Turn interest into enrolment",
    description:
      "Move prospects smoothly through the admission journey.",
    icon: FileCheck2,
    position: "top-center-right",
  },
  {
    number: "04",
    title: "Onboarding",
    short: "Start every student right",
    description:
      "Create complete student profiles and simplify onboarding.",
    icon: UserPlus,
    position: "top-right",
  },
  {
    number: "05",
    title: "Fee Collection",
    short: "Keep finances organised",
    description:
      "Track collections, pending fees and payment activity.",
    icon: Wallet,
    position: "bottom-left",
  },
  {
    number: "06",
    title: "Attendance",
    short: "Know what is happening",
    description:
      "Monitor attendance across students, classes and departments.",
    icon: CalendarCheck,
    position: "bottom-center-left",
  },
  {
    number: "07",
    title: "Communication",
    short: "Keep everyone connected",
    description:
      "Connect administrators, faculty, students and parents.",
    icon: MessageCircle,
    position: "bottom-center-right",
  },
  {
    number: "08",
    title: "Reports",
    short: "Turn activity into insight",
    description:
      "Transform institutional activity into meaningful insights.",
    icon: BarChart3,
    position: "bottom-right",
  },
];

/* ============================================================
   DESKTOP CARD POSITIONS
============================================================ */

const POSITIONS = {
  "top-left": {
    left: "4%",
    top: "10%",
  },

  "top-center-left": {
    left: "27%",
    top: "1%",
  },

  "top-center-right": {
    right: "27%",
    top: "1%",
  },

  "top-right": {
    right: "4%",
    top: "10%",
  },

  "bottom-left": {
    left: "4%",
    bottom: "10%",
  },

  "bottom-center-left": {
    left: "27%",
    bottom: "1%",
  },

  "bottom-center-right": {
    right: "27%",
    bottom: "1%",
  },

  "bottom-right": {
    right: "4%",
    bottom: "10%",
  },
};

/* ============================================================
   DESKTOP CONNECTION PATHS
============================================================ */

const PATHS = [
  "M145 170 C280 170 370 275 600 360",
  "M350 75 C405 180 480 265 600 360",
  "M850 75 C795 180 720 265 600 360",
  "M1055 170 C920 170 830 275 600 360",

  "M145 550 C280 550 370 445 600 360",
  "M350 645 C405 540 480 455 600 360",
  "M850 645 C795 540 720 455 600 360",
  "M1055 550 C920 550 830 445 600 360",
];

/* ============================================================
   WORKFLOW COMPONENT
============================================================ */

export default function Workflow() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  // Only auto-advance while this section is actually on screen.
  // This is the fix for the "sometimes it runs, sometimes it
  // doesn't" feeling — before, the timer kept ticking in the
  // background even when the section was nowhere near the
  // viewport, so it could land on a random step by the time
  // the user actually scrolled to it.
  const inView = useInView(sectionRef, { amount: 0.35 });

  const nextIndex =
    active < MODULES.length - 1 ? active + 1 : 0;

  /* ==========================================================
     AUTO CHANGE ACTIVE MODULE — driven by scroll visibility
  ========================================================== */

  useEffect(() => {
    if (isPaused || !inView) return;

    const timer = setInterval(() => {
      setActive((current) =>
        current < MODULES.length - 1 ? current + 1 : 0
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, inView]);

  // Reset to the first step each time the section re-enters
  // view so the sequence always starts from the beginning.
  useEffect(() => {
    if (inView) setActive(0);
  }, [inView]);

  /* ==========================================================
     SELECT MODULE
  ========================================================== */

  const selectStep = (index) => {
    setActive(index);
    setIsPaused(false);
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--color-page-bg)]
        section-pad
      "
    >
      {/* ========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Center glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[var(--color-brand)]/[0.055]
            blur-[120px]
          "
        />

        {/* Left glow */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-[15%]
            h-64
            w-64
            rounded-full
            bg-purple-500/[0.025]
            blur-[100px]
          "
        />

        {/* Right glow */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            right-0
            h-64
            w-64
            rounded-full
            bg-blue-500/[0.025]
            blur-[100px]
          "
        />
      </div>

      {/* ========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1320px]
          px-3
          sm:px-5
          md:px-8
          xl:px-10
        "
      >
        {/* ======================================================
            HEADING
        ======================================================= */}

        <div className="max-w-2xl">
          
          <motion.h2
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
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-ink"
          >
            From Enquiry to{" "}
            <span className="display-italic">
              Insights.
            </span>
          </motion.h2>
          <p className="section-lead">
            One connected pipeline, from the first enquiry to the reports that matter.
          </p>
        </div>

        {/* ========================================================
            DESKTOP VERSION
        ========================================================= */}

        <div className="hidden lg:block">
          <div
            className="
              mx-auto
              mt-8
              origin-top
              scale-[0.68]
              xl:scale-[0.76]
              2xl:scale-[0.82]
              -mb-[220px]
              xl:-mb-[170px]
              2xl:-mb-[125px]
            "
          >
            <div
              className="
                relative
                mx-auto
                h-[660px]
                w-full
                max-w-[1320px]
              "
            >
              {/* ==================================================
                  SVG CONNECTIONS
              ================================================== */}

              <svg
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  h-full
                  w-full
                "
                viewBox="0 0 1200 720"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                {PATHS.map((path, index) => {
                  const isActive = active === index;
                  const isNext = nextIndex === index;

                  return (
                    <React.Fragment key={index}>
                      <path
                        d={path}
                        stroke={
                          isActive || isNext
                            ? "var(--color-brand)"
                            : "var(--color-line)"
                        }
                        strokeWidth={
                          isActive
                            ? "3"
                            : isNext
                              ? "2"
                              : "1"
                        }
                        strokeOpacity={
                          isActive
                            ? "0.85"
                            : isNext
                              ? "0.55"
                              : "0.4"
                        }
                        className="transition-all duration-500"
                      />

                      {(isActive || isNext) && (
                        <motion.circle
                          r={isActive ? "4.5" : "3"}
                          fill="var(--color-brand)"
                          initial={{
                            offsetDistance: "0%",
                            opacity: 0,
                          }}
                          animate={{
                            offsetDistance: "100%",
                            opacity: [0, 1, 1, 0],
                          }}
                          transition={{
                            duration: isActive
                              ? 1.7
                              : 2.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            offsetPath: `path("${path}")`,
                          }}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </svg>

              {/* ==================================================
                  CENTER XPLORE ONE
              ================================================== */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-20
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                {/* Outer glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.1, 0.26, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -inset-16
                    rounded-full
                    bg-[var(--color-brand)]/[0.055]
                    blur-2xl
                  "
                />

                {/* Dashed outer orbit */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    -inset-16
                    rounded-full
                    border
                    border-dashed
                    border-[var(--color-brand)]/20
                  "
                />

                {/* Inner orbit */}
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    -inset-11
                    rounded-full
                    border
                    border-[var(--color-brand)]/15
                  "
                />

                {/* Orbit dot 1 */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-14"
                >
                  <span
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-2
                      w-2
                      -translate-x-1/2
                      rounded-full
                      bg-[var(--color-brand)]
                      shadow-[0_0_15px_var(--color-brand)]
                    "
                  />
                </motion.div>

                {/* Orbit dot 2 */}
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-10"
                >
                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-1.5
                      w-1.5
                      -translate-x-1/2
                      rounded-full
                      bg-[var(--color-brand)]/70
                    "
                  />
                </motion.div>

                {/* Orbit dot 3 */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-14"
                >
                  <span
                    className="
                      absolute
                      right-[8%]
                      top-1/2
                      h-1.5
                      w-1.5
                      -translate-y-1/2
                      rounded-full
                      bg-[var(--color-brand)]/50
                    "
                  />
                </motion.div>

                {/* ==================================================
                    ORBIT MODULE DOTS
                ================================================== */}

                <div className="absolute -inset-10">
                  {MODULES.map((item, index) => {
                    const angle =
                      (index / MODULES.length) *
                      Math.PI *
                      2;

                    const x = Math.cos(angle) * 78;
                    const y = Math.sin(angle) * 78;

                    const isActive = active === index;

                    return (
                      <motion.div
                        key={item.number}
                        animate={{
                          scale: isActive
                            ? [1, 1.3, 1]
                            : 1,
                          opacity: isActive
                            ? 1
                            : 0.45,
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: isActive
                            ? Infinity
                            : 0,
                        }}
                        className="
                          absolute
                          left-1/2
                          top-1/2
                        "
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                      >
                        <div
                          className={[
                            "h-2.5 w-2.5 rounded-full border",
                            isActive
                              ? "border-[var(--color-brand)] bg-[var(--color-brand)] shadow-[0_0_15px_var(--color-brand)]"
                              : "border-[var(--color-line)] bg-[var(--color-page-bg)]",
                          ].join(" ")}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* ==================================================
                    MAIN XPLORE CIRCLE
                ================================================== */}

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 20px 55px rgba(0,0,0,0.08)",
                      "0 25px 75px rgba(0,0,0,0.14)",
                      "0 20px 55px rgba(0,0,0,0.08)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    h-44
                    w-44
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--color-brand)]/30
                    bg-[var(--color-surface)]
                  "
                >
                  {/* Circle dashed ring */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-3
                      rounded-full
                      border
                      border-dashed
                      border-[var(--color-brand)]/10
                    "
                  />

                  {/* Pulse */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      h-12
                      w-12
                      rounded-full
                      bg-[var(--color-brand)]/10
                    "
                  />

                  {/* Sparkle icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 8, -8, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      z-10
                      mb-2.5
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-[var(--color-brand)]
                      text-white
                      shadow-lg
                    "
                  >
                    <Sparkles size={17} />
                  </motion.div>

                  {/* Brand */}
                  <div
                    className="
                      relative
                      z-10
                      font-display
                      text-[23px]
                      font-semibold
                      tracking-[-0.04em]
                      text-ink
                    "
                  >
                    XPLORE
                  </div>

                  <div
                    className="
                      relative
                      z-10
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.35em]
                      text-[var(--color-brand)]
                    "
                  >
                    ONE
                  </div>

                  {/* Current module */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={MODULES[active].number}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -6,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        relative
                        z-10
                        mt-2.5
                        text-center
                      "
                    >
                      <div
                        className="
                          text-[6px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-muted
                        "
                      >
                        Now processing
                      </div>

                      <div
                        className="
                          mt-1
                          text-[9px]
                          font-semibold
                          text-[var(--color-brand)]
                        "
                      >
                        {MODULES[active].title}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Live system */}
                  <div
                    className="
                      relative
                      z-10
                      mt-1.5
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-[var(--color-line)]
                      bg-[var(--color-page-bg)]
                      px-2.5
                      py-1
                    "
                  >
                    <motion.span
                      animate={{
                        opacity: [1, 0.3, 1],
                        scale: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-emerald-500
                      "
                    />

                    <span
                      className="
                        text-[6px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-muted
                      "
                    >
                      Live System
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* ==================================================
                  DESKTOP MODULE CARDS
              ================================================== */}

              {MODULES.map((item, index) => {
                const Icon = item.icon;

                const isActive = active === index;
                const isNext = nextIndex === index;
                const isCompleted = index < active;

                return (
                  <motion.button
                    key={item.number}
                    type="button"
                    onMouseEnter={() => {
                      setIsPaused(true);
                      setActive(index);
                    }}
                    onMouseLeave={() => {
                      setIsPaused(false);
                    }}
                    onFocus={() => {
                      setIsPaused(true);
                      setActive(index);
                    }}
                    onBlur={() => {
                      setIsPaused(false);
                    }}
                    onClick={() => selectStep(index)}
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.4,
                    }}
                    whileHover={{
                      scale: isActive
                        ? 1.04
                        : 1.025,
                      y: -4,
                    }}
                    className="
                      absolute
                      z-30
                      w-[205px]
                      text-left
                    "
                    style={POSITIONS[item.position]}
                  >
                    {/* Next badge */}
                    <AnimatePresence>
                      {isNext && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 6,
                            scale: 0.9,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: 6,
                            scale: 0.9,
                          }}
                          className="
                            absolute
                            -top-3
                            right-3
                            z-40
                            flex
                            items-center
                            gap-1.5
                            rounded-full
                            bg-[var(--color-brand)]
                            px-2.5
                            py-1.5
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-white
                            shadow-lg
                          "
                        >
                          <ArrowRight size={10} />
                          Next step
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Active glow */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCardGlow"
                        className="
                          absolute
                          -inset-2
                          rounded-[25px]
                          bg-[var(--color-brand)]/10
                          blur-xl
                        "
                      />
                    )}

                    {/* Card */}
                    <div
                      className={[
                        `
                          relative
                          min-h-[220px]
                          overflow-hidden
                          rounded-[23px]
                          border-2
                          bg-[var(--color-surface)]
                          p-4
                          transition-all
                          duration-300
                        `,
                        isActive
                          ? "border-[var(--color-brand)] shadow-[0_18px_50px_rgba(0,0,0,0.13)]"
                          : isNext
                            ? "border-[var(--color-brand)]/60 bg-[var(--color-brand)]/[0.04] shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                            : "border-[var(--color-line)] shadow-sm",
                      ].join(" ")}
                    >
                      {/* Background number */}
                      <span
                        className="
                          pointer-events-none
                          absolute
                          -right-2
                          -top-5
                          font-display
                          text-[82px]
                          font-bold
                          leading-none
                          tracking-[-0.08em]
                          text-[var(--color-ink)]/[0.03]
                        "
                      >
                        {item.number}
                      </span>

                      {/* Card top */}
                      <div
                        className="
                          relative
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <div
                          className={[
                            `
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-xl
                            `,
                            isActive
                              ? "bg-[var(--color-brand)] text-white shadow-md"
                              : isNext
                                ? "bg-[var(--color-brand)]/10 text-[var(--color-brand)]"
                                : "bg-[var(--color-page-bg)] text-muted",
                          ].join(" ")}
                        >
                          <Icon
                            size={17}
                            strokeWidth={1.8}
                          />
                        </div>

                        <span
                          className={[
                            `
                              font-display
                              text-[28px]
                              font-bold
                              tracking-[-0.06em]
                            `,
                            isActive
                              ? "text-[var(--color-brand)]"
                              : "text-[var(--color-ink)]/15",
                          ].join(" ")}
                        >
                          {item.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="relative mt-5">
                        <h3
                          className={[
                            `
                              font-display
                              font-semibold
                              leading-[1.05]
                              tracking-[-0.035em]
                            `,
                            isActive
                              ? "text-[23px] text-ink"
                              : "text-[19px] text-ink",
                          ].join(" ")}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={[
                            "mt-2 leading-5",
                            isActive
                              ? "text-[12px] font-medium text-[var(--color-brand)]"
                              : "text-[11px] text-muted",
                          ].join(" ")}
                        >
                          {item.short}
                        </p>
                      </div>

                      {/* Expanded active description */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              y: 8,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                          >
                            <p
                              className="
                                mt-3
                                border-t
                                border-[var(--color-line)]
                                pt-3
                                text-[10px]
                                leading-5
                                text-muted
                              "
                            >
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Completed */}
                      {isCompleted && !isActive && (
                        <CheckCircle2
                          size={15}
                          className="
                            absolute
                            bottom-3
                            right-3
                            text-emerald-500
                          "
                        />
                      )}

                      {/* Active indicator */}
                      <motion.div
                        animate={{
                          opacity: isActive
                            ? [0.6, 1, 0.6]
                            : 1,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isActive
                            ? Infinity
                            : 0,
                        }}
                        className={[
                          `
                            absolute
                            bottom-0
                            left-0
                            right-0
                            h-1
                          `,
                          isActive
                            ? "bg-[var(--color-brand)]"
                            : isNext
                              ? "bg-[var(--color-brand)]/50"
                              : "bg-transparent",
                        ].join(" ")}
                      />
                    </div>
                  </motion.button>
                );
              })}

              {/* Desktop center label */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[29%]
                  z-10
                  -translate-x-1/2
                "
              >
                <div
                  className="
                    rounded-full
                    border
                    border-[var(--color-line)]
                    bg-[var(--color-page-bg)]
                    px-3.5
                    py-1.5
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-muted
                    shadow-sm
                  "
                >
                  One source of truth
                </div>
              </div>

              {/* Desktop bottom label */}
              <div
                className="
                  absolute
                  bottom-[25%]
                  left-1/2
                  z-10
                  -translate-x-1/2
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[var(--color-line)]
                    bg-[var(--color-page-bg)]
                    px-3.5
                    py-1.5
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-muted
                    shadow-sm
                  "
                >
                  <CheckCircle2
                    size={10}
                    className="text-emerald-500"
                  />

                  Always connected
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE VERSION
            NO CIRCLE
            NO TAP TO EXPLORE
            NO 01 / 08
            NO BOTTOM SUMMARY
        ========================================================= */}

        <div
          className="
            mt-8
            lg:hidden
          "
        >
          {/* ======================================================
              MOBILE SECTION LABEL
          ======================================================= */}

          <div className="mb-3">
            <div
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[var(--color-brand)]
              "
            >
              Workflow modules
            </div>
          </div>

          {/* ======================================================
              MOBILE 2 COLUMN GRID
          ======================================================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-2
              sm:gap-2.5
            "
          >
            {MODULES.map((item, index) => {
              const Icon = item.icon;

              const isActive = active === index;
              const isNext = nextIndex === index;
              const isCompleted = index < active;

              return (
                <motion.button
                  key={item.number}
                  type="button"
                  onClick={() => selectStep(index)}
                  whileTap={{
                    scale: 0.975,
                  }}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.035,
                    duration: 0.35,
                  }}
                  className="
                    relative
                    min-w-0
                    text-left
                  "
                >
                  {/* ==================================================
                      MOBILE NEXT BADGE
                  ================================================== */}

                  <AnimatePresence>
                    {isNext && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.85,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.85,
                        }}
                        className="
                          absolute
                          -right-1
                          -top-1.5
                          z-20
                          flex
                          items-center
                          gap-0.5
                          rounded-full
                          bg-[var(--color-brand)]
                          px-1.5
                          py-0.5
                          text-[5.5px]
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          text-white
                          shadow-md
                        "
                      >
                        <ArrowRight size={7} />
                        Next
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* ==================================================
                      ACTIVE GLOW
                  ================================================== */}

                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveGlow"
                      className="
                        absolute
                        -inset-0.5
                        rounded-[15px]
                        bg-[var(--color-brand)]/10
                        blur-md
                      "
                    />
                  )}

                  {/* ==================================================
                      MOBILE CARD
                  ================================================== */}

                  <div
                    className={[
                      `
                        relative
                        min-h-[108px]
                        overflow-hidden
                        rounded-[15px]
                        border
                        bg-[var(--color-surface)]
                        p-2.5
                        transition-all
                        duration-300
                      `,
                      isActive
                        ? "border-2 border-[var(--color-brand)] shadow-[0_9px_25px_rgba(0,0,0,0.09)]"
                        : isNext
                          ? "border-[var(--color-brand)]/50 bg-[var(--color-brand)]/[0.035]"
                          : "border-[var(--color-line)] shadow-sm",
                    ].join(" ")}
                  >
                    {/* Large background number */}
                    <span
                      className="
                        pointer-events-none
                        absolute
                        -right-1
                        -top-2
                        font-display
                        text-[48px]
                        font-bold
                        leading-none
                        tracking-[-0.08em]
                        text-[var(--color-ink)]/[0.035]
                      "
                    >
                      {item.number}
                    </span>

                    {/* ==================================================
                        ICON + NUMBER
                    ================================================== */}

                    <div
                      className="
                        relative
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div
                        className={[
                          `
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-lg
                          `,
                          isActive
                            ? "bg-[var(--color-brand)] text-white"
                            : isNext
                              ? "bg-[var(--color-brand)]/10 text-[var(--color-brand)]"
                              : "bg-[var(--color-page-bg)] text-muted",
                        ].join(" ")}
                      >
                        <Icon
                          size={13}
                          strokeWidth={1.8}
                        />
                      </div>

                      <span
                        className={[
                          `
                            font-display
                            text-[18px]
                            font-bold
                            leading-none
                          `,
                          isActive
                            ? "text-[var(--color-brand)]"
                            : "text-[var(--color-ink)]/15",
                        ].join(" ")}
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* ==================================================
                        MOBILE CONTENT
                    ================================================== */}

                    <div className="relative mt-3">
                      <h3
                        className={[
                          `
                            font-display
                            font-semibold
                            leading-[1.08]
                            tracking-[-0.03em]
                          `,
                          isActive
                            ? "text-[14px] text-ink"
                            : "text-[13px] text-ink",
                        ].join(" ")}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={[
                          `
                            mt-1
                            line-clamp-1
                            text-[8px]
                            leading-3.5
                          `,
                          isActive
                            ? "font-medium text-[var(--color-brand)]"
                            : "text-muted",
                        ].join(" ")}
                      >
                        {item.short}
                      </p>
                    </div>

                    {/* ==================================================
                        COMPLETED ICON
                    ================================================== */}

                    {isCompleted && !isActive && (
                      <CheckCircle2
                        size={11}
                        className="
                          absolute
                          bottom-2
                          right-2
                          text-emerald-500
                        "
                      />
                    )}

                    {/* ==================================================
                        ACTIVE ARROW
                    ================================================== */}

                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -2,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="
                          absolute
                          bottom-2
                          right-2
                          text-[var(--color-brand)]
                        "
                      >
                        <ArrowRight size={11} />
                      </motion.div>
                    )}

                    {/* ==================================================
                        BOTTOM ACTIVE LINE
                    ================================================== */}

                    <motion.div
                      animate={{
                        opacity: isActive
                          ? [0.5, 1, 0.5]
                          : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: isActive
                          ? Infinity
                          : 0,
                      }}
                      className={[
                        `
                          absolute
                          bottom-0
                          left-0
                          right-0
                          h-0.5
                        `,
                        isActive
                          ? "bg-[var(--color-brand)]"
                          : isNext
                            ? "bg-[var(--color-brand)]/50"
                            : "bg-transparent",
                      ].join(" ")}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}