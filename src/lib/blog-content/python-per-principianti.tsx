import { Check, HelpCircle, Lightbulb, Sparkles, Terminal, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "perche", label: "Perché imparare Python" },
  { id: "cosa-fare", label: "Cosa puoi fare con Python" },
  { id: "cosa-serve", label: "Cosa serve per iniziare" },
  { id: "primo-programma", label: "Il tuo primo programma" },
  { id: "basi", label: "Le basi in 6 concetti" },
  { id: "mini-progetto", label: "Un mini progetto" },
  { id: "piano", label: "Piano in 4 settimane" },
  { id: "esercitarsi", label: "Dove esercitarsi gratis" },
  { id: "errori", label: "Errori da principiante" },
  { id: "ai", label: "Python e l'AI" },
  { id: "cloud", label: "Python nel cloud" },
  { id: "faq", label: "Domande frequenti" },
  { id: "sintesi", label: "In sintesi" },
];

const A = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <Link to="/blog/$slug" params={{ slug }} className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:decoration-brand-blue">{children}</Link>
);
const H2 = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="scroll-mt-24 pt-14 font-blog-display text-3xl font-extrabold leading-tight sm:text-4xl">{children}</h2>
);
const H3 = ({ n, children }: { n: number; children: ReactNode }) => (
  <h3 className="mt-10 flex items-center gap-3 font-blog-display text-2xl font-extrabold"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-lg text-primary-foreground">{n}</span>{children}</h3>
);
const P = ({ children }: { children: ReactNode }) => <p className="mt-5 text-lg leading-relaxed text-brand-ink/85">{children}</p>;
const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-4 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-3 text-lg leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><span>{t}</span></li>)}</ul>
);
const Code = ({ title = "Python", children }: { title?: string; children: string }) => (
  <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-brand-ink">
    <div className="flex items-center gap-2 border-b border-primary-foreground/10 px-4 py-2 text-xs font-bold text-primary-foreground/70"><Terminal className="h-4 w-4" />{title}</div>
    <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-primary-foreground"><code>{children}</code></pre>
  </div>
);
const C = ({ children }: { children: ReactNode }) => <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-brand-blue">{children}</code>;

const errori: [string, string][] = [
  ["Ignorare l'indentazione", "In Python gli spazi hanno un significato. Usa sempre 4 spazi e lascia che l'editor ti aiuti."],
  ["Copiare codice senza capirlo", "Funziona finché non devi modificarlo. Riscrivi gli esempi a mano e cambia qualcosa per vedere cosa succede."],
  ["Aver paura degli errori", "I messaggi di errore di Python sono utili: dicono cosa è successo e in quale riga. Leggili con attenzione prima di cercare la soluzione altrove."],
  ["Passare da un tutorial all'altro", "Dopo le basi, smetti di guardare corsi e costruisci qualcosa. È lì che impari davvero."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Quanto tempo serve per imparare Python?", a: <>Le basi si imparano in circa un mese, con un'ora al giorno. Per usarlo con sicurezza in un contesto professionale servono alcuni mesi di pratica su progetti reali.</> },
  { q: "Serve essere bravi in matematica?", a: <>No. Per automazione, siti web e cloud basta la logica di tutti i giorni. La matematica diventa importante solo in ambiti specifici, come l'analisi dei dati avanzata o il machine learning.</> },
  { q: "Python 2 o Python 3?", a: <>Python 3. Python 2 non è più supportato da anni: tutti i corsi e i progetti moderni usano Python 3.</> },
  { q: "Python è gratis?", a: <>Sì, Python è gratuito e open source, come la maggior parte degli strumenti che userai per programmare.</> },
  { q: "Meglio iniziare con Python o con JavaScript?", a: <>Se vuoi fare siti web, JavaScript è indispensabile. Se vuoi lavorare con automazione, dati, intelligenza artificiale o cloud, Python è la scelta migliore per iniziare.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Python è il linguaggio più consigliato a chi parte da zero: semplice da leggere, gratuito e usato ovunque, dall'automazione all'intelligenza artificiale fino al cloud.</p>
      </div>
      <P>Python è il linguaggio di programmazione più consigliato a chi parte da zero: ha una sintassi semplice e leggibile, è gratuito ed è usato ovunque, dall'automazione all'intelligenza artificiale, fino al cloud. Se non hai mai scritto una riga di codice, è il punto di partenza più sensato.</P>
      <P>Questa guida a Python per principianti ti accompagna dai primi passi: cosa installare, il tuo primo programma, i concetti fondamentali con esempi pratici, un mini progetto e un piano di studio in 4 settimane.</P>

      <H2 id="perche">Perché imparare Python</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["È leggibile", "Il codice somiglia molto all'inglese, quindi capisci cosa fa anche prima di conoscerlo bene."],
          ["È versatile", "Con lo stesso linguaggio automatizzi attività ripetitive, analizzi dati, crei siti web e lavori con l'intelligenza artificiale."],
          ["È richiesto", "Compare in moltissimi annunci tecnici, anche in ruoli che non sono da programmatore puro, come il cloud engineer e il DevOps engineer."],
        ].map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-3xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>

      <H2 id="cosa-fare">Cosa puoi fare con Python</H2>
      <P>Prima di iniziare, è utile sapere dove ti può portare. Con Python puoi:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          ["Automatizzare il lavoro ripetitivo", "Rinominare centinaia di file, compilare fogli di calcolo, inviare email in automatico."],
          ["Analizzare dati", "Leggere file Excel o CSV, calcolare statistiche, creare grafici."],
          ["Creare siti e applicazioni web", "Con framework come Django o Flask."],
          ["Lavorare con l'intelligenza artificiale", "La maggior parte degli strumenti di machine learning è pensata per Python."],
          ["Gestire infrastrutture cloud", "Scrivendo script che creano, controllano e spengono risorse."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Non devi scegliere subito una strada: le basi sono le stesse per tutte.</P>

      <H2 id="cosa-serve">Python per principianti: cosa serve per iniziare</H2>
      <P>Ti bastano due cose, entrambe gratuite:</P>
      <Bullets items={[
        <><strong>Python</strong>, da scaricare dal sito ufficiale python.org. Su Windows, durante l'installazione, seleziona l'opzione che aggiunge Python al PATH;</>,
        <><strong>un editor di codice</strong>, per esempio Visual Studio Code, con l'estensione ufficiale per Python.</>,
      ]} />
      <P>Per verificare che Python sia installato, apri il terminale e scrivi:</P>
      <Code title="Terminale">{`python --version`}</Code>
      <P>Su macOS e Linux il comando potrebbe essere <C>python3</C>. Se vedi un numero di versione che inizia con 3, sei pronto.</P>

      <H2 id="primo-programma">Il tuo primo programma</H2>
      <P>Crea un file chiamato <C>ciao.py</C> e scrivi:</P>
      <Code title="ciao.py">{`nome = input("Come ti chiami? ")
print(f"Ciao {nome}, benvenuto nel mondo di Python!")`}</Code>
      <P>Eseguilo dal terminale con <C>python ciao.py</C>. Il programma ti chiede il nome e ti saluta. In due righe hai già usato una variabile, una funzione per leggere l'input e una per scrivere il risultato.</P>

      <H2 id="basi">Le basi di Python in 6 concetti</H2>
      <H3 n={1}>Variabili e tipi di dato</H3>
      <P>Le variabili contengono dati. Python capisce da solo di che tipo sono:</P>
      <Code>{`eta = 35            # numero intero
altezza = 1.78      # numero decimale
citta = "Firenze"   # testo
lavora = True       # vero o falso`}</Code>
      <H3 n={2}>Condizioni</H3>
      <P>Con <C>if</C> il programma prende decisioni:</P>
      <Code>{`if eta >= 18:
    print("Sei maggiorenne")
else:
    print("Sei minorenne")`}</Code>
      <div className="mt-5 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-5 leading-relaxed">Nota l'<strong>indentazione</strong>: gli spazi all'inizio della riga indicano quale codice appartiene all'if. In Python sono obbligatori.</div>
      <H3 n={3}>Cicli</H3>
      <P>I cicli ripetono un'operazione:</P>
      <Code>{`for numero in range(1, 6):
    print(numero)`}</Code>
      <P>Questo codice stampa i numeri da 1 a 5.</P>
      <H3 n={4}>Liste e dizionari</H3>
      <P>Le liste contengono più valori in ordine, i dizionari associano una chiave a un valore:</P>
      <Code>{`linguaggi = ["Python", "Bash", "SQL"]
server = {"nome": "web-01", "regione": "eu-south-1", "attivo": True}

print(linguaggi[0])        # Python
print(server["regione"])   # eu-south-1`}</Code>
      <H3 n={5}>Funzioni</H3>
      <P>Le funzioni raccolgono codice che vuoi riutilizzare:</P>
      <Code>{`def calcola_iva(prezzo, aliquota=0.22):
    return prezzo * aliquota

print(calcola_iva(100))   # 22.0`}</Code>
      <H3 n={6}>Moduli</H3>
      <P>I moduli sono librerie di codice già pronto. Python ne ha tantissimi inclusi, e migliaia di altri si installano con <C>pip</C>:</P>
      <Code>{`import random
print(random.randint(1, 10))   # un numero casuale da 1 a 10`}</Code>

      <H2 id="mini-progetto">Un mini progetto per principianti: riordinare una cartella</H2>
      <P>Ecco uno script utile davvero: sposta i file di una cartella in sottocartelle in base all'estensione, per esempio tutti i PDF in una cartella "pdf".</P>
      <Code title="riordina.py">{`from pathlib import Path

cartella = Path("Download")

for file in cartella.iterdir():
    if file.is_file() and file.suffix:
        destinazione = cartella / file.suffix[1:].lower()
        destinazione.mkdir(exist_ok=True)
        file.rename(destinazione / file.name)
        print(f"Spostato: {file.name}")`}</Code>
      <P>Provalo prima su una cartella di test con qualche file di prova. In poche righe usi cicli, condizioni, moduli e percorsi: è esattamente il tipo di automazione che Python rende semplice.</P>

      <H2 id="piano">Piano di studio in 4 settimane</H2>
      <P>Con 30–60 minuti al giorno:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {([
          ["Installazione, variabili, tipi di dato, input e output", "Scrivi piccoli programmi, come un convertitore di valute."],
          ["Condizioni, cicli, liste e dizionari", "Crea una lista della spesa che puoi aggiornare da terminale."],
          ["Funzioni, moduli, lettura e scrittura di file", "Scrivi uno script che legge un file di testo e conta le parole."],
          ["Un progetto tuo", <>Piccolo ma completo, da pubblicare su GitHub. Se non sai come fare, segui il <A slug="git-tutorial">Git tutorial</A>.</>],
        ] as [string, ReactNode][]).map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="rounded-full bg-brand-blue px-3 py-1 text-xs font-extrabold text-primary-foreground">Settimana {i + 1}</span><p className="mt-3 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 font-semibold leading-relaxed">La regola più importante: scrivi codice ogni giorno, anche solo dieci righe. Guardare video senza scrivere non ti insegna a programmare.</div>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Stai valutando un lavoro tecnico?</p>
        <p className="mt-3 text-lg leading-relaxed">Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="esercitarsi">Dove esercitarsi gratis</H2>
      <P>Per fare pratica non servono corsi costosi. Alcune risorse utili:</P>
      <Bullets items={[
        <>il <strong>tutorial ufficiale</strong> sul sito di Python, completo e sempre aggiornato;</>,
        <>le <strong>piattaforme di esercizi online</strong>, che propongono problemi di difficoltà crescente e controllano in automatico le tue soluzioni;</>,
        <>i <strong>tuoi problemi quotidiani</strong>: ogni volta che fai un'operazione noiosa al computer, chiediti se potresti automatizzarla con uno script;</>,
        <>le <strong>community online</strong>, dove puoi fare domande e leggere il codice di altri principianti.</>,
      ]} />
      <P>Il miglior esercizio resta sempre lo stesso: scegliere un piccolo problema reale e risolverlo con il codice.</P>

      <H2 id="errori">Gli errori più comuni da principiante</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {errori.map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="ai">Python e l'intelligenza artificiale: usala bene</H2>
      <P>Gli assistenti AI oggi scrivono codice Python in pochi secondi. Per chi impara sono un aiuto enorme, se usati nel modo giusto.</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="flex gap-3 rounded-2xl border border-brand-blue/25 bg-brand-blue/5 p-5"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><div><p className="font-extrabold">Sì</p><p className="mt-1 leading-relaxed text-brand-ink/80">Chiedi di spiegarti il codice riga per riga, di trovare l'errore in un tuo script o di proporti esercizi.</p></div></div>
        <div className="flex gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">No</p><p className="mt-1 leading-relaxed text-brand-ink/80">Evita di farti scrivere tutto: se non capisci il codice, non saprai correggerlo quando smette di funzionare.</p></div></div>
      </div>

      <H2 id="cloud">Python nel cloud</H2>
      <P>Nel cloud Python si usa soprattutto per automatizzare: creare risorse, controllare costi, fare backup, reagire a eventi. Su AWS, per esempio, la libreria ufficiale <C>boto3</C> permette di gestire i servizi direttamente dal codice:</P>
      <Code title="elenca_bucket.py">{`import boto3

s3 = boto3.client("s3")
for bucket in s3.list_buckets()["Buckets"]:
    print(bucket["Name"])`}</Code>
      <P>Questo script elenca tutti i bucket S3 del tuo account. È il tipo di automazione che un cloud engineer scrive ogni giorno. Se ti incuriosisce, trovi il percorso completo nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>

      <H2 id="faq">Domande frequenti</H2>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-border p-5 open:bg-secondary">
            <summary className="cursor-pointer list-none font-extrabold">{f.q}</summary>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{f.a}</p>
          </details>
        ))}
      </div>

      <H2 id="sintesi">In sintesi</H2>
      <ul className="mt-5 space-y-2">
        {[
          "Python è il linguaggio più consigliato ai principianti: leggibile, gratuito e usato ovunque.",
          "Per iniziare servono solo Python e un editor di codice come Visual Studio Code.",
          "Le basi sono sei concetti: variabili, condizioni, cicli, liste e dizionari, funzioni, moduli.",
          "In 4 settimane di pratica quotidiana puoi arrivare a scrivere piccoli programmi utili.",
          "Nel cloud Python serve soprattutto ad automatizzare, ed è una competenza molto richiesta.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi capire se una carriera tecnica nel cloud fa per te?</p>
        <p className="mt-3 text-lg">Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>
    </div>
  );
}
