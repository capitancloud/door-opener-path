import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/BlogChrome";
import { CookieBanner } from "@/components/CookieBanner";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { Button } from "@/components/ui/button";
import { BLOG_ARTICLES, BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog Cloud, AWS e Carriera — Capitan Cloud" },
      { name: "description", content: "Guide semplici su cloud, AWS, certificazioni e cambio lavoro per costruire una nuova carriera nel settore tecnologico." },
      { property: "og:title", content: "Blog Cloud, AWS e Carriera — Capitan Cloud" },
      { property: "og:description", content: "Guide pratiche per capire il cloud, preparare le certificazioni AWS e cambiare lavoro." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://capitancloud.it/blog/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://capitancloud.it/blog/" }],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof BLOG_CATEGORIES)[number]>("Tutti");

  const articles = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("it");
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory = category === "Tutti" || article.category === category;
      const matchesQuery = !normalizedQuery || `${article.title} ${article.description}`.toLocaleLowerCase("it").includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-secondary font-blog-body text-brand-ink">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-brand-blue/10 bg-background px-4 py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brand-blue-deep via-brand-blue to-brand-yellow" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-4 py-2 text-xs font-extrabold uppercase text-brand-blue">
              <Sparkles className="h-4 w-4" /> Guide per il tuo futuro nel cloud
            </span>
            <h1 className="mt-6 font-blog-display text-4xl font-extrabold leading-tight text-brand-ink sm:text-6xl">
              Capire il cloud. <span className="text-brand-blue">Cambiare lavoro.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Guide chiare e concrete su AWS, certificazioni e professioni cloud. Scritte per chi parte da zero e vuole sapere cosa fare, in quale ordine.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(18rem,1fr)_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Cerca nel blog</span>
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cerca una guida, una certificazione o uno strumento…"
                className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-base outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
              />
            </label>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-wrap lg:justify-end lg:overflow-visible lg:pb-0" aria-label="Filtra gli articoli per argomento">
              {BLOG_CATEGORIES.map((item) => (
                <Button
                  key={item}
                  type="button"
                  variant={category === item ? "default" : "outline"}
                  onClick={() => setCategory(item as BlogCategory | "Tutti")}
                  className={cn("h-11 shrink-0 rounded-xl px-4", category === item && "bg-brand-blue text-primary-foreground hover:bg-brand-blue/90")}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase text-brand-blue">Biblioteca Capitan Cloud</p>
              <h2 className="mt-2 font-blog-display text-3xl font-extrabold sm:text-4xl">30 guide, un percorso chiaro</h2>
            </div>
            <p className="text-sm text-muted-foreground">{articles.length} {articles.length === 1 ? "risultato" : "risultati"}</p>
          </div>
          {articles.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-background px-6 py-16 text-center">
              <h2 className="text-2xl font-extrabold">Nessuna guida trovata</h2>
              <p className="mt-2 text-muted-foreground">Prova un'altra parola o scegli un argomento diverso.</p>
              <Button className="mt-6" onClick={() => { setQuery(""); setCategory("Tutti"); }}>Mostra tutte le guide</Button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-brand-blue-deep px-4 py-14 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-blog-display text-3xl font-extrabold">Vuoi capire se il cloud può essere la tua strada?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">Rispondi a 9 domande e ricevi subito un primo orientamento, senza registrazione.</p>
          <a href="https://quiz.capitancloud.it/" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-yellow px-6 py-3 font-extrabold text-brand-ink transition hover:brightness-105">
            Fai il quiz gratuito
          </a>
        </div>
      </section>
      <SiteFooter />
      <CookieBanner />
    </main>
  );
}