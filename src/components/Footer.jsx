import React from "react";
import { Link } from "react-router-dom";
import { BRAND, ASSETS } from "@/lib/brand";
import { REGIONS } from "@/lib/regions";
import { SERVICES } from "@/lib/services";
import { useLanguage } from "@/lib/LanguageContext";
import { getAvailability } from "@/lib/i18n-data";
import { Instagram, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  const { t, localizePath, lang } = useLanguage();
  const availability = getAvailability(lang);

  return (
    <footer className="bg-secondary text-charcoal pt-20 sm:pt-24 pb-10 px-5 sm:px-8 border-t border-charcoal/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <img
              src={ASSETS.logo}
              alt="THE FACE® Denise Claire Gadient Zürich"
              className="h-12 sm:h-14 md:h-16 w-auto mb-3"
            />
            <p className="text-charcoal text-sm font-semibold tracking-wide mb-1">
              Denise Claire Gadient
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
              {t("footer_tagline")}
            </p>
          </div>

          <div>
            <p className="text-gold font-semibold tracking-[0.12em] text-sm uppercase mb-5">{t("footer_treatments")}</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to={localizePath("/behandlungen")} className="hover:text-gold transition-colors font-medium text-charcoal">{t("footer_all_treatments")}</Link></li>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={localizePath(`/behandlungen/${s.slug}`)} className="hover:text-gold transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-gold font-semibold tracking-[0.12em] text-sm uppercase mb-5">{t("footer_regions")}</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to={localizePath("/regionen")} className="hover:text-gold transition-colors font-medium text-charcoal">{t("footer_all_regions")}</Link></li>
              {REGIONS.map((r) => (
                <li key={r.slug}>
                  <Link to={localizePath(`/regionen/${r.slug}`)} className="hover:text-gold transition-colors">
                    {t("footer_facial")} {r.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-gold font-semibold tracking-[0.12em] text-sm uppercase mb-5">{t("footer_contact")}</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={BRAND.maps} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-gold transition-colors">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>{BRAND.street}, {BRAND.city}<br />{BRAND.locationNote}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                <span>
                  {availability.hours.length > 0
                    ? availability.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)
                    : availability.summary}
                  {availability.onRequest.map((n) => (
                    <span key={n} className="block text-xs text-charcoal/55 mt-1">{n}</span>
                  ))}
                </span>
              </li>
              <li>
                <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-3 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold shrink-0" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                  <MessageCircle size={16} className="text-gold shrink-0" /> WhatsApp
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
              <a href={localizePath("/").replace(/\/$/, "") + "/#ueber"} className="hover:text-gold transition-colors">{t("footer_about")}</a>
              <Link to={localizePath("/bewertungen")} className="hover:text-gold transition-colors">{t("footer_reviews")}</Link>
              <Link to={localizePath("/impressum")} className="hover:text-gold transition-colors">{t("footer_imprint")}</Link>
              <Link to={localizePath("/datenschutz")} className="hover:text-gold transition-colors">{t("footer_privacy")}</Link>
              <button onClick={() => window.dispatchEvent(new Event("theface:open-cookie-settings"))} className="hover:text-gold transition-colors text-left">{t("footer_cookies")}</button>
              <Link to={localizePath("/sitemap")} className="hover:text-gold transition-colors">{t("footer_sitemap")}</Link>
            </div>
          </div>
        </div>

        <div className="hairline mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-muted-foreground text-xs">
          <p>© {new Date().getFullYear()} THE FACE® Denise Claire Gadient. {t("footer_rights")}.</p>
          <p>{BRAND.website}</p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-charcoal/40 text-xs">
            {t("footer_created_by")}{" "}
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