import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Palantir Foundry & AIP Nearshore Maroc — NEYO Analytics',
  description: 'Consultants Palantir Foundry & AIP au Maroc pour vos projets de data ops, ontologie et analytics décisionnel avancé. Expertise certifiée nearshore.',
  path: '/expertises/palantir',
});

export default function PalantirExpertisePage() {
  return <ExpertiseClientPage expertiseKey="palantir" expertiseSlug="palantir" />;
}
