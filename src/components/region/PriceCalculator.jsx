import React, { useState, useMemo } from "react";
import { Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { BRAND } from "@/lib/brand";
import { HAUTTYPEN, PRICE_TREATMENTS, PRICE_ADDONS } from "@/lib/regions";

export default function PriceCalculator({ region }) {
  const [hauttyp, setHauttyp] = useState(HAUTTYPEN[0]);
  const [treatmentId, setTreatmentId] = useState(PRICE_TREATMENTS[1].id);
  const [addons, setAddons] = useState([]);

  const treatment = useMemo(
    () => PRICE_TREATMENTS.find((t) => t.id === treatmentId) || PRICE_TREATMENTS[0],
    [treatmentId]
  );

  const total = useMemo(
    () => treatment.price + addons.reduce((sum, id) => {
      const a = PRICE_ADDONS.find((x) => x.id === id);
      return sum + (a ? a.price : 0);
    }, 0),
    [treatment, addons]
  );

  const toggleAddon = (id) =>
    setAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section id="preisrechner" className="bg-sand py-16 px-5 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-3">Preisrechner</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
            Preis für Deine Gesichtsbehandlung
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">{region.priceIntro}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-card border border-gold/15 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">1. Hauttyp wählen</label>
              <select
                value={hauttyp}
                onChange={(e) => setHauttyp(e.target.value)}
                className="w-full rounded-xl border border-gold/30 bg-background px-4 py-3 text-charcoal focus:border-gold focus:outline-none"
              >
                {HAUTTYPEN.map((h) => <option key={h} value={h}>{h}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">2. Gesichtsbehandlung wählen</label>
              <select
                value={treatmentId}
                onChange={(e) => setTreatmentId(e.target.value)}
                className="w-full rounded-xl border border-gold/30 bg-background px-4 py-3 text-charcoal focus:border-gold focus:outline-none"
              >
                {PRICE_TREATMENTS.map((t) => (
                  <option key={t.id} value={t.id}>{t.label} – {t.price} CHF</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">3. Zusatzoptionen</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRICE_ADDONS.map((a) => {
                  const active = addons.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => toggleAddon(a.id)}
                      className={`text-left text-sm px-3 py-2.5 rounded-xl border transition-colors ${
                        active
                          ? "border-gold bg-gold/10 text-charcoal"
                          : "border-gold/25 bg-background text-charcoal/70 hover:border-gold/50"
                      }`}
                    >
                      <span className="block">{a.label}</span>
                      <span className="text-xs text-charcoal/50">+{a.price} CHF</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-gold/15">
              <div>
                <p className="text-xs uppercase tracking-wide text-charcoal/50">Preisvorschau (Richtpreis)</p>
                <p className="font-heading text-3xl font-semibold text-charcoal">
                  {total} <span className="text-charcoal/40 text-base font-body font-normal">CHF</span>
                </p>
              </div>
              <a
                href={BRAND.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:brightness-90 text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/30"
              >
                <Calendar size={18} /> Jetzt Termin buchen
              </a>
            </div>
            <p className="text-charcoal/50 text-xs text-center">
              Der angezeigte Betrag ist eine Orientierungshilfe. Der verbindliche Preis wird in der persönlichen Hautanalyse festgelegt.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}