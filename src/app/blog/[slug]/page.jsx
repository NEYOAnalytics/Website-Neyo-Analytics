import { notFound } from 'next/navigation';
import { getPublishedPost } from '../../../lib/blog';
import BlogPostClient from './BlogPostClient';
import BlogArticle from '../BlogArticle';

export const dynamic = 'force-dynamic';
const BASE_URL = 'https://www.neyo-analytics.com';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) return { title: 'Article introuvable', robots: { index: false, follow: false } };
  const title = post.seoTitle || (typeof post.title === 'object' ? post.title.fr : post.title);
  const description = typeof post.excerpt === 'object' ? post.excerpt.fr : post.excerpt;
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'NEYO Analytics', locale: 'fr_FR', type: 'article', publishedTime: post.publishedAt, modifiedTime: post.updatedAt || post.publishedAt, authors: ['NEYO Analytics'], images: [{ url: `${BASE_URL}/logo-square.png`, width: 512, height: 512, alt: 'NEYO Analytics' }] },
    twitter: { card: 'summary_large_image', title, description, images: [`${BASE_URL}/logo-square.png`] },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();
  return post.editorial ? <BlogArticle post={post} /> : <BlogPostClient post={post} />;
}
