import { Check, HelpCircle, Lightbulb, Pizza, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "in-breve", label: "IaaS, PaaS e SaaS in breve" },
  { id: "pizza", label: "L'esempio della pizza" },
  { id: "responsabilita", label: "Chi gestisce cosa" },
  { id: "iaas", label: "IaaS: esempi" },
  { id: "paas", label: "PaaS: esempi" },
  { id: "saas", label: "SaaS: esempi" },
  { id: "oltre", label: "Serverless e container" },
  { id: "quale", label: "Quale scegliere" },
  { id: "lavoro", label: "Nel lavoro del cloud engineer" },
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
const When = ({ children }: { children: ReactNode }) => (
  <div className="mt-6 rounded-2xl border border-brand-blue/20 bg-secondary p-5"><p className="text-xs font-extrabold uppercase text-brand-blue">Quando si usa</p><p className="mt-2 leading-relaxed">{children}</p></div>
);

const resp: [string, string, string, string, string][] = [
  ["Applicazione", "Tu", "Tu", "Tu", "Fornitore"],
  ["Dati", "Tu", "Tu", "Tu", "Tu (in parte)"],
  ["Runtime e middleware", "Tu", "Tu", "Fornitore", "Fornitore"],
  ["Sistema operativo", "Tu", "Tu", "Fornitore", "Fornitore"],
  ["Virtualizzazione", "Tu", "Fornitore", "Fornitore", "Fornitore"],
  ["Server fisici", "Tu", "Fornitore", "Fornitore", "Fornitore"],
  ["Storage e rete", "Tu", "Fornitore", "Fornitore", "Fornitore"],
];
const Cell = ({ v }: { v: string }) => (
  <td className="p-3"><span className={`inline-block rounded-full px-2.5 py-1 text-xs font-extrabold ${v.startsWith("Tu") ? "bg-brand-yellow/30 text-brand-ink" : "bg-brand-blue/10 text-brand-blue"}`}>{v}</span></td>
);

const scelta: [string, string][] = [
  ["Controllo totale su sistema e configurazione", "IaaS"],
  ["Portare nel cloud applicazioni esistenti senza modificarle", "IaaS"],
  ["Sviluppare e rilasciare applicazioni in fretta", "PaaS"],
  ["Ridurre al minimo la gestione dei server", "PaaS o serverless"],
  ["Usare una funzione pronta (email, CRM, gestionale)", "SaaS"],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "AWS è IaaS, PaaS o SaaS?", a: <>AWS offre servizi di tutti e tre i tipi, ma è noto soprattutto per lo IaaS e il PaaS. EC2 è IaaS, Elastic Beanstalk e RDS sono PaaS. Trovi di più nella guida su <A slug="aws-cos-e">AWS: cos'è e come funziona</A>.</> },
  { q: "Qual è la differenza principale tra IaaS, PaaS e SaaS?", a: <>Il livello di gestione: con lo IaaS gestisci sistema operativo e applicazioni, con il PaaS solo l'applicazione, con il SaaS niente, usi il software pronto.</> },
  { q: "Il serverless è PaaS?", a: <>È molto vicino al PaaS, ma va oltre: non gestisci nemmeno l'applicazione come un servizio sempre attivo, solo singole funzioni eseguite quando servono. Per questo viene spesso considerato un modello a sé.</> },
  { q: "Quale modello è più economico?", a: <>Dipende dall'uso. Lo IaaS può costare meno per carichi costanti e ben ottimizzati, ma richiede più lavoro di gestione. PaaS e SaaS costano di più per unità, ma fanno risparmiare tempo e personale.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Tutto dipende da una domanda: quanto gestisci tu e quanto il fornitore? IaaS: quasi tutto tu. PaaS: solo la tua applicazione. SaaS: niente, usi un software pronto.</p>
      </div>
      <P>IaaS, PaaS e SaaS sono i tre modelli principali con cui si usa il cloud computing. La differenza sta in una sola domanda: quanto gestisci tu e quanto gestisce il fornitore? Con lo IaaS ti occupi di quasi tutto, con il PaaS solo della tua applicazione, con il SaaS di niente: usi un software pronto.</P>
      <P>In questa guida trovi la differenza tra IaaS, PaaS e SaaS spiegata in modo semplice, con esempi pratici, una tabella delle responsabilità e i criteri per capire quale modello usare.</P>

      <H2 id="in-breve">IaaS, PaaS e SaaS in breve</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["IaaS", "Infrastructure as a Service", "Il fornitore ti dà l'infrastruttura: server virtuali, reti e spazio di archiviazione. Sistema operativo, software e applicazioni li gestisci tu."],
          ["PaaS", "Platform as a Service", "Il fornitore ti dà una piattaforma pronta. Tu carichi il codice, lui si occupa di server, sistema operativo e aggiornamenti."],
          ["SaaS", "Software as a Service", "Il fornitore ti dà un software completo, pronto all'uso via browser o app. Tu lo usi e basta."],
        ].map(([s, n, d]) => (
          <div key={s} className="rounded-2xl border border-border p-5"><p className="font-blog-display text-3xl font-extrabold text-brand-blue">{s}</p><p className="mt-1 text-xs font-bold uppercase text-brand-ink/60">{n}</p><p className="mt-3 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Se prima vuoi capire il concetto generale di cloud, parti dalla guida su <A slug="cloud-computing-cos-e">cos'è il cloud computing</A>.</P>

      <H2 id="pizza">Un esempio per capire: la pizza</H2>
      <P>Il modo più semplice per capire la differenza tra IaaS, PaaS e SaaS è pensare a una pizza:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          ["Fatta in casa", "On-premise", "Compri tutto, impasti, usi il tuo forno, apparecchi. Fai tutto tu."],
          ["Cucina a noleggio", "IaaS", "Il forno e il locale ci sono, ma ingredienti, impasto e cottura sono affar tuo."],
          ["Base pronta da cuocere", "PaaS", "Tu scegli il condimento, il resto è già fatto."],
          ["In pizzeria", "SaaS", "Ti siedi, ordini e mangi."],
        ].map(([t, m, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5">
            <div className="flex items-center justify-between"><Pizza className="h-6 w-6 text-brand-yellow-deep" /><span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-extrabold text-brand-blue">{m}</span></div>
            <p className="mt-3 font-extrabold">{i + 1}. {t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-5 font-semibold leading-relaxed">Più sali di livello, meno lavoro fai e meno controllo hai. È esattamente il compromesso tra i tre modelli.</div>

      <H2 id="responsabilita">Chi gestisce cosa: la tabella delle responsabilità</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[36rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Livello</th><th className="p-3">On-premise</th><th className="p-3">IaaS</th><th className="p-3">PaaS</th><th className="p-3">SaaS</th></tr></thead>
          <tbody>{resp.map(([l, ...c], i) => (
            <tr key={l} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{l}</td>{c.map((v, j) => <Cell key={j} v={v} />)}</tr>
          ))}</tbody>
        </table>
      </div>
      <P>Nota una cosa: anche nel SaaS i dati restano in parte una tua responsabilità. Decidi tu chi può accedervi, e se li cancelli per errore, il fornitore non sempre può recuperarli.</P>

      <H2 id="iaas">IaaS: esempi pratici</H2>
      <P>Con lo IaaS noleggi l'infrastruttura e la configuri come vuoi. Esempi:</P>
      <Bullets items={[
        <><strong>Amazon EC2</strong> su AWS, <strong>Virtual Machines</strong> su Microsoft Azure, <strong>Compute Engine</strong> su Google Cloud: server virtuali su cui installi sistema operativo e software;</>,
        <><strong>Amazon S3</strong> e i servizi di storage a blocchi, per archiviare dati;</>,
        <><strong>Amazon VPC</strong>, per costruire la tua rete privata nel cloud.</>,
      ]} />
      <When>Quando serve il massimo controllo, per esempio per spostare nel cloud applicazioni esistenti senza riscriverle, o per configurazioni molto specifiche. Trovi un approfondimento nella guida su <A slug="amazon-ec2">Amazon EC2</A>.</When>

      <H2 id="paas">PaaS: esempi pratici</H2>
      <P>Con il PaaS carichi il codice e la piattaforma pensa al resto: server, aggiornamenti, scalabilità. Esempi:</P>
      <Bullets items={[
        <><strong>AWS Elastic Beanstalk</strong> e <strong>Azure App Service</strong>: carichi un'applicazione web e la piattaforma la mette online;</>,
        <><strong>Amazon RDS</strong>: un database gestito, dove non installi né aggiorni il software del database;</>,
        <><strong>Google App Engine</strong>: una piattaforma per eseguire applicazioni senza gestire i server.</>,
      ]} />
      <When>Quando vuoi concentrarti sullo sviluppo e ridurre il lavoro di gestione. È molto usato dai team di sviluppo per rilasciare applicazioni in fretta.</When>

      <H2 id="saas">SaaS: esempi pratici</H2>
      <P>Il SaaS è il modello che usi di più, spesso senza saperlo:</P>
      <Bullets items={[
        "la posta elettronica via browser;",
        "le suite per l'ufficio online, come Microsoft 365 o Google Workspace;",
        "i CRM per gestire i clienti, come Salesforce;",
        "le piattaforme di videoconferenza;",
        "i gestionali e i software di fatturazione online.",
      ]} />
      <When>Quando serve una funzione già pronta, senza sviluppare né gestire niente. Si paga di solito con un abbonamento per utente.</When>

      <H2 id="oltre">Oltre i tre modelli: serverless e container</H2>
      <P>Negli ultimi anni si sono diffusi altri modelli, che stanno a metà strada:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border p-5"><p className="font-extrabold">Serverless (FaaS)</p><p className="mt-1 leading-relaxed text-brand-ink/80">Function as a Service: scrivi piccole funzioni eseguite solo quando servono, e paghi solo per il tempo di esecuzione. L'esempio più noto è AWS Lambda.</p></div>
        <div className="rounded-2xl border border-border p-5"><p className="font-extrabold">Container gestiti (CaaS)</p><p className="mt-1 leading-relaxed text-brand-ink/80">Esegui applicazioni in container senza gestire i server sottostanti, per esempio con AWS Fargate.</p></div>
      </div>
      <P>Non sono in contraddizione con IaaS, PaaS e SaaS: sono varianti che spostano ancora di più il lavoro di gestione verso il fornitore.</P>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Ti piacerebbe lavorare con queste tecnologie?</p>
        <p className="mt-3 text-lg leading-relaxed">Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="quale">Quale scegliere: IaaS, PaaS o SaaS?</H2>
      <div className="mt-6 space-y-2">
        {scelta.map(([n, s]) => (
          <div key={n} className="flex items-center justify-between gap-4 rounded-2xl border border-border p-4"><span className="leading-relaxed">{n}</span><span className="shrink-0 rounded-full bg-brand-blue px-3 py-1 text-sm font-extrabold text-primary-foreground">{s}</span></div>
        ))}
      </div>
      <P>Nella realtà le aziende li usano quasi sempre tutti insieme: SaaS per la posta e i documenti, PaaS per le applicazioni nuove, IaaS per i sistemi che richiedono più controllo.</P>

      <H2 id="lavoro">IaaS, PaaS e SaaS nel lavoro di un cloud engineer</H2>
      <P>Un cloud engineer lavora soprattutto con IaaS e PaaS: configura server, reti, database gestiti e piattaforme su cui girano le applicazioni dell'azienda. Sapere quando usare l'uno o l'altro è una delle competenze che le aziende cercano, ed è anche un argomento d'esame della certificazione <A slug="aws-cloud-practitioner">AWS Cloud Practitioner</A>. Se vuoi trasformare queste conoscenze in un lavoro, leggi la guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>

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
          "IaaS, PaaS e SaaS si differenziano per quanto gestisci tu e quanto gestisce il fornitore.",
          "IaaS: infrastruttura da configurare, come Amazon EC2. PaaS: piattaforma su cui caricare il codice, come Elastic Beanstalk. SaaS: software pronto, come la posta elettronica online.",
          "Serverless e container gestiti sono varianti che riducono ancora il lavoro di gestione.",
          "Le aziende usano quasi sempre tutti e tre i modelli insieme.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi capire se lavorare nel cloud fa per te?</p>
        <p className="mt-3 text-lg">Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>
    </div>
  );
}
