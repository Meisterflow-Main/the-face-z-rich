// Centralized Schema.org structured data for THE FACE® Zürich.
// All data is sourced from real, on-website information only (brand.js, services.js, regions.js, blog.js).
// No invented facts: no opening hours (unverified), no fabricated reviews, no fake geo coordinates.

import { BRAND, ASSETS } from "@/lib/brand";
import { SERVICES } from "@/lib/services";
import { REGIONS } from "@/lib/regions";

const SITE = "https://theface-zuerich.ch";
const RATING = "4.9";
const REVIEW_COUNT = 16;

// ── Organization ──────────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "THE FACE® Denise Claire Gadient",
  legalName: "THE FACE® Denise Claire Gadient",
  description:
    "Über 30 Jahre spezialisiert auf holistische Gesichtspflege in Zürich. Kosmetikerin EFZ, VNISSG Haut & Pigmente Spezialistin. Hautanalyse, Pro Skin Treatments, Longevity Glow, Medical Skin, Make-up und Lashlift.",
  url: SITE,
  logo: ASSETS.logo,
  image: ASSETS.hero,
  email: BRAND.email,
  telephone: BRAND.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.street,
    postalCode: "8001",
    addressLocality: "Zürich",
    addressCountry: "CH",
  },
  founder: { "@id": `${SITE}/#person` },
  sameAs: [
    BRAND.instagram,
    BRAND.googleReview,
  ],
};

// ── Person (founder / practitioner) ───────────────────────────────────────
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Denise Claire Gadient",
  jobTitle: "Kosmetikerin EFZ, VNISSG Haut & Pigmente Spezialistin",
  worksFor: { "@id": `${SITE}/#organization` },
  url: SITE,
  image: ASSETS.hero,
  knowsAbout: [
    "Holistische Gesichtspflege",
    "Hautanalyse",
    "Skin Longevity",
    "Clean Beauty",
    "Dermalogica® Pro Skin Treatments",
    "Microneedling",
    "Nanoneedling",
    "Make-up & Visagistik",
  ],
};

// ── LocalBusiness (HealthAndBeautyBusiness) ───────────────────────────────
// No openingHours: the client has not formally verified hours yet.
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE}/#localbusiness`,
  name: "THE FACE® Denise Claire Gadient",
  description:
    "Holistische Gesichtspflege in Zürich. Hautanalyse, Pro Skin Treatments, Longevity Glow, Medical Skin, Make-up und Lashlift von Kosmetikerin EFZ Denise Claire Gadient.",
  url: SITE,
  image: ASSETS.hero,
  logo: ASSETS.logo,
  telephone: BRAND.phone,
  email: BRAND.email,
  priceRange: "CHF 95–470",
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.street,
    postalCode: "8001",
    addressLocality: "Zürich",
    addressCountry: "CH",
  },
  parentOrganization: { "@id": `${SITE}/#organization` },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING,
    reviewCount: REVIEW_COUNT,
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gesichtsbehandlungen",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.intro,
        url: `${SITE}/behandlungen/${s.slug}`,
      },
    })),
  },
  areaServed: [
    { "@type": "City", name: "Zürich" },
    ...REGIONS.map((r) => ({
      "@type": "AdministrativeArea",
      name: r.name,
    })),
  ],
  sameAs: [BRAND.instagram, BRAND.googleReview],
};

// ── WebSite (with SearchAction) ───────────────────────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  name: "THE FACE® Zürich",
  alternateName: "THE FACE® Denise Claire Gadient",
  url: SITE,
  inLanguage: "de-CH",
  publisher: { "@id": `${SITE}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE}/blog?kategorie={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ── ContactPoint ──────────────────────────────────────────────────────────
export const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  contactType: "customer service",
  telephone: BRAND.phone,
  email: BRAND.email,
  url: `${SITE}/#kontakt`,
  availableLanguage: ["de", "en"],
};

// ── Helper: full schema graph for the Home page ──────────────────────────
export const homeSchemaGraph = (faqSchema) => [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  personSchema,
  contactPointSchema,
  faqSchema,
];

// ── Helper: WebPage schema for generic pages ──────────────────────────────
export const webPageSchema = (name, path, description) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  url: `${SITE}${path}`,
  inLanguage: "de-CH",
  description,
  isPartOf: { "@id": `${SITE}/#website` },
  about: { "@id": `${SITE}/#localbusiness` },
  publisher: { "@id": `${SITE}/#organization` },
});