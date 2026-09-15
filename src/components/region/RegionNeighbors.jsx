import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { getRegionBySlug } from "@/lib/regions";

export default function RegionNeighbors({ region }) {
  const slugs = region.neighbors || [];
  const neighbors = slugs.map(getRegionBySlug).filter(Boolean);
  return (
    <section className="bg-sand py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-8">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">Benachbarte Einzugsgebiete</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-3">
            Auch aus den Nachbarquartieren
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            Meine Praxis an der Rämistrasse erreicht Kundinnen und Kunden aus der ganzen Stadt – hier findest Du die benachbarten Regionen.
          </p>
        </ScrollReveal>
        {neighbors.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighbors.map((n) => (
              <ScrollReveal key={n.slug}>
                <Link
                  to={`/regionen/${n.slug}`}
                  className="block bg-card border border-gold/15 rounded-2xl p-5 hover:border-gold transition-colors"
                >
                  <span className="inline-flex items-center gap-1.5 text-gold text-xs tracking-[0.2em] uppercase font-medium mb-2">
                    <MapPin size={16} /> {n.region}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">Gesichtsbehandlung {n.short}</h3>
                  <p className="text-charcoal/60 text-sm line-clamp-2 mb-3">{n.heroDesc}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold">
                    Gesichtsbehandlung {n.short} ansehen <ArrowRight size={18} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <Link
              to="/regionen"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
            >
              Alle Regionen ansehen <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}