import { Link } from "@tanstack/react-router";
import { Blocks, Check, Cloud, CreditCard, Globe2, HelpCircle, Lightbulb, Server, ShieldCheck, Sparkles, Store, X } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "definizione", label: "AWS cos'è in breve" },
  { id: "esempio", label: "Un esempio per capire" },
  { id: "come-funziona", label: "Come funziona AWS" },
  { id: "infrastruttura", label: "Regioni e Availability Zone" },
  { id: "servizi", label: "I servizi principali" },
  { id: "chi-lo-usa", label: "Chi usa AWS" },
  { id: "costi", label: "Quanto costa AWS" },
  { id: "concorrenti", label: "AWS, Azure e Google Cloud" },
  { id: "perche-imparare", label: "Perché imparare AWS" },
  { id: "iniziare", label: "Come iniziare in 5 passi" },
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

const servizi: [string, string, string][] = [
  ["Calcolo", "Amazon EC2", "Server virtuali da creare in pochi minuti"],
  ["Calcolo", "AWS Lambda", "Eseguire codice senza gestire server"],
  ["Storage", "Amazon S3", "Archiviare file di qualsiasi tipo"],
  ["Database", "Amazon RDS", "Database relazionali gestiti"],
  ["Database", "Amazon DynamoDB", "Database NoSQL velocissimo"],
  ["Rete", "Amazon VPC", "La tua rete privata nel cloud"],
  ["Rete", "Amazon CloudFront", "Distribuire contenuti velocemente in tutto il mondo"],
  ["Sicurezza", "AWS IAM", "Decidere chi può fare cosa"],
  ["Monitoraggio", "Amazon CloudWatch", "Controllare prestazioni e allarmi"],
];

const passi: [string, string][] = [
  ["Crea un account AWS", "Serve una carta di pagamento, anche se userai solo il piano gratuito."],
  ["Proteggi l'account principale", "Attiva subito l'autenticazione a due fattori sull'utente root e crea un utente separato per l'uso quotidiano."],
  ["Imposta un budget con un avviso", "Anche solo pochi euro: ti eviti sorprese."],
  ["Fai il primo esercizio con S3", "Crea un bucket e carica un file: è il modo più semplice per prendere confidenza con la console."],
  ["Avvia la tua prima istanza EC2", "Un piccolo server virtuale, da spegnere ed eliminare appena hai finito."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Cos'è AWS in parole semplici?", a: <>È un enorme "noleggio" di computer e servizi informatici di Amazon, accessibile via internet. Invece di comprare server, li attivi su AWS quando ti servono e paghi solo per il tempo in cui li usi.</> },
  { q: "AWS è gratis?", a: <>No, ma offre un piano gratuito per i nuovi account, con cui puoi fare pratica senza spendere se rispetti i limiti previsti. Oltre quei limiti si paga a consumo.</> },
  { q: "AWS è di Amazon?", a: <>Sì. Amazon Web Services è la divisione di Amazon dedicata ai servizi cloud, ed è una delle parti più redditizie dell'intero gruppo.</> },
  { q: "Serve saper programmare per usare AWS?", a: <>Per iniziare no: moltissime operazioni si fanno dalla console web. Per lavorarci in modo professionale serve invece un po' di scripting, per automatizzare le attività ripetitive.</> },
  { q: "AWS è sicuro?", a: <>L'infrastruttura di AWS è progettata con standard di sicurezza molto elevati. La maggior parte dei problemi nasce invece da configurazioni sbagliate da parte di chi la usa, per esempio permessi troppo ampi o dati lasciati pubblici. Per questo la sicurezza è una delle competenze più importanti per chi lavora su AWS.</> },
  { q: "Che differenza c'è tra AWS e cloud computing?", a: <>Il cloud computing è il modello generale: usare risorse informatiche via internet, pagando a consumo. AWS è uno dei fornitori che offrono questo modello, il più diffuso.</> },
];

const QuizBox = ({ title, text }: { title: string; text: string }) => (
  <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
    <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> {title}</p>
    <p className="mt-3 text-lg leading-relaxed">{text}</p>
    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
  </div>
);

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">AWS, cioè Amazon Web Services, è la piattaforma di cloud computing di Amazon: server, spazio di archiviazione, database e molto altro da usare via internet, pagando solo quello che consumi.</p>
      </div>
      <P>AWS, cioè Amazon Web Services, è la piattaforma di cloud computing di Amazon: un insieme di servizi che permette ad aziende e persone di usare server, spazio di archiviazione, database e molto altro via internet, pagando solo quello che consumano. Invece di comprare e mantenere computer propri, si "noleggiano" le risorse che servono, quando servono.</P>
      <P>Se ti stai chiedendo cos'è AWS e perché se ne parla tanto, sei nel posto giusto. In questa guida ti spiego AWS cos'è in modo semplice, come funziona, quali sono i servizi principali, quanto costa e come iniziare a usarlo, anche se non hai mai lavorato nel cloud.</P>

      <H2 id="definizione">AWS cos'è: la definizione in breve</H2>
      <P>AWS è il ramo di Amazon che vende servizi cloud. Amazon ha iniziato a offrirli pubblicamente nel 2006, partendo da un'idea semplice: l'infrastruttura tecnologica che aveva costruito per il proprio e-commerce poteva essere messa a disposizione di altre aziende.</P>
      <P>Oggi AWS è il più grande fornitore di cloud pubblico al mondo e offre centinaia di servizi. Tre caratteristiche lo definiscono:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {([
          [Server, "On demand", "Attivi una risorsa in pochi minuti, quando ti serve, e la spegni quando hai finito."],
          [CreditCard, "Pagamento a consumo", "Paghi solo ciò che usi, un po' come la bolletta della luce."],
          [Globe2, "Accesso via internet", "Gestisci tutto da un browser o con strumenti da riga di comando, da qualsiasi luogo."],
        ] as const).map(([Icon, t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><Icon className="h-6 w-6 text-brand-blue" /><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Se vuoi prima capire il concetto generale di cloud, parti dalla guida su <A slug="cloud-computing-cos-e">cos'è il cloud computing</A>.</P>

      <H2 id="esempio">Un esempio per capire Amazon Web Services</H2>
      <P>Immagina di aprire un negozio online.</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-5">
          <p className="flex items-center gap-2 font-extrabold"><X className="h-5 w-5 text-destructive" /> Senza il cloud</p>
          <p className="mt-2 leading-relaxed text-brand-ink/80">Dovresti comprare dei server, metterli in una stanza con aria condizionata e corrente di riserva, pagare qualcuno che li mantenga e sperare che reggano il traffico del Black Friday. Se il traffico raddoppia, devi comprare altri server e aspettare settimane. Se cala, i server restano lì, pagati e inutilizzati.</p>
        </div>
        <div className="rounded-2xl border border-brand-blue/25 bg-brand-blue/5 p-5">
          <p className="flex items-center gap-2 font-extrabold"><Cloud className="h-5 w-5 text-brand-blue" /> Con AWS</p>
          <p className="mt-2 leading-relaxed text-brand-ink/80">Crei i server che ti servono in pochi minuti. Il giorno del Black Friday ne aggiungi altri, anche in automatico. Il giorno dopo li spegni e smetti di pagarli. Nessuna stanza, nessun hardware da gestire: Amazon si occupa dei data center, tu ti occupi della tua applicazione.</p>
        </div>
      </div>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6"><Store className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><p className="font-semibold leading-relaxed">È questo il cuore di Amazon Web Services: trasformare l'infrastruttura informatica da un investimento fisso a un servizio flessibile.</p></div>

      <H2 id="come-funziona">Come funziona AWS</H2>
      <P>Per usare AWS crei un account, e da lì accedi alla console, un'interfaccia web da cui puoi attivare e configurare tutti i servizi. Chi lavora nel settore usa anche strumenti da riga di comando e codice, per automatizzare le operazioni.</P>
      <P>Il funzionamento si basa su tre elementi:</P>
      <div className="mt-6 space-y-3">
        {([
          [Blocks, "I servizi come mattoncini", "Ogni servizio fa una cosa precisa: uno fornisce server, uno archivia file, uno gestisce database, uno controlla gli accessi. Combinandoli costruisci qualsiasi applicazione, come con i mattoncini di un gioco di costruzioni."],
          [ShieldCheck, "La responsabilità condivisa", "AWS protegge l'infrastruttura fisica: data center, hardware, rete globale. Tu sei responsabile di come configuri i servizi e di chi può accedere ai tuoi dati."],
          [CreditCard, "Il pagamento a consumo", "Ogni servizio ha il suo modello di prezzo, per esempio a ore di utilizzo, a gigabyte archiviato o a numero di richieste. A fine mese paghi la somma di ciò che hai usato."],
        ] as const).map(([Icon, t, d]) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-brand-blue" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="infrastruttura">L'infrastruttura globale: Regioni e Availability Zone</H2>
      <P>I servizi AWS girano in data center distribuiti in tutto il mondo, organizzati in due livelli:</P>
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-secondary p-5 sm:p-6">
        <p className="font-blog-display text-lg font-extrabold text-brand-blue">Regione</p>
        <p className="mt-1 leading-relaxed text-brand-ink/80">Aree geografiche, come Milano, Francoforte o Irlanda. Scegli la Regione in base a dove si trovano i tuoi utenti e alle regole sui dati che devi rispettare.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {["Zona A", "Zona B", "Zona C"].map((z) => (
            <div key={z} className="rounded-xl border border-dashed border-brand-blue/40 bg-background p-4 text-center"><Server className="mx-auto h-5 w-5 text-brand-blue" /><p className="mt-1 text-sm font-extrabold">Availability {z}</p></div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-brand-ink/80"><strong>Availability Zone:</strong> all'interno di ogni Regione ci sono più zone, cioè gruppi di data center separati fisicamente, con corrente e rete indipendenti. Se una zona ha un problema, le altre continuano a funzionare.</p>
      </div>
      <P>Distribuire un'applicazione su più Availability Zone è il modo in cui le aziende restano online anche quando qualcosa si rompe. È uno dei concetti più importanti che impari studiando AWS.</P>

      <H2 id="servizi">I servizi AWS principali</H2>
      <P>AWS ha centinaia di servizi, ma una manciata copre la maggior parte degli usi:</P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[32rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Categoria</th><th className="p-3">Servizio</th><th className="p-3">A cosa serve</th></tr></thead>
          <tbody>{servizi.map(([c, s, d], i) => (
            <tr key={s} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 text-brand-ink/70">{c}</td><td className="p-3 font-extrabold">{s}</td><td className="p-3 text-brand-ink/80">{d}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Se vuoi approfondire i tre servizi fondamentali, leggi le guide su <A slug="amazon-ec2">Amazon EC2</A>, <A slug="amazon-s3">Amazon S3</A> e <A slug="aws-iam">AWS IAM</A>. Per capire in che modo questi servizi si dividono tra infrastruttura, piattaforme e software pronto all'uso, trovi la spiegazione nella guida su <A slug="iaas-paas-saas">IaaS, PaaS e SaaS</A>.</P>

      <H2 id="chi-lo-usa">Chi usa AWS e per fare cosa</H2>
      <P>AWS lo usano startup appena nate, grandi aziende, enti pubblici e singoli sviluppatori. Alcuni esempi di cosa ci si costruisce:</P>
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {[
          "Siti web e e-commerce che devono reggere picchi di traffico",
          "App mobili e i loro backend",
          "Servizi di streaming audio e video",
          "Analisi di grandi quantità di dati",
          "Backup e disaster recovery, cioè copie di sicurezza per ripartire in caso di guasto",
          "Applicazioni di intelligenza artificiale, sempre più diffuse",
        ].map((t) => (
          <div key={t} className="flex gap-3 rounded-xl bg-secondary px-4 py-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" /><span className="font-semibold">{t}</span></div>
        ))}
      </div>
      <P>Anche molti servizi che usi ogni giorno, senza saperlo, girano su AWS o su piattaforme simili.</P>

      <H2 id="costi">Quanto costa AWS</H2>
      <P>Non c'è un canone fisso: AWS si paga a consumo. Un piccolo progetto personale può costare pochi euro al mese, o anche niente; un'applicazione aziendale può costare migliaia di euro.</P>
      <P>Tre cose da sapere se inizi:</P>
      <Bullets items={[
        <><strong>AWS offre un piano gratuito per i nuovi account</strong>, con cui puoi provare molti servizi senza spendere. Le condizioni cambiano nel tempo, quindi leggile sul sito ufficiale quando crei l'account.</>,
        <><strong>Alcune risorse costano anche se non le usi</strong>, finché restano attive. Per questo, dopo ogni esercizio, conviene eliminare ciò che hai creato.</>,
        <><strong>Imposta subito un budget con un avviso.</strong> Con AWS Budgets ricevi un'email se la spesa supera la soglia che hai scelto. È la prima cosa da fare dopo aver creato l'account.</>,
      ]} />
      <QuizBox title="Stai pensando a un lavoro nel cloud?" text="Prima di iniziare a studiare, fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per lavorare con AWS." />

      <H2 id="concorrenti">AWS, Azure e Google Cloud</H2>
      <P>AWS non è l'unica piattaforma cloud. I suoi principali concorrenti sono Microsoft Azure e Google Cloud. Offrono servizi molto simili, con nomi diversi:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[["AWS", "EC2"], ["Azure", "Virtual Machine"], ["Google Cloud", "Compute Engine"]].map(([p, n]) => (
          <div key={p} className="rounded-2xl border border-border p-5 text-center"><p className="text-xs font-extrabold uppercase text-brand-ink/60">{p}</p><p className="mt-1 font-mono font-extrabold text-brand-blue">{n}</p></div>
        ))}
      </div>
      <p className="mt-2 text-center text-sm text-brand-ink/60">Lo stesso server virtuale, tre nomi diversi.</p>
      <P>Per chi inizia, AWS è spesso la scelta più comune perché è la piattaforma più diffusa. E una volta capito AWS, imparare le altre richiede molto meno tempo, perché i concetti sono gli stessi. Trovi il confronto completo in <A slug="aws-o-azure">AWS o Azure: quale imparare per primo</A>.</P>

      <H2 id="perche-imparare">Perché imparare AWS conviene</H2>
      <P>Le aziende che usano AWS hanno bisogno di persone che sappiano progettarlo, gestirlo e mantenerlo sicuro. È da qui che nascono ruoli come il cloud engineer e il <A slug="devops-engineer">DevOps engineer</A>, tra i più richiesti nel settore tecnologico.</P>
      <P>Il vantaggio per chi parte da zero è che le competenze su AWS si possono dimostrare in modo oggettivo, con certificazioni ufficiali riconosciute in tutto il mondo. Trovi quali sono e da quale partire nella <A slug="certificazioni-aws">guida sulle certificazioni AWS</A>, mentre il percorso completo è nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>

      <H2 id="iniziare">Come iniziare con AWS in 5 passi</H2>
      <div className="mt-6 space-y-3">
        {passi.map(([t, d], i) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>
      <P>Da qui, il passo successivo è seguire un percorso ordinato: prima i concetti di base, poi la certificazione Cloud Practitioner, di cui trovi tutto nella <A slug="aws-cloud-practitioner">guida alla CLF-C02</A>.</P>

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
          "AWS, Amazon Web Services, è la piattaforma cloud di Amazon: server, storage, database e centinaia di altri servizi da usare via internet, pagando a consumo.",
          "Funziona come un insieme di mattoncini che si combinano per costruire qualsiasi applicazione.",
          "I suoi data center sono organizzati in Regioni e Availability Zone, per garantire che i servizi restino attivi anche in caso di guasti.",
          "Imparare AWS apre la strada a ruoli molto richiesti, come il cloud engineer, e le competenze si possono certificare.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi capire se lavorare con AWS fa per te?</p>
        <p className="mt-3 text-lg">Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>
    </div>
  );
}
