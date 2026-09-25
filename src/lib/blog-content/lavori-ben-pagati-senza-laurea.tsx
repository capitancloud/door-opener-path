import { Link } from "@tanstack/react-router";
import { AlertTriangle, Check, Clock3, Euro, HelpCircle, Lightbulb, Sparkles, Wrench, X } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "ben-pagato", label: "Cosa vuol dire \"ben pagato\"" },
  { id: "lavori", label: "Gli 8 lavori" },
  { id: "tabella", label: "Il confronto in tabella" },
  { id: "scegliere", label: "Come scegliere" },
  { id: "settore-it", label: "Perché l'IT è diverso" },
  { id: "errori", label: "3 errori da evitare" },
  { id: "faq", label: "Domande frequenti" },
  { id: "sintesi", label: "In sintesi" },
];

export const faqs = [
  { q: "Qual è il lavoro più pagato senza laurea in Italia?", a: "Dipende da quanto rischio accetti. Tra i lavori da dipendente, quelli tecnici specializzati (IT, saldatura, manutenzione industriale) sono tra i più pagati. Tra quelli autonomi, agenti di commercio e artigiani affermati possono guadagnare di più, ma con molta più incertezza." },
  { q: "Si può guadagnare bene senza laurea e senza diploma?", a: "Sì, soprattutto nei mestieri manuali specializzati. Ne parlo nell'articolo sui lavori ben pagati senza diploma.", link: "lavori-ben-pagati-senza-diploma" },
  { q: "Posso cambiare lavoro a 40 anni senza laurea?", a: "Sì. Molte persone lo fanno ogni anno, anche nel settore tecnologico, dove maturità e affidabilità sono apprezzate. Serve però scegliere un percorso realistico e dedicargli tempo con costanza." },
  { q: "Quali lavori senza laurea si possono fare da casa?", a: "Soprattutto quelli IT, come sviluppatore o cloud engineer. Attenzione però: il lavoro da remoto arriva quasi sempre dopo un po' di esperienza. Da junior, molte aziende chiedono la presenza in ufficio almeno in parte." },
  { q: "Servono certificazioni per lavorare nell'IT senza laurea?", a: "Non sono obbligatorie, ma per chi non ha una laurea sono il modo più rapido per dimostrare le proprie competenze. Una certificazione riconosciuta, come quelle di Amazon Web Services, dice al selezionatore che hai superato un esame ufficiale su argomenti precisi. Nella guida sulle certificazioni AWS trovi quali sono e da quale conviene partire.", link: "certificazioni-aws" },
  { q: "Quanto tempo serve per trovare lavoro dopo la formazione?", a: "Non esiste una risposta valida per tutti. Dipende dal settore, dalla zona in cui cerchi, da quanto è curato il tuo CV e da quante candidature invii. Diffida di chi ti promette tempi certi: la formazione ti rende un candidato credibile, ma la ricerca del lavoro è una fase a sé, che va preparata con metodo." },
];

const jobs = [
  { t: "Autista di camion (patente C/CE e CQC)", fa: "Trasporta merci su strada, in Italia o all'estero.", ral: "24.000–35.000€ di RAL, di più con le trasferte internazionali.", serve: "Patente C o CE e la CQC (Carta di Qualificazione del Conducente). Il costo totale può superare qualche migliaio di euro, ma alcune aziende di trasporto lo finanziano pur di trovare personale.", tempo: "3–6 mesi", contro: "Tanti giorni lontano da casa, orari pesanti, lavoro fisico e usurante nel lungo periodo." },
  { t: "Elettricista o idraulico", fa: "Installa e ripara impianti elettrici o idraulici in case, uffici e aziende.", ral: "Da dipendente 22.000–30.000€ di RAL. In proprio, con esperienza e un buon giro di clienti, molto di più.", serve: "Corsi di formazione professionale regionali o apprendistato presso un'impresa.", tempo: "1–3 anni per diventare autonomo", contro: "Lavoro fisico, e i guadagni alti arrivano soprattutto aprendo la partita IVA, con tutto il rischio d'impresa che comporta." },
  { t: "Saldatore specializzato", fa: "Unisce metalli in cantieri, industrie e impianti.", ral: "25.000–40.000€ di RAL, molto di più su piattaforme offshore o con trasferte all'estero.", serve: "Corso di saldatura e patentino certificato per le tecniche richieste.", tempo: "6–12 mesi", contro: "Ambiente di lavoro duro, rischi per la salute e spesso trasferte lunghe." },
  { t: "Tecnico manutentore industriale", fa: "Tiene in funzione macchinari e impianti nelle aziende di produzione.", ral: "25.000–35.000€ di RAL.", serve: "Basi di meccanica ed elettrotecnica, spesso un diploma tecnico o corsi specifici.", tempo: "1–2 anni", contro: "Turni, reperibilità e lavoro legato alla presenza in fabbrica." },
  { t: "Agente di commercio", fa: "Vende prodotti o servizi di un'azienda ai clienti di una zona.", ral: "Molto variabile: da meno di 20.000€ a oltre 60.000€ l'anno. Dipende quasi tutto dalle provvigioni.", serve: "Iscrizione come agente e soprattutto capacità di vendita.", tempo: "Da subito, ma servono 1–2 anni per costruire un portafoglio clienti", contro: "Guadagno incerto, soprattutto all'inizio. Se non vendi, non guadagni." },
  { t: "Tecnico IT di supporto (help desk)", fa: "Risolve problemi di computer, reti e software per i colleghi o i clienti di un'azienda.", ral: "22.000–26.000€ di RAL all'inizio.", serve: "Buone basi informatiche, meglio se certificate.", tempo: "3–6 mesi di formazione", contro: "Lo stipendio di partenza non è alto. È però una porta d'ingresso nel mondo IT: da qui si può crescere verso ruoli più pagati, come sistemista o cloud engineer." },
  { t: "Sviluppatore web", fa: "Crea siti e applicazioni web.", ral: "24.000–30.000€ di RAL da junior, con una crescita rapida man mano che si accumula esperienza.", serve: "Saper programmare e soprattutto un portfolio di progetti da mostrare.", tempo: "6–12 mesi di studio serio", contro: "Il mercato junior è molto affollato, e l'intelligenza artificiale sta cambiando rapidamente cosa si chiede a chi inizia." },
  { t: "Cloud engineer", fa: "Costruisce e gestisce l'infrastruttura su cui girano siti, app e dati delle aziende, sulle piattaforme cloud come Amazon Web Services (AWS), Microsoft Azure e Google Cloud.", ral: "28.000–35.000€ di RAL da junior, con la possibilità di superare i 45.000€ con qualche anno di esperienza.", serve: "Competenze pratiche e certificazioni riconosciute, come le certificazioni AWS. La laurea non è un requisito: i selezionatori guardano soprattutto cosa sai fare e come lo dimostri.", tempo: "Qualche mese di studio intensivo e costante, a seconda del punto di partenza e del tempo che puoi dedicare ogni giorno", contro: "Richiede studio vero e continuo, perché le tecnologie cambiano in fretta. E il primo lavoro non arriva in automatico: servono certificazioni, un portfolio di progetti e una strategia di candidatura." },
];

const table = [
  ["Autista camion", "24.000–35.000€", "3–6 mesi", "Sì", "No"],
  ["Elettricista / idraulico", "22.000–30.000€", "1–3 anni", "Sì", "No"],
  ["Saldatore specializzato", "25.000–40.000€", "6–12 mesi", "Sì", "No"],
  ["Tecnico manutentore", "25.000–35.000€", "1–2 anni", "Sì", "No"],
  ["Agente di commercio", "Molto variabile", "Da subito", "No", "In parte"],
  ["Tecnico IT help desk", "22.000–26.000€", "3–6 mesi", "No", "In parte"],
  ["Sviluppatore web", "24.000–30.000€", "6–12 mesi", "No", "Sì, con esperienza"],
  ["Cloud engineer", "28.000–35.000€", "Qualche mese", "No", "Sì, con esperienza"],
];

const A = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <Link to="/blog/$slug" params={{ slug }} className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:decoration-brand-blue">{children}</Link>
);
const H2 = ({ id, children }: { id: string; children: ReactNode }) => (
  <h2 id={id} className="scroll-mt-24 pt-14 font-blog-display text-3xl font-extrabold leading-tight sm:text-4xl">{children}</h2>
);
const P = ({ children }: { children: ReactNode }) => <p className="mt-5 text-lg leading-relaxed text-brand-ink/85">{children}</p>;

function QuizBox({ title, text }: { title: string; text: string }) {
  return (
    <aside className="my-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/10 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink"><Sparkles className="h-5 w-5" /></div>
        <div>
          <p className="font-blog-display text-xl font-extrabold">{title}</p>
          <p className="mt-2 leading-relaxed text-brand-ink/80">{text}</p>
          <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-xl bg-brand-ink px-5 py-2.5 font-bold text-primary-foreground">Fai il quiz gratuito</a>
        </div>
      </div>
    </aside>
  );
}

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Sì, in Italia esistono lavori ben pagati senza laurea. Ma non sono quelli che ti promettono i post sui social, e quasi nessuno è "facile". Hanno tutti una cosa in comune: pagano una competenza specifica che le aziende faticano a trovare, non un titolo di studio.</p>
      </div>
      <P>In questo articolo trovi 8 professioni reali, con quanto si guadagna, cosa serve per entrare e quanto tempo ci vuole. Niente liste da 50 voci copiate da altri siti: solo lavori che una persona adulta, anche partendo da zero, può concretamente raggiungere. Alla fine trovi anche gli errori più comuni da evitare quando si cambia strada.</P>

      <H2 id="ben-pagato">Cosa intendiamo per "ben pagato"</H2>
      <P>Prima di iniziare, mettiamoci d'accordo sui numeri. In Italia lo stipendio si misura in <strong>RAL, la Retribuzione Annua Lorda</strong>: quanto guadagni in un anno prima di tasse e contributi.</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center rounded-2xl bg-brand-blue-deep p-6 text-primary-foreground">
        <div className="font-blog-display text-4xl font-extrabold text-brand-yellow">30.000€ RAL</div>
        <p className="text-primary-foreground/85">≈ 1.700–1.800€ netti al mese, a seconda delle mensilità e delle detrazioni.</p>
      </div>
      <P>In questo articolo consideriamo "ben pagato" un lavoro che:</P>
      <ul className="mt-4 space-y-3">
        {["parte almeno da 25.000€ di RAL o ci arriva in fretta;", "ha margini di crescita reali nei primi anni;", "è richiesto dal mercato, quindi non devi aspettare anni per trovare un posto."].map((t) => (
          <li key={t} className="flex gap-3 text-lg"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-blue" />{t}</li>
        ))}
      </ul>
      <p className="mt-5 text-sm italic text-muted-foreground">Le cifre che trovi sono indicative: variano per regione, azienda, contratto ed esperienza.</p>

      <H2 id="lavori">Gli 8 lavori ben pagati senza laurea</H2>
      <div className="mt-8 space-y-6">
        {jobs.map((j, i) => (
          <div key={j.t}>
            {i === 7 && <QuizBox title="Non sai quale strada fa per te?" text="Se stai valutando un lavoro tecnico ma non sai se hai la predisposizione giusta, fai il quiz gratuito di 2 minuti: 9 domande per capire se un lavoro nel cloud è adatto a te." />}
            <article className="overflow-hidden rounded-3xl border border-border bg-background">
              <div className="flex items-center gap-4 border-b border-border bg-secondary px-6 py-4">
                <span className="font-blog-display text-3xl font-extrabold text-brand-blue">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-blog-display text-xl font-extrabold leading-snug sm:text-2xl">{j.t}</h3>
              </div>
              <div className="space-y-4 p-6">
                <p className="leading-relaxed"><strong>Cosa fa:</strong> {j.fa}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-brand-blue/5 p-4"><p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Euro className="h-4 w-4" /> Quanto guadagna</p><p className="mt-2 text-sm leading-relaxed">Indicativamente {j.ral}</p></div>
                  <div className="rounded-2xl bg-brand-blue/5 p-4"><p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Clock3 className="h-4 w-4" /> Tempo per entrare</p><p className="mt-2 text-sm leading-relaxed">{j.tempo}</p></div>
                </div>
                <p className="flex gap-3 leading-relaxed"><Wrench className="mt-1 h-4 w-4 shrink-0 text-brand-blue" /><span><strong>Cosa serve:</strong> {j.serve}</span></p>
                <p className="flex gap-3 rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm leading-relaxed"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" /><span><strong>Il contro:</strong> {j.contro}</span></p>
              </div>
            </article>
          </div>
        ))}
      </div>

      <H2 id="tabella">Il confronto in una tabella</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-brand-blue-deep text-primary-foreground">
            <tr>{["Lavoro", "RAL indicativa di partenza", "Tempo per entrare", "Lavoro fisico", "Possibilità di remoto"].map((h) => <th key={h} className="px-4 py-3 font-bold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {table.map((r, i) => (
              <tr key={r[0]} className={i === 7 ? "bg-brand-yellow/15 font-semibold" : i % 2 ? "bg-secondary" : ""}>
                {r.map((c, k) => <td key={k} className="px-4 py-3">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 id="scegliere">Come scegliere quello giusto per te</H2>
      <P>La domanda giusta non è "qual è il lavoro più pagato?", ma <strong>"quale lavoro posso fare bene per i prossimi 20 anni?"</strong>. Tre criteri pratici:</P>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { t: "Il tuo corpo e la tua età", d: "I mestieri manuali pagano bene, ma a 50 anni saldare in un cantiere o guidare un camion per 10 ore al giorno pesa. Se hai già 35 o 40 anni, valuta seriamente un lavoro che puoi fare a lungo." },
          { t: "Quanto rischio puoi reggere", d: "Agente di commercio e artigiano in proprio possono guadagnare molto, ma senza stipendio fisso. Se hai un mutuo o una famiglia, un lavoro da dipendente ben pagato è spesso la scelta più sensata." },
          { t: "Il tempo che hai per formarti", d: "Se lavori già, ti serve un percorso che puoi seguire la sera o nel weekend. I lavori IT hanno un vantaggio qui: si studiano da casa, al tuo ritmo." },
        ].map((c, i) => (
          <div key={c.t} className="rounded-2xl border border-border bg-secondary p-5">
            <span className="text-2xl font-extrabold text-brand-blue">{i + 1}</span>
            <p className="mt-2 font-blog-display font-extrabold">{c.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">{c.d}</p>
          </div>
        ))}
      </div>
      <P>Ne parlo meglio nella guida su <A slug="cambiare-lavoro-mentre-lavori">come cambiare lavoro mentre lavori</A>.</P>

      <H2 id="settore-it">Perché il settore IT è diverso dagli altri</H2>
      <P>Nella maggior parte dei settori, senza laurea hai un limite. Nell'IT molto meno, per un motivo semplice: <strong>le competenze si possono dimostrare in modo oggettivo</strong>. Una certificazione AWS è la stessa in tutto il mondo e un progetto su GitHub lo può vedere chiunque. Al selezionatore interessa soprattutto che tu sappia fare il lavoro.</P>
      <blockquote className="mt-6 border-l-4 border-brand-yellow pl-5 font-blog-display text-xl font-bold leading-snug sm:text-2xl">Questo non significa che sia facile. Significa che è accessibile.</blockquote>
      <P>Chi è disposto a studiare con metodo ha una possibilità concreta, indipendentemente dal titolo di studio o dall'età. Se vuoi capire nel dettaglio come funziona questo percorso, leggi la guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer anche senza laurea</A>.</P>

      <H2 id="errori">3 errori da evitare quando cambi lavoro senza laurea</H2>
      <div className="mt-6 space-y-4">
        {[
          { t: "Scegliere solo in base allo stipendio", d: "Lo stipendio medio di una professione non ti dice quanto guadagnerai tu nei primi due anni, né se quel lavoro fa per te. Un saldatore offshore guadagna molto, ma passa settimane lontano da casa. Prima di scegliere, chiediti come sarebbe una tua giornata tipo in quel lavoro, non solo quanto porteresti a casa a fine mese." },
          { t: "Formarsi senza un obiettivo preciso", d: "È l'errore più comune in assoluto. Si inizia con un video su YouTube, poi un corso gratuito, poi un altro argomento che sembra interessante. Dopo sei mesi si sanno tante cose sparse, ma nessuna abbastanza bene da essere assunti. Qualunque strada tu scelga, serve un percorso con un ordine preciso e un traguardo verificabile: una patente, un patentino, una certificazione." },
          { t: "Licenziarsi prima di avere un'alternativa concreta", d: "Cambiare lavoro non significa mollare tutto domani. Chi ci riesce, nella maggior parte dei casi, si forma la sera e nel weekend mentre ha ancora uno stipendio, e lascia il vecchio lavoro solo quando ha un'offerta in mano. È più lento, ma molto più sicuro, soprattutto se hai spese fisse o una famiglia." },
        ].map((e, i) => (
          <div key={e.t} className="flex gap-4 rounded-2xl border border-border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive"><AlertTriangle className="h-5 w-5" /></div>
            <div><p className="font-blog-display text-lg font-extrabold">{i + 1}. {e.t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{e.d}</p></div>
          </div>
        ))}
      </div>

      <H2 id="faq">Domande frequenti</H2>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-border bg-secondary p-5">
            <summary className="flex cursor-pointer list-none items-start gap-3 font-bold"><HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />{f.q}</summary>
            <p className="mt-3 pl-8 leading-relaxed text-brand-ink/80">{f.a}{f.link && <> <A slug={f.link}>Leggi la guida →</A></>}</p>
          </details>
        ))}
      </div>

      <H2 id="sintesi">In sintesi</H2>
      <P>I lavori ben pagati senza laurea esistono, ma nessuno ti regala niente. Ognuno ha un prezzo: <strong>fatica fisica, rischio economico o studio intenso</strong>. La scelta giusta è quella con il prezzo che sei disposto a pagare.</P>
      <P>Se il tuo prezzo è lo studio, e vuoi un lavoro che puoi fare a lungo, senza sforzo fisico e con possibilità di crescita, il cloud è una delle strade più concrete oggi.</P>
    </div>
  );
}
