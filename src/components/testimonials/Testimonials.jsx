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

const REVIEWS = [
  {
    id: 1,
    name: "Dr. Ramesh Kumar",
    role: "Principal",
    org: "Educational Institution",
    quote:
      "Xplore 360 has completely changed how we manage our institution. Everything from admissions and fees to attendance and parent communication is now connected in one place.",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 2,
    name: "Priya Nair",
    role: "Academic Coordinator",
    org: "Educational Institution",
    quote:
      "The automation has made a huge difference to our daily workflow. Reminders and updates reach parents automatically without our team having to follow up manually.",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },

  {
    id: 3,
    name: "Sunita Menon",
    role: "Administrator",
    org: "Multi-Branch Institute",
    quote:
      "Earlier, our staff spent so much time answering routine questions. With Xplore 360, parents access what they need directly, while our team focuses on running the institution.",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },

  {
    id: 4,
    name: "Arun Prasad",
    role: "Director",
    org: "Growing Institution",
    quote:
      "Rolling out Xplore 360 across two branches was far smoother than expected. One dashboard, one system, both locations fully in sync.",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/men/46.jpg",
  },

  {
    id: 5,
    name: "Kavitha Raj",
    role: "Vice Principal",
    org: "City Public School",
    quote:
      "Fee collection used to take days to reconcile. Now it is tracked automatically and reports generate themselves.",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/women/49.jpg",
  },

  {
    id: 6,
    name: "Mohammed Yusuf",
    role: "Head of Admissions",
    org: "State College",
    quote:
      "Admission season used to overwhelm our front desk. The workflow now handles most of it without extra staff.",
    rating: 5,
    image:
      "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

/*
  6 testimonials
  2 cards visible at a time

  1 + 2
  3 + 4
  5 + 6
*/

const SLIDES = [
  [REVIEWS[0], REVIEWS[1]],
  [REVIEWS[2], REVIEWS[3]],
  [REVIEWS[4], REVIEWS[5]],
];

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
        rounded-[22px]
        border
        border-line
        bg-surface-2
        p-6
        shadow-[0_10px_35px_rgba(76,29,149,0.04)]
        sm:p-7
      "
    >
      {/* Top section */}
      <div className="flex items-center justify-between">
        <span
          className="
            grid
            h-10
            w-10
            place-items-center
            rounded-full
            bg-brand/10
            text-brand
          "
        >
          <Quote
            size={17}
            strokeWidth={1.8}
          />
        </span>

        <Stars count={review.rating} />
      </div>

      {/* Testimonial text */}
      <p
        className="
          mt-5
          min-h-[135px]
          text-[14px]
          leading-[1.75]
          text-ink
          sm:text-[14.5px]
        "
      >
        "{review.quote}"
      </p>

      {/* Person */}
      <div
        className="
          mt-6
          flex
          items-center
          gap-3
          border-t
          border-line
          pt-5
        "
      >
        <img
          src={review.image}
          alt={review.name}
          loading="lazy"
          className="
            h-12
            w-12
            shrink-0
            rounded-full
            object-cover
            object-center
            ring-2
            ring-brand/10
          "
        />

        <div className="min-w-0 flex-1">
          <p
            className="
              truncate
              text-[13.5px]
              font-semibold
              text-ink
            "
          >
            {review.name}
          </p>

          <p
            className="
              truncate
              text-[11.5px]
              text-faint
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
  const [activeSlide, setActiveSlide] = useState(0);

  /*
    AUTO SLIDE

    1 → 2 → 3 → 1 → 2 → 3

    Always moves forward.
  */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((previous) => {
        if (previous >= SLIDES.length - 1) {
          return 0;
        }

        return previous + 1;
      });
    }, SLIDE_TIME);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setActiveSlide((previous) => {
      if (previous >= SLIDES.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  const previousSlide = () => {
    setActiveSlide((previous) => {
      if (previous === 0) {
        return SLIDES.length - 1;
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
            mb-10
            max-w-[650px]
            sm:mb-14
          "
        >
          <span className="section-eyebrow">
            Client stories
          </span>

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

        {/* Carousel */}
        <div className="relative">

          {/* Previous Button */}
          <button
            type="button"
            onClick={previousSlide}
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
            onClick={nextSlide}
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

          {/* Sliding Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `${activeSlide * -100}%`,
              }}
              transition={{
                duration: ANIMATION_TIME,
                ease: EASE,
              }}
              style={{
                willChange: "transform",
              }}
            >
              {SLIDES.map((slide, slideIndex) => (
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
                      <ReviewCard
                        review={review}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Simple Dots Only */}
        <div className="mt-9 flex items-center justify-center gap-2.5">
          {SLIDES.map((_, index) => {
            const isActive = activeSlide === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
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
    </section>
  );
}