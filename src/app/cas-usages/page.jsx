'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProviderClient';
import { siteContent } from '../../translations/siteContent';
import { ArrowRight, Building2, ShoppingBag, Rocket, CheckCircle2, Cpu, Wrench, Layers, AlertCircle } from 'lucide-react';
import styles from '../consultants/consultants.module.scss';

export default function CasUsagesPage() {
  const { language } = useLanguage();
  const t = siteContent[language] || siteContent.fr;
  const cu = t.casUsages;
  const c = t.common;

  const isFr = language === 'fr';

  const casesData = isFr ? [
    {
      sector: 'Retail & E-commerce',
      title: 'Modernisation du Reporting Ventes & Stocks avec Power BI & Microsoft Fabric',
      icon: <ShoppingBag size={26} color="#Fa9100" />,
      problem: 'Les acteurs du Retail doivent aujourd\'hui centraliser des données provenant de multiples sources (ERP, CRM, plateformes e-commerce, logiciels de caisse ou encore solutions logistiques) afin de piloter efficacement leurs performances commerciales. L\'absence d\'une plateforme Data unifiée engendre souvent des reportings manuels chronophages et une visibilité limitée sur les ventes, les stocks et la rentabilité.',
      approach: [
        'Concevoir un Data Warehouse moderne sous Snowflake ou Microsoft Fabric.',
        'Centraliser et modéliser les données métiers.',
        'Déployer des tableaux de bord Power BI sécurisés et performants.',
        'Automatiser les flux de données grâce aux pipelines Data Engineering.',
        'Mettre en place des indicateurs décisionnels en temps réel.',
      ],
      tech: ['Power BI', 'Microsoft Fabric', 'Snowflake', 'SQL', 'Python', 'Azure Data Factory', 'Azure Synapse Analytics'],
      benefits: [
        'Centralisation complète des données métiers.',
        'Réduction significative du temps consacré au reporting.',
        'Pilotage en temps réel des ventes et des stocks.',
        'Amélioration de la prise de décision stratégique.',
        'Architecture Data scalable adaptée à la croissance de l\'entreprise.',
      ],
    },
    {
      sector: 'SaaS & Scale-ups',
      title: 'Construction d\'une Modern Data Platform pour les Entreprises en Croissance',
      icon: <Rocket size={26} color="#Fa9100" />,
      problem: 'Les startups et scale-ups européennes connaissent souvent une forte croissance qui entraîne une multiplication des outils métiers (HubSpot, Salesforce, Stripe, Google Analytics, Notion, PostgreSQL, etc.). Les données deviennent rapidement dispersées et difficiles à exploiter pour les équipes métiers et dirigeantes.',
      approach: [
        'La centralisation des données provenant des différents outils métiers.',
        'La conception de pipelines Data automatisés et scalables.',
        'La mise en place d\'une plateforme décisionnelle moderne.',
        'La création de dashboards stratégiques pour les équipes dirigeantes.',
        'L\'automatisation des KPI financiers, marketing et commerciaux.',
      ],
      tech: ['Databricks', 'Microsoft Fabric', 'Snowflake', 'Power BI', 'SQL', 'Python', 'dbt', 'Airflow', 'Azure'],
      benefits: [
        'Une vision consolidée des indicateurs stratégiques.',
        'Des reportings automatisés et fiables.',
        'Une meilleure prise de décision grâce à la donnée.',
        'Une architecture Data capable d\'accompagner la croissance de l\'entreprise.',
        'Une réduction significative du temps consacré aux traitements manuels des données.',
      ],
    },
    {
      sector: 'Industrie & Supply Chain',
      title: 'Intelligence Artificielle & Optimisation des Processus Opérationnels',
      icon: <Building2 size={26} color="#Fa9100" />,
      problem: 'Les entreprises industrielles et logistiques doivent anticiper les fluctuations de la demande, optimiser leurs approvisionnements et améliorer la visibilité sur leurs opérations. La centralisation des données opérationnelles et l\'utilisation de modèles prédictifs permettent aujourd\'hui d\'améliorer considérablement les performances des équipes métiers.',
      approach: [
        'La mise en place de plateformes Data industrielles.',
        'L\'automatisation des flux provenant des ERP et logiciels métiers.',
        'Le développement de modèles prédictifs pour l\'aide à la décision.',
        'La création de tableaux de bord opérationnels et stratégiques.',
        'L\'industrialisation des traitements Data à grande échelle.',
      ],
      tech: ['Python', 'Databricks', 'Microsoft Fabric', 'Power BI', 'SQL', 'Snowflake', 'Azure Machine Learning', 'PyTorch'],
      benefits: [
        'Une meilleure visibilité sur les performances opérationnelles.',
        'L\'optimisation des processus métiers.',
        'Une réduction des traitements manuels et répétitifs.',
        'Une meilleure anticipation des besoins opérationnels.',
        'Une architecture Data robuste et évolutive adaptée aux enjeux industriels.',
      ],
    },
  ] : [
    {
      sector: 'Retail & E-commerce',
      title: 'Sales & Inventory Reporting Modernization with Power BI & Microsoft Fabric',
      icon: <ShoppingBag size={26} color="#Fa9100" />,
      problem: 'Retail companies must consolidate data from multiple sources (ERP, CRM, e-commerce, POS systems, and logistics tools) to effectively track commercial performance. Lacking a unified Data platform often leads to time-consuming manual reporting and limited visibility into sales, inventory, and profitability.',
      approach: [
        'Design a modern Data Warehouse using Snowflake or Microsoft Fabric.',
        'Centralize and model core business data.',
        'Deploy secure and performant Power BI dashboards.',
        'Automate data pipelines with modern Data Engineering.',
        'Set up real-time decision support indicators.',
      ],
      tech: ['Power BI', 'Microsoft Fabric', 'Snowflake', 'SQL', 'Python', 'Azure Data Factory', 'Azure Synapse Analytics'],
      benefits: [
        'Complete centralization of business data.',
        'Significant reduction in reporting time.',
        'Real-time tracking of sales and inventory.',
        'Improved strategic decision-making.',
        'Scalable Data architecture tailored to company growth.',
      ],
    },
    {
      sector: 'SaaS & Scale-ups',
      title: 'Building a Modern Data Platform for High-Growth Companies',
      icon: <Rocket size={26} color="#Fa9100" />,
      problem: 'European startups and scale-ups often experience rapid growth resulting in a proliferation of business tools (HubSpot, Salesforce, Stripe, Google Analytics, Notion, PostgreSQL). Data quickly becomes fragmented and hard to leverage for business and executive teams.',
      approach: [
        'Centralizing data from disparate business tools.',
        'Designing automated, scalable Data pipelines.',
        'Implementing a modern analytics platform.',
        'Building executive dashboards for leadership.',
        'Automating financial, marketing, and sales KPIs.',
      ],
      tech: ['Databricks', 'Microsoft Fabric', 'Snowflake', 'Power BI', 'SQL', 'Python', 'dbt', 'Airflow', 'Azure'],
      benefits: [
        'A consolidated view of strategic metrics.',
        'Automated and trustworthy reporting.',
        'Enhanced data-driven decision making.',
        'A Data architecture built to support company scaling.',
        'Significant reduction in manual data processing time.',
      ],
    },
    {
      sector: 'Industry & Supply Chain',
      title: 'Artificial Intelligence & Operational Process Optimization',
      icon: <Building2 size={26} color="#Fa9100" />,
      problem: 'Industrial and logistics companies must anticipate demand shifts, optimize supply, and enhance visibility across operations. Operational data unification and predictive modeling significantly boost business performance.',
      approach: [
        'Setting up industrial Data platforms.',
        'Automating data flows from ERPs and business software.',
        'Developing predictive models for decision support.',
        'Creating operational and executive dashboards.',
        'Industrializing large-scale Data processing.',
      ],
      tech: ['Python', 'Databricks', 'Microsoft Fabric', 'Power BI', 'SQL', 'Snowflake', 'Azure Machine Learning', 'PyTorch'],
      benefits: [
        'Higher visibility into operational performance.',
        'Optimization of core business processes.',
        'Reduction of manual and repetitive tasks.',
        'Better forecasting of operational needs.',
        'A robust, scalable Data architecture for industrial scale.',
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <span className={styles.badge}>{cu.badge}</span>
        <h1>{cu.h1}</h1>
        <p className={styles.lead}>{cu.lead}</p>
      </header>

      {/* SUB-HEADER BANNER */}
      <div style={{
        textAlign: 'center',
        margin: '-1rem auto 3rem auto',
        padding: '1rem 1.5rem',
        background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
        border: '1px solid var(--card-border, rgba(255, 255, 255, 0.08))',
        borderRadius: '30px',
        maxWidth: '720px',
        color: '#Fa9100',
        fontWeight: '600',
        fontSize: '1rem',
      }}>
        {isFr
          ? 'Nos équipes interviennent rapidement sur des projets à forte valeur ajoutée.'
          : 'Our teams onboard quickly on high-impact strategic projects.'}
      </div>

      {/* CASES CARDS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '980px', margin: '0 auto 4rem auto' }}>
        {casesData.map((item, idx) => (
          <article
            key={idx}
            style={{
              background: 'var(--card-bg, rgba(255, 255, 255, 0.03))',
              border: '1px solid var(--card-border, rgba(255, 255, 255, 0.1))',
              borderRadius: '20px',
              padding: '2.5rem',
              transition: 'border-color 0.3s ease',
            }}
          >
            {/* SECTOR BADGE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              {item.icon}
              <span style={{ color: '#Fa9100', fontWeight: '700', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {item.sector}
              </span>
            </div>

            {/* TITLE */}
            <h2 style={{ color: 'var(--text-main, white)', fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.3' }}>
              {item.title}
            </h2>

            {/* PROBLEM STATEMENT */}
            <div style={{
              background: 'rgba(250, 145, 0, 0.05)',
              borderLeft: '4px solid #Fa9100',
              padding: '1.2rem 1.5rem',
              borderRadius: '0 12px 12px 0',
              marginBottom: '1.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#Fa9100', fontWeight: '700', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                <AlertCircle size={16} />
                <span>{isFr ? 'PROBLÉMATIQUE' : 'PROBLEM STATEMENT'}</span>
              </div>
              <p style={{ color: 'var(--text-secondary, #cbd5e1)', fontSize: '0.96rem', lineHeight: '1.65', margin: 0 }}>
                {item.problem}
              </p>
            </div>

            {/* TWO-COLUMN GRID: APPROACH & BENEFITS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.75rem' }}>
              {/* NOTRE APPROCHE */}
              <div style={{ background: 'var(--card-bg, rgba(255,255,255,0.02))', border: '1px solid var(--card-border, rgba(255,255,255,0.06))', padding: '1.25rem', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main, white)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.85rem' }}>
                  <Wrench size={16} style={{ color: '#Fa9100' }} />
                  <span>{isFr ? 'NOTRE APPROCHE' : 'OUR APPROACH'}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.approach.map((step, sIdx) => (
                    <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary, #cbd5e1)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                      <CheckCircle2 size={15} style={{ color: '#Fa9100', flexShrink: 0, marginTop: '3px' }} />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BÉNÉFICES ATTENDUS */}
              <div style={{ background: 'var(--card-bg, rgba(255,255,255,0.02))', border: '1px solid var(--card-border, rgba(255,255,255,0.06))', padding: '1.25rem', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main, white)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.85rem' }}>
                  <Layers size={16} style={{ color: '#4ade80' }} />
                  <span>{isFr ? 'BÉNÉFICES ATTENDUS' : 'EXPECTED BENEFITS'}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.benefits.map((ben, bIdx) => (
                    <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary, #cbd5e1)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                      <CheckCircle2 size={15} style={{ color: '#4ade80', flexShrink: 0, marginTop: '3px' }} />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TECHNOLOGIES MOBILISÉES */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted, #94a3b8)', fontWeight: '600', fontSize: '0.82rem', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                <Cpu size={14} style={{ color: '#Fa9100' }} />
                <span>{isFr ? 'TECHNOLOGIES MOBILISÉES' : 'TECH STACK'}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {item.tech.map((tItem, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      background: 'rgba(250, 145, 0, 0.08)',
                      color: '#Fa9100',
                      border: '1px solid rgba(250, 145, 0, 0.25)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                    }}
                  >
                    {tItem}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CUSTOM CTA BOX */}
      <section className={styles.ctaBox} style={{ maxWidth: '980px', margin: '0 auto' }}>
        <h2>{isFr ? 'Besoin d\'un consultant Nearshore spécialisé ?' : 'Need a Specialized Nearshore Consultant?'}</h2>
        <p style={{ maxWidth: '850px', margin: '0 auto 1.75rem auto', lineHeight: '1.7', fontSize: '1.02rem' }}>
          {isFr ? (
            <>
              NEYO Analytics met à disposition des consultants <strong>Data Analysts, Data Engineers, Data Scientists, Consultants Power BI, Microsoft Fabric, Databricks, Snowflake et Cloud Engineers</strong> afin d'accompagner les entreprises européennes et du Golfe dans leurs projets Data & IA. Nos consultants Nearshore interviennent rapidement et s'intègrent facilement à vos équipes grâce à une parfaite maîtrise du français, de l'anglais, de l'arabe et à une forte proximité culturelle.
            </>
          ) : (
            <>
              NEYO Analytics provides expert <strong>Data Analysts, Data Engineers, Data Scientists, Power BI consultants, Microsoft Fabric, Databricks, Snowflake, and Cloud Engineers</strong> to support European and GCC enterprises in their Data & AI initiatives. Our Nearshore consultants onboard rapidly and integrate seamlessly thanks to fluent French, English, Arabic, and cultural alignment.
            </>
          )}
        </p>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>{c.requestCase}</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
