import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data';

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'ML Models Trained', value: '30+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Open Source', value: 'Active' },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="01 — about"
          title="Who Am I"
          subtitle="Passionate about building AI that makes a difference"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Hexagonal avatar placeholder */}
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-cyan-400/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-dashed border-purple-400/20"
              />

              {/* Center hex */}
              <div className="absolute inset-8 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="text-center">
                    <div className="font-display text-4xl font-black neon-text">UV</div>
                    <div className="font-mono text-xs text-slate-400 mt-1 tracking-widest">AI/ML</div>
                  </div>
                </div>
              </div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-cyan-400"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                    x: [Math.cos((angle * Math.PI) / 180) * 120 - 4, Math.cos(((angle + 360) * Math.PI) / 180) * 120 - 4],
                    y: [Math.sin((angle * Math.PI) / 180) * 120 - 4, Math.sin(((angle + 360) * Math.PI) / 180) * 120 - 4],
                  }}
                  transition={{
                    duration: 10 + i,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 120}px - 4px)`,
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 120}px - 4px)`,
                    boxShadow: '0 0 6px #00f5ff',
                  }}
                />
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="glass-card p-4 text-center group hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="font-display text-2xl font-bold neon-text group-hover:scale-110 transition-transform duration-200">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-slate-500 mt-1 tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Code-style label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-400/10 border border-cyan-400/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-cyan-400 text-xs tracking-widest">PROFESSIONAL PROFILE</span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
              AI Engineer Focused on <span className="neon-text">Real-World Impact</span>
            </h3>

            {/* ATS-optimized professional bio */}
            <div className="space-y-4 font-body text-slate-300 text-lg leading-relaxed">
              <p>
                I am an AI/ML and Computer Vision Engineer with strong expertise in designing, developing, and deploying end-to-end intelligent systems. My work spans deep learning, neural network architectures, and real-world computer vision applications, with a focus on scalability and production readiness.
              </p>
              <p>
                I specialize in building vision-based systems using convolutional neural networks, transformer architectures, and multi-modal models. My project experience includes proctoring AI, assistive technology, and object detection pipelines that operate reliably in production environments.
              </p>
              <p>
                I am proficient in the modern AI/ML stack — PyTorch, TensorFlow, OpenCV, and HuggingFace — and comfortable working across the full ML lifecycle: from data collection and model training to optimization and cloud deployment. I thrive in environments where research meets engineering.
              </p>
            </div>

            {/* Quick tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Deep Learning', 'Computer Vision', 'PyTorch', 'Python', 'MLOps', 'FastAPI'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-purple-400/30 text-purple-300 font-mono text-xs tracking-wider hover:border-purple-400/60 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-2">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary py-3 px-6 text-sm cursor-none"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline py-3 px-6 text-sm cursor-none"
              >
                LinkedIn →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
