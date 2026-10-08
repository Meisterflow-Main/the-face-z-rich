import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const VIDEOS = [
  {
    title: "Hautanalyse für Sie",
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/8b68ee6fc_Hautanalyse_European.mp4",
  },
  {
    title: "Pro Skin Treatment für Sie",
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/db29ac80e_Pro_Skin_European.mp4",
  },
  {
    title: "Pro Clear für Ihn",
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/566f9d9ab_Man_reel_light_beard.mp4",
  },
  {
    title: "Skin Longevity",
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/c5325fb5e_Skin_Longevity_Reel.mp4",
  },
];

function VideoCard({ video, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-lg overflow-hidden border border-gold/15 bg-charcoal shadow-sm"
    >
      <video
        ref={ref}
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="hairline w-8 mb-2 opacity-70" />
        <h3 className="font-heading text-sm sm:text-base font-semibold text-white tracking-wide">
          {video.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function TreatmentVideos() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 py-20 sm:py-24">
      <div className="text-center mb-10">
        <p className="text-gold font-semibold tracking-[0.25em] text-xs uppercase mb-3">Einblicke</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-[40px] font-semibold text-foreground tracking-[-0.02em]">
          Erlebe die Behandlungen in Bewegung
        </h2>
        <div className="hairline w-16 mx-auto mt-5" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {VIDEOS.map((v, i) => (
          <VideoCard key={v.title} video={v} index={i} />
        ))}
      </div>
    </section>
  );
}