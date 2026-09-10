import React from "react";
import { Award, Sparkles, BadgeCheck, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { REGION_USPS } from "@/lib/regions";

const ICONS = { Award, Sparkles, BadgeCheck, HeartHandshake };

export default function TrustBar() {
  return (
    <section className="bg-sand py-14 px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {REGION_USPS.map((usp, i) => {
          const Icon = ICONS[usp.icon] || Award;
          return (
            <ScrollReveal key={usp.title} delay={i * 0.1}>
              <div className="bg-card border border-gold/15 rounded-2xl p-5 h-full text-center">
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">{usp.title}</h3>
                <p className="text-charcoal/60 text-sm">{usp.desc}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}