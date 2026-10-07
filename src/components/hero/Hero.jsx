"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  FileCheck2,
  MessageCircle,
  MessageSquareText,
  PhoneCall,
  UserPlus,
  Wallet,
} from "lucide-react";

import DemoDialog from "../demo/DemoDialog";
import Button from "../ui/Button";
import logo from "../../assets/xplore360.png";

const ORBIT_CHIPS = [
  {
    label: "Admissions",
    icon: UserPlus,
    className: "text-brand",
  },
  {
    label: "Attendance",
    icon: CalendarCheck,
    className: "text-brand-3",
  },
  {
    label: "Fees",
    icon: Wallet,
    className: "text-gold",
  },
  {
    label: "Communication",
    icon: MessageCircle,
    className: "text-brand",
  },
  {
    label: "Reports",
    icon: BarChart3,
    className: "text-brand-3",
  },
  {
    label: "Exams",
    icon: FileCheck2,
    className: "text-gold",
  },
  {
    label: "Support",
    icon: PhoneCall,
    className: "text-brand",
  },
  {
    label: "Messages",
    icon: MessageSquareText,
    className: "text-brand-3",
  },
];

const STATS = [
  {
    value: 100,
    suffix: "+",
    label: "Institutes",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Students",
  },
  {
    value: 12,
    suffix: "+",
    label: "Years",
  },
];

const EASE = [0.16, 1, 0.3, 1];

/* ============================================================
   ANIMATED NUMBER
============================================================ */

function AnimatedNumber({ value, suffix = "" }) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: EASE,
      }}
    >
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

/* ============================================================
   ORBIT
============================================================ */

function Orbit() {
  /*
    Increased from 54 to 62.

    This creates more distance between:
    - the center logo
    - the rotating chips

    So the chips don't pass directly over the logo.
  */
  const chipRadius = 60;

  return (
    <div
      className="
        relative
        mx-auto
        aspect-square
        w-full
        max-w-[min(72vw,270px)]
        sm:max-w-[min(64vw,380px)]
        lg:max-w-[440px]
      "
    >
      {/* ======================================================
          STRONG BACKGROUND GLOW
      ======================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[78%]
          w-[78%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(147,51,234,0.22),rgba(147,51,234,0.08)_38%,transparent_70%)]
          blur-3xl
        "
        animate={{
          scale: [0.94, 1.07, 0.94],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================================
          OUTER MOST STRONG RING
      ======================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          rounded-full
          border-[1.5px]
          border-brand/40
          shadow-[0_0_18px_rgba(147,51,234,0.16)]
        "
        animate={{
          rotate: 360,
          opacity: [0.72, 1, 0.72],
        }}
        transition={{
          rotate: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* ======================================================
          OUTER DASHED RING
      ======================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-[5.5%]
          z-[2]
          rounded-full
          border-[1.5px]
          border-dashed
          border-brand/45
          shadow-[0_0_16px_rgba(147,51,234,0.12)]
        "
        animate={{
          rotate: -360,
          opacity: [0.65, 0.95, 0.65],
        }}
        transition={{
          rotate: {
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* ======================================================
          INNER STRONG RING
      ======================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-[11%]
          z-[3]
          rounded-full
          border-[1.5px]
          border-brand/50
          shadow-[0_0_20px_rgba(147,51,234,0.15)]
        "
        animate={{
          rotate: 360,
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          rotate: {
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* ======================================================
          INNER DOTTED RING
      ======================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-[11%]
          z-[4]
          rounded-full
          border-[1.5px]
          border-dotted
          border-brand/55
          shadow-[0_0_18px_rgba(147,51,234,0.13)]
        "
        animate={{
          rotate: -360,
          opacity: [0.65, 1, 0.65],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* ======================================================
          DECORATIVE ARC
      ======================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-[17%]
          z-[4]
          rounded-full
          border-[2px]
          border-transparent
          border-t-brand/55
          border-r-brand/25
        "
        animate={{
          rotate: 360,
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          rotate: {
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* ======================================================
          CENTER GLOW
      ======================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-[5]
          h-[60%]
          w-[60%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(147,51,234,0.20),transparent_70%)]
          blur-2xl
        "
        animate={{
          scale: [0.94, 1.05, 0.94],
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================================
          LARGE LOGO
      ======================================================= */}

      <div
        className="
          absolute
          inset-[11%]
          z-[20]
          grid
          place-items-center
        "
      >
        {/* Logo glow */}

        <motion.span
          className="
            pointer-events-none
            absolute
            inset-[-18%]
            rounded-full
            bg-[radial-gradient(circle,rgba(147,51,234,0.24),transparent_66%)]
            blur-xl
          "
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.96, 1.05, 0.96],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Logo */}

        <motion.img
          src={logo}
          alt="Xplore IT Corp"
          className="
            relative
            z-[30]
            h-[120%]
            w-[120%]
            max-w-none
            object-contain
            drop-shadow-[0_20px_38px_rgba(76,29,149,0.32)]
          "
          initial={{
            opacity: 0,
            scale: 0.78,
          }}
          animate={{
            opacity: 1,
            scale: [1, 1.035, 1],
          }}
          transition={{
            opacity: {
              duration: 0.8,
              ease: EASE,
            },
            scale: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      {/* ======================================================
          ORBITING CHIPS
      ======================================================= */}

      <motion.div
        className="
          absolute
          inset-0
          z-[50]
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {ORBIT_CHIPS.map((chip, index) => {
          const angle =
            (index / ORBIT_CHIPS.length) * Math.PI * 2 -
            Math.PI / 2;

          /*
            Increased orbit radius.

            Before:
            54%

            Now:
            62%

            This keeps every chip farther away
            from the center logo while rotating.
          */

          const x =
            50 + chipRadius * Math.cos(angle);

          const y =
            50 + chipRadius * Math.sin(angle);

          const Icon = chip.icon;

          return (
            <div
              key={chip.label}
              className="
                absolute
                left-1/2
                top-1/2
              "
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              <motion.div
                className="
                  flex
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  gap-2.5
                  whitespace-nowrap
                  rounded-full
                  border
                  border-line
                  bg-surface-2
                  px-2.5
                  py-1.5
                  text-[9px]
                  font-medium
                  shadow-[0_14px_32px_-18px_rgba(23,18,31,0.5)]
                  backdrop-blur-md

                  sm:gap-2.5
                  sm:px-4
                  sm:py-2.5
                  sm:text-[13px]

                  lg:gap-2.5
                  lg:px-4
                  lg:py-2.5
                  lg:text-[13px]
                "
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 34,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span
                  className={`
                    grid
                    h-5
                    w-5
                    shrink-0
                    place-items-center
                    rounded-full
                    bg-page-bg
                    ${chip.className}

                    sm:h-6
                    sm:w-6

                    lg:h-6
                    lg:w-6
                  `}
                >
                  <Icon
                    size={11}
                    strokeWidth={2}
                    className="
                      sm:h-[13px]
                      sm:w-[13px]
                    "
                  />
                </span>

                <span className="text-ink">
                  {chip.label}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ============================================================
   HERO SECTION
============================================================ */

export default function Hero() {
  const [demoOpen, setDemoOpen] = React.useState(false);

  const container = {
    hidden: {},

    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 22,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: EASE,
      },
    },
  };

  return (
    <>
      <section
        id="hero"
        className="
    relative flex min-h-[92vh] items-center overflow-hidden
    bg-[#f5f4ee]
    pb-16 pt-[7.5rem]
    sm:pb-24 sm:pt-40
    md:pb-28 md:pt-44
  "
      >
        {/* ====================================================
            BACKGROUND GLOW
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_75%_48%,rgba(147,51,234,0.15),transparent_34%)]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_18%_80%,rgba(244,213,141,0.10),transparent_30%)]
          "
        />

        {/* ====================================================
            RULED BACKGROUND
        ===================================================== */}

        <div
          className="
            bg-ruled
            pointer-events-none
            absolute
            inset-0
            opacity-[0.55]
            [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]
          "
        />

        {/* ====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1240px]
            px-5
            sm:px-8
            lg:px-10
          "
        >
          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-24
              xl:gap-32
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="
                mx-auto
                w-full
                max-w-[620px]
                text-center

                lg:mx-0
                lg:text-left
              "
            >
              {/* Label */}

              <motion.div
                variants={item}
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                "
              />

              {/* =================================================
                  TITLE
              ================================================== */}

              <motion.h1
                variants={item}
                className="
    mx-auto mb-4 max-w-[480px]
    text-ink leading-[1.05] tracking-[-0.035em]
    text-[clamp(1.85rem,6.4vw,var(--text-h1))]
    sm:mx-0 sm:mb-5 sm:max-w-[640px]
    sm:text-[clamp(2.1rem,7.4vw,var(--text-h1))]
    lg:mx-0
  "
              >
                Complete Institute{" "}
                <span className="display-italic">
                  Management
                </span>
              </motion.h1>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <motion.p
                variants={item}
                className="
                  mx-auto
                  mb-6
                  max-w-[390px]
                  text-[13px]
                  leading-[1.65]
                  text-muted

                  sm:mx-0
                  sm:mb-8
                  sm:max-w-[530px]
                  sm:text-[16px]
                  sm:leading-[1.75]
                "
              >
                Admissions, students, fees, attendance, staff,
                exams and every parent message — gathered into a
                single system.
              </motion.p>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <motion.div
                variants={item}
                className="
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2.5

                  sm:justify-start
                  sm:gap-3
                "
              >
                <Button
                  onClick={() => setDemoOpen(true)}
                  className="
                    group
                    rounded-full
                    px-3.5
                    py-2.5
                    text-[11px]

                    sm:px-5
                    sm:py-3
                    sm:text-[13px]
                  "
                >
                  <span>
                    Book a free demo
                  </span>

                  <ArrowRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1

                      sm:h-4
                      sm:w-4
                    "
                  />
                </Button>

                <a
                  href="#modules"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-line
                    bg-white/50
                    px-3.5
                    py-2.5
                    text-[11px]
                    font-medium
                    text-ink
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-white

                    sm:gap-2
                    sm:px-5
                    sm:py-3
                    sm:text-[13px]
                  "
                >
                  See the modules

                  <ArrowRight
                    size={12}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1

                      sm:h-[15px]
                      sm:w-[15px]
                    "
                  />
                </a>
              </motion.div>

              {/* =================================================
                  STATS
              ================================================== */}

              <motion.div
                variants={item}
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-5
                  gap-y-3

                  sm:mt-10
                  sm:gap-x-7
                  sm:gap-y-4

                  lg:justify-start
                "
              >
                {STATS.map((stat, index) => (
                  <React.Fragment key={stat.label}>
                    {index > 0 && (
                      <span
                        className="
                          hidden
                          h-7
                          w-px
                          bg-line
                          sm:block
                        "
                      />
                    )}

                    <div className="text-center">
                      <div
                        className="
                          text-[16px]
                          font-semibold
                          tracking-[-0.02em]
                          text-ink

                          sm:text-[19px]
                        "
                      >
                        <AnimatedNumber
                          value={stat.value}
                          suffix={stat.suffix}
                        />
                      </div>

                      <div
                        className="
                          mt-0.5
                          text-[8px]
                          uppercase
                          tracking-[0.12em]
                          text-muted

                          sm:text-[10px]
                        "
                      >
                        {stat.label}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>

            {/* =================================================
                RIGHT ORBIT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: EASE,
              }}
              className="
                relative
                mx-auto
                mt-1
                w-full

                sm:mt-4

                lg:mt-0
              "
            >
              <Orbit />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          DEMO DIALOG
      ======================================================= */}

      <DemoDialog
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
      />
    </>
  );
}