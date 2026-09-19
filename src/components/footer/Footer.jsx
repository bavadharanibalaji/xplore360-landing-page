"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

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

function FacebookIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="11" x2="8" y2="16" />
      <line x1="8" y1="8" x2="8" y2="8" />
      <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
      <line x1="16" y1="11" x2="16" y2="16" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 4l7.5 9.5L4.5 20H7l5-5.8L16.5 20H20l-7.8-9.9L19.5 4H17l-4.7 5.4L8 4z" />
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
  address:
    "12/46, 9th St, Siddhapudur, Tatabad, Coimbatore, Tamil Nadu 641012",
  phone: "+91 90257 84560",
  email: "info@xploreintellects.com",
};

/* ============================================================
   SOCIALS
============================================================ */

const SOCIALS = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "#",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "#",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "#",
  },
  {
    label: "Twitter / X",
    icon: TwitterIcon,
    href: "#",
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

            <h2 className="text-page-bg">
              Digitise your institution.
            </h2>

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
              <img
                src={logo}
                alt="Xplore 360"
                className="h-12 w-auto object-contain brightness-[1.5] contrast-110"
              />
            </div>

            <p className="mt-4 max-w-[300px] text-[13.5px] leading-[1.7] text-page-bg/50">
              A complete institute management and CRM platform built for
              modern educational institutions.
            </p>

            {/* CONTACT DETAILS */}

            <ul className="mt-6 flex list-none flex-col gap-3.5 p-0">

              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-page-bg/40"
                />

                <span className="max-w-[290px] text-[13px] leading-[1.6] text-page-bg/50">
                  {CONTACT.address}
                </span>
              </li>

              <li className="flex gap-3">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-page-bg/40"
                />

                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-[13px] text-page-bg/50 transition-colors hover:text-page-bg"
                >
                  {CONTACT.phone}
                </a>
              </li>

              <li className="flex gap-3">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-page-bg/40"
                />

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all text-[13px] text-page-bg/50 transition-colors hover:text-page-bg"
                >
                  {CONTACT.email}
                </a>
              </li>

            </ul>

            {/* SOCIAL ICONS */}

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-page-bg/10 text-page-bg/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-3/40 hover:text-page-bg"
                >
                  <Icon size={15} />
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

      <DemoDialog
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </footer>
  );
}