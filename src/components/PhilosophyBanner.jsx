import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const QUOTES = [
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/cd646f35c_IMG_8126.jpg",
    alt: "Alt werden ist das neue Jung bleiben – Skin Longevity Philosophie bei THE FACE® Zürich",
  },
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/799a88568_IMG_7514.jpg",
    alt: "Skin Longevity – Deine Haut begleitet Dich ein Leben lang. THE FACE® Zürich",
  },
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/d315509f8_IMG_8292.jpg",
    alt: "Ask me, I'm a professional skin therapist – Dermalogica® Pro Skin Expert bei THE FACE® Zürich",
  },
];

export default function PhilosophyBanner() {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8 bg-secondary">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal className="text-center mb-10 sm:mb-12">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
            Philosophie
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal leading-tight">
            Meine <span className="gold-gradient-text">Überzeugung</span>
          </h2>
          <div className="hairline w-20 mx-auto mt-4" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto items-start">
          {QUOTES.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-lg shadow-md border border-charcoal/10 bg-card"
            >
              <img
                src={q.src}
                alt={q.alt}
                loading="lazy"
                className="block w-full h-[320px] sm:h-[380px] object-contain"
              />
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.1} className="mt-8 sm:mt-10">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-xl mx-auto">
            <div className="rounded-lg overflow-hidden border border-gold/15 shadow-sm bg-charcoal">
              <img
                src="https://media.base44.com/images/public/6aa28dd575421cdcca35083c/df004ae55_SkincareProTipMinimalistPoster.png"
                alt="Pro Tip: alle 4–6 Wochen zu einem Professional Skin Therapist"
                loading="lazy"
                className="block w-full h-[220px] object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-gold/15 shadow-sm bg-charcoal">
              <img
                src="https://media.base44.com/images/public/6aa28dd575421cdcca35083c/fbe0c4834_HumanTouchLastingConnection.png"
                alt="Human Touch – Danke für Deine Treue, Deine Hauttherapeutin"
                loading="lazy"
                className="block w-full h-[220px] object-contain"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}