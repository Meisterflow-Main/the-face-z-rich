import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { ASSETS } from "@/lib/brand";
import { useLanguage } from "@/lib/LanguageContext";

const FACE_MAP_BOOKING =
  "https://www.fresha.com/book-now/the-face-denise-claire-gadient-l38o3gpn/services?lid=2973074&eid=5255094&oiid=sv%3A29649277&share=true&pId=2873845";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F0]">
      {/* Background photo — clean studio image only, no baked-in text */}
      <img
        src={ASSETS.hero}
        alt={t("hero_alt")}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      {/* Subtle left-side warm cream/white tint for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(245,245,240,0.92) 0%, rgba(245,245,240,0.78) 32%, rgba(245,245,240,0.42) 48%, rgba(245,245,240,0.12) 60%, rgba(245,245,240,0) 72%)",
        }}
      />
      {/* Soft top & bottom fade for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/20 via-transparent to-white/10" />

      {/* ===== Desktop / Tablet layout (≥ sm) ===== */}
      <div className="relative z-10 hidden sm:flex h-[680px] md:h-[700px] lg:h-[720px] items-center">
        <div className="w-[44%] pl-[6vw] pr-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[560px]"
          >
            <p className="text-charcoal/60 text-[11px] md:text-xs tracking-[0.22em] uppercase font-medium mb-6">
              {t("hero_eyebrow")}
            </p>

            <h1
              className="font-heading text-charcoal font-medium leading-[1.08] tracking-[-0.02em] mb-7"
              style={{ fontSize: "clamp(42px, 4.4vw, 60px)" }}
            >
              {t("hero_title")}
            </h1>

            <p className="text-gold text-xs tracking-[0.22em] uppercase font-semibold mb-5">
              {t("hero_subtitle")}
            </p>

            <p className="text-charcoal/75 font-body leading-[1.5] max-w-[530px] mb-9"
               style={{ fontSize: "clamp(16px, 1.2vw, 18px)" }}>
              {t("hero_desc")}
            </p>

            <div className="flex flex-row gap-4">
              <a
                href={FACE_MAP_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero_book")}
                className="inline-flex items-center justify-center gap-2 bg-[#4A657D] hover:bg-[#3C526A] text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A657D]/60 focus-visible:ring-offset-2"
              >
                <Calendar size={18} /> {t("hero_book")}
              </a>
              <a
                href="#behandlungen"
                aria-label={t("hero_discover")}
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-charcoal/30 text-charcoal hover:bg-charcoal/5 font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/30 focus-visible:ring-offset-2"
              >
                {t("hero_discover")} <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Mobile layout (stacked) ===== */}
      <div className="relative z-10 sm:hidden">
        {/* Image area — natural aspect ratio, no cropping */}
        <img
          src={ASSETS.hero}
          alt={t("hero_alt")}
          className="block w-full h-auto object-contain object-center"
          loading="eager"
          decoding="async"
        />

        {/* Content block */}
        <div className="bg-[#F5F5F0] px-6 pt-8 pb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-charcoal/60 text-[10px] tracking-[0.22em] uppercase font-medium mb-5">
              {t("hero_eyebrow")}
            </p>

            <h1 className="font-heading text-charcoal font-medium leading-[1.1] tracking-[-0.02em] mb-5"
                style={{ fontSize: "36px" }}>
              {t("hero_title")}
            </h1>

            <p className="text-gold text-[11px] tracking-[0.22em] uppercase font-semibold mb-4">
              {t("hero_subtitle")}
            </p>

            <p className="text-charcoal/75 font-body text-base leading-[1.5] mb-8">
              {t("hero_desc")}
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={FACE_MAP_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero_book")}
                className="inline-flex items-center justify-center gap-2 bg-[#4A657D] hover:bg-[#3C526A] text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A657D]/60"
              >
                <Calendar size={18} /> {t("hero_book")}
              </a>
              <a
                href="#behandlungen"
                aria-label={t("hero_discover")}
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-charcoal/30 text-charcoal hover:bg-charcoal/5 font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/30"
              >
                {t("hero_discover")} <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}