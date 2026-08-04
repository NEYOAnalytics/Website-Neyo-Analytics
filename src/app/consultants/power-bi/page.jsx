import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Consultant Power BI Nearshore Maroc — NEYO Analytics',
  description: 'Consultant Power BI nearshore au Maroc, francophone, expert DAX, Fabric et RLS. Coûts optimisés jusqu\'à -40% vs France. Staffé sous 1 à 2 semaines.',
  path: '/consultants/power-bi',
});

export default function PowerBiConsultantPage() {
  return <ConsultantClientPage consultantKey="powerBi" />;
}
