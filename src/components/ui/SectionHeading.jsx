import React from 'react';

export default function SectionHeading({ children, sub, align = 'left', className = '' }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      <h2 className="text-ink">{children}</h2>
      {sub && (
        <p className="mt-4 max-w-[560px] text-[15px] md:text-base text-muted leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}
