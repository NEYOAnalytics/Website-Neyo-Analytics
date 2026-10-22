import ConsultantClientPage from '../ConsultantClientPage';
import { createMetadata } from '../../../lib/metadata';

export const metadata = createMetadata({
  title: 'Architecte Data Cloud',
  description: "Architecte Data Cloud : architecture et exploitation des plateformes Data sur Azure, AWS, Google Cloud et Microsoft Fabric. Accompagnement au Maroc et à.",
  path: '/consultants/data-architect',
});

export default function DataArchitectPage() {
  return <ConsultantClientPage consultantKey="dataArchitect" />;
}
