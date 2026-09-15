import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BRAND } from "@/lib/brand";
import { SERVICES } from "@/lib/services";
import InternalLinks from "@/components/InternalLinks";

export default function Behandlungen() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `https://theface-zuerich.ch/behandlungen/${s.slug}`,
    })),
  };
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Behandlungen in Zürich | THE FACE®",
    url: "https://theface-zuerich.ch/behandlungen",
    inLanguage: "de-CH",
    description: "Alle Gesichtsbehandlungen von THE FACE® Zürich: Hautanalyse, Pro Skin Treatments, Targeted Skin Solutions, Medical Skin, Longevity Glow, Make-up, Lashlift und Quantum Angel Healing.",
    isPartOf: { "@id": "https://theface-zuerich.ch/#website" },
    about: { "@id": "https://theface-zuerich.ch/#localbusiness" },
    publisher: { "@id": "https://theface-zuerich.ch/#organization" },
  };
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Behandlungen in Zürich | THE FACE®"
        description="Alle Gesichtsbehandlungen von THE FACE® Zürich: Hautanalyse, Pro Skin Treatments, Targeted Skin Solutions, Medical Skin, Longevity Glow, Make-up, Lashlift und Quantum Angel Healing."
        jsonLd={[itemList, webPage]}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Behandlungen" }]} />
      <main>
        <section className="px-5 sm:px-8 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Behandlungen
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[52px] font-semibold text-charcoal leading-[1.1] mb-5">
              Alle Behandlungen in Zürich
            </h1>
            <div className="hairline w-16 mx-auto mb-6" />
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Über 30 Jahre spezialisiert auf holistische Gesichtspflege. Jede Behandlung beginnt mit einer persönlichen Hautanalyse und wird auf Deine Haut abgestimmt.
            </p>
          </div>
        </section>

        <section className="px-5 sm:px-8 py-10">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.05}>
                <Link
                  to={`/behandlungen/${s.slug}`}
                  className="block h-full bg-card border border-gold/15 rounded-2xl p-6 hover:border-gold hover:shadow-lg hover:shadow-gold/10 transition-all"
                >
                  <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
                    {s.eyebrow}
                  </p>
                  <h2 className="font-heading text-xl font-semibold text-charcoal mb-3">{s.name}</h2>
                  <p className="text-charcoal/65 text-sm leading-relaxed mb-4 line-clamp-3">
                    {s.intro}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold">
                    {s.name} ansehen <ArrowRight size={18} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="bg-charcoal py-16 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
              Unsicher, welche Behandlung passt?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-7">
              In der persönlichen Hautanalyse empfehle ich Dir die passende Behandlung. Buche direkt einen Termin.
            </p>
            <a
              href={BRAND.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-8 py-4 rounded-lg transition-all"
            >
              <Calendar size={18} /> Termin buchen
            </a>
          </div>
        </section>

        <InternalLinks
          eyebrow="Weiterführendes"
          title="Mehr von THE FACE®"
          links={[
            { to: "/regionen", label: "Regionen in Zürich", description: "Gesichtsbehandlung in Deinem Quartier.", anchor: "Regionen ansehen" },
            { to: "/bewertungen", label: "Google Bewertungen", description: "4,9 Sterne von echten Kundinnen.", anchor: "Bewertungen ansehen" },
            { to: "/blog", label: "Blog & Ratgeber", description: "Pflegetipps und Hautwissen.", anchor: "Blog lesen" },
            { to: "/#kontakt", label: "Kontakt aufnehmen", description: "Persönliche Beratung anfragen.", anchor: "Kontakt aufnehmen" },
          ]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}