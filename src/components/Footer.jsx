import React from "react";
import { Link } from "react-router-dom";
import { BRAND, ASSETS } from "@/lib/brand";
import { REGIONS } from "@/lib/regions";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-24 sm:pb-16 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={ASSETS.logo} alt="THE FACE® Zürich" className="h-10 w-auto mb-5" style={{ mixBlendMode: "screen" }} />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Über 30 Jahre spezialisiert in holistischer Gesichtspflege. Invest in your skin.
            </p>
          </div>

          <div>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-5">Kontakt</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>{BRAND.street}, {BRAND.city}<br />{BRAND.locationNote}</span>
              </li>
              <li>
                <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-3 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold shrink-0" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 hover:text-gold transition-colors">
                  <Mail size={16} className="text-gold shrink-0" /> {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                  <Instagram size={16} className="text-gold shrink-0" /> @thefacezuerich
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-5">Navigation</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="/#ueber" className="hover:text-gold transition-colors">Über uns</a></li>
              <li><a href="/#behandlungen" className="hover:text-gold transition-colors">Behandlungen</a></li>
              <li><a href="/#faq" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="/#kontakt" className="hover:text-gold transition-colors">Kontakt</a></li>
              <li><Link to="/bewertung" className="hover:text-gold transition-colors">Bewertung abgeben</Link></li>
              <li><Link to="/impressum" className="hover:text-gold transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-gold transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-5">Regionen</p>
            <ul className="space-y-2.5 text-sm text-white/60 grid grid-cols-1">
              {REGIONS.map((r) => (
                <li key={r.slug}>
                  <Link to={`/regionen/${r.slug}`} className="hover:text-gold transition-colors">
                    Gesichtsbehandlung {r.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} THE FACE® Denise Claire Gadient. Alle Rechte vorbehalten.</p>
          <p>{BRAND.website}</p>
        </div>
      </div>
    </footer>
  );
}