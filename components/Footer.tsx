
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-logo">
              <span className="footer-logo-mark">
                <i />
              </span>
              AutoPilot Solutions
            </Link>

            <p>
              Automatisation & efficacité.
              <br />
              Des solutions simples pour gagner du temps.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span className="footer-title">Navigation</span>
              <Link href="/">Accueil</Link>
              <Link href="/qui-sommes-nous">Qui sommes-nous</Link>
              <Link href="/tarifs">Tarifs</Link>
              <Link href="/affiliation">Affiliation</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div>
              <span className="footer-title">Informations</span>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/confidentialite">
                Politique de confidentialité
              </Link>
              <a href="mailto:autopilot.solutions@gmail.com">
                autopilot.solutions@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AutoPilot Solutions</span>
          <span className="mono">AUTOMATISATION & EFFICACITÉ</span>
        </div>
      </div>
    </footer>
  );
}