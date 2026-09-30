import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ASSETS, STATS } from "@/lib/brand";

export default function Stats() {
  return (
    <section className="py-20 sm:py-24 px-5 sm:px-8 bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Vertrauen & Expertise
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
            Zahlen, die für sich sprechen
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="glass-dark rounded-2xl p-6 border border-gold/20 h-full">
                <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-2">
                  {s.value}
                </p>
                <p className="text-white/60 text-sm tracking-wide">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-16">
          <p className="text-center text-white/40 text-sm tracking-[0.2em] uppercase mb-6">
            Partner & zertifizierte Marken
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[ASSETS.partner1, ASSETS.partner2, ASSETS.janeIredale, ASSETS.partner4, ASSETS.madeleineWeleda].map((p, i) => (
              <div
                key={i}
                className="bg-white/95 rounded-xl px-6 py-3 flex items-center justify-center h-20 sm:h-24 w-40 sm:w-48 transition-transform hover:scale-105"
              >
                <img
                  src={p}
                  alt={`Partner ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}