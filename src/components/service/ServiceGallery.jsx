import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServiceGallery({ gallery, serviceName }) {
  if (!gallery || gallery.length === 0) return null;

  const cols =
    gallery.length === 1
      ? "grid-cols-1"
      : gallery.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-14 sm:py-16 px-5 bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-8">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-2">
            Eindrücke
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-charcoal mb-3">
            {serviceName} in Bildern
          </h2>
          <div className="hairline w-16 mx-auto" />
        </ScrollReveal>
        <div className={`grid ${cols} gap-4`}>
          {gallery.map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="overflow-hidden rounded-lg border border-gold/15 shadow-sm bg-secondary">
                <img
                  src={src}
                  alt={`${serviceName} – Eindruck ${i + 1}`}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}