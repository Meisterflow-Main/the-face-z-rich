import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gift } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const GIFT_IMAGE =
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/bca36ab5d_generated_image.png";

export default function VoucherBanner() {
  const { t, localizePath } = useLanguage();

  return (
    <section
      aria-label={t("voucher_banner_title")}
      className="relative bg-[#F3EADA] pt-16 sm:pt-20"
    >
      {/* Delicate gold hairlines as accents */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B08D4F]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B08D4F]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-4 py-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:py-5 lg:grid-cols-[auto_1fr_auto] lg:py-6">
          {/* Gift box with golden ribbon + branded voucher */}
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            <img
              src={GIFT_IMAGE}
              alt={t("voucher_banner_alt")}
              className="h-20 w-auto object-contain mix-blend-multiply sm:h-16 lg:h-[84px]"
              loading="lazy"
              decoding="async"
            />
            <div className="hidden h-[94px] w-[112px] rotate-[-7deg] flex-col items-center justify-center gap-1 rounded-[5px] border border-[#B08D4F]/45 bg-[#FCF8F1] px-2 text-center shadow-[0_6px_16px_rgba(90,70,40,0.15)] sm:flex">
              <Gift size={13} className="text-[#B08D4F]" />
              <span className="text-[7px] font-semibold tracking-[0.12em] text-[#8A6A33]">THE FACE®</span>
              <span className="text-[6px] leading-tight tracking-[0.04em] text-[#8A6A33]/85">
                Denise Claire Gadient
              </span>
              <span className="text-[5.5px] tracking-[0.18em] text-[#8A6A33]/70">ZÜRICH</span>
            </div>
          </div>

          {/* Message */}
          <div className="text-center sm:text-left lg:text-center">
            <p className="mb-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#9C7C3C]">
              {t("voucher_banner_eyebrow")}
            </p>
            <h2 className="font-heading text-[22px] font-medium leading-tight tracking-[-0.01em] text-charcoal sm:text-2xl">
              {t("voucher_banner_title")}
            </h2>
            <p className="mt-1.5 font-body text-[13px] leading-relaxed text-charcoal/65 sm:text-sm">
              {t("voucher_banner_desc")}
            </p>
          </div>

          {/* Call to action */}
          <div className="flex justify-center sm:col-span-2 lg:col-span-1 lg:justify-end">
            <Link
              to={localizePath("/treatcards")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#9C7C3C] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_4px_14px_rgba(156,124,60,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8A6B31] hover:shadow-[0_8px_22px_rgba(156,124,60,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C7C3C]/50 focus-visible:ring-offset-2 sm:w-auto"
            >
              {t("voucher_banner_cta")}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}