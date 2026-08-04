import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Power BI Nearshore Maroc — NEYO Analytics',
  description: 'Consultants Power BI experts au Maroc : rapports, DAX, Microsoft Fabric, déploiement RLS. Coûts optimisés et démarrage sous 1 à 2 semaines.',
  path: '/expertises/power-bi',
});

export default function PowerBiExpertisePage() {
  return <ExpertiseClientPage expertiseKey="powerBi" expertiseSlug="power-bi" />;
}
