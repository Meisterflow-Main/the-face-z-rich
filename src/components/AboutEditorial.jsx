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
      "Ich bin Denise Claire Gadient, Hautpflege-Expertin und Inhaberin von THE FACE im Zürcher Kreis 1. Seit vielen Jahren widme ich mich mit Leidenschaft der professionellen Haut- und Gesichtspflege – mit dem Ziel, die natürliche Schönheit und Gesundheit der Haut nachhaltig zu unterstützen.",
      "Meine Ausbildung zur Kosmetikerin EFZ und Visagistin bildet die Basis meiner Arbeit. Vor 22 Jahren habe ich mich zum DERMALOGICA Skin Therapist und 2014 zum DERMALOGICA EXPERT weitergebildet. Mein Schwerpunkt liegt auf professioneller Haut- und Gesichtspflege sowie individueller Make-up-Beratung. Damit ich auch meine englischsprachige Kundschaft kompetent beraten kann, habe ich zudem einen Sprachkurs am International House in London absolviert.",
    ],
  },
  {
    heading: "Erfahrung, die man spürt",
    paragraphs: [
      "2018 durfte ich eine ganz besondere Auszeichnung entgegennehmen: den DERMALOGICA AWARD als Hauttherapeutin des Jahres im Bereich «Bekenntnis zur Marke». Zuvor war ich bereits zweimal nominiert und erreichte den 2. Platz.",
      "Seit mittlerweile 27 Jahren bin ich selbstständig. Diese langjährige Erfahrung verbinde ich mit viel Einfühlungsvermögen, Engagement und Freude an meinem Beruf. Mir ist wichtig, dass jede Behandlung nicht nur sichtbare Resultate erzielt sondern auch zu einem persönlichen Schönheitserlebnis wird – ganz nach meiner Devise: gesünder – jünger – frischer.",
    ],
  },
  {
    heading: "Die Liebe zur Schönheit wurde mir in die Wiege gelegt",
    paragraphs: [
      "Als Bündnerin bin ich in Vaduz im Fürstentum Liechtenstein aufgewachsen. Die Liebe zu «Cosmea» – zur Pflege von Ordnung, Harmonie und Schönheit – hat mir meine Mutter, die Coiffeuse war, gewissermassen in die Wiege gelegt.",
      "Den entscheidenden Anstoss für meine Berufswahl gab mir schliesslich ein Geschenk meiner Eltern: ein Buch über Schönheit und Hautpflege. Danach wusste ich, welchen Weg ich einschlagen wollte.",
      "Meine eigenen Erfahrungen mit Akne als Teenager und später mit Allergien haben meinen beruflichen Weg zusätzlich geprägt. Sie haben mich darin bestärkt, auf professionelle, wirksame Pflegeprodukte und Cosmeceuticals zu setzen. Ebenso wichtig ist für mich eine Heimpflege, die sorgfältig und individuell auf die jeweilige Haut und ihre Bedürfnisse abgestimmt ist.",
    ],
  },
  {
    heading: "High Touch & High Tech",
    paragraphs: [
      "Ich bin überzeugt von der wirkungsvollen Verbindung aus dem Besten der Pflanzenwelt und moderner Biotechnologie: HIGH TOUCH & HIGH TECH.",
      "Dazu gehört für mich auch der gezielte und sichere Einsatz moderner Geräte. Meine Behandlungen sollen die Haut nicht verletzen, sondern sie unterstützen: aufbauen, klären, straffen, regenerieren und ihre natürlichen Prozesse fördern. Sanft, wirkungsvoll und ohne Downtime.",
    ],
  },
  {
    heading: "Wissen hört nie auf",
    paragraphs: [
      "Auch nach all den Jahren bilde ich mich regelmässig weiter – denn Hautpflege entwickelt sich ständig weiter und genau das begeistert mich an meinem Beruf.",
      "Als Dermalogica Expertin durfte ich kürzlich als einzige Schweizer Kosmetikerin das Dermalogica Longevity Retreat absolvieren. Diese Weiterbildung hat mir exklusive Einblicke in die neuesten Erkenntnisse und Behandlungskonzepte rund um das Thema «Healthy Aging» ermöglicht.",
    ],
  },
  {
    heading: "Schönheit bedeutet für mich auch Ganzheitlichkeit",
    paragraphs: [
      "Neben meinen kosmetischen und kosmetisch-medizinischen Weiterbildungen habe ich mich über die Jahre auch intensiv mit Spiritualität und medialer Wahrnehmung beschäftigt. 2014 absolvierte ich die Ausbildung in QEH (Quantum-Engel-Heilung®) inklusive Coaching und nahm an CRC (Cosmic Recoding®) sowie CRC Ultra teil. Zudem habe ich die Online-Ausbildung zum 3M-Medium™ (Moderne-Mora-Medium für Medialität und Heilung) abgeschlossen.",
      "Diese Erfahrungen ergänzen meine persönliche Entwicklung und ermöglichen es mir, meine ausgeprägte Intuition und meine medialen Fähigkeiten bewusst in meine Arbeit und die Begegnung mit Menschen einfliessen zu lassen.",
      "Für mich steht dabei immer der Mensch als Ganzes im Mittelpunkt – mit seiner Haut, seiner Persönlichkeit und seinen individuellen Bedürfnissen.",
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