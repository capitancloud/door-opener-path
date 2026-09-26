import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "@/lib/blog-data";

const B = "https://capitancloud.it";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const pub = BLOG_ARTICLES.filter((a) => a.published);
        const sections = BLOG_CATEGORIES.filter((c) => c !== "Tutti").map((cat) => {
          const items = pub.filter((a) => a.category === cat);
          if (!items.length) return "";
          return `## Blog: ${cat}\n\n${items.map((a) => `- [${a.title}](${B}/blog/${a.slug}/): ${a.description}`).join("\n")}\n`;
        }).filter(Boolean).join("\n");
        const text = `# Capitan Cloud

> Diventa Cloud Engineer in 90 giorni con il metodo di Eugenio Fontana (Capitan Cloud): percorso centrale, 2 percorsi per le certificazioni AWS (Cloud Practitioner e Solutions Architect Associate), Protocollo Subito Assunto!™ e 8 percorsi integrativi.

Capitan Cloud è un percorso formativo online in italiano (297 € una tantum, oppure 3 rate da 99 €/mese) per chi vuole diventare Cloud Engineer anche senza laurea o esperienza tecnica. Gli esami di certificazione AWS si sostengono in lingua inglese. Garanzia di rimborso a condizioni precise, descritte nelle FAQ della home.

## Pagine principali

- [Home](${B}/): presentazione del percorso, programma, prezzo, garanzia, FAQ e video di introduzione.
- [Blog](${B}/blog/): ${pub.length} guide su cloud computing, AWS, certificazioni, carriera e cambio lavoro.
- [Quiz gratuito](https://quiz.capitancloud.it/): 9 domande in 2 minuti per capire se il cloud fa per te.
- [Chi è Eugenio Fontana](https://eugeniofontana.com/): autore e formatore, oltre 100.000 studenti.

${sections}
## Altro

- [Privacy Policy](${B}/privacy)
- [Cookie Policy](${B}/cookie-policy)
`;
        return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
