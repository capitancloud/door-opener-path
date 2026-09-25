import { Link } from "@tanstack/react-router";
import { AlertTriangle, BadgeCheck, Check, FlaskConical, GraduationCap, HelpCircle, Languages, Lightbulb, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "cos-e", label: "Cos'è la Solutions Architect Associate" },
  { id: "perche", label: "Perché è la più richiesta" },
  { id: "a-chi", label: "Serve esperienza?" },
  { id: "sintesi-esame", label: "L'esame SAA-C03 in sintesi" },
  { id: "domini", label: "I 4 domini dell'esame" },
  { id: "servizi", label: "I servizi AWS da conoscere" },
  { id: "domande", label: "Le domande di scenario" },
  { id: "confronto", label: "SAA-C03 vs Cloud Practitioner" },
  { id: "inglese", label: "L'esame in inglese" },
  { id: "piano", label: "Piano di studio in 8 settimane" },
  { id: "laboratori", label: "5 laboratori da fare" },
  { id: "errori", label: "Gli errori più comuni" },
  { id: "dopo", label: "Dopo la SAA-C03" },
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
  ["Codice esame", "SAA-C03"],
  ["Livello", "Associate"],
  ["Durata", "130 minuti"],
  ["Domande", "65 (50 valutate + 15 non valutate)"],
  ["Tipo di domande", "Risposta multipla e risposta multipla con più opzioni corrette"],
  ["Punteggio minimo", "720 su una scala da 100 a 1.000"],
  ["Costo", "150 USD (75 USD con lo sconto del 50% dopo un'altra certificazione AWS)"],
  ["Dove", "Centro Pearson VUE o online da casa"],
  ["Validità", "3 anni"],
];

const domini: [string, string, number][] = [
  ["Design Secure Architectures", "Il dominio più pesante. Devi saper progettare accessi sicuri alle risorse con IAM (utenti, ruoli, policy, principio del privilegio minimo), proteggere reti e applicazioni con VPC, security group, network ACL, AWS WAF e Shield, e proteggere i dati con la crittografia, a riposo e in transito, tramite KMS e i certificati.", 30],
  ["Design Resilient Architectures", "Come progettare sistemi che continuano a funzionare anche quando qualcosa si rompe. Architetture su più Availability Zone, Auto Scaling, bilanciatori di carico, applicazioni disaccoppiate con SQS e SNS, backup e strategie di disaster recovery. È qui che capisci perché nel cloud non si mette mai tutto su un solo server.", 26],
  ["Design High-Performing Architectures", "Scegliere lo storage, il calcolo, il database e la rete giusti in base alle prestazioni richieste. Per esempio: quando usare DynamoDB invece di RDS, quale tipo di volume EBS scegliere, come usare ElastiCache per velocizzare un'applicazione o CloudFront per distribuire contenuti in tutto il mondo.", 24],
  ["Design Cost-Optimized Architectures", "Progettare soluzioni che costano il giusto: scegliere le classi di storage di S3 in base a quanto spesso si accede ai dati, usare istanze Spot, Savings Plans e istanze riservate, dimensionare correttamente le risorse e ridurre i costi di trasferimento dati. Le aziende tengono molto a questo tema, e si vede nelle domande.", 20],
];

const servizi: [string, string][] = [
  ["Calcolo", "EC2, Auto Scaling, Lambda, ECS, Fargate"],
  ["Storage", "S3 e le sue classi, EBS, EFS, FSx, Storage Gateway"],
  ["Database", "RDS, Aurora, DynamoDB, ElastiCache, Redshift"],
  ["Rete", "VPC, subnet, NAT Gateway, Route 53, CloudFront, Elastic Load Balancing, Direct Connect, VPN"],
  ["Sicurezza", "IAM, KMS, AWS WAF, Shield, GuardDuty, Secrets Manager, Cognito"],
  ["Integrazione", "SQS, SNS, EventBridge, API Gateway, Kinesis"],
  ["Monitoraggio e gestione", "CloudWatch, CloudTrail, AWS Config, Organizations"],
];

const confronto: [string, string, string][] = [
  ["Livello", "Foundational", "Associate"],
  ["Tipo di domande", "Concetti e definizioni", "Scenari aziendali"],
  ["Profondità sui servizi", "A cosa servono", "Come e quando usarli"],
  ["Durata", "90 minuti", "130 minuti"],
  ["Soglia", "700", "720"],
  ["Costo", "100 USD", "150 USD"],
  ["Peso sul CV", "Primo passo", "Titolo richiesto negli annunci"],
];

const settimane: [string, string, string][] = [
  ["Settimane 1–2", "Sicurezza e rete", "IAM in profondità, VPC, subnet pubbliche e private, security group, NAT Gateway, Route 53. Costruisci la tua VPC da zero sulla console: è la base di tutto il resto."],
  ["Settimane 3–4", "Calcolo e storage", "EC2, Auto Scaling, bilanciatori di carico, Lambda; poi S3 con le sue classi e le regole di ciclo di vita, EBS, EFS. Metti in piedi un'applicazione su più Availability Zone dietro un bilanciatore."],
  ["Settimana 5", "Database e caching", "RDS e Aurora, repliche e Multi-AZ, DynamoDB, ElastiCache. Concentrati sulle differenze: quando si usa l'uno o l'altro."],
  ["Settimana 6", "Integrazione, monitoraggio e costi", "SQS, SNS, EventBridge, API Gateway, CloudWatch, CloudTrail, e tutte le leve per ottimizzare la spesa."],
  ["Settimane 7–8", "Simulazioni d'esame", "Simulazioni complete a tempo, in inglese. Analizza ogni errore: capire perché una risposta sbagliata sembrava giusta è il modo più rapido per migliorare. Prenota quando superi le simulazioni con costanza e con margine."],
];

const laboratori = [
  "Una VPC completa, con subnet pubbliche e private su due Availability Zone e un NAT Gateway.",
  "Un'applicazione web resiliente: EC2 in un gruppo di Auto Scaling dietro un Application Load Balancer.",
  "Un database RDS Multi-AZ, collegato all'applicazione del punto precedente, con backup automatici.",
  "Un sito statico su S3 distribuito con CloudFront, con regole di ciclo di vita per spostare i dati vecchi in classi più economiche.",
  "Un'architettura disaccoppiata con SQS e Lambda, in cui un messaggio in coda attiva una funzione.",
];

const errori: [string, string][] = [
  ["Studiare solo sui quiz", "Le domande di scenario cambiano spesso. Chi ha imparato a memoria le risposte si blocca appena lo scenario è formulato diversamente."],
  ["Ignorare i vincoli della domanda", "\"Più economico\", \"più veloce da implementare\", \"minimo sforzo operativo\", \"massima disponibilità\": ogni vincolo porta a una risposta diversa. Sottolineali mentalmente prima di leggere le opzioni."],
  ["Trascurare la rete", "VPC, subnet e instradamento sono il punto debole di molti candidati, e compaiono in moltissime domande di ogni dominio."],
  ["Usare materiale non aggiornato", "Verifica che il corso e le simulazioni siano pensati per la SAA-C03. In rete circolano anche riferimenti a presunte nuove versioni dell'esame: il codice valido è sempre quello indicato sulla pagina ufficiale AWS."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "L'esame AWS Solutions Architect Associate è difficile?", a: <>È impegnativo, soprattutto per le domande di scenario e per la vastità dei servizi. Non è però riservato agli esperti: con basi solide, pratica sulla console e simulazioni realistiche, è alla portata anche di chi ha iniziato da pochi mesi.</> },
  { q: "Quanto tempo serve per preparare la SAA-C03?", a: <>Indicativamente due mesi con un'ora e mezza o due al giorno, se hai già la Cloud Practitioner o esperienza in IT. Partendo da zero, conviene aggiungere prima il tempo per le basi.</> },
  { q: "Si può fare la SAA-C03 senza la Cloud Practitioner?", a: <>Sì, non ci sono prerequisiti. Se parti da zero, però, fare prima la Cloud Practitioner è una scelta furba: ti prepara meglio e ti fa risparmiare il 50% sull'esame SAA-C03.</> },
  { q: "Esiste già la SAA-C04?", a: <>Alla data di questo articolo, sulla pagina ufficiale AWS l'esame corrente è la SAA-C03. AWS aggiorna periodicamente i suoi esami: prima di prenotare, controlla sempre il codice sulla pagina ufficiale della certificazione.</> },
  { q: "La SAA-C03 basta per trovare lavoro?", a: <>È il titolo più utile per un ruolo cloud junior, ma funziona davvero se accompagnata da progetti pratici e da una buona preparazione al colloquio. Ne parlo nell'articolo <A slug="certificazione-aws-serve">la certificazione AWS serve davvero per trovare lavoro?</A></> },
  { q: "Come si rinnova dopo 3 anni?", a: <>Superando la versione aggiornata dell'esame, oppure ottenendo la Solutions Architect – Professional, che la rinnova automaticamente.</> },
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
        <p className="mt-3 text-lg font-semibold leading-relaxed">Cosa verifica l'esame SAA-C03, i quattro domini con il loro peso, i servizi da studiare, come sono fatte le domande, quanto costa e un piano di studio in 8 settimane.</p>
      </div>
      <P>La AWS Solutions Architect Associate è la certificazione AWS più richiesta per chi vuole lavorare nel cloud. È quella che compare più spesso negli annunci per cloud engineer junior e quella che fa davvero la differenza su un CV. In questa guida trovi tutto sull'esame SAA-C03: cosa verifica, i quattro domini con il loro peso, i servizi da studiare, come sono fatte le domande, quanto costa e un piano di studio in 8 settimane.</P>
      <P>Ti avverto subito: è un salto netto rispetto alla <A slug="aws-cloud-practitioner">Cloud Practitioner</A>. Ma con il metodo giusto è un traguardo realistico anche per chi ha iniziato da poco.</P>

      <H2 id="cos-e">Cos'è la certificazione AWS Solutions Architect Associate</H2>
      <P>La certificazione AWS Solutions Architect Associate attesta che sai progettare soluzioni su AWS: scegliere i servizi giusti e combinarli in un'architettura sicura, resistente ai guasti, performante e con costi sotto controllo. Il codice dell'esame attuale è SAA-C03.</P>
      <P>È una certificazione di livello Associate, il livello tecnico intermedio di AWS. La differenza con la Cloud Practitioner è sostanziale: lì devi sapere <strong>cosa fa</strong> un servizio, qui devi sapere <strong>quale usare, come configurarlo e perché</strong> in uno scenario concreto. Tutto ruota attorno all'AWS Well-Architected Framework, l'insieme di buone pratiche con cui AWS descrive un'architettura ben progettata.</P>

      <H2 id="perche">Perché è la certificazione più richiesta per iniziare</H2>
      <P>Ci sono tre ragioni per cui i selezionatori la cercano:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Copre le basi del mestiere", "Tutti i servizi fondamentali che un cloud engineer usa ogni giorno: calcolo, storage, database, rete e sicurezza."],
          ["Verifica il ragionamento", "Non la memoria: le domande sono scenari reali in cui scegli la soluzione migliore tra più opzioni plausibili."],
          ["È riconosciuta ovunque", "Un'azienda di Milano e una di Berlino la leggono allo stesso modo."],
        ].map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-3xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Per chi non ha una laurea in informatica, è spesso il titolo che apre il primo colloquio. Trovi il quadro completo di tutte le certificazioni nella <A slug="certificazioni-aws">guida sulle certificazioni AWS</A>.</P>

      <H2 id="a-chi">Serve esperienza? A chi è adatta</H2>
      <P>La guida ufficiale indica come candidato ideale chi ha almeno un anno di esperienza pratica nella progettazione di soluzioni su AWS. Non è però un requisito obbligatorio: non serve nessuna certificazione precedente per iscriversi all'esame.</P>
      <P>Nella pratica:</P>
      <Bullets items={[
        <><strong>se parti da zero</strong>, fai prima la Cloud Practitioner: ti dà le basi, ti abitua al formato degli esami AWS e ti fa ottenere il 50% di sconto sulla SAA-C03. Trovi tutto nella <A slug="aws-cloud-practitioner">guida alla Cloud Practitioner</A>;</>,
        <><strong>se hai già esperienza in IT</strong>, come sistemista o in ambito reti, puoi puntare direttamente alla SAA-C03;</>,
        <><strong>in entrambi i casi</strong>, l'esperienza che manca va compensata con tanta pratica sulla console. È la parte che fa la differenza, all'esame e dopo.</>,
      ]} />

      <H2 id="sintesi-esame">L'esame SAA-C03 in sintesi</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[32rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Voce</th><th className="p-3">Dettaglio</th></tr></thead>
          <tbody>{sintesiEsame.map(([v, d], i) => (
            <tr key={v} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{v}</td><td className="p-3 text-brand-ink/75">{d}</td></tr>
          ))}</tbody>
        </table>
      </div>

      <H2 id="domini">I 4 domini dell'esame SAA-C03</H2>
      <P>L'esame è diviso in quattro domini. Il punteggio è complessivo: non devi superare ogni dominio, ma conoscerne il peso ti dice dove investire più tempo.</P>
      <div className="mt-6 space-y-3">
        {domini.map(([t, d, peso], i) => (
          <div key={t} className="rounded-2xl border border-border p-5">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-blog-display text-lg font-extrabold text-brand-blue">Dominio {i + 1}: {t}</p>
              <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-extrabold text-brand-blue">{peso}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-brand-blue" style={{ width: `${peso * 3.33}%` }} /></div>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{d}</p>
          </div>
        ))}
      </div>

      <H2 id="servizi">I servizi AWS da conoscere per la SAA-C03</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[28rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Area</th><th className="p-3">Servizi principali</th></tr></thead>
          <tbody>{servizi.map(([a, s], i) => (
            <tr key={a} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{a}</td><td className="p-3 font-mono text-xs sm:text-sm text-brand-ink/75">{s}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Rispetto alla Cloud Practitioner, qui non basta sapere a cosa serve un servizio: devi conoscerne opzioni, limiti e differenze con i servizi simili. Per i servizi più importanti, parti dalle guide su <A slug="amazon-ec2">Amazon EC2</A>, <A slug="amazon-s3">Amazon S3</A> e <A slug="aws-iam">AWS IAM</A>.</P>

      <H2 id="domande">Com'è fatto l'esame: le domande di scenario</H2>
      <P>Quasi tutte le domande della SAA-C03 descrivono una situazione aziendale e ti chiedono la soluzione migliore. Spesso più risposte sono tecnicamente possibili: devi scegliere quella che rispetta meglio i vincoli indicati, come costo, sforzo operativo o disponibilità.</P>
      <div className="mt-6 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-6">
        <p className="text-xs font-extrabold uppercase text-brand-blue">Esempio di domanda</p>
        <p className="mt-3 leading-relaxed">Un'applicazione web gira su una singola istanza Amazon EC2. L'azienda vuole che resti disponibile anche se un'intera Availability Zone smette di funzionare, con il minimo sforzo operativo. Quale soluzione soddisfa questi requisiti?</p>
        <ul className="mt-3 space-y-1.5 font-mono text-sm">
          <li>A) Sostituire l'istanza con un tipo di istanza più grande</li>
          <li>B) Creare un gruppo di Auto Scaling su più Availability Zone dietro un Application Load Balancer</li>
          <li>C) Pianificare uno snapshot EBS ogni ora</li>
          <li>D) Avviare una seconda istanza nella stessa Availability Zone</li>
        </ul>
        <p className="mt-3 leading-relaxed"><strong>Risposta corretta: B.</strong> È l'unica soluzione che distribuisce l'applicazione su più Availability Zone e sostituisce automaticamente le istanze guaste. Un'istanza più grande o una seconda istanza nella stessa zona non proteggono dal guasto della zona; gli snapshot servono per il ripristino, non per la continuità del servizio.</p>
        <p className="mt-3 leading-relaxed text-brand-ink/80">Nota le parole chiave: <strong>"intera Availability Zone"</strong> e <strong>"minimo sforzo operativo"</strong>. All'esame sono queste a indicarti la risposta giusta.</p>
      </div>

      <H2 id="confronto">SAA-C03 e Cloud Practitioner: le differenze</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[32rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3"></th><th className="p-3">Cloud Practitioner</th><th className="p-3">Solutions Architect Associate</th></tr></thead>
          <tbody>{confronto.map(([v, a, b], i) => (
            <tr key={v} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{v}</td><td className="p-3 text-brand-ink/75">{a}</td><td className="p-3 font-semibold">{b}</td></tr>
          ))}</tbody>
        </table>
      </div>

      <H2 id="inglese">L'esame in inglese: come affrontarlo</H2>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-blue/20 bg-secondary p-6"><Languages className="mt-1 h-6 w-6 shrink-0 text-brand-blue" /><div>
        <p className="font-extrabold">L'esame si sostiene in inglese.</p>
        <p className="mt-1 leading-relaxed text-brand-ink/80">Le domande di scenario sono lunghe e piene di termini tecnici: se li hai sempre studiati in inglese, il giorno dell'esame li riconosci al volo invece di tradurli mentalmente.</p>
      </div></div>
      <P>Tre consigli pratici:</P>
      <Bullets items={[
        <>studia con la terminologia originale: nomi dei servizi, concetti come "high availability", "decoupling" o "least privilege" sono gli stessi che troverai all'esame e al lavoro;</>,
        <>fai tutte le simulazioni in inglese, a tempo, per abituarti al ritmo di lettura;</>,
        <>se l'inglese non è la tua lingua madre, richiedi 30 minuti in più: su un esame di scenari da 130 minuti è un aiuto concreto.</>,
      ]} />
      <P>Il vantaggio va oltre l'esame: documentazione AWS, colloqui tecnici e lavoro quotidiano nel cloud si svolgono in gran parte in inglese.</P>

      <H2 id="piano">Come prepararsi: un piano di studio in 8 settimane</H2>
      <P>Con circa un'ora e mezza o due al giorno, otto settimane sono un tempo realistico se hai già la Cloud Practitioner o basi di IT.</P>
      <div className="mt-6 space-y-3">
        {settimane.map(([w, t, d]) => (
          <div key={w} className="flex flex-col gap-3 rounded-2xl border border-border p-5 sm:flex-row sm:gap-5">
            <span className="w-fit shrink-0 rounded-full bg-brand-blue px-3 py-1 text-xs font-extrabold text-primary-foreground sm:w-32 sm:text-center">{w}</span>
            <div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <GraduationCap className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-extrabold">Vuoi un metodo che ti dica quando sei pronto per prenotare?</p>
        <p className="mt-2 text-lg leading-relaxed">Il percorso <Home>Diventa Cloud Engineer in 90 giorni</Home> include la preparazione completa alla SAA-C03 e alla CLF-C02 per l'esame in inglese, con simulatore d'esame e validazione 1-to-1 prima di prenotare.</p>
      </div>
      <QuizBox />

      <H2 id="laboratori">5 laboratori da fare prima dell'esame</H2>
      <P>La teoria da sola non basta per la SAA-C03. Questi cinque esercizi coprono gran parte dei concetti chiave:</P>
      <div className="mt-6 space-y-3">
        {laboratori.map((l, i) => (
          <div key={i} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"><FlaskConical className="h-4 w-4" /></span><p className="leading-relaxed"><strong>Lab {i + 1}.</strong> {l}</p></div>
        ))}
      </div>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6"><AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><p className="leading-relaxed">Imposta sempre un budget con un avviso prima di iniziare e ricordati di eliminare le risorse alla fine di ogni esercizio: alcuni servizi, come il NAT Gateway, costano anche se non li usi.</p></div>

      <H2 id="errori">Gli errori più comuni</H2>
      <div className="mt-6 space-y-3">
        {errori.map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="dopo">Dopo la Solutions Architect Associate</H2>
      <P>Con la SAA-C03 hai il titolo che conta. Il passo successivo non è un'altra certificazione, ma trasformarla in un profilo assumibile: progetti su GitHub, CV, LinkedIn e preparazione al colloquio tecnico.</P>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6"><BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><p className="leading-relaxed">Trovi il percorso completo nella <A slug="come-diventare-cloud-engineer">guida su come diventare cloud engineer</A>.</p></div>
      <P>Più avanti, con un po' di esperienza, potrai puntare alla Solutions Architect – Professional o alla Security – Specialty. Ma prima viene il lavoro.</P>

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
          "La AWS Solutions Architect Associate (SAA-C03) è la certificazione AWS più richiesta per i ruoli cloud junior.",
          "L'esame dura 130 minuti, ha 65 domande di scenario e richiede almeno 720 punti su 1.000.",
          "Il dominio più pesante è la sicurezza (30%), seguito dalla resilienza (26%).",
          "L'esame si sostiene in inglese: conviene prepararsi fin da subito in quella lingua.",
          "Con circa 8 settimane di studio, tanta pratica e simulazioni realistiche, è un obiettivo concreto.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Il titolo che apre i colloqui, con un metodo chiaro.</p>
        <p className="mt-3 text-lg">Vuoi prepararti alla SAA-C03 con un metodo guidato, dalle basi fino alla validazione finale? Scopri il percorso <Home>Diventa Cloud Engineer in 90 giorni</Home>.</p>
      </div>
    </div>
  );
}
