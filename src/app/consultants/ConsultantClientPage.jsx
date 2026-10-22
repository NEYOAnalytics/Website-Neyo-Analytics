'use client';

import React from 'react';
import { sharedOfferContent } from '../../translations/sharedOfferContent';
import MarketChoice from '../../components/markets/MarketChoice';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './consultants.module.scss';
import { useLanguage } from '../../components/LanguageProviderClient';
import { siteContent } from '../../translations/siteContent';
import { BreadcrumbJsonLd, FAQJsonLd } from '../../components/JsonLd';

export default function ConsultantClientPage({ consultantKey }) {
  const { language } = useLanguage();
  const lang = language === 'en' ? 'en' : 'fr';
  const consultantSlug = ({dataEngineer: 'data-engineer', powerBi: 'power-bi', biDeveloper: 'bi-developer', dataAnalyst: 'data-analyst', dataScientist: 'data-scientist', dataArchitect: 'data-architect'})[consultantKey] || consultantKey;
  const original = siteContent[lang].consultantDetails[consultantKey];
  const content = original ? sharedOfferContent(original, consultantKey, lang, "consultant") : null;

  if (!content) return null;

  const outsourceLink = '/pourquoi-externaliser';
  const outsourceLabel = lang === 'fr' ? 'pourquoi externaliser' : 'why outsource';

  const faqItems = content.faq ? content.faq.map(({ q, a }) => ({ question: q, answer: a })) : [];

  return (
    <div className={styles.container}>
      <BreadcrumbJsonLd
        items={[
          { name: 'Consultants', url: '/consultants' },
          { name: content.badge || consultantKey, url: `/consultants/${consultantSlug}` },
        ]}
      />
      {faqItems.length > 0 && <FAQJsonLd faqs={faqItems} />}

      <header className={styles.header}>
        <span className={styles.badge}>{content.badge}</span>
        <h1 style={{ color: 'var(--text-main, white)' }}>{content.h1}</h1>
        <p className={styles.lead} style={{ color: 'var(--text-secondary, #cbd5e1)' }}>
          {content.lead}
        </p>
      </header>

      {/* Stack */}
      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', lineHeight: '1.7' }}>
        <h2 style={{ color: 'var(--text-main, white)', marginBottom: '1rem' }}>{content.sectionTitle}</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {content.items.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary, #cbd5e1)' }}>
              <CheckCircle2 color="#38bdf8" size={18} style={{ flexShrink: 0 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* H2 body section */}
        {content.bodyTitle && (
          <>
            <h2 style={{ color: 'var(--text-main, white)', marginBottom: '1rem' }}>{content.bodyTitle}</h2>
            <p style={{ color: 'var(--text-secondary, #cbd5e1)', marginBottom: '1rem' }}>
              {content.bodyText1}{' '}

              {content.bodyText1b || ''}
            </p>
            {content.bodyText2 && (
              <p style={{ color: 'var(--text-secondary, #cbd5e1)', marginBottom: '1rem' }}>
                {content.bodyText2}{' '}
                {content.bodyText2Link && (
                  <Link href={outsourceLink} style={{ color: '#38bdf8', textDecoration: 'underline' }}>{outsourceLabel}</Link>
                )}
                {content.bodyText2b || ''}
              </p>
            )}
            {content.bodyList && (
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary, #cbd5e1)', marginBottom: '1.5rem' }}>
                {content.bodyList.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
            {content.pricing && (
              <p style={{ color: 'var(--text-secondary, #cbd5e1)', fontStyle: 'italic', background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
                💡 {content.pricing}
              </p>
            )}
          </>
        )}
      </div>

      {/* FAQ */}
      {content.faq?.length > 0 && (
        <div style={{ maxWidth: '900px', margin: '0 auto 3rem auto' }}>
          <h2 style={{ color: 'var(--text-main, white)', marginBottom: '1.5rem' }}>
            FAQ
          </h2>
          <dl style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {content.faq.map(({ q, a }, i) => (
              <div key={i} style={{ borderLeft: '3px solid #38bdf8', paddingLeft: '1rem' }}>
                <dt style={{ fontWeight: 700, color: 'var(--text-main, white)', marginBottom: '0.4rem' }}>{q}</dt>
                <dd style={{ color: 'var(--text-secondary, #cbd5e1)', margin: 0 }}>{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <MarketChoice compact />

      {/* CTA */}
      <section className={styles.ctaBox}>
        <h2 style={{ color: 'var(--text-main, white)' }}>{content.ctaTitle}</h2>
        {content.ctaDesc && <p style={{ color: 'var(--text-secondary, #cbd5e1)' }}>{content.ctaDesc}</p>}
        <Link href="/contact" className={styles.btnPrimary}>
          <span>{content.ctaBtn}</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
