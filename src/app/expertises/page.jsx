'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProviderClient';
import { siteContent } from '../../translations/siteContent';
import {
  BarChart3,
  Database,
  Cloud,
  BrainCircuit,
  ShieldAlert,
  Layers,
  ArrowRight,
} from 'lucide-react';
import styles from './expertises.module.scss';

const expertiseIcons = [
  <BarChart3 size={28} />,
  <Database size={28} />,
  <Cloud size={28} />,
  <BrainCircuit size={28} />,
  <ShieldAlert size={28} />,
  <Layers size={28} />,
];

export default function ExpertisesHubPage() {
  const { language } = useLanguage();
  const t = siteContent[language] || siteContent.fr;
  const expT = t.expertises;
  const expList = t.home.expertisesList;
  const c = t.common;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>{expT.badge}</span>
        <h1>{expT.h1}</h1>
        <p className={styles.lead}>{expT.lead}</p>
      </header>

      <div className={styles.grid}>
        {expList.map((exp, idx) => (
          <div key={exp.slug} className={styles.card}>
            {exp.badge && <span className={styles.badgeNiche}>{exp.badge}</span>}
            <div className={styles.iconWrapper}>{expertiseIcons[idx]}</div>
            <h2>{exp.title}</h2>
            <p>{exp.desc}</p>
            <Link href={exp.link} className={styles.link}>
              <span>{c.readMore}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      <section className={styles.ctaBox}>
        <h2>{language === 'fr' ? "Besoin d'un accompagnement technique ?" : 'Need Technical Guidance?'}</h2>
        <p>{language === 'fr' ? 'Échangez avec nos architectes Data pour définir la meilleure stack pour votre projet.' : 'Speak with our Data architects to define the optimal stack for your project.'}</p>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>{c.talkToExpert}</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
