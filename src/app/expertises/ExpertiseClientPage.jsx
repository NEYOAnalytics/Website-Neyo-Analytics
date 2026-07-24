'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './expertises.module.scss';
import { useLanguage } from '../../components/LanguageProviderClient';
import { siteContent } from '../../translations/siteContent';

export default function ExpertiseClientPage({ expertiseKey }) {
  const { language } = useLanguage();
  const content = siteContent[language === 'en' ? 'en' : 'fr'].expertisesDetails[expertiseKey];

  if (!content) return null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>{content.badge}</span>
        <h1 style={{ color: 'var(--text-main, white)' }}>{content.h1}</h1>
        <p className={styles.lead} style={{ color: 'var(--text-secondary, #cbd5e1)' }}>
          {content.lead}
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: 'var(--text-secondary, #cbd5e1)', lineHeight: '1.7' }}>
        <h2 style={{ color: 'var(--text-main, white)', marginBottom: '1rem' }}>{content.sectionTitle}</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          {content.items.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary, #cbd5e1)' }}>
              <CheckCircle2 color="#38bdf8" size={18} style={{ flexShrink: 0 }} /> 
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2 style={{ color: 'var(--text-main, white)' }}>{content.ctaTitle}</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>{content.ctaBtn}</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
