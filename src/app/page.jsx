import React from 'react';
import HomePageClient from './HomePageClient';
import { createMetadata } from '../lib/metadata';

export const metadata = createMetadata({
  title: 'NEYO Analytics | Nearshore Data & IA Maroc',
  description: 'Société Nearshore Data & IA au Maroc. Consultants Power BI, Data Engineers & Scientists en régie sous 1 à 2 semaines pour l\'Europe et le Golfe. Coûts optimisés jusqu\'à -40%.',
  path: '/',
});

export default function HomePage() {
  return <HomePageClient />;
}
