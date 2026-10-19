import React, { createContext, useContext, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UI_STRINGS } from "./translations";

// Route prefix mapping: German → English
const DE_TO_EN = {
  "/ueber-mich": "/en/about",
  "/behandlungen": "/en/treatments",
  "/regionen": "/en/regions",
  "/bewertung": "/en/review",
  "/bewertungen": "/en/reviews",
  "/impressum": "/en/imprint",
  "/datenschutz": "/en/privacy",
  "/sitemap": "/en/sitemap",
};

const EN_TO_DE = Object.fromEntries(
  Object.entries(DE_TO_EN).map(([de, en]) => [en, de])
);

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = useMemo(
    () => (location.pathname.startsWith("/en") ? "en" : "de"),
    [location.pathname]
  );

  const t = useCallback(
    (key) => {
      const strings = UI_STRINGS[lang] || UI_STRINGS.de;
      return strings[key] ?? UI_STRINGS.de[key] ?? key;
    },
    [lang]
  );

  // Convert a German path to the current language
  const localizePath = useCallback(
    (dePath) => {
      if (lang === "de") return dePath;
      // Match longest prefix first
      const sorted = Object.keys(DE_TO_EN).sort((a, b) => b.length - a.length);
      for (const de of sorted) {
        if (dePath === de || dePath.startsWith(de + "/")) {
          return dePath.replace(de, DE_TO_EN[de]);
        }
      }
      // Default: prepend /en
      return "/en" + (dePath === "/" ? "" : dePath);
    },
    [lang]
  );

  // Navigate to the equivalent page in the other language
  const switchLang = useCallback(() => {
    const current = location.pathname;
    if (lang === "de") {
      // German → English
      const sorted = Object.keys(DE_TO_EN).sort((a, b) => b.length - a.length);
      for (const de of sorted) {
        if (current === de || current.startsWith(de + "/")) {
          navigate(current.replace(de, DE_TO_EN[de]));
          return;
        }
      }
      navigate("/en" + (current === "/" ? "" : current));
    } else {
      // English → German
      const sorted = Object.keys(EN_TO_DE).sort((a, b) => b.length - a.length);
      for (const en of sorted) {
        if (current === en || current.startsWith(en + "/")) {
          navigate(current.replace(en, EN_TO_DE[en]));
          return;
        }
      }
      // Fallback: strip /en prefix
      navigate(current.replace(/^\/en/, "") || "/");
    }
  }, [lang, location.pathname, navigate]);

  const value = useMemo(
    () => ({ lang, t, switchLang, localizePath }),
    [lang, t, switchLang, localizePath]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback for components rendered outside provider (shouldn't happen)
    return {
      lang: "de",
      t: (k) => k,
      switchLang: () => {},
      localizePath: (p) => p,
    };
  }
  return ctx;
}