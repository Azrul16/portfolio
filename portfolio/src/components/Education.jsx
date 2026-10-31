import { FaGraduationCap, FaUniversity, FaCode } from 'react-icons/fa';
import './Education.css';

const focusAreas = ['Algorithms & data structures', 'Mobile development', 'Web systems', 'Artificial intelligence', 'Software projects'];

export default function Education() {
  return (
    <section id="education" className="education-section" aria-labelledby="education-title">
      <div className="education-container">
        <div className="section-title-block">
          <h2 id="education-title">Education</h2>
        </div>
        <article className="education-card" aria-labelledby="education-institution">
          <div className="education-identity">
            <span className="education-identity-kicker">Academic foundation</span>
            <span className="education-monogram" aria-hidden="true">CSE<span>;</span></span>
            <p className="education-identity-caption">Computer Science<br />&amp; Engineering</p>
            <div className="education-study-track" aria-label="Study period: 2022 to August 2026">
              <span>2022</span><span className="education-track-line" aria-hidden="true" /><span>Aug 2026</span>
            </div>
            <span className="education-identity-code" aria-hidden="true"><FaCode /> Learn. Build. Iterate.</span>
          </div>
          <div className="education-record">
          <div className="education-card-header">
            <span className="education-icon" aria-hidden="true"><FaGraduationCap /></span>
            <div className="education-meta">
              <p className="education-level">Bachelor of Science</p>
              <p className="education-dates"><time dateTime="2022">2022</time> &ndash; <time dateTime="2026-08">August 2026</time></p>
            </div>
          </div>
          <h3 id="education-institution">Patuakhali Science and Technology University</h3>
          <p className="education-campus"><FaUniversity aria-hidden="true" /> PSTU · Bangladesh</p>
          <p className="education-degree">Computer Science and Engineering (CSE)</p>
          <div className="education-focus">
            <h4>Focus areas</h4>
            <ul>{focusAreas.map((area) => <li key={area}>{area}</li>)}</ul>
          </div>
          </div>
        </article>
      </div>
    </section>
  );
}
