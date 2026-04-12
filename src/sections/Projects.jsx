import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data';

const ProjectCard = ({ project, idx }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: idx * 0.15 }}
      className="group relative glass-card p-6 md:p-8 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(0,245,255,0.08)] transition-all duration-400"
    >
      {/* Top bar accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          {/* Folder icon */}
          <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            </svg>
          </div>
          <div>
            <span className="font-mono text-xs text-cyan-400/70 tracking-widest">{project.category}</span>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'}`} />
              <span className="font-mono text-xs text-slate-500">{project.status}</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg glass-card hover:border-cyan-400/40 hover:text-cyan-400 text-slate-400 transition-all duration-200 cursor-none"
              title="View on GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg glass-card hover:border-purple-400/40 hover:text-purple-400 text-slate-400 transition-all duration-200 cursor-none"
              title="Live Demo"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-slate-400 text-base leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && (
        <div className="mb-5">
          <div className="grid grid-cols-2 gap-2">
            {project.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <svg className="w-3 h-3 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-mono text-xs text-slate-400">{h}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md font-mono text-xs text-purple-300 bg-purple-400/10 border border-purple-400/20 hover:border-purple-400/40 transition-colors duration-200"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <SectionWrapper id="projects" className="section-padding">
    <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

    <div className="max-w-6xl mx-auto relative">
      <SectionTitle
        label="03 — projects"
        title="Featured Projects"
        subtitle="End-to-end AI systems built for real-world deployment"
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </div>

      {/* View more */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/utkarshverma-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-flex items-center gap-2 cursor-none"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View All Projects on GitHub
        </a>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default Projects;
