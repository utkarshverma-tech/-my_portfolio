import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#030712]/90 backdrop-blur-lg border-b border-cyan-400/10 shadow-[0_4px_30px_rgba(0,245,255,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-3 group cursor-none"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-9 h-9">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" fill="none" stroke="#00f5ff" strokeWidth="1.5"
                    className="group-hover:stroke-purple-400 transition-colors duration-300" />
                  <circle cx="18" cy="18" r="4" fill="#00f5ff"
                    className="group-hover:fill-purple-400 transition-colors duration-300" />
                  <line x1="18" y1="2" x2="18" y2="14" stroke="#00f5ff" strokeWidth="1" opacity="0.6" />
                  <line x1="18" y1="22" x2="18" y2="34" stroke="#00f5ff" strokeWidth="1" opacity="0.6" />
                  <line x1="2" y1="10" x2="14" y2="16" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
                  <line x1="22" y1="20" x2="34" y2="26" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
                  <line x1="34" y1="10" x2="22" y2="16" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
                  <line x1="14" y1="20" x2="2" y2="26" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
                </svg>
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md group-hover:bg-purple-400/20 transition-colors duration-300" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-sm tracking-wider">UV</span>
                <span className="font-mono text-cyan-400 text-xs tracking-widest opacity-80">AI/ML</span>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-2 font-mono text-sm tracking-widest transition-all duration-300 cursor-none group ${
                      isActive ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-cyan-400/10 rounded-md border border-cyan-400/30"
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
              <motion.a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 btn-primary text-sm py-2 px-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-none"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block w-6 h-0.5 bg-cyan-400 origin-center transition-all"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block w-6 h-0.5 bg-cyan-400"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block w-6 h-0.5 bg-cyan-400 origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#030712]/95 backdrop-blur-xl border-b border-cyan-400/10 lg:hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left py-3 px-4 font-mono text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/5 rounded-lg transition-all duration-200 tracking-widest cursor-none"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 btn-primary text-center text-sm"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
