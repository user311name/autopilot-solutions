import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Tri d'emails",
    text: "Classez et orientez automatiquement vos emails pour ne plus perdre de temps dans votre boîte de réception.",
  },
  {
    number: "02",
    title: "Connexion d'outils",
    text: "Faites communiquer vos outils entre eux et évitez les saisies répétitives ou les transferts manuels.",
  },
  {
    number: "03",
    title: "Notifications",
    text: "Recevez les bonnes informations au bon moment grâce à des notifications déclenchées automatiquement.",
  },
];

const steps = [
  ["01", "Vous expliquez", "Vous nous décrivez simplement la tâche qui vous fait perdre du temps."],
  ["02", "Nous analysons", "Nous identifions ce qui peut être automatisé et les outils concernés."],
  ["03", "Nous mettons en place", "Nous construisons une automatisation adaptée à votre fonctionnement."],
  ["04", "Vous gagnez du temps", "Votre automatisation fonctionne en arrière-plan au quotidien."],
];

const prices = [
  {
    number: "01",
    name: "Simple",
    price: "150 €",
    description: "Pour commencer avec une automatisation ciblée.",
    features: ["1 automatisation", "2 outils maximum"],
  },
  {
    number: "02",
    name: "Avancé",
    price: "400 €",
    description: "Pour automatiser plusieurs étapes de votre activité.",
    features: ["Jusqu'à 4 automatisations", "1 mois de support"],
    featured: true,
  },
  {
    number: "03",
    name: "Sur-mesure",
    price: "Sur devis",
    description: "Pour des besoins spécifiques et une architecture personnalisée.",
    features: ["Automatisations illimitées", "Architecture personnalisée"],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow">
                <span />
                AUTOPILOT SOLUTIONS
              </div>

              <h1>
                Automatisez les tâches
                <em> qui vous font perdre du temps.</em>
              </h1>

              <p className="hero-text">
                Des automatisations simples et accessibles pour les
                indépendants, artisans et petites entreprises.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="button button-amber">
                  Demander un devis gratuit
                  <span>→</span>
                </Link>

                <Link href="#services" className="hero-link">
                  Découvrir nos solutions
                  <span>↓</span>
                </Link>
              </div>

              <div className="hero-meta">
                <span>MURET</span>
                <i />
                <span>BASSIN TOULOUSAIN</span>
              </div>
            </div>

            <div className="hero-graphic" aria-hidden="true">
              <div className="graphic-label">AUTOMATISATION / 01</div>

              <div className="graphic-flow">
                <div className="flow-item">
                  <div className="flow-dot">1</div>
                  <div>
                    <strong>Déclencheur</strong>
                    <small>Une action se produit</small>
                  </div>
                </div>

                <div className="flow-line" />

                <div className="flow-item">
                  <div className="flow-dot blue">2</div>
                  <div>
                    <strong>Automatisation</strong>
                    <small>Le processus s'exécute</small>
                  </div>
                </div>

                <div className="flow-line" />

                <div className="flow-item">
                  <div className="flow-dot amber">3</div>
                  <div>
                    <strong>Résultat</strong>
                    <small>La tâche est terminée</small>
                  </div>
                </div>
              </div>

              <div className="graphic-bottom">
                <span>PROCESSUS AUTOMATISÉ</span>
                <strong>● ACTIF</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container intro-strip-inner">
            <span className="mono">MOINS DE TÂCHES RÉPÉTITIVES.</span>
            <span className="strip-line" />
            <span className="mono">PLUS DE TEMPS POUR VOTRE ACTIVITÉ.</span>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-intro">
              <div>
                <span className="section-label">01 / SERVICES</span>
                <h2>
                  Ce qui peut être automatisé
                  <em> peut vous faire gagner du temps.</em>
                </h2>
              </div>

              <p>
                Nous nous concentrons sur des automatisations concrètes,
                utiles et adaptées à votre façon de travailler.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="card-number">{service.number}</span>

                  <div className="service-symbol">
                    {service.number === "01" && "✉"}
                    {service.number === "02" && "↗"}
                    {service.number === "03" && "⌁"}
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <span className="card-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <div className="section-intro">
              <div>
                <span className="section-label">02 / COMMENT ÇA MARCHE</span>
                <h2>
                  Pas besoin d'être
                  <em> technicien.</em>
                </h2>
              </div>

              <p>
                Vous nous expliquez votre besoin. Nous nous occupons de la
                partie technique.
              </p>
            </div>

            <div className="steps">
              {steps.map(([number, title, text]) => (
                <article className="step" key={number}>
                  <span className="step-number">{number}</span>
                  <div className="step-line" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing">
          <div className="container">
            <div className="section-intro">
              <div>
                <span className="section-label">03 / TARIFS</span>
                <h2>
                  Des formules
                  <em> simples.</em>
                </h2>
              </div>

              <Link href="/tarifs" className="text-link">
                Voir les tarifs complets →
              </Link>
            </div>

            <div className="price-grid">
              {prices.map((price) => (
                <article
                  className={`price-card ${price.featured ? "featured" : ""}`}
                  key={price.number}
                >
                  {price.featured && (
                    <span className="popular">RECOMMANDÉ</span>
                  )}

                  <span className="price-number">{price.number}</span>
                  <h3>{price.name}</h3>

                  <div className="price">
                    {price.name === "Sur-mesure" ? (
                      <strong>Sur devis</strong>
                    ) : (
                      <>
                        <small>À partir de</small>
                        <strong>{price.price}</strong>
                      </>
                    )}
                  </div>

                  <p>{price.description}</p>

                  <ul>
                    {price.features.map((feature) => (
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

        <section className="about-preview">
          <div className="container about-layout">
            <div>
              <span className="section-label">04 / QUI SOMMES-NOUS</span>

              <div className="about-diagram" aria-hidden="true">
                <span />
                <span />
                <span />
                <i />
                <i />
              </div>
            </div>

            <div className="about-copy">
              <h2>
                Une approche humaine de
                <em> l'automatisation.</em>
              </h2>

              <p>
                AutoPilot Solutions accompagne les indépendants, artisans et
                petites entreprises qui souhaitent gagner du temps sans
                devoir gérer eux-mêmes la complexité technique.
              </p>

              <p>
                Basée à Muret, l'activité démarre dans le bassin toulousain
                avec une approche simple : comprendre votre quotidien,
                identifier les tâches répétitives et construire une solution
                réellement utile.
              </p>

              <Link href="/qui-sommes-nous" className="text-link">
                Découvrir AutoPilot Solutions →
              </Link>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <span className="section-label">UN BESOIN ?</span>

            <h2>
              Parlons de ce que vous pourriez
              <em> automatiser.</em>
            </h2>

            <p>
              Décrivez-nous votre besoin simplement. Le premier échange
              permet d'identifier ensemble les possibilités.
            </p>

            <Link href="/contact" className="button button-amber">
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