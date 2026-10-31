import { m as motion } from 'framer-motion';
import { FaGithub, FaHandshake, FaLinkedin } from 'react-icons/fa';
import { fadeUp, staggerContainer, viewportOnce } from './motionConfig';
import './Collaboration.css';

const Collaboration = () => (
  <section
    id="collaboration"
    className="collaboration-section"
    aria-labelledby="collaboration-title"
  >
    <motion.div
      className="collaboration-shell"
      initial={false}
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      <motion.div
        className="collaboration-copy"
        variants={fadeUp}
        data-pointer-glow
      >
        <p className="collaboration-kicker">Open to job opportunities</p>
        <h2 id="collaboration-title">Let’s talk about your team.</h2>
        <p>Have a Flutter role in mind? Send the role description, team context, and location so we can discuss the fit.</p>
      </motion.div>

      <motion.div className="collaboration-actions" variants={staggerContainer}>
        <motion.a href="#contact" variants={fadeUp}>
          <FaHandshake />
          Discuss a Role
        </motion.a>
        <motion.a
          href="https://github.com/azrul16"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          <FaGithub />
          Review GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/azrul-amaline/"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
        >
          <FaLinkedin />
          Connect
        </motion.a>
      </motion.div>
    </motion.div>
  </section>
);

export default Collaboration;
