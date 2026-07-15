import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { CookieBanner } from "@/components/CookieBanner";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Capitan Cloud" },
      {
        name: "description",
        content:
          "Informativa sul trattamento dei dati personali del sito capitancloud.it di Capitan Cloud (Eugenio Fontana).",
      },
      { property: "og:title", content: "Privacy Policy — Capitan Cloud" },
      {
        property: "og:description",
        content: "Informativa privacy di Capitan Cloud — Eugenio Fontana.",
      },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="bg-white text-brand-ink font-sans overflow-x-hidden">
      <SiteHeader />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden px-4 py-16 text-white sm:py-20">
        <div className="bubble h-40 w-40 -left-8 top-6 opacity-40" />
        <div className="bubble h-32 w-32 right-[8%] bottom-4 opacity-40" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Documento legale
          </div>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
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

        <div className="mt-10 space-y-10 text-brand-ink/85 leading-relaxed">
          <p className="rounded-2xl border-l-4 border-brand-blue bg-brand-blue/5 p-5 text-base">
            Questa informativa descrive come vengono trattati i dati personali quando visiti il
            sito <strong>capitancloud.it</strong> di <strong>Capitan Cloud</strong> e, in generale,
            quando interagisci con i nostri contenuti, effettui un acquisto, ti iscrivi a
            comunicazioni o prenoti una sessione 1-to-1.
          </p>

          <Section title="1) Titolare del trattamento">
            <p>
              <strong>Eugenio Carlo Fontana</strong>
              <br />
              Via Borgo Baldassarre Paoli 53, 50022, Greve in Chianti (FI) – Italia
              <br />
              P. IVA: 07097370485 – C.F.: FNTGCR88B12A564Z
              <br />
              Email privacy (contatti e diritti):{" "}
              <a className="text-brand-blue underline" href="mailto:ilcapitancloud@gmail.com">
                ilcapitancloud@gmail.com
              </a>
              <br />
              PEC (se disponibile): —
            </p>
            <p>
              Il Titolare può essere contattato per qualsiasi richiesta relativa al trattamento dei
              dati personali e all'esercizio dei diritti indicati nella presente informativa.
            </p>
          </Section>

          <Section title="2) Ambito di applicazione">
            <p>Questa informativa si applica alle seguenti attività:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Navigazione del sito/landing page capitancloud.it (di seguito, "Sito").</li>
              <li>Richiesta di informazioni e contatti (moduli, email, chat).</li>
              <li>
                Acquisto del Protocollo Supera Esame™ (pagamento una tantum per singola
                certificazione).
              </li>
              <li>Accesso a materiali didattici (video, PDF) e simulazioni d'esame.</li>
              <li>Prenotazione e svolgimento di sessioni Cert-Ready 1-to-1 da remoto.</li>
              <li>Iscrizione a newsletter e comunicazioni promozionali (se presenti).</li>
              <li>Utilizzo di cookie e strumenti analoghi (vedi § 8 e Cookie Policy dedicata).</li>
            </ul>
          </Section>

          <Section title="3) Tipologie di dati trattati">
            <h3 className="font-display text-lg font-extrabold text-brand-ink">
              a) Dati di navigazione e tecnici
            </h3>
            <p>
              Indirizzo IP, identificativi del dispositivo, log di server, URI/URL delle risorse
              richieste, orario della richiesta, metodo utilizzato nel sottoporre la richiesta al
              server, dimensione del file ottenuto in risposta, codice numerico indicante lo stato
              della risposta, dati relativi al browser e sistema operativo, preferenze lingua, area
              geografica approssimativa.
            </p>
            <h3 className="font-display text-lg font-extrabold text-brand-ink">
              b) Dati comunicati dall'utente
            </h3>
            <p>
              Nome e cognome, email, numero di telefono (se fornito), eventuali informazioni
              inserite nei campi liberi dei moduli o comunicate via email/chat.
            </p>
            <h3 className="font-display text-lg font-extrabold text-brand-ink">
              c) Dati per acquisti e fatturazione
            </h3>
            <p>
              Dati anagrafici/di contatto necessari all'emissione dei documenti fiscali; dettagli di
              pagamento non sono trattati direttamente dal Titolare se si utilizzano gateway terzi
              (es. Stripe/PayPal): in tal caso il fornitore di pagamento agisce come autonomo
              titolare o responsabile del trattamento.
            </p>
            <h3 className="font-display text-lg font-extrabold text-brand-ink">
              d) Dati per erogazione del servizio
            </h3>
            <p>
              Dati necessari a fornire l'accesso a video, PDF, simulatori, e a svolgere la sessione
              Cert-Ready (agenda, account per videoconferenza, eventuali appunti/valutazioni
              tecniche).
            </p>
            <h3 className="font-display text-lg font-extrabold text-brand-ink">
              e) Dati per marketing e newsletter (solo previo consenso)
            </h3>
            <p>
              Email e preferenze, eventi di apertura/click (se utilizziamo piattaforme email),
              eventuali pixel/identificatori nei limiti della normativa.
            </p>
            <h3 className="font-display text-lg font-extrabold text-brand-ink">
              f) Cookie e strumenti di tracciamento
            </h3>
            <p>Vedi § 8 e la Cookie Policy.</p>
          </Section>

          <Section title="4) Finalità, basi giuridiche e tempi di conservazione">
            <div className="overflow-x-auto rounded-2xl border border-brand-blue/15">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-brand-blue/5 text-left">
                    <th className="border-b border-brand-blue/15 p-3">Finalità</th>
                    <th className="border-b border-brand-blue/15 p-3">
                      Base giuridica (art. 6 GDPR)
                    </th>
                    <th className="border-b border-brand-blue/15 p-3">Conservazione</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  {[
                    [
                      "Navigazione del Sito, sicurezza, prevenzione abusi, misure tecniche (log)",
                      "Legittimo interesse del Titolare (art. 6.1.f)",
                      "Log di sicurezza: fino a 12 mesi (salvo necessità per accertamento di reati).",
                    ],
                    [
                      "Gestione contatti e richieste di informazioni",
                      "Esecuzione di misure precontrattuali o contrattuali (art. 6.1.b)",
                      "Tempo necessario a rispondere + 12 mesi per storico richieste.",
                    ],
                    [
                      "Vendita del Protocollo Supera Esame™, assistenza, fatturazione",
                      "Esecuzione del contratto (art. 6.1.b) e obbligo legale (art. 6.1.c)",
                      "Dati amministrativo-contabili: fino a 10 anni (obblighi di legge).",
                    ],
                    [
                      "Erogazione contenuti (video, PDF, simulatore) e sessione Cert-Ready",
                      "Esecuzione del contratto (art. 6.1.b)",
                      "Per tutta la durata del servizio + 24 mesi per tutela in caso di controversie.",
                    ],
                    [
                      "Newsletter e marketing diretto via email",
                      "Consenso (art. 6.1.a)",
                      "Fino a revoca del consenso; in ogni caso revisione ogni 24 mesi.",
                    ],
                    [
                      "Statistiche e analytics non tecnici",
                      "Consenso (art. 6.1.a)",
                      "14–26 mesi, secondo impostazioni dello strumento.",
                    ],
                    [
                      "Tutela giudiziaria e gestione del contenzioso",
                      "Legittimo interesse (art. 6.1.f)",
                      "Per il tempo necessario alla difesa dei diritti.",
                    ],
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
            <p className="text-sm">
              <strong>Note:</strong>
              <br />• Il conferimento dei dati per finalità contrattuali/legali è necessario; il
              mancato conferimento impedisce l'erogazione del servizio.
              <br />• Per marketing e analytics non tecnici il conferimento è facoltativo e basato
              su consenso tramite banner/cookie center.
            </p>
          </Section>

          <Section title="10) Diritti degli interessati">
            <p>Hai diritto di:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Accedere ai dati personali e ottenerne copia (art. 15).</li>
              <li>Rettificare o aggiornare i dati (art. 16).</li>
              <li>Chiedere la cancellazione (art. 17) o la limitazione (art. 18).</li>
              <li>Opporti al trattamento basato su legittimo interesse (art. 21).</li>
              <li>
                Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del
                trattamento basata sul consenso prima della revoca (art. 7).
              </li>
              <li>Portabilità dei dati (art. 20), ove applicabile.</li>
              <li>
                Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (
                <a
                  className="text-brand-blue underline"
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.garanteprivacy.it
                </a>
                ) se ritieni che il trattamento violi la normativa.
              </li>
            </ul>
            <p>
              Per esercitare i diritti, scrivi a:{" "}
              <a className="text-brand-blue underline" href="mailto:ilcapitancloud@gmail.com">
                ilcapitancloud@gmail.com
              </a>
              . Potremmo richiedere informazioni necessarie a verificare la tua identità. In genere
              rispondiamo entro 30 giorni.
            </p>
          </Section>

          <Section title="16) Contatti">
            <div className="rounded-2xl border-2 border-brand-blue/15 bg-brand-blue/5 p-5">
              <p>
                Per informazioni sul trattamento dei dati o per esercitare i tuoi diritti:
                <br />
                Email:{" "}
                <a className="text-brand-blue underline" href="mailto:ilcapitancloud@gmail.com">
                  ilcapitancloud@gmail.com
                </a>
                <br />
                Indirizzo postale: Eugenio Carlo Fontana – Via Borgo Baldassarre Paoli 53, 50022,
                Greve in Chianti (FI) – Italia
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
