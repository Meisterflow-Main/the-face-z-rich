import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const IMAGES = [
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/2a2913723_WhatsAppImage2026-10-05at111756.jpeg",
    alt: "Luminfusion – Dein Redcarpet-Glow Behandlung bei THE FACE® Zürich",
  },
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/217b2ff54_WhatsAppImage2026-10-05at111624.jpeg",
    alt: "Dermalogica Pro Exo Booster – 2026 NewBeauty Award Gewinner",
  },
];

export default function HeroPromoImages() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
        {IMAGES.map((img, i) => (
          <ScrollReveal key={img.src} delay={i * 0.08} y={20} className="w-[calc(50%-8px)] sm:w-[calc(25%-15px)]">
            <div className="relative rounded-lg overflow-hidden border border-gold/15 shadow-sm bg-card">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}