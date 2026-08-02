import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './IntroLoader.css';

const IntroLoader = () => {
  const [isVisible, setIsVisible] = useState(() => !sessionStorage.getItem('portfolio-loader-seen'));

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const handleLoad = () => {
      window.setTimeout(() => {
        sessionStorage.setItem('portfolio-loader-seen', 'true');
        setIsVisible(false);
      }, 650);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className="intro-loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }} aria-label="Loading Azrul Amaline portfolio">
          <div className="intro-loader-glow" aria-hidden="true"></div>
          <motion.div className="intro-loader-mark" initial={{ opacity: 0, y: 14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.42 }}>
            <span className="intro-loader-kicker">Portfolio</span>
            <strong>Azrul Amaline</strong>
            <span className="intro-loader-line"></span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
