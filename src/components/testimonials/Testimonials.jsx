"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const SLIDE_TIME = 3200;
const ANIMATION_TIME = 1.15;

/* Titles ignored when picking the first letter */
const TITLES = ["dr", "mr", "mrs", "ms", "prof", "er"];

function getInitial(name = "") {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(
      (word) =>
        !TITLES.includes(word.replace(".", "").toLowerCase())
    );

  return (words[0] || name).charAt(0).toUpperCase();
}

const REVIEWS = [
  {
    id: 1,
    name: "Dr. Ramesh Kumar",
    role: "Principal",
    org: "Educational Institution",
    quote:
      "Xplore 360 has completely changed how we manage our institution. Everything from admissions and fees to attendance and parent communication is now connected in one place.",
    rating: 5,
  },

  {
    id: 2,
    name: "Priya Lakshmi",
    role: "Academic Coordinator",
    org: "Educational Institution",
    quote:
      "The automation has made a huge difference to our daily workflow. Reminders and updates reach parents automatically without our team having to follow up manually.",
    rating: 5,
  },

  {
    id: 3,
    name: "Meenakshi Sundaram",
    role: "Administrator",
    org: "Multi-Branch Institute",
    quote:
      "Earlier, our staff spent so much time answering routine questions. With Xplore 360, parents access what they need directly, while our team focuses on running the institution.",
    rating: 5,
  },

  {
    id: 4,
    name: "Karthikeyan Subramanian",
    role: "Director",
    org: "Growing Institution",
    quote:
      "Rolling out Xplore 360 across two branches was far smoother than expected. One dashboard, one system, both locations fully in sync.",
    rating: 5,
  },

  {
    id: 5,
    name: "Kavitha Rajan",
    role: "Vice Principal",
    org: "City Public School",
    quote:
      "Fee collection used to take days to reconcile. Now it is tracked automatically and reports generate themselves.",
    rating: 5,
  },

  {
    id: 6,
    name: "Abdul Rahman",
    role: "Head of Admissions",
    org: "State College",
    quote:
      "Admission season used to overwhelm our front desk. The workflow now handles most of it without extra staff.",
    rating: 5,
  },
];

/*
  DESKTOP / TABLET
  2 testimonials visible at a time

  1 + 2
  3 + 4
  5 + 6

  MOBILE
  1
  2
  3
  4
  5
  6
*/

const DESKTOP_SLIDES = [
  [REVIEWS[0], REVIEWS[1]],
  [REVIEWS[2], REVIEWS[3]],
  [REVIEWS[4], REVIEWS[5]],
];

const MOBILE_SLIDES = REVIEWS.map((review) => [review]);

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          size={13}
          className="fill-gold text-gold"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <motion.article
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.5,
        ease: EASE,
      }}
      className="
        group
        flex
        min-w-0
        flex-1
        flex-col
        rounded-[18px]
        border
        border-line
        bg-surface-2
        p-4
        shadow-[0_10px_35px_rgba(76,29,149,0.04)]
        sm:rounded-[22px]
        sm:p-7
      "
    >
      {/* Top section */}
      <div className="flex items-center justify-between">
        <span
          className="
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            bg-brand/10
            text-brand
            sm:h-10
            sm:w-10
          "
        >
          <Quote
            size={15}
            strokeWidth={1.8}
            className="sm:h-[17px] sm:w-[17px]"
          />
        </span>

        <Stars count={review.rating} />
      </div>

      {/* Testimonial text */}
      <p
        className="
          mt-4
          min-h-0
          text-[13px]
          leading-[1.65]
          text-ink
          sm:mt-5
          sm:min-h-[135px]
          sm:text-[14.5px]
          sm:leading-[1.75]
        "
      >
        "{review.quote}"
      </p>

      {/* Person */}
      <div
        className="
          mt-5
          flex
          items-center
          gap-2.5
          border-t
          border-line
          pt-4
          sm:mt-6
          sm:gap-3
          sm:pt-5
        "
      >
        {/* Round avatar with first letter of the name */}
        <span
          aria-hidden="true"
          className="
            grid
            h-10
            w-10
            shrink-0
            place-items-center
            rounded-full
            bg-brand
            text-[15px]
            font-bold
            uppercase
            text-white
            ring-2
            ring-brand/10
            sm:h-12
            sm:w-12
            sm:text-[17px]
          "
        >
          {getInitial(review.name)}
        </span>

        <div className="min-w-0 flex-1">
          <p
            className="
              truncate
              text-[12.5px]
              font-semibold
              text-ink
              sm:text-[13.5px]
            "
          >
            {review.name}
          </p>

          <p
            className="
              truncate
              text-[10px]
              text-faint
              sm:text-[11.5px]
            "
          >
            {review.role} · {review.org}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  /*
    Separate slide index for desktop and mobile.
    This allows mobile to show one card at a time
    while desktop continues showing two cards.
  */

  const [desktopSlide, setDesktopSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile screen */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setMobileSlide((previous) => {
          if (previous >= MOBILE_SLIDES.length - 1) {
            return 0;
          }

          return previous + 1;
        });
      } else {
        setDesktopSlide((previous) => {
          if (previous >= DESKTOP_SLIDES.length - 1) {
            return 0;
          }

          return previous + 1;
        });
      }
    }, SLIDE_TIME);

    return () => {
      clearInterval(interval);
    };
  }, [isMobile]);

  /* Desktop navigation */
  const nextDesktop = () => {
    setDesktopSlide((previous) => {
      if (previous >= DESKTOP_SLIDES.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  const previousDesktop = () => {
    setDesktopSlide((previous) => {
      if (previous === 0) {
        return DESKTOP_SLIDES.length - 1;
      }

      return previous - 1;
    });
  };

  /* Mobile navigation */
  const nextMobile = () => {
    setMobileSlide((previous) => {
      if (previous >= MOBILE_SLIDES.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  const previousMobile = () => {
    setMobileSlide((previous) => {
      if (previous === 0) {
        return MOBILE_SLIDES.length - 1;
      }

      return previous - 1;
    });
  };

  return (
    <section
      id="reviews"
      className="
        relative
        w-full
        overflow-hidden
        section-px
        section-pad
      "
    >
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 1,
            ease: EASE,
          }}
          className="
            mb-8
            max-w-[650px]
            sm:mb-14
          "
        >
          <h2 className="text-ink">
            Trusted by teams that{" "}
            <span className="display-italic">
              run education
            </span>
          </h2>

          <p className="section-lead">
            See how educational institutions are using Xplore 360
            to simplify their everyday operations.
          </p>
        </motion.div>

        {/* =====================================================
            MOBILE CAROUSEL
        ====================================================== */}

        <div className="relative sm:hidden">

          {/* Mobile Previous Button */}
          <button
            type="button"
            onClick={previousMobile}
            aria-label="Previous testimonial"
            className="
              absolute
              left-0
              top-1/2
              z-20
              grid
              h-8
              w-8
              -translate-x-[25%]
              -translate-y-1/2
              place-items-center
              rounded-full
              border
              border-line
              bg-page-bg
              text-ink
              shadow-sm
              transition-all
              duration-500
              hover:border-brand/30
              hover:text-brand
            "
          >
            <ChevronLeft size={15} />
          </button>

          {/* Mobile Next Button */}
          <button
            type="button"
            onClick={nextMobile}
            aria-label="Next testimonial"
            className="
              absolute
              right-0
              top-1/2
              z-20
              grid
              h-8
              w-8
              translate-x-[25%]
              -translate-y-1/2
              place-items-center
              rounded-full
              border
              border-line
              bg-page-bg
              text-ink
              shadow-sm
              transition-all
              duration-500
              hover:border-brand/30
              hover:text-brand
            "
          >
            <ChevronRight size={15} />
          </button>

          {/* One card per mobile slide */}
          <div className="overflow-hidden px-1">
            <motion.div
              className="flex"
              animate={{
                x: `${mobileSlide * -100}%`,
              }}
              transition={{
                duration: ANIMATION_TIME,
                ease: EASE,
              }}
              style={{
                willChange: "transform",
              }}
            >
              {MOBILE_SLIDES.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="
                    flex
                    min-w-full
                    px-1
                  "
                >
                  {slide.map((review) => (
                    <div
                      key={review.id}
                      className="
                        flex
                        min-w-0
                        w-full
                      "
                    >
                      <ReviewCard review={review} />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Dots */}
          <div className="mt-6 flex items-center justify-center gap-1.5">
            {MOBILE_SLIDES.map((_, index) => {
              const isActive = mobileSlide === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setMobileSlide(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className="
                    flex
                    h-5
                    w-4
                    items-center
                    justify-center
                  "
                >
                  <motion.span
                    animate={{
                      width: isActive ? 16 : 5,
                      opacity: isActive ? 1 : 0.35,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: EASE,
                    }}
                    className="
                      block
                      h-[5px]
                      rounded-full
                      bg-brand
                    "
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            DESKTOP / TABLET CAROUSEL
        ====================================================== */}

        <div className="relative hidden sm:block">

          {/* Previous Button */}
          <button
            type="button"
            onClick={previousDesktop}
            aria-label="Previous testimonials"
            className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-10
              w-10
              -translate-x-1/2
              -translate-y-1/2
              place-items-center
              rounded-full
              border
              border-line
              bg-page-bg
              text-ink
              shadow-sm
              transition-all
              duration-500
              hover:-translate-x-[55%]
              hover:border-brand/30
              hover:text-brand
              xl:grid
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextDesktop}
            aria-label="Next testimonials"
            className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-10
              w-10
              translate-x-1/2
              -translate-y-1/2
              place-items-center
              rounded-full
              border
              border-line
              bg-page-bg
              text-ink
              shadow-sm
              transition-all
              duration-500
              hover:translate-x-[55%]
              hover:border-brand/30
              hover:text-brand
              xl:grid
            "
          >
            <ChevronRight size={18} />
          </button>

          {/* Two cards per slide */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `${desktopSlide * -100}%`,
              }}
              transition={{
                duration: ANIMATION_TIME,
                ease: EASE,
              }}
              style={{
                willChange: "transform",
              }}
            >
              {DESKTOP_SLIDES.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="
                    flex
                    min-w-full
                    gap-4
                  "
                >
                  {slide.map((review) => (
                    <div
                      key={review.id}
                      className="
                        flex
                        min-w-0
                        flex-1
                      "
                    >
                      <ReviewCard review={review} />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Dots */}
          <div className="mt-9 flex items-center justify-center gap-2.5">
            {DESKTOP_SLIDES.map((_, index) => {
              const isActive = desktopSlide === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setDesktopSlide(index)}
                  aria-label={`Show testimonial group ${index + 1}`}
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                  "
                >
                  <motion.span
                    animate={{
                      width: isActive ? 22 : 7,
                      opacity: isActive ? 1 : 0.35,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: EASE,
                    }}
                    className="
                      block
                      h-[7px]
                      rounded-full
                      bg-brand
                    "
                  />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}