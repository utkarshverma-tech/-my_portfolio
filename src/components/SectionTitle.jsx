import { motion } from 'framer-motion';

const SectionTitle = ({ label, title, subtitle }) => (
  <div className="mb-14 text-center">
    {label && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase mb-3"
      >
        // {label}
      </motion.p>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="section-title"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4 mb-4"
    />
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-slate-400 font-body text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionTitle;
