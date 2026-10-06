import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Image } from "@/components/ui/image";
import { BRAND } from "@/lib/brand";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";

const ROOM_IMAGE =
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/daac4795b_WhatsAppImage2026-09-10at1700351.jpeg";

const SECTIONS = [
  {
    heading: null,
    paragraphs: [
      "Ich bin Denise Claire Gadient, Hautpflege-Expertin und Inhaberin von THE FACE im Zürcher Kreis 1. Mit Leidenschaft widme ich mich der professionellen Haut- und Gesichtspflege – mit dem Ziel, die natürliche Schönheit und Gesundheit Deiner Haut nachhaltig zu unterstützen.",
      "Als Kosmetikerin EFZ und Visagistin mit der Weiterbildung zur DERMALOGICA EXPERT liegt mein Schwerpunkt auf professioneller Hautpflege und individueller Make-up-Beratung. Selbstständig seit 1994, empfange ich Dich seit 27 Jahren an der Rämistrasse 27, vis-à-vis Parkhaus Hohe Promenade.",
    ],
  },
  {
    heading: "Die Liebe zur Schönheit wurde mir in die Wiege gelegt",
    paragraphs: [
      "Als Bündnerin in Vaduz aufgewachsen, hat mir meine Mutter, Coiffeuse von Beruf, die Liebe zu «Cosmea» – zur Pflege von Ordnung, Harmonie und Schönheit – in die Wiege gelegt. Ein Buch über Schönheit und Hautpflege gab mir den entscheidenden Anstoss für meinen Weg.",
      "Meine eigenen Erfahrungen mit Akne als Teenager und später mit Allergien und atopischem Ekzem (Neurodermitis) haben mich geprägt. Sie haben mich darin bestärkt, auf professionelle, wirksame Pflegeprodukte und Cosmeceuticals zu setzen – und auf eine Heimpflege, die sorgfältig auf Deine Haut abgestimmt ist.",
    ],
  },
  {
    heading: "High Touch & High Tech",
    paragraphs: [
      "Ich bin überzeugt von der Verbindung aus dem Besten der Pflanzenwelt und moderner Biotechnologie: HIGH TOUCH & HIGH TECH. Meine Behandlungen sollen die Haut nicht verletzen, sondern sie unterstützen – sanft, wirkungsvoll und ohne Downtime. Ganz nach meiner Devise: gesünder – jünger – frischer.",
    ],
  },
  {
    heading: "Schönheit bedeutet für mich auch Ganzheitlichkeit",
    paragraphs: [
      "Neben meiner kosmetischen Weiterbildung beschäftige ich mich intensiv mit Spiritualität und medialer Wahrnehmung – unter anderem in QEH (Quantum-Engel-Heilung®). Diese Erfahrungen erlauben es mir, meine Intuition bewusst in meine Arbeit einfliessen zu lassen.",
      "Für mich steht immer der Mensch als Ganzes im Mittelpunkt – mit seiner Haut, seiner Persönlichkeit und seinen individuellen Bedürfnissen.",
    ],
  },
];

export default function AboutEditorial() {
  return (
    <section id="ueber" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-background">
      <div className="mx-auto max-w-[1280px] grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <ScrollReveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 flex flex-col gap-4">
            <Image
              src={ROOM_IMAGE}
              alt="Denise Claire Gadient – Kosmetikerin EFZ, THE FACE® Zürich"
              fittingType="cover"
              className="rounded-lg w-full aspect-[4/5] shadow-sm"
            />
            <GoogleReviewBadge />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="lg:col-span-7">
          <p className="text-gold text-[13px] tracking-[0.12em] uppercase font-semibold mb-4">
            Über THE FACE®
          </p>
          <h2 className="font-heading text-[30px] sm:text-4xl md:text-[42px] font-semibold text-foreground leading-[1.12] tracking-[-0.02em] mb-6">
            Denise Claire Gadient
          </h2>
          <div className="hairline w-16 mb-8" />

          <div className="space-y-8">
            {SECTIONS.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-charcoal mb-3">
                    {section.heading}
                  </h3>
                )}
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-foreground/75 text-base sm:text-[17px] leading-[1.7] mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gold/15">
            <p className="text-foreground/75 text-base sm:text-[17px] leading-[1.7] mb-2">
              Ich freue mich darauf, dich persönlich kennenzulernen und für dich und deine Haut da zu sein.
            </p>
            <p className="text-foreground/80 text-base sm:text-[17px] leading-[1.7] mb-1">
              Herzlich
            </p>
            <p className="font-heading text-lg font-semibold text-charcoal">
              Denise Claire Gadient
            </p>
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