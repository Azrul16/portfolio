import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaHandshake, FaLinkedin } from 'react-icons/fa';
import { fadeUp, staggerContainer, viewportOnce } from './motionConfig';
import './Collaboration.css';

const Collaboration = () => (
  <section className="collaboration-section" aria-labelledby="collaboration-title">
    <motion.div className="collaboration-shell" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer}>
      <motion.div className="collaboration-copy" variants={fadeUp} data-pointer-glow>
        <p className="collaboration-kicker">Open to real feedback</p>
        <h2 id="collaboration-title">Available for client work, collaborations, and academic software projects.</h2>
        <p>
          I am currently building my public track record. If we work together, I can add real testimonials and project outcomes here after delivery.
        </p>
      </motion.div>

      <motion.div className="collaboration-actions" variants={staggerContainer}>
        <motion.a href="#contact" variants={fadeUp}>
          <FaHandshake />
          Start a project
        </motion.a>
        <motion.a href="https://github.com/azrul16" target="_blank" rel="noopener noreferrer" variants={fadeUp}>
          <FaGithub />
          Review GitHub
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/azrul-amaline/" target="_blank" rel="noopener noreferrer" variants={fadeUp}>
          <FaLinkedin />
          Connect
        </motion.a>
      </motion.div>
    </motion.div>
  </section>
);

export default Collaboration;
