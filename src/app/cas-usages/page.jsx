import React from 'react';
import CasUsagesClient from './CasUsagesClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Cas d\'Usages & REX Client — NEYO Analytics',
  description: 'Découvrez nos cas d\'usages concrets et retours d\'expérience en Data Engineering, Business Intelligence, Data Science et Cloud Data.',
  path: '/cas-usages',
});

export default function CasUsagesPage() {
  return <CasUsagesClient />;
}
