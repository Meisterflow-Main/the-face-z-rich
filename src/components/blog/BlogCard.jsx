import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { formatDate } from "@/lib/blog";

export default function BlogCard({ article }) {
  return (
    <article className="group bg-card border border-gold/15 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-gold/30">
      <Link to={`/blog/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.hero}
          alt={article.title}
          fittingType="fill"
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
          {article.category}
        </span>
      </Link>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <time>{formatDate(article.date)}</time>
          <span className="w-1 h-1 rounded-full bg-gold/40" />
          <span className="inline-flex items-center gap-1">
            <Clock size={16} /> {article.readTime} Min.
          </span>
        </div>
        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 leading-snug">
          <Link to={`/blog/${article.slug}`} className="hover:text-gold transition-colors">
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-charcoal/65 leading-relaxed mb-4 flex-1">{article.excerpt}</p>
        <Link
          to={`/blog/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-2.5 transition-all"
        >
          Artikel lesen <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}