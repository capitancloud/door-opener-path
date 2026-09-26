import { Check, X, HelpCircle, Lightbulb, Sparkles, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "in-breve", label: "Kubernetes in breve" },
  { id: "problema", label: "Il problema che risolve" },
  { id: "concetti", label: "I concetti base" },
  { id: "esempio", label: "Un primo esempio pratico" },
  { id: "dove", label: "Dove provare Kubernetes" },
  { id: "quando", label: "Quando serve (e quando no)" },
  { id: "strada", label: "Da dove iniziare" },
  { id: "corso", label: "Corso Kubernetes" },
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

const Quiz = ({ title, text }: { title: string; text: string }) => (
  <div className="mt-10 rounded-3xl bg-brand-blue-deep p-7 text-primary-foreground">
    <Sparkles className="h-6 w-6 text-brand-yellow" />
    <p className="mt-3 font-blog-display text-2xl font-extrabold">{title}</p>
    <p className="mt-2 text-primary-foreground/80">{text}</p>
    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
  </div>
);

const CONCEPTS = [
  ["Cluster", "L'insieme dei server gestiti da Kubernetes"],
  ["Control plane", "Il “cervello” del cluster, che prende le decisioni"],
  ["Nodo", "Un server del cluster su cui girano i container"],
  ["Pod", "L'unità più piccola: uno o più container che lavorano insieme"],
  ["Deployment", "Descrive quante copie di un Pod vuoi e come aggiornarle"],
  ["Service", "Un indirizzo stabile per raggiungere un gruppo di Pod"],
  ["Namespace", "Una suddivisione logica del cluster, per esempio “test” e “produzione”"],
  ["ConfigMap e Secret", "Configurazioni e dati sensibili, separati dal codice"],
];

const YAML = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: sito-web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: sito-web
  template:
    metadata:
      labels:
        app: sito-web
    spec:
      containers:
        - name: nginx
          image: nginx:1.27
          ports:
            - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: sito-web
spec:
  selector:
    app: sito-web
  ports:
    - port: 80
      targetPort: 80`;

const FAQ = [
  ["Kubernetes è difficile da imparare?", "Le basi si imparano in alcune settimane, se conosci già Docker e un po' di Linux. Padroneggiarlo in produzione richiede mesi di esperienza."],
  ["Kubernetes sostituisce Docker?", "No. Docker serve a creare le immagini dei container, Kubernetes le esegue e le gestisce su larga scala. Si usano insieme."],
  ["Kubernetes è gratis?", "Sì, è open source. Nel cloud però paghi i server su cui gira e, nei servizi gestiti, anche la gestione del cluster."],
  ["Un cloud engineer junior deve conoscere Kubernetes?", "Le basi sono un vantaggio concreto. Molte posizioni junior però non lo richiedono in modo approfondito: di solito si parte da cloud, Linux e Docker, e Kubernetes arriva dopo."],
];

const STEPS: [string, ReactNode][] = [
  ["Linux e reti di base", <>perché Kubernetes le dà per scontate (vedi <A slug="linux-per-principianti">Linux per principianti</A>)</>],
  ["Docker", <>per capire bene immagini e container (vedi <A slug="docker">Docker spiegato da zero</A>)</>],
  ["Kubernetes", "Pod, Deployment e Service, poi il resto"],
  ["Kubernetes nel cloud", "con un servizio gestito come Amazon EKS"],
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Kubernetes gestisce automaticamente i container quando sono tanti: li distribuisce su più server, li riavvia se si bloccano, ne aumenta il numero quando cresce il traffico e li aggiorna senza interrompere il servizio. In gergo: li <em>orchestra</em>.</p>
      </div>
      <P>È una delle competenze più richieste e meglio pagate del mondo cloud, ma anche una di quelle che spaventano di più chi inizia. Qui trovi Kubernetes spiegato in modo semplice: cos'è, i concetti fondamentali, un primo esempio pratico e, soprattutto, quando serve davvero.</P>

      <H2 id="in-breve">Kubernetes: cos'è in breve</H2>
      <P>Kubernetes, spesso abbreviato in <strong>K8s</strong>, è nato in Google ed è stato reso open source nel 2014. Oggi è lo standard per eseguire applicazioni basate su container in produzione, ed è gestito dalla Cloud Native Computing Foundation.</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border p-5"><p className="font-blog-display text-xl font-extrabold">Docker</p><p className="mt-2 text-brand-ink/80">Crea ed esegue <strong>un</strong> container.</p></div>
        <div className="rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-5"><p className="font-blog-display text-xl font-extrabold text-brand-blue">Kubernetes</p><p className="mt-2 text-brand-ink/80">Ne gestisce <strong>centinaia</strong>, su decine di server, come un unico sistema.</p></div>
      </div>
      <P>Se non hai ancora chiaro cos'è un container, parti dalla guida su <A slug="docker">Docker spiegato da zero</A>.</P>

      <H2 id="problema">Il problema che risolve</H2>
      <P>Immagina un'applicazione composta da dieci servizi, ognuno in più copie: cinquanta container su cinque server. Senza uno strumento dedicato dovresti decidere a mano dove avviare ogni container, controllare di continuo che siano attivi, riavviare quelli bloccati e aggiungerne altri quando arriva più traffico.</P>
      <div className="mt-6 rounded-2xl border-l-4 border-brand-yellow bg-brand-yellow/10 p-5">
        <p className="font-extrabold">Tu descrivi lo stato che vuoi, Kubernetes lo mantiene</p>
        <p className="mt-2 leading-relaxed text-brand-ink/80">Per esempio: “voglio sempre 3 copie di questa applicazione”. Se un container si blocca o un server si spegne, Kubernetes ne avvia un altro in automatico.</p>
      </div>

      <H2 id="concetti">I concetti base di Kubernetes</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {CONCEPTS.map(([t, d], i) => (
          <div key={t} className={`rounded-2xl border p-5 ${i >= 3 && i <= 5 ? "border-brand-blue/40 bg-brand-blue/5" : "border-border"}`}>
            <p className="font-blog-display text-lg font-extrabold text-brand-blue">{t}</p>
            <p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p>
          </div>
        ))}
      </div>
      <P>All'inizio bastano tre concetti, evidenziati sopra: <strong>Pod, Deployment e Service</strong>. Con questi puoi già far girare un'applicazione completa.</P>

      <H2 id="esempio">Un primo esempio pratico</H2>
      <P>In Kubernetes tutto si descrive con file YAML. Ecco un Deployment che avvia 3 copie di un server web Nginx e un Service che le rende raggiungibili:</P>
      <Code title="sito.yaml">{YAML}</Code>
      <P>Salvi il file come <C>sito.yaml</C> e lo applichi con lo strumento da riga di comando di Kubernetes, <C>kubectl</C>:</P>
      <Code title="Terminale">{`kubectl apply -f sito.yaml
kubectl get pods
kubectl get services`}</Code>
      <div className="mt-6 rounded-2xl border border-brand-blue/20 bg-secondary p-5">
        <p className="font-extrabold text-brand-blue">L'esperimento chiave</p>
        <p className="mt-2 leading-relaxed text-brand-ink/80">Elimina uno dei Pod con <C>{"kubectl delete pod <nome>"}</C>: Kubernetes ne creerà subito un altro per tornare a 3 copie. È l'essenza di Kubernetes in un solo esperimento.</p>
      </div>

      <H2 id="dove">Dove provare Kubernetes</H2>
      <P>Per imparare non serve un cluster in azienda. Puoi usare:</P>
      <Bullets items={[
        <><strong>minikube</strong> o <strong>kind</strong>, che creano un piccolo cluster sul tuo computer;</>,
        <><strong>Docker Desktop</strong>, che include un'opzione per attivare Kubernetes in locale;</>,
        <><strong>servizi gestiti nel cloud</strong>, come Amazon EKS su <A slug="aws-cos-e">AWS</A>, AKS su Azure e GKE su Google Cloud. Attenzione ai costi: un cluster gestito si paga anche quando è inattivo.</>,
      ]} />

      <Quiz title="Ti piacerebbe lavorare con container e Kubernetes?" text="Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud." />

      <H2 id="quando">Quando serve davvero Kubernetes (e quando no)</H2>
      <P>Kubernetes è potente, ma anche complesso. Non è la soluzione giusta per tutto.</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-5">
          <p className="font-extrabold text-brand-blue">Ha senso quando</p>
          <ul className="mt-3 space-y-2">{["l'applicazione ha molti servizi e molti container", "serve scalare in automatico in base al traffico", "più team rilasciano di continuo sullo stesso sistema", "si vuole un modo standard di gestire app su cloud diversi"].map((t) => <li key={t} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />{t}</li>)}</ul>
        </div>
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
          <p className="font-extrabold text-destructive">Spesso è eccessivo quando</p>
          <ul className="mt-3 space-y-2">{["l'applicazione è piccola o ha pochi container", "il team è ridotto e non ha tempo per la complessità", "bastano servizi più semplici come AWS Fargate o Amazon ECS"].map((t) => <li key={t} className="flex gap-2"><X className="mt-1 h-4 w-4 shrink-0 text-destructive" />{t}</li>)}</ul>
        </div>
      </div>
      <P>Saper riconoscere quando <strong>non</strong> usarlo è una competenza che i selezionatori apprezzano quanto saperlo usare.</P>

      <H2 id="strada">Da dove iniziare: la strada giusta</H2>
      <P>L'errore più comune è partire da Kubernetes. La sequenza che funziona è:</P>
      <ol className="mt-6 space-y-3">
        {STEPS.map(([t, d], i) => (
          <li key={t} className="flex gap-4 rounded-2xl border border-border p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span>
            <span className="text-lg leading-relaxed"><strong>{t}</strong>, {d}</span>
          </li>
        ))}
      </ol>
      <P>Trovi come Kubernetes si inserisce nel lavoro quotidiano nella guida sul <A slug="devops-engineer">DevOps engineer</A> e in quella su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>

      <H2 id="corso">Corso Kubernetes: cosa deve insegnarti</H2>
      <P>Se valuti un corso Kubernetes, controlla che copra almeno:</P>
      <Bullets items={[
        "l'architettura del cluster e i concetti di base;",
        "la scrittura di file YAML per Deployment, Service, ConfigMap e Secret;",
        "i comandi kubectl per gestire e diagnosticare problemi;",
        "gli aggiornamenti senza interruzioni e il ritorno alla versione precedente;",
        "laboratori pratici su un cluster reale o locale.",
      ]} />
      <P>Per chi vuole certificarsi, la più conosciuta è la <strong>Certified Kubernetes Administrator (CKA)</strong>, da affrontare dopo aver fatto pratica.</P>

      <H2 id="faq">Domande frequenti</H2>
      <div className="mt-6 space-y-3">
        {FAQ.map(([q, a]) => (
          <details key={q} className="group rounded-2xl border border-border p-5">
            <summary className="flex cursor-pointer list-none items-center gap-3 font-extrabold"><HelpCircle className="h-5 w-5 shrink-0 text-brand-blue" />{q}</summary>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{a}</p>
          </details>
        ))}
      </div>

      <H2 id="sintesi">In sintesi</H2>
      <Bullets items={[
        "Kubernetes orchestra i container: li distribuisce, li riavvia, li scala e li aggiorna in automatico.",
        "I concetti da cui partire sono Pod, Deployment e Service, descritti in file YAML e gestiti con kubectl.",
        "Puoi impararlo in locale con minikube o kind, e poi provarlo nel cloud con servizi come Amazon EKS.",
        "Non serve sempre: per applicazioni piccole esistono soluzioni più semplici.",
        "La strada giusta passa prima da Linux e Docker.",
      ]} />
      <Quiz title="Lavorare con Kubernetes e il cloud fa per te?" text="Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi." />
    </div>
  );
}
