import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Consultant Data Scientist & IA Nearshore Maroc — NEYO Analytics',
  description: 'Recrutez un Consultant Data Scientist au Maroc pour vos modèles de Machine Learning, LLMs, et solutions IA avancées.',
  path: '/consultants/data-scientist',
});

export default function DataScientistPage() {
  return <ConsultantClientPage consultantKey="dataScientist" />;
}
