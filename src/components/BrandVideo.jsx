import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import LazyVideo from "@/components/LazyVideo";

const VIDEOS = [
  {
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/f0221bccc_BRANDCAMPAIGN_15s_4x5_DE.mp4",
    alt: "THE FACE® Brand Campaign",
  },
  {
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/88efdc764_Personalizedskintreatmentsdesignedtodelivermorethanjustresultstheyhelpyoutrulyund.mp4",
    alt: "Personalized Skin Treatments – THE FACE®",
  },
];

export default function BrandVideo() {
  return (
    <section className="bg-charcoal py-14 sm:py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-1">
            THE FACE®
          </h2>
          <p className="text-white/60 text-sm font-medium tracking-[0.14em] uppercase mb-3">
            Denise Claire Gadient
          </p>
          <div className="hairline w-16 mx-auto" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            {VIDEOS.map((v) => (
              <div
                key={v.src}
                className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-[460px]"
              >
                <div className="aspect-[4/5]">
                  <LazyVideo
                    src={v.src}
                    alt={v.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}