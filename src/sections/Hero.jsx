import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NeuralNetwork from '../components/NeuralNetwork';
import { personalInfo } from '../data';

// Typing effect hook
const useTyping = (phrases, speed = 80, pause = 2000) => {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx % phrases.length];
    let timer;
    if (!deleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
      } else {
        timer = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), speed / 2);
      } else {
        setDeleting(false);
        setIdx(i => i + 1);
      }
    }
    return () => clearTimeout(timer);
  }, [text, deleting, idx, phrases, speed, pause]);

  return text;
};

const Hero = () => {
  const typedText = useTyping(personalInfo.taglines);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Neural network background */}
      <NeuralNetwork />

      {/* Radial glow overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-20 left-6 w-16 h-16 border-l-2 border-t-2 border-cyan-400/30 pointer-events-none" />
      <div className="absolute top-20 right-6 w-16 h-16 border-r-2 border-t-2 border-cyan-400/30 pointer-events-none" />
      <div className="absolute bottom-20 left-6 w-16 h-16 border-l-2 border-b-2 border-purple-400/30 pointer-events-none" />
      <div className="absolute bottom-20 right-6 w-16 h-16 border-r-2 border-b-2 border-purple-400/30 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Name with glitch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <div className="relative inline-block">
            <h1
              className="glitch-text font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight"
              data-text={personalInfo.name}
            >
              <span className="text-white">{personalInfo.name.split(' ')[0]} </span>
              <span className="neon-text">{personalInfo.name.split(' ')[1]}</span>
            </h1>
          </div>
        </motion.div>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6 h-10"
        >
          <span className="font-mono text-slate-500 text-lg">&gt;_</span>
          <span className="font-mono text-cyan-400 text-lg sm:text-xl tracking-wider">
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-1 align-middle animate-[blink_0.7s_step-end_infinite]" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-body text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building intelligent systems that bridge the gap between research and real-world impact.
          Specializing in deep learning, computer vision, and scalable AI solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 text-base font-display tracking-wider cursor-none"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Hire Me
            </span>
          </motion.button>

          <motion.a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline px-8 py-4 text-base font-display tracking-wider cursor-none"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </span>
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            {
              label: 'GitHub',
              href: personalInfo.github,
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
            {
              label: 'LinkedIn',
              href: personalInfo.linkedin,
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              label: 'Email',
              href: `mailto:${personalInfo.email}`,
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="p-3 rounded-xl glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors duration-200 cursor-none"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-2 cursor-none group"
        >
          <span className="font-mono text-xs text-slate-500 tracking-widest group-hover:text-cyan-400 transition-colors">
            SCROLL DOWN
          </span>
          <div className="scroll-indicator flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-cyan-400/60" />
            <svg className="w-4 h-4 text-cyan-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
