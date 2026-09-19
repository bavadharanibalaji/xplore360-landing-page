import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

/**
 * Reveal
 * ------
 * Wraps a whole section so it fades + slides into place the
 * moment it is scrolled into the viewport, instead of relying
 * on a separate, sometimes-unreliable timer. Every top-level
 * section in App.jsx is wrapped in this, so scrolling the page
 * is what drives each section's entrance animation.
 *
 * `once` (default true) keeps the animation from re-triggering
 * every time you scroll a section back into view — set it to
 * false for anything you want to replay on every pass.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  once = true,
  amount = 0.2,
  className = '',
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
