"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>AutoPilot Solutions</span>
        </Link>

        <nav className="desktop-nav">
          <Link href="/">Accueil</Link>
          <Link href="/qui-sommes-nous">Qui sommes-nous</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/affiliation">Affiliation</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="header-button">
          Demander un devis
        </Link>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <Link href="/" onClick={close}>Accueil</Link>
          <Link href="/qui-sommes-nous" onClick={close}>Qui sommes-nous</Link>
          <Link href="/tarifs" onClick={close}>Tarifs</Link>
          <Link href="/affiliation" onClick={close}>Affiliation</Link>
          <Link href="/contact" onClick={close}>Contact</Link>

          <Link
            href="/contact"
            className="button button-amber mobile-cta"
            onClick={close}
          >
            Demander un devis gratuit →
          </Link>
        </div>
      )}
    </header>
  );
}