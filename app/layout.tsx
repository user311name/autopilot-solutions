import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AutoPilot Solutions — Automatisation & efficacité",
    template: "%s | AutoPilot Solutions",
  },
  description:
    "AutoPilot Solutions automatise les tâches répétitives des indépendants, artisans et petites entreprises pour leur faire gagner du temps.",
  keywords: [
    "automatisation",
    "automatisation entreprise",
    "n8n",
    "productivité",
    "Muret",
    "Toulouse",
    "automatisation emails",
    "connexion outils",
  ],
  authors: [{ name: "AutoPilot Solutions" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}