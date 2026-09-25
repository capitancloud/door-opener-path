import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const CHECKOUT_URL = "https://studenti.accademiadelcloud.it/p/payment-page";
const PRICE = "297€";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-display text-2xl font-extrabold text-brand-blue">
          Capitan Cloud
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link to="/" className="font-semibold text-brand-ink/80 hover:text-brand-blue">
            Home
          </Link>
          <Link
            to="/"
            hash="curriculum"
            className="font-semibold text-brand-ink/80 hover:text-brand-blue"
          >
            Il Percorso
          </Link>
          <Link
            to="/"
            hash="faq"
            className="font-semibold text-brand-ink/80 hover:text-brand-blue"
          >
            FAQ
          </Link>
          <Link to="/blog" className="font-semibold text-brand-ink/80 hover:text-brand-blue">
            Blog
          </Link>
          <a
            href="https://superprogrammatore.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-bold text-white shadow-md transition hover:bg-brand-blue/90"
          >
            <Sparkles className="h-4 w-4" />
            <span>Diventa un Programmatore con l'AI</span>
            <span className="rounded-full bg-brand-yellow px-2 py-0.5 text-xs font-extrabold text-brand-ink">
              97 EUR
            </span>
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Main CTA — desktop only */}
          <Link
            to="/"
            hash="checkout"
            className="gradient-cta shadow-cta hidden items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 sm:inline-flex"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden lg:inline">Inizia ora — {PRICE}</span>
            <span className="lg:hidden">Inizia</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-ink transition hover:bg-black/5 lg:hidden"
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileOpen && (
        <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 font-semibold text-brand-ink/80 hover:bg-black/5 hover:text-brand-blue"
            >
              Home
            </Link>
            <Link
              to="/"
              hash="curriculum"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 font-semibold text-brand-ink/80 hover:bg-black/5 hover:text-brand-blue"
            >
              Il Percorso
            </Link>
            <Link
              to="/"
              hash="faq"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 font-semibold text-brand-ink/80 hover:bg-black/5 hover:text-brand-blue"
            >
              FAQ
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 font-semibold text-brand-ink/80 hover:bg-black/5 hover:text-brand-blue"
            >
              Blog
            </Link>
            <a
              href="https://superprogrammatore.it/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-4 py-3 text-center text-sm font-bold text-white shadow-md transition hover:bg-brand-blue/90"
            >
              <Sparkles className="h-4 w-4" />
              <span>Diventa un Programmatore con l'AI</span>
              <span className="rounded-full bg-brand-yellow px-2 py-0.5 text-xs font-extrabold text-brand-ink">
                97 EUR
              </span>
            </a>
            <Link
              to="/"
              hash="checkout"
              onClick={() => setMobileOpen(false)}
              className="gradient-cta shadow-cta inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold text-white transition hover:brightness-110"
            >
              <Sparkles className="h-4 w-4" />
              <span>Inizia ora — {PRICE}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink px-4 py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p className="font-display text-lg font-extrabold text-white">Capitan Cloud</p>
        <p>
          © {new Date().getFullYear()} Capitan Cloud — Eugenio Fontana. Tutti i diritti riservati.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link to="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link to="/cookie-policy" className="hover:text-white">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
