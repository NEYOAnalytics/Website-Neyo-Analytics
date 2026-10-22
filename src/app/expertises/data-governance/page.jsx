import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Gouvernance Data & Qualité (RLS, RGPD)',
  description: "Gouvernance Data & Qualité (RLS, RGPD) : définitions, responsabilités, qualité et contrôles d’accès pour rendre vos données utilisables par les bonnes.",
  path: '/expertises/data-governance',
});

export default function DataGovernanceExpertisePage() {
  return <ExpertiseClientPage expertiseKey="dataGovernance" expertiseSlug="data-governance" />;
}
