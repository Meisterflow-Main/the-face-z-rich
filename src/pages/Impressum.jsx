import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "@/lib/brand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20 px-5 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors text-sm mb-8">
            <ArrowLeft size={16} /> Zurück zur Startseite
          </Link>
          <h1 className="font-heading text-4xl font-bold text-charcoal mb-2">Impressum</h1>
          <div className="hairline w-16 mb-8" />

          <div className="space-y-6 text-charcoal/70 leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">Angaben gemäss Art. 51 Abs. 1 OR</h2>
              <p>
                THE FACE®<br />
                Denise Claire Gadient<br />
                {BRAND.street}<br />
                {BRAND.city}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">Kontakt</h2>
              <p>
                Telefon: <a href={`tel:${BRAND.phoneRaw}`} className="text-gold">{BRAND.phone}</a><br />
                E-Mail: <a href={`mailto:${BRAND.email}`} className="text-gold">{BRAND.email}</a><br />
                Web: {BRAND.website}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">Berufsbezeichnung</h2>
              <p>
                Kosmetikerin EFZ, zertifiziert VNISSG Haut und Pigmente<br />
                Dermalogica Skin Expert &amp; Visagistin
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
                keine Gewähr übernommen werden.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-charcoal mb-2">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der
                Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der
                Autorin.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}