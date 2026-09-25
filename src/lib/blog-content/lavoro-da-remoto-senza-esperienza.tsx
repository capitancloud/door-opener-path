import { ArrowRight, Check, GraduationCap, HelpCircle, Laptop, Lightbulb, Search, ShieldAlert, Sparkles, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "verita", label: "La verità in breve" },
  { id: "lavori", label: "I lavori senza esperienza" },
  { id: "truffe", label: "Attenzione alle truffe" },
  { id: "dove-cercare", label: "Dove cercare" },
  { id: "ben-pagati", label: "Perché i ben pagati chiedono esperienza" },
  { id: "ibrido", label: "Il lavoro ibrido" },
  { id: "strada", label: "La strada realistica" },
  { id: "senza-esperienza", label: "Trovare lavoro senza esperienza" },
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

const lavori: [string, string, string, string][] = [
  ["Assistenza clienti online", "Buona comunicazione, pazienza", "Basso-medio", "Turni, lavoro ripetitivo"],
  ["Vendita telefonica", "Capacità di persuasione", "Spesso a provvigione", "Guadagno incerto, alta pressione"],
  ["Ripetizioni e tutoraggio online", "Conoscere bene una materia", "Variabile, a ore", "Clienti da trovare da solo"],
  ["Moderazione di contenuti", "Attenzione, lingue straniere", "Basso-medio", "Contenuti a volte pesanti da vedere"],
  ["Trascrizioni e sottotitoli", "Velocità di scrittura, ascolto", "Basso, a pezzo", "Molta concorrenza"],
  ["Assistente virtuale", "Organizzazione, strumenti digitali", "Variabile", "Serve costruirsi una clientela"],
  ["Micro-lavori e sondaggi online", "Nulla", "Molto basso", "Quasi mai un vero reddito"],
];

const truffe: [string, string][] = [
  ["Ti chiedono soldi per iniziare", "Un kit, un corso obbligatorio, una quota di iscrizione. Un datore di lavoro vero ti paga, non ti fa pagare."],
  ["Guadagni troppo alti per il lavoro richiesto", "Tipo cifre importanti per inserire dati o mettere \"mi piace\"."],
  ["Il colloquio avviene solo in chat", "Magari su app di messaggistica, senza un nome, un'azienda o un contratto verificabile."],
  ["Ti chiedono documenti o dati bancari", "Prima ancora di averti fatto un'offerta scritta."],
  ["Non trovi traccia dell'azienda", "Nessun sito serio, nessuna recensione, nessun profilo aziendale."],
];

const circolo: [string, ReactNode][] = [
  ["Crea esperienza da solo", <>Progetti personali, lavori per piccole realtà, volontariato: tutto ciò che puoi mostrare vale come esperienza.</>],
  ["Ottieni un titolo verificabile", <>Una certificazione riconosciuta dice al selezionatore che sai fare qualcosa, anche senza anni di lavoro alle spalle.</>],
  ["Punta a stage, tirocini e apprendistato", <>Sono pensati proprio per chi deve ancora costruirsi un'esperienza.</>],
  ["Scrivi un CV orientato alle competenze", <>Metti in primo piano cosa sai fare e cosa hai realizzato, non solo i lavori precedenti. Ne parlo nella guida sul <A slug="cv-senza-esperienza">CV senza esperienza</A>.</>],
  ["Usa il tuo network", <>Molte opportunità per chi inizia arrivano da contatti diretti, non dagli annunci.</>],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Esistono davvero lavori da remoto senza esperienza?", a: <>Sì, ma sono pochi e di solito poco pagati: assistenza clienti, vendita telefonica, tutoraggio, moderazione di contenuti. I lavori da remoto ben pagati richiedono quasi sempre una competenza specifica.</> },
  { q: "Quanto si guadagna con un lavoro da remoto senza esperienza?", a: <>In genere poco, spesso meno di un lavoro equivalente in presenza. Diffida di chi promette guadagni alti senza competenze: è uno dei segnali tipici delle truffe.</> },
  { q: "Si può cambiare lavoro senza esperienza nel nuovo settore?", a: <>Sì, ma serve una formazione mirata e un modo per dimostrare quello che sai, come una certificazione o qualche progetto pratico. Le competenze trasferibili del lavoro precedente, come organizzazione e gestione dei clienti, contano anche loro.</> },
  { q: "Nel settore IT si può lavorare da remoto fin da subito?", a: <>Qualche volta, ma non è la norma. La maggior parte dei ruoli junior prevede almeno una parte di lavoro in ufficio. Il remoto diventa molto più accessibile dopo il primo periodo di esperienza.</> },
  { q: "Per lavorare da remoto come freelance serve la partita IVA?", a: <>Dipende dal tipo di attività e dalla continuità del lavoro. Prima di iniziare a lavorare in proprio, anche da casa, chiedi a un commercialista qual è la soluzione corretta per la tua situazione.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">I lavori da remoto senza esperienza esistono, ma sono pochi, spesso pagati poco e pieni di truffe. Quelli ben pagati richiedono quasi sempre una competenza specifica e un po' di esperienza.</p>
      </div>
      <P>Cerchi un lavoro da remoto senza esperienza? Allora parto dalla verità, anche se non è quella che trovi nei video "guadagna da casa in pochi click": i lavori da remoto senza esperienza esistono, ma sono pochi, spesso pagati poco e pieni di truffe. I lavori da remoto ben pagati, invece, richiedono quasi sempre una competenza specifica e un po' di esperienza.</P>
      <P>In questa guida trovi cosa esiste davvero, quanto si guadagna, come riconoscere le truffe, dove cercare e, soprattutto, qual è la strada realistica per arrivare a un buon lavoro da casa partendo da zero.</P>

      <H2 id="verita">Lavoro da remoto senza esperienza: la verità in breve</H2>
      <P>Un'azienda che assume da remoto ti dà fiducia senza poterti vedere ogni giorno. Per questo cerca persone che sappiano già lavorare in autonomia e che abbiano competenze dimostrabili. Chi non ha esperienza, di solito, viene assunto in presenza o in modalità ibrida, dove può imparare affiancato dai colleghi.</P>
      <P>Questo non vuol dire che sia impossibile. Vuol dire che le opportunità senza esperienza sono concentrate in pochi tipi di lavoro, spesso semplici e con stipendi bassi. Conoscerle ti evita perdite di tempo e brutte sorprese.</P>

      <H2 id="lavori">I lavori da remoto che puoi fare senza esperienza</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[44rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Lavoro</th><th className="p-3">Cosa serve</th><th className="p-3">Guadagno tipico</th><th className="p-3">Il contro</th></tr></thead>
          <tbody>{lavori.map(([l, s, g, c], i) => (
            <tr key={l} className={i % 2 ? "bg-secondary" : ""}><td className="p-3 font-extrabold">{l}</td><td className="p-3 text-brand-ink/80">{s}</td><td className="p-3 font-semibold text-brand-blue">{g}</td><td className="p-3 text-brand-ink/70">{c}</td></tr>
          ))}</tbody>
        </table>
      </div>
      <P>Alcuni di questi possono essere un buon <strong>lavoro ponte</strong>: ti danno un'entrata mentre ti formi per qualcosa di meglio. Difficilmente, però, diventano una carriera ben pagata.</P>

      <H2 id="truffe">Attenzione alle truffe</H2>
      <P>Il "lavoro da casa senza esperienza" è uno dei campi preferiti dai truffatori. I segnali d'allarme più comuni:</P>
      <div className="mt-6 space-y-3">
        {truffe.map(([t, d]) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><X className="mt-1 h-5 w-5 shrink-0 text-destructive" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>
      <div className="mt-6 flex gap-4 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-6"><ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-brand-yellow-deep" /><p className="font-semibold leading-relaxed">Se hai anche solo un dubbio, fermati e verifica. Meglio perdere un'occasione vera che finire in una truffa.</p></div>

      <H2 id="dove-cercare">Dove cercare offerte di lavoro da remoto senza esperienza</H2>
      <P>Le offerte serie si trovano soprattutto su:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          ["Portali di lavoro", "Usando il filtro \"da remoto\" o \"smart working\"."],
          ["LinkedIn", "Con il filtro \"Da remoto\" nella ricerca delle offerte."],
          ["Siti \"lavora con noi\"", "Delle aziende, soprattutto nel customer service e nell'e-commerce."],
          ["Piattaforme freelance", "Per ripetizioni, traduzioni e piccoli incarichi."],
        ].map(([t, d]) => (
          <div key={t} className="flex gap-3 rounded-2xl border border-border p-5"><Search className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" /><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>
      <P>Leggi sempre bene l'annuncio: molte offerte etichettate come "da remoto" sono in realtà ibride, con qualche giorno in ufficio.</P>

      <H2 id="ben-pagati">Perché i lavori da remoto ben pagati chiedono esperienza</H2>
      <P>I lavori da remoto meglio retribuiti sono quasi tutti nel digitale: sviluppo software, cloud, cybersecurity, dati, marketing digitale, design. Hanno due cose in comune:</P>
      <Bullets items={[
        <>richiedono una <strong>competenza tecnica precisa</strong>, che si impara con studio mirato;</>,
        <>il lavoro da remoto arriva di solito <strong>dopo il primo periodo</strong>, quando l'azienda si fida di te e tu sai lavorare in autonomia.</>,
      ]} />
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <p className="font-blog-display text-2xl font-extrabold">Il remoto ben pagato è una conseguenza di una competenza richiesta, non un punto di partenza.</p>
      </div>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Ti interessa un lavoro digitale con prospettive di remoto?</p>
        <p className="mt-3 text-lg leading-relaxed">Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="ibrido">Il lavoro ibrido: il compromesso che conviene a chi inizia</H2>
      <P>Tra il lavoro in ufficio e quello completamente da remoto c'è una via di mezzo: il lavoro ibrido, con alcuni giorni in sede e altri da casa. Per chi non ha esperienza è spesso la scelta migliore, per tre motivi:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Più offerte", "Ci sono molte più offerte rispetto alle posizioni solo da remoto."],
          ["Impari più in fretta", "Nei giorni in ufficio puoi fare domande e vedere come lavorano i colleghi più esperti."],
          ["Costruisci fiducia", "È esattamente ciò che ti servirà per ottenere più giorni da remoto in futuro."],
        ].map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-3xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>Quando cerchi lavoro, quindi, non filtrare solo le offerte "100% da remoto": includi anche quelle ibride. Sono il trampolino più realistico verso il lavoro da casa.</P>

      <H2 id="strada">La strada realistica: competenza, esperienza, remoto</H2>
      <P>Se il tuo obiettivo è un buon lavoro da casa, il percorso più realistico ha tre tappe:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
        {([
          [GraduationCap, "1. Impara una competenza richiesta", <>Scegli un settore in cui le aziende faticano a trovare persone e in cui le competenze si possono dimostrare. Il cloud è uno di questi: trovi il percorso nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</>],
          [Laptop, "2. Fai il primo anno di esperienza", <>Anche in presenza o in ibrido. È il periodo in cui impari di più e costruisci la fiducia dei colleghi.</>],
          [Sparkles, "3. Punta al remoto", <>Con esperienza e competenze solide, le posizioni da remoto diventano realistiche, e spesso sono anche meglio pagate.</>],
        ] as const).flatMap(([Icon, t, d], i) => {
          const card = <div key={t} className="rounded-2xl border border-border p-5"><Icon className="h-6 w-6 text-brand-blue" /><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>;
          return i < 2 ? [card, <ArrowRight key={`a${i}`} className="mx-auto hidden h-6 w-6 self-center text-brand-blue sm:block" />] : [card];
        })}
      </div>
      <P>Se oggi lavori già, puoi percorrere i primi passi senza lasciare il tuo impiego: ti spiego come nella guida su <A slug="cambiare-lavoro-mentre-lavori">come cambiare lavoro mentre lavori</A>.</P>

      <H2 id="senza-esperienza">Come trovare lavoro senza esperienza</H2>
      <P>Che tu cerchi un lavoro da remoto o in presenza, il problema di fondo è lo stesso: tutti chiedono esperienza, ma nessuno te la fa fare. Ecco come rompere il circolo:</P>
      <div className="mt-6 space-y-3">
        {circolo.map(([t, d], i) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><div><p className="font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>

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
          "I lavori da remoto senza esperienza esistono, ma sono pochi, poco pagati e il settore è pieno di truffe.",
          "Un datore di lavoro serio non ti chiede mai soldi per iniziare.",
          "I lavori da remoto ben pagati richiedono una competenza precisa e, di solito, un po' di esperienza.",
          "La strada realistica è: impara una competenza richiesta, fai esperienza, poi punta al remoto.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi capire se una professione digitale come il cloud fa per te?</p>
        <p className="mt-3 text-lg">Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>
    </div>
  );
}
