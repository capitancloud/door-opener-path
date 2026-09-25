import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, ChevronDown, Clock3, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { CookieBanner } from "@/components/CookieBanner";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { BLOG_ARTICLES, getBlogArticle } from "@/lib/blog-data";
import * as voglioCambiare from "@/lib/blog-content/voglio-cambiare-lavoro";
import * as cloudEngineer from "@/lib/blog-content/come-diventare-cloud-engineer";
import * as lavoriSenzaLaurea from "@/lib/blog-content/lavori-ben-pagati-senza-laurea";
import * as certificazioniAws from "@/lib/blog-content/certificazioni-aws";

const CONTENT: Record<string, { toc: { id: string; label: string }[]; ArticleBody: () => React.ReactElement }> = {
  "lavori-ben-pagati-senza-laurea": lavoriSenzaLaurea,
  "voglio-cambiare-lavoro": voglioCambiare,
  "come-diventare-cloud-engineer": cloudEngineer,
  "certificazioni-aws": certificazioniAws,
};

const SITE_URL = "https://capitancloud.it";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getBlogArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    const article = loaderData?.article;
    const url = `${SITE_URL}/blog/${params.slug}/`;
    if (!article) return { meta: [{ title: "Articolo non trovato — Capitan Cloud" }, { name: "robots", content: "noindex,nofollow" }] };
    return {
      meta: [
        { title: article.seoTitle ?? article.title },
        { name: "description", content: article.description },
        { property: "og:title", content: article.seoTitle ?? article.title },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: article.published ? "index,follow" : "noindex,follow" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: article.published ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, author: { "@type": "Person", name: "Eugenio Fontana", url: "https://eugeniofontana.com/" }, publisher: { "@type": "Organization", name: "Capitan Cloud", url: SITE_URL }, mainEntityOfPage: url }) }] : [],
    };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { article } = Route.useLoaderData();
  const currentIndex = BLOG_ARTICLES.findIndex((item) => item.slug === article.slug);
  const previous = currentIndex > 0 ? BLOG_ARTICLES[currentIndex - 1] : undefined;
  const next = currentIndex < BLOG_ARTICLES.length - 1 ? BLOG_ARTICLES[currentIndex + 1] : undefined;
  const content = CONTENT[article.slug];
  const related = article.related.map(getBlogArticle).filter((item): item is NonNullable<typeof item> => Boolean(item));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [article.slug]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-blog-body text-brand-ink">
      <SiteHeader />
      <header className="border-b border-brand-blue/10 bg-secondary px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Percorso di navigazione" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-brand-blue">Home</Link><span>/</span>
            <Link to="/blog" className="hover:text-brand-blue">Blog</Link><span>/</span>
            <span aria-current="page" className="text-brand-ink">Guida {article.number}</span>
          </nav>
          <span className="mt-8 inline-flex rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-extrabold uppercase text-brand-blue">{article.category}</span>
          <h1 className="mt-5 max-w-4xl font-blog-display text-4xl font-extrabold leading-tight sm:text-6xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{article.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-muted-foreground">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">EF</span>
            <span>Eugenio Fontana</span><span aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4" /> {article.readingTime} min di lettura</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:py-20">
        <aside>
          <details className="rounded-2xl border border-border bg-secondary p-5 lg:sticky lg:top-24 lg:open" open>
            <summary className="flex cursor-pointer list-none items-center justify-between font-extrabold text-brand-ink">
              In questa guida <ChevronDown className="h-4 w-4 lg:hidden" />
            </summary>
            <nav className="mt-4 space-y-1 border-l-2 border-brand-blue/20 pl-4 text-sm" aria-label="Indice dell'articolo">
              {content ? content.toc.map((t) => (
                <a key={t.id} href={`#${t.id}`} className="block py-1.5 text-muted-foreground hover:text-brand-blue">{t.label}</a>
              )) : (<>
              <a href="#stato" className="block py-2 font-semibold text-brand-blue">Stato dell'articolo</a>
              <a href="#cosa-troverai" className="block py-2 text-muted-foreground hover:text-brand-blue">Cosa troverai</a>
              </>)}
              <a href="#approfondisci" className="block py-2 text-muted-foreground hover:text-brand-blue">Guide correlate</a>
            </nav>
          </details>
        </aside>

        <article className="min-w-0">
          {content ? <div className="pb-12"><content.ArticleBody /></div> : (<>
          <section id="stato" className="rounded-3xl border border-brand-yellow/40 bg-brand-yellow/10 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink"><BookOpen className="h-5 w-5" /></div>
              <div>
                <p className="text-xs font-extrabold uppercase text-brand-yellow-deep">In preparazione</p>
                <h2 className="mt-1 font-blog-display text-2xl font-extrabold">Questa guida sta arrivando</h2>
                <p className="mt-3 leading-relaxed text-brand-ink/75">Il titolo e l'indirizzo definitivo sono già pronti. Il contenuto completo sarà pubblicato qui dopo la revisione editoriale.</p>
              </div>
            </div>
          </section>

          <section id="cosa-troverai" className="py-12">
            <p className="text-sm font-extrabold uppercase text-brand-blue">Una lettura utile, non un muro di testo</p>
            <h2 className="mt-3 font-blog-display text-3xl font-extrabold">Cosa troverai in questa guida</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {["Una risposta semplice già dall'inizio", "Esempi e passaggi concreti", "Collegamenti alle guide più utili"].map((text, index) => (
                <div key={text} className="rounded-2xl border border-border bg-secondary p-5">
                  <span className="text-2xl font-extrabold text-brand-blue">0{index + 1}</span>
                  <p className="mt-3 font-semibold leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>
          </>)}

          <section id="approfondisci" className="border-t border-border pt-10">
            <h2 className="font-blog-display text-3xl font-extrabold">Continua a esplorare</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} to="/blog/$slug" params={{ slug: item.slug }} className="group rounded-2xl border border-border p-5 transition hover:border-brand-blue/40 hover:bg-secondary">
                  <span className="text-xs font-bold uppercase text-brand-blue">{item.category}</span>
                  <h3 className="mt-2 font-blog-display font-extrabold leading-snug group-hover:text-brand-blue">{item.title}</h3>
                  <ArrowRight className="mt-4 h-5 w-5 text-brand-blue" />
                </Link>
              ))}
            </div>
          </section>

          <nav className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2" aria-label="Articoli precedente e successivo">
            {previous ? <Link to="/blog/$slug" params={{ slug: previous.slug }} className="rounded-2xl bg-secondary p-5"><span className="flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground"><ArrowLeft className="h-4 w-4" /> Precedente</span><strong className="mt-2 block leading-snug">{previous.title}</strong></Link> : <span />}
            {next ? <Link to="/blog/$slug" params={{ slug: next.slug }} className="rounded-2xl bg-secondary p-5 text-right"><span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-muted-foreground">Successivo <ArrowRight className="h-4 w-4" /></span><strong className="mt-2 block leading-snug">{next.title}</strong></Link> : null}
          </nav>

          <section className="mt-12 overflow-hidden rounded-3xl bg-brand-blue-deep p-7 text-primary-foreground sm:p-10">
            <Sparkles className="h-7 w-7 text-brand-yellow" />
            <h2 className="mt-4 font-blog-display text-3xl font-extrabold">Vuoi capire se questo percorso fa per te?</h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">Il quiz gratuito richiede due minuti e ti aiuta a capire se una carriera nel cloud è adatta al tuo punto di partenza.</p>
            <a href="https://quiz.capitancloud.it/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-xl bg-brand-yellow px-6 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
          </section>
        </article>
      </div>
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}