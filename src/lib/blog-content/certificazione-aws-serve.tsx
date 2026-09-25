import { Award, Car, Check, FolderGit2, Lightbulb, MessageSquare, Sparkles, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const toc = [
  { id: "risposta", label: "La risposta breve" },
  { id: "cosa-fa", label: "Cosa fa per te" },
  { id: "cosa-non-fa", label: "Cosa non fa" },
  { id: "opinioni", label: "Le opinioni di chi seleziona" },
  { id: "quale", label: "Quale conta per il primo lavoro" },
  { id: "far-pesare", label: "Come farla pesare" },
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

const fa: [string, string][] = [
  ["Ti fa superare il primo filtro", "Molti CV vengono scartati in pochi secondi, a volte da software che cercano parole chiave. Una certificazione AWS nel CV è una di quelle parole che fanno passare il tuo profilo alla fase successiva."],
  ["Ti dà credibilità se parti da zero", "Se non hai una laurea tecnica o esperienza nel settore, la certificazione è una prova oggettiva: hai superato un esame ufficiale, riconosciuto in tutto il mondo, su argomenti precisi."],
  ["Ti dà un percorso di studio", "Ogni esame ha una guida ufficiale con gli argomenti da conoscere. Invece di studiare a caso, segui un programma preciso con un traguardo chiaro."],
  ["Ti fa parlare la lingua giusta", "Studiando per l'esame impari i servizi e i concetti che usano i team cloud ogni giorno. Al colloquio si sente."],
];
const nonFa: [string, string][] = [
  ["Non sostituisce l'esperienza", "Un selezionatore esperto capisce in pochi minuti se hai solo studiato per l'esame o se hai anche messo le mani sulla console."],
  ["Non garantisce il colloquio", "Nelle domande tecniche ti chiederanno di spiegare come faresti una cosa, non di recitare una definizione."],
  ["La Cloud Practitioner, da sola, raramente basta", "È un ottimo primo passo, ma per un ruolo da cloud engineer junior i selezionatori cercano di solito la Solutions Architect – Associate."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Vale la pena pagare una certificazione AWS?", a: <>Se il tuo obiettivo è lavorare nel cloud, sì: il costo dell'esame è basso rispetto al vantaggio che ti dà nella selezione. Conviene però presentarsi solo quando si è davvero pronti, per non doverlo pagare due volte.</> },
  { q: "Meglio una laurea o una certificazione AWS?", a: <>Non sono alternative: misurano cose diverse. Per un ruolo cloud junior, però, una certificazione recente e dei progetti pratici possono pesare più di una laurea non legata al settore.</> },
  { q: "Le certificazioni AWS scadono?", a: <>Sì, sono valide 3 anni. È un vantaggio nascosto: dimostrano che le tue competenze sono aggiornate.</> },
  { q: "Meglio una certificazione AWS o Azure?", a: <>Per chi inizia, AWS è spesso la scelta più comune, perché è la piattaforma più diffusa. Trovi il confronto in <A slug="aws-o-azure">AWS o Azure: quale imparare per primo</A>.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Sì, serve, ma non da sola. Ti fa notare dal selezionatore, soprattutto se parti da zero; poi al colloquio contano pratica, progetti e preparazione.</p>
      </div>
      <P>Una certificazione AWS serve per trovare lavoro? Sì, ma non da sola. È uno degli strumenti più efficaci per farsi notare da un selezionatore, soprattutto se non hai una laurea in informatica o esperienza nel settore. Però non è un biglietto d'ingresso automatico: funziona quando è accompagnata da pratica, progetti e una buona preparazione al colloquio.</P>
      <P>In questo articolo ti do la mia opinione, da formatore che accompagna persone verso il primo lavoro nel cloud: cosa fa davvero una certificazione AWS per te, cosa non fa e come farla pesare.</P>

      <H2 id="risposta">La risposta breve</H2>
      <P>La certificazione AWS è una condizione che aiuta molto, ma non basta. Ti apre porte che senza resterebbero chiuse, soprattutto nella prima fase della selezione. Poi, al colloquio, conta quello che sai fare davvero.</P>
      <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:flex-row sm:items-center">
        <Car className="h-10 w-10 shrink-0 text-brand-blue" />
        <p className="text-lg font-semibold leading-relaxed">Pensala come la patente: senza, non ti fanno nemmeno salire in macchina. Con la patente in tasca, però, devi comunque dimostrare di saper guidare.</p>
      </div>

      <H2 id="cosa-fa">Cosa fa una certificazione AWS per te</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {fa.map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-border p-5"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="cosa-non-fa">Cosa non fa</H2>
      <div className="mt-6 space-y-3">
        {nonFa.map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="opinioni">Certificazione AWS: le opinioni di chi seleziona</H2>
      <P>Chi seleziona profili cloud junior tende a ragionare così:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Certificazione senza progetti", "Il candidato ha studiato, ma non sappiamo se sa lavorare.", "Così così", "border-border"],
          ["Progetti senza certificazione", "Interessante, ma difficile capire quanto sia solida la preparazione.", "Così così", "border-border"],
          ["Certificazione + progetti", "Il profilo più convincente, anche senza esperienza lavorativa.", "Il migliore", "border-brand-blue bg-brand-blue/5"],
        ].map(([t, d, v, c]) => (
          <div key={t} className={`rounded-2xl border-2 p-5 ${c}`}><p className="text-xs font-extrabold uppercase text-brand-blue">{v}</p><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6">
        <p className="font-extrabold">Attenzione all'effetto opposto</p>
        <p className="mt-2 leading-relaxed">Collezionare molte certificazioni senza nessun progetto a supporto può insospettire. Due certificazioni ben preparate e qualche progetto concreto valgono più di cinque certificazioni prese di corsa.</p>
      </div>

      <H2 id="quale">Quale certificazione conta davvero per il primo lavoro</H2>
      <P>Per chi punta a un ruolo cloud junior, il percorso più efficace è:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border p-5"><span className="rounded-full bg-secondary px-3 py-1 text-xs font-extrabold text-brand-blue">Passo 1 · CLF-C02</span><p className="mt-3 font-extrabold">AWS Cloud Practitioner</p><p className="mt-1 leading-relaxed text-brand-ink/80">La base e il primo traguardo. Trovi tutto nella <A slug="aws-cloud-practitioner">guida alla Cloud Practitioner</A>.</p></div>
        <div className="rounded-2xl border-2 border-brand-blue bg-brand-blue/5 p-5"><span className="rounded-full bg-brand-blue px-3 py-1 text-xs font-extrabold text-primary-foreground">Passo 2 · SAA-C03</span><p className="mt-3 font-extrabold">AWS Solutions Architect – Associate</p><p className="mt-1 leading-relaxed text-brand-ink/80">La certificazione che compare più spesso negli annunci. Trovi tutto nella <A slug="aws-solutions-architect-associate">guida alla SAA-C03</A>.</p></div>
      </div>
      <P>Se vuoi il quadro completo di tutte le certificazioni, con costi e percorsi alternativi, leggi la guida sulle <A slug="certificazioni-aws">certificazioni AWS</A>.</P>

      <H2 id="far-pesare">Come far pesare davvero la certificazione</H2>
      <P>Per trasformare la certificazione in colloqui, affiancala a tre cose:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {([
          [FolderGit2, "2–4 progetti pratici su GitHub", "Per esempio un'applicazione su più Availability Zone o un'infrastruttura creata con Terraform, ognuno con una spiegazione chiara."],
          [Award, "CV e LinkedIn aggiornati", "Con le certificazioni ben visibili e le parole chiave che usano i selezionatori cloud."],
          [MessageSquare, "Preparazione al colloquio tecnico", "Allenandoti a spiegare ad alta voce cosa hai costruito e perché hai fatto certe scelte."],
        ] as const).map(([Icon, t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><Icon className="h-6 w-6 text-brand-blue" /><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Trovi il percorso completo, dalle basi al primo colloquio, nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>
      <div className="mt-8 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="font-blog-display text-2xl font-extrabold">Vuoi certificazioni, progetti e preparazione al colloquio in un unico percorso?</p>
        <p className="mt-3 text-lg leading-relaxed"><Home>Diventa Cloud Engineer in 90 giorni</Home> include la preparazione a CLF-C02 e SAA-C03, i progetti per il portfolio e la preparazione a CV, LinkedIn e colloquio.</p>
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
          "Una certificazione AWS serve per trovare lavoro, ma non basta da sola.",
          "Ti fa superare il primo filtro e ti dà credibilità, soprattutto se parti da zero.",
          "Per un ruolo cloud junior, la più importante è la Solutions Architect – Associate.",
          "Funziona davvero se affiancata da progetti pratici, un buon CV e la preparazione al colloquio.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi un percorso che unisca certificazioni, pratica e preparazione al lavoro?</p>
        <Link to="/" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Scopri Diventa Cloud Engineer in 90 giorni</Link>
      </div>
    </div>
  );
}
