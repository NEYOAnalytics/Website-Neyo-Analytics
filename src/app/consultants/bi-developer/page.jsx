import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../consultants.module.scss';

export const metadata = {
  title: 'Développeur Power BI Nearshore',
  description: 'Recrutez un Consultant Développeur Power BI senior au Maroc (DAX, Modélisation, Fabric) en régie sous 1 à 2 semaines.',
};

export default function BiDeveloperPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Régie BI & Data Viz</span>
        <h1>Développeur BI & Consultant Power BI Nearshore Maroc</h1>
        <p className={styles.lead}>
          Conception de dashboards décisionnels interactifs, modélisation DAX performante et mise en place de la gouvernance Power BI.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Compétences clés</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Modélisation DAX Complexe & Tabular</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Power Query & Préparation M</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Microsoft Fabric & Direct Lake</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Design UI/UX & Data Storytelling</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Sécurité RLS / CLS</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Optimisation de requêtes & Performance</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Discuter de votre besoin en Power BI</h2>
        <p>Recevez un profil qualifié sous 48h.</p>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Parler à un expert Power BI</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
