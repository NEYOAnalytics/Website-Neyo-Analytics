import { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './CompaniesScroll.scss';

import logo1 from '../assets/images/Logo_enedis_header.png';
import logo2 from '../assets/images/Logo_IRIT_2018.png';
import logo3 from '../assets/images/Capgemini_logo.png';
import logo4 from '../assets/images/EDF_logo.png';
import logo5 from '../assets/images/wfp_logo.png';
import logo6 from '../assets/images/Eramet_logo.png';
import logo7 from '../assets/images/Stellantis.png';

const ALL_LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
const VISIBLE_COUNT = 6;

export default function CompaniesScroll() {
  const trans = useTranslation();
  const t = trans.companiesScroll;
  const [visibleLogos, setVisibleLogos] = useState(
    ALL_LOGOS.slice(0, VISIBLE_COUNT)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogos((current) => {
        const next = [...current];
        const changes = Math.random() > 0.6 ? 2 : 1;

        for (let i = 0; i < changes; i++) {
          const cardIndex = Math.floor(Math.random() * VISIBLE_COUNT);

          // choisir un logo qui n'est pas déjà visible
          const remainingLogos = ALL_LOGOS.filter((logo) => !next.includes(logo));
          if (remainingLogos.length === 0) continue; // si tout est déjà affiché

          const newLogo = remainingLogos[Math.floor(Math.random() * remainingLogos.length)];
          next[cardIndex] = newLogo;
        }

        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="companies-minio">
      <div className="companies-grid">
        {visibleLogos.map((logo, index) => (
          <div className="company-card" key={index}>
            <img src={logo} alt="Company logo" key={logo} />
          </div>
        ))}
      </div>

      <div className="companies-text">
        <h3>{t.title}</h3>
        <p>{t.description}</p>
      </div>
    </section>
  );
}
