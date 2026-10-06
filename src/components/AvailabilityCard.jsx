import React from "react";
import { Clock, Navigation } from "lucide-react";
import { AVAILABILITY, BRAND } from "@/lib/brand";

export default function AvailabilityCard({ className = "" }) {
  return (
    <div className={`bg-card border border-gold/15 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Clock size={18} className="text-gold" />
        <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60 font-medium">Öffnungszeiten & Termine</p>
      </div>

      {AVAILABILITY.hours.length > 0 ? (
        <ul className="space-y-1 mb-2">
          {AVAILABILITY.hours.map((h) => (
            <li key={h.days} className="flex justify-between gap-4 text-charcoal font-medium">
              <span>{h.days}</span>
              <span className="tabular-nums">{h.time}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-charcoal font-semibold mb-1">{AVAILABILITY.summary}</p>
      )}
      <p className="text-charcoal/60 text-sm mb-4">{AVAILABILITY.booking}</p>

      <ul className="space-y-1.5 mb-5">
        {AVAILABILITY.onRequest.map((n) => (
          <li key={n} className="text-sm text-charcoal/70 flex items-start gap-2">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            {n}
          </li>
        ))}
      </ul>

      <a
        href={BRAND.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
      >
        <Navigation size={16} /> Route zur Praxis in Google Maps
      </a>
    </div>
  );
}