import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.scss';
import Logo from '../../assets/images/Group 40.png';
import { Switch } from '../ui/switch';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to anchor after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on click
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}>

        {/* LOGO */}
        <div className="logo">
          <Link to="/" onClick={handleLogoClick}>
            <img src={Logo} alt="Neyo Logo" />
          </Link>
        </div>

        <div className="spacer2"></div>

        {/* Desktop NAV */}
        <nav className="desktop-nav">
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>{t.services}</a>
          <a href="#secteurs" onClick={(e) => handleNavClick(e, '#secteurs')}>{t.secteurs}</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>{t.about}</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>{t.contact}</a>
          <Link to="/blog">{t.blog}</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Switch FR/EN & Theme - Desktop Only */}
        <div className="desktop-only-toggles">
          <div className="switch-container">
            <Switch
              checked={language === 'en'}
              onCheckedChange={toggleLanguage}
            />
            <span className="lang-label">
              {language.toUpperCase()}
            </span>
          </div>

          <ThemeToggle />
        </div>

        <div className="spacer"></div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>{t.services}</a>
            <a href="#secteurs" onClick={(e) => handleNavClick(e, '#secteurs')}>{t.secteurs}</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>{t.about}</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>{t.contact}</a>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>{t.blog}</Link>

            <div className="mobile-theme-lang">
              <div className="switch-container">
                <Switch
                  checked={language === 'en'}
                  onCheckedChange={toggleLanguage}
                />
                <span className="lang-label">
                  {language.toUpperCase()}
                </span>
              </div>
              <ThemeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;