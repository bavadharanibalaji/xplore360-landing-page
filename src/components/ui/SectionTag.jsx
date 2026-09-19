import React from 'react';

/** Rule + all-caps micro label. Replaces the old pill badge. */
export default function SectionTag({ children, tone = 'brand', className = '' }) {
  const color = tone === 'flame' ? 'text-flame' : tone === 'paper' ? 'text-page-bg/70' : 'text-brand';
  return (
    <span className={`inline-flex items-center gap-3 ${color} ${className}`}>
      <span className="h-px w-7 bg-current opacity-50" />
      <span className="text-[11px] font-bold uppercase tracking-[0.22em]">{children}</span>
    </span>
  );
}
