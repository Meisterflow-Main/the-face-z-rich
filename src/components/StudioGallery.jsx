import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Image } from "@/components/ui/image";

const STUDIO_IMAGES = [
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/bd5dcd8e6_IMG_1733.jpg",
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/085d21425_unnamed1.jpg",
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
          {STUDIO_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.07, 0.35), ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-lg border border-charcoal/10 shadow-sm aspect-[4/5]"
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