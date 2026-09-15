import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Flexible internal link section for cross-navigation.
 * Props:
 * - eyebrow: small label above title
 * - title: section heading
 * - links: [{ to, label, description, external }]
 */
export default function InternalLinks({ eyebrow, title, links = [], bg = "sand" }) {
  if (!links.length) return null;
  const cls = bg === "sand" ? "bg-sand" : bg === "charcoal" ? "bg-charcoal" : "bg-background";
  return (
    <section className={`${cls} py-14 px-5`}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-8">
          {eyebrow && (
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">{eyebrow}</p>
          )}
          {title && (
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-3">{title}</h2>
          )}
          <div className="hairline w-16 mx-auto" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {links.map((l) => {
              const inner = (
                <>
                  <h3 className="font-heading text-base font-semibold text-charcoal mb-1">{l.label}</h3>
                  {l.description && (
                    <p className="text-charcoal/60 text-sm leading-relaxed">{l.description}</p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1.5 text-gold text-sm font-semibold">
                    {l.anchor || "Entdecken"} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </>
              );
              const className =
                "group bg-card border border-gold/15 rounded-xl p-5 hover:border-gold transition-colors flex flex-col";
              if (l.external) {
                return (
                  <a
                    key={l.label}
                    href={l.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <Link key={l.label} to={l.to} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}