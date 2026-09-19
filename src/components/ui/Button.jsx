import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  style = {},
  className = '',
  ...props
}) {
  const base =
    "group/btn relative inline-flex items-center justify-center gap-2 font-semibold rounded-full cursor-pointer " +
    "transition-all duration-300 ease-out outline-none no-underline whitespace-nowrap box-border " +
    "[-webkit-tap-highlight-color:transparent] focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-page-bg disabled:opacity-50 disabled:cursor-not-allowed tracking-[-0.01em]";

  const sizes = {
    sm: "py-2 px-4 text-[13px] min-h-[38px]",
    md: "py-2.5 px-5 text-[14.5px] min-h-[44px]",
    lg: "py-3.5 px-7 text-[15.5px] min-h-[54px]",
  };

  const variants = {
    primary:
      "border border-brand-dark bg-brand-dark text-page-bg shadow-[0_12px_26px_-14px_rgba(76,29,149,0.9)] " +
      "hover:bg-brand hover:border-brand hover:text-brand-dark hover:-translate-y-[2px] " +
      "hover:shadow-[0_16px_30px_-14px_rgba(124,58,237,0.8)] active:translate-y-0",
    brand:
      "border border-brand bg-brand text-brand-dark shadow-[0_12px_26px_-14px_rgba(124,58,237,0.9)] " +
      "hover:bg-brand-dark hover:border-brand-dark hover:text-page-bg hover:-translate-y-[2px] active:translate-y-0",
    outline:
      "border border-line bg-surface-2 text-ink shadow-sm hover:border-brand hover:text-brand hover:-translate-y-[2px] active:translate-y-0",
    ghost:
      "border border-transparent bg-transparent text-ink hover:bg-brand/[0.08] hover:text-brand-dark",
    flame:
      "border border-gold bg-gold text-brand-dark shadow-[0_12px_26px_-14px_rgba(255,176,32,0.9)] hover:-translate-y-[2px] active:translate-y-0",
    light:
      "border border-transparent bg-page-bg text-brand-dark hover:bg-white hover:-translate-y-[2px] active:translate-y-0",
    onDark:
      "border border-page-bg/35 bg-transparent text-page-bg hover:bg-page-bg/10 hover:border-page-bg/70 hover:-translate-y-[2px] active:translate-y-0",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant] || variants.primary} ${full ? 'w-full' : 'w-auto'} max-w-full ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}