import { AlertTriangle, Check, HelpCircle, Lightbulb, Sparkles, Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const toc = [
  { id: "quando", label: "Quando è il momento" },
  { id: "caratteristiche", label: "Cosa rende un lavoro adatto" },
  { id: "lavori", label: "8 lavori per cambiare vita" },
  { id: "confronto", label: "Il confronto" },
  { id: "riconversione", label: "Riconversione professionale" },
  { id: "eta", label: "Cambiare vita a 40 o 50 anni" },
  { id: "errori", label: "Gli errori da evitare" },
  { id: "faq", label: "Domande frequenti" },
  { id: "sintesi", label: "In sintesi" },
];

const QUIZ = "https://quiz.capitancloud.it/";
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
const Table = ({ head, rows }: { head: string[]; rows: ReactNode[][] }) => (
  <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
    <table className="w-full min-w-[34rem] text-left text-sm">
      <thead className="bg-secondary"><tr>{head.map((h, i) => <th key={i} className={`p-4 font-extrabold ${i === 1 ? "text-brand-blue" : ""}`}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((r, ri) => <tr key={ri} className="border-t border-border">{r.map((c, i) => <td key={i} className={`p-4 ${i === 0 ? "font-bold" : "text-brand-ink/80"}`}>{c}</td>)}</tr>)}</tbody>
    </table>
  </div>
);
const Warn = ({ items }: { items: [string, string][] }) => (
  <div className="mt-6 grid gap-4 sm:grid-cols-2">{items.map(([t, x]) => <div key={t} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5"><p className="flex items-center gap-2 font-extrabold"><AlertTriangle className="h-5 w-5 shrink-0 text-destructive" />{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>)}</div>
);
const Note = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mt-6 rounded-2xl border-l-4 border-brand-yellow bg-brand-yellow/10 p-5"><p className="font-extrabold">{title}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{children}</p></div>
);

const Steps = ({ items }: { items: ReactNode[] }) => (
  <ol className="mt-6 space-y-3">{items.map((t, i) => <li key={i} className="flex gap-4 rounded-2xl border border-border p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><span className="text-lg leading-relaxed">{t}</span></li>)}</ol>
);
const Quiz = ({ title, text }: { title: string; text: string }) => (
  <div className="mt-10 rounded-3xl bg-brand-blue p-7 text-primary-foreground">
    <p className="font-blog-display text-2xl font-extrabold">{title}</p>
    <p className="mt-2 leading-relaxed text-primary-foreground/85">{text}</p>
    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
  </div>
);

const JOBS: [string, ReactNode, boolean][] = [
  ["Cloud engineer", <>Costruisce e gestisce l'infrastruttura su cui girano app e siti delle aziende. Si impara con percorsi strutturati e certificazioni riconosciute, come quelle <A slug="certificazioni-aws">AWS</A>, e non richiede una laurea. Trovi il percorso nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</>, true],
  ["Tecnico IT di supporto", "Risolve problemi di computer, reti e software. È una porta d'ingresso nel mondo informatico, con una formazione breve, e permette di crescere verso ruoli più tecnici.", true],
  ["Sviluppatore web", "Crea siti e applicazioni. Richiede molto studio e un portfolio solido, e il mercato junior è competitivo, ma resta una strada concreta per chi ama costruire cose.", true],
  ["Data analyst", "Analizza dati per aiutare le aziende a prendere decisioni. Adatto a chi è preciso e ha dimestichezza con i numeri; valorizza molto l'esperienza precedente in un settore.", true],
  ["Specialista di marketing digitale", "Gestisce campagne, social e contenuti online. Si impara con corsi e pratica su progetti reali, e premia chi ha capacità comunicative.", true],
  ["Installatore di impianti rinnovabili", "Pannelli solari, pompe di calore, climatizzazione: la transizione energetica ha fatto crescere la domanda. Si accede con corsi specifici e affiancamento in azienda.", false],
  ["Operatore socio-sanitario (OSS)", "Assiste persone non autosufficienti in ospedali, strutture e a domicilio. Richiede una qualifica regionale con un corso dedicato; il settore cerca personale in modo costante.", false],
  ["Autista professionale", "Con patente C o CE e CQC si entra nel trasporto merci, un settore che fatica a trovare persone. Strada rapida, ma con molte ore fuori casa.", false],
];

const FAQ: [string, ReactNode][] = [
  ["Qual è il miglior lavoro per cambiare vita?", "Non esiste un lavoro migliore per tutti. Il migliore per te è quello che puoi imparare con il tempo che hai, che ti interessa davvero e che è richiesto nella tua zona."],
  ["Posso cambiare settore lavorativo senza esperienza?", "Sì, ed è proprio ciò che fa una riconversione professionale. Serve una formazione mirata e un modo per dimostrare le nuove competenze, come certificazioni o progetti pratici."],
  ["Esistono corsi gratuiti per la riconversione professionale?", "Sì, spesso finanziati da Regioni e fondi per la formazione. Le opportunità variano molto: il punto di partenza è il centro per l'impiego della tua zona."],
  ["Quanto tempo serve per cambiare vita lavorativa?", "Dipende dalla professione scelta. Per molti dei lavori elencati servono alcuni mesi di formazione, a cui va aggiunto il tempo per trovare il primo impiego nel nuovo settore."],
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Esistono professioni che si possono <strong>imparare da adulti</strong>, in tempi ragionevoli e spesso senza tornare all'università. Qui trovi quali sono, come riconoscerle e come organizzare il cambio senza rischiare lo stipendio.</p>
      </div>
      <P>Cerchi lavori per cambiare vita? Non sei l'unico. Ogni anno migliaia di persone tra i 30 e i 50 anni decidono di cambiare settore: per uno stipendio fermo, un lavoro fisico che non reggeranno a lungo o semplicemente perché non si riconoscono più in quello che fanno.</P>

      <H2 id="quando">Cambiare vita e lavoro: quando è il momento</H2>
      <P>Il desiderio di cambiare arriva spesso dopo anni di insoddisfazione. Ma prima di scegliere una nuova professione, vale la pena capire cosa non funziona davvero: a volte basta cambiare azienda, altre volte serve cambiare settore. Se non hai ancora chiaro da dove partire, leggi prima <A slug="voglio-cambiare-lavoro">voglio cambiare lavoro ma non so cosa fare</A>: trovi un metodo in 6 passi.</P>
      <Note title="Il presupposto di questa guida">Hai già deciso: vuoi cambiare mestiere.</Note>

      <H2 id="caratteristiche">Cosa rende un lavoro adatto a chi cambia vita da adulto</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[["Si impara in mesi", "Non in anni, con una formazione mirata."], ["Si studia mentre lavori", "La sera o nel weekend."], ["Competenze dimostrabili", "Certificazioni, qualifiche o un portfolio."], ["Il settore cerca personale", "Ed è disposto a dare una possibilità a chi viene da altri ambiti."]].map(([t, x]) => (
          <div key={t} className="rounded-2xl border border-border p-5"><p className="flex items-center gap-2 font-extrabold"><Check className="h-5 w-5 text-brand-blue" />{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>
        ))}
      </div>

      <H2 id="lavori">8 lavori per cambiare vita</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {JOBS.map(([t, x, digital], i) => (
          <div key={t} className="rounded-2xl border border-border p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-sm font-extrabold text-primary-foreground">{i + 1}</span>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${digital ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-yellow/20 text-brand-ink"}`}>{digital ? "Digitale" : "Mestiere pratico"}</span>
            </div>
            <p className="mt-3 flex items-center gap-2 font-blog-display text-xl font-extrabold"><Briefcase className="h-5 w-5 text-brand-blue" />{t}</p>
            <p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p>
          </div>
        ))}
      </div>

      <H2 id="confronto">Il confronto in sintesi</H2>
      <Table head={["Lavoro", "Formazione indicativa", "Lavoro fisico", "Remoto"]} rows={[
        ["Cloud engineer", "Alcuni mesi", "No", "Sì, con esperienza"],
        ["Tecnico IT di supporto", "3–6 mesi", "No", "In parte"],
        ["Sviluppatore web", "6–12 mesi", "No", "Sì, con esperienza"],
        ["Data analyst", "6–12 mesi", "No", "Sì, con esperienza"],
        ["Marketing digitale", "Alcuni mesi", "No", "Spesso"],
        ["Installatore rinnovabili", "Alcuni mesi", "Sì", "No"],
        ["Operatore socio-sanitario", "Circa un anno di corso", "Sì", "No"],
        ["Autista professionale", "3–6 mesi", "Sì", "No"],
      ]} />

      <H2 id="riconversione">Riconversione professionale: come funziona in pratica</H2>
      <P>La riconversione professionale è il passaggio da un settore a un altro, costruendo nuove competenze. Segue quasi sempre questi passi:</P>
      <Steps items={[
        "scegli la nuova professione incrociando interessi, vincoli e richiesta del mercato nella tua zona;",
        "individua le competenze trasferibili del lavoro attuale: organizzazione, gestione dei clienti, precisione, lavoro in squadra;",
        "scegli una formazione con un traguardo verificabile, come una certificazione o una qualifica;",
        "fai pratica concreta, con progetti o tirocini, per avere qualcosa da mostrare;",
        <>cerca il primo lavoro nel nuovo settore, preferibilmente mentre hai ancora il vecchio impiego (trovi un piano in <A slug="cambiare-lavoro-mentre-lavori">come cambiare lavoro mentre lavori</A>).</>,
      ]} />
      <Note title="Una possibilità spesso ignorata: la formazione finanziata">Regioni, centri per l'impiego e fondi per la formazione dei lavoratori finanziano spesso corsi di riqualificazione, soprattutto per disoccupati o per chi rischia di perdere il lavoro. Le opportunità cambiano da regione a regione: informati presso il centro per l'impiego della tua zona.</Note>

      <Quiz title="Tra le opzioni c'è un lavoro digitale?" text="Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud." />

      <H2 id="eta">Cambiare vita a 40 o 50 anni</H2>
      <P>L'età è la paura più comune. A 45 anni non si riparte come a 20: più responsabilità, meno tempo, spesso una famiglia. Ma ci sono vantaggi che molti sottovalutano:</P>
      <div className="mt-5 flex flex-wrap gap-3">
        {["Esperienza di lavoro reale", "Maturità e affidabilità", "Motivazione concreta"].map((t) => (
          <span key={t} className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-4 py-2 font-bold"><Sparkles className="h-4 w-4 text-brand-yellow-deep" />{t}</span>
        ))}
      </div>
      <P>Il segreto è scegliere un settore che valuti le competenze più dell'età, e un percorso realistico rispetto al tempo che hai. Nei lavori digitali, per esempio, un selezionatore guarda soprattutto certificazioni e progetti, non la data di nascita.</P>

      <H2 id="errori">Gli errori da evitare</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[["Scegliere solo in base allo stipendio", "Un lavoro ben pagato che non reggi fisicamente o mentalmente non è un cambio di vita, è un nuovo problema."], ["Lasciare il lavoro senza alternativa", "Formati mentre hai ancora uno stipendio."], ["Fidarsi delle promesse facili", "Nessun corso serio può garantirti un lavoro o un guadagno certo. Diffida di chi lo fa."], ["Aspettare il momento perfetto", "Non arriva mai. Inizia con un passo piccolo: un corso introduttivo, una chiacchierata con chi fa già quel lavoro."]].map(([t, x]) => (
          <div key={t} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5"><p className="flex items-center gap-2 font-extrabold"><AlertTriangle className="h-5 w-5 shrink-0 text-destructive" />{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{x}</p></div>
        ))}
      </div>

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
        "I lavori per cambiare vita migliori si imparano in mesi, si studiano mentre si lavora e hanno competenze dimostrabili.",
        "Tra le opzioni più concrete ci sono i lavori digitali, come cloud engineer e tecnico IT, e mestieri molto richiesti come installatore di impianti e operatore socio-sanitario.",
        "La riconversione funziona con un percorso chiaro: scelta, competenze trasferibili, formazione, pratica e ricerca del lavoro.",
        "L'età non è un ostacolo insuperabile: esperienza e affidabilità sono un vantaggio.",
      ]} />
      <Quiz title="Stai valutando un lavoro digitale per cambiare vita?" text="Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi." />
    </div>
  );
}
