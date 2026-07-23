import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../consultants.module.scss';

export const metadata = {
  title: 'Consultant Data Analyst Nearshore Maroc | NEYO Analytics',
  description: 'Trouvez un Consultant Data Analyst senior au Maroc pour vos analyses métriques, SQL, Power BI & reporting décisionnel.',
};

export default function DataAnalystPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Analyse Métier & KPIs</span>
        <h1>Consultant Data Analyst Nearshore Maroc</h1>
        <p className={styles.lead}>
          Transformez vos flux de données complexes en insights actionnables et tableaux de bord d'aide à la décision.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Compétences clés</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Requêtage SQL Avancé (Joins, CTE, Window Functions)</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Power BI / Tableau / Looker</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Analyse statistique Python / Pandas</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Cadrage des besoins métier & Spécifications</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Renforcez vos équipes avec un Data Analyst</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Demander une short-list</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
