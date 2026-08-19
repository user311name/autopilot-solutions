"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className="contact-page">
          <div className="container contact-simple">

            <div className="contact-cards">

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/nicolas-alepee-26319042a"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card contact-card-linkedin"
              >
                <div className="contact-card-icon">
                  in
                </div>

                <div className="contact-card-content">
                  <span className="contact-card-label">
                    LINKEDIN
                  </span>

                  <h2>
                    Nicolas Alepee
                  </h2>

                  <p>
                    Retrouvez-nous sur LinkedIn
                  </p>
                </div>

                <span className="contact-card-arrow">
                  →
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:autopilotsolutions@gmail.com"
                className="contact-card contact-card-email"
              >
                <div className="contact-card-icon">
                  @
                </div>

                <div className="contact-card-content">
                  <span className="contact-card-label">
                    EMAIL
                  </span>

                  <h2>
                    autopilotsolutions@gmail.com
                  </h2>

                  <p>
                    Écrivez-nous directement
                  </p>
                </div>

                <span className="contact-card-arrow">
                  →
                </span>
              </a>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}