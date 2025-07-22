import React from 'react';
import './Education.css';

const educationList = [
  {
    institution: 'University of Example',
    degree: 'B.Sc. in Computer Science',
    years: '2018 - 2022',
    details: [
      'Final-year thesis on Malware Detection and Log Anomaly Detection',
      'Exploring datasets like HDFS_v1, theZoo malware repository',
      'Review paper: "AI and Machine Learning for Automated Evidence Classification in Digital Forensics"',
    ],
  },
  {
    institution: 'Online Course Platform',
    degree: 'Full-Stack Web Development',
    years: '2022',
    details: [],
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>🎓 Education & Research</h2>
      <div className="education-list">
        {educationList.map((edu, index) => (
          <div className="education-item" key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <span>{edu.years}</span>
            {edu.details.length > 0 && (
              <ul className="edu-details">
                {edu.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education; 