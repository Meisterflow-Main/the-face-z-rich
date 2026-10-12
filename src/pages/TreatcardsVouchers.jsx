import React from "react";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import ScrollReveal from "@/components/ScrollReveal";
import InternalLinks from "@/components/InternalLinks";
import { BRAND } from "@/lib/brand";
import { Gift, Sparkles, Calendar, MessageCircle } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Treatcards & Gutscheine – THE FACE® Zürich",
  url: "https://theface-zuerich.ch/treatcards-vouchers",
  inLanguage: "de-CH",
  description:
    "Treatcards und Gutscheine von THE FACE® Denise Claire Gadient in Zürich – die perfekte Geschenkkarte für jede Hautpflege-Behandlung.",
  isPartOf: { "@id": "https://theface-zuerich.ch/#website" },
  about: { "@id": "https://theface-zuerich.ch/#localbusiness" },
};

const VOUCHER_OPTIONS = [
  {
    title: "Treatcard ab CHF 65",
    desc: "Die flexible Geschenkkarte – wählbar für Make-up Beratung, Minlen Kids & Tweens oder als Teilbetrag für jede Behandlung.",
    icon: Gift,
  },
  {
    title: "Pro Skin Treat",
    desc: "Eine Premium-Gesichtsbehandlung nach Wahl: Pro Skin 45, 60, 90 oder Ultra Skin 120 – ab CHF 180.",
    icon: Sparkles,
  },
  {
    title: "Longevity Glow",
    desc: "Das innovative Skin Longevity-Treatment für nachhaltigen Glow und strahlende, jugendliche Haut – CHF 225.",
    icon: Sparkles,
  },
  {
    title: "Individueller Betrag",
    desc: "Du wünschst einen eigenen Betrag? Schreib mir gerne per WhatsApp und ich erstelle Dir Deinen persönlichen Gutschein.",
    icon: MessageCircle,
  },
];

export default function TreatcardsGutscheine() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Treatcards & Gutscheine | THE FACE® Zürich – Denise Claire Gadient"
        description="Treatcards und Gutscheine von THE FACE® Denise Claire Gadient in Zürich – die perfekte Geschenkkarte für Hautanalyse, Pro Skin Treatments, Longevity Glow und mehr."
        jsonLd={jsonLd}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Treatcards & Gutscheine" }]} />

      <main className="px-5 sm:px-8 pt-10 sm:pt-14 pb-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">
              Schenken & Verwöhnen
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal mb-4 leading-tight">
              Treatcards &amp; Gutscheine
            </h1>
            <div className="hairline w-16 mb-6" />
            <p className="text-charcoal/65 leading-relaxed mb-10 max-w-2xl">
              Mit einer Treatcard oder einem Gutschein von THE FACE® schenkst Du einen Moment
              Pflege und Entspannung. Ob für die Hautanalyse, ein Pro Skin Treatment oder den
              Longevity Glow – jede Karte ist individuell auf die Beschenkte Person abgestimmt.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {VOUCHER_OPTIONS.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.05}>
                <div className="glass rounded-2xl border border-gold/20 p-6 sm:p-7 h-full hover:border-gold transition-colors">
                  <v.icon size={26} className="text-gold mb-4" />
                  <h2 className="font-heading text-xl font-semibold text-charcoal mb-2">
                    {v.title}
                  </h2>
                  <p className="text-charcoal/65 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl bg-charcoal text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
              <div>
                <p className="font-heading text-xl sm:text-2xl font-semibold mb-1">
                  Eine Treatcard verschenken?
                </p>
                <p className="text-white/70 text-sm">
                  Schreib mir per WhatsApp und ich erstelle Dir Deinen persönlichen Gutschein.
                </p>
              </div>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-6 py-3.5 rounded-lg transition-all whitespace-nowrap"
              >
                <MessageCircle size={18} /> Gutschein anfragen
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass rounded-2xl border border-gold/20 p-8 sm:p-10">
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">
                So funktioniert es
              </h2>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="font-heading text-gold font-semibold text-sm pt-1">01</span>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    Schreib mir per WhatsApp oder buche einen Termin – nenne den gewünschten
                    Betrag oder die Behandlung.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-heading text-gold font-semibold text-sm pt-1">02</span>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    Ich erstelle Dir Deine persönliche Treatcard – zum Abholen oder per E-Mail.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="font-heading text-gold font-semibold text-sm pt-1">03</span>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    Die Beschenkte Person bucht bequem online den passenden Termin und löst die
                    Karte ein.
                  </p>
                </li>
              </ol>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-10 text-center">
              <a
                href={BRAND.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all"
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
            { to: "/bewertungen", label: "Google Bewertungen", description: "4,9 Sterne von echten Kundinnen.", anchor: "Bewertungen ansehen" },
          ]}
        />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </div>
  );
}