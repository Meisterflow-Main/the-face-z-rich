import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      { name: "Pro Clear Young Big: Teenager", price: "160" },
      { name: "Pro Clear Young Small: Teenager", price: "100" },
      { name: "Pro Clear: Erwachsene", price: "225" },
      { name: "Pro Back Clear: Rücken", price: "100" },
      { name: "Pro Bright: Pigmentaufhellend", price: "210" },
      { name: "Pro Calm Treat: Beruhigend", price: "180" },
    ],
  },
  {
    id: "signature-pro-skin",
    title: "Dermalogica Signature Pro Skin Treatments",
    services: [
      { name: "Pro Skin 45: Quick Clear", price: "180" },
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

function ServiceRow({ name, price, neu }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-gold/10 last:border-0">
      <div className="flex items-center gap-2 min-w-0">
        {neu && (
          <span className="text-[10px] tracking-[0.15em] uppercase text-white bg-gold px-2 py-0.5 rounded-sm shrink-0">
            Neu
          </span>
        )}
        <span className="text-charcoal/80 text-[15px] font-medium truncate">{name}</span>
      </div>
      <span className="font-heading text-xl font-semibold text-charcoal tabular-nums shrink-0">
        {price}
        <span className="text-charcoal/40 text-xs font-body font-normal ml-1">CHF</span>
      </span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="preise" className="bg-sand py-20 sm:py-28 px-5">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Behandlungen & Preise
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[42px] font-semibold text-foreground leading-[1.12] tracking-[-0.02em] mb-4">
            Invest in <span className="gold-gradient-text">your skin</span>
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Mein vollständiges Behandlungsangebot mit transparenten Preisen. Jede Behandlung ist individuell auf die Bedürfnisse Deiner Haut abgestimmt.
          </p>
          <div className="hairline w-24 mx-auto mt-6" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-4">
            {PRICE_LIST.map((cat) => (
              <AccordionItem
                key={cat.id}
                value={cat.id}
                className="bg-card border border-gold/15 rounded-lg px-6 shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6 group">
                  <div className="flex items-center gap-3 text-left pr-4">
                    {cat.tag && (
                      <span className="text-[10px] tracking-[0.15em] uppercase text-white bg-gold px-2.5 py-1 rounded-sm shrink-0">
                        {cat.tag}
                      </span>
                    )}
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal leading-tight">
                        {cat.title}
                      </h3>
                      {cat.note && (
                        <p className="text-charcoal/50 text-sm mt-0.5">{cat.note}</p>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-1">
                  <div className="mt-2">
                    {cat.services.map((s) => (
                      <ServiceRow key={s.name} {...s} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-14" delay={0.1}>
          <p className="text-charcoal/50 text-sm mb-5 italic">
            Preise in CHF, inkl. MWST. Behandlungsdauer auf Anfrage.
          </p>
          <a
            href={BRAND.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/30"
          >
            <Calendar size={18} />
            Termin buchen
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}