import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/brand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20 px-5 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors text-sm mb-8">
            <ArrowLeft size={16} /> Zurück zur Startseite
          </Link>
          <h1 className="font-heading text-4xl font-bold text-charcoal mb-2">Datenschutzerklärung</h1>
          <div className="hairline w-16 mb-8" />

          <div className="space-y-6 text-charcoal/70 leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">1. Verantwortliche Stelle</h2>
              <p>
                THE FACE® Denise Claire Gadient, {BRAND.street}, {BRAND.city},
                Telefon {BRAND.phone}, E-Mail {BRAND.email}.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">2. Erhebung und Verarbeitung von Daten</h2>
              <p>
                Wir erheben und verarbeiten personenbezogene Daten, die Du uns über das
                Kontaktformular freiwillig zur Verfügung stellst (Name, E-Mail, Telefon,
                Beschreibung). Diese Daten werden ausschliesslich zur Bearbeitung Deiner
                Anfrage verwendet und nicht ohne Deine Zustimmung an Dritte weitergegeben.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">3. Bewertungs-Feedback</h2>
              <p>
                Bewertungen mit 1 bis 3 Sternen werden ausschliesslich intern erfasst und nicht
                öffentlich geteilt oder in einer Datenbank gespeichert. Es erfolgt keine
                CRM-Speicherung und keine externe Speicherung ausserhalb der internen
                Bearbeitung.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">4. Cookies</h2>
              <p>
                Diese Website verwendet Cookies zur Verbesserung der Nutzererfahrung. Du
                kannst der Verwendung von Cookies jederzeit widersprechen oder Deine
                Einwilligung widerrufen, indem Du die entsprechenden Einstellungen in
                Deinem Browser vornimmst.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">5. Deine Rechte</h2>
              <p>
                Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
                Einschränkung der Verarbeitung Deiner personenbezogenen Daten. Wende Dich
                dafür bitte an die oben genannte Kontaktadresse.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">6. Hosting & Webhooks</h2>
              <p>
                Formulardaten werden über eine verschlüsselte Verbindung an unseren
                Webhook-Anbieter (MeisterFlow) übermittelt und dort zur Bearbeitung
                gespeichert. Durch das Absenden eines Formulars erklärst Du Dich mit
                dieser Verarbeitung einverstanden.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}