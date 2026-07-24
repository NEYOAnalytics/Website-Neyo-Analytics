'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProviderClient';
import { siteContent } from '../../translations/siteContent';
import { Database, BarChart2, Brain, Code, Cpu, ArrowRight } from 'lucide-react';
import styles from './consultants.module.scss';

export default function ConsultantsHubPage() {
  const { language } = useLanguage();
  const t = siteContent[language] || siteContent.fr;
  const cons = t.consultants;
  const c = t.common;

  const roles = [
    {
      slug: 'data-engineer',
      title: language === 'fr' ? 'Consultant Data Engineer' : 'Data Engineer Consultant',
      icon: <Database size={28} />,
      desc: language === 'fr' ? 'Spécialiste de la construction de pipelines de données robustes (PySpark, SQL, Databricks, Snowflake).' : 'Specialist in building robust data pipelines (PySpark, SQL, Databricks, Snowflake).',
      stack: ['PySpark', 'Databricks', 'Snowflake', 'Airflow', 'SQL'],
    },
    {
      slug: 'power-bi',
      title: language === 'fr' ? 'Consultant Power BI' : 'Power BI Consultant',
      icon: <BarChart2 size={28} />,
      desc: language === 'fr' ? 'Expert en modélisation DAX, conception de tableaux de bord décisionnels et gouvernance RLS. Tarifs 30 à 40% inférieurs à un consultant en France.' : 'Expert in DAX modeling, executive dashboard design, and RLS governance. Rates 30 to 40% lower than France-based consultants.',
      stack: ['Power BI', 'DAX', 'Power Query', 'Fabric', 'Direct Lake'],
    },
    {
      slug: 'bi-developer',
      title: language === 'fr' ? 'Développeur BI (Tableau, Qlik, Looker)' : 'BI Developer (Tableau, Qlik, Looker)',
      icon: <Code size={28} />,
      desc: language === 'fr' ? 'Développement de solutions de reporting multi-outils (Tableau, Qlik, Looker, SSRS). Idéal pour les migrations d\'un outil BI vers un autre.' : 'Multi-tool reporting solution development (Tableau, Qlik, Looker, SSRS). Ideal for BI tool migrations.',
      stack: ['Tableau', 'Qlik', 'Looker', 'SQL Server', 'ETL'],
    },
    {
      slug: 'data-analyst',
      title: language === 'fr' ? 'Consultant Data Analyst' : 'Data Analyst Consultant',
      icon: <BarChart2 size={28} />,
      desc: language === 'fr' ? 'Analyse métier, modélisation des KPIs clés et automatisation du reporting d\'entreprise.' : 'Business analytics, key KPI modeling, and corporate reporting automation.',
      stack: ['SQL', 'Power BI', 'Tableau', 'Excel', 'Python'],
    },
    {
      slug: 'data-scientist',
      title: language === 'fr' ? 'Consultant Data Scientist' : 'Data Scientist Consultant',
      icon: <Brain size={28} />,
      desc: language === 'fr' ? 'Modélisation prédictive, Machine Learning, NLP et intégration de modèles LLMs métier.' : 'Predictive modeling, Machine Learning, NLP, and enterprise LLM model integration.',
      stack: ['Python', 'Scikit-Learn', 'PyTorch', 'MLflow', 'LLMs'],
    },
    {
      slug: 'data-architect',
      title: language === 'fr' ? 'Architecte Data & Cloud' : 'Data & Cloud Architect',
      icon: <Cpu size={28} />,
      desc: language === 'fr' ? 'Conception d\'architectures Data Lakehouse modernes, gouvernance et choix des stacks cloud.' : 'Design of modern Data Lakehouse architectures, governance, and cloud stack selection.',
      stack: ['Azure', 'AWS', 'Lakehouse', 'Fabric', 'Gouvernance'],
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>{cons.badge}</span>
        <h1>{cons.h1}</h1>
        <p className={styles.lead}>{cons.lead}</p>
      </header>

      <div className={styles.grid}>
        {roles.map((role) => (
          <div key={role.slug} className={styles.card}>
            <div className={styles.iconWrapper}>{role.icon}</div>
            <h2>{role.title}</h2>
            <p>{role.desc}</p>
            <div className={styles.stackTags}>
              {role.stack.map((tech, idx) => (
                <span key={idx} className={styles.tag}>{tech}</span>
              ))}
            </div>
            <Link href={`/consultants/${role.slug}`} className={styles.btnDetail}>
              <span>{c.readMore}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      <section className={styles.ctaBox}>
        <h2>{language === 'fr' ? 'Recherchez-vous un profil spécifique ?' : 'Looking for a Specific Profile?'}</h2>
        <p>{language === 'fr' ? 'Consultez notre vivier de candidats présélectionnés sous 48h.' : 'Consult our pool of pre-selected candidates within 48h.'}</p>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>{c.talkToExpert}</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
