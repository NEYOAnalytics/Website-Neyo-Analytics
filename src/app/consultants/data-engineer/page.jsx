import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Consultant Data Engineer Nearshore Maroc — NEYO Analytics',
  description: 'Recrutez un Consultant Data Engineer senior basé au Maroc (Databricks, Snowflake, Airflow, Spark). Francophone, opérationnel sous 1 à 2 semaines.',
  path: '/consultants/data-engineer',
});

export default function DataEngineerPage() {
  return <ConsultantClientPage consultantKey="dataEngineer" />;
}
