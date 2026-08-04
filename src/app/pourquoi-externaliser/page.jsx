import React from 'react';
import ExternaliserClient from './ExternaliserClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Pourquoi Externaliser vos Projets Data & IA ? — NEYO Analytics',
  description: 'Découvrez les avantages stratégiques de l\'externalisation Data & IA : flexibilité, réduction des coûts jusqu\'à -40%, accès immédiat à des compétences d\'experts.',
  path: '/pourquoi-externaliser',
});

export default function PourquoiExternaliserPage() {
  return <ExternaliserClient />;
}
