import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import './Contact.css';

const socialLinks = [
  { icon: <FaFacebook />, name: 'Facebook', color: '#1877f2', url: 'http://www.facebook.com/azrulamaline16' },
  { icon: <FaInstagram />, name: 'Instagram', color: '#e4405f', url: 'https://www.instagram.com/_azrulamaline/' },
  { icon: <FaYoutube />, name: 'YouTube', color: '#ff0000', url: 'https://www.youtube.com/@thirstybot69' },
  { icon: <FaLinkedin />, name: 'LinkedIn', color: '#0a66c2', url: 'https://www.linkedin.com/in/azrul-amaline/' },
  { icon: <FaGithub />, name: 'GitHub', color: '#6e5494', url: 'http://github.com/azrul16' },
  { icon: <FaTwitter />, name: 'Twitter', color: '#1da1f2', url: 'https://x.com/AAmaline9489' }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      const response = await fetch('https://smtp-server-742u.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.error || 'Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 16
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-pattern"></div>
      <div className="contact-bg-gradient"></div>

      <div className="contact-container">
        <div className="section-title-block">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-columns">
          <motion.div className="contact-column info-column" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariants}>
            <div className="contact-card info-card">
              <div className="card-glow"></div>
              <div className="card-heading">
                <h3>Contact Information</h3>
              </div>
              <div className="card-inner">
                <div className="info-item">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>Jhenidah, Khulna, Bangladesh</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <a href="mailto:azrul.amaline16@gmail.com">azrul.amaline16@gmail.com</a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><FaPhone /></div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <a href="tel:+8801934438650">+880 19-3443-8650</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-column social-column" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariants}>
            <div className="contact-card social-card">
              <div className="card-glow"></div>
              <div className="card-heading">
                <h3>Social Links</h3>
              </div>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="social-icon" style={{ backgroundColor: social.color }}>
                      {social.icon}
                    </div>
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-column form-column" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariants}>
            <form className="contact-card form-card" onSubmit={handleSubmit}>
              <div className="card-glow"></div>
              <div className="card-heading">
                <h3>Send a Message</h3>
              </div>

              <div className={`form-group ${activeField === 'name' ? 'active' : ''}`}>
                <input type="text" name="name" placeholder=" " value={formData.name} onChange={handleChange} onFocus={() => setActiveField('name')} onBlur={() => setActiveField(null)} required />
                <label>Your Name</label>
                <motion.div className="underline" initial={{ scaleX: 0 }} animate={{ scaleX: activeField === 'name' ? 1 : 0 }} transition={{ duration: 0.3 }} />
              </div>

              <div className={`form-group ${activeField === 'email' ? 'active' : ''}`}>
                <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)} required />
                <label>Your Email</label>
                <motion.div className="underline" initial={{ scaleX: 0 }} animate={{ scaleX: activeField === 'email' ? 1 : 0 }} transition={{ duration: 0.3 }} />
              </div>

              <div className={`form-group ${activeField === 'message' ? 'active' : ''}`}>
                <textarea name="message" placeholder=" " rows="5" value={formData.message} onChange={handleChange} onFocus={() => setActiveField('message')} onBlur={() => setActiveField(null)} required></textarea>
                <label>Your Message</label>
                <motion.div className="underline" initial={{ scaleX: 0 }} animate={{ scaleX: activeField === 'message' ? 1 : 0 }} transition={{ duration: 0.3 }} />
              </div>

              <motion.button type="submit" className="submit-btn" whileHover={{ scale: 1.01, boxShadow: '0 10px 28px rgba(159, 122, 234, 0.45)' }} whileTap={{ scale: 0.98 }} disabled={isSubmitting}>
                <motion.span className="btn-text" animate={isSubmitting ? { opacity: 0, y: -18 } : { opacity: 1, y: 0 }}>Send Message</motion.span>
                <motion.span className="btn-icon" animate={isSubmitting ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}><IoMdSend /></motion.span>
                <div className="btn-particles"></div>
              </motion.button>

              <AnimatePresence>
                {status && (
                  <motion.p className="status-message" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    {status}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

