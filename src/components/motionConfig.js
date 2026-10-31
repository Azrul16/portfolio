export const smoothEase = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.12
};

export const fadeUp = {
  hidden: {
    opacity: 1,
    y: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: smoothEase
    }
  }
};

export const fadeScale = {
  hidden: {
    opacity: 1,
    scale: 1
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: smoothEase
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.02
    }
  }
};

export const springHover = {
  type: 'spring',
  stiffness: 520,
  damping: 34,
  mass: 0.6
};
