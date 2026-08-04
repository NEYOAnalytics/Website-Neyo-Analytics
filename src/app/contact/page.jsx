import React from 'react';
import ContactClient from './ContactClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Contactez NEYO Analytics — Devis & Échange Expert Data',
  description: 'Prenez contact avec nos experts Data & IA pour qualifier votre besoin, obtenir une proposition sur-mesure ou recevoir des profils qualifiés.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactClient />;
}
