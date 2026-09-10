import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ASSETS, SKIN_CONCERNS } from "@/lib/brand";

export default function About() {
  return (
    <section id="ueber" className="py-24 sm:py-32 px-5 sm:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-2xl" />
              <img
                src={ASSETS.banner}
                alt="THE FACE® Zürich – Denise Claire Gadient Banner"
                className="relative rounded-2xl w-full object-cover shadow-xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">
              Persönliche, individuelle Beratung
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              Über 30 Jahre holistische Gesichtspflege in Zürich
            </h2>
            <div className="hairline w-16 mb-6" />
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Hautanalyse • von Pro Skin Treatment bis Longevity Glow Treatment •
              Revitalisierung • Make-up • Produkt-Empfehlungen.
            </p>
            <p className="text-charcoal/60 leading-relaxed mb-8">
              Für Teenager, Erwachsene und Silverager – jede Behandlung ist
              massgeschneidert auf die individuellen Bedürfnisse Deiner Haut.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {SKIN_CONCERNS.map((c) => (
                <span
                  key={c}
                  className="text-sm px-4 py-2 rounded-full bg-secondary text-charcoal/70 border border-gold/20"
                >
                  {c}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}