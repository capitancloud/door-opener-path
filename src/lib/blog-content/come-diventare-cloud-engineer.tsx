import { Link } from "@tanstack/react-router";
import { AlertTriangle, Check, FolderGit2, HelpCircle, Lightbulb, Sparkles, Timer, Wallet } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "ruolo", label: "Il ruolo in breve" },
  { id: "laurea", label: "Serve la laurea?" },
  { id: "competenze", label: "Le competenze" },
  { id: "roadmap", label: "La roadmap in 6 fasi" },
  { id: "tempi", label: "Quanto tempo ci vuole" },
  { id: "stipendio", label: "Quanto si guadagna" },
  { id: "primo-lavoro", label: "Il primo lavoro" },
  { id: "portfolio", label: "4 progetti per il portfolio" },
  { id: "errori", label: "Gli errori da evitare" },
  { id: "percorso", label: "Da solo o con un percorso?" },
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

const competenze = [
  ["Linux", "Comandi base, file, permessi, processi", "Quasi tutti i server cloud usano Linux"],
  ["Networking", "IP, DNS, subnet, firewall", "Nel cloud tutto è connesso: senza reti resti bloccato"],
  ["Piattaforma cloud", "AWS: EC2, S3, IAM, VPC, RDS", "È il cuore del lavoro"],
  ["Git", "Versionare codice e configurazioni", "Lo usa ogni team tecnico"],
  ["Docker", "Container e immagini", "È lo standard per distribuire le applicazioni"],
  ["Terraform", "Infrastruttura come codice", "Le aziende non creano più risorse a mano"],
  ["CI/CD", "Pipeline di rilascio automatico", "Automatizza il passaggio dal codice alla produzione"],
  ["Python o Bash", "Script di automazione", "Per eliminare il lavoro ripetitivo"],
  ["Kubernetes", "Orchestrazione di container", "Richiesto nelle aziende più strutturate"],
];

const fasi: { t: string; body: ReactNode }[] = [
  { t: "Le fondamenta", body: <>Parti da Linux, networking e Git. Sono le basi su cui si appoggia tutto il resto: se le salti, ogni argomento successivo diventa più difficile. Non serve diventare esperto, serve saper usare il terminale, capire come comunicano due computer in rete e salvare il tuo lavoro con Git. Se parti da zero, la guida <A slug="linux-per-principianti">Linux per principianti</A> è un buon inizio.</> },
  { t: "Scegli una piattaforma cloud e inizia da AWS", body: <>Le piattaforme principali sono tre, ma all'inizio ne serve una sola. Io consiglio AWS perché è la più diffusa e quella con più offerte di lavoro. Una volta capita una piattaforma, le altre si imparano molto più in fretta, perché i concetti sono gli stessi. Trovi il confronto completo in <A slug="aws-o-azure">AWS o Azure: quale imparare per primo</A>. Se non sai ancora cos'è AWS, leggi <A slug="aws-cos-e">AWS: cos'è e come funziona</A>.</> },
  { t: "La prima certificazione, AWS Cloud Practitioner", body: <>La AWS Certified Cloud Practitioner (CLF-C02) è la certificazione d'ingresso. Da sola non basta per essere assunto, ma ti dà una visione completa della piattaforma e un primo traguardo concreto, che aiuta molto la motivazione. Trovi tutto nella <A slug="aws-cloud-practitioner">guida completa all'esame Cloud Practitioner</A>.</> },
  { t: "La certificazione che pesa, Solutions Architect Associate", body: <>La AWS Certified Solutions Architect – Associate (SAA-C03) è quella che i selezionatori cercano davvero nei profili cloud junior. È più impegnativa: richiede di saper progettare architetture complete, sicure e con costi sotto controllo. Ne parlo nella <A slug="aws-solutions-architect-associate">guida all'esame Solutions Architect Associate</A>, e trovi il quadro completo nella guida sulle <A slug="certificazioni-aws">certificazioni AWS</A>.</> },
  { t: "Gli strumenti DevOps", body: <>Con le certificazioni conosci la piattaforma. Ora ti servono gli strumenti che le aziende usano ogni giorno: Docker, Terraform, pipeline CI/CD e le basi di Kubernetes. È qui che passi dal sapere come funziona il cloud al saperci lavorare davvero. Puoi iniziare da <A slug="terraform">Terraform per principianti</A> e <A slug="docker">Docker spiegato da zero</A>.</> },
  { t: "Portfolio e ricerca del lavoro", body: <>L'ultimo passo è trasformare quello che sai in qualcosa che un'azienda può vedere. Servono: un portfolio di 3–4 progetti su GitHub; un CV che metta in evidenza certificazioni e progetti; un profilo LinkedIn con le parole chiave dei selezionatori; preparazione al colloquio tecnico, perché saper fare e saper spiegare sono due cose diverse.</> },
];

const ruoli = [
  ["Junior Cloud Engineer", "Il ruolo più diretto: costruzione e gestione dell'infrastruttura sotto la guida di colleghi senior."],
  ["Cloud Support Engineer / Associate", "Aiuta clienti o colleghi a risolvere problemi sulla piattaforma: un'ottima palestra per imparare in fretta."],
  ["Junior DevOps Engineer", "Più orientato ad automazione e pipeline di rilascio."],
  ["Sistemista cloud / Cloud Operations", "Funzionamento quotidiano dei sistemi, monitoraggio e interventi quando qualcosa si rompe."],
];

const progetti = [
  ["Sito statico su AWS", "Pubblichi un sito con S3 e CloudFront, dominio personalizzato e HTTPS.", "Storage, distribuzione dei contenuti e DNS"],
  ["Applicazione a tre livelli", "Web app con EC2, database RDS e bilanciatore di carico, dentro una VPC progettata da te.", "Networking e architettura"],
  ["Infrastruttura con Terraform", "Ricrei il progetto precedente interamente in codice.", "Che sai lavorare come in un'azienda vera"],
  ["Pipeline CI/CD", "Ogni modifica su GitHub viene testata e rilasciata in automatico.", "Che conosci il ciclo DevOps"],
];

const errori = [
  ["Studiare solo teoria", "Guardare video senza mai aprire la console AWS non ti rende assumibile. Ogni argomento va provato con le mani."],
  ["Collezionare certificazioni senza pratica", "Tre certificazioni e zero progetti sono un segnale d'allarme per un selezionatore esperto."],
  ["Imparare tre cloud insieme", "AWS, Azure e Google Cloud in parallelo significano conoscere male tutti e tre. Prima uno, bene."],
  ["Rimandare la ricerca del lavoro", "Non aspettare di \"sapere tutto\". Con le certificazioni e un paio di progetti, inizia a candidarti: anche i colloqui andati male ti insegnano cosa ripassare."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Serve saper programmare per diventare cloud engineer?", a: "Non all'inizio. Ti servirà scrivere script di automazione in Python o Bash e file di configurazione, ma non devi essere uno sviluppatore. Le basi si imparano lungo il percorso." },
  { q: "Meglio iniziare con AWS o con Azure?", a: "Per la maggior parte delle persone AWS, perché è la piattaforma più diffusa. Azure è una buona scelta se nella tua zona ci sono molte aziende che lavorano con prodotti Microsoft." },
  { q: "Si può diventare cloud engineer a 40 anni?", a: "Sì. Nel settore contano competenze e affidabilità più dell'età. Chi cambia carriera da adulto porta anche esperienza di lavoro, gestione dei problemi e maturità, che sono qualità apprezzate." },
  { q: "Serve sapere l'inglese?", a: "Aiuta molto: gli esami AWS sono disponibili anche in altre lingue, ma documentazione e strumenti sono in inglese. Basta un livello di lettura tecnica, che migliora con la pratica." },
  { q: "Che differenza c'è tra cloud engineer e DevOps engineer?", a: <>I due ruoli si sovrappongono molto. Il cloud engineer si concentra sull'infrastruttura, il DevOps engineer sui processi di sviluppo e rilascio. Trovi il confronto completo nella <A slug="devops-engineer">guida sul DevOps engineer</A>.</> },
];

const QuizBox = () => (
  <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
    <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Non sei sicuro che faccia per te?</p>
    <p className="mt-3 text-lg leading-relaxed">Prima di iniziare, fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per diventare cloud engineer.</p>
    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
  </div>
);

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Non è un percorso facile, ma è un percorso chiaro. Chi arriva in fondo non è il più bravo, è chi segue un ordine preciso senza disperdersi.</p>
      </div>
      <P>Vuoi sapere come diventare cloud engineer partendo da zero? In questa guida trovi il percorso completo, nell'ordine giusto: cosa fa un cloud engineer, quali competenze servono, quali certificazioni prendere, quanto tempo ci vuole e come arrivare al primo colloquio. Anche se non hai una laurea in informatica e oggi fai tutt'altro.</P>

      <H2 id="ruolo">Cloud engineer: il ruolo in breve</H2>
      <P>Oggi quasi tutte le aziende tengono dati, siti e applicazioni "nel cloud": su server di grandi fornitori come Amazon Web Services (AWS), Microsoft Azure e Google Cloud, a cui si accede via internet. Se non ti è chiaro cosa significa, parti dalla guida su <A slug="cloud-computing-cos-e">cos'è il cloud computing</A>.</P>
      <P>Il cloud engineer è la persona che <strong>progetta, costruisce e mantiene</strong> questa infrastruttura. In pratica:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {["Crea server, reti e database sulla piattaforma cloud", "Configura la sicurezza: chi può accedere a cosa", "Automatizza il rilascio delle applicazioni", "Controlla che tutto funzioni e che i costi restino sotto controllo"].map((t, i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-2xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-semibold leading-relaxed">{t}</p></div>
        ))}
      </div>
      <P>Non è un lavoro da programmatore puro: si scrive codice, ma soprattutto per automatizzare. È più simile al lavoro di chi costruisce e tiene in ordine un sistema complesso. Se vuoi vedere com'è una giornata reale, leggi <A slug="cloud-engineer-cosa-fa">cosa fa un cloud engineer in una giornata tipo</A>.</P>

      <H2 id="laurea">Si può diventare cloud engineer senza laurea?</H2>
      <P><strong>Sì.</strong> La laurea in informatica aiuta, ma non è un requisito per la maggior parte delle posizioni junior. Il motivo è semplice: nel cloud le competenze si possono dimostrare in modo oggettivo. Un selezionatore guarda soprattutto tre cose:</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[["Certificazioni", "Attestano con un esame ufficiale che conosci la piattaforma."], ["Portfolio", "Progetti reali che può vedere e verificare."], ["Colloquio tecnico", "Se sai spiegare cosa hai costruito e perché."]].map(([t, d]) => (
          <div key={t} className="rounded-2xl bg-brand-blue-deep p-5 text-primary-foreground"><p className="font-blog-display text-xl font-extrabold text-brand-yellow">{t}</p><p className="mt-2 text-primary-foreground/85">{d}</p></div>
        ))}
      </div>
      <P>Una laurea senza nessuna di queste tre cose vale meno di un candidato senza laurea che le ha tutte. Detto questo, senza laurea devi compensare con più pratica e una preparazione più solida: il titolo non ti apre porte, quindi devono aprirle le tue competenze.</P>

      <H2 id="competenze">Le competenze di un cloud engineer</H2>
      <P>Ecco cosa devi sapere, in ordine di importanza per chi inizia:</P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[36rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Area</th><th className="p-3">Cosa imparare</th><th className="p-3">Perché serve</th></tr></thead>
          <tbody>{competenze.map(([a, b, c], i) => (
            <tr key={a} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{a}</td><td className="p-3">{b}</td><td className="p-3 text-brand-ink/75">{c}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Non devi imparare tutto insieme. L'errore più comune è proprio saltare da un argomento all'altro senza un ordine. La roadmap qui sotto risolve questo problema.</P>

      <H2 id="roadmap">Come diventare cloud engineer: la roadmap in 6 fasi</H2>
      <ol className="relative mt-8 space-y-6 border-l-2 border-brand-blue/25 pl-8">
        {fasi.map((f, i) => (
          <li key={f.t} className="relative">
            <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span>
            <p className="text-xs font-extrabold uppercase text-brand-blue">Fase {i + 1}</p>
            <h3 className="mt-1 font-blog-display text-2xl font-extrabold">{f.t}</h3>
            <p className="mt-3 text-lg leading-relaxed text-brand-ink/85">{f.body}</p>
            {i === 4 && <QuizBox />}
          </li>
        ))}
      </ol>

      <H2 id="tempi">Quanto tempo ci vuole per diventare cloud engineer?</H2>
      <P>Dipende da tre fattori: da dove parti, quanto tempo dedichi ogni giorno e quanto è strutturato il tuo percorso. Come riferimento realistico:</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[["3–4 mesi", "Con un percorso strutturato e circa 2 ore al giorno, per le basi e le due certificazioni AWS."], ["1 anno o più", "Studiando da solo senza un ordine preciso: si perde tempo a capire cosa studiare."], ["Settimane o mesi", "La ricerca del lavoro è una fase a sé: dipende da zona, CV e candidature inviate."]].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border bg-secondary p-5"><Timer className="h-5 w-5 text-brand-blue" /><p className="mt-2 font-blog-display text-2xl font-extrabold">{t}</p><p className="mt-2 text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <div className="mt-6 flex gap-3 rounded-2xl border border-destructive/30 bg-destructive/5 p-5"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" /><p className="leading-relaxed">Diffida di chi ti promette un lavoro garantito in tempi certi. La formazione ti rende un candidato credibile, ma l'assunzione dipende anche dal mercato e da come ti proponi.</p></div>

      <H2 id="stipendio">Cloud engineer junior: quanto si guadagna all'inizio</H2>
      <div className="mt-6 rounded-3xl bg-gradient-to-br from-brand-blue-deep to-brand-blue p-7 text-primary-foreground">
        <Wallet className="h-6 w-6 text-brand-yellow" />
        <p className="mt-3 text-sm font-bold uppercase text-primary-foreground/75">RAL indicativa da junior in Italia</p>
        <p className="mt-1 font-blog-display text-4xl font-extrabold sm:text-5xl">28.000–35.000€</p>
        <p className="mt-3 text-primary-foreground/85">Con possibilità di crescere in modo significativo con qualche anno di esperienza. Le cifre variano molto per città, azienda e competenze.</p>
      </div>
      <P>Trovi i numeri nel dettaglio nell'articolo sullo <A slug="stipendio-cloud-engineer">stipendio del cloud engineer in Italia</A>.</P>

      <H2 id="primo-lavoro">Il primo lavoro: quali posizioni cercare</H2>
      <P>Quando inizi a candidarti, non cercare solo "cloud engineer". Il primo ruolo nel cloud ha spesso nomi diversi, e conoscerli ti fa trovare molte più offerte:</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {ruoli.map(([t, d]) => (<div key={t} className="rounded-2xl border border-border p-5"><p className="font-blog-display text-lg font-extrabold text-brand-blue">{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{d}</p></div>))}
      </div>
      <Bullets items={[
        <>Molte aziende italiane pubblicano gli annunci in inglese, anche per posizioni in Italia: <strong>cerca in entrambe le lingue</strong>.</>,
        <>Non scartare un annuncio solo perché chiede "2 anni di esperienza": per le posizioni junior è spesso un'indicazione, non un requisito rigido. Se hai certificazioni e un portfolio solido, candidati comunque.</>,
        <>Guarda anche le <strong>aziende di consulenza IT e i system integrator</strong>: assumono molti junior, li formano sui progetti dei clienti e sono spesso il modo più rapido per fare esperienza su più ambienti cloud.</>,
      ]} />

      <H2 id="portfolio">4 progetti per il tuo portfolio da cloud engineer</H2>
      <P>Un portfolio vale più di mille righe di CV. Ecco quattro progetti che dimostrano competenze concrete:</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {progetti.map(([t, d, dim], i) => (
          <div key={t} className="flex flex-col rounded-2xl border border-border bg-secondary p-5">
            <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue text-primary-foreground"><FolderGit2 className="h-5 w-5" /></span><span className="text-xs font-extrabold uppercase text-brand-blue">Progetto {i + 1}</span></div>
            <p className="mt-3 font-blog-display text-xl font-extrabold">{t}</p>
            <p className="mt-2 flex-1 leading-relaxed text-brand-ink/80">{d}</p>
            <p className="mt-4 border-t border-border pt-3 text-sm"><strong className="text-brand-blue">Dimostra:</strong> {dim}</p>
          </div>
        ))}
      </div>
      <P>Per ogni progetto scrivi un README chiaro: cosa hai costruito, perché, quali problemi hai incontrato e come li hai risolti. È esattamente ciò di cui ti chiederanno al colloquio.</P>

      <H2 id="errori">Gli errori che rallentano chi vuole diventare cloud engineer</H2>
      <div className="mt-6 space-y-3">
        {errori.map(([t, d]) => (<div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>))}
      </div>

      <H2 id="percorso">Studiare da solo o con un percorso?</H2>
      <P>Tutto quello che trovi in questa guida si può imparare da solo: documentazione ufficiale, video gratuiti e tanta pazienza. Molti ci riescono.</P>
      <P>Il vero costo dello studio da solo non sono i soldi, <strong>è il tempo</strong>: capire cosa studiare, in che ordine, quando sei pronto per l'esame e come trasformare tutto in un profilo assumibile. È la ragione per cui la maggior parte di chi inizia da solo si ferma dopo qualche settimana.</P>
      <P>Se preferisci un percorso guidato, ho costruito <Home>Diventa Cloud Engineer in 90 giorni</Home>: segue esattamente questa roadmap, con la preparazione alle certificazioni CLF-C02 e SAA-C03, i progetti per il portfolio e la preparazione al colloquio.</P>

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
      <P>Per diventare cloud engineer, anche senza laurea, servono sei passi nell'ordine giusto:</P>
      <ol className="mt-5 space-y-2">
        {["Fondamenta: Linux, networking e Git", "Una piattaforma cloud, partendo da AWS", "La certificazione AWS Cloud Practitioner", "La certificazione AWS Solutions Architect Associate", "Gli strumenti DevOps: Docker, Terraform, CI/CD, Kubernetes", "Portfolio, CV, LinkedIn e preparazione al colloquio"].map((t, i) => (
          <li key={t} className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ol>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Non conta da dove parti. Conta seguire un ordine e non fermarsi.</p>
        <p className="mt-3 text-lg">Vuoi il percorso completo, già organizzato? Scopri <Home>Diventa Cloud Engineer in 90 giorni</Home>. Non sei ancora sicuro? Fai prima il <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-blue underline underline-offset-4">quiz gratuito di 2 minuti</a>.</p>
      </div>
    </div>
  );
}
