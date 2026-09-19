"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Globe,
  Smartphone,
  BellRing,
  MessageSquare,
  ShieldCheck,
  Building2,
  ArrowUpRight,
} from "lucide-react";


import onlineadmissionImg from "../../assets/feature-highlights/online-admission.webp";
import parentaccessImg from "../../assets/feature-highlights/parent-mobile.webp";
import feeremindersImg from "../../assets/feature-highlights/fee-remainders.webp";
import whatsappintegrationImg from "../../assets/feature-highlights/whats-app.webp";
import rolebasedaccessImg from "../../assets/feature-highlights/role-based-access.webp";
import multibranchmanagementImg from "../../assets/feature-highlights/multi-branch.webp";

const EASE = [0.16, 1, 0.3, 1];
const CYCLE_MS = 3600;

const FEATURES = [
  {
    id: 1,
    side: "left",
    row: 0,
    num: "01",
    title: "Online Admission Portal",
    icon: Globe,
    tag: "Admissions",
    image: onlineadmissionImg,
  },
  {
    id: 2,
    side: "left",
    row: 1,
    num: "02",
    title: "Parent Mobile App",
    icon: Smartphone,
    tag: "Communication",
    image: parentaccessImg,
  },
  {
    id: 3,
    side: "left",
    row: 2,
    num: "03",
    title: "Automated Fee Reminders",
    icon: BellRing,
    tag: "Finance",
    image: feeremindersImg,
  },
  {
    id: 4,
    side: "right",
    row: 0,
    num: "04",
    title: "WhatsApp Integration",
    icon: MessageSquare,
    tag: "Communication",
    image: whatsappintegrationImg,
  },
  {
    id: 5,
    side: "right",
    row: 1,
    num: "05",
    title: "Role-Based Access",
    icon: ShieldCheck,
    tag: "Security",
    image: rolebasedaccessImg,
  },
  {
    id: 6,
    side: "right",
    row: 2,
    num: "06",
    title: "Multi-Branch Management",
    icon: Building2,
    tag: "Scale",
    image: multibranchmanagementImg,
  },
];

const LEFT = FEATURES.filter((f) => f.side === "left");
const RIGHT = FEATURES.filter((f) => f.side === "right");

/* =========================================================
   DESKTOP CONNECTOR
========================================================= */

const Connector = ({ active, side }) => {
  return (
    <div
      className={`
        pointer-events-none
        hidden
        lg:block
        absolute
        top-1/2
        h-px
        w-[clamp(22px,3vw,42px)]
        -translate-y-1/2
        ${side === "left" ? "right-[-42px]" : "left-[-42px]"}
      `}
    >
      <div
        className={`
          h-full
          w-full
          transition-all
          duration-500
          ${active ? "bg-brand" : "bg-line/50"}
        `}
      />

      {active && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: EASE,
          }}
          className={`
            absolute
            inset-0
            origin-${side === "left" ? "right" : "left"}
            bg-brand
          `}
        />
      )}

      <motion.span
        animate={
          active
            ? {
                scale: [1, 1.35, 1],
                opacity: [0.5, 1, 0.5],
              }
            : {
                scale: 1,
                opacity: 0.3,
              }
        }
        transition={
          active
            ? {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : {}
        }
        className={`
          absolute
          top-1/2
          h-2
          w-2
          -translate-y-1/2
          rounded-full
          ${side === "left" ? "right-0" : "left-0"}
          ${active ? "bg-brand" : "bg-line"}
        `}
      />
    </div>
  );
};

/* =========================================================
   DESKTOP NODE
========================================================= */

const Node = ({
  feature,
  active,
  onActivate,
  side,
  index,
  hasEntered,
}) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === "left" ? -100 : 100,
        scale: 0.94,
      }}
      animate={
        hasEntered
          ? {
              opacity: 1,
              x: 0,
              scale: 1,
              y: active ? -3 : 0,
            }
          : {
              opacity: 0,
              x: side === "left" ? -100 : 100,
              scale: 0.94,
            }
      }
      transition={{
        opacity: {
          duration: 0.65,
          delay: index * 0.14,
          ease: EASE,
        },
        x: {
          duration: 0.85,
          delay: index * 0.14,
          ease: EASE,
        },
        scale: {
          duration: 0.85,
          delay: index * 0.14,
          ease: EASE,
        },
        y: {
          duration: 0.35,
          ease: EASE,
        },
      }}
      onMouseEnter={() => onActivate(feature.id - 1)}
      className={`
        group
        relative
        min-h-[92px]
        overflow-visible
        rounded-[16px]
        border
        px-5
        py-4
        transition-all
        duration-500
        ${
          active
            ? "border-brand/40 bg-surface-2 shadow-[0_18px_45px_-28px_rgba(124,58,237,0.5)]"
            : "border-line/70 bg-[#D7CCE7] hover:border-brand/25 hover:bg-surface-2"
        }
      `}
    >
      {/* Number */}

      <div
        className={`
          absolute
          ${side === "left" ? "right-3" : "left-3"}
          top-3
          font-mono
          text-[9px]
          tracking-[0.12em]
          transition-colors
          ${active ? "text-brand" : "text-muted"}
        `}
      >
        {feature.num}
      </div>

      {/* Content */}

      <div className="flex items-center gap-3.5">
        <div
          className={`
            grid
            h-11
            w-11
            shrink-0
            place-items-center
            rounded-[12px]
            transition-all
            duration-500
            ${
              active
                ? "bg-brand text-white"
                : "bg-surface-2 text-brand"
            }
          `}
        >
          <Icon size={18} strokeWidth={1.9} />
        </div>

        <div className="min-w-0 pr-5">
          <span
            className={`
              mb-1
              block
              font-mono
              text-[8px]
              uppercase
              tracking-[0.16em]
              ${active ? "text-brand" : "text-muted"}
            `}
          >
            {feature.tag}
          </span>

          <h3
            className={`
              m-0
              font-display
              text-[15px]
              font-semibold
              leading-[1.2]
              tracking-[-0.025em]
              ${active ? "text-ink" : "text-ink/80"}
            `}
          >
            {feature.title}
          </h3>
        </div>

        <motion.div
          animate={{
            x: active ? 0 : -4,
            opacity: active ? 1 : 0,
          }}
          className={`
            ml-auto
            hidden
            shrink-0
            lg:block
            ${side === "left" ? "order-last" : "order-first"}
          `}
        >
          <ArrowUpRight size={16} className="text-brand" />
        </motion.div>
      </div>

      {/* Active bottom line */}

      <motion.div
        animate={{
          scaleX: active ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: EASE,
        }}
        className="
          absolute
          bottom-0
          left-4
          right-4
          h-[2px]
          origin-left
          rounded-full
          bg-brand
        "
      />

      <Connector active={active} side={side} />
    </motion.div>
  );
};

/* =========================================================
   DESKTOP CENTER TOWER
========================================================= */

const CenterTower = ({ current, active, hasEntered, setActive }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 25,
      }}
      animate={
        hasEntered
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
            }
          : {
              opacity: 0,
              scale: 0.9,
              y: 25,
            }
      }
      transition={{
        duration: 0.9,
        ease: EASE,
      }}
      className="
        relative
        min-h-[420px]
        overflow-hidden
        rounded-[26px]
        border
        border-brand/25
        bg-shell
        px-5
        py-6
      "
    >
      {/* Background dots */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.18]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Center glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand/10
          blur-[70px]
        "
      />

      {/* Connection points */}

      {[16.66, 50, 83.33].map((position) => (
        <React.Fragment key={position}>
          <span
            className="
              absolute
              left-0
              h-2
              w-2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-brand
            "
            style={{
              top: `${position}%`,
            }}
          />

          <span
            className="
              absolute
              right-0
              h-2
              w-2
              translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-brand
            "
            style={{
              top: `${position}%`,
            }}
          />
        </React.Fragment>
      ))}

      <div className="relative z-10 flex h-full flex-col">
        {/* Logo */}

        <div className="flex flex-col items-center">
          <div
            className="
              grid
              h-14
              w-14
              place-items-center
              rounded-[16px]
              border
              border-brand/20
              bg-surface-2
              shadow-[0_15px_35px_-20px_rgba(124,58,237,0.6)]
            "
          >
            <img
              src="/favicon.svg"
              alt="Xplore 360"
              className="h-8 w-8 object-contain"
            />
          </div>

          <h3
            className="
              mt-3
              font-display
              text-[17px]
              font-semibold
              tracking-[-0.03em]
              text-ink
            "
          >
            Xplore IT Corp
          </h3>

          <span
            className="
              mt-1
              font-mono
              text-[8px]
              uppercase
              tracking-[0.16em]
              text-muted
            "
          >
            Core platform · est. 2012
          </span>
        </div>

        {/* Current feature */}

        <div className="mt-7">
          <div
            className="
              relative
              h-[118px]
              overflow-hidden
              rounded-[16px]
              border
              border-line/60
              bg-surface-1
            "
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.title}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.55,
                  ease: EASE,
                }}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />
            </AnimatePresence>

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-16
                bg-gradient-to-t
                from-black/40
                to-transparent
              "
            />

            <span
              className="
                absolute
                bottom-3
                left-3
                rounded-full
                bg-brand
                px-2.5
                py-1
                font-mono
                text-[7px]
                uppercase
                tracking-[0.15em]
                text-white
              "
            >
              Now connected
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <p
                className="
                  mt-4
                  text-center
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.14em]
                  text-brand
                "
              >
                {current.tag}
              </p>

              <h4
                className="
                  mt-1.5
                  text-center
                  font-display
                  text-[18px]
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  text-ink
                "
              >
                {current.title}
              </h4>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress */}

        <div className="mt-auto pt-7">
          <div className="flex items-center justify-center gap-1.5">
            {FEATURES.map((feature, index) => (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActive(index)}
                className="
                  h-1
                  w-7
                  overflow-hidden
                  rounded-full
                  bg-line/50
                "
                aria-label={`Show ${feature.title}`}
              >
                <motion.span
                  animate={{
                    scaleX: active === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    block
                    h-full
                    origin-left
                    rounded-full
                    bg-brand
                  "
                />
              </button>
            ))}
          </div>

          <p
            className="
              mt-4
              text-center
              font-mono
              text-[7px]
              uppercase
              tracking-[0.18em]
              text-muted
            "
          >
            One login · one database · one bill
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================================================
   MOBILE FEATURE
========================================================= */

const MobileFeature = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-[20px]
        border
        border-line/70
        bg-surface-2
        shadow-[0_18px_45px_-32px_rgba(23,18,31,0.45)]
      "
    >
      {/* Mobile image */}

      <div
        className="
          relative
          h-[210px]
          w-full
          overflow-hidden
          bg-page-bg
          min-[390px]:h-[220px]
          sm:h-[260px]
        "
      >
        <motion.img
          key={feature.id}
          src={feature.image}
          alt={feature.title}
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.65,
            ease: EASE,
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-20
            bg-gradient-to-t
            from-black/25
            via-black/5
            to-transparent
          "
        />

        {/* Number */}

        <span
          className="
            absolute
            left-3.5
            top-3.5
            rounded-full
            border
            border-white/20
            bg-black/20
            px-2
            py-1.5
            font-mono
            text-[7px]
            font-medium
            tracking-[0.15em]
            text-white
            backdrop-blur-md
          "
        >
          {feature.num}
        </span>

        {/* Arrow */}

        <span
          className="
            absolute
            right-3.5
            top-3.5
            grid
            h-8
            w-8
            place-items-center
            rounded-full
            border
            border-white/20
            bg-black/20
            text-white
            backdrop-blur-md
          "
        >
          <ArrowUpRight size={13} strokeWidth={1.8} />
        </span>
      </div>

      {/* Mobile content */}

      <div
        className="
          px-4
          py-4
          min-[390px]:px-4.5
          min-[390px]:py-4.5
          sm:px-5
          sm:py-5
        "
      >
        <div className="flex items-start gap-3">
          {/* Icon */}

          <span
            className="
              grid
              h-9
              w-9
              shrink-0
              place-items-center
              rounded-[10px]
              bg-brand/10
              text-brand
              min-[390px]:h-10
              min-[390px]:w-10
            "
          >
            <Icon
              size={16}
              strokeWidth={2}
              className="min-[390px]:h-[17px] min-[390px]:w-[17px]"
            />
          </span>

          {/* Text */}

          <div className="min-w-0 flex-1">
            <span
              className="
                mb-1
                block
                font-mono
                text-[7px]
                uppercase
                tracking-[0.14em]
                text-brand
                min-[390px]:text-[7.5px]
              "
            >
              {feature.tag}
            </span>

            <h3
              className="
                m-0
                max-w-[300px]
                font-display
                text-[17px]
                font-semibold
                leading-[1.2]
                tracking-[-0.03em]
                text-ink
                min-[390px]:text-[18px]
                sm:text-[19px]
              "
            >
              {feature.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FeatureHighlights() {
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    amount: 0.2,
    once: true,
  });

  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (!inView || locked) return;

    const timer = setTimeout(() => {
      setActive(
        (previous) =>
          (previous + 1) % FEATURES.length
      );
    }, CYCLE_MS);

    return () => clearTimeout(timer);
  }, [active, inView, locked]);

  const current = FEATURES[active];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        section-pad
      "
      onMouseLeave={() => setLocked(false)}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-5
          sm:px-8
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10 md:mb-14"
        >
          
          <h2 className="text-ink">
            Built for{" "}
            <span className="display-italic">
              modern institutes
            </span>
          </h2>

          <p className="section-lead">
            One login, one database, one bill —
            everything your institute needs in a
            single, connected platform.
          </p>
        </motion.div>

        {/* =================================================
            DESKTOP
        ================================================= */}

        <div
          className="
            hidden
            grid-cols-1
            items-stretch
            gap-5
            lg:grid
            lg:grid-cols-[minmax(0,0.72fr)_300px_minmax(0,0.72fr)]
            lg:gap-[clamp(22px,3vw,42px)]
          "
        >
          {/* LEFT */}

          <div className="flex flex-col justify-between gap-5">
            {LEFT.map((feature, index) => (
              <Node
                key={feature.id}
                feature={feature}
                active={
                  active === feature.id - 1
                }
                index={index}
                hasEntered={inView}
                onActivate={(index) => {
                  setActive(index);
                  setLocked(true);
                }}
                side="left"
              />
            ))}
          </div>

          {/* CENTER */}

          <CenterTower
            current={current}
            active={active}
            hasEntered={inView}
            setActive={setActive}
          />

          {/* RIGHT */}

          <div className="flex flex-col justify-between gap-5">
            {RIGHT.map((feature, index) => (
              <Node
                key={feature.id}
                feature={feature}
                active={
                  active === feature.id - 1
                }
                index={index}
                hasEntered={inView}
                onActivate={(index) => {
                  setActive(index);
                  setLocked(true);
                }}
                side="right"
              />
            ))}
          </div>
        </div>

        {/* =================================================
            MOBILE
        ================================================= */}

        <div className="block lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.5,
                ease: EASE,
              }}
            >
              <MobileFeature
                feature={current}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}