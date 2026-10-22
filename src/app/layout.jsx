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
    default: 'NEYO Analytics | Data, BI & Cloud',
    template: '%s | NEYO Analytics',
  },
  description: 'Conseil, projets et consultants Data, BI, IA et Cloud pour les entreprises au Maroc et les clients internationaux.',
  icons: {
    icon: [
      { url: '/logo-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon-48.png',
    apple: [
      { url: '/logo-square.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'NEYO Analytics | Data, BI & Cloud',
    description: 'Projets et consultants Data, BI, IA et Cloud au Maroc. Un parcours national et une offre nearshore pour les entreprises internationales.',
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
    card: 'summary_large_image',
    title: 'NEYO Analytics | Data, BI & Cloud',
    description: 'Projets et consultants Data, BI, IA et Cloud au Maroc et à l’international.',
    images: ['/logo-square.png'],
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
