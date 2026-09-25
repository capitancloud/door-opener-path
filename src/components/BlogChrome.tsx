import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import type { BlogArticle } from "@/lib/blog-data";

export function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <article className="group flex min-h-[22rem] flex-col rounded-3xl border border-border bg-card p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl">
      <div className="relative mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue-deep via-brand-blue to-brand-blue-light">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,var(--brand-yellow)_1px,transparent_1px)] [background-size:22px_22px]" />
        <BookOpen className="relative h-14 w-14 text-primary-foreground/90" strokeWidth={1.5} />
        <span className="absolute left-4 top-4 rounded-full border border-primary-foreground/30 bg-background/90 px-3 py-1 text-[0.65rem] font-extrabold uppercase text-brand-ink backdrop-blur">
          {article.category}
        </span>
        <span className="absolute bottom-4 right-4 rounded-full bg-brand-yellow px-3 py-1 text-xs font-extrabold text-brand-ink">
          In preparazione
        </span>
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
          <span>Guida #{String(article.number).padStart(2, "0")}</span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> {article.readingTime} min</span>
        </div>
        <h2 className="mb-4 text-xl font-extrabold leading-tight text-brand-ink transition-colors group-hover:text-brand-blue">
          {article.title}
        </h2>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{article.description}</p>
        <Link
          to="/blog/$slug"
          params={{ slug: article.slug }}
          className="flex items-center justify-between border-t border-border pt-5 text-sm font-bold text-brand-blue"
          aria-label={`Apri ${article.title}`}
        >
          Anteprima articolo
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-brand-blue group-hover:text-primary-foreground">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </div>
    </article>
  );
}