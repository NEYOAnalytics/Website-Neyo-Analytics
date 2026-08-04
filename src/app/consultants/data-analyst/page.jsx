import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Consultant Data Analyst Nearshore Maroc — NEYO Analytics',
  description: 'Trouvez un Consultant Data Analyst senior au Maroc pour vos analyses métriques, SQL, Power BI & reporting décisionnel.',
  path: '/consultants/data-analyst',
});

export default function DataAnalystPage() {
  return <ConsultantClientPage consultantKey="dataAnalyst" />;
}
