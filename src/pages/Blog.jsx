import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './Blog.scss';

export default function Blog() {
    const t = useTranslation().blog;

    return (
        <div className="blog-page">
            <div className="blog-container">
                <h1>{t.title}</h1>
                <p className="blog-intro">
                    {t.intro}
                </p>

                <div className="blog-placeholder">
                    <h2>{t.comingSoon}</h2>
                    <p>{t.description}</p>
                    <ul>
                        {t.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
