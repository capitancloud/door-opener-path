import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "cc-cookie-consent-v1";

type Consent = "all" | "necessary" | null;

declare function gtag(...args: unknown[]): void;

function updateGtagConsent(value: "all" | "necessary") {
  if (typeof gtag === "undefined") return;
  if (value === "all") {
    gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      functionality_storage: "granted",
      personalization_storage: "granted",
    });
  } else {
    gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
    });
  }
}

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Consent;
      setConsent(saved ?? null);
    } catch {
      setConsent(null);
    }
    setReady(true);
  }, []);

  const save = (value: Exclude<Consent, null>) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    updateGtagConsent(value);
    setConsent(value);
  };

  if (!ready || consent) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferenze cookie"
      className="fixed inset-x-3 bottom-3 z-[100] sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md"
    >
      <div className="rounded-2xl border border-brand-blue/15 bg-white p-5 shadow-2xl ring-1 ring-black/5">
        <p className="flex items-center gap-2 font-display text-base font-extrabold text-brand-ink">
          <Cookie className="h-5 w-5 text-brand-blue" aria-hidden="true" />
          Cookie
        </p>
        <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">
          Usiamo cookie tecnici necessari al funzionamento del sito e, previo consenso,
          cookie di analisi e marketing per migliorare la tua esperienza. Puoi accettare tutto
          o continuare con i soli cookie necessari. Dettagli nella{" "}
          <Link
            to="/cookie-policy"
            className="font-semibold text-brand-blue underline decoration-brand-blue/40 underline-offset-2 hover:decoration-brand-blue"
          >
            Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => save("necessary")}
            className="rounded-xl border-2 border-brand-blue/20 bg-white px-4 py-2.5 text-sm font-bold text-brand-ink transition hover:border-brand-blue/50 hover:bg-brand-blue/5"
          >
            Solo necessari
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="gradient-cta rounded-xl px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:brightness-110"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
}
