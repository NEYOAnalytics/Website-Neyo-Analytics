import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../consultants.module.scss';

export const metadata = {
  title: 'Architecte Data Cloud Nearshore',
  description: 'Architectes Data Cloud seniors au Maroc (Azure, AWS, GCP, Databricks, Data Mesh) en régie sous 1 à 2 semaines.',
};

export default function DataArchitectPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Architecture & Gouvernance</span>
        <h1>Architecte Data Cloud Nearshore Maroc</h1>
        <p className={styles.lead}>
          Conception d'architectures de données modernes, scalables, hautement disponibles et conformes aux exigences de sécurité.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Domaines d'intervention</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Modern Data Stack & Cloud Architecture</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Data Mesh & Data Fabric Frameworks</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Sécurité, RGPD & Gouvernance des données</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Audit d'infrastructure & FinOps</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Échanger avec un Architecte Data Senior</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Demander une consultation</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
