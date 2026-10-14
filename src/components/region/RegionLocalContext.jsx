import React from "react";
import { MapPin, Train, Users, Landmark } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function RegionLocalContext({ region }) {
  const c = region.localContext;
  if (!c) return null;
  const isLiechtenstein = region.region === "Liechtenstein";
  const practiceLabel = isLiechtenstein ? "Anreise nach Schaan" : "Anreise zur Rämistrasse";
  const practiceHeading = isLiechtenstein
    ? `${region.short} und meine Praxis in Schaan`
    : `${region.short} und meine Praxis an der Rämistrasse`;
  const practiceSubtext = isLiechtenstein
    ? `Was ${region.short} auszeichnet und warum sich der Weg in meine Einzelpraxis an der Landstrasse 152 lohnt.`
    : `Was ${region.short} auszeichnet und warum sich der Weg in meine Einzelpraxis an der Rämistrasse 27 lohnt.`;
  const items = [
    { icon: MapPin, label: "Quartiercharakter", text: c.character },
    { icon: Train, label: practiceLabel, text: c.commute },
    { icon: Users, label: `Kundinnen aus ${region.short}`, text: c.customers },
    { icon: Landmark, label: "Rund ums Quartier", text: c.nearby },
  ];
  return (
    <section className="bg-background py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">{c.areaType}</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            {practiceHeading}
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            {practiceSubtext}
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <ScrollReveal key={it.label} delay={i * 0.08}>
              <div className="bg-card border border-gold/15 rounded-2xl p-6 h-full">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <it.icon size={20} className="text-gold" />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-charcoal">{it.label}</h3>
                </div>
                <p className="text-charcoal/70 text-sm leading-relaxed">{it.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}