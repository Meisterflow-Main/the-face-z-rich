import React from "react";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import RegionHero from "@/components/region/RegionHero";
import TrustBar from "@/components/region/TrustBar";
import ContactBlock from "@/components/region/ContactBlock";
import RegionServices from "@/components/region/RegionServices";
import WhyUs from "@/components/region/WhyUs";
import PriceCalculator from "@/components/region/PriceCalculator";
import RegionReviews from "@/components/region/RegionReviews";
import RegionFAQ from "@/components/region/RegionFAQ";
import MoreServices from "@/components/region/MoreServices";
import RegionMoneyLinks from "@/components/region/RegionMoneyLinks";
import ServiceArea from "@/components/region/ServiceArea";
import RegionLocalContext from "@/components/region/RegionLocalContext";
import RegionNeighbors from "@/components/region/RegionNeighbors";
import FinalCTA from "@/components/region/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InternalLinks from "@/components/InternalLinks";
import { localBusinessSchema } from "@/lib/schema";

export default function RegionLandingPage({ region }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: region.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const regionBusinessSchema = {
    ...localBusinessSchema,
    "@type": "HealthAndBeautyBusiness",
    areaServed: {
      "@type": "AdministrativeArea",
      name: region.name,
    },
    url: `https://theface-zuerich.ch/regionen/${region.slug}`,
  };
  return (
    <>
      <Seo title={region.metaTitle} description={region.metaDescription} jsonLd={[regionBusinessSchema, faqSchema]} />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Regionen", to: "/regionen" },
          { label: region.short },
        ]}
      />
      <main>
        <RegionHero region={region} />
        <TrustBar />
        <ContactBlock region={region} />
        <RegionServices region={region} />
        <RegionLocalContext region={region} />
        <WhyUs region={region} />
        <PriceCalculator region={region} />
        <RegionReviews region={region} />
        <RegionFAQ region={region} />
        <MoreServices />
        <RegionMoneyLinks region={region} />
        <ServiceArea region={region} />
        <RegionNeighbors region={region} />
        <InternalLinks
          eyebrow="Weiterführendes"
          title="Schnellnavigation"
          links={[
            { to: "/bewertungen", label: "Google Bewertungen", description: "4,9 Sterne von echten Kundinnen.", anchor: "Bewertungen ansehen" },
            { to: "/#kontakt", label: "Kontakt aufnehmen", description: "Persönliche Beratung an der Rämistrasse.", anchor: "Kontakt aufnehmen" },
            { to: "/blog", label: "Blog & Ratgeber", description: "Pflegetipps und Hautwissen.", anchor: "Blog lesen" },
            { to: "/behandlungen", label: "Alle Behandlungen", description: "Von der Hautanalyse bis zum Brautmake-up.", anchor: "Behandlungen entdecken" },
          ]}
        />
        <FinalCTA region={region} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}