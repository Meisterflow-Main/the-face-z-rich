import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { BRAND, ASSETS } from "@/lib/brand";

export default function Hero() {
  return (
    <section className="relative h-[82vh] min-h-[560px] sm:h-[92vh] w-full overflow-hidden bg-charcoal">
      <img
        src={ASSETS.hero}
        alt="THE FACE® Zürich – Kosmetikstudio an der Rämistrasse"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-charcoal/15" />

      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1360px] mx-auto px-5 sm:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[520px]"
        >
          <p className="text-white/80 text-xs sm:text-[13px] tracking-[0.12em] uppercase font-medium mb-5">
            THE FACE® · Denise Claire Gadient · Zürich
          </p>
          <h1 className="font-heading text-white text-[38px] sm:text-5xl md:text-[60px] font-semibold leading-[1.08] tracking-[-0.025em] mb-6">
            Holistische Gesichtspflege in Zürich
          </h1>
          <p className="text-white/85 text-base sm:text-lg leading-[1.6] max-w-[480px] mb-9">
            Über 30 Jahre spezialisiert auf individuelle Hautanalyse, Pro Skin Treatments und
            Skin Longevity, mit sanften Händen und hochwertigen Clean-Produkten an der Rämistrasse.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={BRAND.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all"
            >
              <Calendar size={18} /> Termin buchen
            </a>
            <a
              href="#behandlungen"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 font-semibold px-6 py-3.5 rounded-lg transition-all"
            >
              Behandlungen entdecken <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}