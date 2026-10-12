import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { getFAQS } from "@/lib/i18n-data";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(0);
  const faqs = getFAQS(lang);

  return (
    <section id="faq" className="py-24 sm:py-32 px-5 sm:px-8 bg-background">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal className="text-center mb-14">
          <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">
            {t("faq_eyebrow")}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-semibold text-foreground mb-5">
            {t("faq_title")}
          </h2>
          <div className="hairline w-16 mx-auto" />
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={f.q} delay={i * 0.05}>
                <div className="border border-gold/15 rounded-xl overflow-hidden bg-secondary/60">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading font-semibold text-charcoal text-base sm:text-lg">
                      {f.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-charcoal/60 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}