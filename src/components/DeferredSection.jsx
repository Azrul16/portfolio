import { Suspense } from 'react';

const sections = new Map();

if (typeof window !== 'undefined') {
  const activate = (event) => {
    const section = event.target.closest?.('section[id]');
    sections.get(section?.id)?.reveal();
  };
  // Resolve before React's root capture listener so the first interaction can hydrate synchronously.
  for (const event of ['pointerdown', 'keydown', 'focusin']) {
    window.addEventListener(event, activate, { capture: true, passive: true });
  }
}

function VisibilityGate({ id, children }) {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    let state = sections.get(id);
    if (!state) {
      const element = document.getElementById(id);
      if (element) {
        state = { ready: false };
        state.promise = new Promise((resolve) => {
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) state.reveal();
            },
            { rootMargin: '200px 0px' }
          );
          state.reveal = () => {
            state.ready = true;
            observer.disconnect();
            resolve();
          };
          observer.observe(element);
        });
        sections.set(id, state);
      }
    }
    if (state && !state.ready) throw state.promise;
  }
  return children;
}

export default function DeferredSection({ id, children, active = false }) {
  return (
    <Suspense
      fallback={
        <section id={id} className="section-loading" aria-busy="true">
          Loading section…
        </section>
      }
    >
      {active ? children : <VisibilityGate id={id}>{children}</VisibilityGate>}
    </Suspense>
  );
}
