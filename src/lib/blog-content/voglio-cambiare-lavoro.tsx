import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Check, HelpCircle, Lightbulb, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "perche", label: "Perché vuoi cambiare?" },
  { id: "segnali", label: "I segnali che è il momento" },
  { id: "metodo", label: "Il metodo in 6 passi" },
  { id: "adulto", label: "Cambiare settore da adulto" },
  { id: "esempio", label: "Un esempio pratico" },
  { id: "consigli", label: "Cambiare senza rischiare" },
  { id: "errori", label: "Gli errori più comuni" },
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

const motivi = [
  ["Capo o colleghi difficili", "Cambiare azienda, non mestiere"],
  ["Stipendio basso ma lavoro che ti piace", "Negoziare o cambiare azienda nello stesso ruolo"],
  ["Mansioni ripetitive, nessuna crescita", "Cambiare ruolo, anche nella stessa azienda"],
  ["Il settore non ha futuro o ti spegne", "Cambiare settore lavorativo"],
  ["Lavoro fisico che non reggerai a lungo", "Cambiare settore lavorativo"],
];

const faqs: { q: string; a: string }[] = [
  { q: "È normale voler cambiare lavoro e non sapere cosa fare?", a: "Sì, è la situazione più comune in assoluto. Quasi nessuno sa cosa vuole fare prima di aver esplorato qualche opzione concreta. Il metodo in 6 passi serve proprio a trasformare questa incertezza in una scelta." },
  { q: "Quando è il momento giusto per cambiare lavoro?", a: "Quando il malessere dura da mesi e non dipende da un periodo difficile passeggero. Il momento giusto per iniziare a prepararsi, però, è subito: la formazione richiede tempo, e prima inizi, prima avrai delle alternative reali." },
  { q: "Si può cambiare lavoro a 40 o 50 anni?", a: "Sì. Serve scegliere un settore che cerca personale e che valuta le competenze più dell'età. Maturità, affidabilità ed esperienza di vita sono qualità che molti datori di lavoro cercano." },
  { q: "Come si cambia settore senza esperienza?", a: "Con tre elementi: una formazione mirata, un modo per dimostrare le competenze (certificazioni o progetti pratici) e un CV che valorizza le competenze trasferibili del lavoro precedente." },
  { q: "Meglio licenziarsi e poi cercare, o cercare mentre hai ancora un lavoro?", a: "Nella grande maggioranza dei casi, cercare mentre hai ancora un lavoro. Ti protegge economicamente e ti permette di valutare le offerte senza fretta." },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Non sapere cosa fare è il punto di partenza normale, non un problema. Il problema è restare fermi lì per anni.</p>
      </div>
      <P>"Voglio cambiare lavoro, ma non so cosa fare." Se ti sei ritrovato a scrivere questa frase su Google, non sei l'unico: è uno dei pensieri più comuni tra chi lavora da qualche anno.</P>
      <P>In questa guida trovi un metodo pratico in 6 passi per passare da "vorrei cambiare lavoro" a un piano concreto: capire il vero motivo del tuo malessere, scegliere una direzione e fare il primo passo senza mettere a rischio lo stipendio.</P>

      <H2 id="perche">Perché vuoi cambiare lavoro? Parti da qui</H2>
      <P>Prima di chiederti cosa fare, chiediti <strong>cosa non funziona oggi</strong>. Sembra banale, ma è il passaggio che quasi tutti saltano. E cambia completamente la risposta. Non tutti i motivi richiedono lo stesso tipo di cambiamento:</P>
      <div className="mt-6 space-y-3">
        {motivi.map(([m, s]) => (
          <div key={m} className="grid items-center gap-2 rounded-2xl border border-border p-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
            <p className="text-brand-ink/80">{m}</p>
            <ArrowRight className="hidden h-5 w-5 text-brand-blue sm:block" />
            <p className="font-bold text-brand-blue">{s}</p>
          </div>
        ))}
      </div>
      <P>Se il problema è il capo, cambiare completamente lavoro è una soluzione sproporzionata: rischi di ripartire da zero per un problema che si risolveva mandando qualche CV. Se invece il problema è il lavoro in sé, cambiare azienda non servirà: dopo sei mesi ti ritroverai con la stessa sensazione.</P>
      <div className="mt-6 rounded-2xl border border-brand-yellow/50 bg-brand-yellow/10 p-5">
        <p className="text-xs font-extrabold uppercase text-brand-ink">Esercizio di 5 minuti</p>
        <p className="mt-2 leading-relaxed">Scrivi su un foglio le tre cose che ti pesano di più nel tuo lavoro attuale. Se sono tutte legate alle persone o all'azienda, ti basta un cambio di azienda. Se sono legate a cosa fai ogni giorno, allora serve un vero cambiamento di lavoro.</p>
      </div>

      <H2 id="segnali">I segnali che è davvero il momento di cambiare</H2>
      <P>Tutti hanno giornate storte. Ma alcuni segnali indicano che non si tratta di un periodo difficile:</P>
      <Bullets items={[
        "la domenica sera senti già il peso del lunedì, e succede da mesi;",
        "non impari più niente di nuovo da almeno un anno;",
        "lo stipendio è fermo e non vedi come potrebbe crescere;",
        "se ti immagini tra cinque anni nello stesso posto, provi fastidio o paura;",
        "il lavoro sta peggiorando la tua salute o il tuo umore anche fuori dall'ufficio.",
      ]} />
      <P>Se ti riconosci in <strong>tre o più</strong> di questi punti, il desiderio di cambiare non è un capriccio passeggero. È il momento di iniziare a muoverti, con metodo.</P>

      <H2 id="metodo">Voglio cambiare lavoro: cosa posso fare? Il metodo in 6 passi</H2>
      <ol className="mt-8 space-y-6 border-l-2 border-brand-blue/20 pl-6 sm:pl-8">
        {[
          { t: "Fai l'inventario di cosa ti piace e cosa no", c: <><p>Prendi il tuo lavoro attuale e quelli precedenti. Per ognuno scrivi due colonne: le attività che ti davano energia e quelle che te la toglievano. Non pensare ai ruoli, pensa alle attività concrete: risolvere problemi, parlare con i clienti, organizzare, lavorare con le mani, stare al computer, imparare cose nuove.</p><p className="mt-3">Dopo dieci minuti avrai qualcosa di molto più utile di un generico "non so cosa voglio": una lista di cose che vuoi fare di più e cose che vuoi evitare.</p></> },
          { t: "Elenca le competenze che puoi portarti dietro", c: <p>Anche se cambi settore, non riparti da zero. Hai competenze trasferibili: precisione, gestione dello stress, capacità di parlare con le persone, di rispettare le scadenze, di risolvere problemi sotto pressione. Un ex receptionist sa gestire le richieste di più persone in contemporanea. Un ex operaio sa lavorare seguendo procedure precise. Sono tutte qualità che i nuovi datori di lavoro apprezzano.</p> },
          { t: "Metti nero su bianco i tuoi vincoli", c: <><p>Qui serve onestà. Quanto tempo puoi dedicare alla formazione ogni settimana? Quanti soldi puoi investire? Puoi permetterti un periodo con uno stipendio più basso? Puoi trasferirti o devi restare dove sei?</p><p className="mt-3 font-semibold">I vincoli non sono un ostacolo: sono un filtro. Eliminano le opzioni irrealistiche e ti fanno risparmiare mesi di tentativi.</p></> },
          { t: "Scegli tre opzioni concrete da esplorare", c: <><p>Incrocia i primi tre passi e scegli tre possibili direzioni. Non una, perché rischi di innamorarti dell'idea sbagliata. Non dieci, perché ti disperdi.</p><p className="mt-3">Per ognuna, cerca annunci di lavoro reali sui portali più usati e leggi cosa chiedono: competenze, titoli, certificazioni, esperienza. È il modo più rapido per capire quanta strada ti separa da quel lavoro. Se cerchi idee, nella guida sui <A slug="lavori-ben-pagati-senza-laurea">lavori ben pagati senza laurea</A> trovi otto professioni con stipendi e tempi di ingresso.</p></> },
          { t: "Prova prima di decidere", c: <><p>Prima di investire mesi e soldi, fai un test a basso costo. Per ogni opzione:</p><ul className="mt-3 list-disc space-y-2 pl-5"><li>parla con chi fa già quel lavoro, anche solo scrivendo a qualcuno su LinkedIn: chiedi com'è una giornata tipo e cosa non ti direbbe nessun annuncio;</li><li>segui un'introduzione gratuita, un video lungo o un mini corso, e osserva se ti incuriosisce o ti annoia;</li><li>fai un piccolo progetto pratico, anche amatoriale.</li></ul><p className="mt-3">Dopo due o tre settimane di test saprai molto più di quanto potresti capire pensandoci per mesi.</p></> },
          { t: "Trasforma la scelta in un piano con scadenze", c: <p>A questo punto hai una direzione. Ora serve un piano: cosa imparare, in che ordine, con quale traguardo verificabile (una certificazione, un patentino, un portfolio) ed entro quando. <strong>Senza scadenze, il cambiamento resta un'intenzione.</strong></p> },
        ].map((s, i) => (
          <li key={s.t} className="relative">
            <span className="absolute -left-[2.6rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground sm:-left-[3.1rem]">{i + 1}</span>
            <div className="rounded-3xl border border-border bg-background p-6">
              <h3 className="font-blog-display text-xl font-extrabold sm:text-2xl">{s.t}</h3>
              <div className="mt-3 leading-relaxed text-brand-ink/85">{s.c}</div>
            </div>
            {i === 3 && (
              <aside className="mt-6 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink"><Sparkles className="h-5 w-5" /></div>
                  <div>
                    <p className="font-blog-display text-xl font-extrabold">Stai valutando un lavoro tecnico?</p>
                    <p className="mt-2 leading-relaxed text-brand-ink/80">Se tra le tue opzioni c'è il settore IT, fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud.</p>
                    <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-xl bg-brand-ink px-5 py-2.5 font-bold text-primary-foreground">Fai il quiz gratuito</a>
                  </div>
                </div>
              </aside>
            )}
          </li>
        ))}
      </ol>

      <H2 id="adulto">Cambiare settore lavorativo da adulto: è realistico?</H2>
      <P>Sì, ed è molto più comune di quanto pensi. Ogni anno migliaia di persone tra i 30 e i 50 anni cambiano settore. Chi ci riesce, però, sceglie quasi sempre un settore con due caratteristiche:</P>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-secondary p-5"><span className="text-2xl font-extrabold text-brand-blue">01</span><p className="mt-2 leading-relaxed">Cerca personale e fatica a trovarlo, quindi è disposto a formare persone nuove.</p></div>
        <div className="rounded-2xl bg-secondary p-5"><span className="text-2xl font-extrabold text-brand-blue">02</span><p className="mt-2 leading-relaxed">Permette di dimostrare le competenze in modo oggettivo, con certificazioni o risultati visibili, senza dover tornare all'università.</p></div>
      </div>
      <P>I mestieri tecnici specializzati e il settore IT rispondono entrambi a questi criteri. Nel mondo del cloud, per esempio, una certificazione riconosciuta e un portfolio di progetti contano più del titolo di studio. Se vuoi approfondire, leggi la guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A> oppure quella sui <A slug="lavori-per-cambiare-vita">lavori per cambiare vita</A>.</P>

      <H2 id="esempio">Un esempio pratico: il metodo applicato</H2>
      <div className="mt-6 overflow-hidden rounded-3xl border border-brand-blue/20">
        <div className="flex items-center gap-4 bg-brand-blue-deep p-6 text-primary-foreground">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-brand-ink"><UserRound className="h-6 w-6" /></div>
          <div><p className="font-blog-display text-xl font-extrabold">Marco, 38 anni</p><p className="text-sm text-primary-foreground/80">Magazziniere da dieci anni · "vorrei cambiare lavoro ma non so cosa fare"</p></div>
        </div>
        <dl className="divide-y divide-border">
          {[
            ["Il vero motivo", "Non è il capo, ma il lavoro fisico che la sua schiena reggerà sempre peggio, e uno stipendio fermo da anni. Serve un cambio di settore, non di azienda."],
            ["Inventario e competenze", "Gli piace risolvere problemi e organizzare. È preciso e abituato alle procedure, e da ragazzo passava le serate a smontare computer."],
            ["Vincoli", "Mutuo, due figli, circa un'ora e mezza al giorno da dedicare allo studio. Non può smettere di lavorare."],
            ["Tre opzioni", "Tecnico manutentore, tecnico IT di supporto, cloud engineer. Legge un centinaio di annunci e scopre che per le ultime due contano soprattutto le certificazioni."],
            ["Test", "Segue per due settimane un'introduzione gratuita a Linux e al cloud. Scopre che gli piace più di quanto pensasse."],
            ["Piano", "Sceglie un percorso strutturato con due certificazioni e un obiettivo di candidatura entro un anno, continuando a lavorare."],
          ].map(([k, v]) => (
            <div key={k} className="grid gap-1 p-5 sm:grid-cols-[11rem_1fr] sm:gap-4">
              <dt className="font-extrabold text-brand-blue">{k}</dt><dd className="leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <blockquote className="mt-6 border-l-4 border-brand-yellow pl-5 font-blog-display text-xl font-bold leading-snug sm:text-2xl">Marco non ha avuto un'illuminazione. Ha seguito un processo, un passo alla volta.</blockquote>

      <H2 id="consigli">Consigli per cambiare lavoro senza rischiare tutto</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          { t: "Non licenziarti prima di avere un'alternativa", d: <>Il modo più sicuro è prepararsi mentre hai ancora uno stipendio: formazione la sera e nel weekend, candidature quando sei pronto, dimissioni solo con un'offerta in mano. Ne parlo nella guida su <A slug="cambiare-lavoro-mentre-lavori">come cambiare lavoro mentre lavori</A>.</> },
          { t: "Metti da parte un fondo di sicurezza", d: "Anche con un piano ben fatto, il passaggio può richiedere più tempo del previsto. Qualche mese di spese coperte ti permette di scegliere con calma, senza accettare la prima offerta per disperazione." },
          { t: "Aggiorna CV e LinkedIn per il nuovo lavoro", d: "Non raccontare solo cosa hai fatto: evidenzia le competenze trasferibili e la formazione che stai facendo per il nuovo settore." },
          { t: "Coinvolgi chi vive con te", d: "Un cambiamento di lavoro richiede tempo ed energie per mesi. Avere il sostegno della famiglia fa la differenza tra chi arriva in fondo e chi molla a metà." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-border bg-secondary p-5">
            <ShieldCheck className="h-6 w-6 text-brand-blue" />
            <p className="mt-3 font-blog-display text-lg font-extrabold">{c.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">{c.d}</p>
          </div>
        ))}
      </div>

      <H2 id="errori">Gli errori più comuni</H2>
      <div className="mt-6 space-y-4">
        {[
          ["Aspettare di avere le idee perfettamente chiare", "Le idee chiare arrivano facendo, non pensando. I passi 4 e 5 esistono proprio per questo."],
          ["Cambiare per scappare, non per andare verso qualcosa", "Se l'unico obiettivo è lasciare il lavoro attuale, rischi di accettare il primo lavoro diverso che capita e ritrovarti al punto di partenza."],
          ["Formarsi in modo disordinato", "Dieci corsi gratuiti su argomenti diversi non ti rendono assumibile. Un percorso strutturato con un traguardo preciso sì."],
          ["Sottovalutare i tempi", "Un cambiamento di lavoro serio richiede mesi, non settimane. Pianificarlo in modo realistico ti evita di scoraggiarti al primo ostacolo."],
        ].map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive"><AlertTriangle className="h-5 w-5" /></div>
            <div><p className="font-blog-display text-lg font-extrabold">{t}</p><p className="mt-2 leading-relaxed text-brand-ink/80">{d}</p></div>
          </div>
        ))}
      </div>

      <H2 id="faq">Domande frequenti</H2>
      <div className="mt-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-2xl border border-border bg-secondary p-5">
            <summary className="flex cursor-pointer list-none items-start gap-3 font-bold"><HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />{f.q}</summary>
            <p className="mt-3 pl-8 leading-relaxed text-brand-ink/80">{f.a}</p>
          </details>
        ))}
      </div>

      <H2 id="sintesi">In sintesi</H2>
      <P>Voler cambiare lavoro senza sapere cosa fare è normale. Per uscirne:</P>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {["Capisci il vero motivo del tuo malessere", "Fai l'inventario di cosa ti piace e di cosa sai fare", "Definisci i tuoi vincoli", "Scegli tre opzioni concrete", "Provale con test a basso costo", "Trasforma la scelta in un piano con scadenze"].map((t, i) => (
          <li key={t} className="flex items-center gap-3 rounded-2xl bg-secondary p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-extrabold text-primary-foreground">{i + 1}</span><span className="font-semibold">{t}</span></li>
        ))}
      </ol>
      <P><strong>Non devi avere tutte le risposte oggi.</strong> Devi solo fare il primo passo nella direzione giusta.</P>
    </div>
  );
}
