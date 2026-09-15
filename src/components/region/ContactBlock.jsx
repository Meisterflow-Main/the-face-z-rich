import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { BRAND } from "@/lib/brand";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Rämistrasse+27+8001+Zürich";

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
            Mein Studio an der Rämistrasse ist von {region.short} schnell erreichbar. Termine nach Vereinbarung – bequem online buchbar.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-gold/15 rounded-2xl p-6 flex items-start gap-3">
              <MapPin size={20} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-charcoal/50 mb-1">Adresse</p>
                <p className="text-charcoal font-medium">{BRAND.street}, {BRAND.city}</p>
                <p className="text-charcoal/60 text-sm">{BRAND.locationNote}</p>
              </div>
            </div>
            <div className="bg-card border border-gold/15 rounded-2xl p-6 flex items-start gap-3">
              <Clock size={20} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-charcoal/50 mb-1">Öffnungszeiten</p>
                <p className="text-charcoal font-medium">Termine nach Vereinbarung</p>
                <p className="text-charcoal/60 text-sm">Online-Buchung rund um die Uhr</p>
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
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-6 py-3 rounded-lg transition-all hover:border-gold"
          >
            <ExternalLink size={16} className="text-gold" /> Google Maps öffnen
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}