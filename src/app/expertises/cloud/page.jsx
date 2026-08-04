import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Cloud Data & Fabric Nearshore Maroc — NEYO Analytics',
  description: 'Infrastructures Cloud Data Azure, AWS, GCP & Microsoft Fabric. Consultants Cloud Data experts basés au Maroc pour vos projets en Europe et dans le Golfe.',
  path: '/expertises/cloud',
});

export default function CloudExpertisePage() {
  return <ExpertiseClientPage expertiseKey="cloud" expertiseSlug="cloud" />;
}
