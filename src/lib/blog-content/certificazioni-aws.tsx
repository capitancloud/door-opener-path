import { Link } from "@tanstack/react-router";
import { AlertTriangle, BadgeCheck, Check, GraduationCap, HelpCircle, Lightbulb, Sparkles, Wallet } from "lucide-react";
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
