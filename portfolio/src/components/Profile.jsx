import React, { useEffect, useRef } from 'react';
import './Profile.css';
import profilePhoto from '../assets/images/photo/azrullll.jpeg';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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

const Profile = () => {
  const profileRef = useRef(null);

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
      element.style.setProperty('--float-duration', `${Math.random() * 6 + 10}s`);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        const revealTargets = section.querySelectorAll('.profile-image, .hero-panel, .hero-cta-link, .hero-availability, .social-link');
        revealTargets.forEach((element, index) => {
          element.style.transitionDelay = `${Math.min(index * 0.08, 0.6)}s`;
          element.classList.add('visible');
        });

        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="profile-section" ref={profileRef}>
      <div className="particles" aria-hidden="true">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--size': `${Math.random() * 0.35 + 0.1}rem`,
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${Math.random() * 10 + 12}s`,
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

      <div className="profile-content">
        <div className="profile-image-container">
          <div className="profile-image" data-pointer-glow>
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
          </div>
        </div>

        <div className="profile-text-container">
          <div className="profile-text hero-panel" data-pointer-glow>
            <p className="hero-kicker">Flutter Developer</p>

            <div className="name-container">
              <h1 className="name-text">
                Azrul <span className="name-last">Amaline</span>
              </h1>
              <div className="name-glow"></div>
              <div className="name-underline"></div>
            </div>

            <p className="hero-lead">
              Flutter developer building mobile apps, reusable Dart packages, and AI-backed tools.
            </p>

            <div className="hero-availability" data-pointer-glow>
              <span>Currently Available For</span>
              <p>Available for Flutter apps, Django/Python backend work, and AI tool projects.</p>
            </div>

            <div className="hero-actions" aria-label="Primary portfolio actions">
              <a href="#projects" className="hero-cta-link hero-cta-primary" data-pointer-glow>
                View Projects
                <FaArrowRight />
              </a>
              <a href="#contact" className="hero-cta-link hero-cta-secondary" data-pointer-glow>
                <FaEnvelope />
                Hire Me / Contact
              </a>
            </div>

            <div className="profile-social-dock" aria-label="Social profile links">
              {socialLinks.map(({ platform, icon, url }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${platform.toLowerCase()}`}
                  data-pointer-glow
                  aria-label={`Open ${platform} profile`}
                >
                  <span className="link-icon">{icon}</span>
                  <span className="link-text">{platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
