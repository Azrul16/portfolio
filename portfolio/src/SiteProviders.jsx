import React from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import { IconContext } from 'react-icons';

const iconOptions = { attr: { 'aria-hidden': true, focusable: false } };

export default function SiteProviders({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <IconContext.Provider value={iconOptions}>{children}</IconContext.Provider>
      </MotionConfig>
    </LazyMotion>
  );
}
