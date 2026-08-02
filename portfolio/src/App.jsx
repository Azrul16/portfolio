import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import IntroLoader from './components/IntroLoader';
import CommandPalette from './components/CommandPalette';
import Availability from './components/Availability';
import Collaboration from './components/Collaboration';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';

function MainSite() {
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
      <IntroLoader />
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

      <CursorGlow />
      <CommandPalette />
      <Navbar />
      <main>
        <Profile />
        <Availability />
        <Education />
        <Certificates />
        <Skills />
        <Projects />
        <Collaboration />

        {/* <Reviews />
        <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainSite />} />
    </Routes>
  );
}

export default App;
