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
    alt: "Invest in your skin – it's going to represent you for a long time. THE FACE® Zürich",
  },
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/d315509f8_IMG_8292.jpg",
    alt: "Ask me, I'm a professional skin therapist – Dermalogica Pro Skin Expert bei THE FACE® Zürich",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-start">
          {QUOTES.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-xl shadow-md border border-charcoal/10"
            >
              <img
                src={q.src}
                alt={q.alt}
                className="w-full h-auto block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}