import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Globe, MapPin, User, Briefcase, ShieldCheck, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/brand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Impressum – THE FACE® Zürich",
  url: "https://theface-zuerich.ch/impressum",
  inLanguage: "de-CH",
  description: "Impressum von THE FACE® Denise Claire Gadient, Rämistrasse 27, 8001 Zürich.",
  isPartOf: { "@id": "https://theface-zuerich.ch/#website" },
  publisher: { "@id": "https://theface-zuerich.ch/#organization" },
};

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="bg-card border border-gold/15 rounded-2xl p-6 sm:p-7 h-full">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
          <Icon size={18} className="text-gold" />
        </span>
        <h2 className="font-heading text-lg font-semibold text-charcoal">{title}</h2>
      </div>
      <div className="text-charcoal/70 text-sm leading-relaxed space-y-1">{children}</div>
    </div>
  );
}

function Row({ label, children }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3 py-1.5">
      <span className="sm:w-28 shrink-0 text-charcoal/45 text-xs uppercase tracking-wide pt-0.5">{label}</span>
      <span className="text-charcoal/80">{children}</span>
    </div>
  );
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Impressum | THE FACE® Zürich"
        description="Impressum von THE FACE® Denise Claire Gadient. Kontaktdaten, Unternehmensinformationen und rechtliche Angaben."
        jsonLd={jsonLd}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Impressum" }]} />

      <main className="px-5 sm:px-8 pt-10 sm:pt-14 pb-24">
        <article className="mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">Rechtliche Angaben</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal mb-4 leading-tight">Impressum</h1>
            <div className="hairline w-16 mb-6" />
            <p className="text-charcoal/65 leading-relaxed max-w-2xl mb-12">
              Dieses Impressum enthält die gesetzlich vorgeschriebenen Angaben zur Anbieterin dieser Website gemäss
              Schweizer Recht. Hier findest Du alle wesentlichen Unternehmensinformationen, Kontaktdaten sowie
              rechtliche Hinweise zu Haftung, Urheberrecht und Datenschutz. Sollten Fragen offen bleiben, erreiche
              kannst Du mich über die unten stehenden Kontaktwege erreichen.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <ScrollReveal>
              <InfoCard icon={Briefcase} title="Unternehmensinformationen">
                <Row label="Firma">THE FACE®</Row>
                <Row label="Inhaberin">Denise Claire Gadient</Row>
                <Row label="Adresse">
                  {BRAND.street}
                  <br />
                  8001 Zürich
                  <br />
                  Schweiz
                </Row>
                <Row label="Lage">{BRAND.locationNote}</Row>
              </InfoCard>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <InfoCard icon={Phone} title="Kontakt">
                <Row label="Telefon">
                  <a href={`tel:${BRAND.phoneRaw}`} className="text-gold hover:underline">{BRAND.phone}</a>
                </Row>
                <Row label="E-Mail">
                  <a href={`mailto:${BRAND.email}`} className="text-gold hover:underline">{BRAND.email}</a>
                </Row>
                <Row label="Webseite">
                  <a href={`https://${BRAND.website}`} className="text-gold hover:underline">{BRAND.website}</a>
                </Row>
                <Row label="Formular">
                  <Link to="/#kontakt" className="text-gold hover:underline">Kontaktformular</Link>
                </Row>
              </InfoCard>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <ScrollReveal>
              <InfoCard icon={User} title="Vertretungsberechtigte Person">
                <p>Vertretungsberechtigte und verantwortliche Person ist die Inhaberin:</p>
                <p className="font-medium text-charcoal pt-1">Denise Claire Gadient</p>
              </InfoCard>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <InfoCard icon={ShieldCheck} title="Berufsbezeichnung & Zertifizierungen">
                <p>Kosmetikerin EFZ</p>
                <p>VNISSG-zertifizierte Fachperson für Haut &amp; Pigmente</p>
                <p>Dermalogica Skin Expert &amp; Visagistin</p>
                <p className="text-charcoal/45 text-xs pt-2">Berufsbezeichnung verliehen in der Schweiz.</p>
              </InfoCard>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mb-10">
            <div className="bg-sand rounded-2xl border border-gold/15 p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <FileText size={18} className="text-gold" />
                </span>
                <h2 className="font-heading text-lg font-semibold text-charcoal">Handelsregister &amp; UID</h2>
              </div>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Angaben zum allfälligen Handelsregistereintrag, zur UID- sowie zur MWST-Nummer teile ich auf
                Anfrage gerne mit. Eine Veröffentlichung dieser Angaben an dieser Stelle erfolgt nach Vorliegen
                der verifizierten Werte.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">Haftungsausschluss</h2>
            <div className="space-y-5 text-charcoal/70 leading-relaxed text-sm">
              <div>
                <h3 className="font-heading font-semibold text-charcoal mb-1">Haftung für Inhalte</h3>
                <p>
                  Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit,
                  Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-charcoal mb-1">Haftung für Links</h3>
                <p>
                  Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte habe ich keinen
                  Einfluss und kann ich keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
                  der jeweilige Anbieter verantwortlich.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-charcoal mb-1">Verfügbarkeit</h3>
                <p>
                  Ich bemühe mich, diese Website laufend verfügbar zu halten. Eine ständige Verfügbarkeit kann
                  jedoch nicht zugesichert werden. Technische Störungen oder Wartungsarbeiten können zu
                  zeitweisen Unterbrüchen führen.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-charcoal mb-1">Änderungen</h3>
                <p>
                  Ich behalte mir vor, die Inhalte dieser Website sowie dieses Impressums jederzeit und ohne
                  Vorankündigung anzupassen oder zu aktualisieren.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-charcoal mb-1">Anwendbares Recht</h3>
                <p>
                  Es gilt Schweizer Recht. Ausschliesslicher Gerichtsstand ist Zürich, soweit gesetzlich zulässig.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mb-10">
            <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">Urheberrecht</h2>
            <p className="text-charcoal/70 leading-relaxed text-sm">
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              Schweizer Urheberrecht. Texte, Bilder, Logos und Grafiken dürfen ohne schriftliche Zustimmung der
              Autorin nicht verwendet, vervielfältigt, bearbeitet oder verbreitet werden. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts
              bedürfen der schriftlichen Zustimmung der Inhaberin.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mb-12">
            <div className="bg-card border border-gold/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h2 className="font-heading text-lg font-semibold text-charcoal mb-1">Datenschutz</h2>
                <p className="text-charcoal/65 text-sm leading-relaxed">
                  Informationen zur Verarbeitung personenbezogener Daten findest Du in der Datenschutzerklärung.
                </p>
              </div>
              <Link
                to="/datenschutz"
                className="inline-flex items-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-5 py-3 rounded-lg transition-all hover:border-gold whitespace-nowrap"
              >
                Zur Datenschutzerklärung <ArrowRight size={16} className="text-gold" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl bg-charcoal text-white p-8 sm:p-10">
              <p className="font-heading text-xl sm:text-2xl font-semibold mb-1">Fragen zum Impressum?</p>
              <p className="text-white/70 text-sm mb-6">Ich beantworte sie Dir gerne persönlich.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 glass-dark border border-white/20 text-white font-semibold px-5 py-3 rounded-lg transition-all hover:border-gold"
                >
                  <Phone size={16} className="text-gold" /> {BRAND.phone}
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center justify-center gap-2 glass-dark border border-white/20 text-white font-semibold px-5 py-3 rounded-lg transition-all hover:border-gold"
                >
                  <Mail size={16} className="text-gold" /> {BRAND.email}
                </a>
                <Link
                  to="/#kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-5 py-3 rounded-lg transition-all"
                >
                  <ArrowRight size={16} /> Kontaktformular
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors text-sm mt-10"
          >
            <ArrowLeft size={16} /> Zurück zur Startseite
          </Link>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}