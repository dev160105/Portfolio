'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-4"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center relative max-w-4xl mx-auto"
      >
        {/* Hero Title - Floating 'DEV DALSANIA' */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="pixel-big text-5xl sm:text-6xl md:text-8xl font-bold mb-8 tracking-widest leading-tight"
          style={{
            color: '#f3e691',
            textShadow: '4px 4px 0px rgba(0, 0, 0, 0.9), 0 0 30px rgba(243, 230, 145, 0.3)',
            letterSpacing: '0.15em',
            wordSpacing: '0.3em'
          }}
        >
          DEV<br />DALSANIA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl font-bold mb-8 tracking-widest"
          style={{
            color: '#66c0f4',
            fontFamily: 'VT323, monospace',
            textShadow: '2px 2px 0px rgba(0, 0, 0, 0.8)',
          }}
        >
          Full Stack Developer • Montreal, QC
        </motion.p>

        {/* Description Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="steam-card p-6 border-t-4 border-t-[#66c0f4] border-x-0 border-b-0 max-w-2xl mx-auto mb-8 backdrop-blur-lg"
          style={{
            backgroundColor: 'rgba(23, 26, 33, 0.35)',
            backdropFilter: 'blur(16px)',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
          }}
        >
          <p className="text-base sm:text-lg text-[#c7d5e0] leading-relaxed font-sans">
            I build and deploy full stack applications with a strong focus on backend APIs, system design, and infrastructure. Most of my work runs in production using FastAPI, React, and AWS.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
        >
          <motion.a 
            href="#projects" 
            className="steam-card p-3 border-t-4 border-t-[#66c0f4] border-x-0 border-b-0 px-6 py-3 font-pixel text-sm tracking-widest backdrop-blur-lg cursor-pointer"
            style={{
              backgroundColor: 'rgba(23, 26, 33, 0.35)',
              color: '#f3e691',
              textShadow: '1px 1px 0px rgba(0, 0, 0, 0.8)',
              boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.4)',
              backgroundColor: 'rgba(102, 192, 244, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            → PROJECTS
          </motion.a>
          <motion.a 
            href="#contact" 
            className="steam-card p-3 border-t-4 border-t-[#66c0f4] border-x-0 border-b-0 px-6 py-3 font-pixel text-sm tracking-widest backdrop-blur-lg cursor-pointer"
            style={{
              backgroundColor: 'rgba(23, 26, 33, 0.35)',
              color: '#f3e691',
              textShadow: '1px 1px 0px rgba(0, 0, 0, 0.8)',
              boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.4)',
              backgroundColor: 'rgba(102, 192, 244, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            → CONTACT
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
