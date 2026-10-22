import React from 'react';

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEYO Analytics',
    url: 'https://www.neyo-analytics.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.neyo-analytics.com/logo.png',
      width: 1088,
      height: 328,
    },
    image: 'https://www.neyo-analytics.com/logo-square.png',
    description: 'Conseil Data, BI, IA et Cloud : projets et consultants pour les entreprises au Maroc et accompagnement nearshore pour les clients internationaux.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    sameAs: [
      'https://www.linkedin.com/company/neyo-analytics',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqs }) {
  if (!faqs || faqs.length === 0) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({ name, description, providerName = 'NEYO Analytics' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'Organization',
      name: providerName,
    },
    areaServed: ['FR', 'BE', 'CH', 'LU', 'UK', 'AE', 'MA'],
    description: description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items = [] }) {
  if (!items || items.length === 0) return null;

  const breadcrumbs = [
    { name: 'Accueil', url: 'https://www.neyo-analytics.com' },
    ...items,
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://www.neyo-analytics.com${item.url.startsWith('/') ? item.url : '/' + item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({ title, description, url, datePublished, author = 'NEYO Analytics' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: url.startsWith('http') ? url : `https://www.neyo-analytics.com${url.startsWith('/') ? url : '/' + url}`,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: datePublished || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NEYO Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.neyo-analytics.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `https://www.neyo-analytics.com${url.startsWith('/') ? url : '/' + url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
