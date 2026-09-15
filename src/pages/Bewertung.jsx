import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2, Loader2, ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { BRAND, ASSETS, WEBHOOK } from "@/lib/brand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Seo from "@/components/region/Seo";
import InternalLinks from "@/components/InternalLinks";

const QUESTIONS = [
  "Wie zufrieden warst Du mit Deiner Behandlung?",
  "Wie bewertest Du die Beratung & persönliche Betreuung?",
  "Wie wahrscheinlich ist es, dass Du THE FACE® weiterempfiehlst?",
];

const sendFeedback = async (rating, critique) => {
  await fetch(WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Behandlungsbewertung (intern)",
      email: "feedback@theface-zuerich.ch",
      phone: "-",
      description: `Bewertung: ${rating}/5 Sterne. Feedback: ${critique || "Kein Text"}`,
    }),
  });
};

export default function Bewertung() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([0, 0, 0]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [critique, setCritique] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done
  const [submitted, setSubmitted] = useState(false);

  const setAnswer = (val) => {
    const next = [...answers];
    next[step] = val;
    setAnswers(next);
    setTimeout(() => setStep((s) => s + 1), 250);
  };

  const submitLowRating = async () => {
    setStatus("loading");
    try {
      await sendFeedback(rating, critique);
    } catch (e) {
      // silent fail – feedback stays internal
    }
    setStatus("done");
    setSubmitted(true);
  };

  const isHigh = rating >= 4;

  return (
    <div className="min-h-screen bg-sand">
      <Seo
        title="Behandlung bewerten | THE FACE® Zürich"
        description="Bewerte Deine Behandlung bei THE FACE® Denise Claire Gadient in Zürich. Dein Feedback hilft mir, mich kontinuierlich zu verbessern."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Behandlung bewerten – THE FACE® Zürich",
          url: "https://theface-zuerich.ch/bewertung",
          inLanguage: "de-CH",
          description: "Bewerte Deine Behandlung bei THE FACE® Denise Claire Gadient in Zürich.",
          isPartOf: { "@id": "https://theface-zuerich.ch/#website" },
          about: { "@id": "https://theface-zuerich.ch/#localbusiness" },
          publisher: { "@id": "https://theface-zuerich.ch/#organization" },
        }}
      />
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20 px-5 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <Link to="/" className="inline-flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors text-sm mb-8">
            <ArrowLeft size={16} /> Zurück zur Startseite
          </Link>

          <div className="text-center mb-10">
            <img src={ASSETS.logo} alt="THE FACE®" className="h-12 w-auto mx-auto mb-5" />
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-3">
              Behandlung bewerten
            </h1>
            <div className="hairline w-16 mx-auto mb-4" />
            <p className="text-charcoal/60 leading-relaxed">
              Dein Feedback ist mir wichtig. Beantworte kurz drei Fragen und bewerte
              Deine Behandlung. Es dauert nur eine Minute.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP: Questions */}
            {step < QUESTIONS.length && !submitted && (
              <motion.div
                key="questions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl border border-gold/20 p-6 sm:p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  {QUESTIONS.map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-gold" : "bg-gold/20"}`} />
                  ))}
                </div>
                <p className="text-xs text-gold font-semibold tracking-[0.2em] uppercase mb-3">
                  Frage {step + 1} von {QUESTIONS.length}
                </p>
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal mb-6">
                  {QUESTIONS[step]}
                </h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <button
                      key={v}
                      onClick={() => setAnswer(v)}
                      className="flex-1 flex flex-col items-center gap-1.5 py-4 rounded-xl border border-gold/20 hover:border-gold hover:bg-gold/5 transition-all"
                    >
                      <div className="flex gap-0.5">
                        {Array.from({ length: v }).map((_, s) => (
                          <Star key={s} size={16} className="text-gold fill-gold" />
                        ))}
                      </div>
                      <span className="text-xs text-charcoal/60">{v} Sterne</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP: Star rating */}
            {step === QUESTIONS.length && !submitted && (
              <motion.div
                key="rating"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl border border-gold/20 p-6 sm:p-8 text-center"
              >
                <Sparkles className="text-gold mx-auto mb-4" size={28} />
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-2">
                  Gesamtbewertung
                </h2>
                <p className="text-charcoal/60 text-sm mb-6">
                  Wie viele Sterne gibst Du THE FACE® insgesamt?
                </p>
                <div className="flex justify-center gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <button
                      key={v}
                      onClick={() => setRating(v)}
                      onMouseEnter={() => setHover(v)}
                      onMouseLeave={() => setHover(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={40}
                        className={`transition-colors ${
                          (hover || rating) >= v ? "text-gold fill-gold" : "text-charcoal/20"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {rating > 0 && !isHigh && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-left mb-5"
                  >
                    <label className="block text-sm font-medium text-charcoal/70 mb-2">
                      Es tut mir leid, dass es nicht 5 Sterne waren. Dein Feedback hilft mir:
                    </label>
                    <textarea
                      rows={4}
                      value={critique}
                      onChange={(e) => setCritique(e.target.value)}
                      placeholder="Was kann ich verbessern?"
                      className="w-full rounded-xl border border-gold/20 bg-white px-4 py-3 text-charcoal focus:outline-none focus:border-gold resize-none"
                    />
                    <p className="text-xs text-charcoal/40 mt-2">
                      Dein Feedback wird intern bearbeitet und nicht öffentlich geteilt.
                    </p>
                  </motion.div>
                )}

                {rating > 0 && (
                  <>
                    <button
                      onClick={isHigh ? () => setSubmitted(true) : submitLowRating}
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:brightness-90 disabled:opacity-60 text-white font-semibold px-6 py-4 rounded-full transition-all"
                    >
                      {status === "loading" && <Loader2 size={18} className="animate-spin" />}
                      {isHigh ? "Bewertung abgeben" : status === "loading" ? "Wird gesendet…" : "Feedback senden"}
                    </button>
                    <p className="text-xs text-charcoal/45 mt-3 leading-relaxed">
                      Dein Feedback wird über eine verschlüsselte Verbindung übermittelt und intern
                      ausgewertet. Details in der{" "}
                      <Link to="/datenschutz" className="text-gold underline">Datenschutzerklärung</Link>.
                    </p>
                  </>
                )}
              </motion.div>
            )}

            {/* STEP: Result */}
            {submitted && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl border border-gold/20 p-8 sm:p-10 text-center"
              >
                {isHigh ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5"
                    >
                      <Star className="text-gold fill-gold" size={32} />
                    </motion.div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                      Vielen Dank für Deine tolle Bewertung!
                    </h2>
                    <p className="text-charcoal/60 leading-relaxed mb-8 max-w-md mx-auto">
                      Würdest Du mich auch auf Google weiterempfehlen? Das hilft anderen
                      Kundinnen und Kunden, mich zu finden.
                    </p>
                    <a
                      href={BRAND.googleReview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-gold/30"
                    >
                      <Star size={18} /> Auf Google bewerten <ExternalLink size={16} />
                    </a>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="text-green-600" size={32} />
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                      Vielen Dank für Dein Feedback
                    </h2>
                    <p className="text-charcoal/60 leading-relaxed mb-8 max-w-md mx-auto">
                      Ich schätze Deine Ehrlichkeit sehr. Dein Feedback wurde intern
                      erfasst und hilft mir, mich stetig zu verbessern.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
                    >
                      <ArrowLeft size={16} /> Zurück zur Startseite
                    </Link>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <InternalLinks
          eyebrow="Weiterführendes"
          title="Mehr von THE FACE®"
          links={[
            { to: "/bewertungen", label: "Google Bewertungen", description: "4,9 Sterne von echten Kundinnen.", anchor: "Bewertungen ansehen" },
            { to: "/behandlungen", label: "Alle Behandlungen", description: "Von der Hautanalyse bis zum Brautmake-up.", anchor: "Behandlungen entdecken" },
            { to: "/regionen", label: "Regionen in Zürich", description: "Gesichtsbehandlung in Deinem Quartier.", anchor: "Regionen ansehen" },
            { to: "/#kontakt", label: "Kontakt aufnehmen", description: "Persönliche Beratung anfragen.", anchor: "Kontakt aufnehmen" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}