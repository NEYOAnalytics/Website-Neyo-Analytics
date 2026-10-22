import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise IA & Data Science',
  description: "IA & Data Science : évaluation des cas d’usage, préparation des données et développement de solutions d’IA mesurables. Accompagnement au Maroc et à.",
  path: '/expertises/ia-data-science',
});

export default function IADataScienceExpertisePage() {
  return <ExpertiseClientPage expertiseKey="iaDataScience" expertiseSlug="ia-data-science" />;
}
