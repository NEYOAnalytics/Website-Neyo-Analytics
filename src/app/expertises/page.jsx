import React from 'react';
import ExpertisesHubClient from './ExpertisesHubClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Nos Expertises Data & IA',
  description: "Explorez les expertises techniques Data, BI, IA et Cloud de NEYO Analytics. Des compétences pour vos projets au Maroc et vos équipes internationales.",
  path: '/expertises',
});

export default function ExpertisesHubPage() {
  return <ExpertisesHubClient />;
}
