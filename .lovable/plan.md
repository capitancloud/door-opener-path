
# Sostituire "chiamata gratuita" con contatto WhatsApp diretto

## Obiettivo
Rimuovere il link "Prenota una chiamata gratuita di 15 minuti" (attualmente punta al placeholder `#book-call`) e sostituirlo con un pulsante/link WhatsApp che apre la chat verso **+39 351 473 4862** con un messaggio pre-compilato.

## Come funziona il link WhatsApp
Formato ufficiale: `https://wa.me/393514734862?text=<messaggio-url-encoded>`
- Numero senza `+`, senza spazi, senza trattini.
- `text` viene pre-compilato nel campo messaggio; l'utente può modificarlo prima di premere Invia (WhatsApp non consente invio automatico).
- Funziona su mobile (apre l'app) e desktop (WhatsApp Web/Desktop).

Messaggio pre-compilato proposto (modificabile):
> "Ciao Eugenio, ho visto la pagina del corso *Diventa Cloud Engineer in 90 Giorni* e vorrei qualche chiarimento prima di iscrivermi."

## Modifiche al codice

**File**: `src/routes/index.tsx`

1. In alto (vicino a `CHECKOUT_URL` / `PRICE`) aggiungere costanti riutilizzabili:
   ```ts
   const WHATSAPP_NUMBER = "393514734862";
   const WHATSAPP_MESSAGE = "Ciao Eugenio, ho visto la pagina del corso \"Diventa Cloud Engineer in 90 Giorni\" e vorrei qualche chiarimento prima di iscrivermi.";
   const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
   ```

2. Nel blocco pricing (righe ~1394-1407) sostituire il paragrafo "Hai dubbi se fa per te? … Prenota una chiamata gratuita …" con un blocco WhatsApp:
   - testo introduttivo breve: "Hai dubbi? Scrivimi direttamente su WhatsApp."
   - pulsante secondario a piena larghezza in **verde WhatsApp** (`#25D366`) con icona WhatsApp (SVG inline, non serve nuova dipendenza) + label "Scrivimi su WhatsApp";
   - `href={WHATSAPP_URL}` + `target="_blank"` + `rel="noopener noreferrer"`;
   - sotto, la riga già esistente resta con testo aggiornato: "Ti risponde **personalmente Eugenio** — niente venditori, niente call center. Di solito rispondo entro poche ore.";
   - rimozione del placeholder `#book-call`.

3. Nessuna modifica al resto della pagina, alla sezione bonus (riga 1179 menziona una "chiamata personale con Eugenio" come parte del percorso: quella resta invariata, è un bonus del corso, non il CTA di contatto pre-acquisto).

## Cosa non faccio
- Non aggiungo widget WhatsApp fluttuante globale (non richiesto).
- Non installo librerie: uso un `<svg>` inline per l'icona WhatsApp per non dipendere da `lucide-react` (che non ha l'icona WhatsApp ufficiale).
- Numero e messaggio finiscono in costanti in cima al file così puoi modificarli in un solo punto in futuro.

Confermi e procedo?
