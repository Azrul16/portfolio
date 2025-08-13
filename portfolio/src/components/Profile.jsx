import React, { useEffect, useRef } from 'react';
import './Profile.css';
import profilePhoto from '../assets/images/photo/photo.png';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaYoutube  } from 'react-icons/fa';

const Profile = () => {
  const nameRef = useRef(null);
  const profileRef = useRef(null);
  const taglineRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const animateElements = () => {
      const elements = [
        ...document.querySelectorAll('.profile-image, .profile-text > *')
      ];
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.style.transitionDelay = `${index * 0.15}s`;
          el.classList.add('visible');
        }
      });

      // Animate tagline words
      if (taglineRef.current) {
        const words = taglineRef.current.querySelectorAll('.tagline-word');
        words.forEach((word, i) => {
          word.style.transitionDelay = `${i * 0.1 + 0.3}s`;
          word.classList.add('visible');
        });
      }

      // Animate social icons
      if (socialRef.current) {
        const links = socialRef.current.querySelectorAll('.social-link');
        links.forEach((link, i) => {
          link.style.transitionDelay = `${i * 0.1 + 0.6}s`;
          link.classList.add('visible');
        });
      }
    };

    // Particle animation
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      particle.style.setProperty('--random-x', `${Math.random() * 200 - 100}px`);
      particle.style.setProperty('--random-y', `${Math.random() * 200 - 100}px`);
    });

    // Floating animation
    const floatElements = document.querySelectorAll('.float-animation');
    floatElements.forEach(el => {
      el.style.setProperty('--float-distance', `${Math.random() * 20 + 10}px`);
      el.style.setProperty('--float-duration', `${Math.random() * 10 + 10}s`);
    });

    window.addEventListener('scroll', animateElements);
    animateElements();
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <section id="profile" className="profile-section">
      {/* Animated Background Elements */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--size': `${Math.random() * 0.4 + 0.1}rem`,
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${Math.random() * 15 + 10}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
          }}></div>
        ))}
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="geometric-shapes">
        <div className="shape triangle float-animation"></div>
        <div className="shape circle float-animation"></div>
        <div className="shape square float-animation"></div>
      </div>

      {/* Main Content */}
      <div className="profile-content" ref={profileRef}>
        {/* Profile Image with Advanced Effects - Left Side */}
        <div className="profile-image-container">
          <div className="profile-image">
            <div className="image-wrapper">
              <div className="image-container">
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  className="profile-photo" 
                />
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
        
        {/* Profile Text Content - Right Side */}
        <div className="profile-text-container">
          <div className="profile-text">
            <div className="name-container" ref={nameRef}>
              <h1 className="name-text">
                𝓐𝔃𝓻𝓾𝓵 <span className="name-last">𝓐𝓶𝓪𝓵𝓲𝓷𝓮</span>
              </h1>
              <div className="name-glow"></div>
              <div className="name-underline"></div>
            </div>
            
            {/* Animated Tagline */}
            <p className="profile-tagline" ref={taglineRef}>
              <span className="tagline-word">Software</span>{' '}
              <span className="tagline-word">Developer</span>{' | '}
              <span className="tagline-word">Mobile</span>{' '}
              <span className="tagline-word">Application</span>{' '}
              <span className="tagline-word">Enthusiast</span>{' | '}
              <span className="tagline-word">Fast </span>{' '}
              <span className="tagline-word">Learner</span>
            </p>
            
            {/* Social Links with Hover Effects */}
            <div className="social-links" ref={socialRef}>
  {[
    { 
      platform: 'LinkedIn', 
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/azrul-amaline/'
    },
    { 
      platform: 'GitHub', 
      icon: <FaGithub />,
      url: 'http://github.com/azrul16'
    },
    { 
      platform: 'Twitter', 
      icon: <FaTwitter />,
      url: 'https://x.com/AAmaline9489'
    },
    { 
      platform: 'Youtube', 
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/@thirstybot69'
    },
    { 
      platform: 'Facebook', 
      icon: <FaFacebook />,
      url: 'http://www.facebook.com/azrulamaline16'
    }
  ].map(({ platform, icon, url }) => (
    <a 
      key={platform}
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`social-link ${platform.toLowerCase()}`}
    >
      <span className="link-icon">{icon}</span>
      <span className="link-text">{platform}</span>
      <span className="link-underline"></span>
      <span className="link-hover-effect"></span>
      <span className="link-pulse-effect"></span>
    </a>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;