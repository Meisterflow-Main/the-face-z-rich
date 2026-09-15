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
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
      <CookieBanner />
    </div>
  );
}