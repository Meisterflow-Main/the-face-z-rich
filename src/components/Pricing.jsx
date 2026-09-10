import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { BRAND } from "@/lib/brand";

const PRICE_LIST = [
  {
    id: "hautanalyse",
    title: "Hautanalyse & Beratung",
    note: "inkl. Quickboost",
    services: [{ name: "FACE-MAP und FACE-FIT", price: "95" }],
  },
  {
    id: "autumn-offer",
    title: "Autumn Offer Face Glow",
    tag: "NEU",
    services: [
      { name: "Lumin Fusion Nanoneedling / Infusion", price: "245" },
      { name: "Longevity Glow Treat", price: "225" },
    ],
  },
  {
    id: "targeted-solutions",
    title: "Dermalogica Targeted Skin Solutions Treatments",
    services: [
      { name: "Pro Clear Young Big — Teenager", price: "160" },
      { name: "Pro Clear Young Small — Teenager", price: "100" },
      { name: "Pro Clear — Erwachsene", price: "225" },
      { name: "Pro Back Clear — Rücken", price: "100" },
      { name: "Pro Bright — Pigmentaufhellend", price: "210" },
      { name: "Pro Calm Treat — Beruhigend", price: "180" },
    ],
  },
  {
    id: "signature-pro-skin",
    title: "Dermalogica Signature Pro Skin Treatments",
    services: [
      { name: "Pro Skin 45 — Quick Clear", price: "180" },
      { name: "Pro Skin 60", price: "225" },
      { name: "Pro Skin 90", price: "265" },
      { name: "Ultra Skin 120", price: "335" },
    ],
  },
  {
    id: "medical-skin",
    title: "Dermalogica Medical Skin Treatments",
    services: [
      { name: "Exoboost Mikrodermabrasion oder Microneedling 0.5", price: "470" },
    ],
  },
  {
    id: "personal-standalone",
    title: "Personal Stand Alone Service",
    tag: "NEU",
    services: [
      {
        name: "Personal Combi (z.B. Lashtint & Eyebrowtint / Upper Lip Wax & Eyeshape)",
        price: "80",
      },
    ],
  },
  {
    id: "glowskin-makeup",
    title: "Glowskinbeauty / Jane Iredale / Make-up",
    services: [
      { name: "Make-up Beratung", price: "65" },
      { name: "Tages- & Abend-Make-up", price: "80" },
      { name: "Brautmake-up", price: "200" },
    ],
  },
  {
    id: "ellebaana-lashlift",
    title: "Ellebaana Lashlift",
    tag: "NEU",
    services: [
      { name: "Ellebaana Wimpernlift inkl. blauschwarzer Wimpernfärbung", price: "150" },
    ],
  },
  {
    id: "add-on-skin",
    title: "Add-on Skin Treat",
    services: [
      { name: "Black Eyepads inkl. Smart Eye Density Serum", price: "20", neu: true },
      { name: "Lashtint", price: "40" },
      { name: "Plump Peel & Phyto E2", price: "20", neu: true },
      { name: "Wax Upperlip", price: "25" },
      { name: "Phytomer Spa Rückenbehandlung", price: "60" },
      { name: "Brow Tint", price: "35" },
      { name: "Brow Shape", price: "20" },
      { name: "Blue Repair Mask", price: "15" },
      { name: "BT-Cocktail Mask", price: "15" },
      { name: "Wax Cheeks", price: "40" },
      { name: "Wax Chin", price: "10" },
      { name: "Wax Ear", price: "10" },
      { name: "Wax Nose", price: "10" },
    ],
  },
  {
    id: "the-face-qeh",
    title: "The Face® & QEH® Treat",
    services: [{ name: "Holistic Skin Treat", price: "325" }],
  },
  {
    id: "quantum-angel-healing",
    title: "Quantum Angel Healing® (QEH) nach Eva-Maria Mora",
    services: [{ name: "Neustart Selbstheilung mit Engeln", price: "188" }],
  },
];

function ServiceBox({ name, price, neu, index }) {
  return (
    <motion.a
      href={BRAND.booking}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col justify-between bg-white border border-charcoal/10 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-6">
        {neu && (
          <span className="text-[10px] tracking-[0.15em] uppercase text-white bg-gold px-2 py-0.5 rounded-sm">
            Neu
          </span>
        )}
        <span className="ml-auto font-heading text-3xl sm:text-4xl font-semibold text-charcoal tabular-nums leading-none">
          {price}
          <span className="text-charcoal/40 text-sm font-body font-normal ml-1">CHF</span>
        </span>
      </div>
      <p className="text-charcoal/80 text-[15px] leading-snug font-medium min-h-[2.5rem]">
        {name}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-gold text-xs tracking-[0.15em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Termin buchen →
      </span>
    </motion.a>
  );
}

function CategoryBlock({ category, index }) {
  return (
    <div className="mb-16 last:mb-0">
      <ScrollReveal className="mb-8">
        <div className="flex items-center gap-4">
          <span className="text-charcoal/25 font-heading text-2xl tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1">
            <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal leading-tight">
              {category.title}
            </h3>
            {category.note && (
              <p className="text-charcoal/50 text-sm mt-1">{category.note}</p>
            )}
          </div>
          {category.tag && (
            <span className="text-[10px] tracking-[0.15em] uppercase text-white bg-gold px-2.5 py-1 rounded-sm">
              {category.tag}
            </span>
          )}
        </div>
        <div className="hairline w-full mt-5 opacity-30" />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.services.map((s, i) => (
          <ServiceBox key={s.name} {...s} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="preise" className="bg-sand py-20 sm:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Behandlungen & Preise
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal leading-[1.05] mb-4">
            Invest in <span className="gold-gradient-text">your skin</span>
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Mein vollständiges Behandlungsangebot mit transparenten Preisen. Jede Behandlung ist individuell auf die Bedürfnisse Deiner Haut abgestimmt.
          </p>
          <div className="hairline w-24 mx-auto mt-6" />
        </ScrollReveal>

        {PRICE_LIST.map((cat, i) => (
          <CategoryBlock key={cat.id} category={cat} index={i} />
        ))}

        <ScrollReveal className="text-center mt-14" delay={0.1}>
          <p className="text-charcoal/50 text-sm mb-5 italic">
            Preise in CHF, inkl. MWST. Behandlungsdauer auf Anfrage.
          </p>
          <a
            href={BRAND.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-[#6B7280] text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-gold/30"
          >
            <Calendar size={18} />
            Termin buchen
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}