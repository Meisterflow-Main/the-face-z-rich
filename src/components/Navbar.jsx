import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { BRAND, ASSETS } from "@/lib/brand";
import { REGIONS } from "@/lib/regions";
import { getServices } from "@/lib/i18n-data";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const LINKS = [
  { labelKey: "nav_about", to: "/ueber-mich" },
  { labelKey: "nav_faq", href: "/#faq" },
  { labelKey: "nav_contact", href: "/#kontakt" },
  { labelKey: "nav_treatcards", to: "/treatcards-vouchers" },
];

export default function Navbar() {
  const { t, localizePath, lang } = useLanguage();
  const services = getServices(lang);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Dropdown = ({ label, open, setOpen, children }) => (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/80 hover:text-gold transition-colors tracking-wide"
      >
        {label} <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-3 w-64">
          <div className="glass border border-gold/20 rounded-2xl p-3 shadow-lg grid grid-cols-1 gap-0.5 max-h-[70vh] overflow-y-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );

  const linkCls = "flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-charcoal/75 hover:bg-gold/10 hover:text-gold transition-colors";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 glass transition-shadow duration-500 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "shadow-none"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link to={localizePath("/")} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={ASSETS.logo} alt="THE FACE® Denise Claire Gadient Zürich Logo" className="h-10 sm:h-12 md:h-14 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          <Dropdown label={t("nav_treatments")} open={servicesOpen} setOpen={setServicesOpen}>
            <Link to={localizePath("/behandlungen")} className={`${linkCls} font-semibold text-charcoal`}>
              {t("nav_all_treatments")}
            </Link>
            {services.map((s) => (
              <Link key={s.slug} to={localizePath(`/behandlungen/${s.slug}`)} className={linkCls}>
                {s.name}
                {s.slug === "luminfusion" && (
                  <span className="text-gold/70 font-normal"> – Red Carpet Glow</span>
                )}
              </Link>
            ))}
          </Dropdown>

          <Dropdown label={t("nav_regions")} open={regionsOpen} setOpen={setRegionsOpen}>
            <Link to={localizePath("/regionen")} className={`${linkCls} font-semibold text-charcoal`}>
              {t("nav_all_regions")}
            </Link>
            {REGIONS.map((r) => (
              <Link key={r.slug} to={localizePath(`/regionen/${r.slug}`)} className={linkCls}>
                <MapPin size={16} className="text-gold shrink-0" /> {r.name}
              </Link>
            ))}
          </Dropdown>

          {LINKS.map((l) =>
            l.to ? (
              <Link key={l.to} to={localizePath(l.to)} className="text-sm font-medium text-charcoal/80 hover:text-gold transition-colors tracking-wide">
                {t(l.labelKey)}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="text-sm font-medium text-charcoal/80 hover:text-gold transition-colors tracking-wide">
                {t(l.labelKey)}
              </a>
            )
          )}

          <LanguageSwitcher />
          <a
            href={BRAND.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white bg-gold hover:brightness-90 px-5 py-2.5 rounded-lg transition-colors tracking-wide"
          >
            {t("nav_book")}
          </a>
        </div>

        <button className="md:hidden text-charcoal p-2" onClick={() => setOpen((v) => !v)} aria-label={t("nav_menu")}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-gold/20">
          <div className="px-5 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <LanguageSwitcher />
            </div>
            <Link to={localizePath("/behandlungen")} className="text-base font-semibold text-charcoal" onClick={() => setOpen(false)}>
              {t("nav_treatments")}
            </Link>
            <div className="pl-4 flex flex-col gap-2 border-l border-gold/20">
              {services.map((s) => (
                <Link key={s.slug} to={localizePath(`/behandlungen/${s.slug}`)} onClick={() => setOpen(false)} className="text-sm text-charcoal/75 hover:text-gold transition-colors">
                  {s.name}
                  {s.slug === "luminfusion" && (
                    <span className="text-gold/70 font-normal"> – Red Carpet Glow</span>
                  )}
                </Link>
              ))}
            </div>

            <button onClick={() => setRegionsOpen((v) => !v)} className="flex items-center gap-1 text-base font-semibold text-charcoal/80">
              {t("nav_regions")} <ChevronDown size={16} className={`transition-transform ${regionsOpen ? "rotate-180" : ""}`} />
            </button>
            {regionsOpen && (
              <div className="pl-4 flex flex-col gap-2 border-l border-gold/20">
                <Link to={localizePath("/regionen")} onClick={() => setOpen(false)} className="text-sm font-semibold text-charcoal">
                  {t("nav_all_regions")}
                </Link>
                {REGIONS.map((r) => (
                  <Link key={r.slug} to={localizePath(`/regionen/${r.slug}`)} onClick={() => { setOpen(false); setRegionsOpen(false); }} className="flex items-center gap-2 text-sm text-charcoal/75 hover:text-gold transition-colors">
                    <MapPin size={16} className="text-gold" /> {r.name}
                  </Link>
                ))}
              </div>
            )}

            {LINKS.map((l) =>
              l.to ? (
                <Link key={l.to} to={localizePath(l.to)} className="text-base font-medium text-charcoal/80 hover:text-gold transition-colors" onClick={() => setOpen(false)}>
                  {t(l.labelKey)}
                </Link>
              ) : (
                <a key={l.href} href={l.href} className="text-base font-medium text-charcoal/80 hover:text-gold transition-colors" onClick={() => setOpen(false)}>
                  {t(l.labelKey)}
                </a>
              )
            )}

            <a href={BRAND.booking} target="_blank" rel="noopener noreferrer" className="text-center text-sm font-semibold text-white bg-gold px-5 py-3 rounded-lg">
              {t("nav_book")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}