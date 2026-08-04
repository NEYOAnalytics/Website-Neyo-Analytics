import React from 'react';
import ExpertisesHubClient from './ExpertisesHubClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Nos Expertises Data & IA Nearshore — NEYO Analytics',
  description: 'Power BI, Data Engineering, Cloud Data, IA & Data Science, Gouvernance Data, Palantir. Toutes nos expertises nearshore depuis le Maroc pour l\'Europe et le Golfe.',
  path: '/expertises',
});

export default function ExpertisesHubPage() {
  return <ExpertisesHubClient />;
}
