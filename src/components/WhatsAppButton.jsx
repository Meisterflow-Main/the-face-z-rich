import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={BRAND.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Anfrage senden"
      className={`fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-600/30 transition-all duration-500 hover:scale-105 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="w-14 h-14 flex items-center justify-center">
        <MessageCircle size={26} />
      </span>
      <span className="pr-5 pl-0 font-semibold text-sm hidden sm:inline whitespace-nowrap">
        WhatsApp Anfrage
      </span>
    </a>
  );
}