import { m as motion } from 'framer-motion';
import { FaCode, FaCheckDouble, FaDocker, FaRocket } from 'react-icons/fa';
import { fadeUp, viewportOnce } from './motionConfig';
import './DeliveryWorkflow.css';

const deliverySteps = [
  { title: 'Build', detail: 'Implement app and API workflows', icon: FaCode },
  { title: 'Check', detail: 'Run tests and automated CI checks', icon: FaCheckDouble },
  { title: 'Package', detail: 'Define services and configuration in Docker', icon: FaDocker },
  { title: 'Deploy', detail: 'Configure the server and verify the running app', icon: FaRocket },
];

export default function DeliveryWorkflow() {
  return (
    <section
      id="delivery"
      className="delivery-section"
      aria-labelledby="delivery-title"
    >
      <motion.div
        className="delivery-shell"
        initial={false}
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <div className="section-title-block">
          <h2 id="delivery-title">From Code to Production</h2>
        </div>
        <p className="delivery-intro">ResearchLens AI includes Docker Compose health checks and GitHub Actions for backend tests, frontend checks, and Docker smoke checks. <a href="https://github.com/Azrul16/researchlens-ai-rag-assistant" target="_blank" rel="noopener noreferrer">View the repository</a></p>
        <ol className="delivery-steps">
          {deliverySteps.map(({ title, detail, icon }, index) => {
            const Icon = icon;
            return (
              <li key={title} className="delivery-step">
                <span className="delivery-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="delivery-step-icon">
                  <Icon />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </motion.div>
    </section>
  );
}
