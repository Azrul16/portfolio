import React from 'react';
import Tilt from 'react-parallax-tilt';
import { useReducedMotion } from 'framer-motion';

const FancyTilt = ({ children, className = '', glare = false, scale = 1.01, tiltMaxAngleX = 6, tiltMaxAngleY = 6 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Tilt
      className={className}
      tiltEnable={!shouldReduceMotion}
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      scale={shouldReduceMotion ? 1 : scale}
      transitionSpeed={450}
      glareEnable={glare && !shouldReduceMotion}
      glareMaxOpacity={0.18}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="inherit"
    >
      {children}
    </Tilt>
  );
};

export default FancyTilt;
