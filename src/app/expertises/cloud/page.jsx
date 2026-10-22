import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Cloud Data & Fabric',
  description: "Cloud Data & Fabric : architecture et exploitation des plateformes Data sur Azure, AWS, Google Cloud et Microsoft Fabric. Accompagnement au Maroc et à.",
  path: '/expertises/cloud',
});

export default function CloudExpertisePage() {
  return <ExpertiseClientPage expertiseKey="cloud" expertiseSlug="cloud" />;
}
