import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Capitan Cloud" },
      {
        name: "description",
        content:
          "Informativa sui cookie e tecnologie simili utilizzati sul sito capitancloud.it del Protocollo Supera Esame™.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <main className="bg-white text-brand-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Torna alla homepage
        </Link>

        <h1 className="mt-8 font-display text-4xl font-extrabold sm:text-5xl">Cookie Policy</h1>
        <p className="mt-2 text-sm text-brand-ink/60">Ultimo aggiornamento: 27 settembre 2025</p>

        <div className="mt-10 space-y-8 leading-relaxed text-brand-ink/85">
          <p>
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
            <h3 className="font-bold">Cookie tecnici (sempre attivi)</h3>
            <p>
              Questi cookie sono essenziali per il funzionamento del sito e non possono essere
              disabilitati. Includono cookie per:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Mantenere le tue preferenze sui cookie</li>
              <li>Garantire la sicurezza della navigazione</li>
              <li>Ricordare i dati inseriti nei moduli durante la sessione</li>
              <li>Bilanciare il carico del server</li>
            </ul>

            <h3 className="mt-6 font-bold">Cookie di analisi</h3>
            <p>
              Utilizzati solo con il tuo consenso, questi cookie ci aiutano a comprendere come i
              visitatori interagiscono con il sito, raccogliendo informazioni in forma anonima su:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Numero di visitatori e visualizzazioni di pagina</li>
              <li>Tempo trascorso sul sito</li>
              <li>Pagine più visualizzate</li>
              <li>Sorgenti del traffico</li>
              <li>Dispositivi e browser utilizzati</li>
            </ul>

            <h3 className="mt-6 font-bold">Cookie di marketing/profilazione</h3>
            <p>Con il tuo consenso, utilizziamo questi cookie per:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Mostrarti pubblicità personalizzate su altri siti</li>
              <li>Tracciare le conversioni dalle campagne pubblicitarie</li>
              <li>Creare audience personalizzate per il remarketing</li>
              <li>Misurare l'efficacia delle campagne marketing</li>
            </ul>
          </Section>

          <Section title="Cookie di terze parti">
            <p>Il nostro sito può utilizzare cookie di terze parti per servizi esterni:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-brand-blue/5 text-left">
                    <th className="border border-brand-blue/15 p-3">Servizio</th>
                    <th className="border border-brand-blue/15 p-3">Finalità</th>
                    <th className="border border-brand-blue/15 p-3">Tipo</th>
                    <th className="border border-brand-blue/15 p-3">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-brand-blue/15 p-3">Google Analytics</td>
                    <td className="border border-brand-blue/15 p-3">Analisi del traffico</td>
                    <td className="border border-brand-blue/15 p-3">Analytics</td>
                    <td className="border border-brand-blue/15 p-3">24 mesi</td>
                  </tr>
                  <tr>
                    <td className="border border-brand-blue/15 p-3">Facebook Pixel</td>
                    <td className="border border-brand-blue/15 p-3">Remarketing e conversioni</td>
                    <td className="border border-brand-blue/15 p-3">Marketing</td>
                    <td className="border border-brand-blue/15 p-3">90 giorni</td>
                  </tr>
                  <tr>
                    <td className="border border-brand-blue/15 p-3">Google Ads</td>
                    <td className="border border-brand-blue/15 p-3">Pubblicità personalizzata</td>
                    <td className="border border-brand-blue/15 p-3">Marketing</td>
                    <td className="border border-brand-blue/15 p-3">90 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Gestione dei cookie">
            <p>Puoi gestire le tue preferenze sui cookie in diversi modi:</p>

            <h3 className="font-bold">Banner cookie</h3>
            <p>Al primo accesso al sito, ti viene mostrato un banner che ti permette di:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Accettare tutti i cookie</li>
              <li>Rifiutare i cookie non necessari</li>
              <li>Personalizzare le tue preferenze</li>
            </ul>

            <h3 className="mt-6 font-bold">Impostazioni del browser</h3>
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
          </Section>

          <p className="text-sm text-brand-ink/60">
            Versione: 1.0
            <br />
            Data: 27/09/2025
          </p>
        </div>
      </div>
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
