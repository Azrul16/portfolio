import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaRegEnvelopeOpen,
  FaHandshake,
  FaMobileAlt,
  FaCopy
} from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import './Contact.css';
import { fadeUp, springHover, viewportOnce } from './motionConfig';
import { celebrateAction } from '../utils/celebrate';

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

const contactActions = [
  {
    icon: <FaHandshake />,
    label: 'Hire me for a project',
    href: 'mailto:azrul.amaline16@gmail.com?subject=Project%20Inquiry%20from%20Portfolio',
    tone: 'primary'
  },
  {
    icon: <FaMobileAlt />,
    label: 'Collaborate on an app',
    href: 'mailto:azrul.amaline16@gmail.com?subject=App%20Collaboration%20Inquiry',
    tone: 'accent'
  },
  {
    icon: <FaGithub />,
    label: 'View GitHub',
    href: 'https://github.com/azrul16',
    tone: 'github',
    external: true
  },
  {
    icon: <FaLinkedin />,
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/azrul-amaline/',
    tone: 'linkedin',
    external: true
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('idle');
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

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setStatus('EmailJS needs a template ID and public key in the env file before messages can be sent.');
      setStatusType('error');
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending your message...');
    setStatusType('sending');

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          title: `Portfolio message from ${formData.name.trim()}`,
          name: formData.name.trim(),
          email: formData.email.trim(),
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          to_name: 'Azrul Amaline',
          time: new Date().toLocaleString(),
          message: formData.message.trim()
        },
        {
          publicKey: emailJsConfig.publicKey
        }
      );

      setStatus('Message sent successfully. I will get back to you soon.');
      setStatusType('success');
      setFormData({ name: '', email: '', message: '' });
      celebrateAction(e);
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setStatus('Message could not be sent right now. Please try again or email me directly.');
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async (event) => {
    try {
      await navigator.clipboard.writeText('azrul.amaline16@gmail.com');
      setStatus('Email copied to clipboard.');
      setStatusType('success');
      celebrateAction(event);
    } catch {
      setStatus('Copy failed. You can still email me directly at azrul.amaline16@gmail.com.');
      setStatusType('error');
    }
  };

  const fallbackMailHref = `mailto:azrul.amaline16@gmail.com?subject=${encodeURIComponent(`Portfolio message from ${formData.name.trim() || 'a visitor'}`)}&body=${encodeURIComponent(
    [
      formData.message.trim() || 'Hi Azrul, I want to discuss a project.',
      '',
      `Name: ${formData.name.trim() || ''}`,
      `Email: ${formData.email.trim() || ''}`
    ].join('\n')
  )}`;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-pattern"></div>
      <div className="contact-bg-gradient"></div>

      <div className="contact-container">
        <div className="section-title-block">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-columns">
          <motion.div className="contact-column info-column" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <div className="contact-card info-card" data-pointer-glow>
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
                <div className="info-item email-info-item">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <span className="email-line">
                      <a href="mailto:azrul.amaline16@gmail.com?subject=Portfolio%20Contact">azrul.amaline16@gmail.com</a>
                      <button type="button" className="copy-email-icon-btn" onClick={handleCopyEmail} aria-label="Copy email address">
                        <FaCopy />
                      </button>
                    </span>
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

          <motion.div className="contact-column social-column" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <div className="contact-card social-card" data-pointer-glow>
              <div className="card-glow"></div>
              <div className="card-heading">
                <h3>Start Here</h3>
              </div>
              <div className="contact-action-grid">
                {contactActions.map((action) => (
                  <motion.a
                    key={action.label}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    className={`contact-action contact-action-${action.tone}`}
                    aria-label={action.label}
                    onClick={action.tone === 'primary' || action.tone === 'accent' ? celebrateAction : undefined}
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={springHover}
                    data-pointer-glow
                  >
                    <span className="contact-action-icon">{action.icon}</span>
                    <span>{action.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-column form-column" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <form className="contact-card form-card" onSubmit={handleSubmit} data-pointer-glow>
              <div className="card-glow"></div>
              <div className="form-card-topline">
                <span className="form-card-icon"><FaRegEnvelopeOpen /></span>
                <div>
                  <p className="form-kicker">Direct inbox</p>
                  <h3>Send Me an Email</h3>
                </div>
              </div>
              <div className="form-field-grid">
                <div className={`form-group ${activeField === 'name' ? 'active' : ''}`}>
                  <label htmlFor="contact-name">Your Name</label>
                  <input id="contact-name" type="text" name="name" placeholder="Azrul Amaline" value={formData.name} onChange={handleChange} onFocus={() => setActiveField('name')} onBlur={() => setActiveField(null)} required />
                </div>

                <div className={`form-group ${activeField === 'email' ? 'active' : ''}`}>
                  <label htmlFor="contact-email">Your Email</label>
                  <input id="contact-email" type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)} required />
                </div>
              </div>

              <div className={`form-group message-group ${activeField === 'message' ? 'active' : ''}`}>
                <label htmlFor="contact-message">Your Message</label>
                <textarea id="contact-message" name="message" placeholder="Share the project idea, app issue, timeline, or anything useful..." rows="6" value={formData.message} onChange={handleChange} onFocus={() => setActiveField('message')} onBlur={() => setActiveField(null)} required></textarea>
                <span className="message-count">{formData.message.length} characters</span>
              </div>

              <motion.button type="submit" className="submit-btn" whileHover={{ scale: 1.01, boxShadow: '0 10px 28px rgba(159, 122, 234, 0.45)' }} whileTap={{ scale: 0.98 }} transition={springHover} disabled={isSubmitting} data-pointer-glow>
                <span className="btn-content">
                  <span className="btn-text">{isSubmitting ? 'Sending Message' : 'Send Message'}</span>
                  <span className="btn-icon">{isSubmitting ? <IoMdSend /> : <FaRegEnvelopeOpen />}</span>
                </span>
                <div className="btn-particles"></div>
              </motion.button>

              <AnimatePresence>
                {status && (
                  <motion.div className={`status-message status-${statusType}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p>{status}</p>
                    {statusType === 'error' && (
                      <a className="status-fallback-link" href={fallbackMailHref}>
                        Open email instead
                      </a>
                    )}
                  </motion.div>
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

