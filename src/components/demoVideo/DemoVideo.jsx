"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

import demoVideoSrc from "../../assets/demoVideo/demoVideo.mp4";

export default function DemoVideo() {
  const videoRef = useRef(null);
  const [watching, setWatching] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = false;
    v.currentTime = 0;
    v.loop = false;

    v.play().catch(() => {});
    setWatching(true);
  };

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;

    v.pause();
    v.currentTime = 0;
    v.muted = true;
    v.loop = true;

    v.play().catch(() => {});
    setWatching(false);
  };

  return (
    <section className="relative w-full overflow-hidden section-px section-pad">
      {/* =========================================================
          AMBIENT BACKGROUND GLOW
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[7%] top-[15%] h-[300px] w-[300px] rounded-full bg-brand/10 blur-[100px]" />

        <div className="absolute bottom-[8%] right-[5%] h-[320px] w-[320px] rounded-full bg-brand-3/10 blur-[110px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-[1240px]">
        {/* =========================================================
            VIDEO OUTER FRAME
        ========================================================== */}
        <div className="relative">
          {/* Soft outer glow */}
          <div className="pointer-events-none absolute -inset-3 rounded-[34px] bg-brand/10 opacity-60 blur-[24px] sm:-inset-5 sm:rounded-[40px]" />

          {/* Outer frame */}
          <div className="relative rounded-[30px] border border-ink/[0.08] bg-page-bg/[0.55] p-[5px] shadow-[0_2px_5px_rgba(23,18,31,0.05),0_18px_45px_-15px_rgba(23,18,31,0.20),0_50px_100px_-38px_rgba(23,18,31,0.25)] sm:rounded-[36px] sm:p-[6px]">
            {/* Inner frame */}
            <div className="relative rounded-[25px] border border-page-bg/[0.12] bg-shell p-[3px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.025),0_8px_25px_rgba(0,0,0,0.15)] sm:rounded-[31px] sm:p-[4px]">
              {/* =====================================================
                  VIDEO
              ====================================================== */}
              <div className="relative min-h-[430px] overflow-hidden rounded-[21px] bg-shell sm:min-h-[500px] sm:rounded-[27px] md:min-h-[580px] lg:min-h-[620px]">
                <video
                  ref={videoRef}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    watching
                      ? "scale-[1.01] opacity-100"
                      : "scale-100 opacity-[0.38]"
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls={watching}
                  onEnded={stop}
                >
                  <source src={demoVideoSrc} type="video/mp4" />
                </video>

                {/* =================================================
                    DARK TINT
                ================================================== */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                    watching ? "opacity-0" : "opacity-100"
                  }`}
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(36,26,48,0.86) 0%, rgba(36,26,48,0.48) 45%, rgba(36,26,48,0.94) 100%)",
                  }}
                />

                {/* Soft vignette */}
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                    watching ? "opacity-0" : "opacity-100"
                  }`}
                  style={{
                    background:
                      "radial-gradient(circle at center, transparent 25%, rgba(23,18,31,0.42) 100%)",
                  }}
                />

                {/* Subtle ruled texture */}
                <div
                  className={`bg-ruled pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                    watching ? "opacity-0" : "opacity-[0.12]"
                  }`}
                />

                {/* =================================================
                    MAIN CONTENT
                ================================================== */}
                <div className="relative z-10 flex min-h-[430px] items-center justify-center px-5 py-14 sm:min-h-[500px] sm:px-10 md:min-h-[580px] lg:min-h-[620px]">
                  <AnimatePresence mode="wait">
                    {!watching && (
                      <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: -18,
                          transition: { duration: 0.35 },
                        }}
                        transition={{
                          duration: 0.75,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex w-full max-w-[850px] flex-col items-center text-center"
                      >
                        {/* =================================================
                            BRANDS + PLAY + GROW
                        ================================================== */}
                        <motion.div
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.15,
                            duration: 0.65,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
                        >
                          {/* Brands */}
                          <motion.h2
                            whileHover={{ y: -2 }}
                            className="font-display text-[1.8rem] font-extrabold leading-none tracking-[-0.04em] text-page-bg sm:text-[2.7rem] md:text-[3.3rem]"
                          >
                            Brands
                          </motion.h2>

                          {/* Play Button */}
                          <motion.button
                            type="button"
                            onClick={start}
                            initial={{
                              opacity: 0,
                              scale: 0.8,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            transition={{
                              delay: 0.28,
                              duration: 0.55,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{
                              scale: 1.08,
                            }}
                            whileTap={{
                              scale: 0.94,
                            }}
                            className="group relative grid h-[58px] w-[58px] shrink-0 cursor-pointer place-items-center rounded-full border border-page-bg/35 bg-page-bg/[0.10] shadow-[0_0_0_7px_rgba(255,255,255,0.035),0_12px_35px_rgba(0,0,0,0.24)] backdrop-blur-md transition-all duration-500 hover:border-page-bg/75 hover:bg-page-bg sm:h-[72px] sm:w-[72px]"
                            aria-label="Play the Xplore 360 walkthrough"
                          >
                            {/* Pulse ring 1 */}
                            <motion.span
                              className="absolute inset-0 rounded-full border border-page-bg/20"
                              animate={{
                                scale: [1, 1.38, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />

                            {/* Pulse ring 2 */}
                            <motion.span
                              className="absolute inset-[-5px] rounded-full border border-gold/30"
                              animate={{
                                scale: [1, 1.28, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.35,
                              }}
                            />

                            <Play
                              size={21}
                              className="relative ml-1 text-page-bg transition-colors duration-300 group-hover:text-brand sm:h-[24px] sm:w-[24px]"
                              fill="currentColor"
                            />
                          </motion.button>

                          {/* Grow */}
                          <motion.h2
                            whileHover={{ y: -2 }}
                            className="font-display text-[1.8rem] font-extrabold italic leading-none tracking-[-0.04em] text-brand-3 sm:text-[2.7rem] md:text-[3.3rem]"
                          >
                            Grow
                          </motion.h2>
                        </motion.div>

                        {/* =================================================
                            DESCRIPTION
                        ================================================== */}
                        <motion.p
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.38,
                            duration: 0.6,
                          }}
                          className="mt-6 max-w-[540px] text-[11.5px] leading-[1.75] text-page-bg/60 sm:mt-7 sm:text-[13px] md:text-[14px]"
                        >
                          A quick look at how Xplore 360 helps institutes
                          simplify everyday operations, connect their teams
                          and create a better experience for students and
                          parents.
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* =================================================
                      CLOSE BUTTON
                  ================================================== */}
                  <AnimatePresence>
                    {watching && (
                      <motion.button
                        type="button"
                        onClick={stop}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="absolute right-5 top-5 z-30 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-page-bg/25 bg-shell/65 text-page-bg shadow-lg backdrop-blur-md transition-all duration-300 hover:border-page-bg/60 hover:bg-shell sm:right-7 sm:top-7"
                        aria-label="Close the walkthrough"
                      >
                        <X size={17} />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                {/* =================================================
                    SUBTLE CORNER DETAILS
                ================================================== */}
                <div
                  className={`pointer-events-none absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between transition-all duration-500 sm:bottom-7 sm:left-7 sm:right-7 ${
                    watching
                      ? "translate-y-3 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <div className="hidden sm:block">
                    <div className="h-px w-16 bg-page-bg/15" />

                    <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.18em] text-page-bg/30">
                      Xplore 360
                    </p>
                  </div>

                  <div className="ml-auto">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-page-bg/30">
                      01 / 01
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom floating shadow */}
          <div className="pointer-events-none absolute -bottom-3 left-[10%] right-[10%] h-8 rounded-full bg-ink/10 blur-[18px]" />
        </div>
      </div>
    </section>
  );
}