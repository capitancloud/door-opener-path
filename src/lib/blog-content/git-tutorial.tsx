import { Check, HelpCircle, Lightbulb, Sparkles, Terminal, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "cos-e", label: "Cos'è Git e perché si usa" },
  { id: "git-github", label: "Git e GitHub" },
  { id: "installare", label: "Installare e configurare" },
  { id: "concetti", label: "I concetti base" },
  { id: "primo-repo", label: "Il tuo primo repository" },
  { id: "branch", label: "Lavorare con i branch" },
  { id: "github", label: "Collegare a GitHub" },
  { id: "gitignore", label: "Il file .gitignore" },
  { id: "esercizio", label: "Un esercizio pratico" },
  { id: "comandi", label: "I comandi da sapere" },
  { id: "errori", label: "Errori da principiante" },
  { id: "lavoro", label: "Git nel cloud e DevOps" },
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
const Code = ({ title = "Terminale", children }: { title?: string; children: string }) => (
  <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-brand-ink">
    <div className="flex items-center gap-2 border-b border-primary-foreground/10 px-4 py-2 text-xs font-bold text-primary-foreground/70"><Terminal className="h-4 w-4" />{title}</div>
    <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-primary-foreground"><code>{children}</code></pre>
  </div>
);
const C = ({ children }: { children: ReactNode }) => <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-brand-blue">{children}</code>;

const concetti: [string, string][] = [
  ["Repository (repo)", "La cartella del progetto con tutta la sua storia"],
  ["Commit", "Una \"fotografia\" del progetto in un momento preciso, con un messaggio che descrive la modifica"],
  ["Staging area", "La zona di preparazione dove scegli quali modifiche includere nel prossimo commit"],
  ["Branch", "Un ramo di sviluppo separato, per lavorare senza toccare la versione principale"],
  ["Merge", "L'unione di un branch in un altro"],
  ["Remote", "Una copia del repository su un server, per esempio su GitHub"],
];

const comandi: [string, string][] = [
  ["git init", "Crea un nuovo repository"],
  ["git status", "Mostra lo stato dei file"],
  ["git add <file>", "Aggiunge un file alla staging area"],
  ['git commit -m "messaggio"', "Salva le modifiche con un messaggio"],
  ["git log --oneline", "Mostra la storia dei commit"],
  ["git switch -c <nome>", "Crea un branch e ci si sposta"],
  ["git merge <branch>", "Unisce un branch in quello attuale"],
  ["git remote add origin <url>", "Collega un repository remoto"],
  ["git push", "Invia i commit al repository remoto"],
  ["git pull", "Scarica e integra le modifiche remote"],
  ["git clone <url>", "Copia un repository esistente"],
  ["git restore <file>", "Annulla le modifiche non salvate a un file"],
];

const errori: [string, string][] = [
  ["Salvare password o chiavi nel repository", "È l'errore più pericoloso: se il repository è pubblico, chiunque può leggerle, e ci sono programmi automatici che le cercano di continuo. Usa sempre il .gitignore, e se succede, cambia subito le credenziali."],
  ["Fare commit enormi", "Un commit con cento modifiche diverse è impossibile da capire e da annullare. Meglio tanti commit piccoli, ognuno con un solo scopo."],
  ["Scrivere messaggi inutili", "\"Modifiche\" o \"fix\" non dicono niente. Scrivi cosa hai fatto: \"Aggiunge la configurazione della rete\"."],
  ["Lavorare sempre sul ramo principale", "Per ogni nuova funzione crea un branch: se qualcosa va storto, la versione principale resta intatta."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Git è gratis?", a: <>Sì, Git è gratuito e open source. Anche GitHub offre un piano gratuito sufficiente per i progetti personali e per il portfolio.</> },
  { q: "Git per principianti: da dove iniziare?", a: <>Dai quattro comandi del flusso base: git init, git add, git commit e git log. Usali su un progetto personale per qualche giorno, poi aggiungi branch e GitHub. È esattamente l'ordine seguito in questa guida.</> },
  { q: "Git è difficile da imparare?", a: <>I comandi base si imparano in un pomeriggio. Branch, merge e gestione dei conflitti richiedono qualche settimana di pratica. La cosa importante è usarlo tutti i giorni, anche per piccoli progetti.</> },
  { q: "Devo usare per forza il terminale?", a: <>No, esistono interfacce grafiche e molti editor, come Visual Studio Code, hanno Git integrato. Imparare i comandi da terminale, però, ti aiuta a capire cosa succede davvero ed è ciò che ti chiederanno nei colloqui tecnici.</> },
  { q: "Come annullo l'ultimo commit?", a: <>Se non l'hai ancora inviato su GitHub, <C>git reset --soft HEAD~1</C> annulla il commit mantenendo le modifiche. Se l'hai già inviato, è più sicuro usare <C>git revert</C>, che crea un nuovo commit che annulla il precedente senza riscrivere la storia.</> },
  { q: "Meglio GitHub o GitLab?", a: <>Per il portfolio personale GitHub è la scelta più comune. In azienda troverai entrambi: i comandi Git sono identici, cambia solo il servizio online.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Git salva ogni versione del tuo lavoro, ti fa tornare indietro quando qualcosa si rompe e ti permette di collaborare senza sovrascrivere il lavoro degli altri. Qui parti da zero fino a GitHub.</p>
      </div>
      <P>Git è il sistema più usato al mondo per tenere traccia delle modifiche a codice e file di progetto. Ti permette di salvare ogni versione del tuo lavoro, tornare indietro quando qualcosa si rompe e collaborare con altre persone senza sovrascrivere il lavoro a vicenda.</P>
      <P>In questo Git tutorial parti da zero: installi Git, crei il tuo primo repository, impari i comandi fondamentali, lavori con i branch e pubblichi il progetto su GitHub. Alla fine trovi un riepilogo dei comandi da tenere a portata di mano.</P>

      <H2 id="cos-e">Cos'è Git e perché si usa</H2>
      <P>Git è un <strong>sistema di controllo di versione</strong>: registra ogni modifica ai file di un progetto, chi l'ha fatta e quando. È stato creato nel 2005 da Linus Torvalds, lo stesso autore di Linux, ed è gratuito e open source.</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><p className="font-extrabold">Senza Git</p><p className="mt-2 font-mono text-sm leading-relaxed text-brand-ink/80">progetto_finale.txt<br />progetto_finale_v2.txt<br />progetto_finale_DAVVERO.txt</p></div>
        <div className="rounded-2xl border border-brand-blue/25 bg-brand-blue/5 p-5"><p className="font-extrabold">Con Git</p><p className="mt-2 leading-relaxed text-brand-ink/80">Un solo progetto e una storia completa di tutte le versioni.</p></div>
      </div>
      <P>Si usa per tre motivi principali:</P>
      <Bullets items={[
        <><strong>tornare indietro</strong>: se una modifica rompe qualcosa, recuperi la versione precedente in un attimo;</>,
        <><strong>lavorare in parallelo</strong>: puoi sperimentare una nuova funzione senza toccare la versione che funziona;</>,
        <><strong>collaborare</strong>: più persone lavorano sullo stesso progetto e Git le aiuta a unire il lavoro.</>,
      ]} />
      <P>Non lo usano solo i programmatori: nel cloud e nel DevOps si versionano con Git anche le configurazioni e l'infrastruttura.</P>

      <H2 id="git-github">Git e GitHub: qual è la differenza</H2>
      <P>È la confusione più comune per chi inizia:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border p-5"><p className="font-blog-display text-2xl font-extrabold text-brand-blue">Git</p><p className="mt-2 leading-relaxed text-brand-ink/80">Lo strumento che installi sul tuo computer e che tiene la storia del progetto.</p></div>
        <div className="rounded-2xl border border-border p-5"><p className="font-blog-display text-2xl font-extrabold text-brand-blue">GitHub</p><p className="mt-2 leading-relaxed text-brand-ink/80">Un servizio online dove pubblichi i tuoi repository Git, li condividi e collabori. Alternative simili sono GitLab e Bitbucket.</p></div>
      </div>
      <div className="mt-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-5 leading-relaxed">Puoi usare Git senza GitHub, ma non GitHub senza Git. Per chi cerca lavoro nel settore tecnico, GitHub è anche una <strong>vetrina</strong>: è lì che i selezionatori guardano i tuoi progetti.</div>

      <H2 id="installare">Installare e configurare Git</H2>
      <P>Scarica Git dal sito ufficiale per Windows o macOS; su Linux si installa dal gestore di pacchetti. Poi apri il terminale e verifica l'installazione:</P>
      <Code>{`git --version`}</Code>
      <P>Configura nome ed email, che compariranno in ogni modifica che salvi:</P>
      <Code>{`git config --global user.name "Mario Rossi"
git config --global user.email "mario.rossi@email.it"
git config --global init.defaultBranch main`}</Code>
      <P>L'ultima riga imposta <C>main</C> come nome del ramo principale, lo stesso usato di default da GitHub.</P>

      <H2 id="concetti">I concetti base di Git</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[30rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Concetto</th><th className="p-3">Cos'è</th></tr></thead>
          <tbody>{concetti.map(([c, d], i) => (
            <tr key={c} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold text-brand-blue">{c}</td><td className="p-3 text-brand-ink/80">{d}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Il flusso di base è sempre lo stesso:</P>
      <div className="mt-4 flex flex-wrap items-center gap-2 font-bold">
        {["Modifichi i file", "git add", "git commit"].map((s, i) => (
          <span key={s} className="flex items-center gap-2"><span className="rounded-xl bg-secondary px-4 py-2 text-brand-blue">{s}</span>{i < 2 && <span className="text-brand-ink/40">→</span>}</span>
        ))}
      </div>

      <H2 id="primo-repo">Git tutorial passo passo: il tuo primo repository</H2>
      <P>Crea una cartella e trasformala in un repository Git:</P>
      <Code>{`mkdir primo-progetto
cd primo-progetto
git init`}</Code>
      <P>Crea un file e controlla lo stato del repository:</P>
      <Code>{`echo "Il mio primo progetto con Git" > README.md
git status`}</Code>
      <P>Git ti dice che c'è un file nuovo, non ancora tracciato. Aggiungilo alla staging area e crea il primo commit:</P>
      <Code>{`git add README.md
git commit -m "Aggiunge il README iniziale"`}</Code>
      <P>Per vedere la storia del progetto:</P>
      <Code>{`git log --oneline`}</Code>
      <P>Ogni volta che fai una modifica significativa, ripeti il ciclo: <C>git add</C>, poi <C>git commit</C> con un messaggio chiaro.</P>

      <H2 id="branch">Lavorare con i branch</H2>
      <P>I branch ti permettono di sviluppare qualcosa di nuovo senza rischiare di rompere la versione principale. Crea un nuovo branch e spostati su di esso:</P>
      <Code>{`git switch -c nuova-sezione`}</Code>
      <P>Fai le tue modifiche e i tuoi commit. Quando sei soddisfatto, torna sul ramo principale e unisci il lavoro:</P>
      <Code>{`git switch main
git merge nuova-sezione`}</Code>
      <P>Se due persone hanno modificato la stessa riga dello stesso file, Git segnala un <strong>conflitto</strong>: ti mostra entrambe le versioni e ti chiede di scegliere quella corretta. Sembra complicato la prima volta, ma è normale amministrazione.</P>

      <H2 id="github">Collegare il repository a GitHub</H2>
      <P>Crea un repository vuoto su GitHub, poi collegalo a quello locale e invia i tuoi commit:</P>
      <Code>{`git remote add origin https://github.com/tuo-utente/primo-progetto.git
git push -u origin main`}</Code>
      <div className="mt-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-5 leading-relaxed">Per l'autenticazione, GitHub non accetta la password dell'account da riga di comando: serve un <strong>token di accesso personale</strong> oppure una <strong>chiave SSH</strong>, che configuri una volta sola dalle impostazioni del tuo profilo.</div>
      <P>Altri due comandi che userai spesso:</P>
      <Code>{`git clone https://github.com/utente/progetto.git   # scarica un repository esistente
git pull                                           # aggiorna la tua copia con le ultime modifiche`}</Code>

      <H2 id="gitignore">Il file .gitignore</H2>
      <P>Non tutto va salvato nel repository. File temporanei, cartelle di dipendenze e soprattutto password e chiavi di accesso devono restare fuori. Per escluderli crei un file chiamato <C>.gitignore</C> nella cartella del progetto:</P>
      <Code title=".gitignore">{`.env
*.log
node_modules/
.terraform/
*.tfstate`}</Code>
      <P>Git ignorerà automaticamente tutto ciò che è elencato. Per chi lavora con Terraform, escludere i file di stato è fondamentale, come spiego nella guida su <A slug="terraform">Terraform</A>.</P>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Ti piacerebbe lavorare nel cloud o nel DevOps?</p>
        <p className="mt-3 text-lg leading-relaxed">Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="esercizio">Un esercizio per fare pratica</H2>
      <P>Leggere una guida a Git non basta: serve usarlo. Ecco un esercizio da fare in mezz'ora:</P>
      <div className="mt-6 space-y-3">
        {[
          "Crea un repository con un file README.md che descrive un tuo progetto immaginario.",
          "Fai almeno cinque commit piccoli, ognuno con un messaggio chiaro.",
          "Crea un branch, aggiungi una nuova sezione al README e uniscilo al ramo principale.",
          "Crea un conflitto di proposito, modificando la stessa riga su due branch diversi, e risolvilo.",
          "Pubblica il repository su GitHub.",
        ].map((t, i) => (
          <div key={i} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><p className="leading-relaxed">{t}</p></div>
        ))}
      </div>
      <P>Quando riesci a farlo senza guardare gli appunti, hai le basi per usare Git in qualsiasi progetto.</P>

      <H2 id="comandi">I comandi Git da sapere</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[30rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Comando</th><th className="p-3">A cosa serve</th></tr></thead>
          <tbody>{comandi.map(([c, d], i) => (
            <tr key={c} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-mono text-sm font-bold text-brand-blue">{c}</td><td className="p-3 text-brand-ink/80">{d}</td></tr>
          ))}</tbody>
        </table>
      </div>

      <H2 id="errori">Gli errori più comuni da principiante</H2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {errori.map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="lavoro">Git nel lavoro cloud e DevOps</H2>
      <P>Git è una competenza di base per quasi ogni ruolo tecnico. Nel cloud e nel DevOps si usa per:</P>
      <Bullets items={[
        <><strong>versionare il codice dell'infrastruttura</strong>, per esempio i file Terraform;</>,
        <><strong>avviare in automatico le pipeline CI/CD</strong>, che testano e rilasciano il codice a ogni commit;</>,
        <><strong>costruire il portfolio</strong>: i tuoi progetti su GitHub sono spesso la prima cosa che un selezionatore guarda.</>,
      ]} />
      <P>Trovi il percorso completo nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A> e il ruolo di Git nelle pipeline nella guida sul <A slug="devops-engineer">DevOps engineer</A>.</P>

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
          "Git tiene traccia di tutte le versioni di un progetto e permette di collaborare senza perdere lavoro.",
          "GitHub è il servizio online dove pubblichi i repository, ed è anche la tua vetrina professionale.",
          "Il flusso di base è: modifica, git add, git commit, e poi git push per inviare su GitHub.",
          "I branch ti permettono di sperimentare senza rompere la versione principale.",
          "Non salvare mai password o chiavi nel repository: usa il .gitignore.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi capire se lavorare nel cloud o nel DevOps fa per te?</p>
        <p className="mt-3 text-lg">Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>
    </div>
  );
}
