import React from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function RegionServices({ region }) {
  return (
    <section className="bg-sand py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">Leistungen</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            Gesichtsbehandlung in {region.short}
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">{region.servicesIntro}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {region.services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="bg-card border border-gold/15 rounded-2xl p-6 h-full flex flex-col">
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">{s.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed flex-1">{s.desc}</p>
                <a href="/#preise" className="mt-5 inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-2.5 transition-all">
                  Mehr erfahren <ArrowRight size={15} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}