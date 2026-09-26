import { AlertTriangle, Check, Clock, HelpCircle, Lightbulb, Sparkles, Terminal, ThumbsUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const toc = [
  { id: "sintesi-mansioni", label: "Cosa fa, in sintesi" },
  { id: "giornata", label: "Una giornata tipo" },
  { id: "junior-senior", label: "Junior e senior" },
  { id: "strumenti", label: "Gli strumenti" },
  { id: "pro-contro", label: "Lati positivi e negativi" },
  { id: "profilo", label: "Che persona serve" },
  { id: "faq", label: "Domande frequenti" },
  { id: "sintesi", label: "In sintesi" },
];

const QUIZ = "https://quiz.capitancloud.it/";

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
const Warn = ({ items }: { items: [string, string][] }) => (
  <div className="mt-6 grid gap-4 sm:grid-cols-2">{items.map(([t, x]) => <div key={t} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5"><p className="flex items-center gap-2 font-extrabold"><AlertTriangle className="h-5 w-5 shrink-0 text-destructive" />{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>)}</div>
);
const Note = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mt-6 rounded-2xl border-l-4 border-brand-yellow bg-brand-yellow/10 p-5"><p className="font-extrabold">{title}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{children}</p></div>
);

const Quiz = () => (
  <div className="mt-10 rounded-3xl bg-brand-blue p-7 text-primary-foreground">
    <p className="font-blog-display text-2xl font-extrabold">Ti ci vedi in questa giornata?</p>
    <p className="mt-2 leading-relaxed text-primary-foreground/85">Fai il quiz gratuito di 2 minuti per capire se hai la predisposizione giusta. Se invece hai già deciso, scopri il percorso Diventa Cloud Engineer in 90 giorni.</p>
    <div className="mt-5 flex flex-wrap gap-3">
      <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      <Link to="/" className="inline-flex rounded-xl border border-primary-foreground/40 px-5 py-3 font-extrabold">Scopri il percorso</Link>
    </div>
  </div>
);

const DAY: [string, string, string][] = [
  ["9:00", "Controllo dei sistemi", "Si apre la dashboard di monitoraggio: ci sono stati allarmi durante la notte? Un disco quasi pieno, un servizio lento, un picco di costi? Se è tutto tranquillo, si passa alle attività del giorno."],
  ["9:30", "Riunione breve con il team", "Un quarto d'ora per dire cosa si è fatto ieri, cosa si farà oggi e se ci sono ostacoli. È il momento in cui si chiede aiuto ai colleghi più esperti."],
  ["10:00", "Attività pianificata", "Per esempio: preparare un nuovo ambiente di test per il team di sviluppo. Si scrive o modifica il codice Terraform che descrive rete, server e database, lo si fa controllare da un collega e lo si applica."],
  ["12:00", "Richiesta improvvisa", "Uno sviluppatore non riesce ad accedere a un bucket S3. Si controllano i permessi IAM, si trova la policy mancante e la si aggiunge, con i permessi strettamente necessari."],
  ["13:00", "Pausa pranzo", "Si stacca e si ricarica."],
  ["14:00", "Automazione", "Si scrive un piccolo script in Python che ogni sera spegne le istanze di test, per risparmiare sui costi."],
  ["15:30", "Analisi di un problema", "Un'applicazione in produzione è più lenta del solito. Si guardano log e metriche, si scopre che il database è sotto sforzo e si propone al team di aumentarne le risorse."],
  ["17:00", "Documentazione e chiusura", "Si aggiorna la documentazione di ciò che è stato modificato e si prepara il lavoro per il giorno dopo."],
];

const FAQ: [string, ReactNode][] = [
  ["Un cloud engineer programma tutto il giorno?", "No. Scrive codice soprattutto per automatizzare e per descrivere l'infrastruttura, ma gran parte del lavoro è configurare, analizzare problemi e collaborare con il team."],
  ["Un cloud engineer lavora da remoto?", "Spesso sì, almeno in parte, soprattutto dopo il primo periodo. Da junior molte aziende chiedono una presenza in ufficio, almeno qualche giorno a settimana."],
  ["Che differenza c'è con il DevOps engineer?", <>Il cloud engineer si concentra sull'infrastruttura, il DevOps engineer sul processo di rilascio del software. Trovi il confronto nella guida sul <A slug="devops-engineer">DevOps engineer</A>.</>],
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Un cloud engineer <strong>progetta, costruisce e mantiene l'infrastruttura cloud</strong> su cui girano le applicazioni di un'azienda: server, reti, database, permessi e sistemi di monitoraggio, su piattaforme come <A slug="aws-cos-e">AWS</A>, Azure o Google Cloud.</p>
      </div>
      <P>Detto così resta astratto. Per questo in questa guida ti racconto una giornata tipo di un cloud engineer junior, le mansioni principali, gli strumenti che usa ogni giorno e i lati positivi e negativi del lavoro. Così puoi capire se fa davvero per te.</P>

      <H2 id="sintesi-mansioni">Cloud engineer: cosa fa, in sintesi</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          ["Crea e configura", "Risorse cloud: server, reti, database, storage."],
          ["Automatizza", "Descrive l'infrastruttura come codice e riduce il lavoro manuale."],
          ["Gestisce la sicurezza", "Permessi, accessi, crittografia, aggiornamenti."],
          ["Monitora", "Controlla che tutto funzioni e interviene quando qualcosa si rompe."],
          ["Controlla i costi", "Evita sprechi e risorse inutilizzate."],
          ["Collabora", "Con gli sviluppatori, perché le applicazioni girino stabili e sicure."],
        ].map(([t, x]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="flex items-center gap-2 font-extrabold"><Check className="h-5 w-5 text-brand-blue" />{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>
        ))}
      </div>

      <H2 id="giornata">Una giornata tipo di un cloud engineer junior</H2>
      <P>Ogni azienda è diversa, ma una giornata realistica in una società di consulenza o in un team cloud interno può somigliare a questa.</P>
      <ol className="mt-8 border-l-2 border-brand-blue/20 pl-6">
        {DAY.map(([h, t, x]) => (
          <li key={h} className="relative pb-7 last:pb-0">
            <span className="absolute -left-[2.15rem] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue text-primary-foreground"><Clock className="h-4 w-4" /></span>
            <p className="font-mono text-sm font-bold text-brand-blue">{h}</p>
            <p className="font-blog-display text-xl font-extrabold">{t}</p>
            <p className="mt-1 leading-relaxed text-brand-ink/80">{x}</p>
          </li>
        ))}
      </ol>
      <Note title="Non tutte le giornate sono così ordinate">A volte un problema in produzione occupa l'intera giornata, altre volte si lavora per giorni su un unico progetto di migrazione.</Note>

      <H2 id="junior-senior">Junior e senior: cosa cambia</H2>
      <Table head={["", "Cloud engineer junior", "Cloud engineer senior"]} rows={[
        ["Attività principali", "Configurazioni, richieste, automazioni semplici", "Progettazione di architetture, decisioni tecniche"],
        ["Autonomia", "Lavora spesso con la supervisione di un collega", "Guida il lavoro e fa da riferimento per gli altri"],
        ["Problemi in produzione", "Supporta e impara", "Coordina la risoluzione"],
        ["Rapporto con i clienti", "Limitato", "Frequente, soprattutto in consulenza"],
      ]} />
      <P>I primi mesi servono soprattutto a imparare: ambienti reali, procedure aziendali e il modo in cui lavora il team.</P>

      <H2 id="strumenti">Gli strumenti di tutti i giorni</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          <>Console e riga di comando della piattaforma cloud, per esempio <A slug="aws-cos-e">AWS</A></>,
          <><A slug="terraform">Terraform</A> o strumenti simili per l'infrastruttura come codice</>,
          <><A slug="git-tutorial">Git</A> per versionare codice e configurazioni</>,
          <><A slug="linux-per-principianti">Linux</A> e il terminale, per lavorare sui server</>,
          <>Strumenti di monitoraggio come CloudWatch o Grafana</>,
          <>Strumenti di comunicazione e ticketing, per gestire richieste e attività</>,
        ].map((t, i) => (
          <div key={i} className="flex gap-3 rounded-2xl bg-secondary p-4"><Terminal className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" /><span className="leading-relaxed">{t}</span></div>
        ))}
      </div>

      <Quiz />

      <H2 id="pro-contro">I lati positivi e quelli meno piacevoli</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-5">
          <p className="flex items-center gap-2 font-extrabold"><ThumbsUp className="h-5 w-5 text-brand-blue" />Cosa piace di più</p>
          <Bullets items={["È un lavoro vario, con molti problemi da risolvere e poca routine.", "Si impara continuamente, perché la tecnologia cambia in fretta.", "L'impatto del proprio lavoro è concreto e visibile.", <>Con l'esperienza crescono <A slug="stipendio-cloud-engineer">stipendio</A> e possibilità di lavorare da remoto.</>]} />
        </div>
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
          <p className="flex items-center gap-2 font-extrabold"><AlertTriangle className="h-5 w-5 text-destructive" />Cosa può pesare</p>
          <Bullets items={["Quando qualcosa si rompe in produzione serve intervenire in fretta, a volte con un po' di stress.", "In alcune aziende sono previsti turni di reperibilità.", "Bisogna aggiornarsi di continuo, anche fuori orario, almeno all'inizio."]} />
        </div>
      </div>

      <H2 id="profilo">Che tipo di persona si trova bene in questo lavoro</H2>
      <P>Il cloud engineer ideale <strong>non è un genio dell'informatica</strong>. È una persona:</P>
      <div className="mt-5 flex flex-wrap gap-3">
        {["Curiosa", "Non si scoraggia davanti a un errore", "Metodica", "Disposta a imparare di continuo", "Sa comunicare"].map((t) => (
          <span key={t} className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-4 py-2 font-bold"><Sparkles className="h-4 w-4 text-brand-yellow-deep" />{t}</span>
        ))}
      </div>
      <P>Le modifiche vanno fatte con ordine, e la capacità di comunicare con colleghi e sviluppatori conta quasi quanto le competenze tecniche.</P>
      <P>Se ti riconosci in questo profilo, il passo successivo è capire come arrivarci: trovi la roadmap completa nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>, e i dati sugli stipendi nella guida sullo <A slug="stipendio-cloud-engineer">stipendio del cloud engineer</A>.</P>

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
        "Un cloud engineer progetta, costruisce e mantiene l'infrastruttura cloud di un'azienda.",
        "La sua giornata alterna attività pianificate, richieste improvvise, automazione e analisi di problemi.",
        "Da junior lavora con la supervisione dei colleghi; da senior progetta e guida le decisioni tecniche.",
        "È un lavoro vario e in continua evoluzione, adatto a persone curiose e metodiche.",
      ]} />
      <div className="mt-10 rounded-3xl border-2 border-brand-yellow bg-brand-yellow/10 p-7">
        <p className="font-blog-display text-2xl font-extrabold">Vuoi capire se è la strada giusta per te?</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl bg-brand-blue px-5 py-3 font-extrabold text-primary-foreground">Fai il quiz gratuito di 2 minuti</a>
          <Link to="/" className="inline-flex rounded-xl border border-brand-blue px-5 py-3 font-extrabold text-brand-blue">Scopri Diventa Cloud Engineer in 90 giorni</Link>
        </div>
      </div>
    </div>
  );
}
