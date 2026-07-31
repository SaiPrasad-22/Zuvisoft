export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916301707059"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] ring-1 ring-white/20 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" style={{ animationDuration: '1.8s' }} />
      <img src="/whatsapp.svg" alt="WhatsApp" className="relative h-9 w-9" />
    </a>
  )
}
