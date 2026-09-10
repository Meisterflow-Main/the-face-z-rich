import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BRAND, ASSETS } from "@/lib/brand";

const LINKS = [
  { label: "Über uns", href: "/#ueber" },
  { label: "Behandlungen", href: "/#behandlungen" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_1px_0_0_rgba(197,160,89,0.25)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={ASSETS.logo} alt="THE FACE® Zürich Logo" className="h-8 sm:h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-charcoal/80 hover:text-gold transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BRAND.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white bg-gold hover:bg-[#b08e4d] px-5 py-2.5 rounded-full transition-colors tracking-wide"
          >
            Termin buchen
          </a>
        </div>

        <button
          className="md:hidden text-charcoal p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-gold/20">
          <div className="px-5 py-6 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-medium text-charcoal/80 hover:text-gold transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={BRAND.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold text-white bg-gold px-5 py-3 rounded-full"
            >
              Termin buchen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}