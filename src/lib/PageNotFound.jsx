import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/region/Seo";
import { Home, ArrowRight } from "lucide-react";

export default function PageNotFound({}) {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  const { data: authData, isFetched } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const user = await base44.auth.me();
        return { user, isAuthenticated: true };
      } catch (error) {
        return { user: null, isAuthenticated: false };
      }
    },
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo
        title="Seite nicht gefunden | THE FACE® Zürich"
        description="Die gesuchte Seite wurde nicht gefunden. Entdecke Behandlungen, Regionen und den Blog von THE FACE® Zürich."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Seite nicht gefunden – THE FACE® Zürich",
          url: "https://theface-zuerich.ch/404",
          inLanguage: "de-CH",
          isPartOf: { "@id": "https://theface-zuerich.ch/#website" },
        }}
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-5 sm:px-8 py-20">
        <div className="max-w-2xl w-full text-center">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">404</p>
          <h1 className="font-heading text-5xl sm:text-6xl font-semibold text-charcoal mb-4 leading-tight">
            Seite nicht gefunden
          </h1>
          <div className="hairline w-16 mx-auto mb-6" />
          <p className="text-charcoal/65 leading-relaxed mb-10 max-w-md mx-auto">
            Die Seite <span className="font-medium text-charcoal">"{pageName}"</span> konnte leider nicht gefunden werden.
            Vielleicht hilft Dir eine dieser Seiten weiter:
          </p>

          <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8">
            <Link to="/" className="group flex items-center gap-2 bg-card border border-gold/15 rounded-xl px-5 py-4 hover:border-gold transition-colors">
              <Home size={18} className="text-gold" />
              <span className="font-heading font-semibold text-charcoal text-sm">Startseite</span>
              <ArrowRight size={16} className="text-gold ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/behandlungen" className="group flex items-center gap-2 bg-card border border-gold/15 rounded-xl px-5 py-4 hover:border-gold transition-colors">
              <span className="font-heading font-semibold text-charcoal text-sm">Alle Behandlungen</span>
              <ArrowRight size={16} className="text-gold ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/regionen" className="group flex items-center gap-2 bg-card border border-gold/15 rounded-xl px-5 py-4 hover:border-gold transition-colors">
              <span className="font-heading font-semibold text-charcoal text-sm">Regionen in Zürich</span>
              <ArrowRight size={16} className="text-gold ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/blog" className="group flex items-center gap-2 bg-card border border-gold/15 rounded-xl px-5 py-4 hover:border-gold transition-colors">
              <span className="font-heading font-semibold text-charcoal text-sm">Blog & Ratgeber</span>
              <ArrowRight size={16} className="text-gold ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/bewertungen" className="group flex items-center gap-2 bg-card border border-gold/15 rounded-xl px-5 py-4 hover:border-gold transition-colors">
              <span className="font-heading font-semibold text-charcoal text-sm">Google Bewertungen</span>
              <ArrowRight size={16} className="text-gold ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/#kontakt" className="group flex items-center gap-2 bg-card border border-gold/15 rounded-xl px-5 py-4 hover:border-gold transition-colors">
              <span className="font-heading font-semibold text-charcoal text-sm">Kontakt aufnehmen</span>
              <ArrowRight size={16} className="text-gold ml-auto group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {isFetched && authData.isAuthenticated && authData.user?.role === "admin" && (
            <div className="mt-8 p-4 bg-sand rounded-lg border border-gold/15 text-left">
              <p className="text-sm font-medium text-charcoal mb-1">Admin-Hinweis</p>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                Diese Seite wurde möglicherweise noch nicht erstellt. Im Chat kannst Du sie anfordern.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}