'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProviderClient';
import { siteContent } from '../../translations/siteContent';
import { Clock, ShieldAlert, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import styles from './externaliser.module.scss';

export default function PourquoiExternaliserPage() {
  const { language } = useLanguage();
  const t = siteContent[language] || siteContent.fr;
  const e = t.externaliser;
  const c = t.common;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>{e.badge}</span>
        <h1>{e.h1}</h1>
        <p className={styles.lead}>{e.lead}</p>
      </header>

      <div className={styles.contentGrid}>
        <div className={styles.block}>
          <div className={styles.iconHeader}>
            <Clock size={28} className={styles.icon} />
            <h2>{e.block1Title}</h2>
          </div>
          <p>{e.block1Desc}</p>
        </div>

        <div className={styles.block}>
          <div className={styles.iconHeader}>
            <TrendingUp size={28} className={styles.icon} />
            <h2>{e.block2Title}</h2>
          </div>
          <p>{e.block2Desc}</p>
        </div>

        <div className={styles.block}>
          <div className={styles.iconHeader}>
            <ShieldAlert size={28} className={styles.icon} />
            <h2>{e.block3Title}</h2>
          </div>
          <p>{e.block3Desc}</p>
        </div>

        <div className={styles.block}>
          <div className={styles.iconHeader}>
            <CheckCircle size={28} className={styles.icon} />
            <h2>{language === 'fr' ? '4. Expertise Data Spécialisée' : '4. Specialized Data Expertise'}</h2>
          </div>
          <p>{language === 'fr' ? 'Bénéficiez immédiatement de profils formés sur les dernières technologies (Databricks, Power BI, Fabric, Palantir).' : 'Gain immediate access to profiles trained on the latest tech stacks (Databricks, Power BI, Fabric, Palantir).'}</p>
        </div>
      </div>

      <div className={styles.ctaBox}>
        <h2>{language === 'fr' ? 'Besoin de renforcer votre équipe Data ?' : 'Need to Strengthen Your Data Team?'}</h2>
        <p>{language === 'fr' ? 'Recevez une présélection de candidats sous 48 heures.' : 'Receive a pre-selection of candidates within 48 hours.'}</p>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>{c.talkToExpert}</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
