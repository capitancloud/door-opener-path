import { Link } from "@tanstack/react-router";
import { AlertTriangle, CalendarClock, Check, FileSignature, HelpCircle, Lightbulb, PiggyBank, Shield, Sparkles, X } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "perche", label: "Perché è la scelta più sicura" },
  { id: "passo-1", label: "1. Scegli la direzione" },
  { id: "passo-2", label: "2. Trova il tempo" },
  { id: "passo-3", label: "3. Fondo di sicurezza" },
  { id: "passo-4", label: "4. Formati con un obiettivo" },
  { id: "passo-5", label: "5. Cerca in modo discreto" },
  { id: "passo-6", label: "6. Gestisci le dimissioni" },
  { id: "errori", label: "Gli errori da evitare" },
  { id: "faq", label: "Domande frequenti" },
  { id: "sintesi", label: "In sintesi" },
];

const A = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <Link to="/blog/$slug" params={{ slug }} className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:decoration-brand-blue">{children}</Link>
);
const Step = ({ id, n, children }: { id: string; n: number; children: ReactNode }) => (
  <h2 id={id} className="scroll-mt-24 flex items-center gap-4 pt-14 font-blog-display text-3xl font-extrabold leading-tight sm:text-4xl">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue text-2xl text-primary-foreground">{n}</span>
    <span>{children}</span>
  </h2>
);
const H2 = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="scroll-mt-24 pt-14 font-blog-display text-3xl font-extrabold leading-tight sm:text-4xl">{children}</h2>
);
const P = ({ children }: { children: ReactNode }) => <p className="mt-5 text-lg leading-relaxed text-brand-ink/85">{children}</p>;
const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-4 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-3 text-lg leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><span>{t}</span></li>)}</ul>
);

const settimana: [string, string, string][] = [
  ["Lunedì–venerdì, sera", "1 ora", "Studio nuovo argomento"],
  ["Tragitto casa-lavoro", "20–30 minuti", "Ripasso, video, podcast"],
  ["Sabato mattina", "3 ore", "Pratica e progetti"],
  ["Domenica", "Libera", "Riposo, famiglia"],
];

const errori: [string, string][] = [
  ["Partire con troppo entusiasmo", "Tre ore ogni sera per due settimane, poi il crollo. Meglio un'ora al giorno per sei mesi."],
  ["Studiare senza un traguardo", "Senza una meta verificabile, lo studio serale diventa un hobby e non un cambiamento."],
  ["Dimettersi prima della firma", "Un'offerta a voce non è un'offerta. Aspetta il contratto scritto."],
  ["Trascurare la famiglia", "Cambiare lavoro mentre si lavora pesa anche su chi vive con te. Parlane prima, e decidete insieme gli orari di studio."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Quante ore a settimana servono per cambiare lavoro mentre si lavora?", a: <>Con 8–10 ore a settimana costanti si fanno progressi concreti in qualche mese. Più della quantità, conta la regolarità.</> },
  { q: "Devo dire al mio datore di lavoro che sto cercando altro?", a: <>Di solito no, finché non hai un'offerta firmata. Dirlo prima può esporti senza darti alcun vantaggio.</> },
  { q: "Posso fare colloqui durante l'orario di lavoro?", a: <>Solo usando permessi o ferie, oppure fissandoli fuori dall'orario. Molti primi colloqui si fanno online, e questo rende tutto più semplice.</> },
  { q: "Quanto tempo ci vuole per cambiare lavoro?", a: <>Dipende dal settore e dalla formazione che serve. Per un cambio di settore con una nuova competenza da imparare, conviene ragionare in mesi, non in settimane: da alcuni mesi a circa un anno è un orizzonte realistico.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Un piano in 6 passi per cambiare lavoro senza rischiare lo stipendio: trovare il tempo, proteggerti economicamente, formarti, cercare in modo discreto e gestire le dimissioni.</p>
      </div>
      <P>Cambiare lavoro mentre si lavora è il modo più sicuro per cambiare strada: continui a ricevere lo stipendio, ti formi con calma e lasci il vecchio impiego solo quando hai in mano un'offerta concreta. È anche il modo più faticoso, perché devi trovare tempo ed energie oltre alle ore di lavoro.</P>
      <P>In questa guida trovi un piano in 6 passi per farlo senza bruciarti: come trovare il tempo, come proteggerti economicamente, come formarti, come cercare lavoro in modo discreto e come gestire le dimissioni.</P>

      <H2 id="perche">Perché cambiare lavoro mentre si lavora è la scelta più sicura</H2>
      <P>Licenziarsi prima di avere un'alternativa sembra liberatorio, ma di solito è un errore. Senza stipendio, la pressione economica cresce ogni mese e finisci per accettare la prima offerta che arriva, anche se non è quella giusta. E nei colloqui un vuoto nel CV va spiegato.</P>
      <P>Chi invece cambia lavoro mentre lavora ha tre vantaggi:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Tranquillità economica", "Lo stipendio continua ad arrivare."],
          ["Più potere di negoziazione", "Puoi dire di no a un'offerta sbagliata."],
          ["Nessun buco nel CV", "Niente vuoti da spiegare ai colloqui."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><Shield className="h-6 w-6 text-brand-blue" /><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Il prezzo da pagare è il tempo. Per questo serve un piano.</P>

      <Step id="passo-1" n={1}>Scegli la direzione</Step>
      <P>Prima di organizzare il tempo, devi sapere verso cosa stai andando. Se non hai ancora le idee chiare, parti dalla guida <A slug="voglio-cambiare-lavoro">voglio cambiare lavoro ma non so cosa fare</A>: trovi un metodo in 6 passi per scegliere una direzione concreta.</P>
      <P>Se invece cerchi idee su professioni raggiungibili senza tornare all'università, leggi la guida sui <A slug="lavori-ben-pagati-senza-laurea">lavori ben pagati senza laurea</A>.</P>

      <Step id="passo-2" n={2}>Trova il tempo (davvero)</Step>
      <P>"Non ho tempo" è il motivo numero uno per cui chi vuole cambiare lavoro resta fermo. La soluzione non è trovare ore in più, ma trasformare il tempo che hai in <strong>blocchi fissi</strong>, come se fossero appuntamenti.</P>
      <P>Un esempio realistico per chi lavora a tempo pieno:</P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[30rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Momento</th><th className="p-3">Tempo</th><th className="p-3">Attività</th></tr></thead>
          <tbody>{settimana.map(([m, t, a], i) => (
            <tr key={m} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{m}</td><td className="p-3 font-semibold text-brand-blue">{t}</td><td className="p-3 text-brand-ink/80">{a}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:flex-row sm:items-center">
        <CalendarClock className="h-10 w-10 shrink-0 text-brand-blue" />
        <div><p className="font-blog-display text-3xl font-extrabold">8–10 ore a settimana</p><p className="mt-1 leading-relaxed text-brand-ink/80">Abbastanza per fare progressi veri in qualche mese, senza rinunciare a tutto.</p></div>
      </div>
      <P>Due regole:</P>
      <Bullets items={[
        <><strong>stessi orari ogni settimana</strong>, così diventa un'abitudine;</>,
        <><strong>un giorno completamente libero</strong>, per non arrivare esausto dopo un mese.</>,
      ]} />

      <Step id="passo-3" n={3}>Prepara un fondo di sicurezza</Step>
      <P>Anche se non ti licenzi subito, il passaggio può portare imprevisti: un nuovo lavoro con uno stipendio iniziale più basso, un periodo di prova, qualche settimana scoperta tra un impiego e l'altro. Mettere da parte qualche mese di spese essenziali ti permette di scegliere con calma, invece di accettare per necessità.</P>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6"><PiggyBank className="mt-1 h-6 w-6 shrink-0 text-brand-yellow-deep" /><p className="font-semibold leading-relaxed">Inizia subito, anche con poco: una cifra fissa ogni mese su un conto separato.</p></div>

      <Step id="passo-4" n={4}>Formati con un obiettivo verificabile</Step>
      <P>Studiare "un po' di tutto" la sera non ti porta da nessuna parte. Ti serve un traguardo preciso e verificabile: una certificazione, un patentino, un portfolio di progetti. È quello che mostrerai al nuovo datore di lavoro, ed è quello che ti tiene motivato quando sei stanco.</P>
      <P>Scegli un percorso con un ordine chiaro, che puoi seguire al tuo ritmo. I settori in cui la formazione si fa bene online, la sera e nel weekend, sono i più adatti a chi lavora: l'IT e il cloud sono tra questi, perché le competenze si studiano da casa e si dimostrano con <A slug="certificazioni-aws">certificazioni ufficiali</A>. Trovi un esempio concreto nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Stai valutando il cloud come nuova strada?</p>
        <p className="mt-3 text-lg leading-relaxed">Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <Step id="passo-5" n={5}>Cerca lavoro in modo discreto</Step>
      <P>Quando sei pronto per candidarti, muoviti con attenzione:</P>
      <Bullets items={[
        <>usa i tuoi dispositivi e la tua email personale, <strong>mai il computer o l'indirizzo aziendale</strong>;</>,
        <>aggiorna LinkedIn in modo graduale, e se attivi la disponibilità a nuove opportunità, rendila visibile solo ai recruiter;</>,
        <>fissa i colloqui in momenti compatibili: pausa pranzo, fine giornata, oppure un giorno di permesso o di ferie. Molti primi colloqui oggi si fanno online, e questo aiuta;</>,
        <>non parlarne in ufficio, nemmeno con i colleghi di cui ti fidi, finché non hai un'offerta firmata.</>,
      ]} />

      <Step id="passo-6" n={6}>Gestisci le dimissioni</Step>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-blue/20 bg-secondary p-6"><FileSignature className="mt-1 h-6 w-6 shrink-0 text-brand-blue" /><p className="font-semibold leading-relaxed">Quando hai un'offerta scritta e firmata, allora, e solo allora, è il momento di dimettersi.</p></div>
      <div className="mt-6 space-y-3">
        {[
          ["Controlla il preavviso", "Quello previsto dal tuo contratto collettivo (CCNL) e dal tuo livello: devi rispettarlo, e il nuovo datore di lavoro deve saperlo per fissare la data di inizio."],
          ["Segui la procedura ufficiale", "In Italia le dimissioni del lavoratore dipendente si presentano in modalità telematica, tramite la procedura del Ministero del Lavoro, anche con l'aiuto di un patronato o di un consulente."],
          ["Esci bene", "Completa il passaggio di consegne e saluta con correttezza. Il mondo del lavoro è più piccolo di quanto sembri."],
        ].map(([t, d], i) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 font-extrabold text-brand-blue">{i + 1}</span><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>
      <P>Per i dettagli sul tuo caso specifico, come preavviso, ferie residue e TFR, confrontati con un consulente del lavoro o con il patronato.</P>

      <H2 id="errori">Gli errori da evitare</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {errori.map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
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
          "Cambiare lavoro mentre si lavora è la strada più sicura: stipendio garantito, più potere di scelta, nessun buco nel CV.",
          "Il piano in 6 passi: scegli la direzione, trova il tempo in blocchi fissi, prepara un fondo di sicurezza, formati con un obiettivo verificabile, cerca lavoro in modo discreto, dimettiti solo con un'offerta firmata.",
          "La costanza conta più dell'intensità: un'ora al giorno per mesi batte tre ore al giorno per due settimane.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Stai pensando di cambiare strada verso il settore tecnologico?</p>
        <p className="mt-3 text-lg">Fai il quiz gratuito di 2 minuti e scopri se un lavoro nel cloud è adatto a te.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
        <p className="mt-4 flex items-center gap-2 text-sm text-brand-ink/70"><AlertTriangle className="h-4 w-4" /> Per dimissioni, preavviso e TFR confrontati sempre con un consulente o un patronato.</p>
      </div>
    </div>
  );
}
