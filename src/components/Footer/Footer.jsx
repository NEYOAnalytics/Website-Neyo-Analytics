import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import logoNeyo from '../../assets/images/Group 40.png';
import "./Footer.scss";

export default function Footer() {
    const t = useTranslation().footer;

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-columns">
                    {/* Company Info */}
                    <div className="footer-column footer-brand">
                        <p>{t.description}</p>
                        <div className="logo-container">
                            <img src={logoNeyo} alt="Neyo Analytics Logo" className="footer-logo" />
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-column">
                        <h4>{t.servicesTitle}</h4>
                        <ul>
                            <li><a href="#services">Data & Analytics</a></li>
                            <li><a href="#services">Business Intelligence</a></li>
                            <li><a href="#services">Data Engineering</a></li>
                            <li><a href="#services">Data Science</a></li>
                            <li><a href="#services">Data Gouvernance</a></li>
                        </ul>
                    </div>

                    {/* Ressources */}
                    <div className="footer-column">
                        <h4>{t.resourcesTitle}</h4>
                        <ul>
                            <li><a href="#services">{t.servicesTitle}</a></li>
                            <li><a href="#expertise-toggle">{t.ExpertisesTitle}</a></li>
                            <li><a href="#about">{t.aboutLink}</a></li>
                            <li><a href="#contact">{t.contactLink}</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="footer-column">
                        <h4>{t.contactTitle}</h4>
                        <p className="contact-email">contact@neyo-analytics.com</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/neyoanalytics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:contact@neyo-analytics.com" aria-label="Email">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Neyo Analytics. {t.rights}</p>
                    <div className="footer-links">
                        <a href="#privacy">{t.privacy}</a>
                        <a href="#terms">{t.terms}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
