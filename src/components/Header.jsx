'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from './ThemeProviderClient';
import { useLanguage } from './LanguageProviderClient';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const isAidSignal = pathname === '/aid-signal';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollTop > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: { fr: 'Accueil', en: 'Home' }, href: '/' },
    { label: { fr: 'Entreprises au Maroc', en: 'Companies in Morocco' }, href: '/entreprises-maroc' },
    { label: { fr: 'Nearshore international', en: 'International nearshore' }, href: '/nearshore-maroc' },
    { label: { fr: 'Expertises', en: 'Expertise' }, href: '/expertises' },
    { label: { fr: 'Consultants', en: 'Consultants' }, href: '/consultants' },
    { label: { fr: 'Blog', en: 'Blog' }, href: '/blog' },
  ];
  const contactHref = pathname.startsWith('/entreprises-maroc') ? '/contact?marche=maroc' : ['/nearshore-maroc', '/pourquoi-externaliser'].includes(pathname) ? '/contact?marche=international' : '/contact';


  const handleThemeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  const handleLangClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLanguage();
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="logo-container">
          <img src="/logo.png" alt="Neyo Analytics Logo" className="header-logo-img" />
        </Link>

        {isAidSignal ? (
          /* Sur la page Aid Signal : logo seul + boutons thème/langue discrets */
          <div className="header-actions">
            <button
              type="button"
              className="lang-toggle-btn"
              onClick={handleLangClick}
              aria-label="Toggle language"
              title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
            >
              <Globe size={16} />
              <span className="lang-code">{language.toUpperCase()}</span>
            </button>
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={handleThemeClick}
              aria-label="Toggle theme"
              title={theme === 'dark' ? (language === 'fr' ? 'Mode Jour' : 'Light Mode') : (language === 'fr' ? 'Mode Nuit' : 'Dark Mode')}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        ) : (
          <>
            <nav className="desktop-nav">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-item ${isActive ? 'active' : ''}`} aria-current={isActive ? 'page' : undefined} title={link.label[language]}
                  >
                    {link.label[language]}
                  </Link>
                );
              })}
            </nav>

            <div className="header-actions">
              {/* Language Toggle */}
              <button
                type="button"
                className="lang-toggle-btn"
                onClick={handleLangClick}
                aria-label="Toggle language"
                title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
              >
                <Globe size={16} />
                <span className="lang-code">{language.toUpperCase()}</span>
              </button>

              {/* Day/Night Theme Toggle */}
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={handleThemeClick}
                aria-label="Toggle theme"
                title={theme === 'dark' ? (language === 'fr' ? 'Mode Jour' : 'Light Mode') : (language === 'fr' ? 'Mode Nuit' : 'Dark Mode')}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link href={contactHref} className="btn-primary-header" title={language === 'fr' ? 'Parler à un expert' : 'Talk to an Expert'}>
                <span>{language === 'fr' ? 'Parler à un expert' : 'Talk to an Expert'}</span>
                <ArrowRight size={14} />
              </Link>

              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={language === 'fr' ? 'Ouvrir le menu' : 'Open navigation'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </>
        )}
      </div>

      {!isAidSignal && mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-link ${pathname === link.href ? 'active' : ''}`} title={link.label[language]}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label[language]}
              </Link>
            ))}
            <div className="mobile-bottom-actions">
              <button type="button" className="lang-toggle-btn" onClick={handleLangClick}>
                <Globe size={16} />
                <span>{language === 'fr' ? 'English (EN)' : 'Français (FR)'}</span>
              </button>
              <button type="button" className="theme-toggle-btn" onClick={handleThemeClick}>
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                <span>{theme === 'dark' ? (language === 'fr' ? 'Mode Jour' : 'Light Mode') : (language === 'fr' ? 'Mode Nuit' : 'Dark Mode')}</span>
              </button>
            </div>
            <Link
              href={contactHref}
              className="btn-primary-mobile" title={language === 'fr' ? 'Parler à un expert' : 'Talk to an Expert'}
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === 'fr' ? 'Parler à un expert' : 'Talk to an Expert'}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
