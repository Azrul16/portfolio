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
      <Route path="/*" element={<MainSite />} />
    </Routes>
  );
}

export default App;
