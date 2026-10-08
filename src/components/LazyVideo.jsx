import React, { useRef, useEffect, useState } from "react";

/**
 * LazyVideo — only loads and plays a video when it scrolls near the viewport.
 * Prevents many videos from downloading simultaneously on a long page.
 */
export default function LazyVideo({ src, className, alt, controls, preload = "auto" }) {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || !shouldLoad) return;
    if (inView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView, shouldLoad]);

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      controls={controls}
      aria-label={alt}
      className={className}
    />
  );
}