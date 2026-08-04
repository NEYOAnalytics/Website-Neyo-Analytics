import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Architecte Data Cloud Nearshore Maroc — NEYO Analytics',
  description: 'Architectes Data Cloud seniors basés au Maroc (Azure, AWS, GCP, Databricks, Data Mesh). Conseils & gouvernance de l\'architecture Data.',
  path: '/consultants/data-architect',
});

export default function DataArchitectPage() {
  return <ConsultantClientPage consultantKey="dataArchitect" />;
}
