import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Image } from "@/components/ui/image";
import { BRAND } from "@/lib/brand";
import { ARTICLES, CATEGORIES, formatDate } from "@/lib/blog";

export default function BlogSidebar({ currentSlug }) {
  const recent = ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, 4);
  const popular = ARTICLES.filter((a) => a.slug !== currentSlug).slice(-3).reverse();

  return (
    <aside className="space-y-8">
      <div className="bg-card border border-gold/15 rounded-2xl p-6">
        <h3 className="font-heading text-sm font-semibold text-charcoal mb-4 tracking-wide">Neueste Beiträge</h3>
        <ul className="space-y-4">
          {recent.map((a) => (
            <li key={a.slug}>
              <Link to={`/blog/${a.slug}`} className="group flex gap-3">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                  <Image src={a.hero} alt={a.title} fittingType="fill" className="w-full h-full" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">{formatDate(a.date)}</p>
                  <p className="text-sm font-medium text-charcoal leading-snug group-hover:text-gold transition-colors line-clamp-2">
                    {a.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-card border border-gold/15 rounded-2xl p-6">
        <h3 className="font-heading text-sm font-semibold text-charcoal mb-4 tracking-wide">Beliebte Beiträge</h3>
        <ul className="space-y-3">
          {popular.map((a, i) => (
            <li key={a.slug}>
              <Link to={`/blog/${a.slug}`} className="group flex items-start gap-3">
                <span className="text-gold/40 font-heading text-lg font-semibold leading-none w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium text-charcoal leading-snug group-hover:text-gold transition-colors">
                  {a.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-card border border-gold/15 rounded-2xl p-6">
        <h3 className="font-heading text-sm font-semibold text-charcoal mb-4 tracking-wide">Kategorien</h3>
        <ul className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <li key={c}>
              <Link
                to={`/blog?kategorie=${encodeURIComponent(c)}`}
                className="inline-block text-xs font-medium text-charcoal/70 bg-sand border border-gold/15 rounded-full px-3 py-1.5 hover:bg-gold hover:text-white hover:border-gold transition-colors"
              >
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-charcoal rounded-2xl p-6 text-white">
        <Sparkles size={24} className="text-gold mb-3" />
        <h3 className="font-heading text-lg font-semibold mb-2">Persönliche Beratung</h3>
        <p className="text-sm text-white/70 leading-relaxed mb-4">
          Unsicher, welches Treatment zu Dir passt? Vereinbare einen Termin und lass Dich persönlich beraten.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href={BRAND.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all"
          >
            Termin buchen <ArrowRight size={18} />
          </a>
          <Link
            to="/#kontakt"
            className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-gold text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </aside>
  );
}