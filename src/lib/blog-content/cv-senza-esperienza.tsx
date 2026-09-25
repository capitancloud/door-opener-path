import { Check, FileText, HelpCircle, Lightbulb, Sparkles, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "problema", label: "Il vero problema" },
  { id: "struttura", label: "La struttura giusta" },
  { id: "sezioni", label: "Come scrivere ogni sezione" },
  { id: "esempio", label: "Esempio: cloud engineer junior" },
  { id: "formato", label: "Formato e software di selezione" },
  { id: "errori", label: "Gli errori da evitare" },
  { id: "dopo", label: "Dopo il CV" },
  { id: "faq", label: "Domande frequenti" },
  { id: "sintesi", label: "In sintesi" },
];

const A = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <Link to="/blog/$slug" params={{ slug }} className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:decoration-brand-blue">{children}</Link>
);
const H2 = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="scroll-mt-24 pt-14 font-blog-display text-3xl font-extrabold leading-tight sm:text-4xl">{children}</h2>
);
const P = ({ children }: { children: ReactNode }) => <p className="mt-5 text-lg leading-relaxed text-brand-ink/85">{children}</p>;
const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="mt-4 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-3 text-lg leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><span>{t}</span></li>)}</ul>
);

const struttura: [string, string][] = [
  ["Dati di contatto", "Nome, città, email, telefono, LinkedIn, GitHub"],
  ["Profilo", "3–4 righe che dicono chi sei e cosa cerchi"],
  ["Competenze", "È la prima cosa che il selezionatore confronta con l'annuncio"],
  ["Progetti", "La tua \"esperienza\" concreta"],
  ["Certificazioni e formazione", "Le prove verificabili"],
  ["Esperienze precedenti", "Anche fuori dal settore, con le competenze trasferibili"],
  ["Lingue", "Con il livello, per esempio B2"],
];

const sezioni: [string, ReactNode][] = [
  ["Profilo", <>Poche righe, niente frasi generiche come "persona dinamica e motivata". Scrivi cosa sai fare e cosa cerchi. Per esempio: <em>"Ex addetto logistica in riconversione verso il cloud. Certificato AWS Cloud Practitioner, con progetti pratici su AWS, Linux e Terraform. Cerco una posizione da Junior Cloud Engineer o Cloud Support."</em></>],
  ["Competenze", <>Dividile per aree e usa le stesse parole dell'annuncio. Se l'annuncio chiede "Linux" e "AWS", devono comparire esattamente così. Evita barre e percentuali di conoscenza: non dicono niente di verificabile.</>],
  ["Progetti", <>È la sezione che fa la differenza. Per ogni progetto scrivi: cosa hai costruito, con quali strumenti e il risultato. Aggiungi sempre il link, per esempio al repository su GitHub.</>],
  ["Certificazioni e formazione", <>Metti prima ciò che è più rilevante per il lavoro che cerchi. Una <A slug="certificazioni-aws">certificazione di settore</A> conta più di un titolo di studio non collegato.</>],
  ["Esperienze precedenti", <>Non eliminarle: raccontale in funzione del nuovo lavoro. Un receptionist ha gestito richieste sotto pressione, un magazziniere ha seguito procedure precise, un commerciale ha gestito clienti. Sono competenze trasferibili che valgono anche in un ruolo tecnico.</>],
  ["Lingue", <>Indica il livello secondo il quadro europeo (A1–C2). Nel settore IT l'inglese è importante: sii onesto sul livello, perché verrà verificato al colloquio.</>],
];

const CV = `MARCO BIANCHI
Bologna · marco.bianchi@email.it · +39 333 000 0000
linkedin.com/in/marcobianchi · github.com/marcobianchi

PROFILO
Ex addetto alla logistica in riconversione verso il cloud computing.
Certificato AWS, con progetti pratici su infrastrutture AWS, Linux e
Terraform. Cerco una posizione da Junior Cloud Engineer o Cloud Support.

COMPETENZE
Cloud: AWS (EC2, S3, VPC, IAM, RDS)
Strumenti: Linux, Git, Docker, Terraform
Scripting: Bash, Python (base)

PROGETTI
Applicazione web su AWS in alta disponibilità – github.com/...
EC2 in Auto Scaling su due Availability Zone, Application Load
Balancer e database RDS. Infrastruttura creata con Terraform.

Sito statico con S3 e CloudFront – github.com/...
Pubblicazione di un sito con dominio personalizzato e HTTPS.

CERTIFICAZIONI
AWS Certified Cloud Practitioner (CLF-C02) – 2026
AWS Solutions Architect – Associate (SAA-C03) – in preparazione

ESPERIENZE PRECEDENTI
Addetto logistica – Azienda XYZ, Bologna (2018–oggi)
Gestione degli ordini con software gestionale, coordinamento
di un turno di 4 persone, rispetto di procedure di sicurezza.

LINGUE
Italiano: madrelingua · Inglese: B1 (in miglioramento)`;

const errori: [string, string][] = [
  ["Inventare esperienze o competenze", "Al colloquio tecnico emerge tutto in pochi minuti, e perdi credibilità su tutto il resto."],
  ["Lasciare il CV vuoto per paura", "Se non hai esperienza nel settore, hai comunque progetti, formazione ed esperienze trasferibili. Usali."],
  ["Un CV uguale per tutte le candidature", "Bastano cinque minuti per adattare profilo e competenze all'annuncio, e la differenza nei risultati è notevole."],
  ["Un indirizzo email poco professionale", "Usa nome e cognome, niente soprannomi."],
  ["Errori di battitura", "Rileggilo ad alta voce o fallo leggere a qualcun altro. Un refuso nel CV comunica poca attenzione ai dettagli."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Nel CV va messa la foto?", a: <>In Italia è ancora diffusa, ma non è obbligatoria. Nel settore IT molte aziende non la richiedono. Se la metti, scegli una foto professionale e semplice.</> },
  { q: "Meglio il formato Europass o un CV personalizzato?", a: <>Europass va bene per candidature pubbliche o quando viene richiesto. Per le aziende private, un CV personalizzato e sintetico è di solito più efficace e più facile da leggere.</> },
  { q: "Quanto deve essere lungo un CV senza esperienza?", a: <>Una pagina. Se ti sembra di avere poco da scrivere, arricchisci la sezione progetti invece di allungare le altre.</> },
  { q: "Cosa scrivo se non ho nessuna esperienza lavorativa?", a: <>Metti in evidenza progetti personali, formazione, certificazioni, volontariato e attività in cui hai usato competenze utili, come organizzare, coordinare o risolvere problemi.</> },
  { q: "Serve la frase sul consenso al trattamento dei dati?", a: <>Molte aziende italiane si aspettano di trovarla in fondo al CV, con il riferimento al Regolamento UE 2016/679 (GDPR). Aggiungerla non costa niente e ti evita di sembrare disattento.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Se non hai anni di lavoro da mostrare, il CV deve mettere in primo piano cosa sai fare e cosa hai costruito, non dove hai lavorato.</p>
      </div>
      <P>Scrivere un CV senza esperienza sembra impossibile: tutti gli annunci chiedono esperienza, e tu non sai cosa mettere nella sezione più importante. La soluzione è spostare l'attenzione: se non hai anni di lavoro da mostrare, il tuo CV deve mettere in primo piano cosa sai fare e cosa hai costruito, non dove hai lavorato.</P>
      <P>In questa guida trovi come scrivere un CV (o curriculum) senza esperienza passo passo: la struttura giusta, cosa scrivere in ogni sezione, un esempio completo per il settore IT e gli errori che fanno scartare un curriculum in pochi secondi.</P>

      <H2 id="problema">Il vero problema di un CV senza esperienza</H2>
      <P>Un selezionatore dedica pochi secondi alla prima lettura di un CV. In quel tempo cerca una risposta sola: <strong>questa persona può fare il lavoro?</strong></P>
      <P>Chi ha esperienza risponde con la lista dei lavori precedenti. Chi non ce l'ha deve rispondere in un altro modo, con tre tipi di prove:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Competenze concrete", "Legate all'annuncio."],
          ["Progetti", "Che dimostrano quelle competenze."],
          ["Titoli verificabili", "Come certificazioni e corsi con un esame finale."],
        ].map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-3xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 font-semibold leading-relaxed">Un CV senza esperienza ben scritto non nasconde la mancanza di esperienza: la compensa.</div>

      <H2 id="struttura">La struttura giusta</H2>
      <P>Nel CV classico l'esperienza lavorativa viene subito dopo i dati personali. Senza esperienza, conviene cambiare l'ordine:</P>
      <div className="mt-6 space-y-2">
        {struttura.map(([s, d], i) => (
          <div key={s} className={`flex items-center gap-4 rounded-2xl border p-4 ${i === 2 || i === 3 ? "border-brand-blue/40 bg-brand-blue/5" : "border-border"}`}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span>
            <div><p className="font-extrabold">{s}</p><p className="text-brand-ink/75">{d}</p></div>
          </div>
        ))}
      </div>

      <H2 id="sezioni">Come scrivere ogni sezione</H2>
      <div className="mt-6 space-y-3">
        {sezioni.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="text-xs font-extrabold uppercase text-brand-blue">{t}</p><p className="mt-2 leading-relaxed text-brand-ink/85">{d}</p></div>
        ))}
      </div>

      <H2 id="esempio">Esempio di CV senza esperienza: CV da cloud engineer junior</H2>
      <P>Ecco la struttura di un CV per chi cerca il primo lavoro come cloud engineer junior:</P>
      <div className="mt-6 overflow-hidden rounded-2xl border-2 border-brand-blue/30 bg-background shadow-sm">
        <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2 text-xs font-bold text-brand-ink/70"><FileText className="h-4 w-4 text-brand-blue" />CV_Marco_Bianchi.pdf</div>
        <pre className="overflow-x-auto whitespace-pre p-5 font-mono text-sm leading-relaxed text-brand-ink">{CV}</pre>
      </div>
      <P>Nota come l'esperienza da addetto alla logistica è raccontata con competenze utili anche in un ruolo tecnico: uso di software, coordinamento, rispetto delle procedure. Se vuoi capire quali progetti inserire, trovi degli esempi nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Stai pensando di cambiare settore verso il cloud?</p>
        <p className="mt-3 text-lg leading-relaxed">Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="formato">Formato e software di selezione</H2>
      <P>Molte aziende usano software che leggono i CV in automatico prima di un selezionatore umano. Per non essere scartato:</P>
      <Bullets items={[
        <><strong>una pagina</strong>, massimo due se hai molte esperienze precedenti;</>,
        <><strong>formato PDF</strong>, con un nome del file chiaro, come CV_Marco_Bianchi.pdf;</>,
        <><strong>layout semplice</strong>: niente tabelle complicate, grafiche o testo dentro le immagini, che i software non riescono a leggere;</>,
        <><strong>parole chiave dell'annuncio</strong>, scritte nello stesso modo;</>,
        <><strong>un CV adattato a ogni candidatura</strong>, almeno nel profilo e nell'ordine delle competenze.</>,
      ]} />

      <H2 id="errori">Gli errori da evitare</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {errori.map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="dopo">Dopo il CV: LinkedIn e candidature</H2>
      <P>Il CV è solo metà del lavoro. Allinea il profilo LinkedIn con le stesse competenze e gli stessi progetti, perché molti selezionatori lo controllano subito dopo. E considera anche le posizioni ibride e gli stage retribuiti: per chi è senza esperienza sono spesso la porta d'ingresso più realistica, come spiego nella guida sul <A slug="lavoro-da-remoto-senza-esperienza">lavoro da remoto senza esperienza</A>.</P>

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
          "Un CV senza esperienza deve dimostrare cosa sai fare: competenze, progetti e titoli verificabili.",
          "Cambia l'ordine delle sezioni: competenze e progetti prima delle esperienze precedenti.",
          "Racconta i lavori precedenti in funzione del nuovo, evidenziando le competenze trasferibili.",
          "Una pagina, formato PDF, layout semplice e parole chiave dell'annuncio.",
          "Non inventare nulla: al colloquio emerge tutto.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi capire se un lavoro nel cloud fa per te prima di riscrivere il CV?</p>
        <p className="mt-3 text-lg">Fai il quiz gratuito di 2 minuti.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>
    </div>
  );
}
