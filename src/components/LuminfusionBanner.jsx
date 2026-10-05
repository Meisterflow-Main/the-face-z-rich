import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function LuminfusionBanner() {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8 bg-background">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 items-center rounded-xl overflow-hidden border border-gold/15 shadow-sm bg-card">
            <div className="relative overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6aa28dd575421cdcca35083c/7f89fe61c_WhatsAppImage2026-10-05at111756.jpeg"
                alt="Luminfusion – Dein Redcarpet-Glow bei THE FACE® Zürich"
                className="w-full h-auto block object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
                Lumin Fusion
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal leading-tight mb-4">
                Luminfusion – Dein Redcarpet-Glow
              </h2>
              <div className="hairline w-16 mb-4" />
              <p className="text-charcoal/65 leading-relaxed mb-6">
                Die Lumin Fusion Nanoneedling-Infusion bringt tiefe Nährstoffe in die Haut und schenkt
                Dir einen strahlenden, jugendlichen Glow – wie für den roten Teppich.
              </p>
              <Link
                to="/behandlungen/longevity-glow-treatment"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all"
              >
                Mehr erfahren <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}