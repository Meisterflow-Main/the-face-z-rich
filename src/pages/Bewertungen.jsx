import React from "react";
import { Link } from "react-router-dom";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";
import ScrollReveal from "@/components/ScrollReveal";
import { BRAND } from "@/lib/brand";
import { Calendar, Star, PenLine, ExternalLink } from "lucide-react";
import GoogleLogo from "@/components/GoogleLogo";
import InternalLinks from "@/components/InternalLinks";

const RATING = "4.9";
const COUNT = 16;
const MAPS_EMBED =
  "https://maps.google.com/maps?q=THE%20FACE%20Denise%20Claire%20Gadient%20R%C3%A4mistrasse%2027%208001%20Z%C3%BCrich&output=embed";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Bewertungen – THE FACE® Zürich",
  url: "https://theface-zuerich.ch/bewertungen",
  inLanguage: "de-CH",
  description: "Echte Google-Bewertungen für THE FACE® Denise Claire Gadient in Zürich. Aktuelle Durchschnittsbewertung: 4.9 von 5 Sternen (16 Bewertungen).",
  isPartOf: { "@id": "https://theface-zuerich.ch/#website" },
  about: { "@id": "https://theface-zuerich.ch/#localbusiness" },
  mainEntity: {
    "@id": "https://theface-zuerich.ch/#localbusiness",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING,
      reviewCount: COUNT,
      bestRating: "5",
      worstRating: "1",
    },
  },
};

export default function Bewertungen() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Bewertungen | THE FACE® Zürich – 4.9 von 5 Sternen"
        description={`Echte Google-Bewertungen von Kundinnen und Kunden für THE FACE® Denise Claire Gadient in Zürich. Aktuelle Durchschnittsbewertung: ${RATING} von 5 Sternen (${COUNT} Bewertungen).`}
        jsonLd={jsonLd}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Bewertungen" }]} />

      <main className="px-5 sm:px-8 pt-10 sm:pt-14 pb-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">Kundenstimmen</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal mb-4 leading-tight">
              Bewertungen für THE FACE® Zürich
            </h1>
            <div className="hairline w-16 mb-6" />
            <p className="text-charcoal/65 leading-relaxed mb-10 max-w-2xl">
              Transparenz ist mir wichtig. Hier siehst Du die aktuelle, echte Bewertung meines Studios
              direkt von Google. Alle Bewertungen werden von Google verwaltet und stammen von
              realen Kundinnen und Kunden.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="glass rounded-2xl border border-gold/20 p-8 sm:p-10 mb-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <GoogleLogo size={24} />
                <span className="text-charcoal/55 text-sm tracking-wide">Bewertungen von Google</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={32} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading text-5xl font-semibold text-charcoal mb-2">{RATING}</p>
              <p className="text-charcoal/55 text-sm mb-5">von 5 Sternen · {COUNT} Google-Bewertungen</p>
              <GoogleReviewBadge variant="large" className="justify-center" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-sm mb-10">
              <iframe
                title="THE FACE® Zürich auf Google Maps"
                src={MAPS_EMBED}
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <a
                href={BRAND.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl border border-gold/20 p-6 hover:border-gold transition-colors"
              >
                <ExternalLink size={24} className="text-gold mb-3" />
                <p className="font-heading font-semibold text-charcoal mb-1">Alle Bewertungen auf Google</p>
                <p className="text-charcoal/55 text-sm">Vollständige, tagesaktuelle Bewertungen direkt im Google-Profil ansehen.</p>
              </a>
              <Link
                to="/bewertung"
                className="glass rounded-2xl border border-gold/20 p-6 hover:border-gold transition-colors"
              >
                <PenLine size={24} className="text-gold mb-3" />
                <p className="font-heading font-semibold text-charcoal mb-1">Bewertung abgeben</p>
                <p className="text-charcoal/55 text-sm">Teile Deine Erfahrung und hilf anderen, THE FACE® zu finden.</p>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl bg-charcoal text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-heading text-xl sm:text-2xl font-semibold mb-1">Überzeuge Dich selbst.</p>
                <p className="text-white/70 text-sm">Vereinbare jetzt Deinen persönlichen Beratungstermin.</p>
              </div>
              <a
                href={BRAND.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all whitespace-nowrap"
              >
                <Calendar size={18} /> Termin buchen
              </a>
            </div>
          </ScrollReveal>
        </div>

        <InternalLinks
          eyebrow="Weiterführendes"
          title="Das könnte Dich auch interessieren"
          links={[
            { to: "/behandlungen", label: "Alle Behandlungen", description: "Hautanalyse, Pro Skin, Targeted und Medical Skin Treatments.", anchor: "Behandlungen entdecken" },
            { to: "/regionen", label: "Regionen in Zürich", description: "Gesichtsbehandlung in Deinem Quartier.", anchor: "Regionen ansehen" },
            { to: "/#kontakt", label: "Kontakt aufnehmen", description: "Persönliche Beratung an der Rämistrasse.", anchor: "Kontakt aufnehmen" },
            { to: "/blog", label: "Blog & Ratgeber", description: "Pflegetipps und Hautwissen von Denise.", anchor: "Blog lesen" },
          ]}
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}