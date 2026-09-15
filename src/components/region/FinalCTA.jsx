import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { BRAND } from "@/lib/brand";

export default function FinalCTA({ region }) {
  return (
    <section className="bg-charcoal py-20 px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">
          Gesichtsbehandlung {region.short}
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-white mb-5">
          {region.finalCtaTitle}
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
          {region.finalCtaText}
        </p>
        <a
          href={BRAND.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/30"
        >
          <Calendar size={18} /> Termin buchen
        </a>
      </motion.div>
    </section>
  );
}