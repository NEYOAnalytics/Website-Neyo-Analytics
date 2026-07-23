import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Globe2, ShieldCheck, HeartHandshake } from 'lucide-react';
import SocialShare from '../../components/SocialShare/SocialShare';
import styles from '../consultants/consultants.module.scss';

export const metadata = {
  title: 'À propos',
  description: 'Cabinet de conseil spécialisé Nearshore Data & IA au Maroc. Nous accompagnons les DSI en Europe et dans le Golfe.',
};

export default function AProposPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Notre Histoire & Ambition</span>
        <h1>À propos de NEYO Analytics</h1>
        <p className={styles.lead}>
          Un pure-player spécialiste de la Data et de l'Intelligence Artificielle qui connecte les meilleurs talents du Maroc aux entreprises exigeantes en Europe et dans le Golfe.
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
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Transparence Contractuelle</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Modèle au TJM clair, sans frais cachés ni clauses complexes.</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.5rem' }}>
            <HeartHandshake color="#38bdf8" size={24} style={{ marginBottom: '0.5rem' }} />
            <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Accompagnement Humain</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Suivi régulier de nos consultants et de la satisfaction client.</p>
          </div>
        </div>

        <SocialShare title="À propos de NEYO Analytics — Nearshore Data & IA" />

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fa9100', color: 'white', padding: '0.85rem 1.75rem', borderRadius: '8px', fontWeight: '600', textDecoration: 'none' }}>
            <span>Discuter de votre besoin Data</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
