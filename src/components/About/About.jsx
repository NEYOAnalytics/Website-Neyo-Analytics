import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import "./About.scss";

export default function About() {
    const t = useTranslation().about;

    return (
        <section id="about" className="about-section">
            <div className="section-content">
                <h2>{t.title}</h2>

                <div className="expertise-container">
                    <h3>{t.expertiseTitle}</h3>

                    <div className="expertise-stats">
                        <div className="stat-box">
                            <span className="stat-number color-cyan">3+</span>
                            <span className="stat-label">{t.experts}</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number color-orange">50+</span>
                            <span className="stat-label">{t.projects}</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number color-purple">5+</span>
                            <span className="stat-label">{t.years}</span>
                        </div>
                    </div>

                    <div className="expertise-cta">
                        <p>{t.ctaText}</p>
                        <a href="mailto:contact@neyo-analytics.com" aria-label="Email"><button>{t.ctaButton}</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
