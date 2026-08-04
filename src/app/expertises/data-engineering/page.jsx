import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Data Engineering Nearshore Maroc — NEYO Analytics',
  description: 'Consultants Data Engineers au Maroc : pipelines PySpark, Databricks, Snowflake, Airflow, dbt. Architecture moderne et traitement de données à grande échelle.',
  path: '/expertises/data-engineering',
});

export default function DataEngineeringExpertisePage() {
  return <ExpertiseClientPage expertiseKey="dataEngineering" expertiseSlug="data-engineering" />;
}
