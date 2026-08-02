import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import './Profile.css';
import profilePhoto from '../assets/images/photo/azrullll.jpeg';
import cvUrl from '../assets/CV.pdf';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeScale, fadeUp, smoothEase, springHover, staggerContainer } from './motionConfig';
import FancyTilt from './FancyTilt';
import { celebrateAction } from '../utils/celebrate';

const socialLinks = [
  {
    platform: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/azrul-amaline/'
  },
  {
    platform: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/azrul16'
  }
];
const cvFileName = 'Azrul Amaline.pdf';

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.06
    }
  }
};

const portraitVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    rotate: -5,
    scale: 0.97
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.38,
      ease: smoothEase
    }
  }
};

const heroPanelVariants = {
  hidden: {
    opacity: 0,
    y: 22
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.34,
      ease: smoothEase,
      staggerChildren: 0.04,
      delayChildren: 0.02
    }
  }
};

const Profile = () => {
  const profileRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const bannerX = useMotionValue(0);
  const bannerY = useMotionValue(0);
  const smoothBannerX = useSpring(bannerX, { stiffness: 70, damping: 18, mass: 0.35 });
  const smoothBannerY = useSpring(bannerY, { stiffness: 70, damping: 18, mass: 0.35 });

  useEffect(() => {
    const section = profileRef.current;
    if (!section) {
      return undefined;
    }

    const particles = section.querySelectorAll('.particle');
    particles.forEach((particle) => {
      particle.style.setProperty('--random-x', `${Math.random() * 120 - 60}px`);
      particle.style.setProperty('--random-y', `${Math.random() * 120 - 60}px`);
    });

    const floatElements = section.querySelectorAll('.float-animation');
    floatElements.forEach((element) => {
      element.style.setProperty('--float-duration', `${Math.random() * 4 + 6}s`);
    });

    return undefined;
  }, []);

  useEffect(() => {
    const section = profileRef.current;
    const canTrackPointer = window.matchMedia('(pointer: fine)').matches;

    if (!section || shouldReduceMotion || !canTrackPointer) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      const rect = section.getBoundingClientRect();
      const xProgress = (event.clientX - rect.left) / rect.width - 0.5;
      const yProgress = (event.clientY - rect.top) / rect.height - 0.5;

      bannerX.set(xProgress * 34);
      bannerY.set(yProgress * 26);
    };

    const resetBanner = () => {
      bannerX.set(0);
      bannerY.set(0);
    };

    section.addEventListener('pointermove', handlePointerMove);
    section.addEventListener('pointerleave', resetBanner);

    return () => {
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', resetBanner);
    };
  }, [bannerX, bannerY, shouldReduceMotion]);

  return (
    <section id="home" className="profile-section" ref={profileRef}>
      <div className="particles" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--size': `${Math.random() * 0.35 + 0.1}rem`,
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${Math.random() * 5 + 7}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>

      <div className="geometric-shapes" aria-hidden="true">
        <div className="shape triangle float-animation"></div>
        <div className="shape circle float-animation"></div>
        <div className="shape square float-animation"></div>
      </div>

      <motion.div
        className="profile-content"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="profile-image-container">
          <motion.div
            className="profile-image"
            variants={portraitVariants}
            style={{ x: smoothBannerX, y: smoothBannerY }}
            data-pointer-glow
          >
            <FancyTilt className="profile-tilt" glare scale={1.015} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className="image-wrapper">
                <div className="image-container">
                  <img src={profilePhoto} alt="Azrul Amaline" className="profile-photo" />
                  <div className="liquid-effect"></div>
                  <div className="glow-effect"></div>
                  <div className="ring-animation ring-1"></div>
                  <div className="ring-animation ring-2"></div>
                  <div className="ring-animation ring-3"></div>
                </div>
                <div className="reflection"></div>
              </div>
            </FancyTilt>
          </motion.div>
        </div>

        <div className="profile-text-container">
          <motion.div className="profile-text hero-panel" variants={heroPanelVariants} data-pointer-glow>
            <motion.p className="hero-kicker" variants={fadeUp}>I'm</motion.p>

            <motion.div className="name-container" variants={fadeScale}>
              <h1 className="name-text">
                Azrul <span className="name-last">Amaline</span>
              </h1>
              <div className="name-glow"></div>
              <div className="name-underline"></div>
            </motion.div>

            <motion.p className="hero-role" variants={fadeUp}>
              Flutter Developer & Backend Engineer
            </motion.p>

            <motion.p className="hero-lead" variants={fadeUp}>
              I design and develop clean mobile apps, practical backend systems, and AI-assisted tools that turn complex ideas into usable software.
            </motion.p>

            <motion.div className="hero-actions" aria-label="Primary portfolio actions" variants={staggerContainer}>
              <motion.a href={cvUrl} className="hero-cta-link hero-cta-download" download={cvFileName} onClick={celebrateAction} variants={fadeUp} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} transition={springHover} data-pointer-glow>
                <FaDownload />
                Download CV
              </motion.a>
              <motion.a href="#contact" className="hero-cta-link hero-cta-secondary" onClick={celebrateAction} variants={fadeUp} whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }} transition={springHover} data-pointer-glow>
                <FaEnvelope />
                Hire Me / Contact
              </motion.a>
            </motion.div>

            <motion.div className="profile-social-dock" aria-label="Social profile links" variants={staggerContainer}>
              {socialLinks.map(({ platform, icon, url }) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${platform.toLowerCase()}`}
                  data-pointer-glow
                  aria-label={`Open ${platform} profile`}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springHover}
                >
                  <span className="link-icon">{icon}</span>
                  <span className="link-text">{platform}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
