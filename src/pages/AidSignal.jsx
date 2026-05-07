import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { CloudOff, Map, Camera, Shield, FileText } from 'lucide-react';
import './AidSignal.scss';

import appActual from '../assets/images/aid_signal_app_actual.jpg';
import proActual from '../assets/images/aid_signal_pro_actual.jpg';

// ── Unsplash disaster/rescue photos (public, no auth needed) ──
const DISASTER_PHOTOS = [
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/t%C3%A9l%C3%A9chargeeement.jpg',
    caption: 'Séisme — Dévastation urbaine et effondrement de structures',
    emoji: '🌍'
  },
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/458.jpg',
    caption: 'Feux de forêt — Colonne de fumée et progression du brasier',
    emoji: '🔥'
  },
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/Des-secouristes-recherchent-des-survivants-dans-les-decombres-apres-le-seisme-a-Moulay-Brahim-au-Maroc-1703339.jpg',
    caption: 'Urgence — Intervention rapprochée d\'un sauveteur',
    emoji: '🚨'
  },
  {
    url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&v=3',
    caption: 'Assistance — Coordination de l\'aide humanitaire et logistique',
    emoji: '🎯'
  },
  {
    url: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80&v=3',
    caption: 'Inondations — Secours en milieu urbain submergé',
    emoji: '💧'
  },
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/36847026052_6d50801c5f_b.jpg',
    caption: 'Sauvetage — Hélitreuillage en zone de crise',
    emoji: '🚁'
  },
  {
    url: 'https://x2s1gymgomqevywy.public.blob.vercel-storage.com/SDIS44-secours-en-mer-Matthieu-Josse.jpg',
    caption: 'Coordination — Déploiement stratégique des secours',
    emoji: '📋'
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

  // Duplicate items for infinite loop
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

const AidSignal = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const data = t.aidSignal;
  const legal = data.legal;

  const featureIcons = [<CloudOff />, <Map />, <Camera />];

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
              <h2>{t.undpChallenge.title}</h2>
              <p>{t.undpChallenge.desc}</p>
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

      {/* ── NATURE DES SINISTRES ── */}
      <section className="grid-nature">
        <div className="container grid-container">
          <div className="grid-line vertical left"></div>
          <div className="grid-line vertical right"></div>

          <div className="nature-header-block">
            <div className="label">NATURE DES SINISTRES</div>
            <h2>Catégories d'Intervention</h2>
          </div>

          <div className="nature-grid">
            {DISASTER_PHOTOS.map((item, index) => (
              <div 
                key={index} 
                className="nature-card"
                style={{ backgroundImage: `url(${item.url})` }}
              >
                <div className="nature-overlay">
                  <div className="nature-emoji">{item.emoji}</div>
                  <div className="nature-label">{item.caption.split(' — ')[0]}</div>
                </div>
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
              {t.proDashboard.features.map((feature, index) => (
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

            {/* Vertical photo carousel */}
            <div className="carousel-column">
              <DisasterCarousel />
            </div>
          </div>
        </div>
        <div className="grid-line horizontal bottom"></div>
      </section>

      {/* ── TERMS & CONDITIONS ── */}
      <section className="legal-section" id="section-terms">
        <div className="container grid-container">
          <div className="grid-line vertical left"></div>
          <div className="grid-line vertical right"></div>

          <div className="legal-content">
            <div className="legal-header">
              <div className="label">{legal.termsLabel}</div>
              <h2 className="legal-title"><FileText size={28} /> {legal.termsTitle}</h2>
              <p className="legal-date">{legal.lastUpdate}</p>
            </div>

            <div className="legal-body">
              {legal.terms.map((article, i) => (
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

      {/* ── PRIVACY POLICY ── */}
      <section className="legal-section privacy-section" id="section-privacy">
        <div className="container grid-container">
          <div className="grid-line vertical left"></div>
          <div className="grid-line vertical right"></div>

          <div className="legal-content">
            <div className="legal-header">
              <div className="label">{legal.privacyLabel}</div>
              <h2 className="legal-title"><Shield size={28} /> {legal.privacyTitle}</h2>
              <p className="legal-date">{legal.lastUpdate}</p>
            </div>

            <div className="legal-body">
              {legal.privacy.map((article, i) => (
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
};

export default AidSignal;
