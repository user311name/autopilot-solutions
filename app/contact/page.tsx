"use client";

import { FormEvent, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Header />

      <main>
        <section className="contact-page">
          <div className="container contact-layout">
            <div className="contact-intro">
              <span className="section-label">04 / CONTACT</span>

              <h1>
                Parlons de ce que vous pourriez
                <em> automatiser.</em>
              </h1>

              <p>
                Décrivez simplement votre besoin. AutoPilot Solutions pourra
                ensuite identifier les possibilités d'automatisation adaptées
                à votre activité.
              </p>

              <div className="contact-details">
                <div>
                  <span>EMAIL</span>
                  <a href="mailto:autopilot.solutions@gmail.com">
                    autopilot.solutions@gmail.com
                  </a>
                </div>

                <div>
                  <span>TIKTOK</span>
                  <p>Compte TikTok à renseigner</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <div className="form-heading">
                <span>DEMANDE DE DEVIS</span>
                <p>Les champs marqués d'un * sont obligatoires.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-field">
                  <label htmlFor="name">Nom *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@exemple.fr"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="need">Type de besoin *</label>

                  <select id="need" name="need" required defaultValue="">
                    <option value="" disabled>
                      Sélectionnez votre besoin
                    </option>
                    <option value="Tri d'emails">Tri d'emails</option>
                    <option value="Connexion d'outils">
                      Connexion d'outils
                    </option>
                    <option value="Notifications">Notifications</option>
                    <option value="Autre besoin">Autre besoin</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre besoin..."
                    rows={7}
                    required
                  />
                </div>

                {/* Honeypot anti-spam invisible */}
                <div
                  className="honeypot"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Ne pas remplir ce champ</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="button button-amber form-submit"
                  disabled={status === "loading"}
                >
                  {status === "loading"
                    ? "Envoi en cours..."
                    : "Envoyer ma demande"}
                  <span>→</span>
                </button>

                {status === "success" && (
                  <div className="form-message success">
                    Votre demande a bien été envoyée.
                  </div>
                )}

                {status === "error" && (
                  <div className="form-message error">
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}

                <p className="form-privacy">
                  Les informations transmises via ce formulaire sont utilisées
                  uniquement pour traiter votre demande.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}