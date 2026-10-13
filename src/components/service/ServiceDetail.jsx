import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Check, ArrowRight, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import { BRAND } from "@/lib/brand";
import { REGIONS } from "@/lib/regions";
import { getServiceBySlug, SERVICES } from "@/lib/services";
import InternalLinks from "@/components/InternalLinks";
import ServiceGallery from "@/components/service/ServiceGallery";
import ServiceVideo from "@/components/service/ServiceVideo";

export default function ServiceDetail({ service }) {
  const related = service.related.map(getServiceBySlug).filter(Boolean);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.intro,
    url: `https://theface-zuerich.ch/behandlungen/${service.slug}`,
    provider: { "@id": "https://theface-zuerich.ch/#localbusiness" },
    areaServed: { "@type": "City", name: "Zürich" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Seo title={service.metaTitle} description={service.intro} jsonLd={[serviceSchema, faqSchema]} />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Behandlungen", to: "/behandlungen" },
          { label: service.short },
        ]}
      />

      {/* Hero */}
      <section className="px-5 sm:px-8 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          {service.slug !== "luminfusion" && (
            <p className="text-gold tracking-[0.25em] uppercase font-medium mb-3 text-xs">
              {service.eyebrow}
            </p>
          )}
          <h1 className="font-heading leading-[1.1] mb-5 whitespace-pre-line text-4xl sm:text-5xl md:text-[52px] font-semibold text-charcoal">
            {service.h1}
          </h1>
          <div className="hairline w-16 mx-auto mb-6" />
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {service.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BRAND.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all"
            >
              <Calendar size={18} /> Termin buchen
            </a>
            <Link
              to="/behandlungen"
              className="inline-flex items-center justify-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-7 py-3.5 rounded-lg transition-all hover:border-gold"
            >
              Alle Behandlungen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Was ist */}
      {service.what && (
        <Section>
          <Heading eyebrow="Die Behandlung" title={`Was ist ${service.name}?`} />
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center">
            {service.what}
          </p>
        </Section>
      )}

      {/* Hinweis-Block */}
      {service.notice && (
        <Section bg="sand">
          <div className="max-w-3xl mx-auto bg-card border border-gold/30 rounded-xl p-6 sm:p-8 shadow-sm">
            <p className="font-heading text-lg sm:text-xl font-semibold text-charcoal mb-4 text-center">
              {service.notice.title}
            </p>
            <p className="text-charcoal/75 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {service.notice.body}
            </p>
          </div>
        </Section>
      )}

      {/* Varianten */}
      {service.variants && service.variants.length > 0 && (
        <Section bg="sand">
          <Heading eyebrow="Varianten" title="Die Behandlungen im Detail" />
          <div className="max-w-3xl mx-auto space-y-4">
            {service.variants.map((v) => (
              <div key={v.name} className="bg-card border border-gold/15 rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">{v.name}</h3>
                  <span className="font-heading text-xl font-semibold text-gold tabular-nums">
                    <span className="text-charcoal/40 text-xs font-body font-normal mr-1">CHF</span>
                    {v.price}.–
                  </span>
                </div>
                {v.subtitle && <p className="text-charcoal/55 text-sm mb-3">{v.subtitle}</p>}
                <p className="text-charcoal/75 leading-relaxed text-sm sm:text-base">{v.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Galerie */}
      <ServiceGallery gallery={service.gallery} serviceName={service.name} />

      {/* Video */}
      {service.video && (
        <section className="px-5 py-12 sm:py-16 bg-background">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal className="text-center mb-8">
              <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
                Einblick
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal leading-tight">
                {service.video.title} <span className="gold-gradient-text">in Bewegung</span>
              </h2>
              <div className="hairline w-20 mx-auto mt-4" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden border border-gold/15 shadow-md bg-charcoal">
                <ServiceVideo src={service.video.src} />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Vorteile */}
      <Section bg="sand">
        <Heading eyebrow="Vorteile" title="Was Du davon hast" />
        <div className="grid sm:grid-cols-2 gap-4">
          {service.benefits.map((b) => (
            <div
              key={b}
              className="flex items-start gap-3 bg-card border border-gold/15 rounded-xl p-5"
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <Check size={16} className="text-gold" />
              </span>
              <span className="text-charcoal/80">{b}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Ablauf */}
      <Section>
        <Heading eyebrow="Ablauf" title="So läuft Deine Behandlung ab" />
        <div className="grid sm:grid-cols-3 gap-4">
          {service.process.map((step, i) => (
            <div key={step} className="bg-card border border-gold/15 rounded-xl p-5">
              <span className="font-heading text-2xl font-semibold text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-charcoal/80 mt-2">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Heading eyebrow="FAQ" title="Häufige Fragen" />
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {service.faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-gold/15 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="font-heading font-semibold text-charcoal text-base">
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-charcoal/65 leading-relaxed">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Vorbereitung */}
      {service.preparation && (
        <Section bg="sand">
          <Heading eyebrow="Vorbereitung" title="So bereitest Du Dich vor" />
          <div className="max-w-2xl mx-auto space-y-3">
            {service.preparation.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-card border border-gold/15 rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                  <Check size={16} className="text-gold" />
                </span>
                <span className="text-charcoal/80 text-sm sm:text-base">{p}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Nach der Behandlung */}
      {service.aftercare && (
        <Section>
          <Heading eyebrow="Nachsorge" title="Nach der Behandlung" />
          <div className="max-w-2xl mx-auto space-y-3">
            {service.aftercare.map((a) => (
              <div key={a} className="flex items-start gap-3 bg-card border border-gold/15 rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                  <Check size={16} className="text-gold" />
                </span>
                <span className="text-charcoal/80 text-sm sm:text-base">{a}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Kontraindikationen */}
      {service.contraindications && service.contraindications.length > 0 && (
        <Section bg="sand">
          <Heading eyebrow="Wann nicht" title="Wann diese Behandlung nicht geeignet ist" />
          <div className="max-w-2xl mx-auto space-y-2.5">
            {service.contraindications.map((c) => (
              <div key={c} className="flex items-start gap-3 bg-card border border-gold/15 rounded-xl p-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-charcoal/5 flex items-center justify-center mt-0.5">
                  <span className="text-charcoal/50 text-lg leading-none">!</span>
                </span>
                <span className="text-charcoal/75 text-sm sm:text-base">{c}</span>
              </div>
            ))}
            <p className="text-charcoal/50 text-xs mt-3 text-center">
              Bei Fragen zur Eignung berate ich Dich gerne persönlich – in der Praxis oder per WhatsApp.
            </p>
          </div>
        </Section>
      )}

      {/* Verfügbar in Quartieren */}
      <Section bg="sand">
        <Heading eyebrow="Regionen" title={`${service.name} in Deinem Quartier`} />
        <p className="text-charcoal/60 max-w-2xl mx-auto mb-6 text-center">
          Ich bediene die ganze Stadt Zürich von meiner Praxis an der Rämistrasse. Wähle Dein Quartier für die passende Seite mit Infos zu {service.name}.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {REGIONS.map((r) => (
            <Link
              key={r.slug}
              to={`/behandlungen/${service.slug}/${r.slug}`}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-gold/15 bg-card px-3 py-3 text-sm text-charcoal/75 hover:border-gold hover:text-gold transition-colors"
            >
              <MapPin size={16} className="text-gold shrink-0" /> {r.short}
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/regionen" className="text-gold font-semibold text-sm hover:underline">
            Alle Regionen ansehen
          </Link>
        </div>
      </Section>

      {/* Verwandte Behandlungen */}
      {related.length > 0 && (
        <Section>
          <Heading eyebrow="Weitere Behandlungen" title="Das könnte auch passen" />
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/behandlungen/${r.slug}`}
                className="bg-card border border-gold/15 rounded-xl p-5 hover:border-gold transition-colors"
              >
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">{r.name}</h3>
                <p className="text-charcoal/60 text-sm line-clamp-2">{r.intro}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-gold text-sm font-semibold">
                  {r.name} entdecken <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Cross-navigation links */}
      <InternalLinks
        eyebrow="Weiterführendes"
        title="Das könnte Dich auch interessieren"
        links={[
          { to: "/bewertungen", label: "Google Bewertungen", description: "Echte 4,9-Sterne-Bewertungen zufriedener Kundinnen.", anchor: "Bewertungen ansehen" },
          { to: "/#kontakt", label: "Kontakt aufnehmen", description: "Persönliche Beratung an der Rämistrasse in Zürich.", anchor: "Kontakt aufnehmen" },
          { to: "/#faq", label: "Häufige Fragen", description: "Antworten zu Behandlung, Produkten und Praxis.", anchor: "FAQ lesen" },
          { to: "/bewertung", label: "Behandlung bewerten", description: "Teile Deine Erfahrung und hilf anderen.", anchor: "Bewertung abgeben" },
        ]}
      />

      {/* Final CTA */}
      <Section bg="charcoal" dark>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
          Bereit für {service.name}?
        </h2>
        <p className="text-white/70 max-w-xl mb-7">
          Sichere Dir Deinen Termin an der Rämistrasse: online buchen oder persönlich anfragen. Ob kurze Auszeit oder ausgiebiges Verwöhnerlebnis – ich nehme mir Zeit für Dich und Deine Haut. Ich freue mich auf Dich.
        </p>
        <a
          href={BRAND.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-8 py-4 rounded-lg transition-all"
        >
          <Calendar size={18} /> Termin buchen
        </a>
      </Section>
    </>
  );
}

/* small helpers */
function Section({ children, bg, id, dark }) {
  const cls = dark ? "bg-charcoal" : bg === "sand" ? "bg-sand" : "bg-background";
  return (
    <section id={id} className={`${cls} py-16 sm:py-20 px-5`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

function Heading({ eyebrow, title }) {
  return (
    <ScrollReveal className="text-center mb-10">
      <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">{eyebrow}</p>
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">{title}</h2>
      <div className="hairline w-16 mx-auto" />
    </ScrollReveal>
  );
}