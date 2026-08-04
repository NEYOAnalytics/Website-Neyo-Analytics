import React from 'react';
import ProcessClient from './ProcessClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Notre Processus de Recrutement & Staffing Data — NEYO Analytics',
  description: 'Découvrez la méthodologie NEYO Analytics en 4 étapes pour qualifier vos besoins et staffer vos consultants Data & IA généralement sous 48h à 2 semaines.',
  path: '/notre-process',
});

export default function NotreProcessPage() {
  return <ProcessClient />;
}
