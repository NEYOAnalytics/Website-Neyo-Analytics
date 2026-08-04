import React from 'react';
import NearshoreClient from './NearshoreClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Nearshore Data & IA Maroc — NEYO Analytics',
  description: 'Découvrez l\'avantage du Nearshore Data & IA au Maroc avec NEYO Analytics : consultants trilingues, 0 à 1h de décalage horaire avec l\'Europe, coûts optimisés jusqu\'à -40%.',
  path: '/nearshore-maroc',
});

export default function NearshoreMarocPage() {
  return <NearshoreClient />;
}
