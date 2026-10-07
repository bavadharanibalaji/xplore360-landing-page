export default function FloatingContact({
  whatsappNumber ='919025784560', // your WhatsApp number: country code + number, NO + and NO spaces
  phoneNumber = '+919025784560',   // your call number, WITH +
  whatsappMessage = 'Hi, I came from the Xplore 360 website and would like to know more.',
}) {
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callHref = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-5">
      {/* WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-icon-btn flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          animationDelay: '0s',
        }}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="#FFFFFF" aria-hidden="true">
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.698 4.61 1.903 6.48L4 29l7.72-1.86A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.8c-1.98 0-3.86-.53-5.47-1.46l-.39-.23-4.58 1.1 1.12-4.46-.25-.41A9.73 9.73 0 0 1 5.2 15c0-5.96 4.85-10.8 10.8-10.8S26.8 9.04 26.8 15 21.96 24.8 16.004 24.8zm5.91-8.1c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.84 1.04-1.03 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.67.76.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37z"/>
        </svg>
      </a>

      {/* Call */}
      <a
        href={callHref}
        aria-label="Call us"
        className="floating-icon-btn flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, var(--color-brand-2, #9333EA) 0%, var(--color-brand, #6D28D9) 100%)',
          animationDelay: '0.6s',
        }}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#FFFFFF" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
        </svg>
      </a>
    </div>
  );
}