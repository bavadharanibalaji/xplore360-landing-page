import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";

import Logo from "../shared/Logo";
import logo from "../../assets/xplore360.png";
import Button from "../ui/Button";
import { NAV_LINKS } from "../../data/navLinks";
import DemoDialog from "../demo/DemoDialog";

const PHONE = "+91 90257 84560";

/* ============================================================
   MOBILE MENU STYLES  (edit colors / sizes here)
   Each value is a complete class string so Tailwind can see it.
============================================================ */

const M = {
  // Hamburger (open) button - same as desktop border/bg tokens
  hamburger: "border-line bg-surface-2 text-ink hover:border-ink/30",
  hamburgerIcon: 22,

  // Overlay behind the panel
  overlay: "bg-ink/45 backdrop-blur-sm",

  // Panel - same light background as the desktop navbar
  panel: "bg-page-bg border-l border-line",
  panelPattern: "opacity-[0.05]",

  // "Menu" label
  menuLabel: "text-[10px] text-brand",

  // Close (X) button
  closeBtn: "border-line bg-surface-2 text-ink hover:border-ink/30",

  // Links - same colors as desktop nav (ink-soft / brand-dark / brand)
  linkNum: "text-[10.5px] text-brand/70",
  linkNumActive: "text-[10.5px] text-brand",
  linkText: "text-[20px] text-ink-soft group-hover:text-brand-dark",
  linkTextActive: "text-[20px] text-brand-dark",
  divider: "border-line",

  // Phone - same as desktop phone link
  phone: "text-[13px] text-ink-soft hover:text-brand",
};

/* ============================================================
   MOBILE PANEL ANIMATION
============================================================ */

const panelVariants = {
  hidden: {
    x: "100%",
  },

  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },

  exit: {
    x: "100%",
    transition: {
      duration: 0.35,
      ease: [0.7, 0, 0.84, 0],
    },
  },
};

/* ============================================================
   MOBILE LINK ANIMATION
============================================================ */

const linkVariants = {
  hidden: {
    opacity: 0,
    x: 24,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ============================================================
   NAVBAR
============================================================ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  /* ============================================================
     SCROLL PROGRESS
  ============================================================ */

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  /* ============================================================
     SCROLL LISTENER
  ============================================================ */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ============================================================
     ACTIVE NAVIGATION SECTION
  ============================================================ */

  useEffect(() => {
    const ids = NAV_LINKS.map((link) =>
      link.href.replace("#", "")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ============================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ============================================================ */

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ============================================================
     SMOOTH NAVIGATION
  ============================================================ */

  const goTo = (event, href) => {
    if (!href || !href.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const element = document.getElementById(
      href.slice(1)
    );

    setMenuOpen(false);

    if (!element) {
      return;
    }

    window.scrollTo({
      top:
        element.getBoundingClientRect().top +
        window.scrollY -
        88,
      behavior: "smooth",
    });
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <>
      {/* ======================================================
          TOP MARQUEE
      ======================================================= */}

      <div className="fixed inset-x-0 top-0 z-[60] h-9 overflow-hidden border-b border-brand-3/20 bg-brand-dark">
        <div className="flex h-full w-max animate-[marqueeX_90s_linear_infinite] items-center">
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className="flex shrink-0 items-center gap-3 pr-10"
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-4 w-auto object-contain opacity-95 brightness-[1.7] contrast-125"
              />

              <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.22em] text-page-bg">
                Book your free demo today
              </span>

              <Sparkles
                size={11}
                className="text-brand-3"
              />

              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-brand-3">
                12+ years experience
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ======================================================
          NAVBAR
      ======================================================= */}

      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed inset-x-0 top-9 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-page-bg/92 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
            scrolled ? "h-[62px]" : "h-[84px]"
          }`}
        >
          {/* ==================================================
              LOGO
          =================================================== */}

          <a
            href="#hero"
            onClick={(event) =>
              goTo(event, "#hero")
            }
            className="flex items-center"
          >
            <div
              className={`flex items-center transition-all duration-500 ${
                scrolled
                  ? "scale-[1.15]"
                  : "scale-[1.35]"
              } origin-left`}
            >
              <Logo />
            </div>
          </a>

          {/* ==================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <nav className="hidden lg:block">
            <ul className="m-0 flex list-none items-center gap-1 p-0">
              {NAV_LINKS.map((link) => {
                const isActive =
                  activeId ===
                  link.href.replace("#", "");

                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(event) =>
                        goTo(event, link.href)
                      }
                      className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-semibold tracking-[-0.005em] transition-all duration-300 ${
                        isActive
                          ? "text-brand-dark"
                          : "text-ink-soft hover:text-brand-dark"
                      }`}
                    >
                      {/* Active / Hover Background */}

                      <span
                        className={`absolute inset-0 -z-10 rounded-full bg-brand/10 transition-all duration-300 ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }`}
                      />

                      {/* Active Dot */}

                      <span
                        className={`h-[5px] w-[5px] rounded-full bg-brand transition-all duration-400 ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                      />

                      {/* Label */}

                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ==================================================
              RIGHT SIDE
          =================================================== */}

          <div className="flex items-center gap-2 sm:gap-4">
            {/* PHONE */}

            <a
              href={`tel:${PHONE}`}
              className="hidden items-center gap-2 text-[13px] font-semibold text-ink-soft transition-colors hover:text-brand xl:flex"
            >
              <Phone size={14} />
              {PHONE}
            </a>

            {/* DIVIDER */}

            <span className="hidden h-5 w-px bg-line xl:block" />

            {/* DESKTOP DEMO BUTTON */}

            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  setIsDemoOpen(true)
                }
              >
                Book a demo
                <ArrowUpRight size={15} />
              </Button>
            </div>

            {/* MOBILE MENU BUTTON (hamburger) */}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={`grid h-10 w-10 cursor-pointer place-items-center rounded-[10px] border transition-colors lg:hidden ${M.hamburger}`}
            >
              <Menu
                size={M.hamburgerIcon}
                strokeWidth={2.2}
              />
            </button>
          </div>
        </div>

        {/* ====================================================
            SCROLL PROGRESS
        ===================================================== */}

        <motion.div
          className="h-[2px] origin-left bg-brand"
          style={{
            scaleX: progress,
            opacity: scrolled ? 1 : 0,
          }}
        />
      </motion.header>

      {/* ======================================================
          MOBILE MENU
      ======================================================= */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* =================================================
                OVERLAY
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className={`fixed inset-0 z-[60] lg:hidden ${M.overlay}`}
            />

            {/* =================================================
                MOBILE PANEL
            ================================================== */}

            <motion.aside
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-[400px] flex-col px-7 py-7 lg:hidden ${M.panel}`}
            >
              {/* Background Pattern */}

              <div
                className={`pointer-events-none absolute inset-0 bg-ruled ${M.panelPattern}`}
              />

              {/* =================================================
                  PANEL HEADER
              ================================================== */}

              <div className="relative mb-12 flex items-center justify-between">
                <span
                  className={`font-bold uppercase tracking-[0.24em] ${M.menuLabel}`}
                >
                  Menu
                </span>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className={`grid h-10 w-10 cursor-pointer place-items-center rounded-[10px] border transition-colors ${M.closeBtn}`}
                >
                  <X size={18} strokeWidth={2.2} />
                </button>
              </div>

              {/* =================================================
                  MOBILE LINKS
              ================================================== */}

              <ul className="relative m-0 flex flex-1 list-none flex-col gap-1 overflow-y-auto p-0">
                {NAV_LINKS.map((link, index) => {
                  const isActive =
                    activeId ===
                    link.href.replace("#", "");

                  return (
                    <motion.li
                      key={link.id}
                      variants={linkVariants}
                    >
                      <a
                        href={link.href}
                        onClick={(event) =>
                          goTo(event, link.href)
                        }
                        className={`group flex items-baseline gap-4 border-b py-3 ${M.divider}`}
                      >
                        {/* Number */}

                        <span
                          className={`font-mono ${
                            isActive
                              ? M.linkNumActive
                              : M.linkNum
                          }`}
                        >
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        {/* Label */}

                        <span
                          className={`font-display font-normal transition-transform duration-300 group-hover:translate-x-1 ${
                            isActive
                              ? M.linkTextActive
                              : M.linkText
                          }`}
                        >
                          {link.label}
                        </span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* =================================================
                  MOBILE BOTTOM
              ================================================== */}

              <motion.div
                variants={linkVariants}
                className="relative mt-8 flex flex-col gap-4"
              >
                {/* Demo Button */}

                <Button
                  variant="primary"
                  size="lg"
                  full
                  onClick={() => {
                    setMenuOpen(false);
                    setIsDemoOpen(true);
                  }}
                >
                  Book a free demo
                  <ArrowUpRight size={17} />
                </Button>

                {/* Phone */}

                <a
                  href={`tel:${PHONE}`}
                  className={`flex items-center justify-center gap-2 font-semibold transition-colors ${M.phone}`}
                >
                  <Phone size={14} />
                  {PHONE}
                </a>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ======================================================
          DEMO DIALOG
      ======================================================= */}

      <DemoDialog
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </>
  );
}