import { Check, HelpCircle, Lightbulb, Sparkles, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "in-breve", label: "AWS vs Azure in breve" },
  { id: "servizi", label: "I servizi equivalenti" },
  { id: "aws", label: "Quando scegliere AWS" },
  { id: "azure", label: "Quando scegliere Azure" },
  { id: "google", label: "E Google Cloud?" },
  { id: "mercato", label: "Cosa chiede il mercato" },
  { id: "certificazioni", label: "Certificazioni a confronto" },
  { id: "strategia", label: "Una piattaforma alla volta" },
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

const Quiz = ({ title, text }: { title: string; text: string }) => (
  <div className="mt-10 rounded-3xl bg-brand-blue-deep p-7 text-primary-foreground">
    <Sparkles className="h-6 w-6 text-brand-yellow" />
    <p className="mt-3 font-blog-display text-2xl font-extrabold">{title}</p>
    <p className="mt-2 text-primary-foreground/80">{text}</p>
    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
  </div>
);

const Table = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
    <table className="w-full min-w-[34rem] text-left text-sm">
      <thead className="bg-secondary"><tr>{head.map((h, i) => <th key={i} className={`p-4 font-extrabold ${i === 1 ? "text-brand-blue" : ""}`}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((r) => <tr key={r[0]} className="border-t border-border">{r.map((c, i) => <td key={i} className={`p-4 ${i === 0 ? "font-bold" : "text-brand-ink/80"}`}>{c}</td>)}</tr>)}</tbody>
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
const Card = ({ title, items, tone }: { title: string; items: ReactNode[]; tone: string }) => (
  <div className={`mt-6 rounded-2xl border p-6 ${tone}`}>
    <p className="font-blog-display text-xl font-extrabold">{title}</p>
    <ul className="mt-4 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-3 leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><span>{t}</span></li>)}</ul>
  </div>
);
const Steps = ({ items }: { items: ReactNode[] }) => (
  <ol className="mt-6 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-4 rounded-2xl border border-border p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><span className="text-lg leading-relaxed">{t}</span></li>)}</ol>
);

const FAQ: [string, ReactNode][] = [
  ["AWS è più difficile di Azure?", "No, hanno una difficoltà simile. Cambiano i nomi e l'organizzazione dei servizi. Chi viene dal mondo Windows può trovare Azure più familiare all'inizio."],
  ["Posso studiare AWS e Azure contemporaneamente?", "Si può, ma per chi inizia è sconsigliato. È molto più efficace imparare bene una piattaforma e aggiungere la seconda in un secondo momento."],
  ["Se la mia azienda usa Microsoft 365 devo scegliere Azure?", "Non è obbligatorio, ma è un forte indizio. Se il tuo obiettivo è crescere all'interno di quell'azienda, Azure è probabilmente la scelta più utile."],
  ["Gli stipendi cambiano tra AWS e Azure?", <>Non in modo significativo a parità di ruolo ed esperienza. Contano di più competenze, seniority e tipo di azienda. Trovi i dati nella guida sullo <A slug="stipendio-cloud-engineer">stipendio del cloud engineer</A>.</>],
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> La risposta breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Per la maggior parte dei principianti conviene partire da <strong>AWS</strong>: è la piattaforma più diffusa e con il percorso d'ingresso più chiaro. <strong>Azure</strong> è la scelta migliore se lavori, o vuoi lavorare, in aziende che usano già prodotti Microsoft.</p>
      </div>
      <P>In questa guida trovi le differenze tra AWS e Azure, i servizi equivalenti, quando scegliere l'uno o l'altro, come verificare cosa chiede il mercato nella tua zona e quali certificazioni prendere.</P>

      <H2 id="in-breve">AWS vs Azure in breve</H2>
      <Table head={["", "AWS", "Microsoft Azure"]} rows={[
        ["Chi lo offre", "Amazon", "Microsoft"],
        ["Posizione sul mercato", "Il fornitore di cloud pubblico più grande", "Il secondo, molto forte nelle aziende"],
        ["Punto di forza", "Ampiezza dei servizi, diffusione, maturità", "Integrazione con l'ecosistema Microsoft"],
        ["Aziende tipiche", "Startup, aziende digitali, e-commerce, multinazionali", "Aziende che usano Windows Server, Microsoft 365, Active Directory"],
        ["Certificazione d'ingresso", "AWS Cloud Practitioner", "Azure Fundamentals (AZ-900)"],
      ]} />
      <P>Nessuna delle due è “migliore” in assoluto. Sono entrambe piattaforme complete, e i concetti di base sono gli stessi.</P>

      <H2 id="servizi">Le differenze tra AWS e Azure: i servizi equivalenti</H2>
      <P>AWS e Azure offrono servizi molto simili con nomi diversi. Conoscere le corrispondenze ti fa capire quanto sia facile passare dall'una all'altra:</P>
      <Table head={["Funzione", "AWS", "Azure"]} rows={[
        ["Server virtuali", "Amazon EC2", "Virtual Machines"],
        ["Archiviazione di file", "Amazon S3", "Blob Storage"],
        ["Database relazionali", "Amazon RDS", "Azure SQL Database"],
        ["Funzioni serverless", "AWS Lambda", "Azure Functions"],
        ["Rete privata", "Amazon VPC", "Virtual Network (VNet)"],
        ["Identità e accessi", "AWS IAM", "Microsoft Entra ID e RBAC"],
        ["Infrastruttura come codice", "CloudFormation", "ARM e Bicep"],
        ["Kubernetes gestito", "Amazon EKS", "Azure Kubernetes Service (AKS)"],
      ]} />
      <div className="mt-6 rounded-2xl border-l-4 border-brand-yellow bg-brand-yellow/10 p-5">
        <p className="font-extrabold">La differenza più grande: le identità</p>
        <p className="mt-2 leading-relaxed text-brand-ink/80">Su Azure tutto ruota attorno a Microsoft Entra ID, lo stesso sistema che molte aziende usano già per gli account dei dipendenti. È uno dei motivi per cui Azure piace così tanto alle aziende “Microsoft”. Su AWS il corrispettivo è <A slug="aws-iam">AWS IAM</A>.</p>
      </div>

      <H2 id="aws">Quando scegliere AWS</H2>
      <Card tone="border-brand-blue/30 bg-brand-blue/5" title="AWS fa per te se..." items={[
        "parti da zero e vuoi la piattaforma con più risorse, corsi e community;",
        "vuoi il maggior numero di opportunità, soprattutto in startup, aziende digitali e società di consulenza;",
        <>ti interessa un percorso di certificazione lineare: <A slug="aws-cloud-practitioner">Cloud Practitioner</A> e poi <A slug="aws-solutions-architect-associate">Solutions Architect – Associate</A>;</>,
        "vuoi basi trasferibili: capito AWS, imparare le altre piattaforme è molto più rapido.",
      ]} />
      <P>Se vuoi capire meglio la piattaforma, parti dalla guida su <A slug="aws-cos-e">AWS: cos'è e come funziona</A>.</P>

      <H2 id="azure">Quando scegliere Azure</H2>
      <Card tone="border-border" title="Azure fa per te se..." items={[
        "lavori già in un'azienda Microsoft, con Windows Server, Active Directory o Microsoft 365: il passaggio al cloud sarà quasi certamente su Azure;",
        "vieni dal mondo dei sistemisti Windows: molte competenze che hai già sono direttamente utili;",
        "nella tua zona gli annunci chiedono soprattutto Azure: è il criterio più concreto di tutti;",
        "punti alla pubblica amministrazione o alle grandi aziende tradizionali, dove l'ecosistema Microsoft è molto presente.",
      ]} />

      <H2 id="google">E Google Cloud?</H2>
      <P>Google Cloud è il terzo grande fornitore, forte soprattutto su dati, analisi e intelligenza artificiale. Per chi inizia e punta al lavoro in Italia, di solito ha senso come <strong>seconda</strong> piattaforma, non come prima. I concetti restano gli stessi, quindi il passaggio è semplice.</P>

      <H2 id="mercato">Come verificare cosa chiede il mercato nella tua zona</H2>
      <P>Invece di fidarti delle opinioni, fai un test di dieci minuti:</P>
      <Steps items={[
        "apri LinkedIn e un portale di annunci;",
        "cerca “cloud engineer” nella tua città o regione;",
        "conta in quanti annunci compare AWS, in quanti Azure e in quanti entrambi;",
        "ripeti la ricerca per “junior” e per le aziende in cui vorresti lavorare.",
      ]} />
      <P>In mezz'ora sai qual è la piattaforma più richiesta dove vuoi lavorare tu. È il dato che conta davvero.</P>

      <Course title="Hai scelto AWS?" text="Diventa Cloud Engineer in 90 giorni ti porta dalle basi alle certificazioni AWS Cloud Practitioner e Solutions Architect – Associate, con progetti per il portfolio e preparazione al colloquio." />

      <H2 id="certificazioni">Le certificazioni: AWS e Azure a confronto</H2>
      <Table head={["Livello", "AWS", "Azure"]} rows={[
        ["Ingresso", "Cloud Practitioner (CLF-C02)", "Azure Fundamentals (AZ-900)"],
        ["Ruolo tecnico principale", "Solutions Architect – Associate (SAA-C03)", "Azure Administrator (AZ-104)"],
        ["Progettazione avanzata", "Solutions Architect – Professional", "Azure Solutions Architect Expert (AZ-305)"],
      ]} />
      <P>Sul lato AWS trovi tutto nella guida sulle <A slug="certificazioni-aws">certificazioni AWS</A>. Una differenza pratica: molte certificazioni Microsoft di livello tecnico vanno rinnovate ogni anno con una verifica online, mentre quelle AWS valgono 3 anni. Controlla sempre le regole aggiornate sui siti ufficiali prima di iniziare.</P>

      <H2 id="strategia">La strategia che funziona: una piattaforma alla volta</H2>
      <P>L'errore più comune è studiare AWS e Azure insieme “per non chiudersi porte”. Il risultato è conoscerle male entrambe. La strategia che funziona è:</P>
      <Steps items={[
        "scegli una piattaforma in base a obiettivo e mercato;",
        "portala fino a una certificazione tecnica e a qualche progetto pratico;",
        "trova il primo lavoro;",
        "aggiungi la seconda piattaforma, che imparerai in una frazione del tempo.",
      ]} />
      <P>Molte aziende oggi usano più cloud insieme: chi conosce bene una piattaforma e le basi di un'altra ha un profilo molto interessante. Il percorso completo è nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>

      <H2 id="faq">Domande frequenti</H2>
      <div className="mt-6 space-y-3">
        {FAQ.map(([q, a]) => (
          <details key={q} className="group rounded-2xl border border-border p-5">
            <summary className="flex cursor-pointer list-none items-center gap-3 font-extrabold"><HelpCircle className="h-5 w-5 shrink-0 text-brand-blue" />{q}</summary>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{a}</p>
          </details>
        ))}
      </div>

      <H2 id="sintesi">In sintesi</H2>
      <Bullets items={[
        "AWS e Azure offrono servizi molto simili, con nomi diversi.",
        "AWS è la scelta più comune per chi parte da zero: più diffuso e con un percorso di certificazione lineare.",
        "Azure conviene se lavori o vuoi lavorare in aziende legate all'ecosistema Microsoft.",
        "Il criterio più concreto è controllare gli annunci della tua zona.",
        "Impara una piattaforma alla volta: la seconda arriverà molto più in fretta.",
      ]} />
      <Course title="Hai scelto AWS e vuoi un percorso guidato?" text="Scopri Diventa Cloud Engineer in 90 giorni: dalle basi alle certificazioni, fino al primo lavoro." />
    </div>
  );
}
