import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../expertises.module.scss';

export const metadata = {
  title: 'Expertise Data Engineering & Pipelines | NEYO Analytics',
  description: 'Architectures Modern Data Stack : Databricks, Snowflake, Airflow, dbt, Spark. Consultants Data Engineering Nearshore.',
};

export default function DataEngineeringExpertisePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Data Engineering</span>
        <h1>Expertise Data Engineering & Modern Data Stack</h1>
        <p className={styles.lead}>
          Construisez des architectures de données modulaires, robustes et hautement automatisées pour alimenter vos systèmes analytiques et IA.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Domaines clés</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Ingestion & Processing Spark / Databricks</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Entrepôts de données Cloud (Snowflake, BigQuery)</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Transformations dbt & Data Quality</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Orchestration de flux (Airflow, Dagster, Prefect)</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Besoin d'un accompagnement en Data Engineering ?</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Discuter avec un Data Engineer Senior</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
