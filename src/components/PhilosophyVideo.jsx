import React, { useRef, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const VIDEO_SRC =
  "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/89f2c16e0_InaworldbecomingmoredigitaleverydayJaneWurwandremindsusthathumantouchisstillat.mp4";

const PRO_TIP_IMG =
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/df004ae55_SkincareProTipMinimalistPoster.png";
const HUMAN_TOUCH_IMG =
  "https://media.base44.com/images/public/6aa28dd575421cdcca35083c/fbe0c4834_HumanTouchLastingConnection.png";

export default function PhilosophyVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="px-5 sm:px-8 py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-[1100px]">
        <ScrollReveal className="text-center mb-8">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
            Philosophie
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal leading-tight">
            Human <span className="gold-gradient-text">Touch</span>
          </h2>
          <p className="text-charcoal/65 text-sm sm:text-base leading-relaxed mt-4 max-w-xl mx-auto">
            Clean Skincare seit 1986 – Dermalogica's Gründerin Jane Wurwand
          </p>
          <div className="hairline w-20 mx-auto mt-4" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden border border-gold/15 shadow-md bg-charcoal">
            <video
              ref={ref}
              src={VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls
              className="block w-full h-auto object-contain"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-10">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-gold/15 shadow-sm bg-charcoal">
              <img
                src={PRO_TIP_IMG}
                alt="Pro Tip: alle 4–6 Wochen zu einem Professional Skin Therapist"
                loading="lazy"
                className="block w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gold/15 shadow-sm bg-charcoal">
              <img
                src={HUMAN_TOUCH_IMG}
                alt="Human Touch – Danke für Deine Treue, Deine Hauttherapeutin"
                loading="lazy"
                className="block w-full h-auto object-contain"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}