import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data';

const EducationCard = ({ item, idx }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: idx * 0.15 }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <div className="relative flex-shrink-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border-2 border-cyan-400/60 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.3)]"
          >
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </motion.div>
        </div>
        {/* Line */}
        {idx < education.length - 1 && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-cyan-400/40 to-transparent min-h-8" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-10">
        <div className="glass-card p-6 md:p-8 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,245,255,0.07)] transition-all duration-300 group">
          {/* Top row */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="font-display font-bold text-white text-xl group-hover:text-cyan-300 transition-colors duration-300">
                {item.degree}
              </h3>
              <p className="font-body text-cyan-400 text-lg mt-0.5">{item.field}</p>
            </div>
            <div className="text-right">
              <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-400/30 font-mono text-xs text-purple-300 tracking-wider">
                {item.year}
              </span>
            </div>
          </div>

          {/* Institution */}
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-body text-slate-300 text-base">
              {item.institution} — <span className="text-slate-500">{item.location}</span>
            </span>
          </div>

          {/* Grade */}
          {item.grade && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-400/30 mb-4">
              <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-mono text-xs text-green-300 tracking-wider">{item.grade}</span>
            </div>
          )}

          {/* Highlights */}
          {item.highlights && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.highlights.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1 rounded-md font-mono text-xs text-slate-400 bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors duration-200"
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => (
  <SectionWrapper id="education" className="section-padding">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
    <div className="max-w-4xl mx-auto relative">
      <SectionTitle
        label="04 — education"
        title="Academic Background"
        subtitle="Building a strong foundation for cutting-edge AI research and engineering"
      />

      <div className="mt-8">
        {education.map((item, idx) => (
          <EducationCard key={item.id} item={item} idx={idx} />
        ))}
      </div>


    </div>
  </SectionWrapper>
);

export default Education;
