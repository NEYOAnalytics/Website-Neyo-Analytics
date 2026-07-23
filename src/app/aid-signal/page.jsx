'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/LanguageProviderClient';
import { CloudOff, Map, Camera, Shield, FileText } from 'lucide-react';
import './AidSignal.scss';

const appActual = '/aid_signal_app_actual.jpg';
const proActual = '/aid_signal_pro_actual.jpg';

// ── Disaster / rescue photos ──
const DISASTER_PHOTOS = [
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/t%C3%A9l%C3%A9chargeeement.jpg',
    caption: 'Séisme — Dévastation urbaine et effondrement de structures',
  },
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/458.jpg',
    caption: 'Feux de forêt — Colonne de fumée et progression du brasier',
  },
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/Des-secouristes-recherchent-des-survivants-dans-les-decombres-apres-le-seisme-a-Moulay-Brahim-au-Maroc-1703339.jpg',
    caption: "Urgence — Intervention rapprochée d'un sauveteur",
  },
  {
    url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&v=3',
    caption: "Assistance — Coordination de l'aide humanitaire et logistique",
  },
  {
    url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80&v=3',
    caption: 'Inondations — Secours en milieu urbain submergé',
  },
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/36847026052_6d50801c5f_b.jpg',
    caption: 'Sauvetage — Hélitreuillage en zone de crise',
  },
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/SDIS44-secours-en-mer-Matthieu-Josse.jpg',
    caption: 'Coordination — Déploiement stratégique des secours',
  },
];

const Logo = () => (
  <div className="aid-signal-logo">
    <div className="text-row">
      <span className="aid">Aid</span>
      <span className="pipe">|</span>
      <span className="signal">Signal</span>
    </div>
    <div className="red-bar"></div>
  </div>
);

// ── Auto-scrolling vertical carousel ──
const DisasterCarousel = () => {
  const trackRef = useRef(null);
  const doubled = [...DISASTER_PHOTOS, ...DISASTER_PHOTOS];

  return (
    <div className="disaster-carousel">
      <div className="carousel-track" ref={trackRef}>
        {doubled.map((photo, i) => (
          <div className="carousel-card" key={i}>
            <img src={photo.url} alt={photo.caption} loading="lazy" />
            <div className="carousel-caption">{photo.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Inline translations (page not exposed via language switch) ──
const data = {
  hero: {
    title: 'Plateforme de collecte de données critiques en situation de crise',
    desc: "Développé en réponse au 'UNDP Community-Based Damage Assessment challenge', Aid Signal répond à un besoin critique : collecter des données de dommages fiables en temps réel pour coordonner l'aide humanitaire là où elle est le plus nécessaire.",
  },
  features: {
    items: [
      { title: 'Offline-First', desc: "Collecte de données même sans connexion internet. Synchronisation automatique dès le retour du réseau." },
      { title: 'Cartographie en temps réel', desc: "Visualisation géographique immédiate de tous les rapports de terrain sur une carte interactive." },
      { title: 'Documentation Photo', desc: "Capture et annotation de photos directement depuis l'application pour documenter les dommages." },
    ],
  },
  impact: {
    title: "Un impact mesurable sur le terrain",
    desc: "Aid Signal transforme la collecte de données post-catastrophe en un processus structuré, fiable et temps réel, permettant aux coordinateurs de déployer l'aide là où elle est le plus nécessaire.",
  },
  legal: {
    termsLabel: "TERMES & CONDITIONS",
    termsTitle: "Conditions d'utilisation",
    privacyLabel: "CONFIDENTIALITÉ",
    privacyTitle: "Politique de confidentialité",
    lastUpdate: "DERNIÈRE MISE À JOUR : 01 JUIN 2025",
    terms: [
      { title: "Art. 1 — Objet", text: "Les présentes conditions régissent l'utilisation de l'application mobile et web Aid Signal, développée par NEYO Analytics." },
      { title: "Art. 2 — Accès & Utilisation", text: "L'accès à l'application est strictement réservé aux agents humanitaires accrédités. Toute utilisation non autorisée est interdite." },
      { title: "Art. 3 — Données collectées", text: "L'application collecte uniquement les données nécessaires à l'évaluation des dommages : localisation GPS, photos, descriptions textuelles et catégories de sinistres." },
      { title: "Art. 4 — Responsabilité", text: "NEYO Analytics ne saurait être tenu responsable des décisions prises sur la base des données collectées via l'application." },
    ],
    privacy: [
      { title: "1. Données personnelles", text: "Nous collectons uniquement les données strictement nécessaires à la mission humanitaire. Aucune donnée n'est revendue à des tiers." },
      { title: "2. Sécurité & Chiffrement", text: "Toutes les communications sont chiffrées en TLS 1.3. Les données au repos utilisent AES-256." },
      { title: "3. Conservation", text: "Les données sont conservées 24 mois après la fin d'une mission, puis supprimées de façon sécurisée." },
      { title: "4. Droits", text: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contact : privacy@neyo-analytics.com" },
    ],
  },
};

const undpChallenge = {
  title: "Community-Based Damage Assessment",
  desc: "Le Programme des Nations Unies pour le développement a lancé un défi mondial pour créer des outils numériques capables d'améliorer la coordination humanitaire post-catastrophe.",
};

const proDashboard = {
  features: [
    "Tableau de bord temps réel — Visualisation instantanée de tous les rapports entrants",
    "Filtrage géographique — Analyse par zone, par type de sinistre et par priorité",
    "Export de données — Génération automatique de rapports PDF et CSV pour les partenaires",
    "Gestion des équipes — Assignation et suivi des agents sur le terrain",
  ],
};

const featureIcons = [<CloudOff />, <Map />, <Camera />];

export default function AidSignalPage() {
  return (
    <div className="aid-signal-page pyner-style">

      {/* ── HERO ── */}
      <section className="hero-reverted">
        <div className="container">
          <div className="hero-layout">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Logo />
              <motion.span
                className="badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                DEVELOPED BY NEYO ANALYTICS
              </motion.span>
              <h1>{data.hero.title}</h1>
              <p>{data.hero.desc}</p>
            </motion.div>

            <motion.div
              className="hero-image-actual"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="iphone-mockup">
                <div className="iphone-screen">
                  <video
                    src="https://x2s1gymgomqevywy.public.blob.vercel-storage.com/ScreenRecording_05-06-2026%2017-23-08_1.MP4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="iphone-notch"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="grid-features" id="section-features">
        <div className="grid-line horizontal top"></div>
        <div className="container grid-container">
          <div className="grid-line vertical left"></div>
          <div className="grid-line vertical right"></div>

          <div className="bento-grid">
            <div className="bento-item undp-context">
              <div className="label">CONCOURS UNDP</div>
              <h2>{undpChallenge.title}</h2>
              <p>{undpChallenge.desc}</p>
              <div className="undp-tag">UNITED NATIONS DEVELOPMENT PROGRAMME</div>
            </div>

            {data.features.items.map((item, index) => (
              <div key={index} className={`bento-item feature-${index}`}>
                <div className="feature-number">0{index + 1}</div>
                <div className="icon-box">{featureIcons[index]}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid-line horizontal bottom"></div>
      </section>

      {/* ── PRO DASHBOARD ── */}
      <section className="grid-pro">
        <div className="container grid-container">
          <div className="grid-line vertical left"></div>
          <div className="grid-line vertical right"></div>

          <div className="pro-header-block">
            <div className="label">DASHBOARD COORDINATEUR</div>
            <h2>Aid Signal Pro</h2>
          </div>

          <div className="pro-main-content">
            <div className="pro-visual">
              <img src={proActual} alt="Pro Dashboard" />
            </div>
            <div className="pro-details">
              {proDashboard.features.map((feature, index) => (
                <div key={index} className="pro-detail-item">
                  <div className="num-box">0{index + 1}</div>
                  <div className="detail-text">
                    <h4>{feature.split(' ')[0]}</h4>
                    <p>{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid-line horizontal bottom"></div>
      </section>

      {/* ── IMPACT + DISASTER CAROUSEL ── */}
      <section className="grid-impact">
        <div className="container grid-container">
          <div className="grid-line vertical left"></div>
          <div className="grid-line vertical right"></div>

          <div className="impact-block">
            <div className="impact-text">
              <div className="label">IMPACT HUMANITAIRE</div>
              <h2>{data.impact.title}</h2>
              <p>{data.impact.desc}</p>
              <div className="stats-inline">
                <div className="stat-inline-item">
                  <span className="stat-val">REAL-TIME</span>
                  <span className="stat-label">SYNCHRONIZATION</span>
                </div>
                <div className="stat-inline-item">
                  <span className="stat-val">100%</span>
                  <span className="stat-label">OFFLINE CAPABILITY</span>
                </div>
                <div className="stat-inline-item">
                  <span className="stat-val">NGO</span>
                  <span className="stat-label">ENCRYPTED PROTOCOLS</span>
                </div>
              </div>
            </div>

            <div className="carousel-column">
              <DisasterCarousel />
            </div>
          </div>
        </div>
        <div className="grid-line horizontal bottom"></div>
      </section>

      {/* ── TERMS ── */}
      <section className="legal-section" id="section-terms">
        <div className="container grid-container">
          <div className="grid-line vertical left"></div>
          <div className="grid-line vertical right"></div>

          <div className="legal-content">
            <div className="legal-header">
              <div className="label">{data.legal.termsLabel}</div>
              <h2 className="legal-title"><FileText size={28} /> {data.legal.termsTitle}</h2>
              <p className="legal-date">{data.legal.lastUpdate}</p>
            </div>
            <div className="legal-body">
              {data.legal.terms.map((article, i) => (
                <div key={i} className="legal-article">
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid-line horizontal bottom"></div>
      </section>

      {/* ── PRIVACY ── */}
      <section className="legal-section privacy-section" id="section-privacy">
        <div className="container grid-container">
          <div className="grid-line vertical left"></div>
          <div className="grid-line vertical right"></div>

          <div className="legal-content">
            <div className="legal-header">
              <div className="label">{data.legal.privacyLabel}</div>
              <h2 className="legal-title"><Shield size={28} /> {data.legal.privacyTitle}</h2>
              <p className="legal-date">{data.legal.lastUpdate}</p>
            </div>
            <div className="legal-body">
              {data.legal.privacy.map((article, i) => (
                <div key={i} className="legal-article">
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid-line horizontal bottom"></div>
      </section>

    </div>
  );
}
