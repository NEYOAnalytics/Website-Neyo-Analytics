'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';
import { useLanguage } from '../../components/LanguageProviderClient';
import { blogPosts } from '../../data/blogPosts';
import styles from '../consultants/consultants.module.scss';

export default function BlogHubPage() {
  const { language } = useLanguage();
  const lang = language === 'en' ? 'en' : 'fr';
  const isFr = lang === 'fr';

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>{isFr ? 'Dossiers & Analyses' : 'Guides & Industry Insights'}</span>
        <h1>{isFr ? 'Le Blog Nearshore Data & IA' : 'The Nearshore Data & AI Blog'}</h1>
        <p className={styles.lead}>
          {isFr
            ? 'Conseils, comparatifs techniques et guides stratégiques pour optimiser vos projets Data avec le modèle Nearshore Maroc.'
            : 'Expert guides, technical comparisons, and strategic insights for scaling Data & AI teams with Nearshore Morocco.'}
        </p>
      </header>

      <div className={styles.grid}>
        {blogPosts.map((post) => {
          const title = typeof post.title === 'object' ? post.title[lang] : post.title;
          const excerpt = typeof post.excerpt === 'object' ? post.excerpt[lang] : post.excerpt;
          const category = typeof post.category === 'object' ? post.category[lang] : post.category;

          return (
            <div key={post.slug} className={styles.card}>
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
              <h2>{title}</h2>
              <p>{excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted, #94a3b8)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={13} /> {post.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={13} /> {post.author}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className={styles.btnDetail}>
                <span>{isFr ? "Lire l'article complet" : 'Read Full Article'}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
