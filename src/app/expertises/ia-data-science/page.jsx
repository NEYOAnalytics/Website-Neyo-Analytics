import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise IA & Data Science Nearshore Maroc — NEYO Analytics',
  description: 'Consultants Data Scientists & IA au Maroc : Machine Learning, NLP, LLMs, MLflow, PyTorch. Modèles prédictifs et solutions IA pour l\'Europe et le Golfe.',
  path: '/expertises/ia-data-science',
});

export default function IADataScienceExpertisePage() {
  return <ExpertiseClientPage expertiseKey="iaDataScience" expertiseSlug="ia-data-science" />;
}
