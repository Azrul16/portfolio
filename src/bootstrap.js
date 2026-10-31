import './index.css';
import './components/IntroLoader.css';
import './App.css';
import './components/Navbar.css';
import './components/Profile.css';
import './components/Footer.css';
import './components/CommandPalette.css';
import './components/Availability.css';
import './components/DeliveryWorkflow.css';
import './components/Collaboration.css';
import './components/Skills.css';
import './components/Projects.css';
import './components/Education.css';
import './components/Certificates.css';
import './components/Contact.css';

let started = false;
const start = () => {
  if (started) return;
  started = true;
  window.removeEventListener('pointerdown', start, true);
  window.removeEventListener('keydown', start, true);
  import('./main.jsx');
};

// Let the already-rendered HTML paint before attaching React's event handlers.
// An early interaction starts hydration immediately instead of waiting for a frame.
window.addEventListener('pointerdown', start, { capture: true, once: true });
window.addEventListener('keydown', start, { capture: true, once: true });
requestAnimationFrame(() => requestAnimationFrame(start));
