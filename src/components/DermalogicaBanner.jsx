import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const IMAGES = [
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/b8de58044_IMG_0078.jpg",
    alt: "Longevity Glow Treatment mit Dermalogica – Serum wird auf die Stirn aufgetragen",
  },
  {
    src: "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/83a4777f3_IMG_0067.jpg",
    alt: "Professionelle Dermalogica Gesichtsbehandlung mit verschiedenen Werkzeugen",
  },
];

export default function DermalogicaBanner() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {IMAGES.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}