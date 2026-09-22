import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Image } from "@/components/ui/image";
import { BRAND, SKIN_CONCERNS } from "@/lib/brand";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";

const ROOM_IMAGE =
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/daac4795b_WhatsAppImage2026-09-10at1700351.jpeg";
const MASSAGE_IMAGE =
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/f06abc679_IMG_1731.jpeg";

export default function AboutEditorial() {
  return (
    <section id="ueber" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-background">
      <div className="mx-auto max-w-[1280px] grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <ScrollReveal className="lg:col-span-5">
          <div className="flex flex-col gap-4">
            <Image
              src={ROOM_IMAGE}
              alt="Denise Claire Gadient – Kosmetikerin EFZ, THE FACE® Zürich"
              fittingType="cover"
              className="rounded-lg w-full aspect-[4/5] shadow-sm"
            />
            <img
              src={MASSAGE_IMAGE}
              alt="Persönliche Gesichtsbehandlung und Massage bei THE FACE® Zürich"
              className="rounded-lg w-full h-auto block shadow-sm"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-7">
          <p className="text-gold text-[13px] tracking-[0.12em] uppercase font-semibold mb-4">
            Über THE FACE®
          </p>
          <h2 className="font-heading text-[30px] sm:text-4xl md:text-[42px] font-semibold text-foreground leading-[1.12] tracking-[-0.02em] mb-6">
            Über 30 Jahre Hautvertrauen an der Rämistrasse
          </h2>
          <div className="hairline w-16 mb-6" />
          <GoogleReviewBadge className="mb-5" />
          <p className="text-foreground/75 text-base sm:text-lg leading-[1.65] mb-5">
            Bei THE FACE® in Zürich steht Deine Haut im Mittelpunkt. Seit über 30 Jahren liegt
            der Fokus auf ganzheitlicher Gesichtspflege, persönlicher Beratung und nachhaltiger
            Hautgesundheit.
          </p>
          <p className="text-foreground/75 text-base sm:text-lg leading-[1.65] mb-5">
            Zusammen besprechen wir immer, was das Beste für Deinen aktuellen Hautzustand ist
            und was Dein Wunsch ist.
          </p>
          <p className="text-muted-foreground leading-[1.65] mb-6">
            Als <strong className="text-foreground font-medium">Kosmetikerin EFZ,
            VNISSG-zertifizierte Fachperson für Haut und Pigmente, Dermalogica Skin Expert und
            Visagistin</strong> bietet Denise Claire Gadient persönlich abgestimmte Behandlungen
            für unterschiedliche Hautbedürfnisse.
          </p>
          <p className="text-muted-foreground leading-[1.65] mb-6">
            Denise besuchte den Dermalogica Longevity Retreat in Köln. Vor zwei Jahren absolvierte
            sie den Sachkundenachweis V-NISSG für Haut und Pigmentierung an der Schweizerischen
            Gemeinschaft für medizinische Kosmetik (SGMK).
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
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={BRAND.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              <Calendar size={18} /> Termin buchen
            </a>
            <Link
              to="/bewertung"
              className="inline-flex items-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-6 py-3 rounded-lg transition-all hover:border-gold"
            >
              <Star size={18} className="text-gold" /> Bewertung abgeben
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}