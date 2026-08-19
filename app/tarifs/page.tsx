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
    description: "Pour plusieurs automatisations et un accompagnement.",
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

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="section-label">02 / TARIFS</span>

            <h1>
              Des formules
              <em> simples.</em>
            </h1>

            <p>
              Des solutions d'automatisation adaptées à différents niveaux de
              besoin.
            </p>
          </div>
        </section>

        <section className="pricing-page-section">
          <div className="container">
            <div className="full-price-grid">
              {offers.map((offer) => (
                <article
                  key={offer.number}
                  className={`full-price-card ${
                    offer.featured ? "featured" : ""
                  }`}
                >
                  {offer.featured && (
                    <span className="popular">RECOMMANDÉ</span>
                  )}

                  <span className="price-number">{offer.number}</span>

                  <h2>{offer.name}</h2>

                  <div className="full-price">
                    {offer.name !== "Sur-mesure" && (
                      <small>À partir de</small>
                    )}
                    <strong>{offer.price}</strong>
                  </div>

                  <p>{offer.description}</p>

                  <ul>
                    {offer.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="price-button">
                    Demander un devis
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <span className="section-label">BESOIN SPÉCIFIQUE</span>

            <h2>
              Votre besoin ne rentre pas dans une formule
              <em> standard ?</em>
            </h2>

            <Link href="/contact" className="button button-amber">
              Demander un devis gratuit <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}