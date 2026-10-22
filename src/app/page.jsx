import React from 'react';
import HomePageClient from './HomePageClient';
import { createMetadata } from '../lib/metadata';

export const metadata = createMetadata({
  title: 'Conseil Data, BI & Cloud au Maroc et à l’international',
  description: 'NEYO Analytics accompagne vos projets Data, BI, IA et Cloud au Maroc et vos équipes internationales en nearshore. Projets et renfort de consultants spécialisés.',
  path: '/',
});

export default function HomePage() {
  return <HomePageClient />;
}
