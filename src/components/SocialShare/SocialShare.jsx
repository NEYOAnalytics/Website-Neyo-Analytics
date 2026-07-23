'use client';

import React, { useState } from 'react';
import { Share2, Linkedin, Twitter, MessageCircle, Link as LinkIcon, Check } from 'lucide-react';
import styles from './SocialShare.module.scss';

export default function SocialShare({ title = 'NEYO Analytics — Nearshore Data & IA', url }) {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? (url || window.location.href) : 'https://www.neyo-analytics.com';

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={16} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      color: '#0a66c2',
    },
    {
      name: 'X (Twitter)',
      icon: <Twitter size={16} />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`,
      color: '#1da1f2',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={16} />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${currentUrl}`)}`,
      color: '#25d366',
    },
  ];

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className={styles.shareContainer}>
      <div className={styles.shareLabel}>
        <Share2 size={16} />
        <span>Partager la page :</span>
      </div>
      <div className={styles.shareButtons}>
        {shareLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareBtn}
            title={`Partager sur ${item.name}`}
            aria-label={`Partager sur ${item.name}`}
          >
            {item.icon}
            <span className={styles.btnText}>{item.name}</span>
          </a>
        ))}

        <button
          type="button"
          onClick={copyToClipboard}
          className={`${styles.shareBtn} ${copied ? styles.copied : ''}`}
          title="Copier le lien de la page"
          aria-label="Copier le lien de la page"
        >
          {copied ? <Check size={16} color="#10b981" /> : <LinkIcon size={16} />}
          <span className={styles.btnText}>{copied ? 'Copié !' : 'Copier le lien'}</span>
        </button>
      </div>
    </div>
  );
}
