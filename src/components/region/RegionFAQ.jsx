import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function RegionFAQ({ region }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-sand py-16 px-5">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">FAQ</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal">
            Häufige Fragen zur Gesichtsbehandlung
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {region.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={f.q} delay={i * 0.05} y={14}>
                <div className="bg-card border border-gold/15 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  >
                    <h3 className="font-heading text-lg font-semibold text-charcoal">{f.q}</h3>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                      {isOpen ? <Minus size={16} className="text-gold" /> : <Plus size={16} className="text-gold" />}
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-charcoal/70 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}