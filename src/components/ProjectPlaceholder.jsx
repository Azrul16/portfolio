import './ProjectPlaceholder.css';

const previews = {
  'Lecturer App': ['study', '#b89aff', 'Study workspace', 'Notes into knowledge'],
  'Smart Home Mobile App': ['home', '#79dfb7', 'Living room', 'Your home, connected'],
  BanglaSpeech2Text: ['audio', '#82ccff', 'Bangla transcription', 'Voice into words'],
  'Notisaver Flutter App': ['notifications', '#ffa985', 'Notification inbox', 'Keep what matters'],
  AnySQL: ['database', '#9ea8ff', 'Data workspace', 'Query. Build. Repeat.'],
  'Form Flutter': ['form', '#de9cfa', 'Form builder', 'Better inputs, together'],
  'Form Validator': ['form', '#7cddc4', 'Validation rules', 'Every field, checked'],
  'Animated Status Card': ['status', '#ffca7e', 'Status components', 'Small moments of delight'],
  'OneSignal Push Notification': ['notifications', '#ff91b0', 'Push notifications', 'A timely connection'],
  'Researcher Web Browser': ['browser', '#8dc5ff', 'Research browser', 'Follow your curiosity'],
  QuizzApp: ['quiz', '#c3a0ff', 'Practice session', 'One question closer'],
  'Hospital Management': ['health', '#78dcd4', 'Care dashboard', 'A clearer view of care'],
  'YouTube Video Downloader': ['media', '#ff9caa', 'Media library', 'Ready when you are'],
  'File Sharing Server': ['server', '#94c7ff', 'File sharing', 'Files on the move'],
  'HTTP Proxy Server': ['server', '#82dfbe', 'Network proxy', 'Connecting the dots'],
  'SSLCOMMERZ Payment Integration': ['payment', '#b5a1ff', 'Checkout workflow', 'From cart to confirmation'],
  'Online Food Website': ['food', '#ffb080', 'Fresh on the menu', 'Something delicious awaits'],
  'Object Detection App': ['vision', '#9edb8a', 'Vision workspace', 'A new way to see'],
};

const Lines = ({ x = 0, y = 0, width = 100, count = 3 }) => (
  <g fill="currentColor" opacity=".22">
    {Array.from({ length: count }, (_, i) => <rect key={i} x={x} y={y + i * 14} width={width - (i % 2) * 28} height="5" rx="2.5" />)}
  </g>
);

const PreviewContent = ({ kind, accent }) => {
  if (kind === 'audio') return <>
    <text x="34" y="86" className="placeholder-eyebrow">AUDIO / TEXT</text>
    <g fill={accent}>{[22, 38, 62, 32, 80, 48, 96, 57, 76, 35, 60, 28, 44, 20].map((h, i) => <rect key={i} x={35 + i * 18} y={153 - h / 2} width="8" height={h} rx="4" />)}</g>
    <rect x="28" y="218" width="294" height="62" rx="12" fill="#ffffff0b" />
    <text x="43" y="245" fill="#e8e6ff" fontSize="18" lang="bn">বাংলা ভাষার কথা</text>
    <Lines x={43} y={260} width={190} count={1} />
  </>;
  if (kind === 'server' || kind === 'database') return <>
    <text x="30" y="84" className="placeholder-eyebrow">{kind === 'database' ? 'QUERY WORKSPACE' : 'CONNECTION OVERVIEW'}</text>
    {[0, 1, 2].map(i => <g key={i} transform={`translate(30 ${108 + i * 55})`}>
      <rect width="288" height="43" rx="9" fill="#ffffff09" stroke="#ffffff16" />
      <circle cx="20" cy="21" r="4" fill={accent} /><Lines x={36} y={15} width={145} count={2} />
      <path d="M246 17h7m-7 8h18" stroke={accent} strokeWidth="3" strokeLinecap="round" />
    </g>)}
    <text x="32" y="301" fill={accent} fontSize="11" fontFamily="monospace">{kind === 'database' ? 'SELECT * FROM possibilities;' : 'client  →  server  →  response'}</text>
  </>;
  if (kind === 'form' || kind === 'quiz') return <>
    <text x="30" y="84" className="placeholder-eyebrow">{kind === 'quiz' ? 'QUESTION 01 / 10' : 'YOUR NEXT GREAT FORM'}</text>
    {[0, 1, 2].map(i => <g key={i} transform={`translate(30 ${105 + i * 57})`}>
      <rect width="288" height="43" rx="10" fill={i === 1 ? `${accent}22` : '#ffffff08'} stroke={i === 1 ? accent : '#ffffff20'} />
      <Lines x={16} y={19} width={158 - i * 14} count={1} />
      <path d="m258 21 4 4 7-9" fill="none" stroke={accent} strokeWidth="2" />
    </g>)}
    <rect x="30" y="283" width="120" height="27" rx="8" fill={accent} /><text x="47" y="301" fill="#17202e" fontSize="11" fontWeight="700">{kind === 'quiz' ? 'Next question →' : 'Continue →'}</text>
  </>;
  if (kind === 'notifications' || kind === 'study') return <>
    <text x="30" y="84" className="placeholder-eyebrow">{kind === 'study' ? 'YOUR STUDY SPACE' : 'SAVED FOR LATER'}</text>
    {[0, 1, 2].map(i => <g key={i} transform={`translate(${30 + i * 4} ${105 + i * 64})`}>
      <rect width={288 - i * 8} height="52" rx="12" fill={i === 0 ? `${accent}20` : '#ffffff09'} stroke="#ffffff14" />
      <rect x="12" y="12" width="28" height="28" rx="8" fill={`${accent}33`} />
      <path d="M20 20h12m-12 6h8m-8 6h10" stroke={accent} strokeWidth="2" />
      <Lines x={53} y={17} width={167 - i * 16} count={2} />
      <circle cx="260" cy="18" r="3" fill={accent} />
    </g>)}
  </>;
  if (kind === 'payment' || kind === 'status') return <>
    <circle cx="174" cy="137" r="53" fill={`${accent}12`} stroke={`${accent}44`} /><circle cx="174" cy="137" r="35" fill={`${accent}25`} />
    <path d="m155 136 13 13 25-28" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="174" y="220" fill="#f4edff" textAnchor="middle" fontSize="20" fontWeight="700">{kind === 'payment' ? 'Payment flow' : 'Looking good'}</text>
    <Lines x={93} y={238} width={162} count={2} />
    <rect x="98" y="280" width="152" height="26" rx="8" fill={`${accent}33`} />
  </>;
  if (kind === 'vision' || kind === 'media' || kind === 'food') return <>
    <rect x="27" y="72" width="294" height="168" rx="12" fill={`${accent}16`} />
    <circle cx="250" cy="109" r="21" fill={`${accent}44`} />
    {kind === 'food' ? <g><ellipse cx="174" cy="165" rx="76" ry="43" fill="#f9e6c6" /><ellipse cx="174" cy="158" rx="62" ry="34" fill="#db965b" /><path d="M130 148q35-35 90 4m-94 11q50-20 100 3" stroke="#94b76d" strokeWidth="12" fill="none" strokeLinecap="round" /></g> : <path d="m28 224 84-89 61 54 45-38 102 73" fill={`${accent}44`} />}
    {kind === 'media' && <g><circle cx="174" cy="154" r="30" fill="#151425bb" /><path d="m166 139 23 15-23 15z" fill={accent} /></g>}
    {kind === 'vision' && <g fill="none" stroke={accent} strokeWidth="2"><rect x="78" y="111" width="136" height="109" rx="6" strokeDasharray="9 4" /><path d="M78 127v-16h16m104 0h16v16m0 77v16h-16M94 220H78v-16" strokeWidth="4" /></g>}
    <Lines x={30} y={263} width={230} count={3} />
  </>;
  return <>
    <text x="30" y="84" className="placeholder-eyebrow">{kind === 'home' ? 'HOME AT A GLANCE' : kind === 'health' ? 'CARE OVERVIEW' : 'EXPLORE SOMETHING NEW'}</text>
    <rect x="30" y="104" width="288" height="39" rx="10" fill="#ffffff09" stroke="#ffffff16" /><Lines x={45} y={121} width={191} count={1} />
    {[0, 1, 2, 3].map(i => <g key={i} transform={`translate(${30 + i % 2 * 149} ${161 + Math.floor(i / 2) * 74})`}>
      <rect width="139" height="63" rx="11" fill={i === 0 ? `${accent}25` : '#ffffff08'} stroke="#ffffff12" />
      {kind === 'health' ? <path d="M16 26h16m-8-8v16" stroke={accent} strokeWidth="3" /> : <circle cx="23" cy="25" r="9" fill={`${accent}77`} />}
      <Lines x={43} y={21} width={78} count={2} />
    </g>)}
  </>;
};

export default function ProjectPlaceholder({ project }) {
  const [kind, accent, title, tagline] = previews[project.title] || ['browser', '#b89aff', project.category, project.highlights?.[0] || 'Built to explore'];
  const phone = ['study', 'home', 'notifications', 'quiz', 'health', 'vision'].includes(kind);
  return (
    <figure className={`project-placeholder ${phone ? 'placeholder-mobile' : ''}`} style={{ '--preview-accent': accent }}>
      <div className="placeholder-art" aria-hidden="true">
        <div className="placeholder-orbit" />
        <svg className="placeholder-window" viewBox="0 0 348 336" fill="none">
          <rect x="1" y="1" width="346" height="334" rx="18" fill="#141723" stroke="#ffffff35" />
          <path d="M1 45h346" stroke="#ffffff16" />
          <g fill={accent}><circle cx="20" cy="23" r="3" /><circle cx="31" cy="23" r="3" opacity=".6" /><circle cx="42" cy="23" r="3" opacity=".3" /></g>
          <text x="62" y="27" fill="#dfdfed" fontSize="10" fontFamily="system-ui, sans-serif">{title}</text>
          <g color="#c2c6de" fontFamily="system-ui, sans-serif"><PreviewContent kind={kind} accent={accent} /></g>
        </svg>
        <span className="placeholder-floating-tag">{project.highlights?.[0] || project.category}</span>
      </div>
      <figcaption><span>{tagline}</span><small>Concept preview</small></figcaption>
    </figure>
  );
}
