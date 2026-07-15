import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import logoAsset from "@/assets/capitan-cloud-logo.jpg.asset.json";

const CHECKOUT_URL = "#checkout";
const PRICE = "297€";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-2 ring-brand-blue/70 shadow-md">
            <img
              src={logoAsset.url}
              alt="Logo Capitan Cloud"
              className="h-full w-full object-cover scale-125"
            />
          </span>
          <span className="font-display text-2xl font-extrabold text-brand-blue">
            Capitan Cloud
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
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
        </nav>
        <Link
          to="/"
          hash="checkout"
          className="gradient-cta shadow-cta inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
        >
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">Inizia ora — {PRICE}</span>
          <span className="sm:hidden">Inizia</span>
        </Link>
      </div>
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
        <div className="flex gap-4">
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
