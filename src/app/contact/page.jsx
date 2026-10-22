import React from 'react';
import ContactClient from './ContactClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Contactez NEYO Analytics — Devis & Échange Expert Data',
  description: 'Prenez contact avec nos experts Data & IA pour qualifier votre besoin, obtenir une proposition sur-mesure ou recevoir des profils qualifiés.',
  path: '/contact',
});

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const market = ['maroc', 'international'].includes(params?.marche) ? params.marche : '';
  const need = ['projet', 'consultant', 'suivi'].includes(params?.besoin) ? params.besoin : '';
  const profile = typeof params?.profil === 'string' ? params.profil.slice(0, 150) : '';
  return <ContactClient initialMarket={market} initialNeed={need} initialProfile={profile} />;
}
