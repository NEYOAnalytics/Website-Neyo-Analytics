import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Développeur BI & Power BI',
  description: "Développeur BI & Power BI : conception de rapports, modèles et migrations entre Tableau, Qlik et Looker selon votre environnement. Accompagnement au Maroc et.",
  path: '/consultants/bi-developer',
});

export default function BiDeveloperPage() {
  return <ConsultantClientPage consultantKey="biDeveloper" />;
}
