import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blogPosts';
import BlogPostClient from './BlogPostClient';

const BASE_URL = 'https://www.neyo-analytics.com';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article introuvable — NEYO Analytics',
    };
  }

  // Use French title/excerpt as primary (or fallback to string)
  const title = typeof post.title === 'object'
    ? `${post.title.fr} — NEYO Analytics`
    : `${post.title} — NEYO Analytics`;

  const description = typeof post.excerpt === 'object'
    ? post.excerpt.fr
    : post.excerpt;

  const url = `${BASE_URL}/blog/${slug}`;

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
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'NEYO Analytics'],
      images: [
        {
          url: `${BASE_URL}/logo-square.png`,
          width: 512,
          height: 512,
          alt: 'NEYO Analytics',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/logo-square.png`],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient />;
}
