import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { REGION_SERVICES_ALL } from "@/lib/regions";

export default function MoreServices() {
  return (
    <section className="bg-background py-16 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">Weitere Leistungen</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            Mein vollständiges Behandlungsangebot
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto mb-8">
            Entdecke alle Behandlungen, von der Hautanalyse bis zum Brautmake-up.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2.5">
            {REGION_SERVICES_ALL.map((s) => (
              <Link
                key={s.label}
                to={s.href}
                className="inline-flex items-center gap-1.5 bg-card border border-gold/15 rounded-full px-4 py-2 text-sm text-charcoal/80 hover:border-gold hover:text-gold transition-colors"
              >
                {s.label} in Zürich <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}