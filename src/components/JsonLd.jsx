import React from 'react';

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NEYO Analytics',
    url: 'https://www.neyo-analytics.com',
    logo: 'https://www.neyo-analytics.com/logo.png',
    description: 'Société de conseil spécialisée en Nearshore Data & IA basée au Maroc pour les entreprises en Europe et dans le Golfe.',
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
