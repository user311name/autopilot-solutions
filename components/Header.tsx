"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container header-inner">

        {/* LOGO */}
        <Link href="/" className="brand" onClick={closeMenu}>
          <span className="brand-logo">
            <Image
              src="/logo-asss.png"
              alt="AutoPilot Solutions"
              width={52}
              height={52}
              priority
            />
          </span>

          <span>AutoPilot Solutions</span>
        </Link>

        {/* MENU PC */}
        <nav className="desktop-nav">
          <Link href="/" onClick={closeMenu}>
            Accueil
          </Link>

          <Link href="/qui-sommes-nous" onClick={closeMenu}>
            Qui sommes-nous
          </Link>

          <Link href="/tarifs" onClick={closeMenu}>
            Tarifs
          </Link>

          <Link href="/affiliation" onClick={closeMenu}>
            Affiliation
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        {/* BOUTON DEVIS PC */}
        <Link
          href="/devis"
          className="header-button"
          onClick={closeMenu}
        >
          Demander un devis
        </Link>

        {/* BOUTON MENU MOBILE */}
        <button
          type="button"
          className={`menu-button ${open ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MENU MOBILE */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <Link href="/" onClick={closeMenu}>
          Accueil
        </Link>

        <Link href="/qui-sommes-nous" onClick={closeMenu}>
          Qui sommes-nous
        </Link>

        <Link href="/tarifs" onClick={closeMenu}>
          Tarifs
        </Link>

        <Link href="/affiliation" onClick={closeMenu}>
          Affiliation
        </Link>

        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>

        {/* DEVIS MOBILE */}
        <Link
          href="/devis"
          className="button button-amber mobile-cta"
          onClick={closeMenu}
        >
          Demander un devis gratuit →
        </Link>
      </nav>
    </header>
  );
}