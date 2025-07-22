import React from 'react';
import './Certificates.css';

const certificateList = [
  { name: 'Flutter Development Bootcamp', issuer: 'Udemy', link: '#' },
  { name: 'Firebase in Practice', issuer: 'Coursera', link: '#' },
  { name: 'AI for Everyone', issuer: 'Coursera', link: '#' },
  { name: 'Machine Learning', issuer: 'Coursera', link: '#' },
  { name: 'Python for Data Science', issuer: 'edX', link: '#' },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2>📜 Certificates</h2>
      <div className="certificates-list">
        {certificateList.map((cert, index) => (
          <div className="certificate-item" key={index}>
            <h3>{cert.name}</h3>
            <p>Issued by: {cert.issuer}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates; 