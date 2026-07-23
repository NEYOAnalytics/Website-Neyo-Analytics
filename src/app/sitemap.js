export default function sitemap() {
  const baseUrl = 'https://www.neyo-analytics.com';

  const routes = [
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/nearshore-maroc' ? 0.9 : 0.8,
  }));
}
