import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../expertises.module.scss';

export const metadata = {
  title: 'Expertise Power BI & Data Viz',
  description: 'Conception de dashboards Power BI, DAX complexe, modélisation et Microsoft Fabric avec nos experts au Maroc.',
};

export default function PowerBiExpertisePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Power BI & Business Intelligence</span>
        <h1>Expertise Power BI & Data Viz Nearshore</h1>
        <p className={styles.lead}>
          Accélérez la prise de décision au sein de votre organisation grâce à des tableaux de bord Power BI haute performance et une modélisation analytique irréprochable.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Savoir-faire Power BI</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Modélisation en étoile & DAX avancé</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Migration vers Microsoft Fabric & Direct Lake</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Audit & Optimisation de performance de rapports</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Sécurité RLS/CLS & Gouvernance Tenant</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Renforcer vos projets Power BI avec un consultant Nearshore</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Parler à un expert Power BI</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
