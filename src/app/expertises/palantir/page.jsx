import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../expertises.module.scss';

export const metadata = {
  title: 'Expertise Palantir Foundry & AIP',
  description: 'Expertise de niche Palantir Foundry, Ontologie et AIP (Artificial Intelligence Platform) avec nos consultants au Maroc.',
};

export default function PalantirExpertisePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge} style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
          Expertise Avancée & Niche Premium
        </span>
        <h1>Consultants Palantir Foundry & AIP Nearshore</h1>
        <p className={styles.lead}>
          Modélisation d'ontologies métier complexes, intégration de données hétérogènes et déploiement de cas d'usages opérationnels sur la suite Palantir (Foundry, AIP).
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.7' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Compétences Palantir</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#c084fc" size={18} /> Conception d'Ontologies Palantir Foundry</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#c084fc" size={18} /> Ingestion & Pipelines Contour / Pipeline Builder</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#c084fc" size={18} /> Integration Palantir AIP (Artificial Intelligence Platform)</li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 color="#c084fc" size={18} /> Applications Workshop & Gouvernance des accès</li>
        </ul>
      </div>

      <section className={styles.ctaBox}>
        <h2>Discuter d'un projet Palantir Foundry / AIP</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Contacter un spécialiste Palantir</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
