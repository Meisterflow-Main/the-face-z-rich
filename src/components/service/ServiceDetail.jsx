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
import { getServiceBySlug } from "@/lib/services";

export default function ServiceDetail({ service }) {
  const related = service.related.map(getServiceBySlug).filter(Boolean);

  return (
    <>
      <Seo title={service.metaTitle} description={service.intro} />
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
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
            {service.eyebrow}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-[52px] font-semibold text-charcoal leading-[1.1] mb-5">
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
      <Section>
        <Heading eyebrow="Die Behandlung" title={`Was ist ${service.name}?`} />
        <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-3xl">
          {service.what}
        </p>
      </Section>

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

      {/* Preise */}
      <Section bg="sand" id="preise">
        <Heading eyebrow="Preise" title="Preisfaktoren" />
        <div className="max-w-2xl mx-auto">
          {service.priceFactors.map((p) => (
            <div
              key={p.label}
              className="flex items-center justify-between gap-4 py-3 border-b border-gold/10 last:border-0"
            >
              <span className="text-charcoal/80">{p.label}</span>
              <span className="font-heading text-xl font-semibold text-charcoal tabular-nums">
                {p.price}
                <span className="text-charcoal/40 text-xs font-body font-normal ml-1">CHF</span>
              </span>
            </div>
          ))}
          <p className="text-charcoal/50 text-xs mt-4">
            Preise in CHF, inkl. MWST. Behandlungsdauer auf Anfrage. Der verbindliche Preis wird in der persönlichen Hautanalyse festgelegt.
          </p>
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

      {/* Verfügbar in Quartieren */}
      <Section bg="sand">
        <Heading eyebrow="Regionen" title={`${service.name} in Deinem Quartier`} />
        <p className="text-charcoal/60 max-w-2xl mx-auto mb-6 text-center">
          Ich bediene die ganze Stadt Zürich von meiner Praxis an der Rämistrasse. Wähle Dein Quartier für die passende Seite zur {service.name}.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {REGIONS.map((r) => (
            <Link
              key={r.slug}
              to={`/behandlungen/${service.slug}/${r.slug}`}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-gold/15 bg-card px-3 py-3 text-sm text-charcoal/75 hover:border-gold hover:text-gold transition-colors"
            >
              <MapPin size={14} className="text-gold shrink-0" /> {r.short}
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
                  Mehr erfahren <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section bg="charcoal" dark>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
          Bereit für {service.name}?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-7">
          Sichere Dir Deinen Termin an der Rämistrasse – online buchen oder persönlich anfragen. Ich freue mich auf Dich.
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