import React from "react";
import LazyVideo from "@/components/LazyVideo";

export default function ServiceVideo({ src }) {
  return (
    <LazyVideo
      src={src}
      controls
      className="block w-full h-auto object-contain"
    />
  );
}