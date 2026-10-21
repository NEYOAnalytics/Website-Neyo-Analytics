import { immediatePosts } from './editorial/immediate.js';
import { powerBiPosts } from './editorial/powerbi.js';
import { cloudPosts } from './editorial/cloud.js';
import { engineeringPosts } from './editorial/engineering.js';
import { governancePosts } from './editorial/governance.js';
import { platformPosts } from './editorial/platforms.js';

// Calendar order is explicit. Future content is imported only by src/lib/blog.js (server-only).
const scheduled = [
  powerBiPosts[0], powerBiPosts[1], cloudPosts[0], cloudPosts[1],
  powerBiPosts[2], powerBiPosts[3], engineeringPosts[0], platformPosts[0],
  governancePosts[0], cloudPosts[2], engineeringPosts[1], engineeringPosts[2],
  platformPosts[1], governancePosts[1], governancePosts[2],
];

function prepare(post, publishedAt) {
  const words = JSON.stringify([post.intro, post.sections, post.faq]).split(/\s+/).length;
  return { ...post, editorial: true, author: 'NEYO Analytics', publishedAt, readTime: `${Math.max(3, Math.ceil(words / 220))} min` };
}

export const editorialPosts = [
  ...immediatePosts.map((post) => prepare(post, '2026-10-21T00:00:00+02:00')),
  ...scheduled.map((post, index) => {
    const date = new Date(Date.UTC(2026, 9, 22 + index)).toISOString().slice(0, 10);
    const offset = date < '2026-10-25' ? '+02:00' : '+01:00';
    return prepare(post, `${date}T09:00:00${offset}`);
  }),
];
