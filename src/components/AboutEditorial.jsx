import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Image } from "@/components/ui/image";
import { SKIN_CONCERNS } from "@/lib/brand";

const ROOM_IMAGE =
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/daac4795b_WhatsAppImage2026-09-10at1700351.jpeg";

export default function AboutEditorial() {
  return (
    <section id="ueber" className="py-20 sm:py-28 px-5 sm:px-8 bg-background">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <ScrollReveal className="lg:col-span-5 order-2 lg:order-1">
          <Image
            src={ROOM_IMAGE}
            alt="Denise Claire Gadient – Kosmetikerin EFZ, THE FACE® Zürich"
            fittingType="cover"
            className="rounded-sm w-full aspect-[4/5] shadow-sm"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-7 order-1 lg:order-2">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">
            Über THE FACE®
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal leading-[1.08] mb-6">
            Über 30 Jahre Hautvertrauen an der Rämistrasse
          </h2>
          <div className="hairline w-16 mb-6" />
          <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed mb-5">
            Bei THE FACE® in Zürich steht Deine Haut im Mittelpunkt. Seit über 30 Jahren liegt
            der Fokus auf ganzheitlicher Gesichtspflege, individueller Beratung und nachhaltiger
            Hautgesundheit.
          </p>
          <p className="text-charcoal/65 leading-relaxed mb-5">
            Als <strong className="text-charcoal font-medium">Kosmetikerin EFZ,
            VNISSG-zertifizierte Fachperson für Haut und Pigmente, Dermalogica Skin Expert und
            Visagistin</strong> bietet Denise Claire Gadient persönlich abgestimmte Behandlungen
            für unterschiedliche Hautbedürfnisse – von Jugend- und Altersakne über Fältchen und
            Falten bis zu Hyperpigmentation und sensibler Haut.
          </p>
          <p className="text-charcoal/65 leading-relaxed mb-8">
            Sanfte Methoden, hochwertige Clean-Produkte und innovative Technologien verbinden
            sich zu einem individuellen Pflegeerlebnis.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {SKIN_CONCERNS.map((c) => (
              <span
                key={c}
                className="text-sm px-4 py-2 rounded-full bg-secondary text-charcoal/70 border border-gold/20"
              >
                {c}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}