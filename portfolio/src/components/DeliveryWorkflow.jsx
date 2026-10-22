import { m as motion } from 'framer-motion';
import {
  FaCode,
  FaCheckDouble,
  FaGithub,
  FaCodeBranch,
  FaDocker,
  FaLinux,
  FaRocket,
} from 'react-icons/fa';
import { SiNginx } from 'react-icons/si';
import { fadeUp, viewportOnce } from './motionConfig';
import './DeliveryWorkflow.css';

const deliverySteps = [
  { title: 'Develop', detail: 'Apps & APIs', icon: FaCode },
  { title: 'Test', detail: 'Check behavior', icon: FaCheckDouble },
  { title: 'Git / GitHub', detail: 'Track changes', icon: FaGithub },
  { title: 'CI/CD', detail: 'Automate checks', icon: FaCodeBranch },
  { title: 'Docker', detail: 'Package the app', icon: FaDocker },
  { title: 'Linux Server', detail: 'Configure & deploy', icon: FaLinux },
  { title: 'Nginx', detail: 'Route requests', icon: SiNginx },
  { title: 'Production', detail: 'Verify & maintain', icon: FaRocket },
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
        <p className="delivery-intro">
          How I approach application delivery: build the product, check it, and
          make deployment repeatable. The tools depend on what each project
          needs.
        </p>
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
