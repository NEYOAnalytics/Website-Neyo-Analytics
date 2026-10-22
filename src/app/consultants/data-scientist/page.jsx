import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Consultant Data Scientist & IA',
  description: "Consultant Data Scientist & IA : évaluation des cas d’usage, préparation des données et développement de solutions d’IA mesurables. Accompagnement au Maroc.",
  path: '/consultants/data-scientist',
});

export default function DataScientistPage() {
  return <ConsultantClientPage consultantKey="dataScientist" />;
}
