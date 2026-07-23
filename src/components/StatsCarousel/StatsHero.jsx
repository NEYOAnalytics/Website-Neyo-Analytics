import { useState, useEffect, useRef } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";
import { Users, Database } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import "./StatsHero.scss";

function Counter({ value }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const match = String(value).match(/^([\d.,]+)(.*)$/);

    if (match) {
      const numberPart = parseFloat(match[1].replace(',', '.'));
      const suffix = match[2];

      const controls = animate(0, numberPart, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(v) {
          node.textContent = Math.round(v) + suffix;
        }
      });

      return () => controls.stop();
    } else {
      node.textContent = value;
    }
  }, [value]);

  return <span ref={nodeRef} />;
}

export default function StatsHero() {
  const trans = useTranslation();
  const t = trans.statsHero;
  const slides = trans.carousel.slides;

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="stats-hero">
      <div className="background" />

      <div className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="stats-container"
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <div className="counter">
              <Counter value={slides[index].value} />
            </div>

            <p className="description">
              {slides[index].text}
            </p>

            <span className="source">
              {typeof slides[index].source === 'object' ? (
                <a href={slides[index].source.url} target="_blank" rel="noopener noreferrer">
                  {slides[index].source.text}
                </a>
              ) : (
                slides[index].source
              )}
            </span>
          </motion.div>
        </AnimatePresence>

        <div className="navigation">
          <span>{index + 1}/{slides.length}</span>
          <div className="arrows">
            <button onClick={prev}>‹</button>
            <button onClick={next}>›</button>
          </div>
        </div>

        <div className="info-cards">
          <div className="info-card">
            <Users className="icon" />
            <h3>{t.card1Title}</h3>
            <p>{t.card1Desc}</p>
          </div>
          <div className="info-card">
            <Database className="icon" />
            <h3>{t.card2Title}</h3>
            <p>{t.card2Desc}</p>
          </div>
        </div>

        <a href="#contact" aria-label="Contact"><button className="stats-action-button">{t.actionButton}</button></a>
      </div>
    </section>
  );
}
