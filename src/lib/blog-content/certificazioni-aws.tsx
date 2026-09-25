import { Link } from "@tanstack/react-router";
import { AlertTriangle, BadgeCheck, Check, GraduationCap, HelpCircle, Lightbulb, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "cos-e", label: "Certificazione AWS: cos'è" },
  { id: "livelli", label: "I livelli" },
  { id: "elenco", label: "L'elenco completo 2026" },
  { id: "novita", label: "Le novità 2026" },
  { id: "costi", label: "Quanto costa" },
  { id: "da-dove", label: "Da quale partire" },
  { id: "esame", label: "Come si svolge l'esame" },
  { id: "preparazione", label: "Come prepararsi" },
  { id: "aws-vs-altri", label: "AWS, Azure o Google Cloud?" },
  { id: "errori", label: "Gli errori più comuni" },
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

const livelli: [string, string][] = [
  ["Business", "Per chi guida strategie e progetti di intelligenza artificiale in azienda, senza costruire soluzioni tecniche."],
  ["Foundational", "Il livello base, per chi inizia o vuole una visione d'insieme."],
  ["Associate", "Il livello tecnico intermedio, legato a un ruolo preciso: architetto, sviluppatore, operations, dati, machine learning."],
  ["Professional", "Il livello avanzato, per chi ha già esperienza concreta su AWS."],
  ["Specialty", "Certificazioni verticali su un dominio specifico, come sicurezza o networking."],
];

const catalogo: [string, string, string, string][] = [
  ["AI Business Strategist", "AIB-C01", "Business", "Manager e responsabili di progetti AI"],
  ["Cloud Practitioner", "CLF-C02", "Foundational", "Chi parte da zero"],
  ["AI Practitioner", "AIF-C01", "Foundational", "Chi vuole le basi di AI e machine learning"],
  ["Solutions Architect – Associate", "SAA-C03", "Associate", "Chi progetta infrastrutture cloud"],
  ["Developer – Associate", "DVA-C02", "Associate", "Sviluppatori che lavorano su AWS"],
  ["CloudOps Engineer – Associate", "SOA-C03", "Associate", "Chi gestisce e monitora sistemi in produzione"],
  ["Data Engineer – Associate", "DEA-C01", "Associate", "Chi costruisce pipeline di dati"],
  ["Machine Learning Engineer – Associate", "MLA-C01 / MLA-C02", "Associate", "Chi porta in produzione modelli di ML e AI"],
  ["Solutions Architect – Professional", "SAP-C02", "Professional", "Architetti con almeno 2 anni di esperienza"],
  ["DevOps Engineer – Professional", "DOP-C02", "Professional", "DevOps con esperienza su AWS"],
  ["Generative AI Developer – Professional", "AIP-C01", "Professional", "Chi sviluppa soluzioni di AI generativa"],
  ["Security – Specialty", "SCS-C03", "Specialty", "Professionisti della sicurezza cloud"],
  ["Advanced Networking – Specialty", "ANS-C01", "Specialty", "Esperti di reti cloud e ibride"],
];

const novita: [string, string][] = [
  ["SysOps Administrator è diventata CloudOps Engineer", "La certificazione per chi si occupa di operations ha cambiato nome ed è stata aggiornata con il nuovo esame SOA-C03."],
  ["La Machine Learning – Specialty è stata ritirata", "Chi vuole certificarsi sul machine learning oggi passa dalla Machine Learning Engineer – Associate, che a sua volta è in fase di aggiornamento alla versione MLA-C02."],
  ["La Solutions Architect – Professional cambia versione", "Il nuovo esame SAP-C03 sostituirà l'attuale SAP-C02 a fine 2026."],
];

const costi: [string, string][] = [
  ["Foundational", "100 USD", "Cloud Practitioner, AI Practitioner"],
  ["Associate", "150 USD", "Solutions Architect, Developer, CloudOps, ecc."],
  ["Professional e Specialty", "300 USD", "Tutte le certificazioni avanzate e verticali"],
];

const profili: [string, ReactNode][] = [
  ["Parti da zero o vieni da un altro settore?", <>Inizia dalla <strong>Cloud Practitioner (CLF-C02)</strong>. Ti dà le basi del cloud, ti abitua al formato degli esami AWS e ti fa ottenere lo sconto del 50% sull'esame successivo. Poi passa alla <strong>Solutions Architect – Associate (SAA-C03)</strong>, la certificazione che pesa davvero per un ruolo da cloud engineer junior. È il percorso che descrivo nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</>],
  ["Hai già esperienza in IT?", <>Se lavori da qualche anno come sistemista o in ambito reti, puoi valutare di andare direttamente alla <strong>Solutions Architect – Associate</strong>. Molti ci riescono, anche se la Cloud Practitioner resta utile come riscaldamento.</>],
  ["Sei uno sviluppatore?", <>La <strong>Developer – Associate</strong> è la scelta più naturale.</>],
  ["Lavori in operations?", <>Punta alla <strong>CloudOps Engineer – Associate</strong>.</>],
  ["Ti interessano dati e intelligenza artificiale?", <>Parti dalla <strong>AI Practitioner</strong>, poi valuta Data Engineer o Machine Learning Engineer – Associate.</>],
];

const errori: [string, string][] = [
  ["Prenotare l'esame troppo presto", "Fissare una data aiuta la motivazione, ma se arrivi all'esame impreparato rischi di pagarlo due volte. Prenota quando superi le simulazioni con costanza, non prima."],
  ["Studiare solo sulle domande d'esame", "Imparare a memoria le risposte delle simulazioni può farti superare l'esame, ma non ti prepara al colloquio né al lavoro. I selezionatori se ne accorgono in pochi minuti."],
  ["Non toccare mai la console", "Leggere cos'è una VPC è diverso dal crearne una. La pratica rende i concetti concreti e li fa ricordare molto più a lungo."],
  ["Voler fare tutto subito", "Puntare a tre certificazioni in parallelo porta quasi sempre a non finirne nessuna. Una alla volta, nell'ordine giusto."],
  ["Usare materiale vecchio", "Gli esami AWS vengono aggiornati: un corso pensato per una versione precedente può farti studiare argomenti superati o saltarne di nuovi. Controlla sempre che il materiale corrisponda al codice attuale dell'esame."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Le certificazioni AWS scadono?", a: "Sì, sono valide 3 anni. Per rinnovarle devi superare la versione aggiornata dello stesso esame, oppure ottenere una certificazione di livello superiore che le rinnova in automatico." },
  { q: "Serve la Cloud Practitioner per fare la Solutions Architect – Associate?", a: "No, non è obbligatoria. Ma se parti da zero è molto utile: ti dà le basi, ti abitua al formato dell'esame e ti fa ottenere il 50% di sconto sulla certificazione successiva." },
  { q: "Quanto tempo serve per preparare una certificazione AWS?", a: "Dipende dal livello e dal tempo che dedichi. Per chi parte da zero e studia con costanza, la Cloud Practitioner richiede qualche settimana, la Solutions Architect – Associate indicativamente un paio di mesi. Con esperienza in IT i tempi si accorciano." },
  { q: "Si può fare l'esame da casa?", a: "Sì. Tutti gli esami si possono sostenere online, con un sorvegliante collegato in webcam. Serve una stanza tranquilla, un computer con webcam e una connessione stabile." },
  { q: "Qual è la certificazione AWS più richiesta?", a: "Per i ruoli cloud junior, la Solutions Architect – Associate. È quella che compare più spesso negli annunci per cloud engineer e che dimostra di saper progettare un'infrastruttura completa." },
];

const QuizBox = () => (
  <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
    <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Non sai da dove partire?</p>
    <p className="mt-3 text-lg leading-relaxed">Se hai dubbi su quale strada fare, parti dal quiz gratuito di 2 minuti: 9 domande per capire se una carriera nel cloud è adatta al tuo punto di partenza.</p>
    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
  </div>
);

const Card = ({ t, d }: { t: string; d: ReactNode }) => (
  <div className="rounded-2xl border border-border p-5"><p className="font-blog-display text-lg font-extrabold text-brand-blue">{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{d}</p></div>
);

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Livelli diversi, sigle che cambiano, costi diversi. In questa guida trovi la mappa completa aggiornata al 2026 e la certificazione da cui partire in base al tuo profilo.</p>
      </div>
      <P>Le certificazioni AWS sono tra le più richieste nel mondo del cloud, ma orientarsi non è semplice: livelli diversi, sigle che cambiano, esami che vengono aggiornati o ritirati. In questa guida trovi tutto quello che ti serve per scegliere: cos'è una certificazione AWS, l'elenco completo aggiornato al 2026, quanto costa ogni esame e da quale certificazione conviene partire in base al tuo profilo.</P>

      <H2 id="cos-e">Certificazione AWS: cos'è e a cosa serve</H2>
      <P>Una certificazione AWS, spesso chiamata anche certificazione Amazon AWS, è un attestato ufficiale rilasciato da Amazon Web Services dopo il superamento di un esame. Dimostra che conosci la piattaforma cloud di Amazon a un certo livello: dai concetti di base fino alla progettazione di architetture complesse.</P>
      <P>A cosa serve, in pratica:</P>
      <Bullets items={[
        <>Ti rende <strong>credibile agli occhi di un selezionatore</strong>, soprattutto se non hai una laurea in informatica o esperienza nel settore.</>,
        <>Ti dà un <strong>percorso di studio strutturato</strong>, perché ogni esame ha una guida ufficiale con gli argomenti da conoscere.</>,
        <>Ti fa <strong>parlare la stessa lingua dei team tecnici</strong>, perché impari i servizi e le buone pratiche usate davvero nelle aziende.</>,
      ]} />
      <div className="mt-6 flex gap-3 rounded-2xl border border-brand-yellow/50 bg-brand-yellow/10 p-5"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow-deep" /><p className="leading-relaxed"><strong>Attenzione però:</strong> una certificazione da sola non basta per essere assunti. Funziona quando è accompagnata da pratica reale e da qualche progetto da mostrare. Ne parlo nell'articolo <A slug="certificazione-aws-serve">la certificazione AWS serve davvero per trovare lavoro?</A>.</p></div>

      <H2 id="livelli">I livelli delle certificazioni AWS</H2>
      <P>Le certificazioni AWS sono organizzate in cinque categorie:</P>
      <div className="mt-6 space-y-3">
        {livelli.map(([t, d]) => <Card key={t} t={t} d={d} />)}
      </div>
      <P>Per chi vuole lavorare nel cloud, i livelli che contano all'inizio sono <strong>Foundational e Associate</strong>.</P>

      <H2 id="elenco">L'elenco completo delle certificazioni AWS nel 2026</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[40rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Certificazione</th><th className="p-3">Codice</th><th className="p-3">Livello</th><th className="p-3">Per chi è</th></tr></thead>
          <tbody>{catalogo.map(([n, c, l, p], i) => (
            <tr key={c} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{n}</td><td className="p-3 font-mono text-xs sm:text-sm">{c}</td><td className="p-3">{l}</td><td className="p-3 text-brand-ink/75">{p}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>AWS aggiorna spesso il catalogo: prima di iniziare a studiare, verifica sempre il codice dell'esame sulla pagina ufficiale della certificazione.</P>

      <H2 id="novita">Le novità 2026 da sapere prima di iniziare</H2>
      <P>Prima di scegliere, tieni conto di tre cambiamenti recenti nel catalogo AWS:</P>
      <div className="mt-6 space-y-3">
        {novita.map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border bg-secondary p-5"><BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="costi">Quanto costa una certificazione AWS</H2>
      <P>Il costo della certificazione AWS dipende dal livello dell'esame:</P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[32rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Livello</th><th className="p-3">Costo dell'esame</th><th className="p-3">Include</th></tr></thead>
          <tbody>{costi.map(([l, c, inc], i) => (
            <tr key={l} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{l}</td><td className="p-3 font-blog-display text-lg font-extrabold text-brand-blue">{c}</td><td className="p-3 text-brand-ink/75">{inc}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>I prezzi sono in dollari: in euro l'importo dipende dal cambio del momento e può includere l'IVA, quindi controlla la cifra esatta quando prenoti.</P>
      <P>Tre cose da sapere per spendere meno:</P>
      <Bullets items={[
        <><strong>Dopo la prima certificazione hai il 50% di sconto sulla successiva.</strong> Superata la Cloud Practitioner, per esempio, la Solutions Architect – Associate ti costa la metà.</>,
        <><strong>Se non superi l'esame, lo ripaghi.</strong> Devi aspettare 14 giorni prima di ritentare e pagare di nuovo la quota intera. Per questo conviene presentarsi solo quando si è davvero pronti.</>,
        <><strong>La certificazione dura 3 anni.</strong> Per mantenerla attiva devi superare di nuovo l'esame aggiornato oppure una certificazione di livello superiore che la rinnova automaticamente.</>,
      ]} />

      <H2 id="da-dove">Da quale certificazione AWS partire</H2>
      <P>Non esiste una risposta unica: dipende da dove parti e da quale lavoro vuoi fare.</P>
      <div className="mt-6 space-y-3">
        {profili.map(([t, d]) => <Card key={t} t={t} d={d} />)}
      </div>
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <GraduationCap className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 text-lg leading-relaxed">Il consiglio vale per tutti: <strong>fai una certificazione alla volta</strong> e affiancala sempre alla pratica. Due certificazioni ben preparate valgono più di cinque prese di corsa.</p>
      </div>
      <P>Se vuoi prepararti alle prime due certificazioni con un percorso guidato, il percorso <Home>Diventa Cloud Engineer in 90 giorni</Home> include la preparazione completa a CLF-C02 e SAA-C03, con simulatore d'esame e validazione 1-to-1 prima di prenotare.</P>

      <H2 id="esame">Come si svolge l'esame</H2>
      <P>Tutti gli esami AWS funzionano in modo simile:</P>
      <Bullets items={[
        <><strong>Dove:</strong> in un centro Pearson VUE oppure online da casa, con un sorvegliante collegato in webcam.</>,
        <><strong>Formato:</strong> domande a risposta multipla, con una o più risposte corrette.</>,
        <><strong>Punteggio:</strong> da 100 a 1.000. Per la Cloud Practitioner serve almeno 700, per la Solutions Architect – Associate almeno 720.</>,
        <><strong>Durata:</strong> 90 minuti per la Cloud Practitioner, 130 per la Solutions Architect – Associate, entrambe con 65 domande.</>,
      ]} />
      <P>Se l'inglese non è la tua lingua madre, puoi richiedere 30 minuti in più per l'esame: è un aiuto concreto che vale la pena richiedere sempre.</P>

      <H2 id="preparazione">Come prepararsi a una certificazione AWS</H2>
      <P>Una preparazione efficace ha quattro elementi:</P>
      <ol className="mt-6 space-y-4">
        {[
          <><strong>La guida ufficiale dell'esame.</strong> È gratuita e ti dice esattamente quali argomenti sono inclusi e con che peso.</>,
          <><strong>Un corso strutturato.</strong> AWS offre materiali gratuiti su Skill Builder (trovi cosa contiene e dove non basta nella guida su <A slug="aws-skill-builder">AWS Skill Builder e corsi AWS gratis</A>), a cui puoi affiancare un corso che segua l'ordine degli argomenti.</>,
          <><strong>Pratica sulla console AWS.</strong> Creare davvero server, reti e permessi è il modo più rapido per ricordare i concetti. Con un account gratuito e un po' di attenzione ai costi puoi fare quasi tutto.</>,
          <><strong>Simulazioni d'esame.</strong> Sono il vero termometro della preparazione. Quando superi con costanza le simulazioni con un buon margine, sei pronto per prenotare.</>,
        ].map((t, i) => (
          <li key={i} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><p className="text-lg leading-relaxed">{t}</p></li>
        ))}
      </ol>
      <P>Per i dettagli specifici di ogni esame, leggi la <A slug="aws-cloud-practitioner">guida completa alla Cloud Practitioner</A> e la <A slug="aws-solutions-architect-associate">guida alla Solutions Architect – Associate</A>.</P>
      <QuizBox />

      <H2 id="aws-vs-altri">Perché partire dalle certificazioni AWS e non da Azure o Google Cloud</H2>
      <P>Anche Microsoft Azure e Google Cloud hanno i loro percorsi di certificazione, e sono tutti validi. Per chi inizia, però, AWS ha tre vantaggi concreti:</P>
      <Bullets items={[
        <>È la <strong>piattaforma cloud più diffusa</strong>, quindi è anche quella che compare più spesso negli annunci di lavoro.</>,
        <>Ha un <strong>percorso d'ingresso chiaro</strong>, dalla Cloud Practitioner alla Solutions Architect – Associate.</>,
        <><strong>I concetti si trasferiscono:</strong> una volta capito come funzionano server, reti, permessi e storage su AWS, imparare Azure o Google Cloud richiede molto meno tempo.</>,
      ]} />
      <P>Ci sono eccezioni: se nella tua zona le aziende lavorano soprattutto con prodotti Microsoft, Azure può avere senso fin da subito. Trovi il confronto completo in <A slug="aws-o-azure">AWS o Azure: quale imparare per primo</A>.</P>

      <H2 id="errori">Gli errori più comuni nella preparazione</H2>
      <div className="mt-6 space-y-3">
        {errori.map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
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
      <P>Le certificazioni AWS, in quattro punti:</P>
      <ul className="mt-5 space-y-2">
        {[
          "Le certificazioni AWS sono organizzate in cinque livelli: Business, Foundational, Associate, Professional e Specialty.",
          "Costano 100, 150 o 300 dollari a seconda del livello, e dopo la prima hai il 50% di sconto sulla successiva.",
          "Se parti da zero, il percorso più efficace è Cloud Practitioner e poi Solutions Architect – Associate.",
          "Le esami si sostengono in inglese, ma con un buon livello di lettura tecnica sono alla portata di tutti.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Una certificazione alla volta, con la pratica al fianco. È questa la strada giusta.</p>
        <p className="mt-3 text-lg">Vuoi prepararti a CLF-C02 e SAA-C03 con un metodo che ti dice quando sei pronto per prenotare? Scopri il percorso <Home>Diventa Cloud Engineer in 90 giorni</Home>. Non sei ancora sicuro? Fai prima il <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-blue underline underline-offset-4">quiz gratuito di 2 minuti</a>.</p>
      </div>
    </div>
  );
}
