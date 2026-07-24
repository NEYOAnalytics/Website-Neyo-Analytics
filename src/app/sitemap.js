import { blogPosts } from '../data/blogPosts';

export default function sitemap() {
  const baseUrl = 'https://www.neyo-analytics.com';

  const staticRoutes = [
    '',
    '/nearshore-maroc',
    '/pourquoi-externaliser',
    '/consultants',
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
    '/notre-process',
    '/cas-usages',
    '/a-propos',
    '/blog',
    '/contact',
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : route.startsWith('/blog/') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/nearshore-maroc' ? 0.9 : route.startsWith('/blog/') ? 0.7 : 0.8,
  }));
}
