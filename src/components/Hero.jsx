import React from "react";
import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { BRAND, ASSETS } from "@/lib/brand";
import TreatmentVideos from "@/components/TreatmentVideos";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 overflow-hidden bg-sand">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://media.base44.com/videos/public/6aa28dd575421cdcca35083c/38055fc91_Hero_Background_Video.mp4" type="video/mp4" />
      </video>
      {/* Soft overlay for legibility */}
      <div className="absolute inset-0 bg-sand/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/50" />
      {/* Decorative gold glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-gold/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        <img
          src={ASSETS.logo}
          alt="THE FACE® Zürich – Denise Claire Gadient"
          className="h-16 sm:h-24 md:h-28 w-auto mb-6"
        />

        <p className="text-charcoal/70 text-sm sm:text-base font-medium tracking-wide mb-2">
          Kosmetikerin EFZ zertifiziert VNISSG Haut und Pigmente
        </p>
        <p className="text-charcoal/60 text-sm sm:text-base font-medium tracking-wide mb-8">
          Dermalogica Skin Expert &amp; Visagistin
        </p>

        <div className="hairline w-24 mb-8" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold text-charcoal leading-[1.05] mb-4"
        >
          Invest in <span className="gold-gradient-text">your skin</span>
        </motion.h1>

        <p className="text-charcoal/70 text-base sm:text-lg max-w-2xl leading-relaxed mb-2">
          Über 30 Jahre spezialisiert in holistischer Gesichtspflege.
        </p>
        <p className="text-charcoal/60 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
          Lass Deine Haut von meinen sanften Händen, hochwertigen und innovativen
          Clean-Produkten sowie effektvollen Behandlungsgeräten verwöhnen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href={BRAND.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-[#6B7280] text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-gold/30"
          >
            <Calendar size={18} />
            Termin buchen
          </a>
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 glass border border-gold/40 text-charcoal font-semibold px-8 py-4 rounded-full transition-all hover:border-gold"
          >
            <MessageCircle size={18} className="text-gold" />
            WhatsApp Anfrage
          </a>
        </div>

        <p className="mt-8 text-charcoal/50 text-sm italic">Ich freue mich auf deine Online-Buchung. – Herzlichst DC</p>
      </motion.div>

      <TreatmentVideos />
    </section>
  );
}