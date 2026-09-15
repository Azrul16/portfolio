import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, m as motion } from 'framer-motion';
import { FaAward, FaEnvelope, FaGraduationCap, FaHome, FaLaptopCode, FaTools, FaUser } from 'react-icons/fa';
import './CommandPalette.css';

const commands = [
  { label: 'Home', id: 'home', icon: <FaHome /> },
  { label: 'Projects', id: 'projects', icon: <FaLaptopCode /> },
  { label: 'Skills', id: 'skills', icon: <FaTools /> },
  { label: 'About', id: 'about', icon: <FaUser /> },
  { label: 'Education', id: 'education', icon: <FaGraduationCap /> },
  { label: 'Certificates', id: 'certificates', icon: <FaAward /> },
  { label: 'Contact', id: 'contact', icon: <FaEnvelope /> },
];

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const paletteRef = useRef(null);

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return commands;
    }

    return commands.filter((command) => command.label.toLowerCase().includes(normalizedQuery));
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isPaletteShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';
      const isSlashShortcut = event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);

      if (isPaletteShortcut || isSlashShortcut) {
        if (!isOpen && document.querySelector('[aria-modal="true"]')) return;
        event.preventDefault();
        setIsOpen(true);
      }

      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      return undefined;
    }

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timeoutId = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(timeoutId);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const handleTab = (event) => {
    if (event.key !== 'Tab') return;
    const controls = paletteRef.current.querySelectorAll('button, input');
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const runCommand = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="command-palette-overlay" role="dialog" aria-modal="true" aria-labelledby="command-palette-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)}>
            <motion.div ref={paletteRef} onKeyDown={handleTab} className="command-palette" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: 0.98 }} transition={{ duration: 0.18 }} onClick={(event) => event.stopPropagation()}>
              <div className="command-palette-header">
                <h2 id="command-palette-title">Jump to</h2>
                <button type="button" className="command-close" onClick={() => setIsOpen(false)} aria-label="Close section search">Close</button>
              </div>
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search sections..." aria-label="Search portfolio sections" />
              <div className="command-list">
                {filteredCommands.length === 0 && <p role="status">No matching sections.</p>}
                {filteredCommands.map((command) => (
                  <button type="button" key={command.id} onClick={() => runCommand(command.id)}>
                    <span>{command.icon}</span>
                    {command.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
