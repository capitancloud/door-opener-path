
# VSL "Diventa Cloud Engineer in 90 Giorni"

Landing page unica in italiano, stile Capitan Cloud (screenshot allegato), con contenuti veri estratti dal PDF ufficiale. Nessun contenuto inventato dove il PDF è chiaro; i pochi dettagli non presenti (storia personale, testimonianze nominative, valori € dei bonus, scadenza scarsità) restano come **placeholder evidenti `✎ [...]`** così puoi rifinirli tu senza cercarli.

## Struttura della pagina (single route `/`)

Segue letteralmente la sales letter, mappata sulle sezioni del PDF:

1. **Top banner Discord** — replica dello screenshot: viola/indigo con emoji + "Unisciti GRATIS al canale Discord di Capitan Cloud · 1500+ membri · ENTRA ORA →" (link `#`, placeholder).
2. **Navbar** — logo "Capitan Cloud" a sinistra, link `Home` / `Simulatori` / CTA pillola gradient "Diventa un Super Prof…" (a `#checkout`).
3. **Hero video (VSL placeholder)** — box 16:9 con gradient blu del brand, icona play grande e microcopy "Il tuo video qui" + attributi `data-vsl-embed` così poi basta sostituire con `<iframe>` YouTube/Vimeo. Sotto: headline gialla "Supera la tua certificazione Cloud al primo colpo" + sottotitolo esattamente come screenshot ("Il metodo esclusivo creato da **Eugenio Fontana (Capitan Cloud)**, formatore con oltre 100.000 studenti…"). CTA arancio-rosa "VOGLIO INIZIARE — 297€".
4. **Sezione 1 · Attenzione** — pre-headline, headline ("C'è un lavoro che paga bene…"), sotto-headline (dalla sales letter).
5. **Sezione 2 · Interesse — apertura emotiva** ("È domenica sera…").
6. **Sezione 3 · La tua storia** — blocco card con `✎` placeholder chiaro ("Sostituisci con la tua storia personale"), mantiene lo scheletro suggerito.
7. **Sezione 4 · Le 3 vie che non funzionano + la quarta** — 4 card (cambiare azienda / studiare / mettersi in proprio / la quarta via evidenziata in giallo).
8. **Sezione 5 · Le 3 obiezioni** — "Io e il computer" / "Sono troppo grande" / "Senza laurea" — 3 card con icona.
9. **Sezione 6 · Prova sociale** — banner "Oltre 100.000 persone formate" (dato reale dal PDF) + 3 slot testimonianza con `✎` placeholder.
10. **Sezione 7 · Desiderio — rivelazione "Cloud Engineer"** — grande reveal tipografico giallo, 3 punti chiave ("lavoro del futuro / non è programmazione / si impara da adulti").
11. **Sezione 8 · Il percorso "Diventa Cloud Engineer in 90 Giorni"** — dati veri dal PDF:
    - **Tabella 4 fasi** (Fondamenta 1-10 · CLF-C02 11-30 · SAA-C03 31-85 · Verso il lavoro 86-90).
    - **Griglia "Cosa imparerai"** (Git · Docker · Terraform · CI/CD · Kubernetes · Monitoring · DevSecOps · Cloud Security · Reliability · FinOps) — 10 card icona.
    - **Metodo Protocollo Subito Assunto!™** — 3 step (Competenze / Certificazioni AWS / CV+Colloquio).
    - **Certificazioni AWS** (CLF-C02 + SAA-C03) — 2 badge, con disclaimer sul costo esami non incluso (voucher 10%).
12. **Sezione 9 · Bonus & Protocollo Subito Assunto!** — bullet dal PDF: Portfolio Blindato · Colloquio Simulator · AI Agent CV Check · Database aziende italiane · LinkedIn perfetto · Top 50 domande · Sessione 1-to-1 · Certificato + community + voucher 10%. Valori € restano `✎ [X€]`.
13. **Sezione 10 · Prezzo + garanzia + CTA principale** — card centrale grande: "297€ una tantum" + rate `✎ [placeholder]` + garanzia (3 opzioni A/B/C come commento HTML, versione B "condizionata" mostrata come default modificabile) + bottone CTA arancio-rosa `href="#checkout"` (placeholder link esterno Stripe).
14. **Sezione 11 · "Cosa farà per te"** — copy visione ("Immagina la prossima domenica sera…") su sfondo gradient blu.
15. **FAQ** — accordion con le 6 domande esatte dal PDF (programmare / laurea / tempo / Windows-Mac / esami inclusi / garanzia lavoro) + 4 domande della sales letter (tempo / se non capisco / funziona davvero / perché pagare).
16. **P.S. + P.P.S.** — testo letterale della sales letter.
17. **Footer** — © Capitan Cloud · link privacy/termini placeholder · social placeholder.

## Design (fedele allo screenshot allegato)

Design tokens in `src/styles.css` (oklch), niente colori hardcoded:

- `--brand-indigo` per il banner Discord (viola/indigo scuro dello screenshot).
- `--brand-blue` primary + `--brand-blue-light` per il gradient hero (radiale azzurro→blu).
- `--brand-yellow` (`#e8b119` circa) per gli headline di accento ("Cloud al primo colpo", reveal "Cloud Engineer").
- `--brand-orange` → `--brand-pink` per il CTA principale (gradient del pulsante "CLICCA E SCOPRI" nello screenshot).
- Testo bianco su blu, testo scuro su bianco nelle sezioni body.
- **Font**: heading `Plus Jakarta Sans` (700/800, molto bold come screenshot), body `Inter` — caricati via `<link>` in `__root.tsx`.
- Bolle luminose decorative sull'hero (cerchi bianco/20% opacity) come nello screenshot.
- Pulsanti pill grandi con ombra colorata, icona sparkle a sinistra.
- Animazioni discrete con `framer-motion` (fade-up su scroll) — già disponibile.

## File da toccare

- `src/routes/__root.tsx` — head SEO (title "Diventa Cloud Engineer in 90 Giorni — Capitan Cloud", meta description, og/twitter) + link font Google.
- `src/routes/index.tsx` — rimpiazza il placeholder con la landing (composta da sezioni locali nello stesso file o splittata in `src/components/vsl/*` per leggibilità: `TopBar`, `Nav`, `Hero`, `Story`, `Comparison`, `Objections`, `SocialProof`, `Reveal`, `Curriculum`, `Bonuses`, `PricingCTA`, `Vision`, `FAQ`, `Footer`).
- `src/styles.css` — aggiunge i token brand (indigo/blue/yellow/orange/pink) e gradients riutilizzabili (`--gradient-hero`, `--gradient-cta`).
- Nessun backend: tutti i CTA puntano a `#checkout` (placeholder da sostituire con URL Stripe reale).

## Cosa NON faccio (per rispetto del brief)

- Nessun video reale embeddato — solo placeholder pronto per YouTube/Vimeo.
- Nessuna raccolta email / Lovable Cloud.
- Non invento testimonianze, scadenze, valori € dei bonus, storia personale: restano `✎` visibili.
- Non tocco loghi/mascotte (userò un logo testuale "Capitan Cloud"; se mi mandi il PNG del capitano lo integro dopo).

Confermi e procedo?
