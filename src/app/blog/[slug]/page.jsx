'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { useLanguage } from '../../../components/LanguageProviderClient';
import { blogPosts } from '../../../data/blogPosts';
import { ArrowLeft, Calendar, User, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../../consultants/consultants.module.scss';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug;
  const { language } = useLanguage();
  const lang = language === 'en' ? 'en' : 'fr';
  const isFr = lang === 'fr';

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const title = typeof post.title === 'object' ? post.title[lang] : post.title;
  const excerpt = typeof post.excerpt === 'object' ? post.excerpt[lang] : post.excerpt;
  const category = typeof post.category === 'object' ? post.category[lang] : post.category;
  const intro = typeof post.intro === 'object' ? post.intro[lang] : post.intro;
  const sections = post.sections && post.sections[lang] ? post.sections[lang] : post.sections;
  const statsBox = post.statsBox && post.statsBox[lang] ? post.statsBox[lang] : post.statsBox;
  const sources = typeof post.sources === 'object' ? post.sources[lang] : post.sources;

  return (
    <div className={styles.container}>
      <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#Fa9100', textDecoration: 'none', marginBottom: '2rem', fontWeight: '600' }}>
        <ArrowLeft size={16} />
        <span>{isFr ? 'Retour aux articles du blog' : 'Back to Blog Articles'}</span>
      </Link>

      <article style={{ maxWidth: '840px', margin: '0 auto', color: 'var(--text-secondary, #cbd5e1)', lineHeight: '1.75' }}>
        <span className={styles.badge}>{category}</span>
        <h1 style={{ color: 'var(--text-main, white)', fontSize: '2.4rem', fontWeight: '800', margin: '1rem 0 1.5rem 0', lineHeight: '1.25' }}>{title}</h1>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem', color: 'var(--text-muted, #64748b)', fontSize: '0.88rem', borderBottom: '1px solid var(--card-border, rgba(255, 255, 255, 0.1))', paddingBottom: '1.5rem', marginBottom: '2.5rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={15} /> {post.date}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={15} /> {post.author}</span>
          {post.readTime && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={15} /> {post.readTime}</span>
          )}
        </div>

        {/* Intro */}
        {intro && (
          <div style={{ fontSize: '1.1rem', color: 'var(--text-main, #ffffff)', lineHeight: '1.8', marginBottom: '2.5rem', background: 'var(--card-bg, rgba(255, 255, 255, 0.03))', borderLeft: '4px solid #Fa9100', padding: '1.25rem 1.5rem', borderRadius: '0 12px 12px 0' }}>
            {intro}
          </div>
        )}

        {/* Stats Box if available */}
        {statsBox && Array.isArray(statsBox) && statsBox.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {statsBox.map((st, idx) => (
              <div key={idx} style={{ background: 'var(--card-bg, rgba(255, 255, 255, 0.03))', border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))', padding: '1.25rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#Fa9100', marginBottom: '0.3rem' }}>{st.value}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary, #cbd5e1)', lineHeight: '1.3' }}>{st.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Article Sections */}
        {sections && Array.isArray(sections) && sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '2.5rem' }}>
            {section.h2 && (
              <h2 style={{ color: 'var(--text-main, white)', fontSize: '1.6rem', fontWeight: '700', marginTop: '2rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))', paddingBottom: '0.5rem' }}>
                {section.h2}
              </h2>
            )}

            {section.content && (
              <div style={{ fontSize: '1.02rem', lineHeight: '1.8', whiteSpace: 'pre-line', marginBottom: '1.25rem' }}>
                {section.content}
              </div>
            )}

            {section.table && (
              <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--card-bg, rgba(255, 255, 255, 0.02))', border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))', borderRadius: '8px' }}>
                  {section.table.headers && (
                    <thead>
                      <tr style={{ background: 'rgba(250, 145, 0, 0.1)', borderBottom: '1px solid var(--card-border, rgba(255, 255, 255, 0.15))' }}>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} style={{ padding: '0.85rem 1rem', color: '#Fa9100', fontWeight: '700', fontSize: '0.92rem' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {section.table.rows.map((r, rIdx) => (
                      <tr key={rIdx} style={{ borderBottom: '1px solid var(--card-border, rgba(255, 255, 255, 0.06))' }}>
                        {r.map((c, cIdx) => (
                          <td key={cIdx} style={{ padding: '0.85rem 1rem', color: cIdx === 0 ? 'var(--text-main, white)' : 'var(--text-secondary, #cbd5e1)', fontWeight: cIdx === 0 ? '600' : '400', fontSize: '0.92rem' }}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.checklist && Array.isArray(section.checklist) && (
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '1.25rem 0' }}>
                {section.checklist.map((item, itemIdx) => (
                  <li key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.98rem', color: 'var(--text-main, white)', background: 'var(--card-bg, rgba(255, 255, 255, 0.02))', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--card-border, rgba(255, 255, 255, 0.05))' }}>
                    <CheckCircle2 size={18} style={{ color: '#Fa9100', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.bullets && Array.isArray(section.bullets) && section.bullets.length > 0 && (
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                {section.bullets.map((b, bIdx) => (
                  <li key={bIdx} style={{ display: 'flex', gap: '0.75rem', background: 'var(--card-bg, rgba(255, 255, 255, 0.02))', border: '1px solid var(--card-border, rgba(255, 255, 255, 0.06))', padding: '1rem 1.25rem', borderRadius: '10px' }}>
                    <CheckCircle2 size={20} style={{ color: '#Fa9100', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: 'var(--text-main, white)', display: 'block', marginBottom: '0.25rem', fontSize: '1.02rem' }}>{b.title}</strong>
                      <span style={{ fontSize: '0.96rem', lineHeight: '1.6' }}>{b.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Keywords tags footer */}
        {post.keywords && (
          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted, #64748b)', display: 'block', marginBottom: '0.75rem' }}>
              {isFr ? 'MOTS-CLÉS & THÉMATIQUES :' : 'KEYWORDS & TOPICS:'}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {post.keywords.map((kw, kIdx) => (
                <span key={kIdx} style={{ fontSize: '0.78rem', background: 'rgba(250, 145, 0, 0.08)', color: '#Fa9100', border: '1px solid rgba(250, 145, 0, 0.25)', padding: '0.25rem 0.65rem', borderRadius: '20px' }}>
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Sources footnote (uniquement si présent) */}
        {sources && (
          <div style={{ marginTop: '2rem', fontSize: '0.82rem', color: 'var(--text-muted, #64748b)', fontStyle: 'italic', background: 'var(--card-bg, rgba(255, 255, 255, 0.02))', padding: '1rem', borderRadius: '8px' }}>
            <strong>{isFr ? 'Sources & Références :' : 'Sources & References:'}</strong> {sources}
          </div>
        )}

        {/* CTA Box */}
        <section className={styles.ctaBox} style={{ marginTop: '4rem' }}>
          <h2>{isFr ? 'Prêt à concrétiser votre projet Data ?' : 'Ready to Launch Your Data Project?'}</h2>
          <p>{isFr ? 'Discutez directement avec un expert NEYO Analytics pour qualifier votre besoin et estimer votre ROI Nearshore.' : 'Speak directly with a NEYO Analytics expert to scope your requirements and estimate your Nearshore ROI.'}</p>
          <Link href="/contact" className={styles.btnPrimary}>
            <span>{isFr ? 'Parler à un expert NEYO' : 'Talk to a NEYO Expert'}</span>
            <ArrowRight size={18} />
          </Link>
        </section>
      </article>
    </div>
  );
}
