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
    <section className="bg-background py-14 sm:py-16 px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Caption on the left */}
        <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
            Einblick
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal leading-[1.05] mb-4">
            Unsere <span className="gold-gradient-text">Räumlichkeiten</span>
          </h2>
          <div className="hairline w-20 mb-4" />
          <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed mb-3">
            Entdecken Sie unsere Räumlichkeiten und erhalten Sie einen Einblick in die angenehme Atmosphäre unseres Studios.
          </p>
          <p className="text-charcoal/60 text-sm sm:text-base leading-relaxed">
            Lernen Sie unsere Behandlungsräume und das besondere Ambiente bereits vor Ihrem Besuch kennen.
          </p>
        </ScrollReveal>

        {/* Image grid on the right */}
        <div className="lg:col-span-7 grid grid-cols-3 gap-2.5">
          {STUDIO_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-lg border border-charcoal/10 shadow-sm ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
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