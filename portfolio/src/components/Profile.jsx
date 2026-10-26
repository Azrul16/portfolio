import { m as motion } from 'framer-motion';
import './Profile.css';
import profilePhoto from '../assets/images/photo/portrait.webp';
import profilePhotoSmall from '../assets/images/photo/portrait-480.avif';
import profilePhotoMedium from '../assets/images/photo/portrait-640.avif';
import profilePhotoLarge from '../assets/images/photo/portrait-800.avif';
import cvUrl from '../assets/Azrul-Amalie-Flutter.pdf';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  fadeScale,
  fadeUp,
  smoothEase,
  springHover,
  staggerContainer,
} from './motionConfig';

const socialLinks = [
  {
    platform: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/azrul-amaline/',
  },
  {
    platform: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/azrul16',
  },
];
const cvFileName = 'Azrul Amaline.pdf';

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
};

const portraitVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    rotate: -5,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.38,
      ease: smoothEase,
    },
  },
};

const heroPanelVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.34,
      ease: smoothEase,
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

const Profile = () => {
  return (
    <section id="home" className="profile-section">
      <motion.div
        className="profile-content"
        variants={heroContainer}
        initial={false}
        animate="visible"
      >
        <div className="profile-image-container">
          <motion.div
            className="profile-image"
            variants={portraitVariants}
            data-pointer-glow
          >
            <div className="profile-tilt">
              <div className="image-wrapper">
                <div className="image-container">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={`${profilePhotoSmall} 480w, ${profilePhotoMedium} 640w, ${profilePhotoLarge} 800w`}
                      sizes="(max-width: 480px) 85vw, 420px"
                    />
                    <img
                      src={profilePhoto}
                      alt="Azrul Amaline"
                      className="profile-photo"
                      width="800"
                      height="800"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </picture>
                  <div className="liquid-effect"></div>
                  <div className="glow-effect"></div>
                  <div className="ring-animation ring-1"></div>
                  <div className="ring-animation ring-2"></div>
                  <div className="ring-animation ring-3"></div>
                </div>
                <div className="reflection"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="profile-text-container">
          <motion.div
            className="profile-text hero-panel"
            variants={heroPanelVariants}
            data-pointer-glow
          >
            <motion.p className="hero-kicker hero-greeting" variants={fadeUp}>
              Assalamu alaikum{' '}
              <span lang="ar" dir="rtl">
                (السلام عليكم)
              </span>
            </motion.p>

            <motion.div className="name-container" variants={fadeScale}>
              <h1 className="name-text">
                Azrul <span className="name-last">Amaline</span>
              </h1>
              <div className="name-glow"></div>
              <div className="name-underline"></div>
            </motion.div>

            <motion.p className="hero-role" variants={fadeUp}>
              Flutter &amp; Backend Developer{' '}
              <span className="hero-role-secondary">
                DevOps / Cloud Enthusiast
              </span>
            </motion.p>

            <motion.p className="hero-lead" variants={fadeUp}>
              I’m a Flutter and backend developer from Bangladesh. I build
              cross-platform mobile apps, backend APIs, and
              deployment-ready systems with Flutter, Python, Firebase, Docker,
              and Linux. I enjoy taking products from development to deployment
              with practical, maintainable architecture.
            </motion.p>

            <motion.div
              className="hero-actions"
              aria-label="Primary portfolio actions"
              variants={staggerContainer}
            >
              <motion.a
                href={cvUrl}
                className="hero-cta-link hero-cta-download"
                download={cvFileName}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={springHover}
                data-pointer-glow
              >
                <FaDownload />
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                className="hero-cta-link hero-cta-secondary"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={springHover}
                data-pointer-glow
              >
                <FaEnvelope />
                Let’s Talk
              </motion.a>
            </motion.div>

            <motion.div
              className="profile-social-dock"
              aria-label="Social profile links"
              variants={staggerContainer}
            >
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
