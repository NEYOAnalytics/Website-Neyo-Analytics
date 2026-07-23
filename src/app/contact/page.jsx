'use client';

import React, { useState } from 'react';
import { useLanguage } from '../../components/LanguageProviderClient';
import { siteContent } from '../../translations/siteContent';
import { Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import styles from './contact.module.scss';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = siteContent[language] || siteContent.fr;
  const ct = t.contact;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    profileType: 'Power BI',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>{ct.badge}</span>
        <h1>{ct.h1}</h1>
        <p className={styles.lead}>{ct.lead}</p>
      </header>

      <div className={styles.contactWrapper}>
        {/* INFO COLUMN */}
        <div className={styles.infoCol}>
          <h2>{language === 'fr' ? 'Pourquoi choisir NEYO Analytics ?' : 'Why Choose NEYO Analytics?'}</h2>

          <ul className={styles.advantagesList}>
            <li>
              <CheckCircle size={20} className={styles.checkIcon} />
              <div>
                <strong>{language === 'fr' ? 'Short-list sous 48 heures' : 'Shortlist within 48 hours'}</strong>
                <p>{language === 'fr' ? 'Présélection rapide de 2 à 3 profils évalués techniquement.' : 'Fast pre-selection of 2 to 3 technically evaluated profiles.'}</p>
              </div>
            </li>
            <li>
              <CheckCircle size={20} className={styles.checkIcon} />
              <div>
                <strong>{language === 'fr' ? 'Bilingues (FR/EN) & Même Fuseau par profil' : 'Bilingual (FR/EN) & Same Time Zone per Profile'}</strong>
                <p>{language === 'fr' ? 'Intégration fluide dans vos rituels agiles quotidiens.' : 'Seamless integration into your daily agile rituals.'}</p>
              </div>
            </li>
            <li>
              <CheckCircle size={20} className={styles.checkIcon} />
              <div>
                <strong>{language === 'fr' ? 'Jusqu\'à 40% d\'Économie de Coût' : 'Up to 40% Cost Savings'}</strong>
                <p>{language === 'fr' ? 'Un TJM optimisé sans charges sociales directes.' : 'Optimized daily rates without direct employer taxes.'}</p>
              </div>
            </li>
          </ul>

          <div className={styles.contactDirect}>
            <h3>{language === 'fr' ? 'Contact Direct' : 'Direct Contact'}</h3>
            <div className={styles.item}>
              <Mail size={16} className={styles.icon} />
              <span>contact@neyo-analytics.com</span>
            </div>
            <div className={styles.item}>
              <MapPin size={16} className={styles.icon} />
              <span>
                NEYO ANALYTICS<br />
                228 BD MOHAMMED V<br />
                9EME ETAGE CASABLANCA
              </span>
            </div>
          </div>
        </div>

        {/* FORM COLUMN */}
        <div className={styles.formCol}>
          {submitted ? (
            <div className={styles.successState}>
              <CheckCircle size={48} color="#4ade80" />
              <h2>{language === 'fr' ? 'Demande Envoyée avec Succès !' : 'Request Submitted Successfully!'}</h2>
              <p>{language === 'fr' ? 'Un expert NEYO Analytics vous recontactera sous 24h pour qualifier votre besoin.' : 'A NEYO Analytics expert will contact you within 24h to review your requirements.'}</p>
              <button onClick={() => setSubmitted(false)} className={styles.btnReset}>
                {language === 'fr' ? 'Envoyer une autre demande' : 'Submit another request'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>{ct.formName} *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>{ct.formEmail} *</label>
                  <input
                    type="email"
                    required
                    placeholder="j.dupont@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>{ct.formRole}</label>
                  <input
                    type="text"
                    placeholder="DSI, CTO, Lead Data..."
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>{ct.formNeed}</label>
                  <select
                    value={formData.profileType}
                    onChange={(e) => setFormData({ ...formData, profileType: e.target.value })}
                  >
                    <option value="Power BI">Consultant Power BI</option>
                    <option value="Data Engineer">Data Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Architecte Data">Architecte Data</option>
                    <option value="Squad Complete">Squad Data Complète</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>{ct.formMsg}</label>
                <textarea
                  rows={4}
                  placeholder={language === 'fr' ? 'Précisez votre contexte, durée estimée et compétences clés...' : 'Describe your project context, estimated duration and key skills...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className={styles.btnSubmit}>
                <span>{ct.submit}</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
