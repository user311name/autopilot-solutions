import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Découvrez les formules d'automatisation AutoPilot Solutions : Simple, Avancé et Sur-mesure.",
};

const offers = [
  {
    number: "01",
    name: "Simple",
    price: "150 €",
    description: "Pour une automatisation ciblée.",
    features: ["1 automatisation", "2 outils maximum"],
  },
  {
    number: "02",
    name: "Avancé",
    price: "400 €",
    description:
      "Pour plusieurs automatisations et un accompagnement.",
    features: [
      "Jusqu'à 4 automatisations",
      "1 mois de support",
    ],
    featured: true,
  },
  {
    number: "03",
    name: "Sur-mesure",
    price: "Sur devis",
    description:
      "Pour des besoins spécifiques et une architecture personnalisée.",
    features: [
      "Automatisations illimitées",
      "Architecture personnalisée",
    ],
  },
];

export default function TarifsPage() {
  return (
    <>
      <Header />

      <main className="pricing-page">
        {/* HERO */}
        <section className="page-hero pricing-hero">
          <div className="pricing-hero-grid" aria-hidden="true" />

          <div className="container">
            <span className="section-label">02 / TARIFS</span>

            <h1>
              Des formules
              <em> simples.</em>
            </h1>

            <p>
              Des solutions d'automatisation adaptées à différents
              niveaux de besoin.
            </p>

            <div className="pricing-hero-line" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        {/* OFFRES */}
        <section className="pricing-page-section">
          <div className="container">
            <div className="pricing-intro-row">
              <div>
                <span className="section-label">
                  NOS FORMULES
                </span>
              </div>

              <p>
                Chaque formule est pensée pour répondre à un besoin
                concret, sans complexité inutile.
              </p>
            </div>

            <div className="full-price-grid">
              {offers.map((offer) => (
                <article
                  key={offer.number}
                  className={`full-price-card pricing-card-polished ${
                    offer.featured ? "featured" : ""
                  }`}
                >
                  <div className="pricing-card-glow" />

                  {offer.featured && (
                    <span className="popular">
                      RECOMMANDÉ
                    </span>
                  )}

                  <div className="pricing-card-top">
                    <span className="price-number">
                      {offer.number}
                    </span>

                    <span className="pricing-card-index">
                      AUTOMATISATION
                    </span>
                  </div>

                  <div className="pricing-card-content">
                    <h2>{offer.name}</h2>

                    <div className="full-price">
                      {offer.name !== "Sur-mesure" && (
                        <small>À partir de</small>
                      )}

                      <strong>{offer.price}</strong>
                    </div>

                    <p>{offer.description}</p>

                    <div className="pricing-divider" />

                    <ul>
                      {offer.features.map((feature) => (
                        <li key={feature}>
                          <span className="feature-check">
                            ✓
                          </span>

                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="price-button pricing-card-button"
                  >
                    Demander un devis
                    <span>↗</span>
                  </Link>

                  <div className="pricing-card-decoration">
                    <span />
                    <span />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section pricing-final-cta">
          <div className="pricing-cta-grid" aria-hidden="true" />

          <div className="container">
            <span className="section-label">
              BESOIN SPÉCIFIQUE
            </span>

            <h2>
              Votre besoin ne rentre pas dans une formule
              <em> standard ?</em>
            </h2>

            <Link
              href="/contact"
              className="button button-amber"
            >
              Demander un devis gratuit
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}