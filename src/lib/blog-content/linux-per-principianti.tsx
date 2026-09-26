import { AlertTriangle, Check, HelpCircle, Lightbulb, Sparkles, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "in-breve", label: "Linux in breve" },
  { id: "perche", label: "Perché imparare Linux" },
  { id: "iniziare", label: "Iniziare senza cambiare PC" },
  { id: "terminale", label: "Il terminale: le basi" },
  { id: "cartelle", label: "La struttura delle cartelle" },
  { id: "comandi", label: "I comandi di base" },
  { id: "permessi", label: "Permessi e utenti" },
  { id: "processi", label: "Processi, servizi e pacchetti" },
  { id: "rete", label: "Comandi di rete" },
  { id: "esercizio", label: "Un esercizio pratico" },
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

const DIRS = [["/home","Le cartelle personali degli utenti"],["/etc","I file di configurazione del sistema"],["/var","Dati che cambiano spesso, come i log in /var/log"],["/tmp","File temporanei"],["/usr","Programmi e librerie"],["/root","La cartella dell'amministratore"]];
const CMDS = [["pwd","Mostra la cartella in cui ti trovi","pwd"],["ls","Elenca file e cartelle","ls -la"],["cd","Cambia cartella","cd /var/log"],["mkdir","Crea una cartella","mkdir progetti"],["touch","Crea un file vuoto","touch note.txt"],["cp","Copia file","cp note.txt backup.txt"],["mv","Sposta o rinomina","mv note.txt appunti.txt"],["rm","Elimina file","rm backup.txt"],["cat","Mostra il contenuto di un file","cat appunti.txt"],["less","Legge file lunghi pagina per pagina","less /var/log/syslog"],["nano","Modifica un file di testo","nano appunti.txt"],["grep","Cerca un testo nei file",'grep "error" app.log'],["find","Cerca file",'find . -name "*.txt"'],["man","Mostra il manuale di un comando","man ls"]];
const ERRORS = [["Usare rm -rf senza pensarci","Elimina tutto senza chiedere conferma e senza cestino. Controlla sempre due volte la cartella prima di premere Invio."],["Mettere sudo davanti a tutto","Se un comando non funziona, il problema raramente si risolve con più permessi. Capisci prima perché fallisce."],["Usare chmod 777","Dà a chiunque il permesso di fare tutto su un file. È una scorciatoia che crea problemi di sicurezza."],["Non leggere i messaggi di errore","Linux spiega quasi sempre cosa non va: leggere l'errore è metà della soluzione."]];
const FAQ: [string, ReactNode][] = [
  ["Quale distribuzione Linux scegliere per iniziare?", "Ubuntu è la scelta più comune: è diffusa, ben documentata e disponibile ovunque, anche su WSL e nel cloud. Nel mondo AWS incontrerai spesso anche Amazon Linux."],
  ["Serve conoscere Linux per lavorare nel cloud?", <>Sì, le basi sono indispensabili. Non serve essere esperti, ma devi saperti muovere nel terminale, gestire file, permessi e servizi. Trovi il percorso completo nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</>],
  ["Linux è gratis?", "La maggior parte delle distribuzioni è gratuita. Alcune versioni aziendali, come Red Hat Enterprise Linux, prevedono un abbonamento per il supporto."],
  ["Quanto tempo serve per imparare le basi?", "Con mezz'ora al giorno, in due o tre settimane ti muovi con sicurezza tra i comandi base. La padronanza arriva usando Linux tutti i giorni."],
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Linux è il sistema operativo su cui gira la maggior parte dei server, del cloud e di internet. Per lavorare nel cloud, nel DevOps o nella cybersecurity dovrai usare il suo terminale: una finestra in cui si scrivono comandi invece di cliccare.</p>
      </div>
      <P>Questa guida ti porta da zero ai comandi che userai ogni giorno: come iniziare senza cambiare computer, come muoverti tra le cartelle, gestire file, permessi, processi e rete, con un esercizio pratico finale.</P>

      <H2 id="in-breve">Linux: cos'è in breve</H2>
      <P>Linux è un sistema operativo open source, nato nel 1991 dal lavoro di Linus Torvalds e sviluppato da una grande comunità. A rigore, “Linux” è il <strong>kernel</strong>, cioè il cuore del sistema; quello che si installa sono le <strong>distribuzioni</strong>, che uniscono il kernel a programmi e strumenti.</P>
      <div className="mt-6 flex flex-wrap gap-2">{["Ubuntu","Debian","Fedora","Red Hat Enterprise Linux","Amazon Linux"].map((d) => <span key={d} className="rounded-full border border-brand-blue/30 bg-brand-blue/5 px-4 py-1.5 text-sm font-bold text-brand-blue">{d}</span>)}</div>
      <P>Sul computer di casa Linux è poco diffuso, ma nei data center è dominante: la stragrande maggioranza dei server cloud usa Linux.</P>

      <H2 id="perche">Perché imparare Linux</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[["Il cloud gira su Linux", <>Quando crei un server su <A slug="aws-cos-e">AWS</A>, nella maggior parte dei casi scegli una distribuzione Linux.</>],["Gli strumenti DevOps nascono su Linux", <><A slug="docker">Docker</A>, <A slug="kubernetes">Kubernetes</A> e le pipeline CI/CD lo danno per scontato.</>],["È richiesto negli annunci", "Compare nella maggior parte delle offerte per cloud engineer, DevOps e sistemisti."],["Capisci come funziona un computer", "File, processi, permessi e rete smettono di essere una scatola nera."]].map(([t, d]) => (
          <div key={t as string} className="rounded-2xl border border-border p-5"><p className="font-extrabold text-brand-blue">{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>

      <H2 id="iniziare">Come iniziare senza cambiare computer</H2>
      <P>Non serve installare Linux al posto di Windows. Hai diverse alternative:</P>
      <Bullets items={[
        <><strong>WSL su Windows</strong>: il sottosistema Windows per Linux ti permette di usare Ubuntu direttamente da Windows, in pochi minuti;</>,
        <><strong>una macchina virtuale</strong>, per esempio con VirtualBox, per avere un Linux completo in una finestra;</>,
        <><strong>un server nel cloud</strong>, come una piccola istanza EC2 su AWS: è anche il modo più vicino al lavoro reale;</>,
        <><strong>il terminale del Mac</strong>: macOS non è Linux, ma molti comandi base sono gli stessi.</>,
      ]} />

      <H2 id="terminale">Il terminale: le basi</H2>
      <P>Quando apri il terminale vedi il <strong>prompt</strong>, per esempio <C>mario@server:~$</C>. Indica l'utente, il nome del computer e la cartella in cui ti trovi (<C>~</C> è la tua cartella personale).</P>
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        {[["ls","comando"],["-l","opzione"],["/etc","argomento"]].map(([c, l]) => <div key={l} className="rounded-2xl border border-border p-4"><p className="font-mono text-xl font-extrabold text-brand-blue">{c}</p><p className="mt-1 text-xs font-bold uppercase text-brand-ink/60">{l}</p></div>)}
      </div>
      <P>Un comando ha quasi sempre la stessa struttura: <strong>comando, opzioni, argomenti</strong>, come in <C>ls -l /etc</C>.</P>

      <H2 id="cartelle">La struttura delle cartelle</H2>
      <P>In Linux tutto parte dalla cartella radice, indicata con <C>/</C>. Le cartelle principali:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {DIRS.map(([d, t]) => <div key={d} className="flex items-center gap-4 rounded-2xl border border-border p-4"><span className="font-mono text-lg font-extrabold text-brand-blue">{d}</span><span className="text-brand-ink/80">{t}</span></div>)}
      </div>

      <H2 id="comandi">I comandi Linux di base da sapere</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[34rem] text-left text-sm">
          <thead className="bg-secondary"><tr><th className="p-3 font-extrabold">Comando</th><th className="p-3 font-extrabold">A cosa serve</th><th className="p-3 font-extrabold">Esempio</th></tr></thead>
          <tbody>{CMDS.map(([c, d, e]) => <tr key={c} className="border-t border-border"><td className="p-3 font-mono font-bold text-brand-blue">{c}</td><td className="p-3 text-brand-ink/80">{d}</td><td className="p-3 font-mono text-xs">{e}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="mt-6 rounded-2xl border-l-4 border-brand-yellow bg-brand-yellow/10 p-5">
        <p className="font-extrabold">Trucco utile</p>
        <p className="mt-2 leading-relaxed text-brand-ink/80">Premi <strong>Tab</strong> per completare automaticamente nomi di file e comandi, e usa la <strong>freccia su</strong> per richiamare i comandi precedenti.</p>
      </div>

      <H2 id="permessi">Permessi e utenti</H2>
      <P>In Linux ogni file ha un proprietario e dei permessi. Con <C>ls -l</C> vedi qualcosa come <C>-rw-r--r--</C>: indica chi può leggere (r), scrivere (w) ed eseguire (x) il file, nell'ordine per il proprietario, il gruppo e tutti gli altri.</P>
      <Code title="Terminale">{`chmod +x script.sh          # rende eseguibile uno script
chown mario:mario file.txt  # cambia proprietario e gruppo
sudo apt update             # esegue un comando come amministratore`}</Code>
      <P><C>sudo</C> ti dà temporaneamente i poteri di amministratore: usalo solo quando serve davvero.</P>

      <H2 id="processi">Processi, servizi e pacchetti</H2>
      <Code title="Terminale">{`ps aux                      # elenca i processi in esecuzione
top                         # uso di CPU e memoria in tempo reale
kill 1234                   # termina il processo con quel numero
systemctl status nginx      # controlla lo stato di un servizio
sudo apt install nginx      # installa un programma (Ubuntu e Debian)`}</Code>
      <P>Su distribuzioni come Fedora o Amazon Linux, al posto di <C>apt</C> si usa <C>dnf</C>.</P>

      <H2 id="rete">Comandi di rete</H2>
      <Code title="Terminale">{`ip a                        # mostra gli indirizzi di rete
ping google.com             # verifica la connessione
curl https://example.com    # scarica il contenuto di una pagina
ssh utente@indirizzo        # si collega a un server remoto`}</Code>
      <P><C>ssh</C> è il comando con cui accederai ogni giorno ai server nel cloud.</P>

      <Quiz title="Ti piacerebbe lavorare con Linux e il cloud?" text="Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud." />

      <H2 id="esercizio">Un esercizio pratico</H2>
      <P>Apri il terminale e prova in sequenza:</P>
      <ol className="mt-6 space-y-3">
        {[<>crea una cartella <C>laboratorio</C> ed entraci;</>, <>crea tre file di testo e scrivi qualcosa in uno di essi con <C>nano</C>;</>, "copia un file, rinominane un altro ed eliminane un terzo;", <>cerca una parola dentro il file con <C>grep</C>;</>, <>crea uno script con una riga <C>echo "Ciao Linux"</C>, rendilo eseguibile con <C>chmod +x</C> e lancialo.</>].map((t, i) => (
          <li key={i} className="flex gap-4 rounded-2xl border border-border p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><span className="text-lg leading-relaxed">{t}</span></li>
        ))}
      </ol>
      <P>Se riesci senza guardare gli appunti, hai le basi per lavorare su un server.</P>

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
        "Linux è il sistema operativo di server e cloud, ed è indispensabile per cloud engineer e DevOps.",
        "Puoi iniziare senza cambiare computer, con WSL, una macchina virtuale o un server nel cloud.",
        "I comandi base riguardano cartelle, file, permessi, processi, pacchetti e rete.",
        "Attenzione a rm -rf, sudo e chmod 777: sono potenti e pericolosi.",
        "La pratica quotidiana è l'unico modo per diventare davvero autonomi.",
      ]} />
      <Quiz title="Lavorare con Linux e il cloud fa per te?" text="Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi." />
    </div>
  );
}
