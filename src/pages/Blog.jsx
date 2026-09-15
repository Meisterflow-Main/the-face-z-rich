import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/blog/BlogCard";
import InternalLinks from "@/components/InternalLinks";
import { ARTICLES, CATEGORIES, BLOG_INTRO, formatDate } from "@/lib/blog";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "THE FACE® Zürich Blog",
  url: "https://theface-zuerich.ch/blog",
  inLanguage: "de-CH",
  isPartOf: { "@id": "https://theface-zuerich.ch/#website" },
  publisher: { "@id": "https://theface-zuerich.ch/#organization" },
  blogPost: ARTICLES.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    datePublished: a.date,
    author: { "@type": "Person", name: a.author },
    url: `https://theface-zuerich.ch/blog/${a.slug}`,
    mainEntityOfPage: `https://theface-zuerich.ch/blog/${a.slug}`,
  })),
};

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(params.get("kategorie") || "Alle");
  const [sort, setSort] = useState("neueste");

  useEffect(() => {
    setCategory(params.get("kategorie") || "Alle");
  }, [params]);

  const filtered = useMemo(() => {
    let list = ARTICLES.filter(
      (a) =>
        (category === "Alle" || a.category === category) &&
        (query.trim() === "" ||
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()))
    );
    list = [...list].sort((a, b) =>
      sort === "neueste" ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
    );
    return list;
  }, [query, category, sort]);

  const setCat = (c) => {
    setCategory(c);
    if (c === "Alle") {
      params.delete("kategorie");
      setParams(params);
    } else {
      params.set("kategorie", c);
      setParams(params);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Blog | THE FACE® Zürich – Hautpflege Ratgeber & Tipps"
        description="Ratgeber, Tipps und Anleitungen rund um Gesichtspflege, Anti-Aging und Clean Beauty in Zürich – von Denise Claire Gadient, THE FACE®."
        jsonLd={jsonLd}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />

      <main className="px-5 sm:px-8 pt-10 sm:pt-14 pb-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-gold font-semibold tracking-[0.2em] text-xs uppercase mb-4">Wissensplattform</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-charcoal mb-4 leading-tight">Blog</h1>
            <div className="hairline w-16 mb-6" />
            <p className="text-charcoal/65 leading-relaxed max-w-3xl">{BLOG_INTRO}</p>
          </ScrollReveal>

          {/* Search + Filters */}
          <ScrollReveal className="mt-10">
            <div className="bg-card border border-gold/15 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Artikel durchsuchen – Titel oder Stichwort…"
                  className="w-full pl-11 pr-10 py-3 rounded-lg border border-gold/20 bg-background text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-charcoal"
                    aria-label="Suche löschen"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex flex-wrap gap-2 flex-1">
                  <CatPill active={category === "Alle"} onClick={() => setCat("Alle")}>
                    Alle
                  </CatPill>
                  {CATEGORIES.map((c) => (
                    <CatPill key={c} active={category === c} onClick={() => setCat(c)}>
                      {c}
                    </CatPill>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-xs text-muted-foreground whitespace-nowrap">Sortieren:</label>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="text-sm border border-gold/20 rounded-lg px-3 py-2 bg-background text-charcoal focus:outline-none focus:border-gold"
                  >
                    <option value="neueste">Neueste</option>
                    <option value="aelteste">Älteste</option>
                  </select>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mt-6 mb-4">
            {filtered.length} {filtered.length === 1 ? "Artikel" : "Artikel"} gefunden
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a) => (
                <BlogCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-charcoal/50">
              <p className="text-lg font-medium mb-1">Keine Artikel gefunden</p>
              <p className="text-sm">Versuche eine andere Suche oder Kategorie.</p>
            </div>
          )}
        </div>
        <InternalLinks
          eyebrow="Weiterführendes"
          title="Mehr von THE FACE®"
          links={[
            { to: "/behandlungen", label: "Alle Behandlungen", description: "Hautanalyse, Pro Skin, Targeted und Medical Skin.", anchor: "Behandlungen entdecken" },
            { to: "/regionen", label: "Regionen in Zürich", description: "Gesichtsbehandlung in Deinem Quartier.", anchor: "Regionen ansehen" },
            { to: "/bewertungen", label: "Google Bewertungen", description: "4,9 Sterne von echten Kundinnen.", anchor: "Bewertungen ansehen" },
            { to: "/#kontakt", label: "Kontakt aufnehmen", description: "Persönliche Beratung anfragen.", anchor: "Kontakt aufnehmen" },
          ]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function CatPill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
        active
          ? "bg-gold text-white border-gold"
          : "bg-background text-charcoal/70 border-gold/20 hover:border-gold hover:text-gold"
      }`}
    >
      {children}
    </button>
  );
}