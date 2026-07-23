import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Database, ShieldCheck, Zap } from 'lucide-react';
import styles from '../consultants.module.scss';

export const metadata = {
  title: 'Consultant Data Engineer Nearshore Maroc | NEYO Analytics',
  description: 'Recrutez un Consultant Data Engineer senior basés au Maroc (Databricks, Snowflake, Airflow, Spark). Francophone, opérationnel sous 1 à 2 semaines.',
};

export default function DataEngineerPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Régie & Assistance Technique</span>
        <h1>Consultant Data Engineer Nearshore Maroc</h1>
        <p className={styles.lead}>
          Conception, automatisation et optimisation de vos pipelines de données (ETL/ELT), architectures Data Warehousing et Data Lakes cloud en régie ou au forfait.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Expertise technique & Stack maîtrisé</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Databricks (PySpark, Delta Lake)</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Snowflake & Google BigQuery</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Orchestration Airflow & Prefect</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Transformations dbt & SQL Avancé</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Azure Data Factory / AWS Glue</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Streaming Kafka / Event Hubs</li>
        </ul>

        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Pourquoi externaliser votre Data Engineering avec NEYO ?</h2>
        <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>
          La mise en place de pipelines de données fiables est le fondement indispensable de toute stratégie décisionnelle et IA. Nos consultants Data Engineers au Maroc s'intègrent à vos équipes agiles (Scrum, Kanban) avec un suivi quotidien et le même fuseau horaire que la France, la Belgique et la Suisse.
        </p>
      </div>

      <section className={styles.ctaBox}>
        <h2>Besoin d'un Data Engineer sous 1 à 2 semaines ?</h2>
        <p>Découvrez les profils présélectionnés disponibles pour renforcer votre équipe.</p>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Demander un Data Engineer</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
