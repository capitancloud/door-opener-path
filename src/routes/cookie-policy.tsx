import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Cookie } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { CookieBanner } from "@/components/CookieBanner";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Capitan Cloud" },
      {
        name: "description",
        content:
          "Informativa sui cookie e tecnologie simili utilizzati sul sito capitancloud.it di Capitan Cloud.",
      },
      { property: "og:title", content: "Cookie Policy — Capitan Cloud" },
      {
        property: "og:description",
        content: "Cookie policy di Capitan Cloud — Eugenio Fontana.",
      },
      { property: "og:url", content: "/cookie-policy" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <main className="bg-white text-brand-ink font-sans overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden px-4 py-16 text-white sm:py-20">
        <div className="bubble h-40 w-40 -left-8 top-6 opacity-40" />
        <div className="bubble h-32 w-32 right-[8%] bottom-4 opacity-40" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            <Cookie className="h-4 w-4" />
            Documento legale
          </div>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Cookie Policy</h1>
          <p className="mt-3 text-sm text-white/80">Ultimo aggiornamento: 27 settembre 2025</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Torna alla homepage
        </Link>

        <div className="mt-10 space-y-10 leading-relaxed text-brand-ink/85">
          <p className="rounded-2xl border-l-4 border-brand-blue bg-brand-blue/5 p-5 text-base">
            Questa Cookie Policy illustra come utilizziamo i cookie e tecnologie simili sul sito
            capitancloud.it (il "Sito") del <strong>Protocollo Supera Esame™</strong>.
          </p>

          <Section title="Cosa sono i cookie">
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo
              quando visiti un sito web. Ci aiutano a rendere il sito più funzionale e a migliorare
              la tua esperienza di navigazione.
            </p>
          </Section>

          <Section title="Tipi di cookie utilizzati">
            <div className="space-y-6">
              <div className="rounded-2xl border-2 border-emerald-500/20 bg-emerald-50/40 p-5">
                <h3 className="font-display text-lg font-extrabold text-emerald-700">
                  Cookie tecnici (sempre attivi)
                </h3>
                <p className="mt-2">
                  Essenziali per il funzionamento del sito e non possono essere disabilitati.
                  Includono cookie per:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Mantenere le tue preferenze sui cookie</li>
                  <li>Garantire la sicurezza della navigazione</li>
                  <li>Ricordare i dati inseriti nei moduli durante la sessione</li>
                  <li>Bilanciare il carico del server</li>
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-brand-blue/20 bg-brand-blue/5 p-5">
                <h3 className="font-display text-lg font-extrabold text-brand-blue">
                  Cookie di analisi
                </h3>
                <p className="mt-2">
                  Utilizzati solo con il tuo consenso, ci aiutano a comprendere come i visitatori
                  interagiscono con il sito, in forma anonima:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Numero di visitatori e visualizzazioni di pagina</li>
                  <li>Tempo trascorso sul sito</li>
                  <li>Pagine più visualizzate</li>
                  <li>Sorgenti del traffico</li>
                  <li>Dispositivi e browser utilizzati</li>
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-brand-yellow/40 bg-brand-yellow/10 p-5">
                <h3 className="font-display text-lg font-extrabold text-brand-yellow-deep">
                  Cookie di marketing/profilazione
                </h3>
                <p className="mt-2">Con il tuo consenso, li utilizziamo per:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>Mostrarti pubblicità personalizzate su altri siti</li>
                  <li>Tracciare le conversioni dalle campagne pubblicitarie</li>
                  <li>Creare audience personalizzate per il remarketing</li>
                  <li>Misurare l'efficacia delle campagne marketing</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Cookie di terze parti">
            <p>Il nostro sito può utilizzare cookie di terze parti per servizi esterni:</p>
            <div className="overflow-x-auto rounded-2xl border border-brand-blue/15">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-brand-blue/5 text-left">
                    <th className="border-b border-brand-blue/15 p-3">Servizio</th>
                    <th className="border-b border-brand-blue/15 p-3">Finalità</th>
                    <th className="border-b border-brand-blue/15 p-3">Tipo</th>
                    <th className="border-b border-brand-blue/15 p-3">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Google Analytics", "Analisi del traffico", "Analytics", "24 mesi"],
                    ["Facebook Pixel", "Remarketing e conversioni", "Marketing", "90 giorni"],
                    ["Google Ads", "Pubblicità personalizzata", "Marketing", "90 giorni"],
                  ].map((row, i) => (
                    <tr key={i} className="odd:bg-white even:bg-brand-blue/[0.02]">
                      {row.map((cell, j) => (
                        <td key={j} className="border-t border-brand-blue/10 p-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Gestione dei cookie">
            <p>Puoi gestire le tue preferenze sui cookie in diversi modi:</p>

            <h3 className="font-display text-lg font-extrabold text-brand-ink">Banner cookie</h3>
            <p>Al primo accesso al sito, ti viene mostrato un banner che ti permette di:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Accettare tutti i cookie</li>
              <li>Rifiutare i cookie non necessari</li>
              <li>Personalizzare le tue preferenze</li>
            </ul>

            <h3 className="mt-4 font-display text-lg font-extrabold text-brand-ink">
              Impostazioni del browser
            </h3>
            <p>Puoi anche gestire i cookie attraverso le impostazioni del tuo browser:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li>Firefox: Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web</li>
              <li>Safari: Preferenze → Privacy → Gestisci dati siti web</li>
              <li>Edge: Impostazioni → Privacy, ricerca e servizi → Cookie</li>
            </ul>
            <p className="text-sm italic text-brand-ink/70">
              Nota: Disabilitare i cookie tecnici potrebbe compromettere il funzionamento del sito.
            </p>
          </Section>

          <Section title="Opt-out dai cookie di terze parti">
            <p>Puoi disattivare i cookie di terze parti direttamente sui loro siti:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <a
                  className="text-brand-blue underline"
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Analytics Opt-out
                </a>
              </li>
              <li>
                <a
                  className="text-brand-blue underline"
                  href="https://www.facebook.com/settings?tab=ads"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook - Impostazioni pubblicitarie
                </a>
              </li>
              <li>
                <a
                  className="text-brand-blue underline"
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Ads - Impostazioni annunci
                </a>
              </li>
            </ul>
          </Section>

          <Section title="Modifiche alla Cookie Policy">
            <p>
              Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Le
              modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo
              aggiornamento.
            </p>
          </Section>

          <Section title="Contatti">
            <div className="rounded-2xl border-2 border-brand-blue/15 bg-brand-blue/5 p-5">
              <p>
                Per domande o chiarimenti sui cookie utilizzati:
                <br />
                Email:{" "}
                <a className="text-brand-blue underline" href="mailto:ilcapitancloud@gmail.com">
                  ilcapitancloud@gmail.com
                </a>
                <br />
                Titolare: Eugenio Carlo Fontana
                <br />
                Indirizzo: Via Borgo Baldassarre Paoli 53, 50022, Greve in Chianti (FI) - Italia
              </p>
            </div>
          </Section>

          <p className="text-sm text-brand-ink/60">
            Versione: 1.0
            <br />
            Data: 27/09/2025
          </p>
        </div>
      </div>

      <SiteFooter />
      <CookieBanner />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-2xl font-extrabold text-brand-ink">{title}</h2>
      {children}
    </section>
  );
}
