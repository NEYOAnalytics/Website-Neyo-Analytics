import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Power BI',
  description: "Power BI : modèles de données, mesures DAX, rapports et diffusion Power BI adaptés à vos indicateurs métier. Accompagnement au Maroc et à l’international.",
  path: '/expertises/power-bi',
});

export default function PowerBiExpertisePage() {
  return <ExpertiseClientPage expertiseKey="powerBi" expertiseSlug="power-bi" />;
}
