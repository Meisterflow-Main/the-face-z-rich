import React from "react";
import Navbar from "@/components/Navbar";
import AboutEditorial from "@/components/AboutEditorial";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import Seo from "@/components/region/Seo";

export default function UeberMich() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Über mich – Denise Claire Gadient | THE FACE® Zürich"
        description="Lernen Sie Denise Claire Gadient kennen – Kosmetikerin EFZ, Visagistin und Dermalogica® Expert. Über 25 Jahre Erfahrung in professioneller Gesichtspflege in Zürich."
      />
      <Navbar />
      <main>
        <AboutEditorial />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </div>
  );
}