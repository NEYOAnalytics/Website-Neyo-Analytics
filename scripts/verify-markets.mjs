import assert from 'node:assert/strict';
const base=process.env.NEYO_TEST_URL||'http://127.0.0.1:3108';
async function page(path){const r=await fetch(base+path);assert.equal(r.status,200,path);const html=await r.text();const main=(html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]||'').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');assert.equal((main.match(/<h1\b/g)||[]).length,1,'One H1: '+path);return {html,main,text:main.replace(/<[^>]+>/g,' ')};}
const home=await page('/');assert.ok(home.main.includes('/entreprises-maroc'));assert.ok(home.main.includes('/nearshore-maroc'));assert.ok(!/48h|-40%/.test(home.main));
const national=await page('/entreprises-maroc');assert.ok(national.text.includes('OFFRE NATIONALE'));assert.ok(national.text.includes('RÉALISATION DE PROJET'));assert.ok(national.text.includes('RENFORT DE CONSULTANTS'));assert.ok(!/nearshore|Europe|Golfe|France/.test(national.text.split('Votre entreprise est située à l’étranger')[0]));assert.ok(!/48h|-40%|certifiés/.test(national.main));assert.ok(national.html.includes('https://www.neyo-analytics.com/entreprises-maroc'));
for(const key of ['Data Analyst','Data Engineer','Data Scientist','Cloud','Power BI'])assert.ok(national.text.includes(key));
const international=await page('/nearshore-maroc');assert.ok(international.text.includes('OFFRE INTERNATIONALE'));assert.ok(international.main.includes('marche=international'));assert.ok(international.main.includes('/entreprises-maroc'));
const descriptions=new Set();
for(const path of ['/expertises/power-bi','/expertises/data-engineering','/expertises/ia-data-science','/expertises/tableau-qlik-looker','/expertises/cloud','/expertises/palantir','/expertises/data-governance','/consultants/data-analyst','/consultants/data-engineer','/consultants/data-scientist','/consultants/power-bi','/consultants/bi-developer','/consultants/data-architect']){
 const p=await page(path);assert.ok(p.main.includes('/entreprises-maroc')&&p.main.includes('/nearshore-maroc'));
 const prefix=p.text.split('DEUX OFFRES')[0];assert.ok(!/nearshore|France|48h|40%/i.test(prefix),'Shared page has market-neutral copy: '+path);
 const desc=p.html.match(/<meta name="description" content="([^"]+)"/)[1];descriptions.add(desc);
 console.log('200 '+path);
}
for(const [market,need] of [['maroc','projet'],['maroc','consultant'],['international','consultant']]){
 const p=await page(`/contact?marche=${market}&besoin=${need}&profil=Data%20Analyst`);
 assert.match(p.html,new RegExp(`<option value="${market}" selected=""`));assert.match(p.html,new RegExp(`<option value="${need}" selected=""`));assert.ok(p.html.includes('value="Data Analyst"'));
}
const sitemap=await(await fetch(base+'/sitemap.xml')).text();assert.ok(sitemap.includes('/entreprises-maroc'));assert.ok(sitemap.includes('/nearshore-maroc'));
assert.equal(descriptions.size,13,'Distinct descriptions for all shared pages');
console.log('PASS: market separation, 13 technical/profile pages, canonical, 3 contact contexts, sitemap. Unique shared descriptions: '+descriptions.size);
