import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES } from "@/lib/services";

export default function RegionMoneyLinks({ region }) {
  return (
    <section className="bg-background py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Behandlungen in {region.short}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            {region.name}: alle Behandlungen
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            Wähle eine Behandlung für die passende Seite zur Gesichtsbehandlung in {region.short}.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/behandlungen/${s.slug}/${region.slug}`}
                className="group bg-card border border-gold/15 rounded-xl p-4 hover:border-gold transition-colors"
              >
                <h3 className="font-heading text-base font-semibold text-charcoal">{s.name}</h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-gold text-sm font-medium">
                  in {region.short} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}