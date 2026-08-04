import React from 'react';
import ConsultantsHubClient from './ConsultantsHubClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Vivier de Consultants Data & IA Nearshore — NEYO Analytics',
  description: 'Découvrez nos profils de consultants Data Engineers, Power BI, Data Scientists et Architectes Data en régie nearshore depuis le Maroc.',
  path: '/consultants',
});

export default function ConsultantsPage() {
  return <ConsultantsHubClient />;
}
