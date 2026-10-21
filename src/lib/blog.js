import 'server-only';
import { blogPosts as legacyPosts } from '../data/blogPosts';
import { editorialPosts } from '../data/editorialPosts';
import { publishedPosts } from './publication';

const legacyDates = {
  'pourquoi-externaliser-data-maroc': '2026-01-15',
  'consultant-power-bi-nearshore-integration': '2025-12-28',
  'microsoft-fabric-vs-databricks': '2025-12-10',
  'recruter-vs-externaliser-data-engineer': '2026-01-24',
  'data-analyst-vs-data-engineer-vs-data-scientist': '2026-01-20',
  'row-level-security-power-bi-guide-complet': '2026-01-18',
};

const allPosts = [
  ...legacyPosts.map((post) => ({
    ...post, publishedAt: `${legacyDates[post.slug]}T09:00:00+01:00`,
  })),
  ...editorialPosts,
];

export function getPublishedPosts(now = new Date()) {
  return publishedPosts(allPosts, now);
}

export function getPublishedPost(slug, now = new Date()) {
  return getPublishedPosts(now).find((post) => post.slug === slug);
}

// Never send the full catalogue, or future article content, to client components.
export function getPublishedSummaries(now = new Date()) {
  return getPublishedPosts(now).map(({ slug, title, excerpt, category, date, publishedAt, author, readTime, editorial }) =>
    ({ slug, title, excerpt, category, date, publishedAt, author, readTime, editorial }));
}
