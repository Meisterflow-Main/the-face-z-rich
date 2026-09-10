import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Image } from "@/components/ui/image";

const STUDIO_IMAGES = [
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/42fdec5a8_ChatGPTImageSep10202605_25_13PM.png",
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/92a66b148_ChatGPTImageSep10202605_21_13PM.png",
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/e9a8658a5_ChatGPTImageSep10202605_19_40PM.png",
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/981a97725_WhatsAppImage2026-09-10at162208.jpeg",
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/94c17af95_ChatGPTImageSep10202605_28_11PM.png",
];

export default function StudioGallery() {
  return (
    <section className="bg-white py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Caption on the left */}
        <ScrollReveal className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Einblick
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal leading-[1.05] mb-6">
            Unsere <span className="gold-gradient-text">Räumlichkeiten</span>
          </h2>
          <div className="hairline w-24 mb-6" />
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-4">
            Entdecken Sie unsere Räumlichkeiten und erhalten Sie einen Einblick in die angenehme Atmosphäre unseres Studios.
          </p>
          <p className="text-charcoal/60 text-base sm:text-lg leading-relaxed">
            Lernen Sie unsere Behandlungsräume und das besondere Ambiente bereits vor Ihrem Besuch kennen.
          </p>
        </ScrollReveal>

        {/* Image grid on the right */}
        <div className="lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-5">
          {STUDIO_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-2xl border border-charcoal/10 shadow-sm ${
                i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={src}
                alt={`Einblick in das Studio von THE FACE® Zürich – Bild ${i + 1}`}
                className="w-full h-full"
                fittingType="fill"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}