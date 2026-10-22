import React from 'react';
import ConsultantsHubClient from './ConsultantsHubClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Vivier de Consultants Data & IA',
  description: "Explorez les profils de consultants Data, BI, IA et Cloud de NEYO Analytics. Des compétences pour vos projets au Maroc et vos équipes internationales.",
  path: '/consultants',
});

export default function ConsultantsPage() {
  return <ConsultantsHubClient />;
}
