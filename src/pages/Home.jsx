import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroPromoImages from "@/components/HeroPromoImages";
import BrandVideo from "@/components/BrandVideo";
import TreatmentVideos from "@/components/TreatmentVideos";
import TechnologyVideos from "@/components/TechnologyVideos";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import StudioGallery from "@/components/StudioGallery";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import InternalLinks from "@/components/InternalLinks";
import Seo from "@/components/region/Seo";
import { useLanguage } from "@/lib/LanguageContext";
import { getFAQS } from "@/lib/i18n-data";
import { homeSchemaGraph } from "@/lib/schema";

const SEO_DATA = {
  de: {
    title: "THE FACE® Zürich – Denise Claire Gadient | Holistische Gesichtspflege & Kosmetik",
    description: "THE FACE® Denise Claire Gadient in Zürich – Über 30 Jahre spezialisiert auf holistische Gesichtspflege. Kosmetikerin EFZ, Dermalogica® Skin Expert. Hautanalyse, Pro Skin Treatment, Longevity Glow Treatment, Revitalisierung & Make-up. Termin online buchen.",
  },
  en: {
    title: "THE FACE® Zurich – Denise Claire Gadient | Holistic Facial Care & Cosmetics",
    description: "THE FACE® Denise Claire Gadient in Zurich – Over 30 years specialized in holistic facial care. Certified cosmetologist EFZ, Dermalogica® Skin Expert. Skin analysis, Pro Skin Treatment, Longevity Glow Treatment, revitalization & make-up. Book online.",
  },
};

export default function Home() {
  const { t, lang, localizePath } = useLanguage();
  const faqs = getFAQS(lang);
  const seo = SEO_DATA[lang] || SEO_DATA.de;

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
    <div className="min-h-screen bg-background">
      <Seo
        title={seo.title}
        description={seo.description}
        jsonLd={homeSchemaGraph(faqSchema)}
      />
      <Navbar />
      <main>
        <Hero />
        <HeroPromoImages />
        <TreatmentVideos />
        <TechnologyVideos />
        <BrandVideo />
        <Services />
        <Pricing />
        <StudioGallery />
        <Stats />
        <FAQ />
        <InternalLinks
          eyebrow={t("home_nav_eyebrow")}
          title={t("home_nav_title")}
          links={[
            { to: localizePath("/behandlungen"), label: t("home_nav_link1_label"), description: t("home_nav_link1_desc"), anchor: t("home_nav_link1_anchor") },
            { to: localizePath("/regionen"), label: t("home_nav_link2_label"), description: t("home_nav_link2_desc"), anchor: t("home_nav_link2_anchor") },
            { to: localizePath("/behandlungen/minlen-kids-tweens"), label: t("home_nav_link3_label"), description: t("home_nav_link3_desc"), anchor: t("home_nav_link3_anchor") },
            { to: localizePath("/bewertungen"), label: t("home_nav_link4_label"), description: t("home_nav_link4_desc"), anchor: t("home_nav_link4_anchor") },
          ]}
        />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </div>
  );
}