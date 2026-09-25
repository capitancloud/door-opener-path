import { Link } from "@tanstack/react-router";
import { Building2, Check, Cloud, Cpu, HelpCircle, Layers, Lightbulb, Network, Smartphone, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "significato", label: "Il significato della parola" },
  { id: "esempio", label: "Un esempio quotidiano" },
  { id: "come-funziona", label: "Come funziona" },
  { id: "caratteristiche", label: "Le 5 caratteristiche" },
  { id: "modelli", label: "IaaS, PaaS e SaaS" },
  { id: "tipi", label: "Pubblico, privato e ibrido" },
  { id: "pro-contro", label: "Vantaggi e svantaggi" },
  { id: "esempi", label: "Esempi in azienda" },
  { id: "fornitori", label: "I principali fornitori" },
  { id: "lavoro", label: "Il cloud e il lavoro" },
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

const caratteristiche: [string, string][] = [
  ["Self-service on demand", "Attivi le risorse da solo, quando vuoi, senza chiedere a nessuno."],
  ["Accesso via rete", "Le usi via internet, da qualsiasi dispositivo."],
  ["Risorse condivise", "Il fornitore serve molti clienti con la stessa infrastruttura, tenendoli separati."],
  ["Elasticità", "Aumenti o riduci le risorse in fretta, anche in automatico, in base al bisogno."],
  ["Servizio misurato", "L'uso viene misurato con precisione, ed è su quella misura che paghi."],
];

const modelli: [string, string, string][] = [
  ["IaaS (Infrastructure as a Service)", "Server, rete e storage da configurare", "Un server virtuale su cui installi tu il software"],
  ["PaaS (Platform as a Service)", "Una piattaforma pronta su cui caricare la tua applicazione", "Un servizio dove carichi il codice e lui pensa al resto"],
  ["SaaS (Software as a Service)", "Un programma pronto all'uso", "La posta elettronica o un gestionale online"],
];

const tipi: [string, string][] = [
  ["Cloud pubblico", "L'infrastruttura è del fornitore ed è condivisa tra molti clienti. È il modello di AWS, Microsoft Azure e Google Cloud."],
  ["Cloud privato", "L'infrastruttura è dedicata a una sola organizzazione, nei suoi data center o in quelli di un fornitore."],
  ["Cloud ibrido", "Una combinazione dei due, per esempio dati sensibili in un cloud privato e applicazioni web nel cloud pubblico."],
  ["Multicloud", "L'uso di più fornitori di cloud pubblico insieme, per esempio AWS per alcuni servizi e Azure per altri."],
];

const vantaggi = ["Niente investimenti iniziali in hardware", "Risorse disponibili in pochi minuti", "Scalabilità: cresci o riduci quando serve", "Alta disponibilità su più data center", "Accesso da ovunque"];
const svantaggi = ["Costi che possono crescere se non controllati", "Dipendenza dalla connessione internet", "Dipendenza dal fornitore, difficile cambiare in fretta", "Serve competenza per configurare bene la sicurezza", "Regole sulla posizione dei dati da rispettare"];

const esempi: [string, string][] = [
  ["Un e-commerce durante i saldi", "Il traffico si moltiplica per qualche giorno. Nel cloud il sito aggiunge server in automatico durante il picco e li spegne quando la domanda torna normale, senza comprare hardware che resterebbe inutilizzato il resto dell'anno."],
  ["Una startup che lancia un'app", "Non ha budget per un data center. Nel cloud parte con poche risorse e pochi euro al mese, e cresce solo se l'app ha successo."],
  ["Uno studio professionale che protegge i suoi dati", "Invece di affidarsi a un disco esterno in ufficio, fa backup automatici nel cloud, su più data center: se in ufficio succede qualcosa, i dati sono al sicuro altrove."],
  ["Un'azienda che analizza grandi quantità di dati", "Per un'analisi che richiede molta potenza di calcolo attiva centinaia di server per poche ore, poi li elimina. Comprarli sarebbe impensabile."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Cloud computing: cos'è in parole semplici?", a: <>È usare computer, spazio di archiviazione e programmi che stanno su internet, nei data center di un fornitore, invece che sul tuo computer o nei server della tua azienda. Li attivi quando servono e paghi solo quello che usi.</> },
  { q: "Il cloud è sicuro?", a: <>Le infrastrutture dei grandi fornitori hanno livelli di sicurezza molto elevati. La maggior parte dei problemi nasce da configurazioni sbagliate di chi le usa, come permessi troppo ampi o dati lasciati accessibili a tutti. La sicurezza nel cloud è una responsabilità condivisa tra fornitore e cliente.</> },
  { q: "Dove sono fisicamente i dati nel cloud?", a: <>In data center reali, distribuiti in varie aree del mondo. I grandi fornitori permettono di scegliere la zona geografica, per esempio l'Italia o l'Unione Europea, anche per rispettare le regole sulla protezione dei dati.</> },
  { q: "Che differenza c'è tra cloud computing e cloud storage?", a: <>Il cloud storage, cioè l'archiviazione di file online, è solo una parte del cloud computing. Il cloud computing comprende anche server, database, reti, software e molto altro.</> },
  { q: "Serve sempre una connessione internet?", a: <>Per accedere ai servizi cloud sì. Alcune applicazioni permettono di lavorare offline e sincronizzare i dati quando torna la connessione, ma il cuore del cloud computing resta l'accesso via rete.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Il cloud computing è l'uso di server, spazio di archiviazione, database e software tramite internet, invece che su computer di proprietà. Si attivano in pochi minuti e si pagano in base al consumo.</p>
      </div>
      <P>Il cloud computing è l'uso di risorse informatiche, come server, spazio di archiviazione, database e software, tramite internet, invece che su computer di proprietà. Le risorse si trovano nei data center di un fornitore, si attivano in pochi minuti e si pagano in base al consumo.</P>
      <P>Lo usi ogni giorno anche se non ci pensi: quando guardi una serie in streaming, salvi le foto dello smartphone online o leggi la posta da un browser. In questa guida ti spiego cos'è il cloud computing in modo semplice, da dove viene il suo nome, come funziona, quali tipi esistono e perché è diventato la base del lavoro nell'IT.</P>

      <H2 id="significato">Cloud computing: il significato della parola</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border p-5"><Cloud className="h-6 w-6 text-brand-blue" /><p className="mt-2 font-blog-display text-xl font-extrabold">Cloud = nuvola</p><p className="mt-1 leading-relaxed text-brand-ink/80">Da decenni, negli schemi di rete, internet viene disegnata proprio come una nuvola: un'area di cui non serve conoscere i dettagli interni, perché basta sapere che "funziona".</p></div>
        <div className="rounded-2xl border border-border p-5"><Cpu className="h-6 w-6 text-brand-blue" /><p className="mt-2 font-blog-display text-xl font-extrabold">Computing = elaborazione</p><p className="mt-1 leading-relaxed text-brand-ink/80">Cioè elaborazione informatica: calcolo, memoria, programmi.</p></div>
      </div>
      <P>Il significato di cloud computing, quindi, è letteralmente <strong>"elaborazione nella nuvola"</strong>: usare potenza di calcolo, memoria e programmi che stanno da qualche parte su internet, senza doversi preoccupare di dove siano fisicamente e di come vengano mantenuti.</P>

      <H2 id="esempio">Cos'è il cloud computing: un esempio quotidiano</H2>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-blue/20 bg-secondary p-6"><Smartphone className="mt-1 h-6 w-6 shrink-0 text-brand-blue" /><p className="leading-relaxed">Pensa alle foto del tuo smartphone. Un tempo stavano solo sul telefono: se lo perdevi, perdevi anche le foto. Oggi molte persone le salvano in automatico su un servizio online. Le foto vengono archiviate nei data center del fornitore, sono accessibili da qualsiasi dispositivo e, se lo spazio non basta, basta pagare un piano più grande.</p></div>
      <P>Le aziende fanno la stessa cosa, ma su scala molto più grande: invece delle foto, spostano nel cloud siti web, applicazioni, database e interi sistemi informatici. E invece di comprare server da tenere in ufficio, li "noleggiano" da un fornitore cloud.</P>

      <H2 id="come-funziona">Come funziona il cloud computing</H2>
      <P>Dietro ogni servizio cloud ci sono tre elementi:</P>
      <div className="mt-6 space-y-3">
        {([
          [Building2, "I data center", "Enormi edifici pieni di server, con corrente, raffreddamento e connessioni di rete ridondanti, gestiti dal fornitore."],
          [Layers, "La virtualizzazione", "Un singolo server fisico viene suddiviso in tanti server \"virtuali\", ognuno dei quali si comporta come un computer indipendente. È questo che permette di creare un server in pochi minuti e di condividere le stesse macchine tra migliaia di clienti in modo isolato e sicuro."],
          [Network, "La rete e il software di gestione", "Tu accedi alle risorse via internet, da un'interfaccia web o tramite codice. Chiedi un server, uno spazio di archiviazione o un database, e il sistema del fornitore lo prepara in automatico."],
        ] as const).map(([Icon, t, d], i) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><Icon className="mt-1 h-6 w-6 shrink-0 text-brand-blue" /><div><p className="font-extrabold"><span className="text-brand-blue">{i + 1}.</span> {t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>
      <P>A fine mese paghi solo quello che hai usato: le ore di funzionamento dei server, i gigabyte archiviati, i dati trasferiti. Come per la luce o l'acqua.</P>

      <H2 id="caratteristiche">Le 5 caratteristiche del cloud computing</H2>
      <P>Secondo la definizione più usata a livello internazionale, quella del NIST, l'istituto americano per gli standard, un servizio è "cloud" se ha cinque caratteristiche:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {caratteristiche.map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-3xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>

      <H2 id="modelli">IaaS, PaaS e SaaS: i modelli di servizio</H2>
      <P>Non tutto il cloud è uguale. Cambia quanto gestisci tu e quanto gestisce il fornitore:</P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[36rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Modello</th><th className="p-3">Cosa ti dà il fornitore</th><th className="p-3">Esempio pratico</th></tr></thead>
          <tbody>{modelli.map(([m, c, e], i) => (
            <tr key={m} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{m}</td><td className="p-3 text-brand-ink/80">{c}</td><td className="p-3 text-brand-ink/70">{e}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Trovi le differenze nel dettaglio, con più esempi, nella guida su <A slug="iaas-paas-saas">IaaS, PaaS e SaaS</A>.</P>

      <H2 id="tipi">Cloud pubblico, privato e ibrido</H2>
      <P>Oltre al tipo di servizio, cambia anche dove si trova l'infrastruttura e chi la usa:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {tipi.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-blog-display text-lg font-extrabold text-brand-blue">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>

      <H2 id="pro-contro">Vantaggi e svantaggi del cloud computing</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-brand-blue/25 bg-brand-blue/5 p-5">
          <p className="flex items-center gap-2 font-extrabold"><ThumbsUp className="h-5 w-5 text-brand-blue" /> Vantaggi</p>
          <ul className="mt-3 space-y-2">{vantaggi.map((v) => <li key={v} className="flex gap-2 leading-relaxed"><Check className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />{v}</li>)}</ul>
        </div>
        <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-5">
          <p className="flex items-center gap-2 font-extrabold"><ThumbsDown className="h-5 w-5 text-destructive" /> Svantaggi</p>
          <ul className="mt-3 space-y-2">{svantaggi.map((v) => <li key={v} className="flex gap-2 leading-relaxed"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />{v}</li>)}</ul>
        </div>
      </div>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6"><Lightbulb className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><p className="leading-relaxed">Il punto chiave è che il cloud non è automaticamente più economico o più sicuro: lo diventa se viene progettato e gestito bene. Ed è proprio per questo che le aziende cercano persone che sappiano farlo.</p></div>

      <H2 id="esempi">Esempi di cloud computing in azienda</H2>
      <P>Per capire perché le aziende scelgono il cloud, ecco quattro situazioni tipiche:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {esempi.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>In tutti questi casi, il vantaggio è lo stesso: usare esattamente le risorse che servono, nel momento in cui servono.</P>

      <H2 id="fornitori">I principali fornitori di cloud computing</H2>
      <P>Il mercato del cloud pubblico è dominato da tre grandi fornitori:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {([
          ["Amazon Web Services (AWS)", <>Il più diffuso. Trovi come funziona nella guida su <A slug="aws-cos-e">AWS: cos'è e come funziona</A>.</>],
          ["Microsoft Azure", <>Molto usato dalle aziende che lavorano già con prodotti Microsoft.</>],
          ["Google Cloud", <>Forte su dati e intelligenza artificiale.</>],
        ] as [string, ReactNode][]).map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-blog-display text-lg font-extrabold text-brand-blue">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Offrono servizi molto simili con nomi diversi. Se stai pensando di impararne uno, trovi il confronto in <A slug="aws-o-azure">AWS o Azure: quale imparare per primo</A>.</P>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Il cloud ti incuriosisce anche come lavoro?</p>
        <p className="mt-3 text-lg leading-relaxed">Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per una professione nel cloud.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="lavoro">Il cloud computing e il lavoro</H2>
      <P>Più aziende si spostano nel cloud, più servono persone capaci di progettare, gestire e proteggere queste infrastrutture. Da qui nascono alcuni dei ruoli più richiesti del settore tecnologico:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {([
          ["Cloud engineer", <>Costruisce e mantiene l'infrastruttura cloud.</>],
          ["DevOps engineer", <>Automatizza il rilascio del software. <A slug="devops-engineer">Scopri il ruolo</A>.</>],
          ["Cloud security specialist", <>Si occupa della sicurezza.</>],
          ["Cloud architect", <>Progetta le soluzioni più complesse.</>],
        ] as [string, ReactNode][]).map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Sono professioni in cui le competenze si possono dimostrare con certificazioni riconosciute in tutto il mondo, e a cui si può arrivare anche senza una laurea in informatica. Se vuoi capire come, leggi la guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>

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
          "Il cloud computing è l'uso di risorse informatiche via internet, nei data center di un fornitore, pagando in base al consumo.",
          "Il significato del nome viene dalla \"nuvola\" con cui internet viene disegnata negli schemi di rete.",
          "Funziona grazie a data center, virtualizzazione e rete, e si divide in modelli di servizio (IaaS, PaaS, SaaS) e di distribuzione (pubblico, privato, ibrido, multicloud).",
          "I principali fornitori sono AWS, Microsoft Azure e Google Cloud.",
          "Il cloud ha creato professioni molto richieste, accessibili anche senza laurea.",
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
