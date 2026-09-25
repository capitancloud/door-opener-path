import { Link } from "@tanstack/react-router";
import { AlertTriangle, BadgeCheck, Check, GraduationCap, HelpCircle, Languages, Lightbulb, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "cos-e", label: "Cos'è la Cloud Practitioner" },
  { id: "a-chi", label: "A chi serve (e a chi no)" },
  { id: "sintesi-esame", label: "L'esame CLF-C02 in sintesi" },
  { id: "domini", label: "I 4 domini dell'esame" },
  { id: "servizi", label: "I servizi AWS da conoscere" },
  { id: "domande", label: "Domande e punteggio" },
  { id: "inglese", label: "L'esame in inglese" },
  { id: "piano", label: "Piano di studio in 4 settimane" },
  { id: "corso", label: "Come scegliere un corso" },
  { id: "giorno-esame", label: "Il giorno dell'esame" },
  { id: "errori", label: "Gli errori più comuni" },
  { id: "dopo", label: "Dopo la Cloud Practitioner" },
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

const sintesiEsame: [string, string][] = [
  ["Codice esame", "CLF-C02"],
  ["Livello", "Foundational"],
  ["Durata", "90 minuti"],
  ["Domande", "65 (50 valutate + 15 non valutate)"],
  ["Tipo di domande", "Risposta multipla e risposta multipla con più opzioni corrette"],
  ["Punteggio minimo", "700 su una scala da 100 a 1.000"],
  ["Costo", "100 USD"],
  ["Dove", "Centro Pearson VUE o online da casa"],
  ["Validità", "3 anni"],
];

const domini: [string, string, number][] = [
  ["Cloud Concepts", "I concetti di base del cloud: quali vantaggi offre rispetto a un data center tradizionale, cosa sono elasticità, scalabilità e alta disponibilità, quali sono i modelli di deployment (cloud pubblico, privato, ibrido) e i principi del AWS Well-Architected Framework. Qui trovi anche le strategie di migrazione verso il cloud e l'economia del cloud: perché si passa da spese fisse a costi variabili.", 24],
  ["Security and Compliance", "Il secondo dominio per peso, e uno dei più importanti. Il concetto chiave è il modello di responsabilità condivisa: AWS protegge l'infrastruttura fisica e i servizi, tu sei responsabile di come li configuri e di chi può accedere ai tuoi dati. Poi ci sono la gestione degli accessi con IAM (utenti, gruppi, ruoli, policy, autenticazione a più fattori), la crittografia e i servizi dedicati alla sicurezza e alla conformità.", 30],
  ["Cloud Technology and Services", "Il dominio più pesante. Devi conoscere i servizi principali e saper scegliere quello giusto per un caso d'uso: calcolo, storage, database, rete, monitoraggio. Devi anche capire l'infrastruttura globale di AWS: Regioni, Availability Zone ed edge location. Non serve saperli configurare nel dettaglio: serve sapere a cosa servono.", 34],
  ["Billing, Pricing, and Support", "Come si paga AWS: i modelli di prezzo di EC2 (On-Demand, istanze riservate, Savings Plans, istanze Spot), gli strumenti per controllare la spesa come Cost Explorer, AWS Budgets e il Pricing Calculator, e i piani di supporto disponibili. È il dominio più piccolo, ma le domande sono spesso facili se hai studiato: sono punti da non perdere.", 12],
];

const servizi: [string, string][] = [
  ["Calcolo", "EC2, Lambda, Elastic Beanstalk, ECS"],
  ["Storage", "S3, EBS, EFS, S3 Glacier"],
  ["Database", "RDS, Aurora, DynamoDB"],
  ["Rete", "VPC, Route 53, CloudFront"],
  ["Sicurezza", "IAM, AWS Shield, AWS WAF, GuardDuty, KMS"],
  ["Monitoraggio", "CloudWatch, CloudTrail, Trusted Advisor"],
  ["Costi", "Cost Explorer, AWS Budgets, Pricing Calculator"],
];

const motiviInglese = [
  "i nomi dei servizi e i termini tecnici sono comunque in inglese;",
  "le simulazioni e la documentazione ufficiale sono in inglese;",
  "è la lingua che userai al lavoro e nei colloqui tecnici.",
];

const settimane: [string, string][] = [
  ["Settimana 1: i concetti del cloud e l'infrastruttura globale", "Vantaggi del cloud, modelli di deployment, Regioni e Availability Zone, Well-Architected Framework. Crea un account AWS gratuito e familiarizza con la console."],
  ["Settimana 2: sicurezza e servizi principali", "Modello di responsabilità condivisa e IAM, poi calcolo, storage e database. Per ogni servizio prova almeno un'operazione base sulla console: crea un bucket S3, avvia e ferma un'istanza EC2."],
  ["Settimana 3: rete, monitoraggio e costi", "VPC, CloudFront e Route 53, poi CloudWatch e CloudTrail, infine modelli di prezzo e strumenti di controllo della spesa. Imposta subito un budget con un avviso: ti protegge da costi imprevisti e ti fa esercitare su un argomento d'esame."],
  ["Settimana 4: simulazioni d'esame", "Fai simulazioni complete a tempo, in inglese. Per ogni errore, torna sull'argomento e rileggilo. Quando superi le simulazioni con costanza e con un buon margine sopra la soglia, sei pronto per prenotare."],
];

const corsoChecklist = [
  "è aggiornato al CLF-C02, non alla versione precedente;",
  "segue i quattro domini ufficiali, con più spazio a quelli che pesano di più;",
  "include esercizi pratici sulla console, non solo slide;",
  "ha simulazioni d'esame realistiche, con la spiegazione di ogni risposta, giusta o sbagliata;",
  "ti prepara all'esame in inglese, con la terminologia originale.",
];

const errori: [string, string][] = [
  ["Sottovalutarlo", "È l'esame AWS più accessibile, ma non è una formalità. Chi si presenta dopo aver guardato qualche video senza fare simulazioni rischia di ripagarlo."],
  ["Confondere servizi simili", "Molte domande mettono a confronto servizi che sembrano uguali: CloudWatch e CloudTrail, Shield e WAF, EBS ed EFS, istanze riservate e Savings Plans. Per ogni coppia, prepara una frase che spieghi la differenza."],
  ["Leggere di fretta", "Parole come \"più economico\", \"senza gestione dei server\" o \"con il minimo sforzo operativo\" cambiano la risposta corretta. Leggi ogni domanda fino in fondo prima di guardare le opzioni."],
  ["Bloccarsi su una domanda", "Hai circa un minuto e mezzo per domanda. Se una ti blocca, segnala per la revisione, rispondi comunque e vai avanti: alla fine avrai tempo per tornarci."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "L'esame AWS Cloud Practitioner è difficile?", a: <>È l'esame AWS più accessibile. Le domande verificano la comprensione dei concetti, non competenze tecniche avanzate. Con una preparazione costante e qualche simulazione, è alla portata anche di chi parte da zero.</> },
  { q: "Quanto tempo serve per preparare la CLF-C02?", a: <>Indicativamente 3–4 settimane con un'ora o due al giorno. Se hai già esperienza in IT, anche meno.</> },
  { q: "Serve esperienza per fare l'esame?", a: <>No. La guida ufficiale indica come candidato ideale chi ha fino a 6 mesi di esposizione ad AWS, ma non ci sono requisiti obbligatori.</> },
  { q: "La certificazione AWS Cloud Practitioner basta per trovare lavoro?", a: <>Da sola, raramente per un ruolo tecnico. È molto utile come primo passo, abbinata alla Solutions Architect – Associate e a qualche progetto pratico. Ne parlo in dettaglio nell'articolo <A slug="certificazione-aws-serve">la certificazione AWS serve davvero per trovare lavoro?</A>.</> },
  { q: "Quanto costa l'esame CLF-C02?", a: <>100 dollari, più eventuali tasse. In euro l'importo dipende dal cambio del momento.</> },
  { q: "Se non lo supero, posso ripeterlo?", a: <>Sì, dopo 14 giorni e pagando di nuovo la quota intera. Non c'è un limite al numero di tentativi.</> },
];

const QuizBox = () => (
  <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
    <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Non sai da dove partire?</p>
    <p className="mt-3 text-lg leading-relaxed">Se hai dubbi su quale strada fare, parti dal quiz gratuito di 2 minuti: 9 domande per capire se una carriera nel cloud è adatta al tuo punto di partenza.</p>
    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
  </div>
);

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Cosa verifica l'esame CLF-C02, com'è strutturato, quali argomenti studiare, quanto costa e un piano di studio pratico in 4 settimane per arrivare pronto.</p>
      </div>
      <P>La AWS Cloud Practitioner è la certificazione d'ingresso nel mondo Amazon Web Services, ed è il primo passo consigliato per chi vuole lavorare nel cloud partendo da zero. In questa guida trovi tutto quello che serve sull'esame CLF-C02: cosa verifica, com'è strutturato, quali argomenti studiare, come si svolge, quanto costa e un piano di studio pratico per arrivare pronto.</P>
      <P>È la guida che avrei voluto leggere prima del mio primo esame AWS: niente teoria inutile, solo quello che conta per superarlo.</P>

      <H2 id="cos-e">Cos'è la certificazione AWS Cloud Practitioner</H2>
      <P>La certificazione AWS Cloud Practitioner attesta che conosci il cloud di Amazon a livello generale: cos'è, perché le aziende lo usano, quali sono i servizi principali, come funzionano sicurezza e costi. Il codice dell'esame attuale è CLF-C02.</P>
      <P>È una certificazione di livello Foundational, cioè il gradino più basso della scala AWS. Non ti chiede di configurare server o scrivere codice: ti chiede di capire il linguaggio e i concetti su cui si basa tutto il resto. Se vuoi il quadro completo di tutti i livelli, lo trovi nella <A slug="certificazioni-aws">guida sulle certificazioni AWS</A>.</P>

      <H2 id="a-chi">A chi serve (e a chi no)</H2>
      <P>La Cloud Practitioner è pensata per chi ha fino a 6 mesi di esposizione ad AWS. È utile soprattutto se:</P>
      <Bullets items={[
        <>parti da zero e vuoi un primo traguardo concreto nel cloud;</>,
        <>vieni da un altro settore e vuoi capire se il cloud fa per te prima di investire mesi di studio;</>,
        <>lavori a contatto con team tecnici, per esempio nelle vendite, nella gestione dei progetti o nel supporto.</>,
      ]} />
      <P>È meno utile se hai già esperienza solida in IT: in quel caso puoi puntare direttamente alla Solutions Architect – Associate, che trovi nella <A slug="aws-solutions-architect-associate">guida all'esame SAA-C03</A>. Anche lì, però, la Cloud Practitioner resta un buon riscaldamento, e ti dà il 50% di sconto sull'esame successivo.</P>

      <H2 id="sintesi-esame">L'esame CLF-C02 in sintesi</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[32rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Voce</th><th className="p-3">Dettaglio</th></tr></thead>
          <tbody>{sintesiEsame.map(([v, d], i) => (
            <tr key={v} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{v}</td><td className="p-3 text-brand-ink/75">{d}</td></tr>
          ))}</tbody>
        </table>
      </div>

      <H2 id="domini">Gli argomenti dell'esame: i 4 domini</H2>
      <P>L'esame CLF-C02 è diviso in quattro aree, ciascuna con un peso preciso sul punteggio. Conoscerle ti dice dove concentrare lo studio.</P>
      <div className="mt-6 space-y-3">
        {domini.map(([t, d, peso]) => (
          <div key={t} className="rounded-2xl border border-border p-5">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-blog-display text-lg font-extrabold text-brand-blue">{t}</p>
              <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-extrabold text-brand-blue">{peso}% del punteggio</span>
            </div>
            <p className="mt-2 leading-relaxed text-brand-ink/80">{d}</p>
          </div>
        ))}
      </div>

      <H2 id="servizi">I servizi AWS da conoscere per il CLF-C02</H2>
      <P>AWS ha centinaia di servizi, ma per la Cloud Practitioner ne servono una parte. Questi sono i più importanti:</P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[28rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Area</th><th className="p-3">Servizi principali</th></tr></thead>
          <tbody>{servizi.map(([a, s], i) => (
            <tr key={a} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{a}</td><td className="p-3 font-mono text-xs sm:text-sm text-brand-ink/75">{s}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Per ognuno devi saper rispondere a una domanda: a cosa serve e quando si usa? Se vuoi partire dai due servizi più importanti, leggi le guide su <A slug="amazon-ec2">Amazon EC2</A> e <A slug="amazon-s3">Amazon S3</A>. L'elenco completo dei servizi inclusi è nella guida ufficiale dell'esame, disponibile gratuitamente sul sito AWS.</P>

      <H2 id="domande">Com'è fatto l'esame: domande e punteggio</H2>
      <P>Le domande sono di due tipi: risposta multipla, con una sola risposta corretta su quattro, e risposta multipla con più opzioni corrette, dove devi sceglierne due o più tra cinque o più alternative.</P>
      <P>Tre dettagli che fanno la differenza:</P>
      <Bullets items={[
        <><strong>Non ci sono penalità per le risposte sbagliate.</strong> Una domanda senza risposta vale come sbagliata, quindi rispondi sempre a tutto.</>,
        <><strong>15 domande non contano, ma non sai quali sono:</strong> AWS le usa per testare nuove domande. Trattale tutte allo stesso modo.</>,
        <><strong>Il punteggio è complessivo.</strong> Non devi superare ogni dominio: conta solo il risultato totale. Un dominio debole si può compensare con uno forte.</>,
      ]} />
      <div className="mt-6 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-6">
        <p className="text-xs font-extrabold uppercase text-brand-blue">Esempio di domanda</p>
        <p className="mt-3 leading-relaxed">Un'azienda vuole ridurre i costi pagando solo le risorse di calcolo che usa effettivamente, senza impegni a lungo termine. Quale modello di prezzo di Amazon EC2 è più adatto?</p>
        <ul className="mt-3 space-y-1.5 font-mono text-sm">
          <li>A) Istanze riservate</li>
          <li>B) On-Demand</li>
          <li>C) Dedicated Hosts</li>
          <li>D) Savings Plans</li>
        </ul>
        <p className="mt-3 leading-relaxed"><strong>Risposta corretta: B.</strong> On-Demand si paga solo per il tempo di utilizzo, senza impegno. Istanze riservate e Savings Plans richiedono un impegno di uno o tre anni in cambio di uno sconto.</p>
        <p className="mt-3 leading-relaxed text-brand-ink/80">Come vedi, non è una domanda difficile: premia chi ha capito i concetti, non chi ha memorizzato dettagli tecnici.</p>
      </div>

      <H2 id="inglese">L'esame in inglese: cosa sapere</H2>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-blue/20 bg-secondary p-6"><Languages className="mt-1 h-6 w-6 shrink-0 text-brand-blue" /><div>
        <p className="font-extrabold">L'esame si sostiene in inglese.</p>
        <p className="mt-1 leading-relaxed text-brand-ink/80">Il consiglio è di prepararti direttamente in inglese fin dall'inizio, per tre motivi:</p>
        <Bullets items={motiviInglese.map((m) => <>{m}</>)} />
      </div></div>
      <P>Se l'inglese non è la tua lingua madre, puoi richiedere 30 minuti in più per l'esame. Va chiesto prima di prenotare, dal tuo account di certificazione AWS.</P>

      <H2 id="piano">Come prepararsi: un piano di studio in 4 settimane</H2>
      <P>Con circa un'ora al giorno, quattro settimane bastano per arrivare pronti. Con due ore al giorno puoi farcela in circa tre settimane.</P>
      <div className="mt-6 space-y-3">
        {settimane.map(([t, d], i) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <GraduationCap className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 text-lg leading-relaxed">Vuoi un percorso che ti dica quando sei davvero pronto? Il percorso <Home>Diventa Cloud Engineer in 90 giorni</Home> include la preparazione completa alla CLF-C02 e alla SAA-C03 per l'esame in inglese, con simulatore d'esame e validazione 1-to-1 prima di prenotare.</p>
      </div>
      <QuizBox />

      <H2 id="corso">Corso AWS Cloud Practitioner: cosa deve avere</H2>
      <P>Se scegli un corso AWS Cloud Practitioner, gratuito o a pagamento, controlla che abbia questi elementi:</P>
      <Bullets items={corsoChecklist.map((c) => <>{c}</>)} />
      <P>Un corso che manca di simulazioni ti lascia senza il dato più importante: sapere se sei pronto. Trovi un confronto tra le risorse gratuite di AWS e quelle a pagamento nella <A slug="aws-skill-builder">guida su AWS Skill Builder e corsi AWS gratis</A>.</P>

      <H2 id="giorno-esame">Il giorno dell'esame: online o in centro</H2>
      <P><strong>In un centro Pearson VUE</strong> arrivi con un documento d'identità valido, lasci tutto negli armadietti e sostieni l'esame su un computer della sede. È la scelta più tranquilla se a casa hai rumori o una connessione instabile.</P>
      <P><strong>Online da casa</strong> ti serve una stanza silenziosa, una scrivania sgombra, una webcam e una connessione stabile. Prima dell'esame fai il controllo tecnico del sistema proposto da Pearson VUE: evita sorprese all'ultimo minuto. Durante l'esame non puoi alzarti, parlare o avere altre persone nella stanza.</P>
      <P>In entrambi i casi, il risultato preliminare (superato o non superato) compare di solito subito dopo la fine dell'esame, mentre il punteggio dettagliato arriva via email nei giorni successivi.</P>

      <H2 id="errori">Gli errori più comuni all'esame CLF-C02</H2>
      <div className="mt-6 space-y-3">
        {errori.map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="dopo">Dopo la Cloud Practitioner: il passo successivo</H2>
      <P>La Cloud Practitioner è un punto di partenza, non d'arrivo. Da sola difficilmente basta per un ruolo tecnico, ma ti apre la strada alla AWS Solutions Architect – Associate (SAA-C03), la certificazione che i selezionatori cercano nei profili cloud junior. Ricorda che con la prima certificazione ottieni il 50% di sconto sull'esame successivo.</P>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6"><BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><p className="leading-relaxed">Se il tuo obiettivo è lavorare nel cloud, trovi il percorso completo nella <A slug="come-diventare-cloud-engineer">guida su come diventare cloud engineer</A>.</p></div>

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
          "La AWS Cloud Practitioner (CLF-C02) è la certificazione d'ingresso di AWS, pensata per chi parte da zero.",
          "L'esame dura 90 minuti, ha 65 domande e richiede almeno 700 punti su 1.000.",
          "I domini che pesano di più sono Cloud Technology and Services (34%) e Security and Compliance (30%).",
          "L'esame si sostiene in inglese: conviene prepararsi direttamente in quella lingua.",
          "Con 3–4 settimane di studio costante e simulazioni realistiche, è un traguardo alla portata di tutti.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Prima la CLF-C02, poi la SAA-C03. Una alla volta, con un piano chiaro.</p>
        <p className="mt-3 text-lg">Vuoi prepararti alla CLF-C02 e alla SAA-C03 con un metodo guidato? Scopri il percorso <Home>Diventa Cloud Engineer in 90 giorni</Home>.</p>
      </div>
    </div>
  );
}
