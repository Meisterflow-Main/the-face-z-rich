import React from "react";
import { Star, MoreVertical, ThumbsUp, Share2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/lib/LanguageContext";

const REVIEWS = [
  {
    name: "Viviane Fromm",
    meta: "2 reviews · 1 photo",
    avatarBg: "#546E7A",
    avatarText: "V",
    stars: 5,
    time: { de: "vor 3 Tagen", en: "3 days ago" },
    text: "Since my first days in Zurich, I've been going to Denise, and every visit is a pleasure for me and my skin. Her expertise is exceptionally high and diverse. I highly recommend THE FACE ❤️.",
    lang: "en",
    showActions: false,
  },
  {
    name: "Eleonora Dalcher",
    meta: "2 reviews",
    avatarBg: "#455A64",
    avatarText: "E",
    stars: 5,
    time: { de: "vor 5 Monaten", en: "5 months ago" },
    text: "Sehr professionelle und freundliche Kosmetikerin. Ich habe grosses Vertrauen in ihr Wissen und ihre Beratung, besonders was meine Gesichtshaut betrifft. Absolut empfehlenswert!",
    lang: "de",
    showActions: false,
    seeTranslation: true,
  },
  {
    name: "Carlotta D'Alessandro",
    meta: "5 reviews · 2 photos",
    avatarBg: "#512DA8",
    avatarText: "C",
    stars: 5,
    time: { de: "vor 3 Wochen", en: "3 weeks ago" },
    text: "Denise heilt meine Haut immer wieder aufs Neue. Nach jahrelangem ausprobieren von verschiedensten Produkten und Methoden konnte ich dank Denise's Expertise und Professionalität endlich meine Akne loswerden. Sie weiss genau was meine Haut braucht, nutzt klassische Methoden wie manuelle Extraktion sowie Nanoneedling und weiteres und kombiniert es mit modernen Techniken wie Red und Blue Light Therapie. Ich fühle mich rundum wohl und umsorgt bei ihr und würde sie jederzeit con Herzen weiterempfehlen.",
    lang: "de",
    showActions: false,
  },
];

function ReviewCard({ review, t, lang }) {
  return (
    <div className="bg-white border border-border rounded-xl p-5 sm:p-6 shadow-sm flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="relative shrink-0">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
            style={{ backgroundColor: review.avatarBg }}
          >
            {review.avatarText}
          </div>
          {review.localGuide && (
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center border-2 border-white">
              <Star size={10} className="text-white fill-white" />
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-charcoal text-sm leading-tight truncate">
            {review.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">{review.meta}</p>
        </div>
        <button className="text-muted-foreground hover:text-charcoal transition-colors p-1 -mr-1" aria-label="More">
          <MoreVertical size={18} />
        </button>
      </div>

      {/* Rating + time */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: review.stars }).map((_, i) => (
            <Star key={i} size={14} className="text-[#FBC02D] fill-[#FBC02D]" />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.time[lang] || review.time.en}</span>
      </div>

      {/* Body */}
      <p className="text-sm text-charcoal/85 leading-relaxed flex-1 whitespace-pre-line">
        {review.text}
      </p>

      {/* Translation link */}
      {review.seeTranslation && (
        <button className="mt-3 text-xs font-medium text-[#00796B] hover:underline self-start">
          {lang === "de" ? "Übersetzung ansehen (Englisch)" : "See translation (English)"}
        </button>
      )}

      {/* Actions */}
      {review.showActions && (
        <div className="flex items-center gap-5 mt-4 pt-3 border-t border-border">
          <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-charcoal transition-colors">
            <ThumbsUp size={15} /> {t("reviews_like")}
          </button>
          <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-charcoal transition-colors">
            <Share2 size={15} /> {t("reviews_share")}
          </button>
        </div>
      )}
    </div>
  );
}

export default function GoogleReviews() {
  const { t, lang } = useLanguage();

  return (
    <section className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <ScrollReveal className="text-center mb-10">
        <p className="text-gold font-semibold tracking-[0.25em] text-xs uppercase mb-3">
          {t("reviews_eyebrow")}
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-[40px] font-semibold text-foreground tracking-[-0.02em]">
          {t("reviews_title")}
        </h2>
        <div className="hairline w-16 mx-auto mt-5" />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {REVIEWS.map((review, i) => (
          <ScrollReveal key={review.name} delay={i * 0.1}>
            <ReviewCard review={review} t={t} lang={lang} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}