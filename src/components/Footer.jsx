import React from "react";
import { Link } from "react-router-dom";
import { BRAND, ASSETS } from "@/lib/brand";
import { REGIONS } from "@/lib/regions";
import { SERVICES } from "@/lib/services";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-charcoal pt-20 sm:pt-24 pb-10 px-5 sm:px-8 border-t border-charcoal/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <img
              src={ASSETS.logo}
              alt="THE FACE® Zürich"
              className="h-12 sm:h-14 md:h-16 w-auto mb-6 rounded-md"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Über 30 Jahre spezialisiert in holistischer Gesichtspflege. Invest in your skin.
            </p>
          </div>

          <div>
            <p className="text-gold font-semibold tracking-[0.12em] text-sm uppercase mb-5">Behandlungen</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/behandlungen" className="hover:text-gold transition-colors font-medium text-charcoal">Alle Behandlungen</Link></li>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/behandlungen/${s.slug}`} className="hover:text-gold transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-gold font-semibold tracking-[0.12em] text-sm uppercase mb-5">Regionen</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/regionen" className="hover:text-gold transition-colors font-medium text-charcoal">Alle Regionen</Link></li>
              {REGIONS.map((r) => (
                <li key={r.slug}>
                  <Link to={`/regionen/${r.slug}`} className="hover:text-gold transition-colors">
                    Gesichtsbehandlung {r.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-gold font-semibold tracking-[0.12em] text-sm uppercase mb-5">Kontakt</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
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
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-charcoal/55">
              <a href="/#ueber" className="hover:text-gold transition-colors">Über uns</a>
              <Link to="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <Link to="/bewertungen" className="hover:text-gold transition-colors">Bewertungen</Link>
              <Link to="/impressum" className="hover:text-gold transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-gold transition-colors">Datenschutz</Link>
              <button onClick={() => window.dispatchEvent(new Event("theface:open-cookie-settings"))} className="hover:text-gold transition-colors text-left">Cookie-Einstellungen</button>
              <Link to="/sitemap" className="hover:text-gold transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>

        <div className="hairline mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-muted-foreground text-xs">
          <p>© {new Date().getFullYear()} THE FACE® Denise Claire Gadient. Alle Rechte vorbehalten.</p>
          <p>{BRAND.website}</p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-charcoal/40 text-xs">
            Website erstellt von{" "}
            <a
              href="https://meisterflow.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors font-medium"
            >
              MeisterFlow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}