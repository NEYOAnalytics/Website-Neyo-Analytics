'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../components/LanguageProviderClient';
import { siteContent } from '../../translations/siteContent';
import { FAQJsonLd, ServiceJsonLd } from '../../components/JsonLd';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Clock, MapPin, Award, Users } from 'lucide-react';
import styles from './nearshore.module.scss';

export default function NearshoreMarocPage() {
  const { language } = useLanguage();
  const t = siteContent[language] || siteContent.fr;
  const n = t.nearshore;
  const c = t.common;

  const faqs = language === 'fr' ? [
    {
      question: "Quelle est la différence entre nearshore et offshore ?",
      answer: "Le nearshore s'effectue dans un pays géographiquement et culturellement proche (ex: Maroc pour la France, Belgique ou Suisse), avec un décalage horaire nul ou de 1 heure maximum, une langue commune et une proximité culturelle."
    },
    {
      question: "Combien coûte un consultant Data en nearshore par rapport à un recrutement CDI en France ?",
      answer: "Un recrutement CDI en France coûte entre 75K€ et 90K€ chargé par an. En nearshore avec NEYO Analytics (Maroc 26e mondial Ataraxis 2026, score coût 94/100), le TJM optimisé permet de réduire le coût global de 30% à 40% sans engagement long terme."
    },
    {
      question: "Sous quel délai un consultant peut-il démarrer ?",
      answer: "Une fois le besoin validé et l'entretien réalisé avec la short-list de candidats, un consultant NEYO Analytics peut être opérationnel sur votre projet en 1 à 2 semaines."
    }
  ] : [
    {
      question: "What is the difference between nearshore and offshore?",
      answer: "Nearshore is performed in a geographically and culturally close country (e.g. Morocco for France, Belgium, or Switzerland), with zero or 1-hour time difference, shared language, and cultural alignment."
    },
    {
      question: "How much does a Nearshore Data consultant cost compared to direct hiring in Europe?",
      answer: "Direct hiring in Europe costs €75K-€90K total per year. With NEYO Analytics nearshore (Morocco ranked 26th worldwide in Ataraxis 2026, 94/100 cost score), optimized daily rates deliver 30% to 40% overall cost savings without long-term rigid commitments."
    },
    {
      question: "How quickly can a consultant start?",
      answer: "Once requirements are validated and candidate interviews completed, a NEYO Analytics consultant can be operational on your project in 1 to 2 weeks."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <FAQJsonLd faqs={faqs} />
      <ServiceJsonLd
        name="Consulting Nearshore Data & IA"
        description="Mise à disposition de consultants experts Data Engineer, Power BI, Data Scientist basés au Maroc."
      />

      {/* HERO */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{n.badge}</span>
          <h1>{n.h1}</h1>
          <p className={styles.subtitle}>{n.subtitle}</p>
          <div className={styles.ctaGroup}>
            <Link href="/contact" className={styles.btnPrimary}>
              <span>{c.contactUs}</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/notre-process" className={styles.btnSecondary}>
              <span>{c.seeProcess}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI EXTERNALISER ? */}
      <section className={styles.sectionBlock}>
        <h2>{n.whyOutsourceTitle}</h2>
        <p className={styles.sectionIntro}>{n.whyOutsourceIntro}</p>

        <div className={styles.tableWrapper}>
          <table className={styles.compTable}>
            <thead>
              <tr>
                {n.tableHeaders.map((head, idx) => (
                  <th key={idx}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {n.tableRows.map((item, idx) => (
                <tr key={idx}>
                  <td className={styles.featName}>{item.feature}</td>
                  <td className={styles.cdiCol}><XCircle size={16} className={styles.badIcon} /> {item.cdi}</td>
                  <td className={styles.nearshoreCol}><CheckCircle2 size={16} className={styles.goodIcon} /> {item.nearshore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faqSection}>
        <h2>{language === 'fr' ? 'Foire Aux Questions — Nearshore Data & IA' : 'Frequently Asked Questions — Nearshore Data & AI'}</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <h2>{language === 'fr' ? 'Prêt à évaluer vos besoins Nearshore ?' : 'Ready to Evaluate Your Nearshore Needs?'}</h2>
        <p>{language === 'fr' ? 'Contactez nos experts pour une analyse personnalisée sous 48h.' : 'Contact our experts for a personalized analysis within 48h.'}</p>
        <Link href="/contact" className={styles.btnPrimary}>
          <span>{c.talkToExpert}</span>
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
