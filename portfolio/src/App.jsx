import React, { useEffect } from 'react';
import './App.css';
import DeferredSection from './components/DeferredSection';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Availability from './components/Availability';
import Collaboration from './components/Collaboration';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const scrollToHashSection = () => {
      const sectionId = window.location.hash.replace('#', '');
      if (!sectionId) {
        return;
      }

      const target = document.getElementById(sectionId);
      if (!target) {
        return;
      }

      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar?.getBoundingClientRect().height || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: 'auto'
      });
    };

    const timeoutIds = [80, 350, 800].map((delay) => window.setTimeout(scrollToHashSection, delay));
    window.addEventListener('hashchange', scrollToHashSection);

    return () => {
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener('hashchange', scrollToHashSection);
    };
  }, []);

  return (
    <div className="App">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-background" aria-hidden="true">
        <div className="background-aurora aurora-one"></div>
        <div className="background-aurora aurora-two"></div>
        <div className="background-aurora aurora-three"></div>
        <div className="site-wave-flow wave-flow-one"></div>
        <div className="site-wave-flow wave-flow-two"></div>
        <div className="starfield starfield-primary"></div>
        <div className="starfield starfield-secondary"></div>
        <div className="starfield starfield-tertiary"></div>
      </div>

      <CommandPalette />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Profile />
        <DeferredSection id="projects"><Projects /></DeferredSection>
        <DeferredSection id="skills"><Skills /></DeferredSection>
        <DeferredSection id="about"><Availability /></DeferredSection>
        <DeferredSection id="education"><Education /></DeferredSection>
        <DeferredSection id="certificates"><Certificates /></DeferredSection>
        <DeferredSection id="collaboration"><Collaboration /></DeferredSection>

        <DeferredSection id="contact"><Contact /></DeferredSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
