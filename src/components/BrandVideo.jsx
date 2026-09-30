import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const VIDEO_SRC =
  "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/f0221bccc_BRANDCAMPAIGN_15s_4x5_DE.mp4";

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
          <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 max-w-[460px]">
            <div className="aspect-[4/5]">
              <video
                src={VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}