import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../expertises.module.scss';

export const metadata = {
  title: 'Expertise IA Générative & Data Science',
  description: 'Projets d\'IA générative (LLM, RAG), Machine Learning et Data Science avec nos experts au Maroc.',
};

export default function IaDataScienceExpertisePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>IA & Algorithmes</span>
        <h1>Expertise IA Générative & Data Science</h1>
        <p className={styles.lead}>
          Intégrez l'intelligence artificielle au cœur de vos produits métiers et automatisez vos traitements complexes.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Solutions IA</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> RAG (Retrieval-Augmented Generation) d'entreprise</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Fine-tuning & Déploiement de LLM</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Algorithmes prédictifs & Maintenance préventive</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> MLOps & Monitoring des performances</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Déployer vos cas d'usage IA avec NEYO</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Parler à un Data Scientist</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
