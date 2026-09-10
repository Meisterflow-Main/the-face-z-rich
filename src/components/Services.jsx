import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { TREATMENTS } from "@/lib/brand";
import { Sparkles } from "lucide-react";

export default function Services() {
  return (
    <section id="behandlungen" className="py-24 sm:py-32 px-5 sm:px-8 bg-sand">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">
            Behandlungen
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-5">
            The Treatment Gallery
          </h2>
          <div className="hairline w-16 mx-auto mb-6" />
          <p className="text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            Von der Hautanalyse bis zum Longevity Glow Treatment – jede Behandlung
            ist ein Erlebnis für Deine Haut und Dein Wohlbefinden.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 0.06}>
              <div className="group h-full bg-white rounded-2xl p-7 border border-gold/10 hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-full bg-sand flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-500">
                  <Sparkles size={20} className="text-gold group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {t.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{t.desc}</p>
                <p className="text-gold text-sm font-medium tracking-wide flex items-center gap-2">
                  <span className="h-px w-6 bg-gold" />
                  {t.benefit}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}