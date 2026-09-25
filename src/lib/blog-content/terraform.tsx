import { Check, HelpCircle, Lightbulb, Sparkles, Terminal, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "in-breve", label: "Terraform in breve" },
  { id: "perche", label: "Il problema che risolve" },
  { id: "concetti", label: "I concetti chiave" },
  { id: "flusso", label: "init, plan, apply, destroy" },
  { id: "esempio", label: "Esempio: bucket S3 su AWS" },
  { id: "state", label: "Lo state file" },
  { id: "confronto", label: "Terraform, CloudFormation, OpenTofu" },
  { id: "best-practice", label: "Best practice" },
  { id: "errori", label: "Gli errori più comuni" },
  { id: "lavoro", label: "Terraform e il lavoro" },
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

const MAIN_TF = `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "eu-south-1" # Milano
}

resource "aws_s3_bucket" "esempio" {
  bucket = "il-mio-primo-bucket-terraform-12345" # deve essere unico al mondo

  tags = {
    Progetto = "guida-terraform"
    Ambiente = "test"
  }
}

output "nome_bucket" {
  value = aws_s3_bucket.esempio.bucket
}`;

const concetti: [string, string][] = [
  ["Provider", "Il plugin che permette a Terraform di parlare con una piattaforma, per esempio AWS"],
  ["Resource", "Un elemento dell'infrastruttura da creare: un server, un bucket, una rete"],
  ["Variable", "Un valore configurabile, per riutilizzare lo stesso codice in contesti diversi"],
  ["Output", "Un valore restituito alla fine, per esempio l'indirizzo di un server"],
  ["State", "Il file in cui Terraform tiene traccia di cosa ha creato"],
  ["Module", "Un blocco di codice riutilizzabile, per esempio \"una rete standard\""],
];

const confronto: [string, string, string, string][] = [
  ["Chi lo sviluppa", "HashiCorp", "AWS", "Comunità, sotto la Linux Foundation"],
  ["Piattaforme", "Multi-cloud", "Solo AWS", "Multi-cloud"],
  ["Linguaggio", "HCL", "YAML o JSON", "HCL, compatibile con Terraform"],
  ["Quando sceglierlo", "Standard più diffuso nelle aziende", "Aziende che usano solo AWS", "Chi preferisce un'alternativa guidata dalla comunità"],
];

const errori: [string, string][] = [
  ["Modificare a mano le risorse create da Terraform", "Se cambi un'impostazione dalla console, il codice e la realtà non coincidono più. Al prossimo apply, Terraform proverà a riportare tutto com'era scritto nel codice, con risultati a volte inattesi. Le modifiche si fanno sempre nel codice."],
  ["Fare apply senza leggere il plan", "Una piccola modifica, come il cambio di nome di una risorsa, può portare Terraform a eliminarla e ricrearla. Su un database significa perdere i dati. Il plan te lo dice chiaramente: basta leggerlo."],
  ["Mettere tutto in un unico file enorme", "Funziona per un esercizio, non per un progetto vero. Dividi il codice in file per argomento (rete, calcolo, database) e usa i moduli per le parti ripetute."],
  ["Perdere lo state", "Se lo state resta solo sul tuo computer e il computer si rompe, Terraform non sa più cosa ha creato. Per qualsiasi progetto che conta, usa un backend remoto fin dall'inizio."],
  ["Dimenticare risorse accese", "Negli esercizi è facile lasciare in funzione risorse che costano. Chiudi sempre la sessione con terraform destroy e controlla la console dei costi."],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Terraform è gratis?", a: <>Sì, lo strumento da riga di comando si può usare gratuitamente. HashiCorp offre anche servizi a pagamento per i team, ma per imparare e per molti progetti non servono.</> },
  { q: "Serve saper programmare per usare Terraform?", a: <>No. HCL è un linguaggio di configurazione, non di programmazione in senso stretto. Serve logica e attenzione, ma chi conosce le basi del cloud impara Terraform in poche settimane di pratica.</> },
  { q: "Terraform funziona solo con AWS?", a: <>No, funziona con moltissime piattaforme, tra cui Azure, Google Cloud, Kubernetes e servizi come GitHub. È uno dei motivi per cui è così diffuso.</> },
  { q: "Meglio Terraform o CloudFormation?", a: <>Se l'azienda usa solo AWS, entrambi vanno bene. Terraform è più diffuso negli annunci di lavoro e ti permette di lavorare anche con altre piattaforme, quindi per chi inizia è spesso la scelta più utile.</> },
  { q: "Quanto tempo serve per imparare Terraform?", a: <>Per le basi, poche settimane di pratica costante, se conosci già un po' di cloud. Per usarlo bene su progetti reali, con moduli, backend remoti e lavoro in team, servono alcuni mesi di esperienza.</> },
  { q: "Cos'è HCL?", a: <>È il linguaggio con cui si scrivono le configurazioni Terraform. È pensato per essere leggibile: blocchi, nomi e valori, senza la complessità di un linguaggio di programmazione.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Terraform crea e gestisce l'infrastruttura cloud scrivendo codice invece di cliccare nelle console. Descrivi come deve essere, e lui la crea, la modifica o la elimina, sempre nello stesso modo.</p>
      </div>
      <P>Terraform è uno strumento gratuito che permette di creare e gestire infrastruttura cloud scrivendo codice, invece di cliccare nelle console di AWS, Azure o Google Cloud. Descrivi in un file come deve essere la tua infrastruttura, e Terraform la crea, la modifica o la elimina per te, sempre nello stesso modo.</P>
      <P>È uno degli strumenti più richiesti negli annunci per cloud engineer e DevOps engineer. Questa è una guida a Terraform per principianti: lo trovi spiegato da zero, con cos'è, come funziona, i comandi principali, un esempio pratico su AWS e gli errori da evitare quando inizi.</P>

      <H2 id="in-breve">Terraform: cos'è in breve</H2>
      <P>Terraform è sviluppato da HashiCorp ed è lo strumento più diffuso per l'<strong>Infrastructure as Code (IaC)</strong>, cioè l'infrastruttura come codice. L'idea è semplice: server, reti, database e permessi non si creano più a mano, ma si descrivono in file di testo che possono essere salvati, controllati e riutilizzati.</P>
      <P>Tre caratteristiche lo rendono così popolare:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["È dichiarativo", "Descrivi il risultato che vuoi ottenere, non i passaggi per arrivarci. Terraform calcola da solo cosa fare."],
          ["Funziona ovunque", "AWS, Azure, Google Cloud e centinaia di altri servizi, tramite plugin chiamati provider."],
          ["Linguaggio leggibile", "Si chiama HCL (HashiCorp Configuration Language), pensato per essere chiaro anche per chi non è uno sviluppatore."],
        ].map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-3xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>

      <H2 id="perche">Perché usare Terraform: il problema che risolve</H2>
      <P>Immagina di dover creare su AWS una rete, tre server, un database e le regole di sicurezza. Dalla console ci vuole un'ora di clic. Ora immagina di doverlo rifare identico per l'ambiente di test, poi per quello di produzione, poi in un'altra regione. Ogni volta rischi di dimenticare un'impostazione.</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><p className="font-extrabold">A mano, dalla console</p><p className="mt-1 leading-relaxed text-brand-ink/80">Un'ora di clic ogni volta, e il rischio di dimenticare qualcosa a ogni ripetizione.</p></div>
        <div className="rounded-2xl border border-brand-blue/25 bg-brand-blue/5 p-5"><p className="font-extrabold">Con Terraform</p><p className="mt-1 leading-relaxed text-brand-ink/80">Scrivi la configurazione una volta sola e la applichi quante volte vuoi.</p></div>
      </div>
      <P>I vantaggi:</P>
      <Bullets items={[
        <><strong>ripetibilità</strong>: stesso codice, stessa infrastruttura, sempre;</>,
        <><strong>versionamento</strong>: i file stanno su Git, quindi sai chi ha cambiato cosa e quando, e puoi tornare indietro;</>,
        <><strong>revisione</strong>: prima di applicare una modifica, il team può controllarla come si fa con il codice;</>,
        <><strong>documentazione automatica</strong>: il codice descrive esattamente com'è fatta l'infrastruttura;</>,
        <><strong>velocità</strong>: ambienti interi si creano e si distruggono in pochi minuti.</>,
      ]} />

      <H2 id="concetti">Come funziona Terraform: i concetti chiave</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[30rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Concetto</th><th className="p-3">Cos'è</th></tr></thead>
          <tbody>{concetti.map(([c, d], i) => (
            <tr key={c} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold text-brand-blue">{c}</td><td className="p-3 text-brand-ink/80">{d}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <div className="mt-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-5 leading-relaxed">Il concetto più importante da capire all'inizio è lo <strong>state</strong>: Terraform confronta il codice che hai scritto con lo stato attuale dell'infrastruttura, e decide cosa creare, modificare o eliminare per farli coincidere.</div>

      <H2 id="flusso">Il flusso di lavoro: init, plan, apply, destroy</H2>
      <P>Terraform si usa quasi sempre con quattro comandi:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          ["terraform init", "Prepara la cartella di lavoro e scarica i provider necessari. Si esegue la prima volta e ogni volta che aggiungi un provider."],
          ["terraform plan", "Mostra cosa farebbe Terraform, senza toccare niente. È il comando più importante: leggilo sempre con attenzione."],
          ["terraform apply", "Esegue le modifiche, dopo averti chiesto conferma."],
          ["terraform destroy", "Elimina tutto ciò che è stato creato con quella configurazione. Utilissimo per non lasciare risorse accese dopo un esercizio."],
        ].map(([c, d], i) => (
          <div key={c} className="rounded-2xl border border-border p-5"><p className="text-xs font-extrabold uppercase text-brand-ink/50">Passo {i + 1}</p><p className="mt-1 font-mono font-bold text-brand-blue">{c}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Due comandi di supporto da usare sempre: <C>terraform fmt</C>, che formatta il codice in modo ordinato, e <C>terraform validate</C>, che controlla che la sintassi sia corretta.</P>

      <H2 id="esempio">Un esempio pratico: creare un bucket S3 su AWS</H2>
      <P>Ecco un esempio minimo che crea un bucket Amazon S3 nella regione di Milano. Crea una cartella con un file chiamato <C>main.tf</C>:</P>
      <Code title="main.tf">{MAIN_TF}</Code>
      <P>Poi, dal terminale, con le credenziali AWS configurate:</P>
      <Code title="Terminale">{`terraform init
terraform plan
terraform apply`}</Code>
      <P>Terraform ti mostra che creerà una risorsa, ti chiede conferma e crea il bucket. Quando hai finito, con <C>terraform destroy</C> lo elimini. Se non sai ancora cos'è S3, trovi tutto nella guida su <A slug="amazon-s3">Amazon S3</A>.</P>

      <H2 id="state">Lo state file: cosa devi sapere</H2>
      <P>Lo state è il file (di solito <C>terraform.tfstate</C>) in cui Terraform memorizza cosa ha creato. Tre regole fondamentali:</P>
      <div className="mt-6 space-y-3">
        {[
          ["Non modificarlo a mano", "Se si corrompe, Terraform perde traccia dell'infrastruttura."],
          ["Non caricarlo su Git", "Può contenere dati sensibili, come password o chiavi."],
          ["Nei team, tienilo in un backend remoto", "Su AWS si usa di solito un bucket S3, con un meccanismo di blocco che impedisce a due persone di modificarlo contemporaneamente. Il modo esatto di configurare il blocco dipende dalla versione di Terraform che usi."],
        ].map(([t, d], i) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="confronto">Terraform, CloudFormation e OpenTofu</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[40rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3"></th><th className="p-3">Terraform</th><th className="p-3">AWS CloudFormation</th><th className="p-3">OpenTofu</th></tr></thead>
          <tbody>{confronto.map(([l, ...c], i) => (
            <tr key={l} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{l}</td>{c.map((v, j) => <td key={j} className="p-3 text-brand-ink/80">{v}</td>)}</tr>
          ))}</tbody>
        </table>
      </div>
      <P>OpenTofu è nato come alternativa a Terraform dopo il cambio di licenza deciso da HashiCorp nel 2023. I concetti e gran parte del codice sono gli stessi: se impari Terraform, sai usare anche OpenTofu.</P>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Ti piacerebbe lavorare con Terraform e il cloud?</p>
        <p className="mt-3 text-lg leading-relaxed">Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="best-practice">Best practice per chi inizia</H2>
      <Bullets items={[
        <><strong>Fissa le versioni</strong> di Terraform e dei provider, per evitare che un aggiornamento cambi il comportamento del tuo codice.</>,
        <><strong>Leggi sempre il plan prima di fare apply</strong>, soprattutto le righe che indicano risorse da eliminare o sostituire.</>,
        <><strong>Usa le variabili</strong> invece di scrivere valori fissi nel codice.</>,
        <><strong>Organizza il codice in moduli</strong> appena ripeti la stessa struttura più volte.</>,
        <><strong>Non scrivere mai password o chiavi nel codice</strong>: usa servizi dedicati come AWS Secrets Manager o variabili d'ambiente.</>,
        <><strong>Aggiungi i tag a ogni risorsa</strong>: ti aiutano a capire cosa è stato creato e quanto costa.</>,
        <><strong>Imposta un budget su AWS</strong> prima di fare esperimenti, e usa destroy quando hai finito.</>,
      ]} />

      <H2 id="errori">Gli errori più comuni con Terraform</H2>
      <div className="mt-6 space-y-3">
        {errori.map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

      <H2 id="lavoro">Terraform e il lavoro nel cloud</H2>
      <P>Terraform è una competenza centrale per due ruoli molto richiesti: il cloud engineer e il DevOps engineer. Nei colloqui tecnici è comune che ti chiedano di spiegare come funziona lo state o come organizzeresti il codice di un progetto.</P>
      <P>Per dimostrare questa competenza, un ottimo modo è creare un progetto su GitHub in cui costruisci un'infrastruttura completa con Terraform: rete, server e database. Esiste anche una certificazione dedicata, la HashiCorp Terraform Associate, utile dopo le prime certificazioni cloud.</P>
      <P>Trovi il percorso completo nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>, e il confronto tra i due ruoli nella guida sul <A slug="devops-engineer">DevOps engineer</A>.</P>

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
          "Terraform è lo strumento più diffuso per gestire l'infrastruttura come codice, su AWS e su molte altre piattaforme.",
          "Si basa su provider, risorse, variabili, output, moduli e sullo state, che tiene traccia di cosa è stato creato.",
          "Il flusso di lavoro è sempre lo stesso: init, plan, apply e, quando serve, destroy.",
          "È una competenza chiave per cloud engineer e DevOps engineer, e si dimostra bene con un progetto su GitHub.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi capire se lavorare con Terraform e il cloud fa per te?</p>
        <p className="mt-3 text-lg">Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>
    </div>
  );
}
