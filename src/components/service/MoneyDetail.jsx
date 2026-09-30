import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Check, MapPin, ArrowRight } from "lucide-react";
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
import { ARTICLES, ARTICLE_SERVICE_MAP } from "@/lib/blog";
import InternalLinks from "@/components/InternalLinks";

// Generates a unique intro paragraph for each service+region combination.
// Varies sentence structure and angle based on service type and region character.
function generateIntro(service, region) {
  const angles = [
    `${region.short} liegt ${region.localContext.commute.toLowerCase().includes("wenigen minuten") ? "nah" : "eine kurze Fahrt entfernt"} von meiner Praxis an der Rämistrasse. Dort erhältst Du ${service.name} – ${service.intro.split(".")[0].toLowerCase()}.`,
    `Suchst Du ${service.name} in der Nähe von ${region.short}? In meiner Praxis an der Rämistrasse verbinde ich über 30 Jahre Erfahrung mit ${service.eyebrow.toLowerCase()}, massgeschneidert auf Dein Hautbild.`,
    `${service.name} nahe ${region.short}: An der Rämistrasse 27 arbeite ich mit hochwertigen Clean-Produkten und der Dermalogica FACE-MAP. ${service.intro.split(". ")[1] || ""}`,
    `Von ${region.short} bist Du rasch bei mir an der Rämistrasse. ${service.name} ist eine meiner Spezialitäten: ${service.intro.split(".")[0].toLowerCase()}.`,
    `In ${region.short} wohnen und ${service.name} suchen? Meine Praxis an der Rämistrasse bietet Dir ${service.name} mit individueller Hautanalyse und über 30 Jahren Erfahrung.`,
  ];
  const idx = (service.slug.length + region.slug.length) % angles.length;
  return angles[idx];
}

// Generates a unique commute FAQ answer using the region's specific commute info.
function generateCommuteFaq(region) {
  const commute = region.localContext.commute;
  const areaType = region.localContext.areaType;
  return `Meine Praxis an der Rämistrasse 27, 8001 Zürich liegt vis-à-vis dem Parkhaus Hohe Promenade. ${commute} ${region.short} ist ein ${areaType.toLowerCase()}. Termine buchst Du rund um die Uhr online über meinen Phorest-Kalender.`;
}

// Generates a unique final CTA text based on the service.
function generateCtaText(service) {
  const ctas = [
    `Sichere Dir Deinen Termin für ${service.name} an der Rämistrasse: online buchen oder per WhatsApp anfragen.`,
    `Buche ${service.name} jetzt online: ich berate Dich individuell und nehme mir Zeit für Deine Haut.`,
    `Reserviere Deinen Wunschtermin für ${service.name}: schnell, unkompliziert und auf Dich abgestimmt.`,
    `Vereinbare Deinen Termin für ${service.name} online oder schreib mir per WhatsApp. Ich freue mich auf Dich.`,
  ];
  const idx = service.slug.length % ctas.length;
  return ctas[idx];
}

export default function MoneyDetail({ service, region }) {
  const faqs = [
    ...service.faqs,
    {
      q: `Wie komme ich von ${region.short} zu Dir?`,
      a: generateCommuteFaq(region),
    },
  ];
  const neighbors = REGIONS.filter((r) => r.slug !== region.slug).slice(0, 6);
  const metaTitle = `${service.name} in ${region.name} | THE FACE®`;
  const intro = generateIntro(service, region);
  const ctaText = generateCtaText(service);
  const relatedServices = service.related.map(getServiceBySlug).filter(Boolean).slice(0, 3);
  const relatedArticles = ARTICLES.filter((a) => {
    const slugs = ARTICLE_SERVICE_MAP[a.slug] || [];
    return slugs.includes(service.slug);
  }).slice(0, 3);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} in ${region.name}`,
    description: intro,
    url: `https://theface-zuerich.ch/behandlungen/${service.slug}/${region.slug}`,
    provider: { "@id": "https://theface-zuerich.ch/#localbusiness" },
    areaServed: { "@type": "AdministrativeArea", name: region.name },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Seo title={metaTitle} description={intro} jsonLd={[serviceSchema, faqSchema]} />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Behandlungen", to: "/behandlungen" },
          { label: service.short, to: `/behandlungen/${service.slug}` },
          { label: region.short },
        ]}
      />

      {/* Hero */}
      <section className="px-5 sm:px-8 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
            {service.eyebrow} · {region.short}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-[52px] font-semibold text-charcoal leading-[1.1] mb-5">
            {service.name} in {region.name}
          </h1>
          <div className="hairline w-16 mx-auto mb-6" />
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {intro}
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
              to={`/regionen/${region.slug}`}
              className="inline-flex items-center justify-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-7 py-3.5 rounded-lg transition-all hover:border-gold"
            >
              <MapPin size={16} className="text-gold" /> Region {region.short}
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

      {/* Warum in region */}
      <Section bg="sand">
        <Heading eyebrow={`${region.short}`} title={`Warum ${service.name} bei THE FACE® Denise Claire Gadient`} />
        <div className="grid sm:grid-cols-2 gap-4">
          {region.benefits.map((b) => (
            <div
              key={b.headline}
              className="flex items-start gap-3 bg-card border border-gold/15 rounded-xl p-5"
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                <Check size={16} className="text-gold" />
              </span>
              <div>
                <h3 className="font-heading font-semibold text-charcoal">{b.headline}</h3>
                <p className="text-charcoal/65 text-sm mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Preise */}
      <Section>
        <Heading eyebrow="Preise" title="Preisfaktoren" />
        <div className="max-w-2xl mx-auto">
          {service.priceFactors.map((p) => (
            <div
              key={p.label}
              className="flex items-center justify-between gap-4 py-3 border-b border-gold/10 last:border-0"
            >
              <span className="text-charcoal/80">{p.label}</span>
              <span className="font-heading text-xl font-semibold text-charcoal tabular-nums">
                <span className="text-charcoal/40 text-xs font-body font-normal mr-1">CHF</span>{p.price}.–
              </span>
            </div>
          ))}
          <p className="text-charcoal/50 text-xs mt-4">
            Preise in CHF, inkl. MWST. Der verbindliche Preis wird in der persönlichen Hautanalyse festgelegt.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="sand">
        <Heading eyebrow="FAQ" title="Häufige Fragen" />
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-gold/15 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="font-heading font-semibold text-charcoal text-base">{f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-charcoal/65 leading-relaxed">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Nachbarorte / Verlinkung */}
      <Section>
        <Heading eyebrow="Regionen" title={`${service.name} in Nachbarquartieren`} />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {neighbors.map((r) => (
            <Link
              key={r.slug}
              to={`/behandlungen/${service.slug}/${r.slug}`}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-gold/15 bg-card px-3 py-3 text-sm text-charcoal/75 hover:border-gold hover:text-gold transition-colors"
            >
              <MapPin size={16} className="text-gold shrink-0" /> {r.short}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 text-sm">
          <Link to={`/behandlungen/${service.slug}`} className="text-gold font-semibold hover:underline">
            Zur {service.name}-Übersicht
          </Link>
          <span className="hidden sm:inline text-charcoal/30">·</span>
          <Link to={`/regionen/${region.slug}`} className="text-gold font-semibold hover:underline">
            Regionseite {region.short}
          </Link>
          <span className="hidden sm:inline text-charcoal/30">·</span>
          <Link to="/behandlungen" className="text-gold font-semibold hover:underline">
            Alle Behandlungen <ArrowRight size={18} className="inline" />
          </Link>
        </div>
      </Section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <Section>
          <Heading eyebrow="Weitere Behandlungen" title={`Das könnte auch passen`} />
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedServices.map((r) => (
              <Link
                key={r.slug}
                to={`/behandlungen/${r.slug}/${region.slug}`}
                className="bg-card border border-gold/15 rounded-xl p-5 hover:border-gold transition-colors group"
              >
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-1">{r.name}</h3>
                <p className="text-charcoal/60 text-sm line-clamp-2">{r.intro}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-gold text-sm font-semibold">
                  {r.name} in {region.short} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <Section bg="sand">
          <Heading eyebrow="Wissen" title="Verwandte Artikel aus dem Blog" />
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                to={`/blog/${a.slug}`}
                className="bg-card border border-gold/15 rounded-xl p-5 hover:border-gold transition-colors group"
              >
                <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  {a.category}
                </span>
                <h3 className="font-heading text-base font-semibold text-charcoal mb-1 line-clamp-2">{a.title}</h3>
                <p className="text-charcoal/60 text-sm line-clamp-2">{a.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-gold text-sm font-semibold">
                  Artikel lesen <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Cross-navigation links */}
      <InternalLinks
        eyebrow="Weiterführendes"
        title="Schnellnavigation"
        links={[
          { to: "/bewertungen", label: "Google Bewertungen", description: "4,9 Sterne von echten Kundinnen.", anchor: "Bewertungen ansehen" },
          { to: "/#kontakt", label: "Kontakt aufnehmen", description: "Persönliche Beratung in Zürich.", anchor: "Kontakt aufnehmen" },
          { to: `/behandlungen/${service.slug}`, label: `${service.name} Übersicht`, description: "Alle Details zur Behandlung.", anchor: "Behandlung ansehen" },
          { to: `/regionen/${region.slug}`, label: `Region ${region.short}`, description: "Mehr zur Gesichtsbehandlung in Deinem Quartier.", anchor: "Region ansehen" },
        ]}
      />

      {/* Final CTA */}
      <Section bg="charcoal" dark>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
          {service.name} in {region.short} buchen
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-7">
          {ctaText}
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

function Section({ children, bg, dark }) {
  const cls = dark ? "bg-charcoal" : bg === "sand" ? "bg-sand" : "bg-background";
  return (
    <section className={`${cls} py-16 sm:py-20 px-5`}>
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