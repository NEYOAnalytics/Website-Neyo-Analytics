'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProviderClient';
import { siteContent } from '../../translations/siteContent';
import { FAQJsonLd } from '../../components/JsonLd';
import { ClipboardList, UserCheck, FileCheck, LineChart, ArrowRight } from 'lucide-react';
import styles from './process.module.scss';

export default function NotreProcessPage() {
  const { language } = useLanguage();
  const t = siteContent[language] || siteContent.fr;
  const p = t.process;
  const c = t.common;

  const steps = [
    {
      num: '01',
      icon: <ClipboardList size={32} />,
      title: language === 'fr' ? '1. Expression du Besoin & Cadrage' : '1. Requirements & Framing',
      desc: language === 'fr' ? 'Analyse approfondie de votre cahier des charges, de votre stack technique et des compétences recherchées.' : 'In-depth analysis of your specifications, technical stack, and required skills.',
    },
    {
      num: '02',
      icon: <UserCheck size={32} />,
      title: language === 'fr' ? '2. Sourcing & Short-list (48h)' : '2. Sourcing & Shortlist (48h)',
      desc: language === 'fr' ? 'Présélection de 2 à 3 candidats qualifiés et évalués techniquement. Entretien direct avec vos équipes.' : 'Pre-selection of 2 to 3 qualified, technically evaluated candidates. Direct interview with your teams.',
    },
    {
      num: '03',
      icon: <FileCheck size={32} />,
      title: language === 'fr' ? '3. Validation & Démarrage' : '3. Validation & Onboarding',
      desc: language === 'fr' ? 'Validation de la proposition commerciale et démarrage opérationnel en 1 à 2 semaines.' : 'Validation of the commercial proposal and operational kickoff in 1 to 2 weeks.',
    },
    {
      num: '04',
      icon: <LineChart size={32} />,
      title: language === 'fr' ? '4. Suivi & Garantie Qualité' : '4. Monitoring & Quality Guarantee',
      desc: language === 'fr' ? 'Suivi hebdomadaire de la performance et accompagnement continu par un Account Manager NEYO dédié.' : 'Weekly performance tracking and continuous support by a dedicated NEYO Account Manager.',
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>{p.badge}</span>
        <h1>{p.h1}</h1>
        <p className={styles.lead}>{p.lead}</p>
      </header>

      <div className={styles.stepsGrid}>
        {steps.map((s, idx) => (
          <div key={idx} className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.num}>{s.num}</span>
              <div className={styles.icon}>{s.icon}</div>
            </div>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <section className={styles.ctaBox}>
        <h2>{language === 'fr' ? 'Prêt à démarrer la sélection ?' : 'Ready to Start Candidate Selection?'}</h2>
        <p>{language === 'fr' ? 'Obtenez votre short-list de candidats qualifiés sous 48h.' : 'Get your shortlist of qualified candidates within 48h.'}</p>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>{c.talkToExpert}</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
