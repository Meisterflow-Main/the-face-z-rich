import React, { useState, useEffect } from "react";
import { BRAND } from "@/lib/brand";
import { Calendar } from "lucide-react";

export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sm:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-gold/20 transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3 p-3">
        <a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-sm font-semibold text-charcoal border border-gold/40 rounded-lg py-3"
        >
          WhatsApp
        </a>
        <a
          href={BRAND.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gold rounded-lg py-3"
        >
          <Calendar size={16} /> Termin
        </a>
      </div>
    </div>
  );
}