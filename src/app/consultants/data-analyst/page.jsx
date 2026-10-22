import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Consultant Data Analyst',
  description: "Consultant Data Analyst : analyse métier, définition d’indicateurs et automatisation des reportings pour vos équipes. Accompagnement au Maroc et à.",
  path: '/consultants/data-analyst',
});

export default function DataAnalystPage() {
  return <ConsultantClientPage consultantKey="dataAnalyst" />;
}
