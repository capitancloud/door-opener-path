import { Check, Lightbulb, Sparkles, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const toc = [
  { id: "cos-e", label: "Cos'è AWS Skill Builder" },
  { id: "gratis", label: "Cosa trovi gratis" },
  { id: "pagamento", label: "L'abbonamento a pagamento" },
  { id: "altre-risorse", label: "Altri corsi AWS gratis" },
  { id: "metodo", label: "Come prepararti gratis" },
  { id: "limiti", label: "Dove i gratuiti non bastano" },
  { id: "iniziare", label: "Come iniziare" },
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
const Steps = ({ items }: { items: ReactNode[] }) => (
  <div className="mt-6 space-y-3">{items.map((t, i) => (
    <div key={i} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><p className="leading-relaxed">{t}</p></div>
  ))}</div>
);

const confronto: [string, string, string][] = [
  ["Corsi digitali", "Sì, centinaia", "Sì, più corsi di preparazione avanzati"],
  ["Domande d'esame di esempio", "Set ridotti", "Esami di pratica ufficiali completi"],
  ["Laboratori guidati in ambiente AWS", "Limitati", "Sì, in ambienti dedicati senza rischio di costi"],
  ["Giochi e simulazioni pratiche", "In parte", "Sì, più ruoli e scenari"],
  ["Costo", "0", "Abbonamento mensile o annuale"],
];

const limiti: [string, string][] = [
  ["Manca un ordine pensato per te", "I percorsi ufficiali sono generici: non sanno da dove parti e cosa ti manca. Chi non ha basi di reti o Linux si blocca spesso sui primi argomenti tecnici."],
  ["Manca qualcuno a cui chiedere", "Quando non capisci un concetto, sei da solo. È il momento in cui la maggior parte delle persone abbandona."],
  ["Manca un criterio per sapere quando sei pronto", "Senza simulazioni complete e affidabili, rischi di prenotare troppo presto."],
  ["Manca la parte \"lavoro\"", "Le risorse gratuite ti preparano all'esame, non al colloquio: progetti per il portfolio, CV e preparazione tecnica restano sulle tue spalle."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "AWS Skill Builder è gratis?", a: <>Sì, in gran parte. Centinaia di corsi sono gratuiti. Laboratori avanzati ed esami di pratica completi richiedono invece un abbonamento a pagamento.</> },
  { q: "Bastano i corsi AWS gratis per superare la Cloud Practitioner?", a: <>Per molti sì, soprattutto se affiancati da pratica sulla console e da buone simulazioni. È l'esame più accessibile di AWS.</> },
  { q: "E per la Solutions Architect – Associate?", a: <>È più difficile farcela solo con le risorse gratuite, perché servono molta pratica e simulazioni realistiche di domande di scenario. Molti affiancano un abbonamento o un corso strutturato.</> },
  { q: "Serve un account AWS per usare Skill Builder?", a: <>Per i corsi gratuiti basta un account di Skill Builder. Per fare pratica sui servizi reali serve invece un account AWS, oppure i laboratori inclusi nell'abbonamento.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">AWS Skill Builder è la piattaforma ufficiale di AWS, con centinaia di corsi gratis: il miglior punto di partenza. Ma da sola lascia scoperti supporto, ordine personalizzato e preparazione al lavoro.</p>
      </div>
      <P>AWS Skill Builder è la piattaforma di formazione ufficiale di Amazon Web Services, e contiene centinaia di corsi AWS gratis. Se cerchi un corso AWS gratuito per iniziare a studiare il cloud senza spendere, è il miglior punto di partenza. Ma ha anche dei limiti, che è meglio conoscere prima di costruirci sopra tutta la preparazione a una certificazione.</P>
      <P>In questa guida trovi cosa offre AWS Skill Builder gratis, cosa include l'abbonamento a pagamento, quali altri corsi AWS gratuiti esistono e dove le risorse gratuite, da sole, non bastano.</P>

      <H2 id="cos-e">Cos'è AWS Skill Builder</H2>
      <P>AWS Skill Builder è il centro di formazione online di AWS. È pensato per chiunque voglia imparare a usare il cloud di Amazon: principianti, professionisti IT e aziende che formano i propri team. Contiene corsi digitali, percorsi di apprendimento, laboratori pratici e materiali di preparazione agli esami di certificazione.</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="flex gap-3 rounded-2xl border border-brand-blue/25 bg-brand-blue/5 p-5"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><div><p className="font-extrabold">Il vantaggio</p><p className="mt-1 leading-relaxed text-brand-ink/80">Il materiale è ufficiale: lo produce AWS, quindi segue da vicino i contenuti degli esami e i servizi aggiornati.</p></div></div>
        <div className="flex gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">Lo svantaggio</p><p className="mt-1 leading-relaxed text-brand-ink/80">Gran parte dei contenuti è in inglese e pensata per un pubblico globale, non per chi parte da zero in Italia.</p></div></div>
      </div>

      <H2 id="gratis">Cosa trovi gratis su AWS Skill Builder</H2>
      <P>Con un account gratuito hai accesso a:</P>
      <Bullets items={[
        <><strong>centinaia di corsi digitali</strong> su servizi, concetti e ruoli, dal livello base a quello avanzato;</>,
        <><strong>percorsi di apprendimento</strong> che mettono in ordine più corsi per un obiettivo, per esempio un ruolo o una certificazione;</>,
        <><strong>corsi introduttivi alle certificazioni</strong>, come quelli dedicati alla Cloud Practitioner;</>,
        <><strong>set di domande d'esame ufficiali</strong>, per farti un'idea del formato delle domande;</>,
        <><strong>alcune esperienze pratiche</strong> in versione gratuita, pensate per chi inizia.</>,
      ]} />
      <div className="mt-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-5 font-semibold leading-relaxed">Per chi vuole capire se il cloud gli piace, il materiale gratuito è più che sufficiente.</div>

      <H2 id="pagamento">Cosa include l'abbonamento a pagamento</H2>
      <P>L'abbonamento individuale a pagamento aggiunge soprattutto pratica ed esercitazioni d'esame:</P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[34rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3"></th><th className="p-3">Gratis</th><th className="p-3">Abbonamento individuale</th></tr></thead>
          <tbody>{confronto.map(([l, g, a], i) => (
            <tr key={l} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{l}</td><td className="p-3 text-brand-ink/80">{g}</td><td className="p-3 font-semibold text-brand-blue">{a}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Un vantaggio importante dei laboratori a pagamento è che si svolgono in ambienti AWS temporanei forniti da Skill Builder: puoi fare pratica senza rischiare costi imprevisti sul tuo account. Il prezzo dell'abbonamento è stato a lungo di circa 29 dollari al mese, ma controllalo sulla pagina ufficiale prima di attivarlo, perché può cambiare.</P>

      <H2 id="altre-risorse">Altri corsi e risorse AWS gratis</H2>
      <P>Oltre a Skill Builder, ci sono altre risorse gratuite molto utili:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          ["Documentazione ufficiale AWS", "Completa e aggiornata, anche se non adatta a chi parte da zero."],
          ["Guide ufficiali degli esami", "Elencano argomenti e pesi di ogni certificazione."],
          ["Whitepaper e Well-Architected Framework", "Fondamentali per la Solutions Architect – Associate."],
          ["Piano gratuito per nuovi account", "Per fare pratica su servizi reali, con attenzione ai costi."],
          ["Canali video", "Quelli ufficiali di AWS e i tanti contenuti gratuiti di formatori indipendenti."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>

      <H2 id="metodo">Come usare i corsi AWS gratis per prepararti</H2>
      <P>Se vuoi preparare una certificazione solo con risorse gratuite, ecco un metodo che funziona:</P>
      <Steps items={[
        <><strong>Parti dalla guida ufficiale dell'esame</strong>, per sapere esattamente cosa studiare.</>,
        <><strong>Segui un percorso di apprendimento su Skill Builder</strong>, nell'ordine proposto, senza saltare da un corso all'altro.</>,
        <><strong>Fai pratica sul tuo account AWS</strong> con il piano gratuito, impostando subito un budget con un avviso.</>,
        <><strong>Usa le domande ufficiali di esempio</strong> per capire il formato, poi cerca simulazioni complete.</>,
        <><strong>Prenota solo quando superi le simulazioni con costanza</strong>, per non dover ripagare l'esame.</>,
      ]} />
      <P>Trovi i dettagli specifici dei due esami principali nella guida alla <A slug="aws-cloud-practitioner">Cloud Practitioner</A> e nella guida alla <A slug="aws-solutions-architect-associate">Solutions Architect – Associate</A>.</P>

      <H2 id="limiti">Dove i corsi gratuiti non bastano</H2>
      <P>Le risorse gratuite sono ottime, ma lasciano scoperti alcuni punti che, per molti, fanno la differenza tra arrivare in fondo e mollare:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {limiti.map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>
      <P>Se sei molto autonomo, puoi colmare questi vuoti da solo. Se non lo sei, conviene affiancare un percorso strutturato. Trovi i criteri per scegliere bene nella guida su <A slug="corso-aws">come scegliere un corso AWS</A>.</P>
      <div className="mt-8 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="font-blog-display text-2xl font-extrabold">Vuoi un percorso che colmi questi vuoti?</p>
        <p className="mt-3 text-lg leading-relaxed"><Home>Diventa Cloud Engineer in 90 giorni</Home> ti guida dalle basi alle certificazioni CLF-C02 e SAA-C03, con simulatore d'esame, validazione 1-to-1 prima di prenotare e preparazione al colloquio.</p>
      </div>

      <H2 id="iniziare">Come iniziare con AWS Skill Builder</H2>
      <Steps items={[
        "Vai sul sito ufficiale di AWS Skill Builder.",
        "Crea un account gratuito: non serve un account AWS con carta di pagamento per accedere ai corsi gratuiti.",
        "Cerca il percorso di apprendimento legato al tuo obiettivo, per esempio la Cloud Practitioner.",
        "Iscriviti e segui i corsi nell'ordine proposto.",
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
          "AWS Skill Builder è la piattaforma di formazione ufficiale di AWS, con centinaia di corsi gratuiti.",
          "L'abbonamento a pagamento aggiunge laboratori in ambienti sicuri ed esami di pratica ufficiali completi.",
          "Con le risorse gratuite si può preparare la Cloud Practitioner; per la Solutions Architect – Associate serve più pratica.",
          "I corsi gratuiti non offrono un ordine personalizzato, supporto, un criterio di prontezza e la preparazione al lavoro.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi prepararti con un percorso guidato, dalle basi al colloquio?</p>
        <Link to="/" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Scopri Diventa Cloud Engineer in 90 giorni</Link>
      </div>
    </div>
  );
}
