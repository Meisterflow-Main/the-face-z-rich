import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, User, ArrowRight, ArrowLeft, ListChecks } from "lucide-react";
import { Image } from "@/components/ui/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Seo from "@/components/region/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogCta from "@/components/blog/BlogCta";
import { getArticleBySlug, ARTICLES, formatDate } from "@/lib/blog";

export default function BlogArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!article) return;
    const onScroll = () => {
      const headings = document.querySelectorAll("article h2");
      let current = "";
      headings.forEach((h) => {
        if (h.getBoundingClientRect().top < 120) current = h.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [article]);

  const related = useMemo(() => {
    if (!article) return [];
    const rel = ARTICLES.filter((a) => article.related.includes(a.slug));
    return rel.length >= 2 ? rel : ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);
  }, [article, slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="px-5 sm:px-8 pt-20 pb-20 max-w-2xl mx-auto text-center">
          <h1 className="font-heading text-3xl font-semibold text-charcoal mb-3">Artikel nicht gefunden</h1>
          <p className="text-charcoal/60 mb-6">Dieser Beitrag existiert nicht oder wurde verschoben.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold font-semibold">
            <ArrowLeft size={16} /> Zurück zum Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "Organization", name: "THE FACE® Denise Claire Gadient" },
    description: article.metaDescription,
    image: article.hero,
    mainEntityOfPage: `https://theface-zuerich.ch/blog/${article.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={article.metaTitle}
        description={article.metaDescription}
        jsonLd={[articleLd, faqLd]}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: article.category },
        ]}
      />

      <main className="px-5 sm:px-8 pt-10 sm:pt-14 pb-20">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <ScrollReveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-gold transition-colors mb-5"
            >
              <ArrowLeft size={18} /> Zurück zum Blog
            </Link>
            <span className="inline-block bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-charcoal mb-4 leading-tight max-w-3xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1.5">
                <User size={16} className="text-gold" /> {article.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={16} className="text-gold" /> {article.readTime} Min. Lesezeit
              </span>
              <time>{formatDate(article.date)}</time>
            </div>
            <div className="hairline w-16 mb-6" />
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <Image src={article.hero} alt={article.title} fittingType="fill" className="w-full h-full" />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Article body */}
            <article className="min-w-0">
              {/* TOC */}
              <div className="bg-sand border border-gold/15 rounded-2xl p-5 mb-8 lg:hidden">
                <p className="font-heading text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <ListChecks size={16} className="text-gold" /> Inhaltsverzeichnis
                </p>
                <nav className="space-y-1.5">
                  {article.sections.map((s, i) => (
                    <a
                      key={s.heading}
                      href={`#abschnitt-${i}`}
                      className="block text-sm text-charcoal/70 hover:text-gold transition-colors"
                    >
                      {s.heading}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {article.sections.map((s, i) => (
                  <section key={s.heading} id={`abschnitt-${i}`} className="scroll-mt-24">
                    <h2 className="font-heading text-2xl font-semibold text-charcoal mb-3">{s.heading}</h2>
                    <div className="space-y-3">
                      {s.paragraphs.map((p, j) => (
                        <p key={j} className="text-charcoal/75 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* FAQ */}
              <section className="mt-10">
                <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">Häufige Fragen</h2>
                <div className="space-y-3">
                  {article.faqs.map((f) => (
                    <details key={f.q} className="group bg-card border border-gold/15 rounded-xl p-5">
                      <summary className="font-medium text-charcoal cursor-pointer list-none flex items-center justify-between">
                        {f.q}
                        <span className="text-gold transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                      </summary>
                      <p className="text-charcoal/70 text-sm leading-relaxed mt-3">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Internal links */}
              <section className="mt-10 bg-sand border border-gold/15 rounded-2xl p-6">
                <h2 className="font-heading text-lg font-semibold text-charcoal mb-4">Weiterlesen auf der Website</h2>
                <div className="flex flex-wrap gap-2">
                  <IntLink to="/behandlungen">Behandlungen</IntLink>
                  <IntLink to="/regionen">Regionen</IntLink>
                  <IntLink to="/behandlungen/hautanalyse">Hautanalyse</IntLink>
                  <IntLink to="/behandlungen/pro-skin-treatments">Pro Skin Treatments</IntLink>
                  <IntLink to="/#faq">FAQ</IntLink>
                  <IntLink to="/#kontakt">Kontakt</IntLink>
                  <IntLink to="/bewertungen">Bewertungen</IntLink>
                </div>
              </section>

              {/* CTA */}
              <BlogCta />

              {/* Mobile sidebar */}
              <div className="lg:hidden mt-10">
                <BlogSidebar currentSlug={article.slug} />
              </div>

              {/* Related */}
              {related.length > 0 && (
                <section className="mt-12">
                  <h2 className="font-heading text-2xl font-semibold text-charcoal mb-5">Verwandte Artikel</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {related.map((a) => (
                      <BlogCard key={a.slug} article={a} />
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Desktop sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-card border border-gold/15 rounded-2xl p-5 mb-6">
                  <p className="font-heading text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                    <ListChecks size={16} className="text-gold" /> Inhaltsverzeichnis
                  </p>
                  <nav className="space-y-1.5">
                    {article.sections.map((s, i) => (
                      <a
                        key={s.heading}
                        href={`#abschnitt-${i}`}
                        className={`block text-sm transition-colors border-l-2 pl-3 ${
                          activeSection === `abschnitt-${i}`
                            ? "text-gold border-gold font-medium"
                            : "text-charcoal/60 border-transparent hover:text-gold"
                        }`}
                      >
                        {s.heading}
                      </a>
                    ))}
                  </nav>
                </div>
                <BlogSidebar currentSlug={article.slug} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function IntLink({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 text-sm font-medium text-charcoal/70 bg-card border border-gold/20 rounded-full px-3.5 py-1.5 hover:bg-gold hover:text-white hover:border-gold transition-colors"
    >
      {children} <ArrowRight size={18} />
    </Link>
  );
}