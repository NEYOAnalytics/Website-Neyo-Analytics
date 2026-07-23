import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../expertises.module.scss';

export const metadata = {
  title: 'Expertise Cloud Data & Fabric | NEYO Analytics',
  description: 'Infrastructures Cloud Data Azure, AWS, GCP & Microsoft Fabric. Consultants experts cloud basés au Maroc.',
};

export default function CloudExpertisePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Cloud & Infrastructures</span>
        <h1>Expertise Cloud Data & Microsoft Fabric</h1>
        <p className={styles.lead}>
          Modernisation de vos plateformes de données sur les environnements Cloud Azure, AWS et GCP.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Services Cloud</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Microsoft Fabric (OneLake, Synapse)</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Migration Cloud Data & Refactoring</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Azure Data Factory / Synapse / ADLS</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Security & FinOps Cloud Data</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Moderniser votre infrastructure Cloud</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Demander un diagnostic Cloud</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
