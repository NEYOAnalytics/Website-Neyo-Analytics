'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';
import { useLanguage } from '../../components/LanguageProviderClient';
import { formatPublicationDate } from '../../lib/publication';
import { BreadcrumbJsonLd } from '../../components/JsonLd';
import styles from '../consultants/consultants.module.scss';

export default function BlogHubClient({ posts }) {
  const { language } = useLanguage();
  const lang = language === 'en' ? 'en' : 'fr';
  const isFr = lang === 'fr';

  return (
    <div className={styles.container}>
      <BreadcrumbJsonLd items={[{ name: 'Blog', url: '/blog' }]} />
      <header className={styles.header}>
        <span className={styles.badge}>{isFr ? 'Dossiers & Analyses' : 'Guides & Industry Insights'}</span>
        <h1>{isFr ? 'Data, Power BI, Cloud et IA : les guides NEYO' : 'Data, Power BI, Cloud & AI: NEYO Guides'}</h1>
        <p className={styles.lead}>
          {isFr
            ? 'Des réponses concrètes pour choisir vos outils, fiabiliser vos indicateurs et faire avancer vos projets Data & IA.'
            : 'Practical guides to choosing tools, building reliable metrics and delivering Data & AI projects. New guides are available in French.'}
        </p>
      </header>

      <div className={styles.grid}>
        {posts.map((post) => {
          const postLang = post.editorial ? 'fr' : lang;
          const title = typeof post.title === 'object' ? post.title[postLang] : post.title;
          const excerpt = typeof post.excerpt === 'object' ? post.excerpt[postLang] : post.excerpt;
          const category = typeof post.category === 'object' ? post.category[postLang] : post.category;

          return (
            <article key={post.slug} className={styles.card} lang={postLang}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#Fa9100', fontSize: '0.8rem', fontWeight: '600' }}>
                  <Tag size={14} />
                  <span>{category}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted, #94a3b8)', fontSize: '0.78rem' }}>
                  <Clock size={13} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h2><Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{title}</Link></h2>
              <p>{excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted, #94a3b8)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={13} /> <time dateTime={post.publishedAt}>{formatPublicationDate(post.publishedAt)}</time></span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={13} /> {post.author}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className={styles.btnDetail}>
                <span>{isFr ? "Lire l'article complet" : 'Read Full Article'}</span>
                <ArrowRight size={16} />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
