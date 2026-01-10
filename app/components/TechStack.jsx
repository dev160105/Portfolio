'use client';

import { motion } from 'framer-motion';

const techStackCategories = [
  {
    category: 'Backend',
    technologies: ['FastAPI', 'Python'],
  },
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    technologies: ['PostgreSQL'],
  },
  {
    category: 'Infrastructure',
    technologies: ['AWS EC2', 'AWS S3', 'Docker'],
  },
  {
    category: 'Tools',
    technologies: ['Git', 'GitHub', 'VS Code'],
  },
];

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
          className="grid md:grid-cols-2 gap-6"
        >
          {techStackCategories.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 border-t-4 border-t-[#66c0f4] border-x-0 border-b-0 backdrop-blur-lg"
              style={{
                backgroundColor: 'rgba(23, 26, 33, 0.35)',
                boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
              }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: '#f3e691' }}>
                {group.category}
              </h3>
              <p className="text-sm text-[#c7d5e0] leading-relaxed">
                {group.technologies.join(', ')}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
