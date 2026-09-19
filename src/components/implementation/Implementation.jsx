import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users,
  Database,
  Settings,
  GraduationCap,
  Headphones,
  Sparkles,
} from 'lucide-react';

const STEPS = [
  {
    day: 'Day 01',
    title: 'Requirement Gathering',
    desc: "We understand your institute's structure, courses and current workflow.",
    Icon: Users,
  },
  {
    day: 'Day 02',
    title: 'Data Migration',
    desc: 'Your existing student, staff and fee records are moved over safely.',
    Icon: Database,
  },
  {
    day: 'Day 03',
    title: 'Configuration Setup',
    desc: 'Courses, batches, fee structures and roles are configured for you.',
    Icon: Settings,
  },
  {
    day: 'Day 04',
    title: 'User Training',
    desc: 'Your team is walked through the platform, hands-on, until it clicks.',
    Icon: GraduationCap,
  },
  {
    day: 'Day 05–07',
    title: 'Go Live & Support',
    desc: 'You go live with our team on standby for any early-day questions.',
    Icon: Headphones,
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function ImplementationProcess() {
  const sectionRef = useRef(null);

  /*
    Animation starts only when this section reaches the viewport.
    amount: 0.3 means roughly 30% of the section needs to be visible.
  */
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-page-bg section-px section-pad"
    >
      <div className="mx-auto w-full max-w-[1120px]">

        {/* =====================================================
            HEADER / CENTER ANCHOR
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="
            relative
            z-20
            mb-12
            max-w-[560px]
            md:mb-16
          "
        >
          

          <h2 className="text-ink">
            Go live in just{' '}
            <span className="display-italic">
              7 days
            </span>
          </h2>

          <p className="section-lead">
            Fast, effortless deployment with zero
            operational disruption — your institute
            runs smoothly while we set everything up.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP TIMELINE
        ===================================================== */}

        <div className="relative hidden lg:block">

          {/* -------------------------------------------------
              BASE LINE
          ------------------------------------------------- */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[46px]
              h-px
              bg-line
            "
          />

          {/* -------------------------------------------------
              CENTER → LEFT LINE
          ------------------------------------------------- */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    scaleX: 1,
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.75,
              delay: 0.65,
              ease: EASE,
            }}
            style={{
              transformOrigin: 'right',
            }}
            className="
              absolute
              left-0
              top-[46px]
              h-px
              w-1/2
              bg-gradient-to-l
              from-brand
              to-brand-3
            "
          />

          {/* -------------------------------------------------
              CENTER → RIGHT LINE
          ------------------------------------------------- */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={
              isInView
                ? {
                    scaleX: 1,
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.75,
              delay: 0.65,
              ease: EASE,
            }}
            style={{
              transformOrigin: 'left',
            }}
            className="
              absolute
              right-0
              top-[46px]
              h-px
              w-1/2
              bg-gradient-to-r
              from-brand
              to-brand-3
            "
          />

          {/* -------------------------------------------------
              CENTER GLOW
          ------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.55,
              ease: EASE,
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[46px]
              z-[5]
              h-5
              w-5
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-brand/10
              blur-[2px]
            "
          />

          {/* -------------------------------------------------
              STEPS
          ------------------------------------------------- */}

          <div className="grid grid-cols-5 gap-4">

            {STEPS.map((step, index) => {

              /*
                0,1 → from left
                2   → from center
                3,4 → from right
              */

              const initialX =
                index < 2
                  ? -110
                  : index > 2
                    ? 110
                    : 0;

              const initialScale =
                index === 2 ? 0.85 : 0.92;

              const delay =
                index < 2
                  ? 0.9 + index * 0.12
                  : index === 2
                    ? 0.75
                    : 0.9 + (4 - index) * 0.12;

              return (
                <motion.div
                  key={step.day}
                  initial={{
                    opacity: 0,
                    x: initialX,
                    scale: initialScale,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.75,
                    delay,
                    ease: EASE,
                  }}
                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >

                  {/* -------------------------------------------------
                      NODE
                  ------------------------------------------------- */}

                  <motion.span
                    initial={{
                      scale: 0.75,
                      opacity: 0,
                    }}
                    animate={
                      isInView
                        ? {
                            scale: 1,
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.55,
                      delay: delay + 0.12,
                      ease: EASE,
                    }}
                    className="
                      relative
                      z-10
                      mb-5
                      grid
                      h-[92px]
                      w-[92px]
                      place-items-center
                      rounded-full
                      border
                      border-line
                      bg-surface-2
                      shadow-[0_10px_24px_-12px_rgba(23,18,31,0.18)]
                    "
                  >
                    <span
                      className="
                        grid
                        h-14
                        w-14
                        place-items-center
                        rounded-full
                        bg-brand/10
                        text-brand
                      "
                    >
                      <step.Icon
                        size={22}
                        strokeWidth={2}
                      />
                    </span>

                    {/* Center pulse */}
                    {index === 2 && (
                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={
                          isInView
                            ? {
                                opacity: [0, 0.7, 0],
                                scale: [0.9, 1.35, 1.5],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          delay: 1.2,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-full
                          border
                          border-brand/30
                        "
                      />
                    )}
                  </motion.span>

                  {/* -------------------------------------------------
                      DAY
                  ------------------------------------------------- */}

                  <span
                    className="
                      mb-2
                      font-mono
                      text-[10.5px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-brand-3
                    "
                  >
                    {step.day}
                  </span>

                  {/* -------------------------------------------------
                      TITLE
                  ------------------------------------------------- */}

                  <h3
                    className="
                      mb-2
                      font-display
                      text-[15px]
                      font-bold
                      leading-snug
                      text-ink
                    "
                  >
                    {step.title}
                  </h3>

                  {/* -------------------------------------------------
                      DESCRIPTION
                  ------------------------------------------------- */}

                  <p
                    className="
                      m-0
                      text-[12.5px]
                      leading-relaxed
                      text-muted
                    "
                  >
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET
        ===================================================== */}

        <div className="flex flex-col gap-0 lg:hidden">

          {STEPS.map((step, index) => (
            <motion.div
              key={step.day}
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.55,
                delay: 0.3 + index * 0.12,
                ease: EASE,
              }}
              className="
                relative
                flex
                gap-4
                pb-8
                last:pb-0
              "
            >

              {/* Connecting line */}

              {index !== STEPS.length - 1 && (
                <motion.span
                  initial={{
                    scaleY: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          scaleY: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.12,
                    ease: EASE,
                  }}
                  style={{
                    transformOrigin: 'top',
                  }}
                  className="
                    absolute
                    left-[27px]
                    top-[56px]
                    h-[calc(100%-40px)]
                    w-px
                    bg-line
                  "
                />
              )}

              {/* Node */}

              <span
                className="
                  relative
                  z-10
                  grid
                  h-14
                  w-14
                  shrink-0
                  place-items-center
                  rounded-full
                  border
                  border-line
                  bg-surface-2
                  shadow-sm
                "
              >
                <span
                  className="
                    grid
                    h-9
                    w-9
                    place-items-center
                    rounded-full
                    bg-brand/10
                    text-brand
                  "
                >
                  <step.Icon
                    size={17}
                    strokeWidth={2}
                  />
                </span>
              </span>

              {/* Content */}

              <div className="pt-1.5">

                <span
                  className="
                    mb-1
                    block
                    font-mono
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-brand
                  "
                >
                  {step.day}
                </span>

                <h3
                  className="
                    mb-1.5
                    font-display
                    text-[15px]
                    font-bold
                    leading-snug
                    text-ink
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    m-0
                    max-w-[440px]
                    text-[13px]
                    leading-relaxed
                    text-muted
                  "
                >
                  {step.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}