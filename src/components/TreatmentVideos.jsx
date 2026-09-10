import React, { useRef } from "react";
import { motion } from "framer-motion";

const VIDEOS = [
  {
    title: "Hautanalyse",
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/7e2b34f91_Hautanalyse_video.mp4",
  },
  {
    title: "Pro Skin Treatment",
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/91d5a47bf_Pro_Skin_video.mp4",
  },
  {
    title: "Longevity Glow Treatment",
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/a7efe6fe0_Longevity_Glow_video.mp4",
  },
  {
    title: "Revitalisierung",
    src: "https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/91c941b5a_Revitalisierung_video.mp4",
  },
];

function VideoCard({ video, index }) {
  const ref = useRef(null);

  const handleEnter = () => {
    const v = ref.current;
    if (v && v.paused) v.play().catch(() => {});
  };
  const handleLeave = () => {
    const v = ref.current;
    if (v) v.pause();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20 bg-charcoal shadow-lg"
    >
      <video
        ref={ref}
        src={video.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
    <div className="relative z-10 w-full max-w-6xl mt-14">
      <p className="text-center text-charcoal/50 text-xs tracking-[0.25em] uppercase mb-5">
        Einblicke in meine Behandlungen
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {VIDEOS.map((v, i) => (
          <VideoCard key={v.title} video={v} index={i} />
        ))}
      </div>
    </div>
  );
}