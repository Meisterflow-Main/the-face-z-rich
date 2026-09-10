import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("theface_cookie_consent");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("theface_cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50">
      <div className="glass rounded-2xl border border-gold/30 shadow-xl p-5">
        <div className="flex items-start gap-3 mb-4">
          <Cookie size={22} className="text-gold shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal/70 leading-relaxed">
            Wir verwenden Cookies, um Dir die bestmögliche Erfahrung zu bieten. Mit der
            Nutzung stimmst Du unserer{" "}
            <Link to="/datenschutz" className="text-gold underline">Datenschutzerklärung</Link> zu.
          </p>
        </div>
        <button
          onClick={accept}
          className="w-full bg-gold hover:bg-[#0EA5E9] text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}