const getCelebrationOrigin = (event) => {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 1;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;
  const sourceEvent = event?.nativeEvent || event;

  if (typeof sourceEvent?.clientX === 'number' && typeof sourceEvent?.clientY === 'number') {
    return {
      x: sourceEvent.clientX / viewportWidth,
      y: sourceEvent.clientY / viewportHeight
    };
  }

  const target = event?.currentTarget || sourceEvent?.submitter;
  const rect = target?.getBoundingClientRect?.();

  if (rect) {
    return {
      x: (rect.left + rect.width / 2) / viewportWidth,
      y: (rect.top + rect.height / 2) / viewportHeight
    };
  }

  return { x: 0.5, y: 0.72 };
};

export const celebrateAction = async (event) => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const origin = getCelebrationOrigin(event);
  const { default: confetti } = await import('canvas-confetti');

  confetti({
    particleCount: 34,
    spread: 54,
    startVelocity: 28,
    scalar: 0.72,
    ticks: 90,
    origin,
    colors: ['#c4a8ff', '#7dd3fc', '#f9a8d4', '#ffffff']
  });
};
