import React from 'react';

export default function Badge({ children, tone = 'brand', className = '' }) {
  const tones = {
    brand: 'bg-brand/8 text-brand border-brand/20',
    flame: 'bg-flame/10 text-flame border-flame/25',
    gold: 'bg-gold/10 text-gold border-gold/25',
    ink: 'bg-ink/[0.06] text-ink-soft border-ink/10',
    paper: 'bg-page-bg/10 text-page-bg border-page-bg/25',
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[6px] border px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] ${tones[tone] || tones.brand} ${className}`}
    >
      {children}
    </span>
  );
}
