"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import DemoDialog from "../demo/DemoDialog";
import Button from "../ui/Button";
import logo from "../../assets/xplore360.png";

/* ============================================================
   Small inline social icons
============================================================ */

const iconProps = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* ============================================================
   Brand social icons (white glyphs, drawn on coloured tiles)
============================================================ */

function FacebookIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.95.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.1-2.4-.1-2.5 0-4.2 1.5-4.2 4.3v2.5H7.5v3.3h2.8V22z" />
    </svg>
  );
}

function InstagramIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
    </svg>
  );
}

function TwitterIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

/* ============================================================
   FOOTER COLUMNS
============================================================ */

const COLUMNS = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "#hero" },
      { label: "Modules", href: "#modules" },
      { label: "Features", href: "#features" },
      { label: "Workflow", href: "#workflow" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Admissions CRM", href: "#modules" },
      { label: "Student Management", href: "#modules" },
      { label: "Fee Management", href: "#modules" },
      { label: "Attendance", href: "#modules" },
      { label: "Reports", href: "#modules" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Schools", href: "#industries" },
      { label: "Colleges", href: "#industries" },
      { label: "Coaching Centres", href: "#industries" },
      { label: "Training Institutes", href: "#industries" },
      { label: "Universities", href: "#industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Book a Demo", isDemo: true },
      { label: "Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Legal", href: "/legal" },
    ],
  },
];

/* ============================================================
   CONTACT
============================================================ */

const CONTACT = {
  address: "12/46, 9th St, Siddhapudur, Tatabad, Coimbatore, Tamil Nadu 641012",
  phone: "+91 90257 84560",
  email: "info@xploreintellects.com",
};

/* ============================================================
   SOCIALS
============================================================ */

const SOCIALS = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/xplore_intellects",
    background: "#1877F2",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/xplore_intellects",
    background:
      "linear-gradient(45deg, #FEDA75 0%, #FA7E1E 25%, #D62976 50%, #962FBF 75%, #4F5BD5 100%)",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/103691931",
    background: "#0A66C2",
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/919025784560",
    background: "#25D366",
  },
  {
    label: "Twitter / X",
    icon: FaXTwitter,
    href: "https://x.com/xplore_intellects",
    background: "#000000",
  },
];

const EASE = [0.16, 1, 0.3, 1];

/* ============================================================
   FOOTER
============================================================ */

export default function Footer() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <footer
      className="relative w-full overflow-hidden text-page-bg"
      style={{
        background:
          "linear-gradient(180deg, var(--color-purple-950) 0%, var(--color-shell) 55%, var(--color-shell) 100%)",
      }}
    >
      {/* ===================================================
          AMBIENT PURPLE GLOW
      =================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/3 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-purple-300/[0.06] blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] section-px">
        {/* ===================================================
            CTA + NEWSLETTER

            HIDDEN ON MOBILE
            VISIBLE FROM md AND ABOVE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="hidden md:grid md:grid-cols-12 md:items-center md:gap-8 md:border-b md:border-page-bg/10 md:py-16"
        >
          {/* LEFT CTA */}

          <div className="md:col-span-6">
            <span className="section-eyebrow text-brand-3">
              Ready when you are
            </span>

            <h2 className="text-page-bg">Digitise your institution.</h2>

            <p className="mt-4 max-w-[440px] text-[14px] leading-[1.7] text-page-bg/55">
              Admissions, student management, attendance, fee collection,
              communication and reporting — all managed from one platform.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="light"
                size="md"
                onClick={() => setIsDemoOpen(true)}
              >
                Book a free demo
                <ArrowUpRight size={16} />
              </Button>

              <Button
                variant="onDark"
                size="md"
                onClick={() => {
                  window.location.href = `tel:${CONTACT.phone}`;
                }}
              >
                Talk to an expert
              </Button>
            </div>
          </div>

          {/* NEWSLETTER */}

          <div className="md:col-span-6 md:justify-self-end md:pl-8">
            <div className="mx-auto w-full max-w-[380px] rounded-[18px] border border-page-bg/10 bg-purple-900/40 p-5 backdrop-blur-sm sm:mx-0 sm:p-6">
              <p className="m-0 font-display text-[15px] font-semibold text-page-bg">
                Get product updates
              </p>

              <p className="m-0 mt-1.5 text-[12.5px] leading-[1.6] text-page-bg/50">
                Short, occasional notes on new modules and releases. No spam.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
                className="mt-4 flex items-center gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@institute.edu"
                  className="min-w-0 flex-1 rounded-full border border-page-bg/15 bg-page-bg/5 px-4 py-2.5 text-[12.5px] text-page-bg placeholder:text-page-bg/35 outline-none focus:border-brand-3/60"
                />

                <button
                  type="submit"
                  className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full bg-brand text-page-bg transition-transform hover:-translate-y-0.5"
                  aria-label="Subscribe"
                >
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            LINKS AREA
        =================================================== */}

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 sm:gap-x-10 md:grid-cols-12 md:gap-x-9 md:py-14">
          {/* =================================================
              BRAND / CONTACT
          ================================================= */}

          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Xplore 360"
                  className="h-16 w-auto object-contain brightness-[1.5] contrast-110 md:h-28"
                />
              </div>
            </div>

            <p className="mt-4 max-w-[300px] text-[13.5px] leading-[1.7] text-page-bg/50">
              A complete institute management and CRM platform built for modern
              educational institutions.
            </p>

            {/* CONTACT DETAILS */}

            <ul className="mt-6 flex list-none flex-col gap-3.5 p-0">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-page-bg/40" />

                <span className="max-w-[290px] text-[13px] leading-[1.6] text-page-bg/50">
                  {CONTACT.address}
                </span>
              </li>

              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-page-bg/40" />

                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-[13px] text-page-bg/50 transition-colors hover:text-page-bg"
                >
                  {CONTACT.phone}
                </a>
              </li>

              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-page-bg/40" />

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all text-[13px] text-page-bg/50 transition-colors hover:text-page-bg"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>

            {/* SOCIAL ICONS */}

            {/* SOCIAL ICONS */}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {SOCIALS.map(({ label, icon: Icon, href, background }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ background }}
                  className="grid h-10 w-10 place-items-center rounded-full text-white ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.6)] md:h-12 w-12"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              FOOTER COLUMNS

              MOBILE:
              Navigate + Solutions = HIDDEN

              MOBILE:
              Industries + Company = VISIBLE

              DESKTOP:
              ALL FOUR = VISIBLE
          ================================================= */}

          {COLUMNS.map((column, index) => (
            <div
              key={column.title}
              className={`
                md:col-span-2
                ${index < 2 ? "hidden md:block" : ""}
              `}
            >
              <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-page-bg/35">
                {column.title}
              </h4>

              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.isDemo ? (
                      <button
                        type="button"
                        onClick={() => setIsDemoOpen(true)}
                        className="cursor-pointer bg-transparent p-0 text-left text-[13px] text-page-bg/55 transition-colors hover:text-page-bg"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[13px] text-page-bg/55 transition-colors hover:text-page-bg"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===================================================
            BASELINE
        =================================================== */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-page-bg/10 py-6 sm:flex-row">
          <p className="m-0 text-[12px] text-page-bg/40">
            © {new Date().getFullYear()} Xplore Intellects Inc. All rights
            reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex cursor-pointer items-center gap-2 bg-transparent text-[11px] font-medium uppercase tracking-[0.12em] text-page-bg/45 transition-colors hover:text-page-bg"
          >
            Back to top
            <span className="grid h-6 w-6 place-items-center rounded-full border border-page-bg/15 transition-transform duration-200 group-hover:-translate-y-0.5">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>

        {/* ===================================================
            XPLORE 360 WORDMARK
        =================================================== */}

        <div
          className="relative select-none overflow-hidden pb-6 pt-2"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            animate={{
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              opacity: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.10),transparent_65%)] blur-3xl"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
            className="relative z-10 flex justify-center whitespace-nowrap text-center font-display text-[15vw] font-bold leading-[0.85] tracking-[-0.05em] sm:text-[13vw] md:text-[11vw]"
          >
            {"XPLORE 360".split("").map((character, index) => (
              <motion.span
                key={`${character}-${index}`}
                variants={{
                  hidden: {
                    y: "40%",
                    opacity: 0,
                  },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      ease: EASE,
                    },
                  },
                }}
                animate={{
                  color: [
                    "rgba(229,220,245,0.14)",
                    "rgba(196,181,253,0.30)",
                    "rgba(244,213,141,0.22)",
                    "rgba(229,220,245,0.14)",
                  ],
                }}
                transition={{
                  color: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.08,
                    ease: "easeInOut",
                  },
                }}
                className="inline-block"
              >
                {character === " " ? "\u00A0" : character}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: "-120%" }}
            whileInView={{ x: "120%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 1.8,
              delay: 0.5,
              ease: EASE,
            }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[25%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-page-bg/15 to-transparent"
          />
        </div>
      </div>

      {/* =====================================================
          DEMO DIALOG
      ===================================================== */}

      <DemoDialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </footer>
  );
}
