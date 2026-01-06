'use client';

import { motion } from 'framer-motion';

export default function About() {
  const infoBoxes = [
    { 
      title: 'EDUCATION',
      content: 'Concordia University\nBachelor of Computer Science\n(In Progress)'
    },
    { 
      title: 'TECH STACK',
      content: 'React, Next.js, FastAPI\nPostgreSQL, Python'
    },
    { 
      title: 'LOCATION',
      content: 'Montreal, Canada\nOpen to relocation'
    },
    { 
      title: 'INTERESTS',
      content: 'Systems Design\nCompetitive Gaming\nCooking and Sketching'
    },
  ];

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
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="pixel-title text-2xl sm:text-3xl md:text-4xl" style={{ color: '#f3e691', textShadow: '2px 2px 0px rgba(0, 0, 0, 0.9)' }}>
            ▶ ABOUT ◀
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Left: Bio Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 border-t-4 border-t-[#66c0f4] border-x-0 border-b-0 backdrop-blur-lg"
            style={{
              backgroundColor: 'rgba(23, 26, 33, 0.35)',
              boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
            }}
          >
            <p className="text-sm sm:text-base text-[#c7d5e0] mb-4 leading-relaxed">
              I like building things end to end and understanding what is happening at each layer. I enjoy thinking through backend logic, data models, and how different parts of a system interact once users start using it.
            </p>
            <p className="text-sm sm:text-base text-[#c7d5e0] mb-4 leading-relaxed">
              I've built Flâneur, a travel discovery platform, and MovieFinds, a full-stack web app for discovering and organizing movies. Through these projects, I've worked on API design, database structure, and frontend integration without overcomplicating things.
            </p>
            <p className="text-sm sm:text-base text-[#c7d5e0] leading-relaxed">
              I care a lot about code quality. I try to keep things simple, readable, and easy to reason about. If something feels unnecessarily complex, I usually step back and rethink it. Outside of coding, I like cooking and trying new recipes, sketching ideas, playing Valorant, and slowly improving at chess.
            </p>
          </motion.div>

          {/* Right: Info Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {infoBoxes.map((box, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 border-t-4 border-t-[#66c0f4] border-x-0 border-b-0 backdrop-blur-lg"
                style={{
                  backgroundColor: 'rgba(27, 40, 56, 0.25)',
                  boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
                }}
              >
                <h4 className="text-xs sm:text-sm font-pixel font-bold mb-3" style={{ color: '#f3e691' }}>
                  {box.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#c7d5e0] whitespace-pre-wrap leading-relaxed">
                  {box.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
