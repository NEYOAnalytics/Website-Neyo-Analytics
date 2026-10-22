import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Data Engineering',
  description: "Data Engineering : intégration des sources, pipelines et transformations pour des données contrôlées et réutilisables. Accompagnement au Maroc et à.",
  path: '/expertises/data-engineering',
});

export default function DataEngineeringExpertisePage() {
  return <ExpertiseClientPage expertiseKey="dataEngineering" expertiseSlug="data-engineering" />;
}
