import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Tableau, Qlik Sense & Looker',
  description: "Tableau, Qlik Sense & Looker : conception de rapports, modèles et migrations entre Tableau, Qlik et Looker selon votre environnement. Accompagnement au Maroc.",
  path: '/expertises/tableau-qlik-looker',
});

export default function TableauQlikLookerExpertisePage() {
  return <ExpertiseClientPage expertiseKey="tableauQlikLooker" expertiseSlug="tableau-qlik-looker" />;
}
