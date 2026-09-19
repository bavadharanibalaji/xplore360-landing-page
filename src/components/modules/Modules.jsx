"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Wallet,
  CalendarCheck,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import admissionsImg from "../../assets/modules/admission-management.webp";
import studentImg from "../../assets/modules/student-management.webp";
import feeImg from "../../assets/modules/fee-management.webp";
import attendanceImg from "../../assets/modules/attendance-management.webp";
import staffImg from "../../assets/modules/staff-management.webp";

const SLIDE_MS = 2600;
const EASE = [0.16, 1, 0.3, 1];

const MODULES = [
  {
    key: "admissions",
    label: "Admissions",
    title: "Admissions CRM",
    image: admissionsImg,
    Icon: Users,
  },
  {
    key: "student",
    label: "Students",
    title: "Student & Academics",
    image: studentImg,
    Icon: GraduationCap,
  },
  {
    key: "fee",
    label: "Transactions",
    title: "Fee & Transactions",
    image: feeImg,
    Icon: Wallet,
  },
  {
    key: "attendance",
    label: "Attendance",
    title: "Attendance Tracking",
    image: attendanceImg,
    Icon: CalendarCheck,
  },
  {
    key: "staff",
    label: "Staff",
    title: "Staff Management",
    image: staffImg,
    Icon: Briefcase,
  },
];

export default function Modules() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

  const sectionRef = useRef(null);
  const hoveringRef = useRef(false);

  const total = MODULES.length;

  /* ============================================================
     INTERSECTION OBSERVER
  ============================================================ */

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  /* ============================================================
     REAL HOVER DETECTION
  ============================================================ */

  const handlePointerMove = () => {
    if (!hoveringRef.current) {
      hoveringRef.current = true;
      setPaused(true);
    }
  };

  const handlePointerLeave = () => {
    hoveringRef.current = false;
    setPaused(false);
  };

  /* ============================================================
     CHANGE SLIDE
  ============================================================ */

  const go = (index) => {
    setActive(((index % total) + total) % total);
  };

  /* ============================================================
     AUTOMATIC SLIDE
     2.6 SECONDS
  ============================================================ */

  useEffect(() => {
    if (paused || !inView) return;

    const timer = setTimeout(() => {
      setActive((previous) => (previous + 1) % total);
    }, SLIDE_MS);

    return () => clearTimeout(timer);
  }, [active, paused, inView, total]);

  /* ============================================================
     CALCULATE CARD POSITION
  ============================================================ */

  const offsetOf = (index) => {
    let distance = index - active;

    if (distance > total / 2) {
      distance -= total;
    }

    if (distance < -total / 2) {
      distance += total;
    }

    return distance;
  };

  return (
    <section
      id="modules"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-20
        md:py-32
      "
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      {/* ========================================================
          BACKGROUND RULES
      ========================================================= */}

      <div
        className="
          bg-ruled
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
        "
      />

      {/* ========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[640px]
          w-[860px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_66%)]
        "
      />

      {/* ========================================================
          CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1340px]
          px-5
          md:px-8
        "
      >
        {/* ======================================================
            HEADER
        ======================================================= */}

        <div className="mb-10 md:mb-14">
          

          <h2 className="whitespace-nowrap text-ink">
            Six modules.{" "}
            <span className="display-italic">
              One clear system.
            </span>
          </h2>

          <p className="section-lead">
            Every stage of the student lifecycle, connected —
            no spreadsheets, no separate logins, no gaps.
          </p>
        </div>

        {/* ======================================================
            SLIDER STAGE
        ======================================================= */}

        <div
          className="
            relative
            mb-8
            md:mb-12
          "
          style={{
            perspective: "1800px",
          }}
        >
          <div
            className="
              relative
              mx-auto
              h-[230px]
              w-full
              max-w-[1040px]

              sm:h-[340px]
              md:h-[460px]
              lg:h-[560px]
            "
          >
            {MODULES.map((module, index) => {
              const distance = offsetOf(index);
              const absoluteDistance = Math.abs(distance);
              const visible = absoluteDistance <= 2;

              return (
                <motion.div
                  key={module.key}
                  className="
                    absolute
                    left-1/2
                    top-0
                    -ml-[43%]
                    h-full
                    w-[86%]

                    sm:-ml-[39%]
                    sm:w-[78%]
                  "
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  initial={false}
                  animate={{
                    x: `${distance * 46}%`,

                    scale:
                      distance === 0
                        ? 1
                        : 0.86 -
                          (absoluteDistance - 1) * 0.05,

                    rotateY:
                      distance === 0
                        ? 0
                        : distance > 0
                        ? -12
                        : 12,

                    opacity: visible
                      ? distance === 0
                        ? 1
                        : 0.4
                      : 0,

                    zIndex: 10 - absoluteDistance,

                    filter:
                      distance === 0
                        ? "blur(0px)"
                        : "blur(1px)",
                  }}
                  transition={{
                    duration: 1.15,
                    ease: EASE,
                  }}
                  onClick={() => {
                    if (distance !== 0) {
                      go(index);
                    }
                  }}
                >
                  {/* ==================================================
                      CARD
                  =================================================== */}

                  <div
                    className={`
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-[20px]
                      border
                      bg-[#D7CCE7]
                      p-1.5
                      shadow-[0_50px_110px_-50px_rgba(23,18,31,0.55)]
                      transition-colors
                      duration-700

                      sm:rounded-[28px]
                      sm:p-2

                      ${
                        distance === 0
                          ? "border-brand/30"
                          : "cursor-pointer border-line"
                      }
                    `}
                  >
                    <div
                      className="
                        relative
                        h-full
                        w-full
                        overflow-hidden
                        rounded-[15px]
                        bg-shell

                        sm:rounded-[22px]
                      "
                    >
                      {/* ==================================================
                          IMAGE
                      =================================================== */}

                      <img
                        src={module.image}
                        alt={module.title}
                        loading={
                          index === 0
                            ? "eager"
                            : "lazy"
                        }
                        className="
                          h-full
                          w-full
                          object-cover
                          object-top
                        "
                      />

                      {/* ==================================================
                          GRADIENT
                      =================================================== */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-x-0
                          bottom-0
                          h-1/3
                          bg-gradient-to-t
                          from-shell/85
                          to-transparent
                        "
                      />

                      {/* ==================================================
                          CARD LABEL
                      =================================================== */}

                      <div
                        className="
                          absolute
                          bottom-3
                          left-3
                          flex
                          items-center
                          gap-2.5

                          sm:bottom-6
                          sm:left-6
                          sm:gap-3
                        "
                      >
                        {/* ICON */}

                        <span
                          className="
                            grid
                            h-8
                            w-8
                            shrink-0
                            place-items-center
                            rounded-lg
                            bg-brand
                            text-shell

                            sm:h-11
                            sm:w-11
                            sm:rounded-xl
                          "
                        >
                          <module.Icon
                            size={15}
                            strokeWidth={2.1}
                            className="
                              sm:h-[17px]
                              sm:w-[17px]
                            "
                          />
                        </span>

                        {/* TEXT */}

                        <span className="flex flex-col leading-tight">
                          {/* MODULE NUMBER */}

                          <span
                            className="
                              font-mono
                              text-[8px]
                              uppercase
                              tracking-[0.16em]
                              text-brand-3

                              sm:text-[10px]
                              sm:tracking-[0.2em]
                            "
                          >
                            Module{" "}
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          {/* MODULE TITLE */}

                          <span
                            className="
                              font-display
                              text-[14px]
                              font-semibold
                              tracking-[-0.02em]
                              text-black

                              sm:text-[22px]
                            "
                          >
                            {module.title}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ========================================================
              PREVIOUS ARROW
          ========================================================= */}

          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous module"
            className="
              absolute
              left-0
              top-1/2
              z-20
              grid
              h-9
              w-9
              -translate-y-1/2
              cursor-pointer
              place-items-center
              rounded-full
              border
              border-line
              bg-surface-2/90
              text-ink
              shadow-md
              backdrop-blur
              transition-all

              hover:border-brand
              hover:text-brand

              md:h-14
              md:w-14
            "
          >
            <ChevronLeft
              size={18}
              strokeWidth={2}
            />
          </button>

          {/* ========================================================
              NEXT ARROW
          ========================================================= */}

          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next module"
            className="
              absolute
              right-0
              top-1/2
              z-20
              grid
              h-9
              w-9
              -translate-y-1/2
              cursor-pointer
              place-items-center
              rounded-full
              border
              border-line
              bg-surface-2/90
              text-ink
              shadow-md
              backdrop-blur
              transition-all

              hover:border-brand
              hover:text-brand

              md:h-14
              md:w-14
            "
          >
            <ChevronRight
              size={18}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* ========================================================
            MOBILE DOTS
        ========================================================= */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-1.5

            md:hidden
          "
        >
          {MODULES.map((module, index) => (
            <button
              key={module.key}
              type="button"
              onClick={() => go(index)}
              aria-label={`Go to ${module.title}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-500

                ${
                  active === index
                    ? "w-6 bg-brand"
                    : "w-1.5 bg-line"
                }
              `}
            />
          ))}
        </div>

        {/* ========================================================
            DESKTOP PROGRESS
        ========================================================= */}

        <div
          className="
            mt-8
            hidden
            items-center
            justify-center
            gap-2

            md:flex
          "
        >
          {MODULES.map((module, index) => (
            <button
              key={module.key}
              type="button"
              onClick={() => go(index)}
              aria-label={`Go to ${module.title}`}
              className="
                group
                flex
                cursor-pointer
                items-center
                gap-2
              "
            >
              <span
                className={`
                  block
                  h-1
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    active === index
                      ? "w-10 bg-brand"
                      : "w-3 bg-line group-hover:w-5 group-hover:bg-brand/50"
                  }
                `}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}