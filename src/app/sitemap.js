import { getPublishedPosts } from '../lib/blog';

export const dynamic = 'force-dynamic';

export default function sitemap() {
  const baseUrl = 'https://www.neyo-analytics.com';

  const staticRoutes = [
    '',
    '/nearshore-maroc',
    '/pourquoi-externaliser',
    '/consultants',
    '/consultants/power-bi',
    '/consultants/data-analyst',
    '/consultants/data-engineer',
    '/consultants/data-scientist',
    '/consultants/bi-developer',
    '/consultants/data-architect',
    '/expertises',
    '/expertises/power-bi',
    '/expertises/tableau-qlik-looker',
    '/expertises/data-engineering',
    '/expertises/cloud',
    '/expertises/palantir',
    '/expertises/ia-data-science',
    '/expertises/data-governance',
    '/notre-process',
    '/cas-usages',
    '/a-propos',
    '/blog',
    '/contact',
    '/aid-signal',
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '' ? 'weekly' : route.startsWith('/blog/') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/nearshore-maroc' ? 0.9 : route.startsWith('/blog/') ? 0.7 : 0.8,
  }));
  return [...routes, ...getPublishedPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
    changeFrequency: 'monthly', priority: 0.7,
  }))];
}
