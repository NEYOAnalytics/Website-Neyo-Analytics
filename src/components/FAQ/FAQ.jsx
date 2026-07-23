import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';
import './FAQ.scss';

const FAQ = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>{t.faq.title}</h2>
            <div className="faq-grid">
                {t.faq.items.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="faq-question">
                            {item.question}
                            <span className="icon">▼</span>
                        </div>
                        <div className="faq-answer">
                            {item.answer}
                            {item.pdf && (
                                <div className="pdf-link-container" style={{ marginTop: '10px' }}>
                                    <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="pdf-download-link">
                                        {item.pdfLabel || "Download PDF"}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
