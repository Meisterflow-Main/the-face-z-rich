import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "theface_cookie_consent";

const CATEGORIES = [
  {
    id: "necessary",
    label: "Notwendig",
    desc: "Technisch erforderliche Funktionen und Speicherung Deiner Einwilligung. Ohne diese funktioniert die Website nicht.",
    locked: true,
  },
  { id: "statistics", label: "Statistik", desc: "Anonyme Reichweitenmessung. Derzeit nicht eingesetzt.", locked: false },
  { id: "marketing", label: "Marketing", desc: "Marketing-Cookies Dritter. Derzeit nicht eingesetzt.", locked: false },
];

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [choices, setChoices] = useState({ statistics: false, marketing: false });

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    const handler = () => {
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener("theface:open-cookie-settings", handler);
    return () => window.removeEventListener("theface:open-cookie-settings", handler);
  }, []);

  const persist = (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...value, date: new Date().toISOString() }));
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => persist({ necessary: true, statistics: true, marketing: true });
  const rejectAll = () => persist({ necessary: true, statistics: false, marketing: false });
  const saveSelection = () =>
    persist({ necessary: true, statistics: choices.statistics, marketing: choices.marketing });

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50">
      <div className="glass rounded-2xl border border-gold/30 shadow-xl p-5 relative">
        <button
          onClick={() => setVisible(false)}
          aria-label="Schliessen"
          className="absolute top-3 right-3 text-charcoal/40 hover:text-charcoal transition-colors"
        >
          <X size={18} />
        </button>
        <div className="flex items-start gap-3 mb-4 pr-6">
          <Cookie size={22} className="text-gold shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal/70 leading-relaxed">
            Ich verwende Cookies und lokale Speicherung für den Betrieb der Website. Du kannst
            selbst entscheiden, welche Du zulässt. Weitere Infos in der{" "}
            <Link to="/datenschutz" className="text-gold underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        {showSettings && (
          <div className="space-y-3 mb-4">
            {CATEGORIES.map((c) => (
              <label key={c.id} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={c.locked ? true : choices[c.id]}
                  disabled={c.locked}
                  onChange={(e) => setChoices({ ...choices, [c.id]: e.target.checked })}
                  className="mt-1 accent-[hsl(var(--gold))]"
                />
                <span>
                  <span className="block text-sm font-medium text-charcoal">
                    {c.label}
                    {c.locked ? " (immer aktiv)" : ""}
                  </span>
                  <span className="block text-xs text-charcoal/55 leading-relaxed">{c.desc}</span>
                </span>
              </label>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2">
          {showSettings ? (
            <button
              onClick={saveSelection}
              className="w-full bg-gold hover:brightness-90 text-white text-sm font-semibold py-3.5 rounded-lg transition-colors"
            >
              Auswahl bestätigen
            </button>
          ) : (
            <>
              <button
                onClick={acceptAll}
                className="w-full bg-gold hover:brightness-90 text-white text-sm font-semibold py-3.5 rounded-lg transition-colors"
              >
                Alle akzeptieren
              </button>
              <div className="flex gap-2">
                <button
                  onClick={rejectAll}
                  className="flex-1 glass border border-gold/30 text-charcoal text-sm font-semibold py-3 rounded-lg transition-colors hover:border-gold"
                >
                  Ablehnen
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 glass border border-gold/30 text-charcoal text-sm font-semibold py-3 rounded-lg transition-colors hover:border-gold"
                >
                  Einstellungen
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}