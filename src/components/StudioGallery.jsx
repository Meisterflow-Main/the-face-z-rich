import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const STUDIO_IMAGES = [
  { src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/a68872878_ChatGPTImageSep28202603_09_45PM.png", alt: "Helles Behandlungszimmer mit ghost chairs, Poster und Französischem Fenster bei THE FACE® Zürich" },
  { src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/ee4a914b8_ChatGPTImageSep28202603_08_28PM.png", alt: "Dermalogica-Produktauslage und Empfangsbereich mit Kamin bei THE FACE® Zürich" },
  { src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/65e89f0ad_ChatGPTImageSep28202603_07_09PM.png", alt: "Eingangsbereich mit grüner Tür und Zertifikate-Wand bei THE FACE® Zürich" },
  { src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/0e297d0d5_ChatGPTImageSep28202603_06_23PM.png", alt: "Übergang zwischen Behandlungsräumen mit Dermalogica-Poster bei THE FACE® Zürich" },
  { src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/9590aaa68_ChatGPTImageSep28202603_05_25PM.png", alt: "Flur mit grünem Türrahmen und Dermalogica-Experten-Poster bei THE FACE® Zürich" },
  { src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/139284e4a_IMG_1627.jpeg", alt: "Informationstafel von THE FACE® Denise Claire Gadient – Expertise seit 1994" },
  { src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/2496d7fd0_IMG_5765.jpg", alt: "Behandlungsraum mit Luminfusion-Dermalogica-Poster und Behandlungsliege bei THE FACE® Zürich" },
  { src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/d6ecc78c6_IMG_2554.jpg", alt: "Ornate Stuckdecke mit Medaillon im Studio von THE FACE® Zürich" },
];

export default function StudioGallery() {
  return (
    <section className="bg-background py-14 sm:py-16 px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Caption on the left */}
        <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
            Einblick
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal leading-[1.05] mb-4">
            Meine <span className="gold-gradient-text">Räumlichkeiten</span>
          </h2>
          <div className="hairline w-20 mb-4" />
          <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed mb-3">
            Entdecke meine Räumlichkeiten und erhalte einen Einblick in die angenehme Atmosphäre meines Studios.
          </p>
          <p className="text-charcoal/60 text-sm sm:text-base leading-relaxed">
            Lerne meine Behandlungsräume und das besondere Ambiente bereits vor Deinem Besuch kennen.
          </p>
        </ScrollReveal>

        {/* Image grid on the right */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          {STUDIO_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.07, 0.35), ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-lg border border-charcoal/10 shadow-sm aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}