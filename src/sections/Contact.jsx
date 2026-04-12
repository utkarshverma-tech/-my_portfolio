import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data';

// ─── EmailJS Configuration ───────────────────────────────
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a service and get your SERVICE_ID
// 3. Create an email template and get your TEMPLATE_ID
// 4. Get your PUBLIC_KEY from Account → API Keys
// Replace the values below with your actual credentials:
const EMAILJS_SERVICE_ID = 'service_1fb23ia';
const EMAILJS_TEMPLATE_ID = 'template_l2epvhd';
const EMAILJS_PUBLIC_KEY = 'PzdM8z8pNxqbGg8FI';
// ─────────────────────────────────────────────────────────

const contactLinks = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    label: 'LinkedIn',
    value: 'utkarshverma89',
    href: personalInfo.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    label: 'GitHub',
    value: 'utkarshverma-tech',
    href: personalInfo.github,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'purple',
  },
];

const colorClass = {
  cyan: 'border-cyan-400/30 text-cyan-400 bg-cyan-400/5 hover:border-cyan-400/60 hover:bg-cyan-400/10',
  blue: 'border-blue-400/30 text-blue-400 bg-blue-400/5 hover:border-blue-400/60 hover:bg-blue-400/10',
  purple: 'border-purple-400/30 text-purple-400 bg-purple-400/5 hover:border-purple-400/60 hover:bg-purple-400/10',
};

const Contact = () => {
  const formRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <SectionWrapper id="contact" className="section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionTitle
          label="06 — contact"
          title="Get In Touch"
          subtitle="Open to new opportunities, collaborations, and interesting projects"
        />

        <div ref={ref} className="grid lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display font-bold text-white text-xl mb-3">
                Let's Build Something <span className="neon-text">Remarkable</span>
              </h3>
              <p className="font-body text-slate-400 text-lg leading-relaxed">
                Whether you have an exciting AI project in mind, a research collaboration idea, or just want to talk about machine learning — I'm always up for a conversation.
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group cursor-none ${colorClass[link.color]}`}
                >
                  <div className="shrink-0">{link.icon}</div>
                  <div>
                    <div className="font-mono text-xs tracking-widest opacity-60 mb-0.5">{link.label}</div>
                    <div className="font-body text-sm text-white/80 group-hover:text-white transition-colors">{link.value}</div>
                  </div>
                  <svg className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="glass-card p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              <div>
                <div className="font-mono text-xs text-green-400 tracking-wider">AVAILABLE NOW</div>
                <div className="font-body text-slate-400 text-sm mt-0.5">Open to full-time & freelance opportunities</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              {/* Form header */}
              <div className="flex items-center gap-3 pb-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-xs text-slate-500 tracking-wider">message.compose</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs text-slate-400 tracking-widest block mb-2">NAME *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="futuristic-input"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-slate-400 tracking-widest block mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="futuristic-input"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-slate-400 tracking-widest block mb-2">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Job Opportunity"
                  className="futuristic-input"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-slate-400 tracking-widest block mb-2">MESSAGE *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="futuristic-input resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-display font-semibold tracking-wider text-white transition-all duration-300 cursor-none ${
                  status === 'success'
                    ? 'bg-green-500/80 border border-green-400/50'
                    : status === 'error'
                    ? 'bg-red-500/80 border border-red-400/50'
                    : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]'
                } ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'idle' && (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </span>
                )}
                {status === 'sending' && (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Transmitting...
                  </span>
                )}
                {status === 'success' && (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent! ✓
                  </span>
                )}
                {status === 'error' && (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Failed — Try Direct Email
                  </span>
                )}
              </motion.button>

              <p className="font-mono text-xs text-slate-600 text-center">
                Or reach me directly at{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-cyan-400/70 hover:text-cyan-400 transition-colors cursor-none">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
