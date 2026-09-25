import { Check, KeyRound, Lightbulb, ShieldCheck, Sparkles, Terminal, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const toc = [
  { id: "cos-e", label: "Cos'è e a cosa serve" },
  { id: "elementi", label: "I 4 elementi di IAM" },
  { id: "root", label: "L'utente root" },
  { id: "utenti-gruppi", label: "Utenti e gruppi" },
  { id: "ruoli", label: "I ruoli IAM" },
  { id: "policy", label: "Le policy IAM" },
  { id: "valutazione", label: "Come AWS decide" },
  { id: "best-practice", label: "Best practice" },
  { id: "esercizio", label: "Esercizio pratico" },
  { id: "errori", label: "Gli errori più comuni" },
  { id: "esami", label: "IAM agli esami AWS" },
  { id: "faq", label: "Domande frequenti" },
  { id: "sintesi", label: "In sintesi" },
];

const A = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <Link to="/blog/$slug" params={{ slug }} className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:decoration-brand-blue">{children}</Link>
);
const Home = ({ children }: { children: ReactNode }) => (
  <Link to="/" className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:decoration-brand-blue">{children}</Link>
);
const H2 = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="scroll-mt-24 pt-14 font-blog-display text-3xl font-extrabold leading-tight sm:text-4xl">{children}</h2>
);
const P = ({ children }: { children: ReactNode }) => <p className="mt-5 text-lg leading-relaxed text-brand-ink/85">{children}</p>;
const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-4 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-3 text-lg leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><span>{t}</span></li>)}</ul>
);
const C = ({ children }: { children: ReactNode }) => <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-brand-blue">{children}</code>;
const Numbered = ({ items }: { items: ReactNode[] }) => (
  <div className="mt-6 space-y-3">{items.map((t, i) => (
    <div key={i} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><p className="leading-relaxed">{t}</p></div>
  ))}</div>
);

const POLICY = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket", "s3:GetObject"],
      "Resource": [
        "arn:aws:s3:::mio-bucket-aziendale",
        "arn:aws:s3:::mio-bucket-aziendale/*"
      ]
    }
  ]
}`;

const elementi: [string, string, string][] = [
  ["Utente", "Un'identità con credenziali a lungo termine", "Uno sviluppatore, uno script"],
  ["Gruppo", "Un insieme di utenti con gli stessi permessi", "\"Sviluppatori\", \"Amministratori\""],
  ["Ruolo", "Un'identità senza credenziali fisse, che si \"assume\" temporaneamente", "Un server EC2 che deve leggere da S3"],
  ["Policy", "Un documento che descrive i permessi", "\"Può leggere il bucket X\""],
];

const errori: [string, ReactNode][] = [
  ["Dare AdministratorAccess a tutti \"per fare prima\"", <>Funziona, ma significa che un errore o una credenziale rubata possono distruggere l'intero account.</>],
  ["Pubblicare chiavi di accesso su GitHub", <>Succede più spesso di quanto pensi, e ci sono programmi automatici che le cercano di continuo. Usa sempre il .gitignore, come spiego nel <A slug="git-tutorial">Git tutorial</A>, e se capita, disattiva subito le chiavi.</>],
  ["Usare \"Action\": \"*\" e \"Resource\": \"*\"", <>Una policy così consente tutto su tutto. Scrivi sempre azioni e risorse specifiche.</>],
  ["Salvare chiavi sui server EC2", <>Assegna invece un ruolo all'istanza: le credenziali temporanee vengono gestite in automatico da AWS.</>],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "AWS IAM costa?", a: <>No, IAM è gratuito. Paghi solo i servizi AWS che le tue identità usano.</> },
  { q: "Che differenza c'è tra utente e ruolo IAM?", a: <>L'utente ha credenziali permanenti e rappresenta una persona o un'applicazione. Il ruolo non ha credenziali fisse: viene assunto temporaneamente da chi ne ha il diritto, come un servizio AWS o un utente di un altro account.</> },
  { q: "Cos'è IAM Identity Center?", a: <>È il servizio AWS consigliato per gestire l'accesso delle persone a uno o più account AWS, con un'unica identità e credenziali temporanee. È la scelta standard nelle aziende.</> },
  { q: "Cos'è un ARN?", a: <>È l'Amazon Resource Name, l'identificativo univoco di ogni risorsa AWS. Nelle policy si usa per indicare esattamente su quale risorsa si applica un permesso.</> },
  { q: "Cosa sono i permission boundary e le SCP?", a: <>Sono strumenti avanzati per limitare i permessi massimi. Un permission boundary fissa il tetto dei permessi di un utente o di un ruolo. Le SCP (Service Control Policy) di AWS Organizations fissano il tetto per interi account. Non concedono permessi: stabiliscono fin dove si può arrivare.</> },
  { q: "Da dove inizio per imparare IAM?", a: <>Proteggi l'utente root con l'MFA, crea un utente amministratore separato, poi esercitati a scrivere policy con permessi limitati, per esempio l'accesso in sola lettura a un singolo bucket S3.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">AWS IAM decide chi può fare cosa su un account AWS. Crei identità per persone e applicazioni e dai a ciascuna solo i permessi che le servono.</p>
      </div>
      <P>AWS IAM (Identity and Access Management) è il servizio di Amazon Web Services che decide chi può fare cosa su un account AWS. Con IAM crei identità per persone e applicazioni, e assegni a ciascuna solo i permessi di cui ha bisogno: leggere un bucket, avviare un server, modificare un database.</P>
      <P>È uno dei servizi più importanti di tutto AWS: quasi ogni incidente di sicurezza nel cloud nasce da permessi configurati male. In questa guida trovi AWS IAM spiegato in modo semplice: utenti, gruppi, ruoli e policy, un esempio pratico di policy, le best practice di sicurezza e gli errori da evitare.</P>

      <H2 id="cos-e">AWS IAM: cos'è e a cosa serve</H2>
      <P>IAM risponde a due domande:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border p-5"><p className="text-xs font-extrabold uppercase text-brand-blue">Autenticazione</p><p className="mt-2 font-blog-display text-2xl font-extrabold">Chi sei?</p><p className="mt-2 leading-relaxed text-brand-ink/80">Per esempio, un utente che accede con password e codice MFA, o un'applicazione che usa credenziali temporanee.</p></div>
        <div className="rounded-2xl border border-border p-5"><p className="text-xs font-extrabold uppercase text-brand-blue">Autorizzazione</p><p className="mt-2 font-blog-display text-2xl font-extrabold">Cosa puoi fare?</p><p className="mt-2 leading-relaxed text-brand-ink/80">Per esempio, leggere i file di un bucket S3 ma non cancellarli.</p></div>
      </div>
      <P>Tre caratteristiche da ricordare:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["È gratuito", "Non paghi niente per utenti, gruppi, ruoli e policy."],
          ["È globale", "Non si configura regione per regione, vale per tutto l'account."],
          ["Tutto è negato per default", "Una nuova identità non può fare nulla finché non le assegni un permesso esplicito."],
        ].map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-3xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>

      <H2 id="elementi">I 4 elementi di IAM</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[36rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Elemento</th><th className="p-3">Cos'è</th><th className="p-3">Esempio</th></tr></thead>
          <tbody>{elementi.map(([e, d, x], i) => (
            <tr key={e} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold text-brand-blue">{e}</td><td className="p-3 text-brand-ink/80">{d}</td><td className="p-3 text-brand-ink/70">{x}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Le policy si assegnano a utenti, gruppi e ruoli. Sono loro a definire, concretamente, cosa ciascuna identità può fare.</P>

      <H2 id="root">L'utente root: la prima cosa da proteggere</H2>
      <P>Quando crei un account AWS, ottieni l'<strong>utente root</strong>: l'identità con cui ti sei registrato, che ha accesso illimitato a tutto, fatturazione compresa. Proprio per questo va protetto e usato il meno possibile.</P>
      <div className="mt-6 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/10 p-6">
        <p className="flex items-center gap-2 font-extrabold"><ShieldCheck className="h-5 w-5 text-brand-yellow-deep" /> Le tre regole d'oro</p>
        <Bullets items={[
          <>attiva subito l'autenticazione a più fattori (<strong>MFA</strong>) sull'utente root;</>,
          <><strong>non creare chiavi di accesso</strong> per l'utente root;</>,
          <>usalo solo per le poche operazioni che lo richiedono, e per tutto il resto crea identità separate con permessi limitati.</>,
        ]} />
      </div>

      <H2 id="utenti-gruppi">Utenti e gruppi IAM</H2>
      <P>Un utente IAM rappresenta una persona o un'applicazione, con credenziali proprie: una password per la console e, se serve, delle chiavi di accesso per usare AWS da riga di comando o da codice.</P>
      <P>Invece di assegnare i permessi a ogni utente, conviene usare i <strong>gruppi</strong>: crei un gruppo "Sviluppatori", gli assegni le policy giuste e ci aggiungi le persone. Quando qualcuno cambia ruolo, lo sposti di gruppo.</P>
      <div className="mt-6 rounded-2xl border border-brand-blue/20 bg-secondary p-5 leading-relaxed">Nelle aziende, per l'accesso delle persone, AWS raccomanda oggi <strong>IAM Identity Center</strong>, che permette di usare un'unica identità aziendale su più account AWS con credenziali temporanee. Gli utenti IAM classici restano utili soprattutto per imparare e per casi specifici.</div>

      <H2 id="ruoli">I ruoli IAM</H2>
      <P>Un ruolo è un'identità che non ha password né chiavi fisse. Chi ne ha il diritto lo "assume" e ottiene credenziali temporanee, che scadono automaticamente.</P>
      <P>I ruoli si usano soprattutto in tre casi:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Servizi AWS verso altri servizi", "Per esempio un server EC2 che legge file da S3. Invece di salvare chiavi sul server, gli assegni un ruolo."],
          ["Accesso tra account diversi", "Un utente di un account assume un ruolo in un altro account."],
          ["Identità federate", "L'accesso delle persone con l'identità aziendale, tramite IAM Identity Center."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><KeyRound className="h-6 w-6 text-brand-blue" /><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 font-semibold leading-relaxed">La regola pratica: se puoi usare un ruolo al posto di chiavi fisse, usa il ruolo. Le credenziali temporanee riducono drasticamente il rischio in caso di furto.</div>

      <H2 id="policy">Le policy IAM: come sono fatte</H2>
      <P>Una policy è un documento in formato JSON. Ecco un esempio che consente di leggere i file di un bucket S3 specifico:</P>
      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-brand-ink">
        <div className="flex items-center gap-2 border-b border-primary-foreground/10 px-4 py-2 text-xs font-bold text-primary-foreground/70"><Terminal className="h-4 w-4" />policy.json</div>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-primary-foreground"><code>{POLICY}</code></pre>
      </div>
      <P>Gli elementi principali:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          ["Effect", "Allow (consenti) o Deny (nega)."],
          ["Action", "Le operazioni consentite o negate, come s3:GetObject per leggere un file."],
          ["Resource", "Su quali risorse si applica, indicate con il loro ARN, l'identificativo univoco di ogni risorsa AWS."],
          ["Condition (facoltativa)", "Condizioni aggiuntive, per esempio consentire l'accesso solo se è attiva l'MFA."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-mono font-bold text-brand-blue">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Le policy possono essere <strong>gestite da AWS</strong>, già pronte per casi comuni, <strong>gestite da te</strong>, create su misura e riutilizzabili, oppure <strong>inline</strong>, scritte direttamente dentro una singola identità.</P>

      <H2 id="valutazione">Come AWS decide se consentire un'azione</H2>
      <P>Quando un'identità prova a fare qualcosa, AWS valuta tutte le policy che la riguardano con tre regole, in quest'ordine:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Deny esplicito vince sempre", "Se una qualsiasi policy nega l'azione, è negata.", "border-destructive/30 bg-destructive/5"],
          ["Altrimenti serve un Allow esplicito", "Se almeno una policy la consente, è consentita.", "border-brand-blue/30 bg-brand-blue/5"],
          ["Nessuna policy? Negata", "È il cosiddetto \"deny implicito\".", "border-border bg-secondary"],
        ].map(([t, d, c], i) => (
          <div key={t} className={`rounded-2xl border p-5 ${c}`}><p className="text-xs font-extrabold uppercase text-brand-ink/50">Regola {i + 1}</p><p className="mt-1 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Questo schema spiega la maggior parte dei problemi di accesso che incontrerai: quasi sempre manca un Allow o c'è un Deny da qualche parte.</P>
      <div className="mt-8 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="font-blog-display text-2xl font-extrabold">Vuoi imparare IAM e tutti i servizi AWS con un percorso guidato?</p>
        <p className="mt-3 text-lg leading-relaxed"><Home>Diventa Cloud Engineer in 90 giorni</Home> ti prepara alle certificazioni CLF-C02 e SAA-C03, con laboratori pratici, simulatore d'esame e preparazione al colloquio.</p>
      </div>

      <H2 id="best-practice">Best practice di sicurezza con IAM</H2>
      <Bullets items={[
        <><strong>Principio del privilegio minimo</strong>: concedi solo i permessi strettamente necessari, e aggiungine altri solo quando servono.</>,
        <><strong>MFA per tutte le persone</strong>, non solo per l'utente root.</>,
        <><strong>Ruoli e credenziali temporanee</strong> al posto delle chiavi di accesso a lungo termine.</>,
        <><strong>Ruota le chiavi di accesso</strong> che sei costretto a usare, ed elimina quelle inutilizzate.</>,
        <><strong>Usa i gruppi</strong> per gestire i permessi delle persone, non le singole identità.</>,
        <><strong>Controlla periodicamente i permessi</strong> con strumenti come IAM Access Analyzer, che segnala accessi troppo ampi o non utilizzati.</>,
      ]} />

      <H2 id="esercizio">Esercizio pratico: configurare IAM su un nuovo account</H2>
      <P>Se hai appena creato un account AWS, questo è l'esercizio giusto per iniziare:</P>
      <Numbered items={[
        <><strong>Attiva l'MFA sull'utente root</strong>, dalla pagina delle credenziali di sicurezza.</>,
        <><strong>Crea un gruppo "Amministratori"</strong> e assegnagli la policy gestita per l'accesso amministrativo.</>,
        <><strong>Crea un utente per te</strong>, aggiungilo al gruppo e attiva l'MFA anche su di lui. Da questo momento usa solo questo utente.</>,
        <><strong>Crea un gruppo "SolaLettura"</strong> con una policy di sola lettura e un utente di prova: accedi con lui e verifica che non possa creare o eliminare niente.</>,
        <><strong>Scrivi una tua policy</strong> che consenta di leggere un solo bucket S3, come nell'esempio sopra, e prova ad accedere a un altro bucket: vedrai il deny implicito in azione.</>,
      ]} />
      <P>In meno di un'ora avrai toccato con mano tutti i concetti di questa guida.</P>

      <H2 id="errori">Gli errori più comuni</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {errori.map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="esami">IAM agli esami di certificazione AWS</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border p-5"><p className="text-xs font-extrabold uppercase text-brand-blue">Cloud Practitioner</p><p className="mt-2 font-blog-display text-4xl font-extrabold">30%</p><p className="mt-1 leading-relaxed text-brand-ink/80">IAM rientra nel dominio Security and Compliance.</p></div>
        <div className="rounded-2xl border border-border p-5"><p className="text-xs font-extrabold uppercase text-brand-blue">Solutions Architect – Associate</p><p className="mt-2 font-blog-display text-4xl font-extrabold">30%</p><p className="mt-1 leading-relaxed text-brand-ink/80">IAM è il cuore del dominio Design Secure Architectures.</p></div>
      </div>
      <P>IAM è uno degli argomenti più presenti negli esami AWS. Trovi tutti i dettagli nella guida alla <A slug="aws-cloud-practitioner">Cloud Practitioner</A> e nella guida alla <A slug="aws-solutions-architect-associate">SAA-C03</A>.</P>

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
          "AWS IAM decide chi può fare cosa sul tuo account AWS, ed è gratuito e globale.",
          "I suoi elementi sono utenti, gruppi, ruoli e policy, e tutto è negato per default.",
          "I ruoli, con credenziali temporanee, sono preferibili alle chiavi di accesso fisse.",
          "Le policy sono documenti JSON con Effect, Action, Resource e, facoltativamente, Condition.",
          "Un Deny esplicito vince sempre, e il principio del privilegio minimo è la regola base della sicurezza.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi padroneggiare IAM e i servizi AWS per le certificazioni e il lavoro?</p>
        <Link to="/" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Scopri Diventa Cloud Engineer in 90 giorni</Link>
      </div>
    </div>
  );
}
