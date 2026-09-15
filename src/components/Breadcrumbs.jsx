import React from "react";
import { Link } from "react-router-dom";

const SITE = "https://theface-zuerich.ch";

export default function Breadcrumbs({ items }) {
  const currentPath = window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: `${SITE}${it.to || currentPath}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Brotkrumen" className="max-w-6xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28 pb-4">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-charcoal/55">
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-charcoal/30">/</span>}
              {it.to ? (
                <Link to={it.to} className="hover:text-gold transition-colors">
                  {it.label}
                </Link>
              ) : (
                <span className="text-charcoal/80">{it.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}