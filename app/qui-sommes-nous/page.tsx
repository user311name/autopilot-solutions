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

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="section-label">01 / QUI SOMMES-NOUS</span>

            <h1>
              Une approche humaine de
              <em> l'automatisation.</em>
            </h1>

            <p>
              AutoPilot Solutions accompagne les indépendants, artisans et
              petites entreprises dans l'automatisation de leurs tâches
              numériques répétitives.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container content-grid">
            <div>
              <span className="section-label">NOTRE APPROCHE</span>
            </div>

            <div className="content-main">
              <h2>
                Simplifier la technique pour
                <em> gagner du temps.</em>
              </h2>

              <p>
                AutoPilot Solutions est une activité d'automatisation de
                tâches numériques destinée aux indépendants, artisans et
                petites entreprises.
              </p>

              <p>
                L'objectif est simple : permettre à des professionnels qui
                n'ont ni le temps ni l'équipe technique nécessaire
                d'automatiser certaines tâches répétitives de leur activité.
              </p>

              <p>
                L'approche privilégie des solutions simples et accessibles,
                sans jargon technique inutile.
              </p>
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container content-grid">
            <div>
              <span className="section-label light">NICOLAS</span>
            </div>

            <div className="content-main light-content">
              <h2>
                Une expérience professionnelle
                <em> tournée vers le concret.</em>
              </h2>

              <p>
                Le parcours de Nicolas comprend la gestion de contrats en
                assurance, des missions administratives ainsi que de la
                relation client.
              </p>

              <p>
                Ces expériences permettent de comprendre les besoins
                quotidiens des professionnels et d'identifier les tâches
                répétitives qui peuvent être simplifiées grâce à
                l'automatisation.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <span className="section-label">AUTOPILOT SOLUTIONS</span>

            <h2>
              Une tâche répétitive vous fait perdre
              <em> du temps ?</em>
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