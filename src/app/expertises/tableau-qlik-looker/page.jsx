import ExpertiseClientPage from '../ExpertiseClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Expertise Tableau, Qlik Sense & Looker Nearshore — NEYO Analytics',
  description: 'Développeurs BI multi-outils au Maroc : Tableau, Qlik Sense, Looker, SSRS. Idéal pour migrations et déploiements décisionnels multi-plateformes.',
  path: '/expertises/tableau-qlik-looker',
});

export default function TableauQlikLookerExpertisePage() {
  return <ExpertiseClientPage expertiseKey="tableauQlikLooker" expertiseSlug="tableau-qlik-looker" />;
}
