import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Gouvernance Data & Qualité (RLS, RGPD) — NEYO Analytics',
  description: 'Sécurisation des accès (RLS/CLS), catalogage de la donnée, contrôle qualité et conformité RGPD. Expertise Gouvernance Data nearshore au Maroc.',
  path: '/expertises/data-governance',
});

export default function DataGovernanceExpertisePage() {
  return <ExpertiseClientPage expertiseKey="dataGovernance" expertiseSlug="data-governance" />;
}
