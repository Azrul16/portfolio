import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { Routes, Route } from 'react-router-dom';

function MainSite() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    let activeTarget = null;

    const setGlowPosition = (target, event) => {
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      target.style.setProperty('--pointer-x', `${x}px`);
      target.style.setProperty('--pointer-y', `${y}px`);
    };

    const handlePointerMove = (event) => {
      if (!mediaQuery.matches) {
        return;
      }

      const target = event.target.closest('[data-pointer-glow]');

      if (!target) {
        if (activeTarget) {
          activeTarget.classList.remove('pointer-glow-active');
          activeTarget = null;
        }
        return;
      }

      if (activeTarget && activeTarget !== target) {
        activeTarget.classList.remove('pointer-glow-active');
      }

      activeTarget = target;
      activeTarget.classList.add('pointer-glow-active');
      setGlowPosition(activeTarget, event);
    };

    const handlePointerOut = (event) => {
      if (!mediaQuery.matches) {
        return;
      }

      const target = event.target.closest('[data-pointer-glow]');
      if (!target) {
        return;
      }

      const nextTarget = event.relatedTarget?.closest?.('[data-pointer-glow]');
      if (target !== nextTarget) {
        target.classList.remove('pointer-glow-active');
        if (activeTarget === target) {
          activeTarget = null;
        }
      }
    };

    const handlePointerLeaveDocument = () => {
      if (activeTarget) {
        activeTarget.classList.remove('pointer-glow-active');
        activeTarget = null;
      }
    };

    const handleMediaChange = (event) => {
      if (!event.matches) {
        handlePointerLeaveDocument();
      }
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerout', handlePointerOut);
    document.addEventListener('pointerleave', handlePointerLeaveDocument);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerout', handlePointerOut);
      document.removeEventListener('pointerleave', handlePointerLeaveDocument);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    <div className="App">
      <div className="site-background" aria-hidden="true">
        <div className="background-aurora aurora-one"></div>
        <div className="background-aurora aurora-two"></div>
        <div className="background-aurora aurora-three"></div>
        <div className="starfield starfield-primary"></div>
        <div className="starfield starfield-secondary"></div>
        <div className="starfield starfield-tertiary"></div>
      </div>

      <Navbar />
      <main>
        <Profile />
        <About />
        <Education />
        <Certificates />
        <Skills />
        <Projects />

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
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/*" element={<MainSite />} />
    </Routes>
  );
}

export default App;
