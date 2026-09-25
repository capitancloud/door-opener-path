# Blog SEO di Capitan Cloud

## Obiettivo
Creare una sezione blog pensata per posizionare il percorso su Google e risultare chiara anche ai sistemi AI, usando i 30 titoli e URL forniti come struttura editoriale iniziale. I testi degli articoli verranno inseriti progressivamente quando saranno consegnati.

## Cosa verrà realizzato

### 1. Pagina principale `/blog`
- Aggiungere “Blog” al menu principale, anche nella versione mobile.
- Creare una pagina indice con tutti i 30 articoli, organizzati per argomento: cambio lavoro, carriera cloud, certificazioni AWS e guide tecniche.
- Applicare la direzione scelta “Cloud modern index”: palette Capitan Cloud, titoli Outfit, testo Figtree, schede ariose e leggibili.
- Inserire ricerca e filtri semplici per aiutare il lettore a trovare rapidamente una guida.
- Mostrare chiaramente quali articoli sono già pubblicati e quali sono in preparazione.

### 2. Modello grafico degli articoli
- Creare un modello riutilizzabile con titolo, introduzione, autore Eugenio Fontana, data, tempo di lettura e percorso di navigazione.
- Usare una colonna di lettura comoda e un indice laterale fisso su desktop; su mobile l’indice diventerà apribile e non occuperà spazio durante la lettura.
- Spezzare i testi con sottotitoli, elenchi, box “In breve”, definizioni, esempi, confronti e richiami visivi, evitando muri di testo.
- Inserire una conclusione con prossimo passo, quiz gratuito e collegamento al percorso Capitan Cloud, senza rendere l’articolo eccessivamente promozionale.
- Garantire leggibilità, contrasto, navigazione da tastiera e una resa curata su smartphone.

### 3. Collegamenti tra i 30 articoli
- Salvare titoli, URL, categorie e relazioni in un unico catalogo editoriale, così ogni indirizzo resta stabile.
- In ogni articolo mostrare collegamenti contestuali nel testo e una sezione finale “Continua a leggere”.
- Collegare gli articoli secondo gruppi tematici, non in modo casuale, così i link sono utili sia alle persone sia ai motori di ricerca.
- Predisporre precedente/successivo per permettere di attraversare l’intera raccolta.
- Le pagine senza testo saranno disponibili all’indirizzo definitivo come anteprima “in preparazione”, ma avranno `noindex` e non entreranno nella sitemap finché non ricevono il contenuto completo: questo evita pagine vuote dannose per la SEO.

### 4. SEO e leggibilità per sistemi AI
- Aggiungere a ogni articolo titolo SEO, descrizione, URL canonico, dati social e metadati unici.
- Inserire dati strutturati `Article`, autore, breadcrumb e data di aggiornamento.
- Usare HTML semantico, gerarchia corretta dei titoli, sommario con ancore e risposte dirette nelle prime righe delle sezioni.
- Aggiornare sitemap e regole crawler per `capitancloud.it`; includere soltanto gli articoli pubblicati.
- Aggiornare il riepilogo per sistemi AI con il blog e i contenuti realmente disponibili.

## Prima consegna
- Struttura completa del blog con tutti i 30 titoli e URL già registrati.
- Pagina `/blog` funzionante e collegata al menu.
- Modello articolo completo e pronto a ricevere i testi.
- Pagine “in preparazione” sicure per la SEO.
- Collegamenti interni predisposti automaticamente dal catalogo.

## Inserimento dei testi successivi
Per ogni testo ricevuto verranno aggiunti: sommario, suddivisione grafica, link contestuali agli altri articoli, metadati specifici e dati strutturati. L’articolo passerà da “in preparazione” a pubblicato e verrà incluso nella sitemap.

## Dettagli tecnici
- Nuove pagine: `/blog` e `/blog/{slug}` usando esattamente i 30 URL forniti.
- Catalogo centralizzato degli articoli per evitare link incoerenti durante le pubblicazioni progressive.
- Componenti condivisi per indice, box informativi, autore, articoli correlati e inviti finali.
- Verifica finale desktop e mobile, controllo dei link, assenza di scorrimento orizzontale e controllo dei metadati.
