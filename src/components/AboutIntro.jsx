import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Image } from "@/components/ui/image";

const ROOM_IMAGE =
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/8406b6bbe_WhatsAppImage2026-09-10at162208.jpeg";

export default function AboutIntro() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">
              Über The FACE Zürich
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
              Schöne Haut beginnt mit der richtigen Pflege.
            </h2>
            <div className="hairline w-16 mb-6" />

            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Bei <strong className="text-charcoal">THE FACE® in Zürich</strong> steht deine
              Haut im Mittelpunkt. Seit über 30 Jahren liegt der Fokus auf
              ganzheitlicher Gesichtspflege, individueller Beratung und
              nachhaltiger Hautgesundheit.
            </p>

            <p className="text-charcoal/60 leading-relaxed mb-6">
              Als <strong className="text-charcoal">zertifizierte Kosmetikerin EFZ,
              VNISSG-zertifizierte Fachperson, Dermalogica Skin Expert und
              Visagistin</strong> bietet Denise Claire Gadient persönliche und
              individuell abgestimmte Behandlungen für unterschiedliche
              Hautbedürfnisse.
            </p>

            <p className="text-charcoal/60 leading-relaxed mb-6">
              Von professionellen <strong className="text-charcoal">Pro Skin
              Treatments und Longevity Glow Treatments</strong> über Hautanalysen
              und Revitalisierung bis hin zu gezielter Pflege bei{" "}
              <strong className="text-charcoal">Akne, Fältchen und Falten,
              Hyperpigmentierung oder sensibler Haut</strong> – jede Behandlung wird
              auf deine Haut und deine persönlichen Bedürfnisse abgestimmt.
            </p>

            <p className="text-charcoal/60 leading-relaxed mb-8">
              Dabei verbinden sich sanfte Behandlungsmethoden, hochwertige
              Produkte und innovative Technologien zu einem individuellen
              Pflegeerlebnis.
            </p>

            <p className="font-heading text-lg sm:text-xl font-semibold gold-gradient-text leading-snug">
              Invest in your skin – gönne deiner Haut die Aufmerksamkeit, die sie
              verdient.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold/30 rounded-2xl" />
              <Image
                src={ROOM_IMAGE}
                alt="Behandlungsraum von THE FACE® Zürich mit Tageslicht und Dermalogica-Produkten"
                fittingType="cover"
                className="relative rounded-2xl w-full aspect-[4/5] shadow-xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}