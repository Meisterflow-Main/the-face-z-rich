import React from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar, FileText, MessageCircle, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/brand";

const WA_LINK = `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(
  "Hallo, ich interessiere mich für Deine Gesichtsbehandlung und möchte gerne mehr Informationen erhalten oder einen Termin vereinbaren."
)}`;

export default function BlogCta() {
  const items = [
    { icon: Phone, label: "Kontakt aufnehmen", href: "/#kontakt", to: true },
    { icon: Calendar, label: "Termin buchen", href: BRAND.booking, external: true },
    { icon: FileText, label: "Offerte anfragen", href: "/#kontakt", to: true },
    { icon: MessageCircle, label: "WhatsApp", href: WA_LINK, external: true },
  ];

  return (
    <section className="mt-12 bg-sand border border-gold/15 rounded-2xl p-6 sm:p-8">
      <p className="text-gold font-semibold tracking-[0.18em] text-xs uppercase mb-2">Bereit für Deine Haut?</p>
      <h2 className="font-heading text-2xl font-semibold text-charcoal mb-5">Ich freue mich auf Dich</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((it) => {
          const Icon = it.icon;
          const cls =
            "group flex flex-col items-center justify-center gap-2 bg-card border border-gold/20 rounded-xl p-4 hover:border-gold hover:bg-gold/5 transition-all";
          const inner = (
            <>
              <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                <Icon size={18} className="text-gold group-hover:text-white transition-colors" />
              </span>
              <span className="text-sm font-semibold text-charcoal text-center">{it.label}</span>
            </>
          );
          if (it.to) return <Link key={it.label} to={it.href} className={cls}>{inner}</Link>;
          return (
            <a key={it.label} href={it.href} target="_blank" rel="noopener noreferrer" className={cls}>
              {inner}
            </a>
          );
        })}
      </div>
    </section>
  );
}