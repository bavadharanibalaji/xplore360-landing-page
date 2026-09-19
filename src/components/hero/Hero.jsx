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

/* ============================================================
   DATA
============================================================ */

const EASE = [0.16, 1, 0.3, 1];

const ORBIT_CHIPS = [
  { label: "Admissions", icon: UserPlus, color: "text-brand" },
  { label: "Attendance", icon: CalendarCheck, color: "text-brand-3" },
  { label: "Fees", icon: Wallet, color: "text-gold" },
  { label: "Communication", icon: MessageCircle, color: "text-brand" },
  { label: "Reports", icon: BarChart3, color: "text-brand-3" },
  { label: "Exams", icon: FileCheck2, color: "text-gold" },
  { label: "Support", icon: PhoneCall, color: "text-brand" },
  { label: "Messages", icon: MessageSquareText, color: "text-brand-3" },
];

const STATS = [
  { value: 100, suffix: "+", label: "Institutes" },
  { value: 50000, suffix: "+", label: "Students" },
  { value: 12, suffix: "+", label: "Years" },
];

/*
  Decorative rings around the logo.
  - spin: seconds for one full rotation
  - pulse: seconds for one opacity cycle
  - Border widths are thinner on mobile
*/

const RINGS = [
  {
    className:
      "inset-0 z-[1] border sm:border-[1.5px] border-brand/40 shadow-[0_0_18px_rgba(147,51,234,0.16)]",
    rotate: 360,
    spin: 40,
    opacity: [0.72, 1, 0.72],
    pulse: 4,
  },
  {
    className:
      "inset-[5.5%] z-[2] border sm:border-[1.5px] border-dashed border-brand/45 shadow-[0_0_16px_rgba(147,51,234,0.12)]",
    rotate: -360,
    spin: 28,
    opacity: [0.65, 0.95, 0.65],
    pulse: 3.5,
  },
  {
    className:
      "inset-[11%] z-[3] border sm:border-[1.5px] border-brand/50 shadow-[0_0_20px_rgba(147,51,234,0.15)]",
    rotate: 360,
    spin: 32,
    opacity: [0.7, 1, 0.7],
    pulse: 4.2,
  },
  {
    className:
      "inset-[11%] z-[4] border sm:border-[1.5px] border-dotted border-brand/55 shadow-[0_0_18px_rgba(147,51,234,0.13)]",
    rotate: -360,
    spin: 20,
    opacity: [0.65, 1, 0.65],
    pulse: 3.2,
  },
  {
    className:
      "inset-[17%] z-[4] border sm:border-2 border-transparent border-t-brand/55 border-r-brand/25",
    rotate: 360,
    spin: 18,
    opacity: [0.6, 1, 0.6],
    pulse: 3,
  },
];

/* Distance of the chips from the center */
const CHIP_RADIUS = 60;
const CHIP_ORBIT_DURATION = 34;

const pulseAnimation = (duration) => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut",
});

const spinAnimation = (duration) => ({
  duration,
  repeat: Infinity,
  ease: "linear",
});

/* ============================================================
   ANIMATED NUMBER
============================================================ */

function AnimatedNumber({ value, suffix = "" }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {value.toLocaleString()}
      {suffix}
    </motion.span>
  );
}

/* ============================================================
   ORBIT CHIP
============================================================ */

function OrbitChip({ chip, index }) {
  const angle =
    (index / ORBIT_CHIPS.length) * Math.PI * 2 - Math.PI / 2;

  const x = 50 + CHIP_RADIUS * Math.cos(angle);
  const y = 50 + CHIP_RADIUS * Math.sin(angle);

  const Icon = chip.icon;

  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {/* Counter-rotate so the label always stays upright */}
      <motion.div
        className="
          flex -translate-x-1/2 -translate-y-1/2 items-center
          gap-1.5 whitespace-nowrap rounded-full border border-line
          bg-surface-2 px-2 py-1 text-[8px] font-medium
          shadow-[0_14px_32px_-18px_rgba(23,18,31,0.5)] backdrop-blur-md

          sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-[13px]
          lg:gap-2.5 lg:px-4 lg:py-2.5 lg:text-[13px]
        "
        animate={{ rotate: -360 }}
        transition={spinAnimation(CHIP_ORBIT_DURATION)}
      >
        <span
          className={`
            grid h-4 w-4 shrink-0 place-items-center rounded-full bg-page-bg
            sm:h-6 sm:w-6 lg:h-6 lg:w-6
            ${chip.color}
          `}
        >
          <Icon
            size={9}
            strokeWidth={2}
            className="sm:h-[13px] sm:w-[13px]"
          />
        </span>

        <span className="text-ink">{chip.label}</span>
      </motion.div>
    </div>
  );
}

/* ============================================================
   ORBIT
============================================================ */

function Orbit() {
  return (
    <div
      className="
        relative mx-auto aspect-square w-full
        max-w-[min(48vw,175px)]
        sm:max-w-[min(64vw,380px)]
        lg:max-w-[440px]
      "
    >
      {/* Background glow */}
      <motion.div
        className="
          pointer-events-none absolute left-1/2 top-1/2 z-0
          h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-[radial-gradient(circle,rgba(147,51,234,0.22),rgba(147,51,234,0.08)_38%,transparent_70%)]
          blur-2xl sm:blur-3xl
        "
        animate={{
          scale: [0.94, 1.07, 0.94],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={pulseAnimation(5)}
      />

      {/* Rings */}
      {RINGS.map((ring, index) => (
        <motion.div
          key={index}
          className={`pointer-events-none absolute rounded-full ${ring.className}`}
          animate={{
            rotate: ring.rotate,
            opacity: ring.opacity,
          }}
          transition={{
            rotate: spinAnimation(ring.spin),
            opacity: pulseAnimation(ring.pulse),
          }}
        />
      ))}

      {/* Center glow */}
      <motion.div
        className="
          pointer-events-none absolute left-1/2 top-1/2 z-[5]
          h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-[radial-gradient(circle,rgba(147,51,234,0.20),transparent_70%)]
          blur-xl sm:blur-2xl
        "
        animate={{
          scale: [0.94, 1.05, 0.94],
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={pulseAnimation(4.5)}
      />

      {/* Logo */}
      <div className="absolute inset-[11%] z-[20] grid place-items-center">
        <motion.span
          className="
            pointer-events-none absolute inset-[-18%] rounded-full
            bg-[radial-gradient(circle,rgba(147,51,234,0.24),transparent_66%)]
            blur-lg sm:blur-xl
          "
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.96, 1.05, 0.96],
          }}
          transition={pulseAnimation(4.5)}
        />

        <motion.img
          src={logo}
          alt="Xplore IT Corp"
          className="
            relative z-[30] max-w-none object-contain
            h-[85%] w-[85%]
            sm:h-[120%] sm:w-[120%]
            drop-shadow-[0_10px_20px_rgba(76,29,149,0.3)]
            sm:drop-shadow-[0_20px_38px_rgba(76,29,149,0.32)]
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
            scale: pulseAnimation(4.5),
          }}
        />
      </div>

      {/* Orbiting chips */}
      <motion.div
        className="absolute inset-0 z-[50]"
        animate={{ rotate: 360 }}
        transition={spinAnimation(CHIP_ORBIT_DURATION)}
      >
        {ORBIT_CHIPS.map((chip, index) => (
          <OrbitChip
            key={chip.label}
            chip={chip}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* ============================================================
   HERO
============================================================ */

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

export default function Hero() {
  const [demoOpen, setDemoOpen] = React.useState(false);

  return (
    <>
      <section
        id="hero"
        className="
          relative flex min-h-[92vh] items-center overflow-hidden
          bg-[#f5f4ee]
          pb-10 pt-[6.5rem]
          sm:pb-16 sm:pt-32
          md:pt-36
        "
      >
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_48%,rgba(147,51,234,0.15),transparent_34%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_80%,rgba(244,213,141,0.10),transparent_30%)]" />

        {/* Ruled background */}
        <div className="bg-ruled pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

        {/* Main container */}
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div
            className="
              grid items-center
              gap-10
              sm:gap-14
              lg:grid-cols-[0.9fr_1.1fr] lg:gap-24
              xl:gap-32
            "
          >
            {/* ================= LEFT CONTENT ================= */}

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="
                mx-auto w-full max-w-[620px]
                text-center
                lg:mx-0 lg:text-left
              "
            >
              <motion.h1
                variants={item}
                className="
                  mx-auto mb-4 max-w-[480px]
                  text-ink leading-[1.05] tracking-[-0.035em]
                  text-[clamp(2.1rem,7.4vw,var(--text-h1))]
                  sm:mx-0 sm:mb-5 sm:max-w-[640px]
                  lg:mx-0
                "
              >
                Complete Institute{" "}
                <span className="display-italic">
                  Management
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="
                  mx-auto mb-6 max-w-[390px]
                  text-[13px] leading-[1.65] text-muted
                  sm:mx-0 sm:mb-8 sm:max-w-[530px]
                  sm:text-[16px] sm:leading-[1.75]
                "
              >
                Admissions, students, fees, attendance, staff, exams and every
                parent message — gathered into a single system.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={item}
                className="
                  flex flex-wrap items-center justify-center gap-2.5
                  sm:justify-start sm:gap-3
                "
              >
                <Button
                  onClick={() => setDemoOpen(true)}
                  className="
                    group rounded-full px-3.5 py-2.5 text-[11px]
                    sm:px-5 sm:py-3 sm:text-[13px]
                  "
                >
                  <span>Book a free demo</span>

                  <ArrowRight
                    size={13}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                      sm:h-4 sm:w-4
                    "
                  />
                </Button>

                {/* FIXED: Missing <a> opening tag */}
                <a
                  href="#modules"
                  className="
                    group inline-flex items-center gap-1.5 rounded-full
                    border border-line bg-white/50
                    px-3.5 py-2.5 text-[11px] font-medium text-ink
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:bg-white
                    sm:gap-2 sm:px-5 sm:py-3 sm:text-[13px]
                  "
                >
                  See the modules

                  <ArrowRight
                    size={12}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                      sm:h-[15px] sm:w-[15px]
                    "
                  />
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={item}
                className="
                  mt-7 flex flex-wrap items-center justify-center
                  gap-x-5 gap-y-3
                  sm:mt-10 sm:gap-x-7 sm:gap-y-4
                  lg:justify-start
                "
              >
                {STATS.map((stat, index) => (
                  <React.Fragment key={stat.label}>
                    {index > 0 && (
                      <span className="hidden h-7 w-px bg-line sm:block" />
                    )}

                    <div className="text-center">
                      <div
                        className="
                          text-[16px] font-semibold
                          tracking-[-0.02em] text-ink
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
                          mt-0.5 text-[8px]
                          uppercase tracking-[0.12em] text-muted
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

            {/* ================= RIGHT ORBIT ================= */}

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
                relative mx-auto mt-0 w-full
                sm:mt-4 lg:mt-0
              "
            >
              <Orbit />
            </motion.div>
          </div>
        </div>
      </section>

      <DemoDialog
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
      />
    </>
  );
}