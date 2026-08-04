import React from 'react';
import AidSignalClient from './AidSignalClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Projet Aid-Signal — NEYO Analytics',
  description: 'Découvrez Aid-Signal, initiative d\'analytique avancée et d\'IA pour l\'impact social et la collecte de données critiques par NEYO Analytics.',
  path: '/aid-signal',
});

export default function AidSignalPage() {
  return <AidSignalClient />;
}
