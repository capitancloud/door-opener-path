# Unica forma di URL per il blog: senza barra finale

## Il problema
Il server (e i link interni) usano già la forma **senza barra finale** (`/blog/docker`), e chi apre `/blog/docker/` viene reindirizzato lì. Però tre punti dichiarano ancora la forma **con la barra**:
- canonical e og:url di ogni articolo e della pagina `/blog/`
- la sitemap (`/blog/` e `/blog/<slug>/`)
- la pagina per gli assistenti AI (llms.txt)

Così Google segue il canonical, trova un redirect e scarta la pagina ("Redirect error" / "Alternate page with proper canonical").

## La soluzione
Adottare ovunque la forma senza barra, che è già quella servita dal server con risposta 200. È la scelta più sicura: non tocca il comportamento del server né i link interni, solo i segnali dichiarati.

1. **Articoli**: canonical, og:url e `mainEntityOfPage` del JSON-LD diventano `https://capitancloud.it/blog/<slug>`.
2. **Pagina blog**: canonical e og:url diventano `https://capitancloud.it/blog`.
3. **Sitemap**: `/blog` e `/blog/<slug>` senza barra.
4. **llms.txt**: link agli articoli senza barra.
5. **Tutte le altre pagine** (privacy, cookie-policy e ogni altra): canonical, og:url e link senza barra finale. Ogni URL assoluto nei dati strutturati (Article, eventuali BreadcrumbList, Organization/WebSite) segue la stessa regola.
6. **Home**: resta `https://capitancloud.it/` (la radice ha sempre la barra, è corretto).
7. **Redirect permanente**: ogni URL "con barra" (tranne la home) risponde con 301 verso la versione senza barra, mantenendo eventuali parametri. Lo imposto direttamente nel sito, così vale a prescindere da come Netlify gestisce le barre, e verifico che non resti alcun 307/302.

## Verifica
- Controllo che ogni pagina dichiari un canonical identico al suo URL che risponde 200 (nessun redirect).
- Controllo che sitemap e llms.txt contengano solo URL che rispondono 200.
- Controllo che `/blog/docker/` faccia redirect permanente a `/blog/docker`.

## Dopo la pubblicazione (da fare tu)
- Pubblicare il sito.
- In Search Console: inviare di nuovo la sitemap e usare "Convalida correzione" sugli errori segnalati. Google impiega da qualche giorno ad alcune settimane per riallineare.

## Dettagli tecnici
File: `src/routes/blog.$slug.tsx`, `src/routes/blog.index.tsx`, `src/routes/sitemap[.]xml.ts`, `src/routes/llms[.]txt.ts`. Verifica via curl sul dev server e build di produzione per confermare stato del redirect (301 vs 307) con il server.
