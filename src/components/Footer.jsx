'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageProviderClient';
import './Footer.scss';

const Footer = () => {
  const { language } = useLanguage();

  const isFr = language === 'fr';

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img src="/logo.png" alt="NEYO Analytics" className="footer-logo-img" />
            </Link>
            <p className="brand-desc">
              {isFr ? (
                <>
                  Société de conseil spécialisée en <strong>Nearshore Data & IA</strong>. Nous mettons à votre disposition des consultants experts (Data Engineer, Power BI, Data Scientist, BI Developer, Architecte) basés au Maroc pour vos projets en Europe et dans le Golfe.
                </>
              ) : (
                <>
                  Consulting firm specialized in <strong>Nearshore Data & AI</strong>. We provide expert consultants (Data Engineer, Power BI, Data Scientist, BI Developer, Architect) based in Morocco for your projects in Europe and the Gulf region.
                </>
              )}
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{isFr ? 'Nearshore & Process' : 'Nearshore & Process'}</h4>
            <ul className="footer-links">
              <li><Link href="/nearshore-maroc">{isFr ? 'Pourquoi le Nearshore Maroc ?' : 'Why Nearshore Morocco?'}</Link></li>
              <li><Link href="/pourquoi-externaliser">{isFr ? 'Pourquoi externaliser vs recruter ?' : 'Why Outsource vs Hire?'}</Link></li>
              <li><Link href="/notre-process">{isFr ? 'Notre Processus en 4 étapes' : 'Our 4-Step Process'}</Link></li>
              <li><Link href="/cas-usages">{isFr ? 'Études de cas & Cas d\'usages' : 'Case Studies & Use Cases'}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{isFr ? 'Profils Consultants' : 'Consultant Profiles'}</h4>
            <ul className="footer-links">
              <li><Link href="/consultants/data-engineer">{isFr ? 'Consultant Data Engineer' : 'Data Engineer Consultant'}</Link></li>
              <li><Link href="/consultants/bi-developer">{isFr ? 'Consultant Power BI & BI Dev' : 'Power BI & BI Developer'}</Link></li>
              <li><Link href="/consultants/data-analyst">{isFr ? 'Consultant Data Analyst' : 'Data Analyst Consultant'}</Link></li>
              <li><Link href="/consultants/data-scientist">{isFr ? 'Consultant Data Scientist' : 'Data Scientist Consultant'}</Link></li>
              <li><Link href="/consultants/bi-developer">{isFr ? 'Développeur BI' : 'BI Developer'}</Link></li>
              <li><Link href="/consultants/data-architect">{isFr ? 'Architecte Data' : 'Data Architect'}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">{isFr ? 'Expertises Tech' : 'Tech Expertise'}</h4>
            <ul className="footer-links">
              <li><Link href="/expertises/power-bi">Power BI & Data Viz</Link></li>
              <li><Link href="/expertises/data-engineering">Data Engineering & Modern Stack</Link></li>
              <li><Link href="/expertises/cloud">Cloud (Azure, Fabric, AWS, GCP)</Link></li>
              <li><Link href="/expertises/ia-data-science">{isFr ? 'IA Générative & Data Science' : 'Generative AI & Data Science'}</Link></li>
              <li><Link href="/expertises/tableau-qlik-looker">Tableau, Qlik & Looker</Link></li>
              <li><Link href="/expertises/palantir">Palantir Foundry & AIP</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container bottom-flex">
          <p>
            © {new Date().getFullYear()} NEYO Analytics. {isFr ? 'Tous droits réservés. Spécialiste Nearshore Data & IA.' : 'All rights reserved. Nearshore Data & AI Specialist.'}
          </p>
          <div className="bottom-links">
            <Link href="/contact">Contact</Link>
            <span className="dot">•</span>
            <Link href="/blog">Blog</Link>
            <span className="dot">•</span>
            <a
              href="https://www.linkedin.com/company/neyoanalytics/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
              aria-label="NEYO Analytics sur LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
