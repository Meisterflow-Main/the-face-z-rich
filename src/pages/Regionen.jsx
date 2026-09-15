import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { REGIONS } from "@/lib/regions";

export default function Regionen() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Regionen in Zürich | THE FACE®"
        description="THE FACE® Zürich bedient die ganze Stadt von der Rämistrasse: Altstetten, Oerlikon, Wiedikon, Seebach, Wollishofen, Höngg, Affoltern, Schwamendingen, Enge und Fluntern."
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Regionen" }]} />
      <main>
        <section className="px-5 sm:px-8 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Regionen
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[52px] font-semibold text-charcoal leading-[1.1] mb-5">
              Gesichtsbehandlung in Zürich
            </h1>
            <div className="hairline w-16 mx-auto mb-6" />
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Meine Praxis an der Rämistrasse 27, 8001 Zürich erreicht Kundinnen und Kunden aus der ganzen Stadt. Wähle Dein Quartier für die passende Regionseite.
            </p>
          </div>
        </section>

        <section className="px-5 sm:px-8 py-10">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REGIONS.map((r, i) => (
              <ScrollReveal key={r.slug} delay={i * 0.05}>
                <Link
                  to={`/regionen/${r.slug}`}
                  className="block h-full bg-card border border-gold/15 rounded-2xl p-6 hover:border-gold hover:shadow-lg hover:shadow-gold/10 transition-all"
                >
                  <span className="inline-flex items-center gap-1.5 text-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
                    <MapPin size={13} /> {r.region}
                  </span>
                  <h2 className="font-heading text-xl font-semibold text-charcoal mb-2">
                    Gesichtsbehandlung {r.short}
                  </h2>
                  <p className="text-charcoal/65 text-sm leading-relaxed mb-4 line-clamp-3">
                    {r.heroDesc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold">
                    Standort ansehen <ArrowRight size={15} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="bg-sand py-16 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
              Behandlungen entdecken
            </h2>
            <p className="text-charcoal/65 max-w-xl mx-auto mb-6">
              Schau Dir alle Gesichtsbehandlungen an – von der Hautanalyse bis zum Brautmake-up.
            </p>
            <Link
              to="/behandlungen"
              className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all"
            >
              Alle Behandlungen <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}