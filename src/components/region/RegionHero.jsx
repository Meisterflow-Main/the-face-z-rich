import React from "react";
import { motion } from "framer-motion";
import { Calendar, Calculator } from "lucide-react";
import { BRAND } from "@/lib/brand";

export default function RegionHero({ region }) {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-10 pb-16 px-5 overflow-hidden bg-sand">
      <div className="pointer-events-none absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-lg bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-lg bg-gold/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        <p className="text-gold text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-4">
          {region.eyebrow}
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-[52px] font-semibold text-charcoal leading-[1.1] mb-6 max-w-3xl">
          {region.h1}
        </h1>

        <p className="text-charcoal/70 text-base sm:text-lg max-w-2xl leading-relaxed mb-9">
          {region.heroDesc}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href={BRAND.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/30"
          >
            <Calendar size={18} /> Jetzt Termin buchen
          </a>
          <a
            href="#preisrechner"
            className="inline-flex items-center justify-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-8 py-4 rounded-lg transition-all hover:border-gold"
          >
            <Calculator size={18} className="text-gold" /> Preis berechnen
          </a>
        </div>
      </motion.div>
    </section>
  );
}