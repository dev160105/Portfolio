'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Next.js', icon: '▲' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'PostgreSQL', icon: '🗄️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Node.js', icon: '📦' },
  { name: 'Git', icon: '🔗' },
  { name: 'GraphQL', icon: '◆' },
];

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="techstack" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="pixel-title text-2xl sm:text-3xl md:text-4xl text-center mb-12"
          style={{ color: '#f3e691', textShadow: '2px 2px 0px rgba(0, 0, 0, 0.9)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ▶ INVENTORY ◀
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="aspect-square p-4 border-2 flex flex-col items-center justify-center gap-2 transition-all duration-200 ease-out cursor-pointer"
              style={{
                backgroundColor: 'rgba(61, 68, 80, 0.6)',
                backdropFilter: 'blur(4px)',
                borderColor: 'rgba(102, 192, 244, 0.4)',
                boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)',
              }}
              whileHover={{
                scale: 1.05,
                borderColor: '#66c0f4',
                boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className="text-3xl sm:text-4xl">{tech.icon}</div>
              <p className="text-xs text-center text-[#c7d5e0] font-pixel leading-tight">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
