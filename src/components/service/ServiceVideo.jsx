import React, { useRef, useEffect } from "react";

export default function ServiceVideo({ src }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      controls
      className="block w-full h-auto object-contain"
    />
  );
}