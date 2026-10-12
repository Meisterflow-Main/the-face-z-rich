// Language-aware data access helpers
import {
  FAQS,
  TREATMENTS,
  STATS,
  SKIN_CONCERNS,
  AVAILABILITY,
  PARTNER_BRANDS,
  BRAND,
  ASSETS,
  WEBHOOK,
} from "./brand";
import {
  FAQS_EN,
  TREATMENTS_EN,
  STATS_EN,
  SKIN_CONCERNS_EN,
  AVAILABILITY_EN,
  PARTNER_BRANDS_EN,
} from "./brand.en";
import { SERVICES, getServiceBySlug } from "./services";

export function getFAQS(lang) {
  return lang === "en" ? FAQS_EN : FAQS;
}

export function getTreatments(lang) {
  return lang === "en" ? TREATMENTS_EN : TREATMENTS;
}

export function getStats(lang) {
  return lang === "en" ? STATS_EN : STATS;
}

export function getSkinConcerns(lang) {
  return lang === "en" ? SKIN_CONCERNS_EN : SKIN_CONCERNS;
}

export function getAvailability(lang) {
  return lang === "en" ? AVAILABILITY_EN : AVAILABILITY;
}

export function getPartnerBrands(lang) {
  if (lang === "en") {
    return PARTNER_BRANDS.map((b, i) => ({
      ...b,
      name: PARTNER_BRANDS_EN[i]?.name ?? b.name,
      desc: PARTNER_BRANDS_EN[i]?.desc ?? b.desc,
    }));
  }
  return PARTNER_BRANDS;
}

export function getServices(lang) {
  // Services EN is a follow-up task — currently returns German data
  return SERVICES;
}

export function getServiceBySlugLocalized(slug, lang) {
  return getServiceBySlug(slug);
}

export { BRAND, ASSETS, WEBHOOK };