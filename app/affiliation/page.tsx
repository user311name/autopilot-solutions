import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Affiliation & Partenaires",
  description:
    "Découvrez le programme de recommandation AutoPilot Solutions destiné aux partenaires.",
};

export default function AffiliationPage() {
  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="section-label">03 / AFFILIATION</span>

            <h1>
              Devenez
              <em> partenaire.</em>
            </h1>

            <p>
              Recommandez AutoPilot Solutions à vos clients et bénéficiez
              d'une commission lorsqu'une mission est signée.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="container content-grid">
            <div>
              <span className="section-label">LE PROGRAMME</span>
            </div>

            <div className="content-main">
              <h2>
                Un partenariat basé sur la
                <em> recommandation.</em>
              </h2>

              <p>
                Le programme s'adresse notamment aux professionnels qui
                accompagnent des entreprises et peuvent identifier des
                besoins en automatisation.
              </p>

              <p>
                Un comptable, une agence web ou un autre partenaire peut
                recommander un client à AutoPilot Solutions.
              </p>

              <div className="commission-box">
                <span>COMMISSION</span>
                <strong>10 à 15 %</strong>
                <p>
                  du montant facturé si la mission recommandée est signée.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container">
            <span className="section-label light">
              COMMENT ÇA FONCTIONNE
            </span>

            <div className="partner-steps">
              <article>
                <span>01</span>
                <h2>Vous recommandez</h2>
                <p>
                  Vous identifiez un client susceptible d'avoir un besoin en
                  automatisation.
                </p>
              </article>

              <article>
                <span>02</span>
                <h2>Le besoin est étudié</h2>
                <p>
                  AutoPilot Solutions échange avec le client afin d'identifier
                  son besoin.
                </p>
              </article>

              <article>
                <span>03</span>
                <h2>La mission est signée</h2>
                <p>
                  Si la mission est signée, le partenaire bénéficie de la
                  commission prévue.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <span className="section-label">PARTENAIRES</span>

            <h2>
              Vous souhaitez
              <em> recommander AutoPilot Solutions ?</em>
            </h2>

            <Link href="/contact" className="button button-amber">
              Nous contacter <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}