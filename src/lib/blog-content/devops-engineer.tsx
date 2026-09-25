import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, BadgeCheck, Bot, Check, Coffee, Euro, Factory, Home as HomeIcon, HelpCircle, Lightbulb, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "cos-e", label: "Cos'è il DevOps" },
  { id: "cosa-fa", label: "Cosa fa un DevOps engineer" },
  { id: "giornata", label: "Una giornata tipo" },
  { id: "competenze", label: "Le competenze" },
  { id: "differenze", label: "DevOps vs cloud engineer" },
  { id: "stipendio", label: "Quanto guadagna" },
  { id: "come-diventare", label: "Come diventarlo" },
  { id: "corso", label: "Corso DevOps: cosa deve insegnare" },
  { id: "certificazioni", label: "Le certificazioni utili" },
  { id: "ruoli-simili", label: "SRE, platform engineer e altri" },
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

const attivita: [string, string][] = [
  ["Pipeline CI/CD", "Ogni volta che uno sviluppatore modifica il codice, la pipeline lo testa e lo rilascia in automatico."],
  ["Infrastruttura come codice", "Con strumenti come Terraform, invece di creare server e reti a mano."],
  ["Container", "Con Docker e spesso Kubernetes, per far girare le applicazioni allo stesso modo ovunque."],
  ["Monitoraggio e allarmi", "Per accorgersi dei problemi prima degli utenti."],
  ["Automazione", "Script in Python o Bash per le attività ripetitive."],
  ["Lavoro con gli sviluppatori", "A stretto contatto, per rendere i rilasci più veloci e sicuri."],
];

const competenze: [string, string, string][] = [
  ["Sistemi operativi", "Linux, Bash", "La base di quasi tutti i server"],
  ["Versionamento", "Git, GitHub, GitLab", "Gestire codice e configurazioni"],
  ["CI/CD", "GitHub Actions, GitLab CI, Jenkins", "Automatizzare test e rilasci"],
  ["Infrastruttura come codice", "Terraform, CloudFormation", "Creare infrastruttura in modo ripetibile"],
  ["Container", "Docker, Kubernetes", "Impacchettare ed eseguire applicazioni"],
  ["Cloud", "AWS, Azure, Google Cloud", "Dove gira quasi tutto oggi"],
  ["Monitoraggio", "Prometheus, Grafana, CloudWatch", "Vedere cosa succede nei sistemi"],
  ["Scripting", "Python, Bash", "Automatizzare il lavoro ripetitivo"],
  ["Sicurezza", "Scansione del codice e delle immagini", "Integrare la sicurezza nei rilasci (DevSecOps)"],
];

const confronto: [string, string, string][] = [
  ["Focus principale", "L'infrastruttura cloud", "Il processo di rilascio del software"],
  ["Domanda chiave", "\"Dove e come gira l'applicazione?\"", "\"Come arriva il codice in produzione, in modo veloce e sicuro?\""],
  ["Strumenti centrali", "Servizi AWS/Azure, reti, sicurezza, costi", "Pipeline CI/CD, container, automazione"],
  ["Rapporto con gli sviluppatori", "Collaborazione occasionale", "Collaborazione quotidiana"],
  ["Conoscenza del codice", "Script e configurazioni", "Script, configurazioni e ciclo di vita del software"],
];

const tappe: [string, string][] = [
  ["Le basi", "Linux, reti e Git. Senza queste, tutto il resto resta fragile."],
  ["Una piattaforma cloud", "Di solito AWS, con le prime certificazioni per dimostrare le competenze."],
  ["Container", "Docker prima, poi le basi di Kubernetes."],
  ["Infrastruttura come codice", "Terraform, per creare ambienti in modo ripetibile."],
  ["CI/CD", "Costruire pipeline che testano e rilasciano il codice in automatico."],
  ["Un portfolio", "Due o tre progetti su GitHub che mostrano l'intero ciclo, dal codice al rilascio."],
];

const ruoli: [string, string][] = [
  ["Site Reliability Engineer (SRE)", "Nato in Google, si concentra sull'affidabilità dei sistemi in produzione. Misura disponibilità e prestazioni, gestisce gli incidenti e automatizza tutto ciò che può ridurli."],
  ["Platform engineer", "Costruisce una \"piattaforma interna\" che gli sviluppatori usano per rilasciare il proprio codice in autonomia, senza dover conoscere tutti i dettagli dell'infrastruttura."],
  ["DevSecOps engineer", "Un DevOps engineer con un'attenzione particolare alla sicurezza, integrata in ogni fase della pipeline."],
  ["Build and release engineer", "Un ruolo più specifico, concentrato sui processi di compilazione e rilascio."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Il DevOps engineer deve saper programmare?", a: <>Deve saper scrivere script e leggere il codice degli sviluppatori, ma non è uno sviluppatore. Python e Bash sono più che sufficienti per la maggior parte delle attività.</> },
  { q: "Si può iniziare direttamente come DevOps engineer?", a: <>È raro. Le posizioni junior esistono, ma di solito chiedono basi già solide su Linux, cloud e automazione. Molti arrivano al DevOps dopo un primo ruolo da cloud engineer o sistemista.</> },
  { q: "DevOps è un ruolo o una metodologia?", a: <>Entrambe le cose. Nasce come metodologia, cioè un modo di lavorare tra sviluppo e operations. Il DevOps engineer è la figura che costruisce gli strumenti per metterla in pratica.</> },
  { q: "Meglio diventare cloud engineer o DevOps engineer?", a: <>Per chi parte da zero, il cloud engineer è spesso il primo passo più accessibile. Le competenze sono in gran parte le stesse, e passare al DevOps in un secondo momento è naturale.</> },
  { q: "Quanto tempo serve per diventare DevOps engineer?", a: <>Dipende dal punto di partenza. Chi arriva da un ruolo da sistemista o da sviluppatore può fare il passaggio in qualche mese di studio mirato. Chi parte da zero di solito passa prima da un ruolo cloud junior, e arriva al DevOps dopo un po' di esperienza sul campo.</> },
  { q: "L'intelligenza artificiale sostituirà i DevOps engineer?", a: <>L'AI sta già automatizzando parte del lavoro, come scrivere script o configurazioni. Ma progettare i processi, capire i problemi in produzione e prendere decisioni sulla sicurezza richiede ancora persone competenti. Chi sa usare l'AI come strumento lavora più velocemente, non viene sostituito.</> },
];

const QuizBox = ({ title, text }: { title: string; text: string }) => (
  <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
    <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> {title}</p>
    <p className="mt-3 text-lg leading-relaxed">{text}</p>
    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
  </div>
);

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Cosa significa davvero DevOps, cosa fa un DevOps engineer ogni giorno, quali competenze servono, quanto si guadagna e che differenza c'è con il cloud engineer.</p>
      </div>
      <P>Il DevOps engineer è una delle figure tecniche più cercate dalle aziende, ma anche una delle più difficili da definire: ogni annuncio sembra descrivere un lavoro diverso. In questa guida trovi cosa significa davvero DevOps, cosa fa un DevOps engineer ogni giorno, quali competenze servono, quanto si guadagna e, soprattutto, che differenza c'è con il cloud engineer, due ruoli che spesso vengono confusi.</P>

      <H2 id="cos-e">Cos'è il DevOps: prima una cultura, poi un ruolo</H2>
      <P>La parola DevOps nasce dall'unione di <strong>Development</strong> (sviluppo) e <strong>Operations</strong> (gestione dei sistemi). Per anni questi due mondi hanno lavorato separati: gli sviluppatori scrivevano il codice, poi lo "passavano" a chi doveva metterlo in produzione. Risultato: rilasci lenti, errori scoperti tardi e continui scaricabarili tra i due team.</P>
      <P>Il DevOps è nato per risolvere questo problema. È prima di tutto un modo di lavorare, basato su tre idee:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Collaborazione", "Tra chi sviluppa e chi gestisce i sistemi, fin dall'inizio."],
          ["Automazione", "Di tutto ciò che si ripete: test, rilasci, creazione dell'infrastruttura."],
          ["Rilasci frequenti", "Piccoli e continui, invece di grandi aggiornamenti ogni sei mesi."],
        ].map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-3xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Il DevOps engineer è la persona che rende possibile questo modo di lavorare, costruendo gli strumenti e i processi che lo tengono in piedi.</P>

      <H2 id="cosa-fa">Cosa fa un DevOps engineer</H2>
      <P>Le attività cambiano da azienda ad azienda, ma il cuore del lavoro è quasi sempre questo:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {attivita.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-blog-display text-lg font-extrabold text-brand-blue">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>

      <H2 id="giornata">Una giornata tipo</H2>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-blue/20 bg-secondary p-6"><Coffee className="mt-1 h-6 w-6 shrink-0 text-brand-blue" /><p className="leading-relaxed">La mattina controlla i sistemi di monitoraggio: è successo qualcosa durante la notte? Poi partecipa a un breve incontro con il team di sviluppo per capire cosa verrà rilasciato. Durante la giornata può aggiornare una pipeline che rallenta i rilasci, scrivere il codice Terraform per un nuovo ambiente di test, indagare su un errore in produzione insieme a uno sviluppatore o ridurre i costi di un servizio sovradimensionato.</p></div>
      <P>È un lavoro vario, con molto problem solving e poca routine. E a volte con qualche urgenza: quando un rilascio si blocca, il DevOps engineer è tra i primi a essere chiamato.</P>

      <H2 id="competenze">Le competenze di un DevOps engineer</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[36rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Area</th><th className="p-3">Strumenti tipici</th><th className="p-3">A cosa servono</th></tr></thead>
          <tbody>{competenze.map(([a, s, d], i) => (
            <tr key={a} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{a}</td><td className="p-3 font-mono text-xs sm:text-sm">{s}</td><td className="p-3 text-brand-ink/75">{d}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Non serve padroneggiarle tutte dal primo giorno. Ma rispetto al cloud engineer, il DevOps engineer deve conoscere meglio il ciclo di vita del software: come si scrive, si testa e si rilascia un'applicazione.</P>

      <H2 id="differenze">DevOps engineer e cloud engineer: le differenze</H2>
      <P>I due ruoli si sovrappongono molto, e in molte aziende italiane la stessa persona fa entrambe le cose. La differenza sta nel punto di partenza:</P>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[36rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3"></th><th className="p-3">Cloud engineer</th><th className="p-3">DevOps engineer</th></tr></thead>
          <tbody>{confronto.map(([v, a, b], i) => (
            <tr key={v} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{v}</td><td className="p-3 text-brand-ink/80">{a}</td><td className="p-3 text-brand-ink/80">{b}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="rounded-2xl border border-border p-5"><HomeIcon className="h-6 w-6 text-brand-blue" /><p className="mt-2 font-extrabold">Il cloud engineer costruisce la casa</p></div>
        <ArrowRight className="mx-auto hidden h-6 w-6 text-brand-blue sm:block" />
        <div className="rounded-2xl border border-border p-5"><Factory className="h-6 w-6 text-brand-blue" /><p className="mt-2 font-extrabold">Il DevOps engineer costruisce la catena di montaggio che porta i mobili dentro, sempre più velocemente e senza romperli</p></div>
      </div>
      <P>Molti professionisti iniziano come cloud engineer e crescono verso il DevOps, perché le basi sono le stesse. Se vuoi approfondire il primo ruolo, leggi la guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>
      <QuizBox title="Non sai se un ruolo tecnico fa per te?" text="Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud." />

      <H2 id="stipendio">Quanto guadagna un DevOps engineer</H2>
      <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:flex-row sm:items-center sm:p-8">
        <Euro className="h-10 w-10 shrink-0 text-brand-blue" />
        <div><p className="text-xs font-extrabold uppercase text-brand-blue">RAL indicativa junior in Italia</p><p className="font-blog-display text-3xl font-extrabold sm:text-4xl">28.000–35.000€</p></div>
      </div>
      <P>Sono cifre simili a quelle di un cloud engineer junior. Con qualche anno di esperienza, soprattutto se conosce bene Kubernetes e le pipeline su larga scala, la crescita può essere rapida. Le cifre variano molto per città, settore e dimensione dell'azienda.</P>

      <H2 id="come-diventare">Come diventare DevOps engineer</H2>
      <P>Pochi iniziano direttamente come DevOps engineer. Il percorso più comune passa da un ruolo vicino: sistemista, sviluppatore o cloud engineer junior. Le tappe sono queste:</P>
      <div className="mt-6 space-y-3">
        {tappe.map(([t, d], i) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="corso">Corso DevOps: cosa deve insegnare</H2>
      <P>Se stai valutando un corso DevOps, controlla che non sia solo teoria. Un buon corso deve:</P>
      <Bullets items={[
        <>partire dalle basi di Linux, reti e Git, se non le hai già;</>,
        <>farti costruire pipeline CI/CD reali, non solo mostrarle in slide;</>,
        <>insegnare <A slug="terraform">Terraform</A>, Docker e Kubernetes con laboratori pratici;</>,
        <>lavorare su una piattaforma cloud vera, come AWS;</>,
        <>includere almeno un progetto completo da mettere nel portfolio.</>,
      ]} />
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6"><AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-brand-yellow-deep" /><p className="leading-relaxed">Diffida dei corsi che promettono di farti diventare DevOps engineer in poche settimane partendo da zero: è un ruolo che richiede basi solide e tanta pratica.</p></div>

      <H2 id="certificazioni">Le certificazioni utili per un DevOps engineer</H2>
      <P>Non esiste una certificazione "DevOps" unica, ma alcune sono molto apprezzate:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {([
          ["AWS Solutions Architect – Associate", <>Per dimostrare di conoscere bene la piattaforma cloud. Trovi tutto nella <A slug="aws-solutions-architect-associate">guida alla SAA-C03</A>.</>],
          ["AWS DevOps Engineer – Professional", <>Di livello avanzato, per chi ha già esperienza.</>],
          ["Certified Kubernetes Administrator (CKA)", <>Per chi lavora molto con i container.</>],
          ["HashiCorp Terraform Associate", <>Per l'infrastruttura come codice.</>],
        ] as [string, ReactNode][]).map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-border p-5"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>
      <P>Per chi inizia, il consiglio è sempre lo stesso: prima una certificazione cloud di base, poi le altre in base al lavoro che fai. Il quadro completo è nella <A slug="certificazioni-aws">guida sulle certificazioni AWS</A>.</P>

      <H2 id="ruoli-simili">DevOps, SRE e platform engineer: nomi diversi, lavori vicini</H2>
      <P>Cercando annunci troverai altri titoli molto simili al DevOps engineer. Conoscerli ti aiuta a non perdere offerte adatte a te:</P>
      <div className="mt-6 space-y-3">
        {ruoli.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="font-blog-display text-lg font-extrabold text-brand-blue">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Nelle aziende italiane questi titoli vengono spesso usati in modo intercambiabile. Più del nome, conta leggere le attività descritte nell'annuncio: se parla di pipeline, container, Terraform e cloud, sei nel territorio DevOps.</P>

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
          "DevOps è un modo di lavorare che unisce sviluppo e operations, basato su collaborazione, automazione e rilasci frequenti.",
          "Il DevOps engineer costruisce pipeline CI/CD, gestisce infrastruttura come codice, container e monitoraggio.",
          "La differenza con il cloud engineer è il focus: il cloud engineer si concentra sull'infrastruttura, il DevOps engineer sul processo di rilascio del software.",
          "Il percorso più comune passa da un primo ruolo nel cloud o come sistemista.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Prima capisci se fa per te, poi investi tempo e soldi.</p>
        <p className="mt-3 flex items-start gap-2 text-lg"><Bot className="mt-1 h-5 w-5 shrink-0 text-brand-blue" />Vuoi capire se un lavoro tecnico nel cloud fa per te? Fai il quiz gratuito di 2 minuti.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>
    </div>
  );
}
