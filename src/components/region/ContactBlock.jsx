import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { BRAND, AVAILABILITY } from "@/lib/brand";

export default function ContactBlock({ region }) {
  return (
    <section className="bg-background py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">Kontakt</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            Deine Kosmetik-Praxis für {region.short}
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            {region.address
              ? `Regelmässig empfange ich Dich auch in ${region.short}: ${region.address.street}, ${region.address.city}. ${AVAILABILITY.summary}, bequem online buchbar.`
              : `Alle Behandlungen finden in meiner Praxis an der Rämistrasse 27 in Zürich statt, von ${region.short} aus gut erreichbar. ${AVAILABILITY.summary}, bequem online buchbar.`}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-gold/15 rounded-2xl p-6 flex items-start gap-3">
              <MapPin size={20} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-charcoal/50 mb-1">Adresse</p>
                {region.address ? (
                  <>
                    <p className="text-charcoal font-medium">{region.address.name}</p>
                    {region.address.careOf && <p className="text-charcoal/70 text-sm">{region.address.careOf}</p>}
                    {region.address.company && <p className="text-charcoal/70 text-sm">{region.address.company}</p>}
                    <p className="text-charcoal font-medium">{region.address.street}</p>
                    <p className="text-charcoal font-medium">{region.address.city}</p>
                  </>
                ) : (
                  <>
                    <p className="text-charcoal font-medium">{BRAND.street}, {BRAND.city}</p>
                    <p className="text-charcoal/60 text-sm">{BRAND.locationNote}</p>
                  </>
                )}
              </div>
            </div>
            <div className="bg-card border border-gold/15 rounded-2xl p-6 flex items-start gap-3">
              <Clock size={20} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-charcoal/50 mb-1">Öffnungszeiten</p>
                {AVAILABILITY.hours.length > 0 ? (
                  AVAILABILITY.hours.map((h) => (
                    <p key={h.days} className="text-charcoal font-medium">{h.days}: {h.time}</p>
                  ))
                ) : (
                  <p className="text-charcoal font-medium">{AVAILABILITY.summary}</p>
                )}
                <p className="text-charcoal/60 text-sm">{AVAILABILITY.booking}</p>
                {AVAILABILITY.onRequest.map((n) => (
                  <p key={n} className="text-charcoal/60 text-sm">{n}</p>
                ))}
              </div>
            </div>
            <a href={`tel:${BRAND.phoneRaw}`} className="bg-card border border-gold/15 rounded-2xl p-6 flex items-start gap-3 hover:border-gold transition-colors">
              <Phone size={20} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-charcoal/50 mb-1">Telefon</p>
                <p className="text-charcoal font-medium">{BRAND.phone}</p>
              </div>
            </a>
            <a href={`mailto:${BRAND.email}`} className="bg-card border border-gold/15 rounded-2xl p-6 flex items-start gap-3 hover:border-gold transition-colors">
              <Mail size={20} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-charcoal/50 mb-1">E-Mail</p>
                <p className="text-charcoal font-medium break-all">{BRAND.email}</p>
              </div>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-8" delay={0.15}>
          <a
            href={BRAND.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-6 py-3 rounded-lg transition-all hover:border-gold"
          >
            <ExternalLink size={16} className="text-gold" /> Route zur Praxis in Google Maps
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}