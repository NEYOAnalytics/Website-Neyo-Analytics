'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageProviderClient';
import { siteContent } from '../translations/siteContent';
import {
  ArrowRight,
  TrendingDown,
  Zap,
  Globe2,
  ShieldCheck,
  BarChart3,
  Database,
  Cloud,
  BrainCircuit,
  ShieldAlert,
  Layers,
} from 'lucide-react';
import styles from './page.module.scss';

const expertiseIcons = [
  <BarChart3 size={26} />,
  <Database size={26} />,
  <Cloud size={26} />,
  <BrainCircuit size={26} />,
  <ShieldAlert size={26} />,
  <Layers size={26} />,
];

export default function HomePage() {
  const { language } = useLanguage();
  const t = siteContent[language] || siteContent.fr;
  const h = t.home;
  const c = t.common;

  return (
    <div className={styles.homeContainer}>

      {/* HERO */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.badgeTop}>{h.badge}</span>
          <h1 className={styles.heroTitle}>
            {h.heroTitlePart1}
            <span className={styles.gradientText}>{h.heroTitleHighlight}</span>
            {h.heroTitlePart2}
          </h1>
          <p className={styles.heroSubtitle} dangerouslySetInnerHTML={{ __html: h.heroSubtitle }} />
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.btnPrimary}>
              <span>{c.contactUs}</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/consultants" className={styles.btnSecondary}>
              <span>{c.discoverConsultants}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className={styles.statsBanner}>
        <div className={styles.statsGrid}>
          {h.stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statVal}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statSub}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI NEARSHORE */}
      <section className={styles.whySection}>
        <div className={styles.sectionHeader}>
          <h2>{h.whyTitle}</h2>
          <p>{h.whyIntro}</p>
        </div>
        <div className={styles.whyGrid}>
          {h.whyCards.map((card, idx) => (
            <div key={idx} className={styles.whyCard}>
              {idx === 0 && <TrendingDown className={styles.whyIcon} size={32} />}
              {idx === 1 && <Zap className={styles.whyIcon} size={32} />}
              {idx === 2 && <Globe2 className={styles.whyIcon} size={32} />}
              {idx === 3 && <ShieldCheck className={styles.whyIcon} size={32} />}
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.whyCtaWrapper}>
          <Link href="/nearshore-maroc" className={styles.linkBanner}>
            <span>{language === 'fr' ? "Découvrir l'argumentaire complet Nearshore Maroc" : 'Discover Full Nearshore Morocco Overview'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* EXPERTISES GRID — uses merged expertisesList */}
      <section className={styles.expertisesSection}>
        <div className={styles.sectionHeader}>
          <h2>{h.expertisesTitle}</h2>
          <p>{h.expertisesIntro}</p>
        </div>
        <div className={styles.expertisesGrid}>
          {h.expertisesList.map((exp, idx) => (
            <div key={exp.slug} className={styles.expCard}>
              {exp.badge && <span className={styles.nicheBadge}>{exp.badge}</span>}
              <div className={styles.iconBox}>{expertiseIcons[idx]}</div>
              <h3>{exp.title}</h3>
              <p>{exp.desc}</p>
              <Link href={exp.link} className={styles.expLink}>
                <span>{language === 'fr' ? `Voir l'expertise ${exp.title.split(' ')[0]}` : `Explore ${exp.title.split(' ')[0]}`}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.sectionHeader}>
          <h2>{h.processTitle}</h2>
          <p>{h.processIntro}</p>
        </div>
        <div className={styles.processGrid}>
          {h.processSteps.map((step, idx) => (
            <div key={idx} className={styles.processCard}>
              <span className={styles.stepNum}>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.processCtaWrapper}>
          <Link href="/notre-process" className={styles.btnSecondary}>
            <span>{c.seeDetailProcess}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCtaSection}>
        <div className={styles.ctaBox}>
          <h2>{h.finalCtaTitle}</h2>
          <p>{h.finalCtaDesc}</p>
          <Link href="/contact" className={styles.btnPrimaryLarge}>
            <span>{c.contactUs}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
