import { useEffect } from "react";

const SITE = "https://theface-zuerich.ch";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function canonicalUrl() {
  const p = window.location.pathname;
  return SITE + (p === "/" ? "/" : p.replace(/\/$/, ""));
}

export default function Seo({ title, description, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta("name", "description", description);

    const url = canonicalUrl();
    setLink("canonical", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");

    const prev = document.getElementById("seo-jsonld");
    if (prev) prev.remove();
    if (jsonLd) {
      const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "seo-jsonld";
      s.text = JSON.stringify(arr);
      document.head.appendChild(s);
    }
  }, [title, description, jsonLd]);

  return null;
}