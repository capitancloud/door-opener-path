import { Check, Lightbulb, Sparkles, TrendingUp, Wallet } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "dati", label: "I dati 2026" },
  { id: "junior", label: "Quanto guadagna un junior" },
  { id: "crescita", label: "Come cresce con l'esperienza" },
  { id: "da-cosa", label: "Da cosa dipende" },
  { id: "netto", label: "Dalla RAL al netto" },
  { id: "aumentare", label: "Come aumentarlo" },
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

const fonti: [string, string, string][] = [
  ["Glassdoor", "Junior cloud engineer: media 26.000 €, fascia tipica 24.300–29.500 €", "Pochi stipendi dichiarati, dato indicativo"],
  ["Glassdoor", "Cloud engineer, tutti i livelli: media 34.000 €, fascia tipica 29.000–41.000 €", "Oltre 300 stipendi dichiarati"],
  ["Indeed", "Cloud engineer: media circa 35.700 €", "Basato su stipendi indicati dagli utenti"],
  ["TechCompenso", "Cloud engineer: media circa 44.100 €", "Community di professionisti tech, tende verso profili più esperti"],
  ["Jooble", "Cloud engineer: media circa 43.100 €", "Basato su annunci di lavoro"],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Un cloud engineer guadagna bene?", a: <>Da junior lo stipendio è nella media dei ruoli tecnici. Il vantaggio è la crescita: con esperienza e specializzazione si arriva a cifre sopra la media italiana in pochi anni.</> },
  { q: "Guadagna più un cloud engineer o uno sviluppatore?", a: <>Le cifre sono simili a inizio carriera. Con l'esperienza, i profili cloud specializzati, soprattutto in sicurezza e architettura, tendono a essere pagati molto bene.</> },
  { q: "Un cloud engineer può lavorare come freelance?", a: <>Sì, di solito dopo qualche anno di esperienza. Da freelance si può guadagnare di più, ma con i rischi e i costi del lavoro autonomo.</> },
  { q: "Lo stipendio di un DevOps engineer è diverso?", a: <>È in una fascia molto simile. Trovi le differenze tra i due ruoli nella guida sul <A slug="devops-engineer">DevOps engineer</A>.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Un cloud engineer junior parte indicativamente da 24.000–30.000 € lordi l'anno. La media su tutti i livelli è tra circa 34.000 e 36.000 €, e i più esperti superano i 40.000–50.000 €.</p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Junior", "24–30k €"],
          ["Media, tutti i livelli", "34–36k €"],
          ["Profili esperti", "40–50k+ €"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-2xl border border-border p-5 text-center"><p className="text-xs font-extrabold uppercase text-brand-ink/60">{l}</p><p className="mt-2 font-blog-display text-3xl font-extrabold text-brand-blue">{v}</p><p className="mt-1 text-xs text-brand-ink/60">RAL annua</p></div>
        ))}
      </div>
      <P>Quanto guadagna un cloud engineer in Italia? In sintesi: un cloud engineer junior parte indicativamente da 24.000–30.000 € lordi l'anno, mentre considerando tutti i livelli di esperienza la media si colloca tra circa 34.000 e 36.000 €, con i profili più esperti che superano i 40.000–50.000 €.</P>
      <P>In questa guida trovi i dati aggiornati al 2026 dalle principali fonti, perché le cifre cambiano da una fonte all'altra, da cosa dipende lo stipendio di un cloud engineer e come farlo crescere.</P>

      <H2 id="dati">Stipendio cloud engineer: i dati 2026</H2>
      <P>Ecco il confronto tra le principali fonti per stipendio medio e fasce retributive in Italia:</P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[40rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Fonte</th><th className="p-3">Dato</th><th className="p-3">Note</th></tr></thead>
          <tbody>{fonti.map(([f, d, n], i) => (
            <tr key={i} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{f}</td><td className="p-3 font-semibold text-brand-blue">{d}</td><td className="p-3 text-brand-ink/70">{n}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Tutte le cifre sono <strong>RAL</strong>, cioè retribuzione annua lorda, prima di tasse e contributi.</P>
      <div className="mt-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-5 leading-relaxed">
        <p className="font-extrabold">Perché i numeri sono così diversi?</p>
        <p className="mt-2">Perché ogni fonte misura una cosa diversa. Glassdoor e Indeed raccolgono stipendi dichiarati da chi lavora, di tutti i livelli. Le piattaforme della community tech e gli annunci di lavoro tendono invece a rappresentare di più i profili esperti e le aziende che pagano meglio. La fotografia più realistica per chi inizia è quella dei dati Glassdoor e Indeed.</p>
      </div>

      <H2 id="junior">Quanto guadagna un cloud engineer junior</H2>
      <P>Per il primo lavoro, un riferimento realistico è <strong>24.000–30.000 € di RAL</strong>. È una cifra in linea con altri ruoli tecnici junior, come lo sviluppatore software, e a volte leggermente superiore.</P>
      <P>Il punto di forza del cloud non è tanto lo stipendio di partenza, quanto la velocità di crescita: con qualche anno di esperienza e le competenze giuste, lo stipendio sale più in fretta rispetto a molti altri settori. Se stai partendo da zero, trovi il percorso nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>

      <H2 id="crescita">Come cresce lo stipendio con l'esperienza</H2>
      <div className="mt-6 space-y-3">
        {[
          ["Junior (0–2 anni)", "Indicativamente 24.000–30.000 €", "w-2/5"],
          ["Con qualche anno di esperienza", "La fascia più comune è tra 29.000 e 41.000 €", "w-3/5"],
          ["Profili esperti e specializzati", "Oltre i 40.000–50.000 €, con cifre più alte per architetti cloud, specialisti di sicurezza e ruoli di responsabilità", "w-full"],
        ].map(([t, d, w]) => (
          <div key={t} className="rounded-2xl border border-border p-5">
            <div className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-brand-blue" /><p className="font-extrabold">{t}</p></div>
            <div className="mt-3 h-2.5 rounded-full bg-secondary"><div className={`h-2.5 rounded-full bg-brand-blue ${w}`} /></div>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{d}</p>
          </div>
        ))}
      </div>

      <H2 id="da-cosa">Da cosa dipende lo stipendio di un cloud engineer</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {([
          ["Città", <>Milano e le grandi città del nord pagano in media di più, ma anche il costo della vita è più alto.</>],
          ["Tipo di azienda", <>Multinazionali e aziende di prodotto tendono a pagare più delle piccole società di consulenza, che però assumono più junior e fanno crescere in fretta.</>],
          ["Certificazioni", <>Una certificazione come la <A slug="aws-solutions-architect-associate">AWS Solutions Architect – Associate</A> rafforza il tuo potere negoziale, soprattutto all'inizio.</>],
          ["Specializzazione", <>Sicurezza cloud, Kubernetes e automazione sono tra le competenze più valorizzate.</>],
          ["Inglese", <>Aprirsi a team internazionali e aziende estere alza di molto il tetto.</>],
        ] as [string, ReactNode][]).map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>

      <H2 id="netto">Dalla RAL al netto: quanto arriva in busta paga</H2>
      <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 text-center sm:flex-row sm:justify-around">
        <div><p className="text-xs font-extrabold uppercase text-brand-ink/60">RAL</p><p className="font-blog-display text-3xl font-extrabold">26–27k €</p></div>
        <span className="text-2xl text-brand-ink/40">→</span>
        <div><p className="text-xs font-extrabold uppercase text-brand-ink/60">Netto al mese, circa</p><p className="flex items-center gap-2 font-blog-display text-3xl font-extrabold text-brand-blue"><Wallet className="h-7 w-7" />1.500–1.600 €</p></div>
      </div>
      <P>La RAL non è quello che ricevi ogni mese. Tolti contributi e tasse, e divisa per le mensilità previste dal contratto, una RAL di circa 26.000–27.000 € corrisponde indicativamente a circa 1.500–1.600 € netti al mese. Il netto esatto dipende da regione, detrazioni e numero di mensilità: per il tuo caso usa un calcolatore RAL-netto aggiornato.</P>
      <div className="mt-8 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="font-blog-display text-2xl font-extrabold">Vuoi arrivare al primo lavoro da cloud engineer con un percorso guidato?</p>
        <p className="mt-3 text-lg leading-relaxed"><Home>Diventa Cloud Engineer in 90 giorni</Home> ti prepara alle certificazioni CLF-C02 e SAA-C03, con progetti per il portfolio e preparazione al colloquio.</p>
        <p className="mt-3 text-lg">Non sei ancora sicuro? Fai prima il quiz gratuito di 2 minuti.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="aumentare">Come aumentare lo stipendio da cloud engineer</H2>
      <Bullets items={[
        <><strong>Certificati sulle competenze che contano</strong>: dopo le prime certificazioni, puntare su sicurezza o Kubernetes aumenta il valore sul mercato.</>,
        <><strong>Costruisci esperienza su progetti reali</strong>: i primi due anni sono quelli in cui impari di più. Scegli il lavoro anche in base a quanto ti fa crescere, non solo allo stipendio.</>,
        <><strong>Cambia azienda al momento giusto</strong>: nel settore tech, gli aumenti più consistenti arrivano spesso cambiando lavoro dopo qualche anno di esperienza.</>,
        <><strong>Migliora l'inglese</strong>: apre le porte a team internazionali e a posizioni meglio pagate.</>,
        <><strong>Specializzati</strong>: sicurezza cloud, FinOps e automazione sono aree in cui le aziende faticano a trovare persone.</>,
      ]} />

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
          "Un cloud engineer junior in Italia parte indicativamente da 24.000–30.000 € di RAL.",
          "Considerando tutti i livelli, la media si colloca tra circa 34.000 e 36.000 €, con i più esperti oltre i 40.000–50.000 €.",
          "Lo stipendio dipende da città, tipo di azienda, certificazioni, specializzazione e inglese.",
          "Il vero punto di forza del ruolo è la velocità di crescita.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi iniziare il percorso da cloud engineer?</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/" className="inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Scopri Diventa Cloud Engineer in 90 giorni</Link>
          <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl border border-brand-blue/30 px-5 py-3 font-extrabold text-brand-blue">Fai il quiz gratuito</a>
        </div>
      </div>
    </div>
  );
}
