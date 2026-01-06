'use client';

import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="relative min-h-screen bg-[#0f1419] overflow-x-hidden">
      {/* Fixed sky background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Static base layer (1.png) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={`/screenshots/${theme.cloud}/1.png`}
            alt="sky-base" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated scrolling clouds (2.png) - Duplicated for seamless loop */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          key={`2-${theme.cloud}`}
        >
          <motion.div
            className="flex h-full"
            animate={{ x: [0, '-100%'] }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: '200%' }}
          >
            <img 
              src={`/screenshots/${theme.cloud}/2.png`}
              alt="clouds-scroll-1a" 
              className="w-full h-full object-cover flex-shrink-0"
            />
            <img 
              src={`/screenshots/${theme.cloud}/2.png`}
              alt="clouds-scroll-1b" 
              className="w-full h-full object-cover flex-shrink-0"
            />
          </motion.div>
        </motion.div>

        {/* Animated scrolling clouds (3.png) - Duplicated for seamless loop */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          key={`3-${theme.cloud}`}
        >
          <motion.div
            className="flex h-full"
            animate={{ x: [0, '-100%'] }}
            transition={{
              duration: 130,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: '200%' }}
          >
            <img 
              src={`/screenshots/${theme.cloud}/3.png`}
              alt="clouds-scroll-2a" 
              className="w-full h-full object-cover flex-shrink-0"
            />
            <img 
              src={`/screenshots/${theme.cloud}/3.png`}
              alt="clouds-scroll-2b" 
              className="w-full h-full object-cover flex-shrink-0"
            />
          </motion.div>
        </motion.div>

        {/* Animated scrolling clouds (4.png) - Duplicated for seamless loop */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          key={`4-${theme.cloud}`}
        >
          <motion.div
            className="flex h-full"
            animate={{ x: [0, '-100%'] }}
            transition={{
              duration: 160,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ width: '200%' }}
          >
            <img 
              src={`/screenshots/${theme.cloud}/4.png`}
              alt="clouds-scroll-3a" 
              className="w-full h-full object-cover flex-shrink-0"
            />
            <img 
              src={`/screenshots/${theme.cloud}/4.png`}
              alt="clouds-scroll-3b" 
              className="w-full h-full object-cover flex-shrink-0"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content layers */}
      <div className="relative z-10">
        {/* <FloatingDecorations /> */}
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
        <ThemeSwitcher />
      </div>
    </main>
  );
}
