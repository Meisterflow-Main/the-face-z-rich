import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { TREATMENTS, BRAND } from "@/lib/brand";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="behandlungen" className="py-20 sm:py-28 px-5 sm:px-8 bg-sand">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-10 lg:gap-16">
        <ScrollReveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">
              Behandlungen
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal leading-[1.08] mb-6">
              Von der Hautanalyse bis zum Glow
            </h2>
            <div className="hairline w-16 mb-6" />
            <p className="text-charcoal/65 leading-relaxed mb-6">
              Jede Behandlung beginnt mit einer persönlichen Hautanalyse und wird massgeschneidert
              auf die individuellen Bedürfnisse Deiner Haut.
            </p>
            <a
              href={BRAND.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all"
            >
              Termin buchen <ArrowRight size={16} />
            </a>
            <Link
              to="/behandlungen"
              className="mt-2 inline-flex items-center gap-2 text-charcoal/60 hover:text-gold font-medium text-sm transition-colors"
            >
              Alle Behandlungen ansehen <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-8">
          {TREATMENTS.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 0.05} y={16}>
              <div className="grid grid-cols-12 gap-4 sm:gap-6 py-7 border-t border-charcoal/10 last:border-b">
                <span className="col-span-2 sm:col-span-1 font-heading text-charcoal/30 text-sm pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 sm:col-span-11">
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal mb-2">
                    {t.title}
                  </h3>
                  <p className="text-charcoal/65 text-sm sm:text-base leading-relaxed mb-2">
                    {t.desc}
                  </p>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                    {t.benefit}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}