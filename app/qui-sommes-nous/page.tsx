import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Découvrez AutoPilot Solutions, une activité d'automatisation destinée aux indépendants, artisans et petites entreprises.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <Header />

      <main className="about-page">
        {/* HERO */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-grid">
              <div className="about-hero-label">
                <span className="section-label">01 / QUI SOMMES-NOUS</span>

                <span className="about-vertical-line" />
              </div>

              <div className="about-hero-content">
                <span className="about-eyebrow">
                  AUTOMATISATION & EFFICACITÉ
                </span>

                <h1>
                  Une approche humaine de
                  <span> l'automatisation.</span>
                </h1>

                <p>
                  AutoPilot Solutions accompagne les indépendants, artisans et
                  petites entreprises dans l'automatisation de leurs tâches
                  numériques répétitives.
                </p>

                <div className="about-hero-meta">
                  <span>01</span>
                  <span className="about-meta-line" />
                  <span>AUTOPILOT SOLUTIONS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-orb about-orb-one" />
          <div className="about-orb about-orb-two" />
        </section>

        {/* APPROCHE */}
        <section className="about-approach">
          <div className="container">
            <div className="about-section-heading">
              <span className="section-label">NOTRE APPROCHE</span>

              <span className="about-heading-number">01</span>
            </div>

            <div className="about-feature">
              <div className="about-feature-side">
                <span className="about-feature-tag">
                  SIMPLE
                </span>

                <span className="about-feature-line" />

                <span className="about-feature-tag">
                  ACCESSIBLE
                </span>
              </div>

              <div className="about-feature-main">
                <h2>
                  Simplifier la technique pour
                  <span> gagner du temps.</span>
                </h2>

                <div className="about-copy">
                  <p>
                    AutoPilot Solutions est une activité d'automatisation de
                    tâches numériques destinée aux indépendants, artisans et
                    petites entreprises.
                  </p>

                  <p>
                    L'objectif est simple : permettre à des professionnels qui
                    n'ont ni le temps ni l'équipe technique nécessaire
                    d'automatiser certaines tâches répétitives de leur
                    activité.
                  </p>

                  <p>
                    L'approche privilégie des solutions simples et
                    accessibles, sans jargon technique inutile.
                  </p>
                </div>
              </div>

              <div className="about-feature-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="container">
            <div className="about-cta-card">
              <div className="about-cta-top">
                <span className="section-label">AUTOPILOT SOLUTIONS</span>

                <span className="about-cta-status">
                  DISPONIBLE POUR VOTRE PROJET
                </span>
              </div>

              <div className="about-cta-content">
                <h2>
                  Une tâche répétitive vous fait perdre
                  <span> du temps ?</span>
                </h2>

                <Link href="/contact" className="button button-amber">
                  Demander un devis gratuit
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}