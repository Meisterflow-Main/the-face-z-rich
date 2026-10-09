import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroPromoImages from "@/components/HeroPromoImages";
import BrandVideo from "@/components/BrandVideo";
import TreatmentVideos from "@/components/TreatmentVideos";
import TechnologyVideos from "@/components/TechnologyVideos";
import DermalogicaBanner from "@/components/DermalogicaBanner";
import PhilosophyBanner from "@/components/PhilosophyBanner";
import PhilosophyVideo from "@/components/PhilosophyVideo";
import LuminfusionBanner from "@/components/LuminfusionBanner";
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
import { FAQS } from "@/lib/brand";
import { homeSchemaGraph } from "@/lib/schema";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="THE FACE® Zürich – Denise Claire Gadient | Holistische Gesichtspflege & Kosmetik"
        description="THE FACE® Denise Claire Gadient in Zürich – Über 30 Jahre spezialisiert auf holistische Gesichtspflege. Kosmetikerin EFZ, Dermalogica® Skin Expert. Hautanalyse, Pro Skin Treatment, Longevity Glow Treatment, Revitalisierung & Make-up. Termin online buchen."
        jsonLd={homeSchemaGraph(faqSchema)}
      />
      <Navbar />
      <main>
        <Hero />
        <HeroPromoImages />
        <DermalogicaBanner />
        <TreatmentVideos />
        <TechnologyVideos />
        <BrandVideo />
        <PhilosophyVideo />
        <PhilosophyBanner />
        <LuminfusionBanner />
        <Services />
        <Pricing />
        <StudioGallery />
        <Stats />
        <FAQ />
        <InternalLinks
          eyebrow="Schnellnavigation"
          title="Finde, was Du suchst"
          links={[
            { to: "/behandlungen", label: "Alle Behandlungen", description: "Hautanalyse, Pro Skin, Targeted und Medical Skin.", anchor: "Behandlungen entdecken" },
            { to: "/regionen", label: "Regionen in Zürich", description: "Anfahrt aus Deinem Quartier zur Praxis.", anchor: "Regionen ansehen" },
            { to: "/behandlungen/minlen-kids-tweens", label: "Minlen Kids & Tweens", description: "Sanfte Hautpflege für sensible Kinderhaut ab 4 Jahren.", anchor: "Minlen Treatment ansehen" },
            { to: "/bewertungen", label: "Google Bewertungen", description: "4,9 Sterne von echten Kundinnen.", anchor: "Bewertungen ansehen" },
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