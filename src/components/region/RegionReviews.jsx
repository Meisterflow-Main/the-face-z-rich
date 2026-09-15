import React from "react";
import { Star, ExternalLink, PenLine } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { BRAND } from "@/lib/brand";

export default function RegionReviews({ region }) {
  return (
    <section className="bg-background py-16 px-5">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">Google Bewertungen</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            Das sagen Kundinnen aus {region.short}
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto mb-8">{region.reviewsIntro}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-card border border-gold/15 rounded-2xl p-8 inline-flex flex-col items-center">
            <div className="flex gap-1 mb-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={26} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-charcoal/70 text-sm mb-6 max-w-md">
              Echte Bewertungen echter Kundinnen und Kunden – direkt auf Google einsehbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BRAND.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                <ExternalLink size={16} /> Alle Bewertungen ansehen
              </a>
              <a
                href="/bewertung"
                className="inline-flex items-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-6 py-3 rounded-lg transition-all hover:border-gold"
              >
                <PenLine size={16} className="text-gold" /> Bewertung schreiben
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}