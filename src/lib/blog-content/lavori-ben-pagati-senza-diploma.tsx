import { HelpCircle, Lightbulb, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const QUIZ = "https://quiz.capitancloud.it/";

export const toc = [
  { id: "risposta", label: "La risposta onesta" },
  { id: "opzioni", label: "Le 7 opzioni principali" },
  { id: "confronto", label: "Il confronto in sintesi" },
  { id: "in-comune", label: "Cosa hanno in comune" },
  { id: "it", label: "E il settore informatico?" },
  { id: "diploma", label: "Recuperare il diploma" },
  { id: "scegliere", label: "Come scegliere" },
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

const lavori: [string, string][] = [
  ["Autista di camion", "Serve la patente C o CE e la CQC, la carta di qualificazione del conducente. Non serve il diploma, e molte aziende di trasporto cercano personale di continuo. Il guadagno cresce con le trasferte, soprattutto internazionali. Il prezzo da pagare sono tanti giorni lontano da casa."],
  ["Saldatore specializzato", "Si accede con un corso e un patentino per le tecniche di saldatura richieste. È uno dei mestieri tecnici meglio pagati senza titolo di studio, soprattutto nei cantieri navali, negli impianti industriali e nelle trasferte all'estero."],
  ["Elettricista o idraulico", "Si impara con corsi di formazione professionale o in apprendistato. Da dipendente lo stipendio è nella media, ma in proprio, con un buon giro di clienti, si guadagna molto di più. Per alcune attività, come firmare le certificazioni degli impianti, la legge richiede requisiti tecnico-professionali specifici."],
  ["Installatore di impianti fotovoltaici e tecnici", "La transizione energetica ha fatto crescere la richiesta di installatori di pannelli solari, pompe di calore e impianti di climatizzazione. Si entra con corsi specifici e spesso con l'affiancamento in azienda."],
  ["Operatore di macchine CNC", "Programma e gestisce macchinari a controllo numerico nelle aziende meccaniche. Con qualche anno di esperienza, i tecnici più bravi sono molto richiesti e ben pagati."],
  ["Cuoco", "Si parte spesso dal basso, con stipendi contenuti e orari pesanti. Ma chi cresce, soprattutto nella ristorazione di livello o all'estero, può arrivare a guadagni interessanti."],
  ["Agente di commercio e vendita", "Il guadagno dipende quasi tutto dalle provvigioni: chi sa vendere può guadagnare molto, chi no fatica. Per l'iscrizione come agente servono requisiti professionali, che si possono ottenere anche con un corso abilitante."],
];

const confronto: [string, string, string, string][] = [
  ["Autista di camion", "Patente C/CE e CQC", "3–6 mesi", "Sì"],
  ["Saldatore specializzato", "Corso e patentino", "6–12 mesi", "Sì"],
  ["Elettricista / idraulico", "Formazione professionale o apprendistato", "1–3 anni", "Sì"],
  ["Installatore impianti", "Corsi specifici e affiancamento", "Alcuni mesi", "Sì"],
  ["Operatore CNC", "Corso e pratica in azienda", "6–12 mesi", "In parte"],
  ["Cuoco", "Qualifica o esperienza in cucina", "Variabile", "Sì"],
  ["Agente di commercio", "Requisiti professionali, anche tramite corso", "Da subito", "No"],
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "Quali sono i lavori più pagati senza diploma?", a: <>Dipende da zona ed esperienza. Tra i dipendenti, saldatori specializzati e autisti con trasferte internazionali sono spesso tra i più pagati. Tra gli autonomi, artigiani affermati e agenti di commercio bravi possono guadagnare di più, ma con molta più incertezza.</> },
  { q: "Si può lavorare nell'informatica senza diploma?", a: <>Sì, ma è più difficile. Le certificazioni tecniche non richiedono titoli di studio, ma alcune aziende usano il diploma come filtro. Servono certificazioni, progetti pratici e un <A slug="cv-senza-esperienza">CV solido</A>.</> },
  { q: "Le qualifiche professionali regionali valgono?", a: <>Sì. Sono titoli riconosciuti per molti mestieri tecnici e artigianali, e in alcuni casi sono il requisito per lavorare in un settore.</> },
  { q: "Posso prendere il diploma da adulto?", a: <>Sì, con i corsi serali o i percorsi dei CPIA. Si può fare anche lavorando, con tempi e impegno che dipendono dal punto di partenza.</> },
];

export function ArticleBody() {
  return (
    <div>
      <div className="rounded-3xl border border-brand-blue/15 bg-secondary p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-blue"><Lightbulb className="h-4 w-4" /> In breve</p>
        <p className="mt-3 text-lg font-semibold leading-relaxed">Sì, esistono, ma quasi mai sono "facili": richiedono una competenza precisa, spesso certificata da patente, patentino o qualifica, e a volte fatica fisica o qualche rischio in più.</p>
      </div>
      <P>Esistono lavori ben pagati senza diploma? Sì, ma quasi mai sono "facili". I lavori senza diploma ben pagati hanno una cosa in comune: richiedono una competenza specifica, spesso certificata da una patente, un patentino o una qualifica professionale, e a volte un lavoro fisicamente impegnativo o qualche rischio in più.</P>
      <P>In questa guida trovi i lavori senza diploma ben pagati che esistono davvero in Italia, cosa serve per accedervi, da cosa dipende il guadagno e cosa conviene valutare prima di scegliere. Se invece hai il diploma ma non la laurea, trovi più opzioni nella guida sui <A slug="lavori-ben-pagati-senza-laurea">lavori ben pagati senza laurea</A>.</P>

      <H2 id="risposta">Senza diploma si può guadagnare bene? La risposta onesta</H2>
      <P>Il diploma di scuola superiore resta un requisito formale per molti lavori, soprattutto negli uffici e nel settore pubblico. Senza, alcune porte sono chiuse. Ma in molti mestieri contano di più altre cose: una patente professionale, un patentino, una qualifica regionale o semplicemente il saper fare bene un lavoro che poche persone sanno fare.</P>
      <div className="mt-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 font-semibold leading-relaxed">È in questi mestieri che si trovano le opportunità migliori. Spesso sono settori che faticano a trovare personale, e per questo pagano bene chi è preparato.</div>

      <H2 id="opzioni">Lavori senza diploma ben pagati: le 7 opzioni principali</H2>
      <div className="mt-6 space-y-3">
        {lavori.map(([t, d], i) => (
          <div key={t} className="flex gap-4 rounded-2xl border border-border p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue font-blog-display text-lg font-extrabold text-primary-foreground">{i + 1}</span>
            <div><p className="text-lg font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
          </div>
        ))}
      </div>

      <H2 id="confronto">Il confronto in sintesi</H2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[40rem] text-left text-sm sm:text-base">
          <thead className="bg-brand-blue text-primary-foreground"><tr><th className="p-3">Lavoro</th><th className="p-3">Cosa serve</th><th className="p-3">Tempo per entrare</th><th className="p-3">Lavoro fisico</th></tr></thead>
          <tbody>{confronto.map(([l, s, t, f], i) => (
            <tr key={l} className={i % 2 ? "bg-secondary" : ""}>
              <td className="p-3 font-extrabold">{l}</td><td className="p-3 text-brand-ink/80">{s}</td><td className="p-3 font-semibold text-brand-blue">{t}</td>
              <td className="p-3"><span className={`inline-block rounded-full px-2.5 py-1 text-xs font-extrabold ${f === "No" ? "bg-brand-blue/10 text-brand-blue" : f === "Sì" ? "bg-brand-yellow/30 text-brand-ink" : "bg-secondary text-brand-ink"}`}>{f}</span></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="mt-6 rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-5 leading-relaxed">Le cifre di guadagno variano molto per zona, azienda ed esperienza, per questo non le ho messe in tabella: prima di scegliere, confronta gli annunci reali della tua zona.</div>

      <H2 id="in-comune">Cosa hanno in comune questi lavori</H2>
      <P>Guardandoli insieme, emerge uno schema chiaro:</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["Pagano una competenza", "Precisa, non un titolo di studio."],
          ["La competenza si certifica", "Patente, patentino, qualifica, abilitazione."],
          ["C'è quasi sempre un prezzo", "Fatica fisica, trasferte, orari pesanti o guadagno incerto."],
        ].map(([t, d], i) => (
          <div key={t} className="rounded-2xl border border-border p-5"><span className="font-blog-display text-3xl font-extrabold text-brand-blue">0{i + 1}</span><p className="mt-2 font-extrabold">{t}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div>
        ))}
      </div>
      <P>La scelta giusta è quella in cui il prezzo da pagare è sostenibile per te, oggi e tra vent'anni.</P>
      <div className="mt-10 rounded-3xl border border-brand-yellow/50 bg-brand-yellow/15 p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand-yellow-deep"><HelpCircle className="h-4 w-4" /> Ti incuriosisce un lavoro tecnico senza fatica fisica?</p>
        <p className="mt-3 text-lg leading-relaxed">Fai il quiz gratuito di 2 minuti: 9 domande per capire se hai la predisposizione giusta per un lavoro nel cloud.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>

      <H2 id="it">E il settore informatico?</H2>
      <P>Nel mondo IT le certificazioni tecniche, come quelle <A slug="certificazioni-aws">AWS</A>, non richiedono alcun titolo di studio: chiunque può sostenere l'esame. E le competenze si possono dimostrare con progetti pratici visibili a tutti.</P>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-5"><p className="font-extrabold">Alcune aziende ti escluderanno</p><p className="mt-1 leading-relaxed text-brand-ink/80">Usano il diploma come filtro automatico nelle selezioni.</p></div>
        <div className="rounded-2xl border border-brand-blue/25 bg-brand-blue/5 p-5"><p className="font-extrabold">Altre guardano a cosa sai fare</p><p className="mt-1 leading-relaxed text-brand-ink/80">Soprattutto le realtà più piccole e quelle che faticano a trovare personale.</p></div>
      </div>
      <P>In pratica, nell'IT senza diploma si può entrare, ma serve un profilo più solido del solito: certificazioni, portfolio e una buona preparazione al colloquio. Trovi il percorso nella guida su <A slug="come-diventare-cloud-engineer">come diventare cloud engineer</A>.</P>

      <H2 id="diploma">Recuperare il diploma da adulti: conviene?</H2>
      <P>Se hai lasciato la scuola, sappi che il diploma si può prendere anche da adulti, per esempio con i corsi serali degli istituti superiori o con i percorsi dei CPIA, i centri per l'istruzione degli adulti. Richiede tempo e costanza, ma allarga molto le opportunità, sia nel privato che nei concorsi pubblici.</P>
      <P>Non è un'alternativa ai mestieri elencati sopra: puoi farlo in parallelo, mentre lavori o ti formi in un nuovo settore.</P>

      <H2 id="scegliere">Come scegliere la strada giusta</H2>
      <P>Tre domande pratiche ti aiutano a decidere:</P>
      <div className="mt-6 space-y-3">
        {[
          ["Il tuo fisico reggerà questo lavoro tra 20 anni?", "Molti mestieri ben pagati sono usuranti."],
          ["Quanto rischio economico puoi permetterti?", "Lavorare in proprio o a provvigione rende di più, ma senza stipendio fisso."],
          ["Quanto tempo puoi dedicare alla formazione?", "Alcuni percorsi richiedono mesi, altri anni."],
        ].map(([q, d], i) => (
          <div key={q} className="flex gap-4 rounded-2xl border border-border p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-extrabold text-primary-foreground">{i + 1}</span><div><p className="font-extrabold">{q}</p><p className="mt-1 leading-relaxed text-brand-ink/80">{d}</p></div></div>
        ))}
      </div>
      <P>Se ti senti bloccato e non sai da dove partire, leggi la guida <A slug="voglio-cambiare-lavoro">voglio cambiare lavoro ma non so cosa fare</A>.</P>

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
          "I lavori ben pagati senza diploma esistono, soprattutto nei mestieri tecnici specializzati.",
          "Pagano una competenza precisa, certificata con patenti, patentini o qualifiche.",
          "Hanno quasi sempre un prezzo: fatica fisica, trasferte o guadagno incerto.",
          "Nell'IT si può entrare anche senza diploma, ma serve un profilo più solido del solito.",
          "Il diploma si può recuperare anche da adulti, in parallelo al lavoro.",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl bg-secondary px-4 py-3 font-semibold"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm text-primary-foreground">{i + 1}</span>{t}</li>
        ))}
      </ul>
      <div className="mt-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
        <Sparkles className="h-6 w-6 text-brand-blue" />
        <p className="mt-3 font-blog-display text-2xl font-extrabold">Vuoi capire se un lavoro tecnico nel cloud fa per te?</p>
        <p className="mt-3 text-lg">Fai il quiz gratuito di 2 minuti prima di investire tempo o soldi.</p>
        <a href={QUIZ} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-brand-yellow px-5 py-3 font-extrabold text-brand-ink">Fai il quiz gratuito</a>
      </div>
    </div>
  );
}
