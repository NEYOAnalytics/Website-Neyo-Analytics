import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Consultant Power BI',
  description: "Consultant Power BI : modèles de données, mesures DAX, rapports et diffusion Power BI adaptés à vos indicateurs métier. Accompagnement au Maroc et à.",
  path: '/consultants/power-bi',
});

export default function PowerBiConsultantPage() {
  return <ConsultantClientPage consultantKey="powerBi" />;
}
