import assert from 'node:assert/strict';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { editorialPosts } from '../src/data/editorialPosts.js';
import { publishedPosts, isPublished } from '../src/lib/publication.js';

assert.equal(editorialPosts.length, 20);
assert.equal(new Set(editorialPosts.map(p => p.slug)).size, 20);
assert.equal(publishedPosts(editorialPosts, '2026-10-21T12:00:00+02:00').length, 5);
const scheduled = editorialPosts.slice(5);
for (const [index, post] of scheduled.entries()) {
  const at = new Date(post.publishedAt);
  assert.equal(isPublished(post, new Date(at.getTime() - 1)), false, post.slug);
  assert.equal(isPublished(post, at), true, post.slug);
  assert.equal(publishedPosts(editorialPosts, at).length, 6 + index);
  const local = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' }).format(at);
  assert.equal(local, '09:00', post.slug);
  if (index) {
    const previousDate = new Date(Date.parse(scheduled[index - 1].publishedAt));
    const diff = at - previousDate;
    assert.ok(diff === 86400000 || (index === 3 && diff === 90000000), 'Consecutive local days, including DST');
  }
}
assert.equal(publishedPosts(editorialPosts, '2026-11-05T09:00:00+01:00').length, 20);
assert.equal(isPublished({publishedAt:'invalid'}), false);
const rows = [];
for (const post of editorialPosts) {
  assert.match(post.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(post.seoTitle.length + ' | NEYO Analytics'.length <= 70, `Title: ${post.slug}`);
  assert.ok(post.excerpt.length >= 140 && post.excerpt.length <= 160, `Description: ${post.slug} (${post.excerpt.length})`);
  assert.ok(post.faq.length >= 3 && post.faq.length <= 4);
  assert.ok(post.sections.length >= 6);
  assert.ok(post.sources.length >= 2);
  const text = JSON.stringify([post.intro,post.sections,post.faq]);
  assert.ok(!/[—–]/.test(text), `Punctuation: ${post.slug}`);
  assert.ok(text.split(/\s+/).length >= 600, `Useful depth: ${post.slug}`);
  const internal = [...text.matchAll(/\]\((\/[^)]+)\)/g)].map(m=>m[1]).concat(post.related.map(l=>l.href));
  assert.ok(internal.length >= 2 && internal.length <= 4, `Internal links: ${post.slug}`);
  for (const href of internal) {
    if (href.startsWith('/blog/')) {
      const target = editorialPosts.find(p=>p.slug===href.slice(6));
      assert.ok(target, `Missing target ${href}`);
      assert.ok(Date.parse(target.publishedAt) <= Date.parse(post.publishedAt), `Link before publication: ${href}`);
    } else assert.ok(existsSync(`src/app${href}/page.jsx`), `Missing route ${href}`);
  }
  for (const section of post.sections) for (const i of section.sources || []) assert.ok(post.sources[i]);
  rows.push({slug:post.slug, title:post.title, keyword:post.primaryKeyword, publishedAt:post.publishedAt, words:text.split(/\s+/).length, titleLength:post.seoTitle.length+17, descriptionLength:post.excerpt.length});
}
mkdirSync('docs', {recursive:true});
writeFileSync('docs/editorial-calendar.json', JSON.stringify(rows, null, 2)+'\n');
console.log(`PASS: 20 articles; 5 immediate + 15 daily; DST boundaries; metadata; internal links; content integrity. ${rows.reduce((n,r)=>n+r.words,0)} words (approx.).`);
