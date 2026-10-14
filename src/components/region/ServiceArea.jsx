import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { REGIONS } from "@/lib/regions";

export default function ServiceArea({ region }) {
  const isLiechtenstein = region.region === "Liechtenstein";
  return (
    <section className="bg-sand py-16 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">Einzugsgebiet</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            Gesichtsbehandlung im Raum {region.region}
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto mb-8">
            {isLiechtenstein
              ? "Ich behandle in meiner Praxis an der Landstrasse 152 in Schaan. Diese Seiten richten sich an Kundinnen und Kunden aus den folgenden Regionen, die den Weg zu mir finden."
              : "Ich behandle ausschliesslich in meiner Praxis an der Rämistrasse 27, 8001 Zürich. Diese Seiten richten sich an Kundinnen und Kunden aus den folgenden Regionen, die den Weg zu mir finden."}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {REGIONS.map((r) => (
              <Link
                key={r.slug}
                to={`/regionen/${r.slug}`}
                className={`flex items-center justify-center gap-1.5 rounded-xl border px-3 py-3 text-sm transition-colors ${
                  r.slug === region.slug
                    ? "border-gold bg-gold/10 text-charcoal font-semibold"
                    : "border-gold/15 bg-card text-charcoal/75 hover:border-gold hover:text-gold"
                }`}
              >
                <MapPin size={18} className="text-gold shrink-0" />
                {r.short}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}