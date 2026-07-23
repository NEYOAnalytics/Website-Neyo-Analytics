import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../expertises.module.scss';

export const metadata = {
  title: 'Expertise Tableau, Qlik & Looker',
  description: 'Consultants experts Tableau Software, Qlik Sense et Looker en régie au Maroc.',
};

export default function TableauQlikLookerExpertisePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>BI Multi-outils</span>
        <h1>Expertise Tableau, Qlik & Looker</h1>
        <p className={styles.lead}>
          Accompagnement et régie d'experts sur l'ensemble des plateformes BI historiques et modernes du marché.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Plateformes couvertes</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Tableau Desktop / Server / Prep</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Qlik Sense / Qlik Cloud / QVD</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Google Looker & LookML</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Projets de migration inter-outils BI</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Échanger avec un consultant BI</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Demander un profil BI</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
