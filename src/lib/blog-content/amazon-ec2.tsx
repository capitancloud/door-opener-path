import { AlertTriangle, Check, HelpCircle, Lightbulb, Sparkles, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "in-breve", label: "EC2 in breve" },
  { id: "concetti", label: "I concetti base" },
  { id: "tipi", label: "I tipi di istanza" },
  { id: "avviare", label: "Avviare la prima istanza" },
  { id: "connettersi", label: "Connettersi all'istanza" },
  { id: "automatizzare", label: "User data e AMI" },
  { id: "prezzi", label: "I modelli di prezzo" },
  { id: "costi", label: "Stati e costi nascosti" },
  { id: "architettura", label: "EC2 in un'architettura reale" },
  { id: "sicurezza", label: "Best practice di sicurezza" },
  { id: "errori", label: "Errori da principiante" },
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
const Code = ({ title, children }: { title: string; children: string }) => (
  <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-brand-ink">
    <div className="flex items-center gap-2 border-b border-primary-foreground/10 px-4 py-2 text-xs font-bold text-primary-foreground/70"><Terminal className="h-4 w-4" />{title}</div>
    <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-primary-foreground"><code>{children}</code></pre>
  </div>
);
const C = ({ children }: { children: ReactNode }) => <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-brand-blue">{children}</code>;

const Table = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
    <table className="w-full min-w-[34rem] text-left text-sm">
      <thead className="bg-secondary"><tr>{head.map((h, i) => <th key={i} className={`p-4 font-extrabold ${i === 1 ? "text-brand-blue" : ""}`}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((r) => <tr key={r[0]} className="border-t border-border">{r.map((c, i) => <td key={i} className={`p-4 ${i === 0 ? "font-bold" : "text-brand-ink/80"}`}>{c}</td>)}</tr>)}</tbody>
    </table>
  </div>
);
const Course = ({ title, text }: { title: string; text: string }) => (
  <div className="mt-10 rounded-3xl border-2 border-brand-yellow bg-brand-yellow/10 p-7">
    <Sparkles className="h-6 w-6 text-brand-yellow-deep" />
    <p className="mt-3 font-blog-display text-2xl font-extrabold">{title}</p>
    <p className="mt-2 leading-relaxed text-brand-ink/80">{text}</p>
    <Link to="/" className="mt-5 inline-flex rounded-xl bg-brand-blue px-5 py-3 font-extrabold text-primary-foreground">Scopri Diventa Cloud Engineer in 90 giorni</Link>
  </div>
);
const Card = ({ title, items, tone }: { title: string; items: ReactNode[]; tone: string }) => (
  <div className={`mt-6 rounded-2xl border p-6 ${tone}`}>
    <p className="font-blog-display text-xl font-extrabold">{title}</p>
    <ul className="mt-4 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-3 leading-relaxed"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" /><span>{t}</span></li>)}</ul>
  </div>
);
const Steps = ({ items }: { items: ReactNode[] }) => (
  <ol className="mt-6 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-4 rounded-2xl border border-border p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><span className="text-lg leading-relaxed">{t}</span></li>)}</ol>
);

const Warn = ({ items }: { items: [string, string][] }) => (
  <div className="mt-6 grid gap-4 sm:grid-cols-2">{items.map(([t, x]) => <div key={t} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5"><p className="flex items-center gap-2 font-extrabold"><AlertTriangle className="h-5 w-5 shrink-0 text-destructive" />{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>)}</div>
);
const Note = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mt-6 rounded-2xl border-l-4 border-brand-yellow bg-brand-yellow/10 p-5"><p className="font-extrabold">{title}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{children}</p></div>
);

const FAQ: [string, ReactNode][] = [
  ["Amazon EC2 è gratis?", "No, ma AWS offre un piano gratuito per i nuovi account con cui puoi fare pratica, rispettando i limiti previsti. Le condizioni cambiano nel tempo: verificale sul sito ufficiale."],
  ["Che differenza c'è tra EC2 e Lambda?", "Con EC2 gestisci un server sempre attivo, sistema operativo compreso. Con Lambda esegui solo funzioni di codice quando servono, senza gestire server, e paghi per il tempo di esecuzione."],
  ["Qual è la differenza tra arrestare e terminare un'istanza?", "Arrestare è come spegnere il computer: puoi riaccenderlo, e paghi solo i dischi. Terminare è come buttarlo via: l'istanza viene eliminata definitivamente."],
  ["Quale regione scegliere?", "Quella più vicina ai tuoi utenti, per avere tempi di risposta più bassi. Per un pubblico italiano, Milano è la scelta naturale. Prezzi e servizi disponibili possono però variare da una regione all'altra."],
  ["Che sistema operativo scegliere?", "Per imparare, Amazon Linux o Ubuntu. Sono gratuiti, leggeri e i più usati in ambito cloud."],
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Amazon EC2 (Elastic Compute Cloud) ti permette di creare server virtuali nel cloud, chiamati <strong>istanze</strong>, in pochi minuti. Scegli potenza, memoria, sistema operativo e rete, avvii l'istanza e paghi solo per il tempo in cui la usi.</p>
      </div>
      <P>È uno dei servizi più antichi e più usati di <A slug="aws-cos-e">AWS</A>, e uno di quelli che compaiono di più negli esami di certificazione e nei colloqui. Qui trovi i concetti base, come leggere i tipi di istanza, come avviare la prima istanza, quanto costa e gli errori da evitare.</P>

      <H2 id="in-breve">AWS EC2: cos'è in breve</H2>
      <P>Senza il cloud, per avere un server devi comprarlo, installarlo, collegarlo alla rete e mantenerlo. Con EC2 lo “noleggi”: AWS si occupa dell'hardware nei suoi data center, tu scegli come configurarlo e cosa farci girare.</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[["Elastico", "Aumenti o riduci numero e potenza delle istanze quando serve, anche in automatico."], ["A consumo", "Con il modello On-Demand paghi solo per il tempo in cui l'istanza è accesa."], ["Sotto il tuo controllo", <>Sistema operativo, software e configurazioni li gestisci tu: è il classico esempio di <A slug="iaas-paas-saas">IaaS</A>.</>]].map(([t, x]) => (
          <div key={t as string} className="rounded-2xl border border-border p-5"><p className="font-blog-display text-xl font-extrabold text-brand-blue">{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>
        ))}
      </div>

      <H2 id="concetti">I concetti base di EC2</H2>
      <Table head={["Concetto", "Cos'è"]} rows={[
        ["Istanza", "Il server virtuale vero e proprio"],
        ["AMI (Amazon Machine Image)", "Il modello da cui nasce l'istanza: sistema operativo e software preinstallato"],
        ["Tipo di istanza", "La “taglia” del server: CPU, memoria, rete"],
        ["Volume EBS", "Il disco dell'istanza, che conserva i dati anche quando la spegni"],
        ["Security group", "Il firewall virtuale che decide quale traffico può entrare e uscire"],
        ["Key pair", "La coppia di chiavi per collegarti in modo sicuro all'istanza"],
        ["Elastic IP", "Un indirizzo IP pubblico fisso da associare a un'istanza"],
      ]} />

      <H2 id="tipi">I tipi di istanza: come leggerli</H2>
      <P>I nomi sembrano codici misteriosi, ma seguono una logica. Prendiamo <C>t3.micro</C>:</P>
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        {[["t", "famiglia", "l'uso per cui è pensata"], ["3", "generazione", "più alto = più recente"], ["micro", "dimensione", "nano, micro, small, large…"]].map(([c, l, x]) => (
          <div key={l} className="rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-4"><p className="font-mono text-2xl font-extrabold text-brand-blue">{c}</p><p className="mt-1 text-xs font-bold uppercase">{l}</p><p className="mt-1 text-xs text-brand-ink/60">{x}</p></div>
        ))}
      </div>
      <P>Alcune lettere aggiuntive indicano varianti, per esempio la <strong>g</strong> per i processori Graviton sviluppati da AWS, spesso più convenienti. Le famiglie principali:</P>
      <Table head={["Famiglia", "Pensata per", "Esempio d'uso"]} rows={[
        ["T", "Carichi leggeri e variabili", "Siti piccoli, ambienti di test"],
        ["M", "Uso generale bilanciato", "Applicazioni web, backend"],
        ["C", "Calcolo intensivo", "Elaborazioni, server di gioco"],
        ["R", "Molta memoria", "Database, cache"],
        ["G / P", "GPU", "Grafica, intelligenza artificiale"],
      ]} />
      <P>Per iniziare, un'istanza piccola della famiglia T è quasi sempre sufficiente.</P>

      <H2 id="avviare">Come avviare la prima istanza EC2</H2>
      <P>Dalla console AWS:</P>
      <Steps items={[
        "apri il servizio EC2 e scegli la regione, per esempio Milano;",
        <>clicca su <strong>Launch instance</strong> e dai un nome all'istanza;</>,
        "scegli l'AMI, per esempio Amazon Linux o Ubuntu;",
        "scegli il tipo di istanza, per esempio una piccola istanza T;",
        "crea o seleziona una key pair e scaricala in un posto sicuro;",
        "configura il security group, consentendo l'accesso SSH solo dal tuo indirizzo IP;",
        <>lascia il disco predefinito e clicca su <strong>Launch instance</strong>.</>,
      ]} />
      <Note title="Prima di tutto: imposta un budget">Dopo un minuto l'istanza è in esecuzione. Prima di iniziare, imposta un budget con un avviso nella console dei costi: è la protezione migliore contro le sorprese.</Note>

      <H2 id="connettersi">Connettersi all'istanza</H2>
      <P>Con un'istanza Linux e la tua key pair, ti colleghi dal terminale con SSH:</P>
      <Code title="Terminale">{`chmod 400 mia-chiave.pem
ssh -i mia-chiave.pem ec2-user@INDIRIZZO-IP-PUBBLICO`}</Code>
      <P>Per Amazon Linux l'utente è <C>ec2-user</C>, per Ubuntu è <C>ubuntu</C>. In alternativa puoi collegarti dal browser con <strong>EC2 Instance Connect</strong>, oppure con <strong>Session Manager</strong>, che non richiede nemmeno di aprire la porta SSH. Se il terminale ti è nuovo, parti dalla guida <A slug="linux-per-principianti">Linux per principianti</A>.</P>

      <H2 id="automatizzare">Automatizzare l'avvio: user data e AMI personalizzate</H2>
      <P>Configurare ogni istanza a mano va bene per un esercizio, non per il lavoro vero. Due strumenti ti fanno risparmiare tempo.</P>
      <P><strong>User data.</strong> All'avvio puoi passare all'istanza uno script eseguito automaticamente la prima volta. Per esempio, per installare e avviare un server web:</P>
      <Code title="user data">{`#!/bin/bash
dnf install -y nginx
systemctl enable --now nginx`}</Code>
      <P><strong>AMI personalizzate.</strong> Quando hai un'istanza configurata come ti serve, puoi crearne un'immagine e usarla come modello per avviarne altre identiche. È la base di Auto Scaling: ogni nuova istanza nasce già pronta.</P>
      <P>Il passo successivo è descrivere tutto come codice, come spiego nella guida su <A slug="terraform">Terraform</A>.</P>

      <H2 id="prezzi">Quanto costa EC2: i modelli di prezzo</H2>
      <Table head={["Modello", "Come funziona", "Quando conviene"]} rows={[
        ["On-Demand", "Paghi al secondo o all'ora, senza impegno", "Test, carichi imprevedibili"],
        ["Savings Plans", "Ti impegni su una spesa oraria per 1 o 3 anni, in cambio di uno sconto", "Carichi stabili e prevedibili"],
        ["Istanze riservate", "Ti impegni su un tipo di istanza per 1 o 3 anni", "Carichi stabili con configurazione fissa"],
        ["Istanze Spot", "Capacità inutilizzata con forti sconti, ma AWS può riprendersela con breve preavviso", "Elaborazioni interrompibili"],
        ["Host dedicati", "Un server fisico tutto per te", "Requisiti di licenza o conformità"],
      ]} />
      <P>Il costo dipende da tipo, regione e sistema operativo: per stimarlo usa l'<strong>AWS Pricing Calculator</strong>.</P>

      <Course title="Vuoi imparare EC2 e tutti i servizi AWS con un percorso guidato?" text="Diventa Cloud Engineer in 90 giorni ti prepara alle certificazioni CLF-C02 e SAA-C03, con laboratori pratici, progetti per il portfolio e preparazione al colloquio." />

      <H2 id="costi">Stati dell'istanza e costi nascosti</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border p-5"><p className="font-extrabold text-brand-blue">Arrestata (stop)</p><p className="mt-2 leading-relaxed text-brand-ink/80">Non paghi più il calcolo, ma continui a pagare il disco EBS. Puoi riavviarla quando vuoi.</p></div>
        <div className="rounded-2xl border border-border p-5"><p className="font-extrabold text-destructive">Terminata (terminate)</p><p className="mt-2 leading-relaxed text-brand-ink/80">L'istanza viene eliminata definitivamente. Di default viene eliminato anche il disco principale.</p></div>
      </div>
      <P>Altri costi che sorprendono chi inizia:</P>
      <Bullets items={[
        "gli indirizzi IPv4 pubblici hanno un costo orario, anche se piccolo;",
        "gli snapshot dei dischi occupano spazio e si pagano;",
        "i dischi EBS non collegati a nessuna istanza continuano a costare finché non li elimini.",
      ]} />

      <H2 id="architettura">EC2 in un'architettura reale</H2>
      <P>In produzione un'istanza singola è un rischio: se si guasta, il servizio si ferma. Per questo EC2 si usa quasi sempre insieme ad altri servizi:</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[["Auto Scaling", "Aggiunge o rimuove istanze in base al carico."], ["Elastic Load Balancing", "Distribuisce il traffico tra più istanze."], ["Più Availability Zone", "Resti online anche se un intero data center ha un problema."]].map(([t, x]) => (
          <div key={t} className="rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-5"><p className="font-extrabold text-brand-blue">{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>
        ))}
      </div>
      <P>È esattamente il tipo di architettura che trovi nelle domande della <A slug="aws-solutions-architect-associate">Solutions Architect – Associate</A>.</P>

      <H2 id="sicurezza">Best practice di sicurezza</H2>
      <Bullets items={[
        <><strong>Non aprire SSH a tutto internet:</strong> nel security group consenti la porta 22 solo dal tuo IP, oppure usa Session Manager.</>,
        <><strong>Non salvare chiavi di accesso AWS sull'istanza:</strong> assegnale un ruolo IAM, come spiego nella guida su <A slug="aws-iam">AWS IAM</A>.</>,
        <><strong>Tieni aggiornato il sistema operativo:</strong> le patch di sicurezza sono una tua responsabilità.</>,
        <><strong>Custodisci la key pair:</strong> se la perdi, non puoi scaricarla di nuovo.</>,
      ]} />

      <H2 id="errori">Gli errori più comuni da principiante</H2>
      <Warn items={[
        ["Dimenticare istanze accese", "È la causa numero uno di bollette inaspettate. Alla fine di ogni esercizio, termina ciò che non ti serve."],
        ["Scegliere istanze troppo grandi", "Per imparare basta un'istanza piccola. Si può sempre ingrandire dopo."],
        ["Pensare che “arrestata” significhi “gratis”", "I dischi e gli IP associati continuano a costare."],
        ["Aprire tutte le porte", "“Per far funzionare le cose” non è un motivo. Apri solo ciò che serve, a chi serve."],
      ]} />

      <H2 id="faq">Domande frequenti</H2>
      <div className="mt-6 space-y-3">
        {FAQ.map(([q, x]) => (
          <details key={q} className="group rounded-2xl border border-border p-5">
            <summary className="flex cursor-pointer list-none items-center gap-3 font-extrabold"><HelpCircle className="h-5 w-5 shrink-0 text-brand-blue" />{q}</summary>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{x}</p>
          </details>
        ))}
      </div>

      <H2 id="sintesi">In sintesi</H2>
      <Bullets items={[
        "Amazon EC2 ti permette di creare server virtuali nel cloud in pochi minuti, pagando in base all'uso.",
        "I concetti base sono istanza, AMI, tipo di istanza, volume EBS, security group e key pair.",
        "Il nome del tipo di istanza indica famiglia, generazione e dimensione.",
        "Esistono più modelli di prezzo: On-Demand, Savings Plans, istanze riservate, Spot e host dedicati.",
        "Attenzione ai costi nascosti e alla sicurezza: ruoli IAM al posto delle chiavi e porte aperte solo a chi serve.",
      ]} />
      <Course title="Vuoi padroneggiare EC2 e i servizi AWS?" text="Scopri Diventa Cloud Engineer in 90 giorni: il percorso per certificazioni e lavoro." />
    </div>
  );
}
