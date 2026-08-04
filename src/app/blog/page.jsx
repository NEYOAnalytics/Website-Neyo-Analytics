import React from 'react';
import BlogHubClient from './BlogHubClient';
import { createMetadata } from '../../lib/metadata';

export const metadata = createMetadata({
  title: 'Blog Nearshore Data & IA — NEYO Analytics',
  description: 'Conseils, comparatifs et guides stratégiques sur le Nearshore Data & IA au Maroc : Power BI, Data Engineering, Machine Learning et Cloud Data.',
  path: '/blog',
});

export default function BlogHubPage() {
  return <BlogHubClient />;
}
