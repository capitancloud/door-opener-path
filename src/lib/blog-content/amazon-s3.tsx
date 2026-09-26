import { AlertTriangle, Check, HelpCircle, Lightbulb, Sparkles, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const toc = [
  { id: "in-breve", label: "S3 in breve" },
  { id: "concetti", label: "I concetti base" },
  { id: "a-cosa-serve", label: "A cosa serve" },
  { id: "classi", label: "Le classi di storage" },
  { id: "primo-bucket", label: "Creare il primo bucket" },
  { id: "cli", label: "Usare S3 da riga di comando" },
  { id: "sicurezza", label: "Come proteggere i dati" },
  { id: "funzioni", label: "Funzioni utili da conoscere" },
  { id: "costi", label: "Quanto costa" },
  { id: "esercizio", label: "Un esercizio pratico" },
  { id: "errori", label: "Errori da principiante" },
  { id: "faq", label: "Domande frequenti" },
  { id: "sintesi", label: "In sintesi" },
];

const A = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <Link to="/blog/$slug" params={{ slug }} className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:decoration-brand-blue">{children}</Link>
);
const H2 = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="scroll-mt-24 pt-14 font-blog-display text-3xl font-extrabold leading-tight sm:text-4xl">{children}</h2>
);
const P = ({ children }: { children: ReactNode }) => <p className="mt-5 text-lg leading-relaxed text-brand-ink/85">{children}</p>;
const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-4 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-3 text-lg leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><span>{t}</span></li>)}</ul>
);
const Code = ({ title, children }: { title: string; children: string }) => (
  <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-brand-ink">
    <div className="flex items-center gap-2 border-b border-primary-foreground/10 px-4 py-2 text-xs font-bold text-primary-foreground/70"><Terminal className="h-4 w-4" />{title}</div>
    <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-primary-foreground"><code>{children}</code></pre>
  </div>
);
const C = ({ children }: { children: ReactNode }) => <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-brand-blue">{children}</code>;
const Table = ({ head, rows }: { head: string[]; rows: ReactNode[][] }) => (
  <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
    <table className="w-full min-w-[34rem] text-left text-sm">
      <thead className="bg-secondary"><tr>{head.map((h, i) => <th key={i} className={`p-4 font-extrabold ${i === 1 ? "text-brand-blue" : ""}`}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((r, ri) => <tr key={ri} className="border-t border-border">{r.map((c, i) => <td key={i} className={`p-4 ${i === 0 ? "font-bold" : "text-brand-ink/80"}`}>{c}</td>)}</tr>)}</tbody>
    </table>
  </div>
);
const Course = ({ title, text }: { title: string; text: string }) => (
  <div className="mt-10 rounded-3xl border-2 border-brand-yellow bg-brand-yellow/10 p-7">
    <Sparkles className="h-6 w-6 text-brand-yellow-deep" />
    <p className="mt-3 font-blog-display text-2xl font-extrabold">{title}</p>
    <p className="mt-2 leading-relaxed text-brand-ink/80">{text}</p>
    <Link to="/" className="mt-5 inline-flex rounded-xl bg-brand-blue px-5 py-3 font-extrabold text-primary-foreground">Scopri Diventa Cloud Engineer in 90 giorni</Link>
  </div>
);
const Steps = ({ items }: { items: ReactNode[] }) => (
  <ol className="mt-6 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-4 rounded-2xl border border-border p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><span className="text-lg leading-relaxed">{t}</span></li>)}</ol>
);
const Warn = ({ items }: { items: [string, string][] }) => (
  <div className="mt-6 grid gap-4 sm:grid-cols-2">{items.map(([t, x]) => <div key={t} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5"><p className="flex items-center gap-2 font-extrabold"><AlertTriangle className="h-5 w-5 shrink-0 text-destructive" />{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>)}</div>
);
const Note = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mt-6 rounded-2xl border-l-4 border-brand-yellow bg-brand-yellow/10 p-5"><p className="font-extrabold">{title}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{children}</p></div>
);

const FAQ: [string, ReactNode][] = [
  ["Amazon S3 è gratis?", "No, si paga in base all'uso. AWS offre però un piano gratuito per i nuovi account con cui puoi fare pratica. Le condizioni cambiano nel tempo: verificale sul sito ufficiale."],
  ["Che differenza c'è tra S3 ed EBS?", "EBS è un disco collegato a un singolo server EC2. S3 è un archivio di oggetti accessibile via internet da qualsiasi applicazione, senza dipendere da un server specifico."],
  ["S3 è come Google Drive o Dropbox?", "In parte. Entrambi archiviano file nel cloud, ma Drive e Dropbox sono applicazioni pronte per le persone, mentre S3 è un servizio per sviluppatori e aziende, pensato per essere usato da applicazioni, script e altri servizi."],
  ["Quanto sono sicuri i dati su S3?", "AWS progetta S3 per una durabilità altissima, replicando i dati su più dispositivi e, per la maggior parte delle classi, su più Availability Zone. La sicurezza degli accessi, invece, dipende da come configuri permessi e bucket."],
  ["Quale classe di storage scegliere per iniziare?", "S3 Standard per i dati che usi spesso. Se non sai quanto spesso verranno letti, S3 Intelligent-Tiering è una buona scelta, perché sposta i file da solo nella fascia più conveniente."],
  ["Si può usare S3 come database?", "No, non è un database: non permette interrogazioni complesse sui dati. Si usa insieme ai database, per esempio per archiviare file che il database cita con un collegamento."],
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Amazon S3 (Simple Storage Service) è il servizio di <strong>AWS</strong> per archiviare file di qualsiasi tipo nel cloud: immagini, video, documenti, backup, log, dati per l'analisi. Carichi i file in contenitori chiamati <strong>bucket</strong>, li recuperi quando vuoi da qualsiasi luogo e paghi in base allo spazio occupato e all'uso.</p>
      </div>
      <P>È uno dei primi servizi lanciati da <A slug="aws-cos-e">AWS</A> e uno dei più usati al mondo. In questa guida trovi AWS S3 spiegato da zero: i concetti base, a cosa serve, le classi di storage, come creare il primo bucket, come usarlo da riga di comando e come proteggere i tuoi dati.</P>

      <H2 id="in-breve">AWS S3: cos'è in breve</H2>
      <P>S3 è un servizio di <strong>object storage</strong>, cioè di archiviazione a oggetti. Ogni file viene salvato come un oggetto, con i suoi dati e le sue informazioni descrittive, dentro un bucket. Non c'è un disco da gestire e non c'è un limite pratico allo spazio totale: S3 cresce insieme ai tuoi dati.</P>
      <P>AWS offre tre tipi principali di storage, che servono a cose diverse:</P>
      <Table head={["Tipo", "Servizio AWS", "Come funziona", "Uso tipico"]} rows={[
        ["Object storage", "Amazon S3", "File come oggetti, accessibili via internet o API", "Backup, media, siti statici, dati"],
        ["Block storage", "Amazon EBS", "Un disco collegato a un server", "Il disco di un'istanza EC2"],
        ["File storage", "Amazon EFS", "Un file system condiviso tra più server", "Cartelle condivise tra applicazioni"],
      ]} />
      <P>Se vuoi capire meglio il rapporto tra S3 ed EBS, trovi EBS spiegato nella guida su <A slug="amazon-ec2">Amazon EC2</A>.</P>

      <H2 id="concetti">I concetti base di S3</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          ["Bucket", <>Il contenitore dei tuoi file. Il nome deve essere unico in tutto il mondo, e il bucket risiede in una regione che scegli tu.</>],
          ["Oggetto", <>Il file vero e proprio, con i suoi metadati. Un singolo oggetto può arrivare a dimensioni nell'ordine dei terabyte.</>],
          ["Chiave", <>Il nome completo dell'oggetto, per esempio <C>foto/2026/vacanze.jpg</C>.</>],
          ["Prefisso", <>La parte iniziale della chiave, come <C>foto/2026/</C>. In S3 le “cartelle” non esistono davvero: sono prefissi che la console mostra come cartelle.</>],
          ["Regione", <>La zona geografica in cui vengono salvati i dati, per esempio Milano.</>],
        ].map(([t, x]) => (
          <div key={t as string} className="rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-5"><p className="font-blog-display text-xl font-extrabold text-brand-blue">{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>
        ))}
      </div>

      <H2 id="a-cosa-serve">A cosa serve Amazon S3</H2>
      <Bullets items={[
        "Backup e archiviazione di dati aziendali, anche per molti anni.",
        "Contenuti per siti e app: immagini, video e file scaricabili.",
        "Siti web statici, fatti solo di HTML, CSS e JavaScript.",
        "Data lake: grandi quantità di dati da analizzare con altri servizi AWS.",
        "Log e dati tecnici prodotti da applicazioni e servizi.",
        <>Stato di Terraform e altri file di configurazione, come spiego nella guida su <A slug="terraform">Terraform</A>.</>,
      ]} />

      <H2 id="classi">Le classi di storage</H2>
      <P>Non tutti i dati vengono letti con la stessa frequenza. Per questo S3 offre diverse classi, con costi e tempi di accesso diversi:</P>
      <Table head={["Classe", "Pensata per"]} rows={[
        ["S3 Standard", "Dati usati spesso"],
        ["S3 Intelligent-Tiering", "Dati con accessi imprevedibili: sposta i file in automatico nella fascia più conveniente"],
        ["S3 Standard-IA", "Dati letti raramente, ma da recuperare subito quando servono"],
        ["S3 One Zone-IA", "Come la precedente, ma su una sola Availability Zone, a costo inferiore"],
        ["S3 Glacier Instant Retrieval", "Archivi consultati raramente, con accesso immediato"],
        ["S3 Glacier Flexible Retrieval", "Archivi da recuperare in minuti o ore"],
        ["S3 Glacier Deep Archive", "Archiviazione a lunghissimo termine, con recupero in ore"],
      ]} />
      <Note title="La regola da ricordare">Più la classe è “fredda”, più costa poco tenere i dati, ma più costa e richiede tempo recuperarli.</Note>

      <H2 id="primo-bucket">Come creare il primo bucket</H2>
      <P>Dalla console AWS:</P>
      <Steps items={[
        <>apri il servizio S3 e clicca su <strong>Create bucket</strong>;</>,
        <>scegli un nome unico, per esempio <C>mionome-primo-bucket-2026</C>;</>,
        "seleziona la regione;",
        <>lascia attivo <strong>Block all public access</strong>, a meno che tu non sappia esattamente perché disattivarlo;</>,
        "lascia le impostazioni di crittografia predefinite e crea il bucket.",
      ]} />
      <P>Poi entra nel bucket e carica un file con <strong>Upload</strong>. Hai appena usato S3.</P>

      <H2 id="cli">Usare S3 da riga di comando</H2>
      <P>Con l'AWS CLI installata e configurata, i comandi principali sono semplici:</P>
      <Code title="Terminale">{`aws s3 mb s3://mionome-primo-bucket-2026           # crea un bucket
aws s3 cp foto.jpg s3://mionome-primo-bucket-2026/ # carica un file
aws s3 ls s3://mionome-primo-bucket-2026/          # elenca i file
aws s3 sync ./sito s3://mionome-primo-bucket-2026/ # sincronizza una cartella
aws s3 rm s3://mionome-primo-bucket-2026/foto.jpg  # elimina un file`}</Code>
      <P>Il comando <C>sync</C> è particolarmente utile per i backup: carica solo i file nuovi o modificati. Se il terminale ti è nuovo, parti dalla guida <A slug="linux-per-principianti">Linux per principianti</A>.</P>

      <H2 id="sicurezza">Sicurezza: come proteggere i dati su S3</H2>
      <P>Molti incidenti di sicurezza nel cloud nascono da bucket S3 configurati male, con dati sensibili lasciati accessibili a tutti. Le regole base:</P>
      <Bullets items={[
        <><strong>Tieni attivo il blocco dell'accesso pubblico</strong>, che AWS abilita di default sui nuovi bucket.</>,
        <><strong>I dati sono crittografati di default:</strong> tutti i nuovi oggetti vengono cifrati automaticamente. Per esigenze particolari puoi usare chiavi gestite con AWS KMS.</>,
        <><strong>Controlla gli accessi con IAM e bucket policy:</strong> concedi solo i permessi necessari, come spiego nella guida su <A slug="aws-iam">AWS IAM</A>.</>,
        <><strong>Per condividere un file temporaneamente, usa gli URL prefirmati:</strong> link che danno accesso a un oggetto solo per un tempo limitato, senza rendere pubblico il bucket.</>,
      ]} />

      <Course title="Vuoi imparare S3 e tutti i servizi AWS con un percorso guidato?" text="Diventa Cloud Engineer in 90 giorni ti prepara alle certificazioni CLF-C02 e SAA-C03, con laboratori pratici, progetti per il portfolio e preparazione al colloquio." />

      <H2 id="funzioni">Funzioni utili da conoscere</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          ["Versioning", <>Mantiene tutte le versioni di un file: se lo sovrascrivi o lo cancelli per errore, puoi recuperare la versione precedente.</>],
          ["Regole di ciclo di vita", <>Spostano automaticamente i file in classi più economiche dopo un certo tempo, oppure li eliminano. Per esempio: log in Standard per 30 giorni, poi in Glacier, poi eliminati dopo un anno.</>],
          ["Hosting di siti statici", <>S3 può servire direttamente un sito fatto di file statici. Abbinato ad Amazon CloudFront ottieni un sito veloce, con HTTPS e dominio personalizzato: è uno dei progetti più adatti al portfolio, come descritto nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</>],
          ["Replica", <>Copia automaticamente gli oggetti in un altro bucket, anche in un'altra regione, per disaster recovery o requisiti di conformità.</>],
        ].map(([t, x]) => (
          <div key={t as string} className="rounded-2xl border border-border p-5"><p className="font-blog-display text-xl font-extrabold text-brand-blue">{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>
        ))}
      </div>

      <H2 id="costi">Quanto costa Amazon S3</H2>
      <P>Il costo di S3 dipende da quattro fattori:</P>
      <Bullets items={[
        "spazio occupato, in base alla classe di storage;",
        "richieste, cioè le operazioni di lettura, scrittura ed elenco;",
        "trasferimento dei dati verso internet, che si paga, mentre il caricamento su S3 in genere no;",
        "funzioni aggiuntive, come replica o analisi dell'uso.",
      ]} />
      <P>Per un progetto personale i costi sono di solito molto bassi. Per stimare quelli di un progetto reale usa l'<strong>AWS Pricing Calculator</strong>.</P>

      <H2 id="esercizio">Un esercizio pratico</H2>
      <P>Per prendere confidenza con S3, prova questa sequenza:</P>
      <Steps items={[
        "crea un bucket con il blocco dell'accesso pubblico attivo;",
        "carica tre file dalla console e altri tre con l'AWS CLI;",
        "attiva il versioning, modifica un file e recupera la versione precedente;",
        "crea una regola di ciclo di vita che sposti i file in una classe più economica dopo 30 giorni;",
        "genera un URL prefirmato valido per pochi minuti e aprilo da un browser in incognito.",
      ]} />
      <P>Alla fine elimina oggetti e bucket: avrai toccato con mano le funzioni che userai più spesso.</P>

      <H2 id="errori">Gli errori più comuni da principiante</H2>
      <Warn items={[
        ["Rendere pubblico un bucket per comodità", "È il modo più rapido per esporre dati sensibili. Se devi condividere qualcosa, usa gli URL prefirmati o CloudFront."],
        ["Accumulare dati inutili", "Log e backup vecchi si accumulano e costano. Imposta fin da subito regole di ciclo di vita."],
        ["Dimenticare il costo del trasferimento", "Servire molti file direttamente da S3 verso internet può costare più del previsto. Per i contenuti molto richiesti, usa CloudFront."],
        ["Scegliere nomi generici", "Il nome del bucket è unico al mondo e compare negli indirizzi. Usa un prefisso che identifichi te o il progetto."],
      ]} />

      <H2 id="faq">Domande frequenti</H2>
      <div className="mt-6 space-y-3">
        {FAQ.map(([q, x]) => (
          <details key={q} className="group rounded-2xl border border-border p-5">
            <summary className="flex cursor-pointer list-none items-center gap-3 font-extrabold"><HelpCircle className="h-5 w-5 shrink-0 text-brand-blue" />{q}</summary>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{x}</p>
          </details>
        ))}
      </div>

      <H2 id="sintesi">In sintesi</H2>
      <Bullets items={[
        "Amazon S3 è il servizio di object storage di AWS: archivi file in bucket e li recuperi da ovunque.",
        "I concetti base sono bucket, oggetto, chiave, prefisso e regione.",
        "Le classi di storage permettono di bilanciare costo e velocità di accesso.",
        "Blocco dell'accesso pubblico, crittografia predefinita, IAM e URL prefirmati sono le basi della sicurezza.",
        "Versioning, ciclo di vita, siti statici e replica rendono S3 uno strumento molto versatile.",
      ]} />
      <Course title="Vuoi padroneggiare S3 e i servizi AWS per certificazioni e lavoro?" text="Scopri Diventa Cloud Engineer in 90 giorni: il percorso completo verso le certificazioni e il primo lavoro nel cloud." />
    </div>
  );
}
