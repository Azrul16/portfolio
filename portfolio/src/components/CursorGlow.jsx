import React, { useEffect, useRef, useState } from 'react';
import './CursorGlow.css';

const interactiveSelector = 'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])';

const CursorGlow = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const frameRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateEnabled = () => {
      const shouldEnable = finePointer.matches && !reducedMotion.matches;
      setEnabled(shouldEnable);
      document.body.classList.toggle('custom-cursor-enabled', shouldEnable);
    };

    updateEnabled();
    finePointer.addEventListener('change', updateEnabled);
    reducedMotion.addEventListener('change', updateEnabled);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      finePointer.removeEventListener('change', updateEnabled);
      reducedMotion.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const updateCursor = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.22;
      current.y += (target.y - current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }

      frameRef.current = window.requestAnimationFrame(updateCursor);
    };

    const handlePointerMove = (event) => {
      setHasMoved(true);
      targetRef.current = { x: event.clientX, y: event.clientY };
      if (!frameRef.current) {
        currentRef.current = { x: event.clientX, y: event.clientY };
        frameRef.current = window.requestAnimationFrame(updateCursor);
      }
    };

    const handlePointerOver = (event) => {
      setIsActive(Boolean(event.target.closest(interactiveSelector)));
    };

    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerover', handlePointerOver, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerover', handlePointerOver);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className={`cursor-glow ${hasMoved ? 'cursor-glow-visible' : ''} ${isActive ? 'cursor-glow-active' : ''} ${isPressed ? 'cursor-glow-pressed' : ''}`} aria-hidden="true">
      <span className="cursor-glow-ring" ref={ringRef}></span>
      <span className="cursor-glow-dot" ref={dotRef}></span>
    </div>
  );
};

export default CursorGlow;
