import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Palantir Foundry & AIP',
  description: "Palantir Foundry & AIP : intégration de données, modélisation métier et applications autour de Palantir Foundry et de son Ontology. Accompagnement au Maroc.",
  path: '/expertises/palantir',
});

export default function PalantirExpertisePage() {
  return <ExpertiseClientPage expertiseKey="palantir" expertiseSlug="palantir" />;
}
