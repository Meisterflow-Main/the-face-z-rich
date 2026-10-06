import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";

const PREFILLED =
  "Hallo, ich interessiere mich für Deine Gesichtsbehandlung und möchte gerne mehr Informationen erhalten oder einen Termin vereinbaren.";

const WA_LINK = `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(PREFILLED)}`;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [stickyCta, setStickyCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
      setStickyCta(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile: sit above the sticky CTA bar when it is visible, otherwise lower.
  const mobileBottom = stickyCta ? "bottom-28" : "bottom-20";

  return (
    <div
      className={`group fixed right-5 z-40 transition-all duration-500 ${mobileBottom} sm:bottom-6 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Trust hint – desktop hover tooltip */}
      <div className="hidden sm:block absolute right-0 bottom-full mb-3 pointer-events-none">
        <div className="glass border border-gold/20 rounded-xl px-4 py-2.5 shadow-lg whitespace-nowrap opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <p className="text-xs font-medium text-charcoal">Antwort meist innert kurzer Zeit</p>
          <span className="absolute -bottom-1 right-7 w-2.5 h-2.5 bg-white border-r border-b border-gold/20 rotate-45" />
        </div>
      </div>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Anfrage per WhatsApp senden"
        className="group relative flex items-center gap-0 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-700/25 hover:bg-[#1faa54] hover:shadow-green-700/40 transition-all duration-300 hover:scale-[1.04]"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0" />

        {/* Icon */}
        <span className="relative w-14 h-14 flex items-center justify-center">
          <MessageCircle size={28} className="relative" />
        </span>

        {/* Label – desktop only */}
        <span className="relative pr-5 pl-0 font-semibold text-sm hidden sm:inline whitespace-nowrap">
          WhatsApp Anfrage
        </span>
      </a>
    </div>
  );
}