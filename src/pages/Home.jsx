import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TreatmentVideos from "@/components/TreatmentVideos";
import AboutEditorial from "@/components/AboutEditorial";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import StudioGallery from "@/components/StudioGallery";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
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
        description="THE FACE® Denise Claire Gadient in Zürich – Über 30 Jahre spezialisiert auf holistische Gesichtspflege. Kosmetikerin EFZ, Dermalogica Skin Expert. Hautanalyse, Pro Skin Treatment, Longevity Glow Treatment, Revitalisierung & Make-up. Termin online buchen."
        jsonLd={homeSchemaGraph(faqSchema)}
      />
      <Navbar />
      <main>
        <Hero />
        <TreatmentVideos />
        <AboutEditorial />
        <Services />
        <Pricing />
        <StudioGallery />
        <Stats />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </div>
  );
}