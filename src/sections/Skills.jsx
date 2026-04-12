import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { skillCategories } from '../data';

const colorMap = {
  cyan: {
    border: 'hover:border-cyan-400/50',
    glow: 'hover:shadow-[0_0_25px_rgba(0,245,255,0.15)]',
    tag: 'border-cyan-400/30 text-cyan-300 bg-cyan-400/5',
    icon: 'bg-cyan-400/10',
    dot: 'bg-cyan-400',
  },
  purple: {
    border: 'hover:border-purple-400/50',
    glow: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
    tag: 'border-purple-400/30 text-purple-300 bg-purple-400/5',
    icon: 'bg-purple-400/10',
    dot: 'bg-purple-400',
  },
  green: {
    border: 'hover:border-green-400/50',
    glow: 'hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]',
    tag: 'border-green-400/30 text-green-300 bg-green-400/5',
    icon: 'bg-green-400/10',
    dot: 'bg-green-400',
  },
  orange: {
    border: 'hover:border-orange-400/50',
    glow: 'hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]',
    tag: 'border-orange-400/30 text-orange-300 bg-orange-400/5',
    icon: 'bg-orange-400/10',
    dot: 'bg-orange-400',
  },
  blue: {
    border: 'hover:border-blue-400/50',
    glow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
    tag: 'border-blue-400/30 text-blue-300 bg-blue-400/5',
    icon: 'bg-blue-400/10',
    dot: 'bg-blue-400',
  },
  pink: {
    border: 'hover:border-pink-400/50',
    glow: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]',
    tag: 'border-pink-400/30 text-pink-300 bg-pink-400/5',
    icon: 'bg-pink-400/10',
    dot: 'bg-pink-400',
  },
};

const SkillCard = ({ category, idx }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const colors = colorMap[category.color] || colorMap.cyan;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      className={`glass-card p-6 transition-all duration-300 group ${colors.border} ${colors.glow} cursor-default`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${colors.icon}`}>
          {category.icon}
        </div>
        <div>
          <h3 className="font-display font-bold text-white text-sm tracking-wider">
            {category.category}
          </h3>
          <div className="flex items-center gap-1 mt-0.5">
            <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            <span className="font-mono text-xs text-slate-500">{category.skills.length} skills</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1.5 rounded-lg border font-mono text-xs tracking-wide transition-all duration-200 hover:scale-105 ${colors.tag}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => (
  <SectionWrapper id="skills" className="section-padding">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

    <div className="max-w-6xl mx-auto relative">
      <SectionTitle
        label="02 — expertise"
        title="Skills & Technologies"
        subtitle="A comprehensive toolkit for building production-grade AI systems"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, idx) => (
          <SkillCard key={cat.id} category={cat} idx={idx} />
        ))}
      </div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-400 tracking-widest">CONTINUOUSLY LEARNING & GROWING</span>
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default Skills;
