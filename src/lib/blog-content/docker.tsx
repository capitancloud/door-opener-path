import { AlertTriangle, Check, HelpCircle, Lightbulb, Sparkles, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "in-breve", label: "Docker in breve" },
  { id: "problema", label: "Il problema che risolve" },
  { id: "vm", label: "Container e macchine virtuali" },
  { id: "concetti", label: "I concetti base" },
  { id: "installare", label: "Installare Docker" },
  { id: "primo-container", label: "Il tuo primo container" },
  { id: "dockerfile", label: "Creare un'immagine" },
  { id: "compose", label: "Docker Compose" },
  { id: "cloud", label: "Docker nel cloud e nel lavoro" },
  { id: "corso", label: "Corso Docker: cosa deve insegnarti" },
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

const Quiz = ({ title, text }: { title: string; text: string }) => (
  <div className="mt-10 rounded-3xl bg-brand-blue-deep p-7 text-primary-foreground">
    <Sparkles className="h-6 w-6 text-brand-yellow" />
    <p className="mt-3 font-blog-display text-2xl font-extrabold">{title}</p>
    <p className="mt-2 text-primary-foreground/80">{text}</p>
    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
  </div>
);

const COMPARE = [
  ["Cosa contiene", "Un intero sistema operativo", "Solo l'applicazione e le sue dipendenze"],
  ["Dimensione", "Gigabyte", "Spesso megabyte"],
  ["Avvio", "Minuti", "Secondi"],
  ["Risorse", "Elevate", "Leggere, molti container su una sola macchina"],
  ["Isolamento", "Molto forte", "Forte, condivide il kernel del sistema ospite"],
];

const CONCEPTS = [
  ["Immagine", "Il “modello” di un container, di sola lettura. Contiene l'applicazione e tutto ciò che le serve."],
  ["Container", "Un'immagine in esecuzione. Da una stessa immagine puoi avviare molti container."],
  ["Dockerfile", "Il file di testo con le istruzioni per costruire un'immagine."],
  ["Registry", "Un archivio di immagini. Il più noto è Docker Hub; su AWS esiste Amazon ECR."],
  ["Volume", "Uno spazio in cui salvare dati che devono sopravvivere quando il container viene eliminato."],
];

const ERRORS = [
  ["Immagini enormi", "Partire da immagini base pesanti rende tutto più lento. Usa versioni ridotte, come le varianti slim o alpine."],
  ["Password nell'immagine", "Tutto ciò che copi nell'immagine può essere letto da chi la scarica. Passa segreti e configurazioni con variabili d'ambiente o servizi dedicati."],
  ["Usare sempre il tag latest", "Oggi funziona, domani l'immagine cambia e l'applicazione si rompe. Indica una versione precisa."],
  ["Dati importanti dentro il container", "Quando il container viene eliminato, i dati spariscono. Per database e file da conservare, usa i volumi."],
];

const FAQ = [
  ["Docker è gratis?", "Docker Engine è gratuito e open source. Docker Desktop è gratuito per uso personale, studio e piccole aziende, mentre per le aziende più grandi è previsto un abbonamento. Controlla le condizioni aggiornate sul sito ufficiale."],
  ["Che differenza c'è tra Docker e Kubernetes?", "Docker crea ed esegue i container. Kubernetes li orchestra quando sono tanti: li distribuisce su più server, li riavvia se si bloccano e ne aumenta il numero quando il traffico cresce."],
  ["Serve conoscere Linux per usare Docker?", "Per iniziare no, ma aiuta molto: i container sono basati su tecnologie Linux e la maggior parte delle immagini usa Linux. Le basi del terminale sono un ottimo investimento."],
  ["Docker sostituisce le macchine virtuali?", "Non del tutto. Container e macchine virtuali risolvono problemi diversi, e nel cloud si usano spesso insieme."],
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Docker crea ed esegue container: pacchetti che contengono un'applicazione con tutto ciò che le serve. Così gira allo stesso modo ovunque: sul tuo portatile, sul server di un collega o nel cloud.</p>
      </div>
      <P>Docker è lo strumento più diffuso per creare ed eseguire <strong>container</strong>: pacchetti che contengono un'applicazione insieme a librerie, configurazioni e dipendenze. In questa guida per principianti trovi Docker spiegato da zero: cos'è, che problema risolve, i concetti fondamentali, i primi comandi e perché è diventato uno standard per chi lavora nel cloud e nel DevOps.</P>

      <H2 id="in-breve">Docker: cos'è in breve</H2>
      <P>Docker è una piattaforma che permette di impacchettare un'applicazione in un container e di eseguirlo su qualsiasi computer che abbia Docker installato. Un container è isolato dal resto del sistema, parte in pochi secondi e occupa poche risorse.</P>
      <div className="mt-6 rounded-2xl border-l-4 border-brand-yellow bg-brand-yellow/10 p-5">
        <p className="font-extrabold">L'analogia dei container per le merci</p>
        <p className="mt-2 leading-relaxed text-brand-ink/80">Prima dei container standard, ogni nave caricava sacchi, casse e barili in modo diverso. Con i container, qualsiasi merce viaggia allo stesso modo su navi, treni e camion. Docker fa la stessa cosa con il software.</p>
      </div>

      <H2 id="problema">Il problema che risolve: “sul mio computer funziona”</H2>
      <P>È la frase più famosa dello sviluppo software. Un'applicazione funziona sul computer di chi l'ha scritta, ma si rompe sul server: la versione di Python è diversa, manca una libreria o una configurazione è sbagliata.</P>
      <P>Con Docker, l'applicazione <strong>viaggia insieme al suo ambiente</strong>. Chi la riceve non deve installare niente a parte Docker: avvia il container e funziona, esattamente come sul computer di partenza.</P>

      <H2 id="vm">Container e macchine virtuali: la differenza</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <thead className="bg-secondary"><tr><th className="p-4"></th><th className="p-4 font-extrabold">Macchina virtuale</th><th className="p-4 font-extrabold text-brand-blue">Container Docker</th></tr></thead>
          <tbody>{COMPARE.map(([k, vm, c]) => <tr key={k} className="border-t border-border"><td className="p-4 font-bold">{k}</td><td className="p-4 text-brand-ink/80">{vm}</td><td className="p-4 text-brand-ink/80">{c}</td></tr>)}</tbody>
        </table>
      </div>
      <P>Container e macchine virtuali non sono nemici: nel cloud, spesso, i container girano proprio dentro macchine virtuali, come le istanze EC2 di <A slug="aws-cos-e">AWS</A>.</P>

      <H2 id="concetti">I concetti base di Docker</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {CONCEPTS.map(([t, d], i) => (
          <div key={t} className={`rounded-2xl border border-border p-5 ${i === 4 ? "sm:col-span-2" : ""}`}>
            <p className="font-blog-display text-xl font-extrabold text-brand-blue">{t}</p>
            <p className="mt-2 leading-relaxed text-brand-ink/80">{d}</p>
          </div>
        ))}
      </div>

      <H2 id="installare">Installare Docker</H2>
      <P>Su Windows e macOS si installa <strong>Docker Desktop</strong>, che include tutto il necessario. Su Linux si installa <strong>Docker Engine</strong> dal gestore di pacchetti. Per verificare che funzioni:</P>
      <Code title="Terminale">{`docker --version
docker run hello-world`}</Code>
      <P>Se vedi un messaggio di benvenuto, Docker è pronto.</P>

      <H2 id="primo-container">Il tuo primo container</H2>
      <P>Avvia un server web Nginx con un solo comando:</P>
      <Code title="Terminale">{`docker run -d -p 8080:80 --name mio-sito nginx`}</Code>
      <P>Apri il browser su <C>http://localhost:8080</C>: vedrai la pagina di benvenuto di Nginx. In pochi secondi Docker ha scaricato l'immagine, creato il container e collegato la porta 8080 del tuo computer alla porta 80 del container.</P>
      <P>Alcuni comandi che userai sempre:</P>
      <Code title="Comandi essenziali">{`docker ps                 # elenca i container attivi
docker logs mio-sito      # mostra i log del container
docker stop mio-sito      # ferma il container
docker rm mio-sito        # elimina il container
docker images             # elenca le immagini scaricate`}</Code>

      <H2 id="dockerfile">Creare la tua immagine con un Dockerfile</H2>
      <P>Supponi di avere una piccola applicazione <A slug="python-per-principianti">Python</A> in un file <C>app.py</C>, con le librerie elencate in <C>requirements.txt</C>. Ecco un Dockerfile per impacchettarla:</P>
      <Code title="Dockerfile">{`FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "app.py"]`}</Code>
      <P>Poi costruisci l'immagine e avvia il container:</P>
      <Code title="Terminale">{`docker build -t mia-app .
docker run mia-app`}</Code>
      <P>Ogni riga del Dockerfile è un passo: parti da un'immagine base con Python, copi i file, installi le dipendenze e indichi il comando da eseguire all'avvio.</P>

      <H2 id="compose">Docker Compose in breve</H2>
      <P>Le applicazioni reali sono spesso fatte di più parti: un'applicazione web, un database, una cache. <strong>Docker Compose</strong> permette di descriverle tutte in un unico file e avviarle insieme:</P>
      <Code title="compose.yaml">{`services:
  web:
    build: .
    ports:
      - "8080:5000"
  cache:
    image: redis:7`}</Code>
      <P>Con <C>docker compose up</C> parte tutto, con <C>docker compose down</C> si ferma tutto.</P>

      <Quiz title="Ti piacerebbe lavorare con Docker e il cloud?" text="Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud." />

      <H2 id="cloud">Docker nel cloud e nel lavoro</H2>
      <P>Docker è ovunque nel cloud. Su AWS i container si eseguono con servizi come <strong>Amazon ECS</strong> e <strong>AWS Fargate</strong>, che gestiscono i server al posto tuo, oppure con <strong>Amazon EKS</strong>, basato su Kubernetes. Quando servono decine o centinaia di container entra in gioco proprio Kubernetes: trovi le basi nella guida su <A slug="kubernetes">Kubernetes per principianti</A>.</P>
      <P>Per un <A slug="come-diventare-cloud-engineer">cloud engineer</A> o un DevOps engineer, Docker è una competenza di base richiesta in moltissimi annunci. Trovi come si inserisce nel percorso nella guida sul <A slug="devops-engineer">DevOps engineer</A>.</P>

      <H2 id="corso">Corso Docker: cosa deve insegnarti</H2>
      <P>Se stai valutando un corso Docker, controlla che ti faccia arrivare almeno a:</P>
      <Bullets items={[
        "creare e gestire container dalla riga di comando;",
        "scrivere Dockerfile ordinati e con immagini leggere;",
        "usare volumi e reti tra container;",
        "descrivere un'applicazione multi-container con Docker Compose;",
        "pubblicare un'immagine su un registry e farla girare nel cloud.",
      ]} />
      <P>Il resto si impara lavorando.</P>

      <H2 id="errori">Gli errori più comuni da principiante</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {ERRORS.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
            <p className="flex items-center gap-2 font-extrabold"><AlertTriangle className="h-5 w-5 text-destructive" />{t}</p>
            <p className="mt-2 leading-relaxed text-brand-ink/80">{d}</p>
          </div>
        ))}
      </div>

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
        "Docker impacchetta un'applicazione con tutto ciò che le serve in un container, che gira allo stesso modo ovunque.",
        "I concetti base sono immagine, container, Dockerfile, registry e volume.",
        "Con pochi comandi avvii container, costruisci immagini e, con Docker Compose, applicazioni multi-container.",
        "È una competenza di base per cloud engineer e DevOps engineer, e il primo passo verso Kubernetes.",
      ]} />
      <Quiz title="Lavorare con Docker e il cloud fa per te?" text="Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi." />
    </div>
  );
}
