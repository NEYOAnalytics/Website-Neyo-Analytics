import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { editorialPosts } from '../src/data/editorialPosts.js';
import { isPublished } from '../src/lib/publication.js';
const base = process.env.NEYO_TEST_URL || 'http://127.0.0.1:3107';
const now = new Date();
const hubResponse = await fetch(`${base}/blog`);
assert.equal(hubResponse.status,200);
const hub = await hubResponse.text();
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemapResponse.status,200);
const sitemap = await sitemapResponse.text();
for(const post of editorialPosts) {
 const published = isPublished(post,now);
 const response = await fetch(`${base}/blog/${post.slug}`);
 assert.equal(response.status,published?200:404,post.slug);
 const html = await response.text();
 if(published) {
  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length,1,post.slug);
  assert.ok(html.includes(`https://www.neyo-analytics.com/blog/${post.slug}`));
  assert.ok(html.includes('BlogPosting'));
  assert.ok(html.includes(post.publishedAt));
  assert.ok(html.includes('Questions fréquentes'));
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(!title?.includes('NEYO Analytics | NEYO Analytics'));
 } else {
  assert.ok(!html.includes(post.intro),`Future body leak: ${post.slug}`);
  assert.ok(!hub.includes(post.slug),`Future hub leak: ${post.slug}`);
  assert.ok(!sitemap.includes(post.slug),`Future sitemap leak: ${post.slug}`);
 }
 console.log(`${response.status} ${post.slug}`);
}
assert.ok(sitemap.includes('pourquoi-externaliser-data-maroc'));
const legacy=await fetch(`${base}/blog/pourquoi-externaliser-data-maroc`);
assert.equal(legacy.status,200);
assert.equal((await fetch(`${base}/blog/inexistent-test-article`)).status,404);
if(base.includes('127.0.0.1')) {
 function files(dir){return readdirSync(dir).flatMap(name=>{const p=`${dir}/${name}`; return statSync(p).isDirectory()?files(p):[p];});}
 for(const path of files('.next/static/chunks').filter(f=>f.endsWith('.js'))) {
  const content=readFileSync(path,'utf8');
  for(const p of editorialPosts.slice(5)) assert.ok(!content.includes(p.slug),`Future client bundle leak: ${path}`);
 }
}
console.log('PASS: HTTP, metadata, legacy route, future 404, sitemap and no future content in client bundles.');
