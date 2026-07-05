import React, { useEffect, useState } from 'react';
import './DeveloperConsole.css';
import { FaCode, FaGithub, FaGraduationCap, FaMobileAlt, FaServer } from 'react-icons/fa';

const codeLines = [
  { number: '01', parts: [{ text: 'const', tone: 'keyword' }, { text: ' developer = {' }] },
  { number: '02', parts: [{ text: 'name', tone: 'property' }, { text: ': ' }, { text: "'Azrul Amaline'", tone: 'string' }, { text: ',' }] },
  { number: '03', parts: [{ text: 'role', tone: 'property' }, { text: ': ' }, { text: "'Flutter Developer'", tone: 'string' }, { text: ',' }] },
  {
    number: '04',
    parts: [
      { text: 'focus', tone: 'property' },
      { text: ': [' },
      { text: "'Flutter'", tone: 'array' },
      { text: ', ' },
      { text: "'Dart packages'", tone: 'array' },
      { text: ', ' },
      { text: "'AI tools'", tone: 'array' },
      { text: '],' }
    ]
  },
  { number: '05', parts: [{ text: 'backend', tone: 'property' }, { text: ': ' }, { text: "'Django + Python APIs'", tone: 'string' }, { text: ',' }] },
  { number: '06', parts: [{ text: 'frontend', tone: 'property' }, { text: ': ' }, { text: "'Flutter'", tone: 'string' }, { text: ',' }] },
  { number: '07', parts: [{ text: 'base', tone: 'property' }, { text: ': ' }, { text: "'PSTU CSE, Bangladesh'", tone: 'string' }, { text: ',' }] },
  { number: '08', parts: [{ text: 'mission', tone: 'property' }, { text: ': ' }, { text: "'Build useful mobile products with clear UX'", tone: 'string' }] },
  { number: '09', parts: [{ text: '};' }] }
];

const changingLines = [
  [
    { number: '10', parts: [{ text: 'console', tone: 'function' }, { text: '.log(' }, { text: 'return', tone: 'keyword' }, { text: ' craft(' }, { text: '"glassmorphic interfaces"', tone: 'string' }, { text: '));' }] },
    { number: '11', parts: [{ text: 'export default', tone: 'keyword' }, { text: ' buildExperience({ signature: ' }, { text: '"Azrul Amaline"', tone: 'string' }, { text: ' });' }] }
  ],
  [
    { number: '10', parts: [{ text: 'console', tone: 'function' }, { text: '.log(' }, { text: 'return', tone: 'keyword' }, { text: ' ship(' }, { text: '"Flutter mobile products"', tone: 'string' }, { text: '));' }] },
    { number: '11', parts: [{ text: 'export default', tone: 'keyword' }, { text: ' buildExperience({ stack: ' }, { text: '"Flutter + Python"', tone: 'string' }, { text: ' });' }] }
  ],
  [
    { number: '10', parts: [{ text: 'console', tone: 'function' }, { text: '.log(' }, { text: 'return', tone: 'keyword' }, { text: ' solve(' }, { text: '"AI and IoT workflows"', tone: 'string' }, { text: '));' }] },
    { number: '11', parts: [{ text: 'export default', tone: 'keyword' }, { text: ' buildExperience({ focus: ' }, { text: '"clear user flows"', tone: 'string' }, { text: ' });' }] }
  ]
];

const getLineTextLength = (line) => line.parts.reduce((length, part) => length + part.text.length, 0);

const getVisibleParts = (parts, visibleCharacters) => {
  let remainingCharacters = visibleCharacters;

  return parts.reduce((visibleParts, part) => {
    if (remainingCharacters <= 0) {
      return visibleParts;
    }

    const visibleText = part.text.slice(0, remainingCharacters);
    remainingCharacters -= visibleText.length;

    if (!visibleText) {
      return visibleParts;
    }

    visibleParts.push({ ...part, text: visibleText });
    return visibleParts;
  }, []);
};

const profilePoints = [
  { icon: <FaMobileAlt />, label: 'Flutter mobile developer' },
  { icon: <FaServer />, label: 'Django and Python backend APIs' },
  { icon: <FaCode />, label: 'Reusable Dart package thinking' },
  { icon: <FaGraduationCap />, label: 'PSTU CSE student' },
  { icon: <FaGithub />, label: 'Open-source project builder' }
];

const overviewStats = [
  { value: 'Flutter', label: 'Primary stack' },
  { value: '22+', label: 'Curated GitHub projects' },
  { value: 'AI + IoT', label: 'Active exploration' }
];

const overviewPills = [
  'Mobile app development',
  'Dart package thinking',
  'Django/Python APIs',
  'PSTU CSE',
  'Bangladesh-based',
  'AI experiments'
];

const DeveloperConsole = () => {
  const [activeLineSet, setActiveLineSet] = useState(0);
  const [typedCharacters, setTypedCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const animatedLines = changingLines[activeLineSet];
  const firstLineLength = getLineTextLength(animatedLines[0]);
  const totalCharacters = animatedLines.reduce((total, line) => total + getLineTextLength(line), 0);

  useEffect(() => {
    let delay = isDeleting ? 12 : 18;

    if (!isDeleting && typedCharacters === totalCharacters) {
      delay = 650;
    }

    if (isDeleting && typedCharacters === 0) {
      delay = 120;
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && typedCharacters < totalCharacters) {
        setTypedCharacters((current) => current + 1);
        return;
      }

      if (!isDeleting && typedCharacters === totalCharacters) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedCharacters > 0) {
        setTypedCharacters((current) => current - 1);
        return;
      }

      setIsDeleting(false);
      setActiveLineSet((current) => (current + 1) % changingLines.length);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [activeLineSet, isDeleting, totalCharacters, typedCharacters]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="about" className="developer-console-section" aria-labelledby="developer-console-title">
      <div className="developer-console-shell" onPointerMove={handlePointerMove} data-pointer-glow>
        <div className="developer-console-window">
          <div className="developer-window-bar">
            <div className="window-dots" aria-hidden="true">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="window-route">~/azrul.dev</span>
          </div>

          <div className="developer-console-body">
            <div className="code-editor" aria-label="Developer profile as code">
              <h2 className="sr-only">Developer profile as code</h2>
              {codeLines.map((line) => (
                <div className="code-line" key={line.number}>
                  <span className="line-number">{line.number}</span>
                  <code>
                    {line.parts.map((part, index) => (
                      <span className={part.tone ? `syntax-${part.tone}` : undefined} key={`${line.number}-${index}`}>
                        {part.text}
                      </span>
                    ))}
                  </code>
                </div>
              ))}
              <div className="changing-code-lines" aria-live="polite">
                {animatedLines.map((line, lineIndex) => {
                  const lineOffset = lineIndex === 0 ? 0 : firstLineLength;
                  const visibleCharacters = Math.max(0, Math.min(getLineTextLength(line), typedCharacters - lineOffset));
                  const isCursorLine = lineIndex === 0 ? typedCharacters <= firstLineLength : typedCharacters > firstLineLength;

                  return (
                    <div className={`code-line code-line-changing ${isCursorLine ? 'code-line-cursor' : ''}`} key={line.number}>
                      <span className="line-number">{line.number}</span>
                      <code>
                        {getVisibleParts(line.parts, visibleCharacters).map((part, index) => (
                          <span className={part.tone ? `syntax-${part.tone}` : undefined} key={`${line.number}-${index}`}>
                            {part.text}
                          </span>
                        ))}
                      </code>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="developer-console-divider" aria-hidden="true"></div>

            <div className="developer-profile-points" aria-label="Portfolio profile highlights">
              {profilePoints.map((point) => (
                <div className="developer-point" key={point.label}>
                  <span className="developer-point-icon">{point.icon}</span>
                  <span>{point.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="developer-overview-panel">
            <div className="developer-overview-copy">
              <h2 id="developer-console-title">Building mobile products with calm UX and practical engineering.</h2>
            </div>

            <div className="developer-overview-pills" aria-label="Profile keywords">
              {overviewPills.map((pill) => (
                <span key={pill}>{pill}</span>
              ))}
            </div>

            <div className="developer-overview-stats" aria-label="Portfolio overview stats">
              {overviewStats.map((stat) => (
                <div className="developer-overview-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperConsole;
