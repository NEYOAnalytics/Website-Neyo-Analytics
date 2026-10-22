import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Consultant Data Engineer',
  description: "Consultant Data Engineer : intégration des sources, pipelines et transformations pour des données contrôlées et réutilisables. Accompagnement au Maroc et à.",
  path: '/consultants/data-engineer',
});

export default function DataEngineerPage() {
  return <ConsultantClientPage consultantKey="dataEngineer" />;
}
