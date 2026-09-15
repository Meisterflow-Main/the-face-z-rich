import React from "react";
import { Check, Calculator } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhyUs({ region }) {
  return (
    <section className="bg-background py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">Warum uns</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Warum Kundinnen aus {region.short} uns wählen
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">{region.whyIntro}</p>
        </ScrollReveal>

        <div className="space-y-4">
          {region.benefits.map((b, i) => (
            <ScrollReveal key={b.headline} delay={i * 0.08} y={16}>
              <div className="flex items-start gap-4 bg-card border border-gold/15 rounded-2xl p-5">
                <div className="shrink-0 w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                  <Check size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal">{b.headline}</h3>
                  <p className="text-charcoal/65 text-sm mt-0.5">{b.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10" delay={0.1}>
          <a
            href="#preisrechner"
            className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-lg hover:shadow-gold/30"
          >
            <Calculator size={18} /> Jetzt Offerte berechnen
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}