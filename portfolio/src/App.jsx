import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { Routes, Route } from 'react-router-dom';

function MainSite() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Reviews />
        <Blog />
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
