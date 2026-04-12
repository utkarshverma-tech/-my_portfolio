import { Suspense, lazy } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';

// Lazy-loaded sections for performance
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Education = lazy(() => import('./sections/Education'));
const Certificates = lazy(() => import('./sections/Certificates'));
const Contact = lazy(() => import('./sections/Contact'));

// Section loading fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="flex gap-2">
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

const App = () => (
  <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
    {/* Global effects */}
    <CustomCursor />
    <ScrollProgress />
    <div className="scan-line" />

    {/* Navigation */}
    <Navbar />

    {/* Main content */}
    <main>
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Education />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Certificates />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </main>

    <Footer />
  </div>
);

export default App;
