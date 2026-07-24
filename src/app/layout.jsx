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
    default: 'NEYO Analytics | Nearshore Data & IA Maroc',
    template: '%s | NEYO Analytics',
  },
  description: 'Société Nearshore Data & IA au Maroc. Consultants Power BI, Data Engineers & Scientists en régie sous 1 à 2 semaines pour l\'Europe et le Golfe.',
  icons: {
    icon: [
      { url: '/logo-icon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo-square.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'NEYO Analytics | Nearshore Data & IA Maroc',
    description: 'Consultants experts Data & IA au Maroc (Power BI, Databricks, Azure, Palantir) en régie pour l\'Europe et le Golfe. Coûts optimisés à -40%.',
    url: 'https://www.neyo-analytics.com',
    siteName: 'NEYO Analytics',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/logo-square.png',
        width: 512,
        height: 512,
        alt: 'NEYO Analytics Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'NEYO Analytics | Nearshore Data & IA Maroc',
    description: 'Consultants Data & IA francophones au Maroc pour l\'Europe et le Golfe.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'b673f4ef0c5741af',
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
