import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES } from "@/lib/services";

export default function RegionServices({ region }) {
  // Match region.services titles to real service slugs for deep-linking
  const getServiceSlug = (title) => {
    const match = SERVICES.find((s) => title.toLowerCase().includes(s.name.toLowerCase().split(" ")[0]));
    return match ? match.slug : null;
  };
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
          {region.services.map((s, i) => {
            const slug = getServiceSlug(s.title);
            const linkTo = slug ? `/behandlungen/${slug}/${region.slug}` : `/behandlungen`;
            const anchor = slug ? `${s.title} in ${region.short} ansehen` : "Alle Behandlungen ansehen";
            return (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <Link to={linkTo} className="block bg-card border border-gold/15 rounded-2xl p-6 h-full flex flex-col hover:border-gold transition-colors group">
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">{s.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-2.5 transition-all">
                    {anchor} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}