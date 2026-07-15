import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowRight,
  Play,
  Check,
  X,
  GitBranch,
  Container,
  Cloud,
  Workflow,
  Boxes,
  Activity,
  ShieldCheck,
  Lock,
  Gauge,
  Wallet,
  Users,
  Star,
  MessageCircle,
  ChevronDown,
  Briefcase,
  MessagesSquare,
  FileCheck2,
  Building2,
  Linkedin,
  ListChecks,
  UserRound,
  RefreshCw,
  BadgeCheck,
  Ticket,
  FolderCheck,
  Terminal,
  Network,
  Code2,
  MonitorCog,
  Layers,
} from "lucide-react";
import { useState } from "react";
import percorsoOverviewAsset from "@/assets/percorso-completo-overview.png.asset.json";
import roadmapAsset from "@/assets/roadmap-90-giorni.png.asset.json";
import percorsoCentraleAsset from "@/assets/percorso-centrale.png.asset.json";
import certificazioniAsset from "@/assets/certificazioni-aws.png.asset.json";
import protocolloAsset from "@/assets/protocollo-subito-assunto.png.asset.json";
import percorsiIntegrativiAsset from "@/assets/percorsi-integrativi.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diventa Cloud Engineer in 90 Giorni — Capitan Cloud" },
      {
        name: "description",
        content:
          "Il metodo esclusivo di Eugenio Fontana (Capitan Cloud) per diventare Cloud Engineer in 90 giorni. Percorso completo + 2 certificazioni AWS + Protocollo Subito Assunto!™. 297€ una tantum.",
      },
    ],
  }),
  component: VslPage,
});

const CHECKOUT_URL = "#checkout"; // ← sostituisci con URL Stripe/checkout reale
const PRICE = "297€";

function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="placeholder-note">✎ {children}</span>;
}

function VslPage() {
  return (
    <main className="bg-white text-brand-ink font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <AttentionBlock />
      <InterestOpening />
      <StoryBlock />
      <Comparison />
      <Objections />
      <SocialProof />
      <Reveal />
      <PathOverview />
      <Curriculum />
      <Certifications />
      <ProtocolloSubitoAssunto />
      <PercorsiIntegrativi />
      <PricingCTA />
      <Vision />
      <FAQ />
      <PostScriptum />
      <Footer />
    </main>
  );
}

/* ---------- TOP BAR ---------- */
function DiscordBar() {
  return (
    <div className="w-full bg-brand-indigo text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-2.5 text-sm sm:flex-row sm:text-base">
        <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2.5} />
        <p className="text-center font-semibold">
          🎉 Unisciti GRATIS al canale Discord di Capitan Cloud!
        </p>
        <span className="hidden rounded-full bg-white/15 px-3 py-1 text-xs font-semibold sm:inline-flex">
          <Users className="mr-1.5 inline h-3.5 w-3.5" /> 1500+ membri
        </span>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold uppercase tracking-wide transition hover:bg-white/25"
        >
          ⚡ Entra ora <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#top" className="font-display text-2xl font-extrabold text-brand-blue">
          Capitan Cloud
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#top" className="font-semibold text-brand-blue">
            Home
          </a>
          <a href="#curriculum" className="font-semibold text-brand-ink/80 hover:text-brand-blue">
            Il Percorso
          </a>
          <a href="#faq" className="font-semibold text-brand-ink/80 hover:text-brand-blue">
            FAQ
          </a>
        </nav>
        <a
          href={CHECKOUT_URL}
          className="gradient-cta shadow-cta inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
        >
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">Inizia ora — {PRICE}</span>
          <span className="sm:hidden">Inizia</span>
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="gradient-hero relative overflow-hidden px-4 pb-24 pt-16 text-white">
      {/* Bubbles */}
      <div className="bubble h-40 w-40 left-[8%] top-24 opacity-60" />
      <div className="bubble h-24 w-24 right-[12%] top-40 opacity-50" />
      <div className="bubble h-56 w-56 -right-10 bottom-10 opacity-40" />
      <div className="bubble h-16 w-16 left-[40%] bottom-24 opacity-50" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
          <Sparkles className="h-4 w-4 text-brand-yellow" /> Nuovo percorso 2026 · Posti limitati
        </p>

        <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">
          Diventa Cloud Engineer{" "}
          <span className="gradient-yellow-text">in 90 giorni.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold text-white/90 sm:text-2xl">
          Da zero, senza laurea, anche se oggi fai tutt'altro.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
          Il percorso completo di <strong>Eugenio Fontana (Capitan Cloud)</strong> — oltre{" "}
          <strong>100.000 studenti formati</strong> — con <strong>2 certificazioni AWS</strong>{" "}
          ufficiali e il metodo <strong>Protocollo Subito Assunto!™</strong> che ti accompagna fino
          al colloquio.
        </p>


        {/* VSL video placeholder */}
        <div
          data-vsl-embed="replace-with-youtube-or-vimeo-iframe"
          className="mx-auto mt-12 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-brand-blue-deep/60 shadow-2xl backdrop-blur"
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl">
              <Play className="h-9 w-9 translate-x-0.5 fill-brand-blue text-brand-blue" />
            </div>
            <p className="text-lg font-semibold text-white/90">Guarda il video (2 min)</p>
            <p className="text-sm text-white/60">
              <Placeholder>Sostituisci con embed YouTube/Vimeo</Placeholder>
            </p>
          </div>
        </div>

        <a
          href={CHECKOUT_URL}
          className="gradient-cta shadow-cta mx-auto mt-10 inline-flex w-full max-w-2xl items-center justify-center gap-3 rounded-2xl px-8 py-5 text-base font-bold uppercase tracking-wide text-white transition hover:brightness-110 sm:text-lg"
        >
          <Sparkles className="h-5 w-5" />
          Voglio iniziare — Diventa Cloud Engineer ({PRICE})
        </a>
        <p className="mt-4 text-sm text-white/70">
          Pagamento sicuro · Accesso immediato · Disponibile anche in{" "}
          <Placeholder>rate</Placeholder>
        </p>
      </div>
    </section>
  );
}

/* ---------- ATTENZIONE ---------- */
function AttentionBlock() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
          Per chi ha un lavoro che non odia abbastanza da mollare
        </p>
        <h2 className="font-display text-3xl font-extrabold leading-tight text-brand-ink sm:text-5xl">
          C'è un lavoro che paga bene, si fa da casa e cerca disperatamente persone come te —{" "}
          <span className="text-brand-blue">
            anche senza laurea, anche se inizi da zero a 30 o 40 anni.
          </span>
        </h2>
        <p className="mt-6 text-xl font-semibold text-brand-ink/70">
          Il problema è uno solo: quasi nessuno sa che esiste.
        </p>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-brand-blue/10 bg-secondary p-6 text-left text-base leading-relaxed sm:p-8 sm:text-lg">
          <p>
            Non è vendita porta a porta. Non è un'app da inventare. Non è il sogno gonfiato di un
            influencer. È una <strong>professione concreta e richiestissima</strong>, che migliaia
            di persone normali stanno imparando da adulte per cambiare vita. Tra poco ti dico
            esattamente qual è — ma prima lascia che ti spieghi perché te ne sto parlando proprio a
            te.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- INTERESSE — apertura ---------- */
function InterestOpening() {
  return (
    <section className="relative bg-gradient-to-b from-secondary to-white px-4 py-24">
      <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/85 sm:text-xl">
        <h2 className="mb-8 text-center font-display text-3xl font-extrabold text-brand-ink sm:text-4xl">
          Voglio partire da una sensazione, non da una promessa.
        </h2>
        <p>
          È <strong>domenica sera</strong>. La giornata è ancora tua, ma dentro è già lunedì. Lo
          senti quel peso nello stomaco, perché sai già com'è domani: la stessa sveglia, la stessa
          strada, le stesse facce, le stesse ore che non passano mai.
        </p>
        <p>
          E la cosa peggiore non è nemmeno che il lavoro ti faccia schifo.{" "}
          <strong>È che è fermo.</strong> Lo stipendio è quello, e quello resta. Di crescere non se
          ne parla. E se provi a immaginarti tra cinque anni, vedi esattamente questo — solo con
          un po' più di stanchezza addosso.
        </p>
        <p>
          Ogni tanto il pensiero arriva lo stesso. Quello che scacci subito, perché "tanto è
          inutile": <em>vorrei cambiare</em>. Ma cambiare per fare cosa? Non ho una laurea che
          vale, non ho un'arte tra le mani, e non ho più vent'anni. Le occasioni belle capitano
          agli altri.
        </p>
        <p>
          E poi succede una cosa che ti resta dentro. Incontri qualcuno — un ex compagno di
          scuola, un conoscente, uno che fino a ieri era nella tua identica situazione — e scopri
          che ha cambiato vita. <strong>Lavora da casa. Guadagna bene. Sembra perfino sereno.</strong>{" "}
          E mentre annuisci e fai i complimenti, dentro ti chiedi una cosa sola:
        </p>
        <p className="border-l-4 border-brand-yellow bg-brand-yellow/10 py-4 pl-6 pr-4 text-xl font-semibold italic text-brand-ink">
          "Come diavolo ha fatto? Cos'ha lui che io non ho?"
        </p>
        <p className="text-xl font-semibold text-brand-blue">
          Non ha niente di più di te. Ha solo trovato una porta che tu non sai ancora che esiste. E
          oggi voglio mostrartela.
        </p>
      </div>
    </section>
  );
}

/* ---------- STORIA ---------- */
function StoryBlock() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border-2 border-dashed border-brand-yellow/60 bg-brand-yellow/5 p-8 sm:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-yellow-deep">
            La tua storia
          </p>
          <h2 className="mb-6 font-display text-3xl font-extrabold text-brand-ink sm:text-4xl">
            Anch'io sono stato dove sei tu adesso.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-brand-ink/85">
            <p>
              <Placeholder>
                Racconta qui il tuo punto di partenza in modo che il lettore pensi "era una persona
                come me": il lavoro, la sensazione di essere bloccato, i dubbi.
              </Placeholder>
            </p>
            <p>
              Anch'io ero convinto che il treno fosse passato. Che certe cose fossero roba per
              gente più fortunata, più giovane, più "portata" di me.
            </p>
            <p>
              Poi, un po' per caso, ho scoperto un mondo di cui non sapevo niente. Un settore dove
              le aziende cercano persone e non le trovano. Dove non ti chiedono da che famiglia
              vieni o che voti avevi a scuola, ma una cosa sola:{" "}
              <em>"sai fare questo? Dimostramelo."</em>
            </p>
            <p>
              All'inizio non ci credevo neanch'io. Sembrava troppo bello.{" "}
              <Placeholder>
                Inserisci il momento della svolta e un risultato concreto e onesto.
              </Placeholder>
            </p>
            <p>
              Da allora ho aiutato <strong>oltre 100.000 persone</strong> a fare lo stesso
              percorso. E ti assicuro una cosa:{" "}
              <strong>
                chi ce l'ha fatta non era più sveglio di te. Aveva solo trovato la porta giusta.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPARAZIONE ---------- */
function Comparison() {
  const options = [
    {
      title: "Cambiare azienda",
      desc: "Cambi le facce, ma non cambia niente: stesso ruolo, stesso tetto di stipendio, stessa noia dopo sei mesi.",
      bad: true,
    },
    {
      title: "Tornare a studiare",
      desc: "Anni di tempo e di soldi, e spesso un titolo che sul mercato vale poco. Esci con un pezzo di carta, non con un mestiere richiesto.",
      bad: true,
    },
    {
      title: "Metterti in proprio",
      desc: "Rischio alto, soldi da investire, zero garanzie. Per la maggior parte delle persone non è un'opzione realistica.",
      bad: true,
    },
    {
      title: "La quarta via",
      desc: "Imparare una competenza molto richiesta, in pochi mesi, da casa, che ti rende assumibile in un settore affamato di persone. Senza laurea. Senza capitale.",
      bad: false,
    },
  ];
  return (
    <section className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-extrabold text-brand-ink sm:text-5xl">
            Le tre vie d'uscita che <span className="text-brand-blue">non funzionano</span>
          </h2>
          <p className="mt-4 text-lg text-brand-ink/70">
            E la quarta — quella che quasi nessuno conosce.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {options.map((o) => (
            <div
              key={o.title}
              className={
                o.bad
                  ? "rounded-2xl border border-brand-ink/10 bg-white p-6"
                  : "gradient-cta relative overflow-hidden rounded-2xl p-6 text-white shadow-cta"
              }
            >
              <div
                className={
                  o.bad
                    ? "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink/10 text-brand-ink/60"
                    : "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white"
                }
              >
                {o.bad ? <X className="h-5 w-5" /> : <Check className="h-5 w-5" strokeWidth={3} />}
              </div>
              <h3 className="mb-2 font-display text-xl font-extrabold">{o.title}</h3>
              <p className={o.bad ? "text-sm text-brand-ink/70" : "text-sm text-white/95"}>
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- OBIEZIONI ---------- */
function Objections() {
  const items = [
    {
      q: "\"Io e il computer non andiamo d'accordo.\"",
      a: "Non serve essere un mago del computer. Se sai usare uno smartphone, mandare un'email e seguire istruzioni passo-passo, hai già le basi. Tutto il resto si impara nell'ordine giusto.",
    },
    {
      q: "\"Sono troppo grande, ho 30 o 40 anni.\"",
      a: "È esattamente il contrario. Qui contano affidabilità, maturità, voglia di imparare — tutte cose che a vent'anni non si hanno. Persone che cambiano vita a 35, 40, 45 anni entrano in questo settore ogni giorno. L'età è un vantaggio.",
    },
    {
      q: "\"Senza laurea non mi prenderà nessuno.\"",
      a: "Qui la laurea non è il biglietto d'ingresso. Lo è dimostrare di saper fare la cosa. È uno dei pochi mondi in cui una persona motivata che parte da zero batte un laureato che non sa applicare niente.",
    },
  ];
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center font-display text-3xl font-extrabold text-brand-ink sm:text-5xl">
          Le 3 scuse che ti tengono fermo.{" "}
          <span className="text-brand-blue">Togliamocele di mezzo.</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-brand-blue/10 bg-secondary p-8 transition hover:border-brand-blue/40"
            >
              <p className="mb-4 font-display text-lg font-bold text-brand-blue">{it.q}</p>
              <p className="text-base leading-relaxed text-brand-ink/80">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROVA SOCIALE ---------- */
function SocialProof() {
  return (
    <section className="gradient-hero relative overflow-hidden px-4 py-24 text-white">
      <div className="bubble h-32 w-32 left-[10%] top-10 opacity-40" />
      <div className="bubble h-40 w-40 right-[8%] bottom-16 opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">
            La community di Capitan Cloud
          </p>
          <h2 className="font-display text-4xl font-extrabold sm:text-6xl">
            Oltre <span className="gradient-yellow-text">100.000 persone</span> formate
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Molte partite da zero, proprio come te.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <div className="mb-3 flex gap-1 text-brand-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-yellow" />
                ))}
              </div>
              <p className="mb-4 text-base leading-relaxed text-white/95">
                <Placeholder>
                  Inserisci testimonianza vera n.{n}: "Facevo [vecchio lavoro], zero esperienza.
                  Oggi lavoro come Cloud Engineer, da casa."
                </Placeholder>
              </p>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-white/25" />
                <div>
                  <p className="text-sm font-bold">
                    <Placeholder>Nome Cognome</Placeholder>
                  </p>
                  <p className="text-xs text-white/70">
                    <Placeholder>Ex [lavoro] → Cloud Engineer</Placeholder>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- REVEAL ---------- */
function Reveal() {
  const points = [
    {
      title: "Un lavoro del futuro, già qui",
      desc: "Le aziende ne hanno un bisogno enorme e fanno fatica a trovare persone. Tradotto: stipendi alti e possibilità reale di lavorare da casa.",
    },
    {
      title: "Non è programmazione",
      desc: "Non passi le giornate a scrivere codice. È più simile a costruire e mettere in ordine: logica, soluzioni, problemi da risolvere.",
    },
    {
      title: "Si impara da zero, da adulti",
      desc: "Con il percorso giusto, in circa 90 giorni puoi diventare una figura che le aziende prendono sul serio.",
    },
  ];
  return (
    <section className="bg-white px-4 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-blue">
          Adesso posso dirti qual è questo lavoro
        </p>
        <h2 className="font-display text-5xl font-extrabold leading-none text-brand-ink sm:text-8xl">
          Si chiama <br />
          <span className="gradient-yellow-text">Cloud Engineer.</span>
        </h2>
        <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-brand-ink/80 sm:text-xl">
          Oggi quasi tutte le aziende del mondo tengono i loro dati, i loro siti e i loro
          programmi <em>"nel cloud"</em>: cioè su computer potentissimi a cui si accede via
          internet — quelli di <strong>Amazon (AWS), Microsoft Azure, Google Cloud</strong>.
          Qualcuno deve costruire, sistemare e far funzionare questi sistemi. Quel qualcuno è il{" "}
          <strong>Cloud Engineer</strong>.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl border-2 border-brand-blue/10 bg-secondary p-8 text-left"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-xl font-extrabold text-white">
                {i + 1}
              </div>
              <h3 className="mb-3 font-display text-xl font-extrabold text-brand-ink">
                {p.title}
              </h3>
              <p className="text-base leading-relaxed text-brand-ink/75">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CURRICULUM ---------- */
function Curriculum() {
  const phases = [
    {
      name: "Fondamenta",
      days: "Giorni 1–10",
      desc: "Basi di DevOps, Cloud e il tuo laboratorio pratico (Git, Docker, VM). Si parte da zero.",
    },
    {
      name: "AWS Cloud Practitioner",
      days: "Giorni 11–30",
      desc: "CLF-C02 — 15 giorni di teoria + 5 di simulazioni con il Protocollo Supera Esame!™. La prima certificazione ufficiale.",
    },
    {
      name: "AWS Solutions Architect – Associate",
      days: "Giorni 31–85",
      desc: "SAA-C03 — 40 giorni di teoria + 15 di simulazioni. La certificazione che pesa davvero sul mercato del lavoro cloud.",
    },
    {
      name: "Verso il lavoro",
      days: "Giorni 86–90",
      desc: "Protocollo Subito Assunto!™: portfolio, CV, LinkedIn, colloquio simulato e strategia di candidatura.",
    },
  ];
  const skills = [
    { icon: GitBranch, name: "Git & GitHub", desc: "Branch, merge, pull request, code review." },
    { icon: Container, name: "Docker & Container", desc: "Immagini, volumi, networking, Compose." },
    { icon: Cloud, name: "Terraform & IaC", desc: "Infrastruttura come codice su AWS." },
    { icon: Workflow, name: "CI/CD", desc: "Pipeline con GitHub Actions e AWS native." },
    { icon: Boxes, name: "Kubernetes", desc: "Pod, Deployment, Service, scaling, rollback." },
    { icon: Activity, name: "Monitoring", desc: "Prometheus, Grafana, ELK, alerting." },
    { icon: ShieldCheck, name: "DevSecOps", desc: "SAST/DAST, SonarQube, Snyk, Trivy." },
    { icon: Lock, name: "Cloud Security & IAM", desc: "Ruoli, policy, VPC, crittografia." },
    { icon: Gauge, name: "Reliability & Scaling", desc: "Alta disponibilità, Auto Scaling, SLA." },
    { icon: Wallet, name: "FinOps & Costi", desc: "Cost Explorer, budget, ottimizzazione." },
  ];
  return (
    <section id="curriculum" className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
            Il percorso completo
          </p>
          <h2 className="font-display text-3xl font-extrabold text-brand-ink sm:text-5xl">
            Diventa Cloud Engineer{" "}
            <span className="gradient-yellow-text">in 90 giorni</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-ink/70">
            Un sistema con l'ordine esatto delle cose: cosa imparare, in che sequenza, fino al
            colloquio. Circa 2 ore al giorno.
          </p>
        </div>

        {/* 4 phases */}
        <div className="mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((ph, i) => (
            <div
              key={ph.name}
              className="rounded-2xl border-2 border-brand-blue/10 bg-white p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  {ph.days}
                </span>
              </div>
              <h3 className="mb-2 font-display text-lg font-extrabold text-brand-ink">
                {ph.name}
              </h3>
              <p className="text-sm leading-relaxed text-brand-ink/75">{ph.desc}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <h3 className="mb-6 text-center font-display text-2xl font-extrabold text-brand-ink sm:text-3xl">
          Cosa imparerai davvero — <span className="text-brand-blue">oltre 300 video e centinaia di laboratori</span>
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-brand-blue/10 bg-white p-5 transition hover:border-brand-blue/40 hover:shadow-md"
            >
              <s.icon className="mb-3 h-7 w-7 text-brand-blue" />
              <p className="font-display text-sm font-extrabold text-brand-ink">{s.name}</p>
              <p className="mt-1 text-xs leading-snug text-brand-ink/65">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Method */}
        <div className="mt-16 rounded-3xl bg-brand-blue-deep p-8 text-white sm:p-12">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">
              Il metodo
            </p>
            <h3 className="font-display text-3xl font-extrabold sm:text-4xl">
              Protocollo Subito Assunto!™
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Competenze fondamentali",
                d: "Impari facendo, su un laboratorio reale, gli strumenti che un'azienda si aspetta tu sappia usare.",
              },
              {
                n: "02",
                t: "Certificazioni AWS ufficiali",
                d: "Trasformi ciò che sai in un titolo riconosciuto a livello mondiale — quello che i selezionatori cercano nel CV.",
              },
              {
                n: "03",
                t: "CV, portfolio e colloquio",
                d: "Prepari LinkedIn, portfolio, CV e ti alleni sul colloquio tecnico e comportamentale, con sessione 1-to-1.",
              },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <span className="text-4xl font-extrabold text-brand-yellow">{s.n}</span>
                <h4 className="mt-2 font-display text-lg font-extrabold">{s.t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- PATH OVERVIEW (3 + 1) ---------- */
function PathOverview() {
  const steps = [
    {
      n: "01",
      title: "Percorso Centrale",
      desc: "Diventa Cloud Engineer: 15 moduli pratici da DevOps e Cloud fino a Kubernetes, Security e FinOps.",
      accent: "text-brand-blue",
    },
    {
      n: "02",
      title: "Certificazioni AWS",
      desc: "Ottieni CLF-C02 e SAA-C03 con il Protocollo Supera Esame!™ — video corso, simulatori, validazione cert-ready.",
      accent: "text-brand-yellow-deep",
    },
    {
      n: "03",
      title: "Protocollo Subito Assunto!™",
      desc: "Portfolio, CV, LinkedIn, colloqui, database aziende e sessione 1-to-1 con Capitan Cloud.",
      accent: "text-brand-blue",
    },
    {
      n: "+1",
      title: "Percorsi Integrativi",
      desc: "8 percorsi extra: Claude Code, Networking, Python, Linux & Bash, Windows & PowerShell, Docker, Kubernetes e Terraform.",
      accent: "text-emerald-600",
    },
  ];
  return (
    <section className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
            Un unico percorso. Tutto ciò che serve.
          </p>
          <h2 className="font-display text-3xl font-extrabold text-brand-ink sm:text-5xl">
            Il percorso completo:{" "}
            <span className="gradient-yellow-text">3 step + 1 percorso integrativo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-ink/70">
            Formazione, certificazioni, carriera e competenze: un sistema che tiene tutto insieme, in ordine.
          </p>
        </div>


        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border-2 border-brand-blue/10 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg"
            >
              <span className={`font-display text-4xl font-extrabold ${s.accent}`}>{s.n}</span>
              <h3 className="mt-2 font-display text-lg font-extrabold text-brand-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATIONS ---------- */
function Certifications() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow-deep">
            Step 02 · Le certificazioni ufficiali
          </p>
          <h2 className="font-display text-3xl font-extrabold text-brand-ink sm:text-5xl">
            Due certificazioni AWS.{" "}
            <span className="gradient-yellow-text">Un metodo per superarle.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-ink/70">
            Con il <strong>Protocollo Supera Esame!™</strong> arrivi all'esame preparato davvero:
            video corso completo, simulatore d'esame e validazione cert-ready 1-to-1.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Video Corso Completo",
              d: "Laboratori pratici, spiegazioni exam-focused, tutta la teoria che serve — nessun argomento lasciato a metà.",
            },
            {
              n: "2",
              t: "Simulatore d'Esame",
              d: "Mock test realistici, tempi reali, spiegazioni dettagliate su ogni risposta. Arrivi all'esame senza sorprese.",
            },
            {
              n: "3",
              t: "Validazione Cert-Ready",
              d: "Valutazione personale 1-to-1: quando sei davvero pronto ti diamo il via libera a prenotare l'esame.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border-2 border-brand-yellow/40 bg-brand-yellow/5 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-brand-ink font-extrabold">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-lg font-extrabold text-brand-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-ink/75">
          {["Quiz", "Ebook", "Flashcard Anki", "Guide", "Whitepaper", "Risorse extra"].map((r) => (
            <span
              key={r}
              className="rounded-full border border-brand-yellow/50 bg-brand-yellow/10 px-4 py-1.5"
            >
              {r}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-brand-ink/60">
          ⓘ Il costo degli esami AWS non è incluso (si pagano ad AWS). Ricevi un voucher del{" "}
          <strong>10% di sconto</strong> su ciascun esame.
        </p>
      </div>
    </section>
  );
}

/* ---------- PROTOCOLLO SUBITO ASSUNTO ---------- */
function ProtocolloSubitoAssunto() {
  const items = [
    {
      icon: FolderCheck,
      t: "Portfolio Blindato",
      d: "Progetti reali già pronti da mostrare: infrastrutture su AWS, pipeline CI/CD, deploy su Kubernetes. Non parole — evidenze.",
    },
    {
      icon: MessagesSquare,
      t: "Colloquio Simulator",
      d: "Simulazioni di colloquio tecnico e comportamentale con domande vere, per allenarti prima che conti davvero.",
    },
    {
      icon: FileCheck2,
      t: "AI Agent \"CV Check\"",
      d: "Il tuo CV analizzato da un agente AI addestrato sulle offerte Cloud reali: cosa manca, cosa cambiare, cosa togliere.",
    },
    {
      icon: Building2,
      t: "Database Aziende Italiane",
      d: "Lista aggiornata delle aziende italiane che assumono Cloud Engineer, con come candidarsi in modo mirato.",
    },
    {
      icon: Linkedin,
      t: "Profilo LinkedIn Perfetto",
      d: "Template, keyword e headline per farti trovare dai recruiter Cloud — non un profilo tra tanti.",
    },
    {
      icon: ListChecks,
      t: "Top 50 Domande Colloquio",
      d: "Le domande più frequenti nei colloqui Cloud/DevOps in Italia, con l'approccio giusto per rispondere.",
    },
    {
      icon: UserRound,
      t: "Sessione 1-to-1 con Capitan Cloud",
      d: "Una chiamata personale con Eugenio: revisione CV, LinkedIn, strategia di candidatura, dubbi tecnici.",
    },
    {
      icon: Briefcase,
      t: "Pronto per il Colloquio",
      d: "Checklist finale prima del giorno del colloquio: cosa ripassare, cosa portare, come gestire lo stress.",
    },
    {
      icon: RefreshCw,
      t: "Corso Sempre Aggiornato",
      d: "Il mondo Cloud cambia: aggiorniamo il corso in continuazione. L'accesso resta tuo, gli aggiornamenti anche.",
    },
    {
      icon: BadgeCheck,
      t: "Certificato Verificabile",
      d: "Certificato di completamento con URL verificabile — utile su LinkedIn e nei processi di selezione.",
    },
    {
      icon: Users,
      t: "Accesso alla Community",
      d: "Community privata di studenti e cloud engineer già assunti. Fai domande, condividi progressi, trovi opportunità.",
    },
    {
      icon: Ticket,
      t: "10% di Sconto Esami AWS",
      d: "Voucher ufficiale per pagare meno gli esami CLF-C02 e SAA-C03 direttamente ad AWS.",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-brand-blue-deep to-brand-blue px-4 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">
            Step 03 · Dalla formazione al lavoro
          </p>
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">
            Protocollo <span className="gradient-yellow-text">Subito Assunto!™</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/85">
            Studiare non basta. Serve un <strong>sistema concreto per farsi assumere</strong>:
            portfolio, CV, LinkedIn, colloqui, aziende, community e supporto diretto. Ecco tutto
            quello che è incluso.
          </p>
        </div>


        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.t}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-brand-yellow/60 hover:bg-white/15"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink">
                <it.icon className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-lg font-extrabold">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{it.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg font-semibold text-brand-yellow">
          Non solo competenze. Un sistema concreto per farsi assumere.
        </p>
      </div>
    </section>
  );
}

/* ---------- PERCORSI INTEGRATIVI ---------- */
function PercorsiIntegrativi() {
  const modules = [
    { icon: Sparkles, t: "Claude Code", d: "Usare l'AI per scrivere IaC, script e automazioni Cloud più velocemente." },
    { icon: Network, t: "Networking", d: "TCP/IP, DNS, VPN, subnetting, routing — le basi che ogni Cloud Engineer deve avere." },
    { icon: Code2, t: "Python", d: "Scripting, automazione, boto3 per AWS: il linguaggio numero 1 nel Cloud." },
    { icon: Terminal, t: "Linux & Bash", d: "Shell, permessi, systemd, scripting: il sistema operativo del Cloud." },
    { icon: MonitorCog, t: "Windows & PowerShell", d: "Amministrazione Windows Server e PowerShell per ambienti ibridi." },
    { icon: Container, t: "Docker", d: "Approfondimento container: immagini, volumi, networking, Compose e best practice." },
    { icon: Boxes, t: "Kubernetes", d: "Cluster, Pod, Service, Ingress, Helm — orchestrazione container in produzione." },
    { icon: Layers, t: "Terraform", d: "Infrastructure as Code su AWS: moduli, state, workspace, pipeline." },
  ];
  return (
    <section className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
            +1 · Le competenze fondamentali
          </p>
          <h2 className="font-display text-3xl font-extrabold text-brand-ink sm:text-5xl">
            Percorsi <span className="text-brand-blue">Integrativi</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-brand-ink/70">
            8 percorsi extra inclusi nel prezzo — le competenze trasversali che fanno la
            differenza fra un candidato qualsiasi e un <strong>Cloud Engineer pronto al lavoro</strong>.
          </p>
        </div>

        <div className="mb-12 overflow-hidden rounded-3xl border border-brand-blue/10 bg-white shadow-xl">
          <img
            src={percorsiIntegrativiAsset.url}
            alt="Percorsi integrativi: Claude Code, Networking, Python, Linux & Bash, Windows & PowerShell, Docker, Kubernetes, Terraform"
            className="w-full"
            loading="lazy"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div
              key={m.t}
              className="rounded-2xl border-2 border-brand-blue/10 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <m.icon className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-base font-extrabold text-brand-ink">{m.t}</h3>
              <p className="mt-1.5 text-sm leading-snug text-brand-ink/70">{m.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-base font-semibold text-brand-ink/80">
          8 percorsi · Competenze reali · <span className="text-brand-blue">Preparazione completa</span>
        </p>
      </div>
    </section>
  );
}

/* ---------- PRICING + GUARANTEE + CTA ---------- */
function PricingCTA() {
  return (
    <section id="checkout" className="gradient-hero relative overflow-hidden px-4 py-24 text-white">
      <div className="bubble h-48 w-48 -left-10 top-10 opacity-40" />
      <div className="bubble h-40 w-40 right-[5%] bottom-10 opacity-40" />
      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-3xl bg-white p-8 text-brand-ink shadow-2xl sm:p-12">
          <div className="text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
              Diventa Cloud Engineer in 90 Giorni
            </p>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Il percorso completo + 2 certificazioni AWS + Protocollo Subito Assunto!™
            </h2>
            <div className="my-8 flex items-end justify-center gap-2">
              <span className="font-display text-7xl font-extrabold text-brand-blue sm:text-8xl">
                297€
              </span>
              <span className="pb-3 text-lg text-brand-ink/60">una tantum</span>
            </div>
            <p className="text-sm text-brand-ink/70">
              Accesso incluso, contenuti aggiornati nel tempo. Disponibile anche in{" "}
              <Placeholder>rate</Placeholder>.
            </p>

            <a
              href={CHECKOUT_URL}
              className="gradient-cta shadow-cta mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-5 text-base font-bold uppercase tracking-wide text-white transition hover:brightness-110 sm:text-lg"
            >
              <Sparkles className="h-5 w-5" />
              Voglio iniziare ora
            </a>

            <p className="mt-4 text-xs text-brand-ink/60">
              Pagamento sicuro · Accesso immediato
            </p>
          </div>

          {/* Guarantee */}
          <div className="mt-10 rounded-2xl border-2 border-brand-yellow/40 bg-brand-yellow/10 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-ink">
                <ShieldCheck className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold text-brand-ink">
                  Garanzia "Il rischio me lo prendo io"
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/80">
                  Completa i primi <Placeholder>X</Placeholder> moduli. Se hai fatto la tua parte
                  e non vedi progressi, ti rimborso. Semplice così.
                  <br />
                  <span className="text-xs opacity-70">
                    <Placeholder>
                      Scegli la formula finale (A: 14/30gg soddisfatto o rimborsato · B:
                      condizionata all'azione · C: di risultato) e aggiorna questo testo.
                    </Placeholder>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- VISION ---------- */
function Vision() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-8 font-display text-3xl font-extrabold text-brand-ink sm:text-5xl">
          Immagina la prossima <span className="text-brand-blue">domenica sera</span>.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-brand-ink/85 sm:text-xl">
          <p>
            Ma diversa. <strong>Non più quel peso.</strong> Perché sai che stai costruendo
            qualcosa. Perché ogni giorno ti avvicini a un lavoro che paga di più, che puoi fare da
            casa, di cui andare fiero.
          </p>
          <p>
            Immagina la sera in cui dici a chi ami: <em>"ho trovato la mia strada. Cambio vita."</em>{" "}
            La faccia di chi pensava fosse troppo tardi per te. La prima busta paga che vale il
            doppio di adesso.
          </p>
          <p className="pt-4 font-display text-2xl font-extrabold text-brand-blue">
            Quel "te" di oggi che la domenica sera ci sta male — tra 90 giorni può essere solo un
            ricordo.
          </p>
        </div>
        <a
          href={CHECKOUT_URL}
          className="gradient-cta shadow-cta mt-10 inline-flex items-center gap-3 rounded-2xl px-8 py-5 text-base font-bold uppercase tracking-wide text-white transition hover:brightness-110 sm:text-lg"
        >
          <Sparkles className="h-5 w-5" />
          Inizia ora — {PRICE}
        </a>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "Devo saper programmare?",
      a: "No. Il percorso parte dalle basi assolute. Vedrai un po' di codice, ma il Cloud Engineering non è sviluppo software: si tratta di configurare, automatizzare e mettere in sicurezza infrastrutture.",
    },
    {
      q: "Serve una laurea o un titolo tecnico?",
      a: "No. Contano le competenze pratiche e le certificazioni ufficiali, non il pezzo di carta. È uno dei motivi per cui questo settore è così accessibile a chi cambia carriera.",
    },
    {
      q: "Non ho tempo, lavoro tutto il giorno.",
      a: "Il percorso è pensato per chi ha già una vita: bastano circa 2 ore al giorno, con i tuoi tempi. Nessuna scadenza imposta, l'accesso resta tuo.",
    },
    {
      q: "Funziona su Windows e Mac?",
      a: "Sì. I laboratori sono guidati passo-passo su entrambi i sistemi.",
    },
    {
      q: "Il costo degli esami è incluso nei 297€?",
      a: "No. Il prezzo copre il percorso completo, i corsi e tutti i materiali. Gli esami di certificazione si pagano separatamente ad AWS, ma ricevi un voucher con il 10% di sconto su ciascuno.",
    },
    {
      q: "E se non ci capisco niente?",
      a: "Si parte dal vero zero, con supporto e community. Non resti mai bloccato da solo davanti a un dubbio o a un errore.",
    },
    {
      q: "Funziona davvero o è l'ennesima promessa?",
      a: "Per questo c'è la garanzia: il rischio me lo prendo io, non tu. Se segui il metodo e non ottieni risultati, ti rimborso.",
    },
    {
      q: "Perché pagare, se su internet c'è tutto gratis?",
      a: "Su internet c'è tutto, ma in disordine: è proprio quello che ti ha bloccato finora. Qui paghi l'ordine giusto e il tempo che risparmi — mesi, non giorni.",
    },
    {
      q: "Mi garantite il lavoro?",
      a: "No, e diffida di chi lo promette. Ti diamo tutto ciò che serve per diventare un candidato credibile: competenze pratiche, due certificazioni AWS, un portfolio reale e un metodo per candidarti. Il resto dipende dal tuo impegno — ma parti con un vantaggio enorme.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center font-display text-3xl font-extrabold text-brand-ink sm:text-5xl">
          Domande <span className="text-brand-blue">frequenti</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border-2 border-brand-blue/10 bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-brand-blue/5"
              >
                <span className="font-display text-base font-extrabold text-brand-ink sm:text-lg">
                  {f.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-blue transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-brand-blue/10 px-6 py-5 text-base leading-relaxed text-brand-ink/80">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- P.S. ---------- */
function PostScriptum() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-brand-ink/85">
        <p>
          <strong className="font-display text-brand-blue">P.S.</strong> Oggi hai scoperto che
          esiste una via d'uscita reale dal lavoro che ti pesa. La maggior parte delle persone,
          arrivata fin qui, chiude la pagina e torna alla vita di prima — non perché non può, ma
          perché non decide. Tu sei arrivato in fondo: una parte di te ha già capito che si può.
          <strong> Ascoltala.</strong>{" "}
          <a
            href={CHECKOUT_URL}
            className="font-bold text-brand-blue underline decoration-brand-yellow decoration-2 underline-offset-4"
          >
            👉 Inizia ora
          </a>
          .
        </p>
        <p>
          <strong className="font-display text-brand-blue">P.P.S.</strong>{" "}
          <Placeholder>
            Se hai scarsità vera: "Ricorda che [bonus/prezzo] vale solo fino a [data/posti]."
          </Placeholder>
        </p>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-brand-ink px-4 py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p className="font-display text-lg font-extrabold text-white">Capitan Cloud</p>
        <p>© {new Date().getFullYear()} Capitan Cloud — Eugenio Fontana. Tutti i diritti riservati.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Termini
          </a>
        </div>
      </div>
    </footer>
  );
}
