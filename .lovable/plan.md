# Reindirizzare `/ciurma` verso Discord

## Obiettivo
Ripristinare il redirect che avevi su capitancloud.it:  
`https://capitancloud.it/ciurma` → `https://discord.gg/VThxtMSgRf`

## Cosa propongo
Creare una server route TanStack Start dedicata a `/ciurma` che risponde con un redirect HTTP vero (302 Found) verso il link Discord. Questo funziona sia su preview che su capitancloud.it pubblicato, ed è meglio di un redirect client-side (più veloce, SEO-friendly e funziona anche se JS è disattivato).

## Passaggi

1. **Creare `src/routes/ciurma.ts`**
   - Usare `createFileRoute("/ciurma")` con `server.handlers.GET`.
   - Restituire `Response.redirect("https://discord.gg/VThxtMSgRf", 302)`.
   - Non serve componente React: la route esiste solo per fare il redirect.

2. **Verificare in locale**
   - Aprire `http://localhost:8080/ciurma` e controllare che il browser arrivi su Discord.
   - Verificare nessun errore di build.

3. **Pubblicare**
   - Dopo il deploy, testare `https://capitancloud.it/ciurma`.

4. **Sitemap (non necessario)**
   - Non aggiungere `/ciurma` al sitemap: è un redirect verso un URL esterno, non una pagina da indicizzare.

## Nota sul codice di stato
- **302 Found** (consigliato): se in futuro vorrai usare `/ciurma` per altro, i motori di ricerca non lo considerano permanente.
- **308 Permanent Redirect**: se vuoi che sia definitivo e passi tutto il "link juice" a Discord.

Di default propongo 302, ma posso mettere 308 se preferisci.
