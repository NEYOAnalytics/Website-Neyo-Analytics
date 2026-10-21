import React from 'react';
import BlogHubClient from './BlogHubClient';
import { createMetadata } from '../../lib/metadata';
import { getPublishedSummaries } from '../../lib/blog';

export const dynamic = 'force-dynamic';

export const metadata = createMetadata({
  title: 'Blog Data, Power BI, Cloud et IA',
  description: 'Guides pratiques Power BI, GCP, Palantir, cloud et Data Engineering. Comparatifs, tutoriels et méthodes pour cadrer vos projets et fiabiliser vos données.',
  path: '/blog',
});

export default function BlogHubPage() {
  return <BlogHubClient posts={getPublishedSummaries()} />;
}
