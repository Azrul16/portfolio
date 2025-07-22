import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>👤 About Me</h2>
        <p>
          Hi! I'm <b>Azrul Amaline</b>, a versatile and passionate Flutter developer and tech enthusiast from <b>Bangladesh</b>.<br /><br />
          I specialize in building cross-platform mobile and web applications with elegant UIs and solid backends. I enjoy turning innovative ideas into real, usable apps that are both functional and user-friendly.<br /><br />
          With a strong foundation in software development, IoT, and AI research, I have successfully contributed to and led multiple projects involving mobile apps, Firebase, Node.js APIs, and real-time data systems. I also have experience in machine learning, digital forensics, and hardware prototyping using platforms like Raspberry Pi and Arduino.
        </p>
        <a href="#" className="cv-btn" download>Download CV</a>
      </div>
    </section>
  );
}

export default About; 