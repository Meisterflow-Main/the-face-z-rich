import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const IMAGES = [
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/2a2913723_WhatsAppImage2026-10-05at111756.jpeg",
    alt: "Luminfusion – Dein Redcarpet-Look Behandlung bei THE FACE® Zürich",
  },
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/217b2ff54_WhatsAppImage2026-10-05at111624.jpeg",
    alt: "Dermalogica Pro Exo Booster – 2026 NewBeauty Award Gewinner",
  },
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/b8de58044_IMG_0078.jpg",
    alt: "Longevity Glow Treatment mit Dermalogica® – Serum wird auf die Stirn aufgetragen",
  },
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/83a4777f3_IMG_0067.jpg",
    alt: "Professionelle Dermalogica® Gesichtsbehandlung mit verschiedenen Werkzeugen",
  },
];

export default function HeroPromoImages() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {IMAGES.map((img, i) => (
          <ScrollReveal key={img.src} delay={i * 0.06} y={20}>
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