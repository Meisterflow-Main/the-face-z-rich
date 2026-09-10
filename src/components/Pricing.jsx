import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
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

function PriceRow({ name, price, neu }) {
  return (
    <li className="flex items-baseline gap-3 py-3 border-b border-charcoal/8 last:border-b-0">
      <span className="flex-1 text-charcoal/80 text-[15px] leading-snug">
        {neu && (
          <span className="inline-block mr-2 text-[10px] tracking-[0.15em] uppercase text-white bg-gold px-1.5 py-0.5 rounded-sm align-middle">
            Neu
          </span>
        )}
        {name}
      </span>
      <span className="hairline flex-1 max-w-[6rem] opacity-40 self-center hidden sm:block" />
      <span className="text-charcoal font-heading text-lg font-semibold whitespace-nowrap tabular-nums">
        {price}
        <span className="text-charcoal/50 text-sm font-body font-normal ml-1">CHF</span>
      </span>
    </li>
  );
}

function CategoryCard({ category, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-charcoal/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <div className="flex items-center gap-3">
          <span className="text-charcoal/30 font-heading text-xl tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal leading-tight">
              {category.title}
            </h3>
            {category.note && (
              <p className="text-charcoal/50 text-sm mt-0.5">{category.note}</p>
            )}
            {category.tag && (
              <span className="inline-block mt-1 text-[10px] tracking-[0.15em] uppercase text-white bg-gold px-2 py-0.5 rounded-sm">
                {category.tag}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-charcoal/40 text-sm hidden sm:inline">
            {category.services.length} {category.services.length === 1 ? "Behandlung" : "Behandlungen"}
          </span>
          <ChevronDown
            size={22}
            className={`text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="px-6 pb-5 pt-1">
              {category.services.map((s) => (
                <PriceRow key={s.name} {...s} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="preise" className="bg-sand py-20 sm:py-28 px-5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-12">
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

        <div className="space-y-4">
          {PRICE_LIST.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

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