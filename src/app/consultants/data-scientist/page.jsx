import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../consultants.module.scss';

export const metadata = {
  title: 'Consultant Data Scientist & IA Nearshore Maroc | NEYO Analytics',
  description: 'Recrutez un Consultant Data Scientist au Maroc pour vos modèles de Machine Learning, LLMs, et solutions IA avancées.',
};

export default function DataScientistPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Intelligence Artificielle & ML</span>
        <h1>Consultant Data Scientist & IA Nearshore Maroc</h1>
        <p className={styles.lead}>
          Développement de modèles algorithmiques, IA générative (LLM), NLP et vision par ordinateur.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Savoir-faire</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Modèles Machine Learning (Scikit-learn, XGBoost)</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> Deep Learning (PyTorch, TensorFlow)</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> IA Générative (LLM Fine-tuning, RAG, LangChain)</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#38bdf8" size={18} /> MLOps & Industrialisation de modèles</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Lancer votre projet IA avec un expert</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Contacter un spécialiste IA</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
