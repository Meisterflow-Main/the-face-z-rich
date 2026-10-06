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
    id: "medical-skin-offer",
    title: "10% OFFER DERMALOGICA MEDICAL SKIN TREATMENT bis FEBRUAR 2027",
    tag: "10% OFFER",
    services: [
      { name: "EXOBOOSTER MICRONEEDLING 0.5 INKL. HOMESERUM", price: "470" },
    ],
  },
  {
    id: "red-carpet-offer",
    title: "10% OFFER ZFF RED CARPET LOOK bis 31. Oktober (nicht bei Abo)",
    tag: "10% OFFER",
    services: [
      { name: "LUMIN FUSION NANOINFUSION", price: "245" },
      { name: "NEU ! LONGEVITY GLOW TREAT", price: "225" },
      { name: "TAGES-ABEND bis GALA MAKE-UP", price: "99" },
    ],
  },
  {
    id: "hautanalyse-beratung",
    title: "HAUTANALYSE BERATUNG inkl. QUICKBOOST",
    services: [
      { name: "FACE-MAP und FACE-FIT", price: "95" },
    ],
  },
  {
    id: "targeted-skin-solutions",
    title: "DERMALOGICA TARGETET SKIN SOLUTIONS TREATMENTS",
    services: [
      { name: "PRO CLEAR YOUNG BIG Teenager (ab 10-20 Jahre)", price: "160" },
      { name: "PRO CLEAR YOUNG SMALL Teenager (10-20 Jahren)", price: "100" },
      { name: "PRO BACK CLEAR Rückenreinigung", price: "100" },
      { name: "PRO CLEAR Erwachsene", price: "225" },
      { name: "PRO BRIGHT Pigmentaufhellend", price: "210" },
      { name: "PRO CALM TREAT Beruhigend", price: "180" },
      { name: "PRO FIRM Straffend", price: "225" },
    ],
  },
  {
    id: "signature-pro-skin",
    title: "DERMALOGICA SIGNATURE PRO SKIN TREATMENTS",
    services: [
      { name: "PRO SKIN 45 QUICK CLEAR", price: "180" },
      { name: "PRO SKIN 60", price: "225" },
      { name: "PRO SKIN 90", price: "270" },
      { name: "ULTRA SKIN 120", price: "315" },
    ],
  },
  {
    id: "minlen-kids",
    title: "NEU & EXCLUSIV! MINLEN KIDS UND TWEENS SKIN TREAT",
    tag: "NEU",
    services: [
      { name: "MINLEN GESICHTSBEHANDLUNG (ab 4-11 Jahren)", price: "65" },
    ],
  },
  {
    id: "makeup-glowskin-janeiredale",
    title: "MAKE-UP mit GLOWSKINBEAUTY und JANE IREDALE",
    services: [
      { name: "MAKE-UP BERATUNG", price: "65" },
      { name: "BRAUTMAKE-UP", price: "200" },
    ],
  },
  {
    id: "kleiner-service",
    title: "NEU ! KLEINER SERVICE",
    tag: "NEU",
    services: [
      { name: "FACE QUICK FIX", price: "90" },
    ],
  },
  {
    id: "homeservice",
    title: "NEU ! HOMESERVICE EXCLUSIV",
    tag: "NEU",
    services: [
      { name: "EXCLUSIVE HOME SKIN TREAT", price: "100" },
    ],
  },
  {
    id: "phytomer-spa-ruecken",
    title: "PHYTOMER SPA RÜCKENBEHANDLUNG MIT MASSAGE UND ALGENPACKUNG",
    services: [
      { name: "PHYTOMER SPA RÜCKENBEHANDLUNG", price: "60" },
    ],
  },
  {
    id: "adds-on-skin-treat",
    title: "ADDS ON SKIN TREAT",
    services: [
      { name: "NEU! BLACK EYEPADS inkl. SMART EYE DENSITY SERUM", price: "20", neu: true },
      { name: "LASHTINT", price: "40" },
      { name: "NEU ! PLUMP PEEL & PHYTO E2", price: "20", neu: true },
      { name: "WAX UPPERLIP", price: "25" },
      { name: "BROW TINT", price: "35" },
      { name: "BROWN SHAPE", price: "20" },
      { name: "BLUE REPAIR MASK", price: "15" },
      { name: "BT-COCKTAIL MASK", price: "15" },
      { name: "WAX CHEEKS", price: "40" },
      { name: "WAX CHIN", price: "10" },
      { name: "WAX EAR", price: "10" },
      { name: "WAX NOSE", price: "10" },
    ],
  },
  {
    id: "quantum-angel-healing",
    title: "SELBSTHEILUNG / NEUANFANG QUANTUM-ANGEL-HEALING® (QEH) nach EVA-MARIA MORA",
    services: [
      { name: "NEUSTART SELBSTHEILUNG MIT ENGELN", price: "188" },
    ],
  },
];

function ServiceRow({ name, price, neu }) {
  return (
    <a
      href={BRAND.booking}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-4 py-3 border-b border-gold/10 last:border-0 group/service rounded-sm px-2 -mx-2 hover:bg-gold/5 transition-colors"
    >
      <div className="flex items-center gap-2 min-w-0">
        {neu && (
          <span className="text-[10px] tracking-[0.15em] uppercase text-white bg-gold px-2 py-0.5 rounded-sm shrink-0">
            Neu
          </span>
        )}
        <span className="text-charcoal/80 group-hover/service:text-charcoal text-[15px] font-medium truncate transition-colors">{name}</span>
      </div>
      <span className="font-heading text-xl font-semibold text-charcoal tabular-nums shrink-0">
        <span className="text-charcoal/40 text-xs font-body font-normal mr-1">CHF</span>{price}.–
      </span>
    </a>
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
            Mein vollständiges Behandlungsangebot mit transparenten Preisen. Ich setze bei meiner professionellen Hautpflege auf Dermalogica – jede Behandlung ist individuell auf die Bedürfnisse Deiner Haut abgestimmt.
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