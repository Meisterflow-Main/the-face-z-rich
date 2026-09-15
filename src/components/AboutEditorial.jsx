import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Image } from "@/components/ui/image";
import { SKIN_CONCERNS } from "@/lib/brand";

const ROOM_IMAGE =
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/daac4795b_WhatsAppImage2026-09-10at1700351.jpeg";

export default function AboutEditorial() {
  return (
    <section id="ueber" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-background">
      <div className="mx-auto max-w-[1280px] grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <ScrollReveal className="lg:col-span-5">
          <Image
            src={ROOM_IMAGE}
            alt="Denise Claire Gadient – Kosmetikerin EFZ, THE FACE® Zürich"
            fittingType="cover"
            className="rounded-lg w-full aspect-[4/5] shadow-sm"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-7">
          <p className="text-gold text-[13px] tracking-[0.12em] uppercase font-semibold mb-4">
            Über THE FACE®
          </p>
          <h2 className="font-heading text-[30px] sm:text-4xl md:text-[42px] font-semibold text-foreground leading-[1.12] tracking-[-0.02em] mb-6">
            Über 30 Jahre Hautvertrauen an der Rämistrasse
          </h2>
          <div className="hairline w-16 mb-6" />
          <p className="text-foreground/75 text-base sm:text-lg leading-[1.65] mb-5">
            Bei THE FACE® in Zürich steht Deine Haut im Mittelpunkt. Seit über 30 Jahren liegt
            der Fokus auf ganzheitlicher Gesichtspflege, individueller Beratung und nachhaltiger
            Hautgesundheit.
          </p>
          <p className="text-muted-foreground leading-[1.65] mb-6">
            Als <strong className="text-foreground font-medium">Kosmetikerin EFZ,
            VNISSG-zertifizierte Fachperson für Haut und Pigmente, Dermalogica Skin Expert und
            Visagistin</strong> bietet Denise Claire Gadient persönlich abgestimmte Behandlungen
            für unterschiedliche Hautbedürfnisse.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {SKIN_CONCERNS.map((c) => (
              <span
                key={c}
                className="text-sm px-3.5 py-1.5 rounded-md bg-secondary text-muted-foreground border border-border"
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