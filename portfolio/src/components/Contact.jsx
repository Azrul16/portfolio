import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe
} from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      const response = await fetch("https://smtp-server-742u.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const cardHover = {
    y: -10,
    boxShadow: "0 15px 30px rgba(159, 122, 234, 0.4)",
    transition: { type: "spring", stiffness: 300 }
  };

  const socialHover = {
    scale: 1.1,
    y: -5,
    transition: { type: "spring", stiffness: 400 }
  };

  const socialTap = {
    scale: 0.95,
    transition: { type: "spring", stiffness: 400 }
  };

  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      name: 'Facebook', 
      color: '#1877f2', 
      url: 'http://www.facebook.com/azrulamaline16' 
    },
    { 
      icon: <FaInstagram />, 
      name: 'Instagram', 
      color: '#e4405f', 
      url: 'https://www.instagram.com/_azrulamaline/' 
    },
    { 
      icon: <FaYoutube />, 
      name: 'YouTube', 
      color: '#ff0000', 
      url: 'https://www.youtube.com/@thirstybot69' 
    },
    { 
      icon: <FaLinkedin />, 
      name: 'LinkedIn', 
      color: '#0a66c2', 
      url: 'https://www.linkedin.com/in/azrul-amaline/' 
    },
    { 
      icon: <FaGithub />, 
      name: 'GitHub', 
      color: '#6e5494', 
      url: 'http://github.com/azrul16' 
    },
    { 
      icon: <FaTwitter />, 
      name: 'Twitter', 
      color: '#1da1f2', 
      url: 'https://x.com/AAmaline9489' 
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-pattern"></div>
      <div className="contact-bg-gradient"></div>
      
      <motion.div 
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="contact-header" variants={columnVariants}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="section-title">Let's Connect</span>
            <motion.span 
              className="title-underline"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind or want to collaborate? Drop me a message!
          </motion.p>
        </motion.div>

        <div className="contact-columns">
          {/* Contact Info Column */}
          <motion.div 
            className="contact-column info-column"
            variants={columnVariants}
          >
            <motion.div 
              className="contact-card info-card"
              whileHover={cardHover}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-glow"></div>
              <div className="card-inner">
                <div className="info-item">
                  <motion.div 
                    className="info-icon"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <FaMapMarkerAlt />
                  </motion.div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>Jhenidah, Khulna, Bangladesh.</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <motion.div 
                    className="info-icon"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <FaEnvelope />
                  </motion.div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <a href="mailto:azrul.amaline16@gmail.com">azrul.amaline16@gmail.com</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <motion.div 
                    className="info-icon"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <FaPhone />
                  </motion.div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <a href="tel:+8801934438650">+880 19-3443-8650</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links Column */}
          <motion.div 
            className="contact-column social-column"
            variants={columnVariants}
          >
            <motion.div 
              className="contact-card social-card"
              whileHover={cardHover}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="card-glow"></div>
              <h3 className="social-title">Find Me On</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                    whileHover={socialHover}
                    whileTap={socialTap}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <motion.div 
                      className="social-icon"
                      style={{ backgroundColor: social.color }}
                      whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                    >
                      {social.icon}
                    </motion.div>
                    <motion.span 
                      className="social-name"
                      whileHover={{ color: social.color }}
                    >
                      {social.name}
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Message Form Column */}
          <motion.div 
            className="contact-column form-column"
            variants={columnVariants}
          >
            <motion.form 
              className="contact-card form-card"
              onSubmit={handleSubmit}
              whileHover={{
                boxShadow: "0 20px 50px rgba(159, 122, 234, 0.3)"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="card-glow"></div>
              <h3 className="form-title">Send a Message</h3>
              
              <motion.div 
                className={`form-group ${activeField === 'name' ? 'active' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  required
                />
                <label>Your Name</label>
                <motion.div 
                  className="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeField === 'name' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div 
                className={`form-group ${activeField === 'email' ? 'active' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  required
                />
                <label>Your Email</label>
                <motion.div 
                  className="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeField === 'email' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div 
                className={`form-group ${activeField === 'message' ? 'active' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <textarea
                  name="message"
                  placeholder=" "
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  required
                ></textarea>
                <label>Your Message</label>
                <motion.div 
                  className="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeField === 'message' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(159, 122, 234, 0.6)"
                }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.span 
                  className="btn-text"
                  animate={isSubmitting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                >
                  Send Message
                </motion.span>
                <motion.span 
                  className="btn-icon"
                  animate={isSubmitting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                >
                  <IoMdSend />
                </motion.span>
                <div className="btn-particles"></div>
              </motion.button>

              <AnimatePresence>
                {status && (
                  <motion.p 
                    className="status-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;