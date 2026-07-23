import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CornerNeuralBackground from '../components/CornerNeuralBackground';
import { ThemeProvider } from '../components/ThemeProviderClient';
import { LanguageProvider } from '../components/LanguageProviderClient';
import { OrganizationJsonLd } from '../components/JsonLd';
import '../styles/global.scss';

export const metadata = {
  metadataBase: new URL('https://www.neyo-analytics.com'),
  title: {
    default: 'NEYO Analytics — Nearshore Data & IA Maroc | ESN Spécialisée Europe & Golfe',
    template: '%s | NEYO Analytics',
  },
  description: 'Société de conseil Nearshore Data & IA basée au Maroc. Consultants Power BI, Data Engineers, Data Scientists & Développeurs BI en régie sous 1 à 2 semaines.',
  openGraph: {
    title: 'NEYO Analytics — Nearshore Data & IA Maroc',
    description: 'Renforcez vos équipes avec nos consultants experts Data & IA basés au Maroc (Power BI, Databricks, Azure, Palantir). Francophones, même fuseau horaire, coûts optimisés.',
    url: 'https://www.neyo-analytics.com',
    siteName: 'NEYO Analytics',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEYO Analytics — Nearshore Data & IA Maroc',
    description: 'Consultants Data & IA francophones basés au Maroc pour la France, la Belgique, la Suisse et le Golfe.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="dark">
        <ThemeProvider>
          <LanguageProvider>
            <OrganizationJsonLd />
            <CornerNeuralBackground />
            <Header />
            <main style={{ paddingTop: '110px', minHeight: '80vh', position: 'relative', zIndex: 1 }}>
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
