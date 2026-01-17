import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './Blog.scss';

export default function Blog() {
    const t = useTranslation().blog;
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedArticleId, setSelectedArticleId] = useState(null);

    const categories = [
        { key: 'all', label: t.categories.all },
        { key: 'data', label: t.categories.data },
        { key: 'ai', label: t.categories.ai },
        { key: 'bi', label: t.categories.bi },
        { key: 'cloud', label: t.categories.cloud },
        { key: 'palantir', label: t.categories.palantir },
    ];

    const filteredPosts = activeCategory === 'all'
        ? t.posts
        : t.posts.filter(post => {
            const catLabel = t.categories[activeCategory];
            return post.category === catLabel || post.category === activeCategory;
        });

    const selectedArticle = selectedArticleId
        ? t.posts.find(p => p.id === selectedArticleId)
        : null;

    const handleCardClick = (post) => {
        setSelectedArticleId(post.id);
        window.scrollTo(0, 0);
    };

    const handleBackClick = () => {
        setSelectedArticleId(null);
    };

    if (selectedArticle) {
        // Recommendations logic: take 3 random posts that are NOT the current one
        const recommendations = t.posts
            .filter(post => post.id !== selectedArticle.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        return (
            <div className="blog-page article-view-mode">
                <div className="article-container" key="article-view">
                    <button className="back-button" onClick={handleBackClick}>
                        &larr; {t.readMore /* Using "Read More" placeholder or generic "Back" if avail, usually 'Back' is better but sticking to t keys or hardcoded for now implies 'Retour' */}

                    </button>

                    <div className="article-header">
                        <span className="article-category">{selectedArticle.category}</span>
                        <h1>{selectedArticle.title}</h1>
                        <div className="article-meta">
                            <span>{selectedArticle.date}</span>
                            <span className="separator">•</span>
                            <span>{selectedArticle.author}</span>
                        </div>
                    </div>

                    <div className="article-hero-image">
                        <img src={selectedArticle.image} alt={selectedArticle.title} />
                    </div>

                    <div className="article-content">
                        {selectedArticle.content && selectedArticle.content.map((block, index) => {
                            switch (block.type) {
                                case 'lead':
                                    return <p key={index} className="lead">{block.text}</p>;
                                case 'heading':
                                    return <h2 key={index}>{block.text}</h2>;
                                case 'quote':
                                    return <blockquote key={index}>"{block.text}"</blockquote>;
                                case 'list':
                                    return (
                                        <ul key={index}>
                                            {block.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    );
                                case 'sources':
                                    return (
                                        <p key={index} className="sources-text">
                                            {block.text.split('\n\n').map((line, i) => {
                                                const urlRegex = /(https?:\/\/[^\s]+)/g;
                                                const parts = [];
                                                let lastIndex = 0;
                                                let match;

                                                while ((match = urlRegex.exec(line)) !== null) {
                                                    // Add text before URL
                                                    if (match.index > lastIndex) {
                                                        parts.push(line.substring(lastIndex, match.index));
                                                    }
                                                    // Add URL as link
                                                    parts.push(
                                                        <a key={`${i}-${match.index}`} href={match[0]} target="_blank" rel="noopener noreferrer">
                                                            {match[0]}
                                                        </a>
                                                    );
                                                    lastIndex = match.index + match[0].length;
                                                }

                                                // Add remaining text
                                                if (lastIndex < line.length) {
                                                    parts.push(line.substring(lastIndex));
                                                }

                                                return (
                                                    <span key={i}>
                                                        {parts}
                                                        <br /><br />
                                                    </span>
                                                );
                                            })}
                                        </p>
                                    );
                                case 'paragraph':
                                default:
                                    if (block.image) {
                                        return (
                                            <div key={index} className={`article-inline-image ${block.size || ''}`}>
                                                <img src={block.image} alt="" />
                                            </div>
                                        );
                                    }
                                    return <p key={index}>{block.text}</p>;
                            }
                        })}
                    </div>

                    <div className="recommendations-section">
                        <h2>Articles recommandés</h2>
                        <div className="recommendations-grid">
                            {recommendations.map(post => (
                                <div key={post.id} className="recommendation-card" onClick={() => handleCardClick(post)}>
                                    <div className="rec-image">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                    <div className="rec-content">
                                        <span className="rec-category">{post.category}</span>
                                        <h4>{post.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-page">
            <div className="blog-container" key="blog-list">
                <div className="blog-header">
                    <h1>{t.title}</h1>
                    <p className="blog-subtitle">{t.subtitle}</p>
                </div>

                <div className="blog-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                            onClick={() => {
                                setActiveCategory(cat.key);
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="blog-grid">
                    {filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="blog-card"
                            onClick={() => handleCardClick(post)}
                        >
                            <div className="card-image">
                                <img src={post.image} alt={post.title} />
                                <span className="category-badge">{post.category}</span>
                            </div>
                            <div className="card-content">
                                <h3>{post.title}</h3>
                                <p className="excerpt">{post.excerpt}</p>
                                {/* Date and Author hidden for minimalist look based on inspiration, but can be added back */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="blog-pagination">
                    <span className="page-number active">1</span>
                    <span className="page-number">2</span>
                    <span className="page-number">3</span>
                </div>
            </div>
        </div>
    );
}
