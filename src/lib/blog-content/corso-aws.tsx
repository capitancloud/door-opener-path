import { Link } from "@tanstack/react-router";
import { AlertTriangle, BadgeCheck, Check, Eye, HelpCircle, Languages, Lightbulb, MessageCircleQuestion, Sparkles, X } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "perche-italiano", label: "Perché un corso in italiano" },
  { id: "tipologie", label: "Le 4 tipologie di corsi" },
  { id: "criteri", label: "Gli 8 criteri per scegliere" },
  { id: "allarmi", label: "I segnali d'allarme" },
  { id: "generico", label: "AWS o cloud generico?" },
  { id: "domande", label: "5 domande prima di iscriverti" },
  { id: "mio-percorso", label: "Il mio percorso" },
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

const tipologie: [string, string, string, string][] = [
  ["Risorse gratuite (AWS Skill Builder, YouTube)", "Gratis", "Nessun rischio economico, materiale ufficiale", "Poco ordine, nessun supporto, spesso solo in inglese"],
  ["Corsi video on demand", "Da pochi euro a qualche decina", "Economici, si seguono quando vuoi", "Nessuna guida personale, qualità molto variabile"],
  ["Bootcamp", "Da qualche migliaio di euro", "Intensivi, spesso con docenti dal vivo", "Costosi, orari rigidi, ritmo non sempre sostenibile per chi lavora"],
  ["Percorsi guidati online", "Da qualche centinaio di euro", "Ordine preciso, pratica, supporto e obiettivo lavoro", "Richiedono costanza, la qualità dipende da chi li tiene"],
];

const criteri: [string, string][] = [
  ["È aggiornato all'esame attuale", "Gli esami AWS cambiano versione. Controlla che il corso indichi il codice corrente, per esempio CLF-C02 per la Cloud Practitioner e SAA-C03 per la Solutions Architect – Associate. Un corso fermo a una versione precedente ti fa studiare argomenti superati."],
  ["Ha tanta pratica, non solo slide", "Nel cloud si impara facendo. Un buon corso AWS ti fa lavorare sulla console: creare reti, server, database, permessi. Se è solo teoria, finirai per memorizzare senza capire."],
  ["Include simulazioni d'esame realistiche", "Sono l'unico modo per sapere se sei pronto. Devono essere a tempo, in inglese, e spiegare perché ogni risposta è giusta o sbagliata."],
  ["Ti dice quando sei pronto", "Prenotare l'esame troppo presto significa rischiare di pagarlo due volte. I corsi migliori hanno un criterio chiaro per capire quando prenotare."],
  ["Il docente lavora davvero sul cloud", "Guarda chi tiene il corso: che esperienza ha, quali certificazioni, cosa pubblica. Un buon docente sa spiegare cosa serve all'esame e cosa serve al lavoro."],
  ["C'è supporto quando ti blocchi", "Una community, un canale per le domande, sessioni dal vivo. Da soli ci si blocca spesso, ed è lì che molti abbandonano."],
  ["Guarda oltre l'esame", "Se il tuo obiettivo è lavorare, la certificazione è solo una parte. Un buon percorso ti aiuta anche con progetti da mostrare, CV e preparazione al colloquio."],
  ["Le condizioni sono chiare", "Cosa è incluso, per quanto tempo hai accesso, come funziona un eventuale rimborso. Tutto deve essere scritto in modo comprensibile prima di pagare."],
];

const allarmi: [string, string][] = [
  ["\"Lavoro garantito\"", "Nessun corso può garantirti un'assunzione. Chi lo promette ti sta vendendo qualcosa che non può controllare."],
  ["\"Certificazione in una settimana, senza fatica\"", "Le certificazioni AWS richiedono studio vero, soprattutto quelle di livello Associate."],
  ["Recensioni impossibili da verificare", "Nomi senza cognome, nessun profilo LinkedIn, storie tutte uguali."],
  ["Nessun riferimento al codice d'esame", "Spesso indica materiale vecchio."],
  ["Nessuna pratica", "Se non c'è un solo laboratorio, non stai imparando AWS, stai leggendo di AWS."],
];

const domande = [
  "Per quale versione dell'esame è aggiornato?",
  "Quante ore di pratica ci sono, e su cosa?",
  "Le simulazioni sono in inglese e con spiegazioni?",
  "Se mi blocco, chi mi risponde e in quanto tempo?",
  "Cosa succede se non supero l'esame?",
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Meglio un corso AWS gratuito o a pagamento?", a: <>Le risorse gratuite sono ottime per iniziare e capire se il cloud ti piace. Un corso a pagamento ha senso quando vuoi un percorso ordinato, simulazioni affidabili e supporto: in pratica, quando vuoi arrivare al risultato in meno tempo.</> },
  { q: "Quanto costa un corso AWS?", a: <>Si va da zero, con le risorse gratuite, a qualche migliaio di euro per un bootcamp. Più del prezzo, conta cosa è incluso: pratica, simulazioni, supporto e aiuto per il lavoro. A questo va aggiunto il costo degli esami, che si pagano direttamente ad AWS.</> },
  { q: "Quanto dura un corso AWS?", a: <>Dipende dall'obiettivo. Per la sola Cloud Practitioner bastano poche settimane; per arrivare alla Solutions Architect – Associate con basi solide servono indicativamente due o tre mesi di studio costante.</> },
  { q: "Serve sapere l'inglese per un corso AWS in italiano?", a: <>Per seguire il corso no, ma per l'esame sì, perché si sostiene in inglese. Un buon corso ti accompagna gradualmente verso la terminologia e le domande in inglese.</> },
  { q: "Esiste un corso AWS per principianti assoluti?", a: <>Sì. Se parti da zero, cerca un corso che includa le basi di Linux e delle reti prima di entrare nei servizi AWS. Trovi il percorso completo nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Le tipologie di corsi AWS disponibili, gli 8 criteri per valutarli, i segnali d'allarme da non ignorare e le 5 domande da fare prima di iscriverti.</p>
      </div>
      <P>Cercare un corso AWS oggi è facile. Sceglierne uno buono, molto meno: ci sono corsi gratuiti, video da pochi euro, bootcamp da migliaia di euro e percorsi guidati, e tutti promettono di prepararti al meglio. In questa guida trovi le tipologie di corsi AWS disponibili, gli 8 criteri per valutarli, i segnali d'allarme da non ignorare e le domande da fare prima di iscriverti.</P>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6"><Eye className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><p className="leading-relaxed"><strong>Una premessa di trasparenza:</strong> anch'io ho un corso AWS. Proprio per questo ti do i criteri che userei io da studente, validi per qualunque corso tu scelga, incluso il mio.</p></div>

      <H2 id="perche-italiano">Perché scegliere un corso AWS in italiano</H2>
      <P>Un corso AWS in italiano ha un vantaggio chiaro: capisci i concetti al primo colpo. Quando studi argomenti nuovi come reti, sicurezza o architetture distribuite, spiegarli nella tua lingua riduce la fatica e accelera l'apprendimento, soprattutto se parti da zero.</P>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-blue/20 bg-secondary p-6"><Languages className="mt-1 h-6 w-6 shrink-0 text-brand-blue" /><div>
        <p className="font-extrabold">Gli esami di certificazione AWS si sostengono in inglese.</p>
        <p className="mt-1 leading-relaxed text-brand-ink/80">Un buon corso in italiano non ti isola dall'inglese: ti spiega i concetti in italiano, ma usa i nomi dei servizi e la terminologia originale, e ti fa esercitare con simulazioni d'esame in inglese. È il mix migliore: capisci in italiano, ti alleni nella lingua dell'esame e del lavoro.</p>
      </div></div>

      <H2 id="tipologie">Le 4 tipologie di corsi AWS</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[44rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Tipologia</th><th className="p-3">Costo indicativo</th><th className="p-3">Punti di forza</th><th className="p-3">Limiti</th></tr></thead>
          <tbody>{tipologie.map(([t, c, f, l], i) => (
            <tr key={t} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{t}</td><td className="p-3 font-semibold text-brand-blue">{c}</td><td className="p-3 text-brand-ink/80">{f}</td><td className="p-3 text-brand-ink/70">{l}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Non esiste la tipologia migliore in assoluto: dipende da quanto tempo hai, da quanto sei autonomo e da qual è il tuo obiettivo. Se vuoi partire gratis, trovi cosa offre AWS e dove non basta nella guida su <A slug="aws-skill-builder">AWS Skill Builder e corsi AWS gratis</A>.</P>

      <H2 id="criteri">Come scegliere un corso AWS: 8 criteri</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {criteri.map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5">
            <div className="flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><p className="font-extrabold">{t}</p></div>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{d}</p>
          </div>
        ))}
      </div>

      <H2 id="allarmi">I segnali d'allarme</H2>
      <P>Alcune promesse dovrebbero farti alzare subito le antenne:</P>
      <div className="mt-6 space-y-3">
        {allarmi.map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="generico">Corso AWS o corso di cloud computing generico?</H2>
      <P>Molti cercano un "corso cloud computing" senza sapere se partire da una piattaforma precisa. Il consiglio è semplice: un corso di cloud computing generico va bene per capire i concetti, ma se il tuo obiettivo è una certificazione o un lavoro, scegli un corso su una piattaforma specifica. Le aziende cercano competenze su AWS, Azure o Google Cloud, non sul cloud in astratto.</P>
      <P>Per chi inizia, AWS è la scelta più comune perché è la piattaforma più diffusa. Trovi il confronto in <A slug="aws-o-azure">AWS o Azure: quale imparare per primo</A>. Se prima vuoi chiarire le basi, leggi <A slug="cloud-computing-cos-e">cos'è il cloud computing</A>.</P>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Prima di scegliere un corso</p>
        <p className="mt-3 text-lg leading-relaxed">Non sai ancora se il cloud fa per te? Fai il quiz gratuito di 2 minuti: 9 domande per capire se è adatto al tuo punto di partenza.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="domande">5 domande da fare prima di iscriverti</H2>
      <P>Prima di pagare, scrivi a chi vende il corso e chiedi:</P>
      <div className="mt-6 space-y-2">
        {domande.map((d, i) => (
          <div key={d} className="flex items-center gap-4 rounded-xl bg-secondary px-4 py-3"><MessageCircleQuestion className="h-5 w-5 shrink-0 text-brand-blue" /><p className="font-semibold"><span className="text-brand-blue">{i + 1}.</span> {d}</p></div>
        ))}
      </div>
      <P>Le risposte, e il modo in cui arrivano, ti dicono molto sulla serietà del corso.</P>

      <H2 id="mio-percorso">Come risponde a questi criteri il mio percorso</H2>
      <P>Visto che te l'ho detto all'inizio, eccolo. Il percorso <Home>Diventa Cloud Engineer in 90 giorni</Home> è un percorso guidato online, pensato per chi parte da zero e vuole arrivare a lavorare nel cloud:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          "Prepara alle certificazioni CLF-C02 e SAA-C03, con simulatore d'esame in inglese.",
          "Prima di prenotare c'è una validazione 1-to-1 che ti dice se sei pronto.",
          "Include laboratori pratici, progetti per il portfolio e la preparazione a CV, LinkedIn e colloquio.",
          "Non promette un lavoro garantito, perché nessuno può farlo onestamente.",
        ].map((t) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-border p-5"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" /><p className="leading-relaxed">{t}</p></div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <p className="font-extrabold">Vuoi vedere il programma completo?</p>
        <p className="mt-2 text-lg leading-relaxed">Scopri <Home>Diventa Cloud Engineer in 90 giorni</Home>: moduli, certificazioni incluse e condizioni, tutto spiegato nella pagina.</p>
      </div>

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
          "Un corso AWS in italiano ti fa capire i concetti più in fretta, ma deve prepararti all'esame in inglese.",
          "Valuta ogni corso con 8 criteri: aggiornamento, pratica, simulazioni, criterio di prontezza, docente, supporto, obiettivo lavoro e condizioni chiare.",
          "Diffida di chi garantisce il lavoro o promette certificazioni senza fatica.",
          "Prima di iscriverti, fai le 5 domande: le risposte ti diranno quasi tutto.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Scegli con criterio, non con la promessa più forte.</p>
        <p className="mt-3 text-lg">Vuoi un percorso guidato dalle basi alle certificazioni CLF-C02 e SAA-C03? Scopri <Home>Diventa Cloud Engineer in 90 giorni</Home>.</p>
        <p className="mt-4 flex items-center gap-2 text-sm text-brand-ink/70"><AlertTriangle className="h-4 w-4" /> Il costo degli esami si paga direttamente ad AWS.</p>
      </div>
    </div>
  );
}
