const BASE_URL = 'https://www.neyo-analytics.com';

export function createMetadata({
  title,
  description,
  path = '',
  image = '/logo-square.png',
  type = 'website',
}) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${BASE_URL}${cleanPath === '/' ? '' : cleanPath}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : '/' + image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'NEYO Analytics',
      locale: 'fr_FR',
      type,
      images: [
        {
          url: imageUrl,
          width: 512,
          height: 512,
          alt: 'NEYO Analytics Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
