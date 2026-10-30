import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Check, Sparkles, Gift } from "lucide-react";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";
import { getTreatcards, getVouchers } from "@/lib/treatcards";

export default function Treatcards() {
  const { t, lang, localizePath } = useLanguage();
  const cards = getTreatcards(lang);
  const vouchers = getVouchers(lang);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${t("treatcards_meta_title")} | THE FACE® Zürich`}
        description={t("treatcards_meta_desc")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: cards[0]?.title,
          description: t("treatcards_meta_desc"),
          brand: { "@type": "Brand", name: "THE FACE®" },
          offers: {
            "@type": "Offer",
            price: cards[0]?.price,
            priceCurrency: "CHF",
            url: cards[0]?.bookingUrl,
          },
        }}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: t("nav_home"), to: "/" }, { label: t("nav_treatcards") }]} />

      <main className="px-5 sm:px-8 pb-24 pt-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3 flex items-center justify-center gap-2">
              <Gift size={14} /> {t("treatcards_eyebrow")}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal leading-[1.1] tracking-[-0.02em] mb-4">
              {t("treatcards_title")}
            </h1>
            <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("treatcards_intro")}
            </p>
            <div className="hairline w-24 mx-auto mt-6" />
          </ScrollReveal>

          <div className="grid gap-8">
            {cards.map((card, idx) => (
              <ScrollReveal key={card.id} delay={idx * 0.1}>
                <article className="bg-card border border-gold/15 rounded-2xl overflow-hidden shadow-sm">
                  <div className="grid md:grid-cols-5">
                    {/* Left: details */}
                    <div className="md:col-span-3 p-7 sm:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-white bg-gold px-2.5 py-1 rounded-sm">
                          {card.tag}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-charcoal/55">
                          <Clock size={13} className="text-gold" /> {card.expires}
                        </span>
                      </div>

                      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal leading-tight mb-4">
                        {card.title}
                      </h2>

                      <p className="text-charcoal/70 text-[15px] leading-relaxed mb-6">
                        {card.description}
                      </p>

                      <ul className="space-y-2.5 mb-7">
                        {card.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-charcoal/75">
                            <Check size={16} className="text-gold mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="border-t border-gold/15 pt-5">
                        <p className="text-gold text-xs tracking-[0.15em] uppercase font-medium mb-3">
                          {t("treatcards_included")}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {card.services.map((s) => (
                            <Link
                              key={s.name}
                              to={localizePath(s.to)}
                              className="inline-flex items-center gap-2 bg-sand hover:bg-gold/10 transition-colors rounded-lg px-4 py-2.5 text-sm text-charcoal/80"
                            >
                              <Sparkles size={14} className="text-gold" />
                              <span className="font-medium">{s.name}</span>
                              <span className="text-charcoal/45">
                                · {s.sessions} {t("treatcards_session")}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: price + booking */}
                    <div className="md:col-span-2 bg-sand p-7 sm:p-10 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-gold/15">
                      <p className="text-charcoal/50 text-sm mb-2">{t("treatcards_price_label")}</p>
                      <p className="font-heading text-5xl font-semibold text-charcoal tabular-nums mb-1">
                        <span className="text-charcoal/40 text-base font-body font-normal mr-1">CHF</span>
                        {card.price}.–
                      </p>
                      <p className="text-charcoal/45 text-xs mb-6">{t("treatcards_vat_note")}</p>
                      <a
                        href={card.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/30 w-full"
                      >
                        <Calendar size={18} />
                        {t("treatcards_book")}
                      </a>
                      <p className="text-charcoal/40 text-xs mt-4 leading-relaxed">
                        {t("treatcards_book_note")}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Treatcard & Gutschein options */}
          <ScrollReveal className="text-center mt-20 mb-10">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3 flex items-center justify-center gap-2">
              <Gift size={14} /> {t("treatcards_vouchers_eyebrow")}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal leading-[1.15] tracking-[-0.02em] mb-4">
              {t("treatcards_vouchers_title")}
            </h2>
            <p className="text-charcoal/60 text-base max-w-2xl mx-auto leading-relaxed">
              {t("treatcards_vouchers_intro")}
            </p>
            <div className="hairline w-24 mx-auto mt-6" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {vouchers.map((v, idx) => (
              <ScrollReveal key={v.id} delay={idx * 0.05}>
                <div className="bg-card border border-gold/15 rounded-2xl p-6 sm:p-7 h-full hover:border-gold transition-colors">
                  <v.icon size={24} className="text-gold mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">{v.title}</h3>
                  <p className="text-charcoal/65 text-sm leading-relaxed">{v.desc}</p>
                  {v.bookingUrl && (
                    <a
                      href={v.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-gold hover:text-charcoal transition-colors text-sm font-medium"
                    >
                      <Gift size={14} />
                      {t("treatcards_buy_voucher")}
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-16" delay={0.1}>
            <p className="text-charcoal/55 text-sm mb-5">{t("treatcards_footer_note")}</p>
            <Link
              to={localizePath("/behandlungen")}
              className="inline-flex items-center gap-2 text-gold hover:text-charcoal transition-colors font-medium"
            >
              {t("treatcards_view_treatments")} →
            </Link>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}