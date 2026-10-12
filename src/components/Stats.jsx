import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { getStats, getPartnerBrands } from "@/lib/i18n-data";
import { Plus, Minus } from "lucide-react";

export default function Stats() {
  const { t, lang } = useLanguage();
  const [expanded, setExpanded] = useState(null);
  const stats = getStats(lang);
  const partnerBrands = getPartnerBrands(lang);

  return (
    <section className="py-20 sm:py-24 px-5 sm:px-8 bg-charcoal">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            {t("stats_eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white">
            {t("stats_title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="glass-dark rounded-2xl p-6 border border-gold/20 h-full">
                <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-2">
                  {s.value}
                </p>
                <p className="text-white/60 text-sm tracking-wide">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-16">
          <p className="text-center text-white/40 text-sm tracking-[0.2em] uppercase mb-2">
            {t("stats_partners")}
          </p>
          <p className="text-center text-white/60 text-sm mb-8">
            {t("stats_clean")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {partnerBrands.map((b, i) => {
              const isOpen = expanded === i;
              return (
                <div key={i} className="flex flex-col">
                  <div className="bg-white/95 rounded-xl px-5 py-3 flex items-center justify-center h-20 sm:h-24 transition-transform hover:scale-105">
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="mt-2.5 flex items-center justify-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs font-medium"
                    aria-expanded={isOpen}
                    aria-label={`${b.name}`}
                  >
                    {b.name}
                    <span className="shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                      {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-white/55 text-xs leading-relaxed text-center px-1">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}