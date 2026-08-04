import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Développeur BI & Power BI Nearshore Maroc — NEYO Analytics',
  description: 'Recrutez un Consultant / Développeur Power BI senior basé au Maroc (DAX, Modélisation, Fabric). Francophone, disponible sous 1 à 2 semaines.',
  path: '/consultants/bi-developer',
});

export default function BiDeveloperPage() {
  return <ConsultantClientPage consultantKey="biDeveloper" />;
}
