// Pure helpers kept separate so publication boundaries can be tested without Next.js.
export function isPublished(post, now = new Date()) {
  const timestamp = Date.parse(post.publishedAt);
  return Number.isFinite(timestamp) && timestamp <= new Date(now).getTime();
}

export function publishedPosts(posts, now = new Date()) {
  return posts.filter((post) => isPublished(post, now))
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt) || a.slug.localeCompare(b.slug));
}

export function formatPublicationDate(value) {
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long', timeZone: 'Europe/Paris',
  }).format(new Date(value));
}
