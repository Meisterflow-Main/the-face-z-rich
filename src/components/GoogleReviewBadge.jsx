import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { BRAND } from "@/lib/brand";
import GoogleLogo from "@/components/GoogleLogo";

// Reale Werte aus dem öffentlichen Google-Business-Profil (Stand September 2026).
// Periodisch prüfen oder durch ein Live-Widget ersetzen.
const RATING = "4.9";
const COUNT = 16;

export default function GoogleReviewBadge({ variant = "inline", className = "" }) {
  const large = variant === "large";
  const star = large ? 22 : 16;
  return (
    <a
      href={BRAND.googleReview}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${RATING} von 5 Sternen – ${COUNT} Google-Bewertungen`}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <GoogleLogo size={star} className="shrink-0" />
      <span className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={star} className="fill-gold text-gold" />
        ))}
      </span>
      <span className={`font-heading font-semibold text-charcoal ${large ? "text-2xl" : "text-base"}`}>
        {RATING}
      </span>
      <span className={`text-charcoal/55 ${large ? "text-sm" : "text-xs"}`}>
        · {COUNT} Google-Bewertungen
      </span>
      <ExternalLink size={large ? 16 : 13} className="text-gold" />
    </a>
  );
}