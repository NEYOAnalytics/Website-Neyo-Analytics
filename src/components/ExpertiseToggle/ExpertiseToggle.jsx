import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';
import './ExpertiseToggle.scss';

import PALANTIR_IMG from '../../assets/images/Palantir_img.png';
import POWERBI_IMG from '../../assets/images/powerbi_img.png';

const ExpertiseToggle = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [activeExpertise, setActiveExpertise] = useState('palantir');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const expertiseKeys = ['palantir', 'powerbi'];

    const content = {
        palantir: {
            title: "Palantir",
            description: t.services.items[4].description,
            image: PALANTIR_IMG,
            color: '#00d2ff'
        },
        powerbi: {
            title: "Microsoft Power BI",
            description: language === 'fr'
                ? "Exploitez vos données à grande échelle grâce à des solutions de business intelligence performantes et intuitives. Nos consultants expérimentés vous accompagnent dans la conception, l’optimisation et le déploiement de tableaux de bord interactifs et de modèles de données sous Power BI, pour des analyses fiables et des décisions éclairées."
                : "Leverage your data at scale through powerful and intuitive business intelligence solutions. Our experienced consultants support you in the design, optimization, and deployment of interactive dashboards and data models in Power BI, enabling reliable analysis and informed decision-making.",
            image: POWERBI_IMG,
            color: '#f2c811'
        }
    };

    const handleSwitch = (key) => {
        if (key === activeExpertise || isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveExpertise(key);
            setIsTransitioning(false);
        }, 500);
    };

    const handlePrev = () => {
        const currentIndex = expertiseKeys.indexOf(activeExpertise);
        const prevIndex = (currentIndex - 1 + expertiseKeys.length) % expertiseKeys.length;
        handleSwitch(expertiseKeys[prevIndex]);
    };

    const handleNext = () => {
        const currentIndex = expertiseKeys.indexOf(activeExpertise);
        const nextIndex = (currentIndex + 1) % expertiseKeys.length;
        handleSwitch(expertiseKeys[nextIndex]);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 10000); // 10 seconds

        return () => clearInterval(timer);
    }, [activeExpertise, isTransitioning]);

    const current = content[activeExpertise];

    return (
        <div className="expertise-toggle" style={{ '--glow-color': current.color }}>
            <div className="background"></div>

            <div className="expertise-main-layout">
                <div className={`expertise-content-block ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    <div className="expertise-header-simple">
                        <button className="nav-arrow prev" onClick={handlePrev}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button className="nav-arrow next" onClick={handleNext}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>

                    <div className="expertise-details">
                        <div className="expertise-text-content">
                            <h3 style={{ color: current.color }}>{current.title}</h3>
                            <div className="accent-bar" style={{ backgroundColor: current.color }}></div>
                            <p>{current.description}</p>
                        </div>
                        <div className="expertise-image-container">
                            <div className="image-wrapper shadow-glow" style={{ '--glow-color': current.color }}>
                                <img src={current.image} alt={current.title} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="expertise-title-side">
                    <h2>{t.secteurs.title}</h2>
                    <p>{t.secteurs.description}</p>
                </div>
            </div>

            <div className="progress-bar-container">
                <div key={activeExpertise} className="progress-bar" style={{ backgroundColor: current.color }}></div>
            </div>
        </div>
    );
};

export default ExpertiseToggle;
