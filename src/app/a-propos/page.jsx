import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Globe2, ShieldCheck, HeartHandshake } from 'lucide-react';
import styles from '../consultants/consultants.module.scss';

export const metadata = {
  title: 'À propos de NEYO Analytics | Pure Player Nearshore Data & IA',
  description: 'Découvrez NEYO Analytics, cabinet de conseil spécialisé Nearshore Data & IA ancré au Maroc et tourné vers l\'Europe.',
};

export default function AProposPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Notre Histoire & Ambition</span>
        <h1>À propos de NEYO Analytics</h1>
        <p className={styles.lead}>
          Un pure-player spécialiste de la Data et de l'Intelligence Artificielle qui connecte les meilleurs talents du Maroc aux entreprises exigeantes en Europe.
        </p>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto 4rem auto', color: '#cbd5e1', lineHeight: '1.75' }}>
        <h2 style={{ color: 'white', marginBottom: '1.25rem' }}>Notre ADN : L'excellence Data sans compromis</h2>
        <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>
          Fondée par des experts de la Data d'entreprise, NEYO Analytics est née d'un constat simple : les entreprises européennes manquent cruellement de talents qualifiés sur les technologies modernes (Databricks, Power BI, Azure, LLM), tandis que le Maroc dispose d'un bassin d'ingénieurs exceptionnels, francophones et rigoureux.
        </p>

        <h2 style={{ color: 'white', margin: '2rem 0 1.25rem 0' }}>Nos 4 Engagements Forts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem' }}>
            <Award color="#38bdf8" size={24} style={{ marginBottom: '0.5rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Spécialisation 100% Data & IA</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Nous ne sommes pas une ESN généraliste. Nous faisons exclusivement de la Data et de l'IA.</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem' }}>
            <Globe2 color="#38bdf8" size={24} style={{ marginBottom: '0.5rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ancrage Maroc / Europe</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Compréhension parfaite des enjeux d'affaires européens et proximité culturelle réelle.</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem' }}>
            <ShieldCheck color="#38bdf8" size={24} style={{ marginBottom: '0.5rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Rigueur & Transparence</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Processus de recrutement transparents et engagement sur la qualité de livraison.</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem' }}>
            <HeartHandshake color="#38bdf8" size={24} style={{ marginBottom: '0.5rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Accompagnement Humain</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Suivi personnalisé de chaque consultant et de chaque client sur la durée.</p>
          </div>
        </div>
      </div>

      <section className={styles.ctaBox}>
        <h2>Rencontrer nos équipes</h2>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>Entrer en contact avec NEYO</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
