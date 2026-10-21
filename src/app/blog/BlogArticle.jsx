import Link from 'next/link';
import { BreadcrumbJsonLd } from '../../components/JsonLd';
import { formatPublicationDate } from '../../lib/publication';
import styles from './article.module.scss';

function Inline({ text }) {
  return text.split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`)/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return link[2].startsWith('/')
      ? <Link key={index} href={link[2]}>{link[1]}</Link>
      : <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]}</a>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index}>{part.slice(1, -1)}</code>;
    return part;
  });
}

export default function BlogArticle({ post }) {
  const url = `https://www.neyo-analytics.com/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: post.title, description: post.excerpt, inLanguage: 'fr-FR',
    datePublished: post.publishedAt, dateModified: post.updatedAt || post.publishedAt,
    author: { '@type': 'Organization', name: 'NEYO Analytics', url: 'https://www.neyo-analytics.com' },
    publisher: { '@type': 'Organization', name: 'NEYO Analytics', logo: { '@type': 'ImageObject', url: 'https://www.neyo-analytics.com/logo.png' } },
    image: 'https://www.neyo-analytics.com/logo-square.png', mainEntityOfPage: url, url,
  };
  return (
    <article className={styles.article} lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <BreadcrumbJsonLd items={[{ name: 'Blog', url: '/blog' }, { name: post.title, url: `/blog/${post.slug}` }]} />
      <Link className={styles.back} href="/blog">← Tous les guides</Link>
      <header>
        <span className={styles.category}>{post.category}</span>
        <h1>{post.title}</h1>
        <p className={styles.meta}>Par NEYO Analytics · <time dateTime={post.publishedAt}>{formatPublicationDate(post.publishedAt)}</time> · {post.readTime}</p>
        <p className={styles.intro}><Inline text={post.intro} /></p>
      </header>
      <nav className={styles.toc} aria-label="Sommaire de l’article">
        <strong>Dans ce guide</strong>
        <ul>{post.sections.map((section, index) => <li key={index}><a href={`#section-${index + 1}`}>{section.title}</a></li>)}<li><a href="#questions-frequentes">Questions fréquentes</a></li></ul>
      </nav>
      {post.sections.map((section, index) => (
        <section key={index} id={`section-${index + 1}`}>
          <h2>{section.title}</h2>
          {section.paragraphs?.map((paragraph, i) => <p key={i}><Inline text={paragraph} /></p>)}
          {section.table && <div className={styles.tableWrap} tabIndex={0} role="region" aria-label={section.table.caption}>
            <table><caption>{section.table.caption}</caption><thead><tr>{section.table.headers.map((cell, i) => <th scope="col" key={i}>{cell}</th>)}</tr></thead><tbody>{section.table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j}><Inline text={cell} /></td>)}</tr>)}</tbody></table>
          </div>}
          {section.steps && <ol>{section.steps.map((step, i) => <li key={i}><Inline text={step} /></li>)}</ol>}
          {section.code && <figure><figcaption>{section.code.caption}</figcaption><pre><code>{section.code.text}</code></pre></figure>}
          {section.note && <aside className={styles.note}><Inline text={section.note} /></aside>}
          {section.sources?.length > 0 && <p className={styles.reference}>Référence technique : {section.sources.map((sourceIndex, i) => <span key={sourceIndex}>{i > 0 && ' ; '}<a href={post.sources[sourceIndex].url} target="_blank" rel="noopener noreferrer">{post.sources[sourceIndex].label}</a></span>)}</p>}
        </section>
      ))}
      <section id="questions-frequentes" className={styles.faq}>
        <h2>Questions fréquentes</h2>
        {post.faq.map(({ question, answer }) => <div key={question}><h3>{question}</h3><p><Inline text={answer} /></p></div>)}
      </section>
      <aside className={styles.related}>
        <h2>Pour avancer sur votre projet</h2>
        <ul>{post.related.map(({ href, label }) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
      </aside>
      <footer className={styles.sources}>
        <h2>Sources et documentation</h2>
        <p>Documentation consultée le 21 octobre 2026. Les exemples sont pédagogiques et ne décrivent pas des résultats clients. Fonctionnalités et conditions commerciales à vérifier auprès de l’éditeur au moment du choix.</p>
        <ul>{post.sources.map(({ label, url }) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul>
      </footer>
      <section className={styles.cta}>
        <h2>{post.ctaTitle || 'Passer du guide à votre projet'}</h2>
        <p>{post.ctaText || 'Partagez vos sources de données, vos contraintes et la décision à améliorer. NEYO Analytics vous aide à cadrer les prochaines étapes.'}</p>
        <Link href="/contact">Discuter de votre besoin →</Link>
      </section>
    </article>
  );
}
