'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Flâneur',
    description: 'Global travel discovery platform with AI-generated itineraries. Plan your next adventure with personalized recommendations.',
    tags: ['React', 'FastAPI', 'AWS', 'Python'],
    link: 'https://dmac1n1fgj3td.cloudfront.net/',
    images: ['/screenshots/flaneur-1.jpg', '/screenshots/flaneur-2.jpg', '/screenshots/flaneur-3.jpg'],
  },
  {
    title: 'MovieFinds',
    description: 'A fast, intuitive movie search engine. Discover films, explore ratings, and find your next watch.',
    tags: ['Next.js', 'Tailwind CSS', 'Python'],
    link: 'https://movie-finds.vercel.app/',
    images: ['/screenshots/MovieFind1.jpg', '/screenshots/MovieFind2.jpg', '/screenshots/MovieFind3.jpg', '/screenshots/MovieFind4.jpg', '/screenshots/MovieFind5.jpg'],
  },
];

export default function Projects() {
  const [imageIndices, setImageIndices] = useState({});

  const handlePrevImage = (projectIndex) => {
    const currentIndex = imageIndices[projectIndex] || 0;
    const maxIndex = projects[projectIndex].images.length - 1;
    setImageIndices({
      ...imageIndices,
      [projectIndex]: currentIndex === 0 ? maxIndex : currentIndex - 1,
    });
  };

  const handleNextImage = (projectIndex) => {
    const currentIndex = imageIndices[projectIndex] || 0;
    const maxIndex = projects[projectIndex].images.length - 1;
    setImageIndices({
      ...imageIndices,
      [projectIndex]: currentIndex === maxIndex ? 0 : currentIndex + 1,
    });
  };

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
    <section id="projects" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="pixel-title text-2xl sm:text-3xl md:text-4xl text-center mb-12"
          style={{ color: '#f3e691', textShadow: '2px 2px 0px rgba(0, 0, 0, 0.9)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ▶ FEATURED PROJECTS ◀
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 border-t-4 border-x-0 border-b-0 backdrop-blur-lg overflow-hidden transition-all duration-200 ease-out cursor-pointer"
              style={{
                backgroundColor: 'rgba(23, 26, 33, 0.25)',
                boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
                borderTopColor: '#66c0f4',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.5)',
              }}
            >
              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                whileHover={{
                  borderColor: '#66c0f4',
                }}
              >
                {/* Images Gallery - Carousel */}
                {project.images && project.images.length > 0 && (
                  <div className="w-full sm:w-2/5 flex-shrink-0">
                    <div className="relative">
                      {/* Image */}
                      <img
                        src={project.images[imageIndices[index] || 0]}
                        alt={`${project.title} ${(imageIndices[index] || 0) + 1}`}
                        className="w-full h-40 object-cover border-2 border-slate-600"
                      />

                      {/* Arrow Buttons */}
                      {project.images.length > 1 && (
                        <>
                          {/* Left Arrow */}
                          <button
                            onClick={() => handlePrevImage(index)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 border-2 border-[#f3e691] transition-all hover:bg-[#f3e691] hover:text-black"
                            style={{
                              backgroundColor: 'rgba(23, 26, 33, 0.9)',
                              color: '#f3e691',
                            }}
                          >
                            <span className="text-xl font-bold">◀</span>
                          </button>

                          {/* Right Arrow */}
                          <button
                            onClick={() => handleNextImage(index)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 border-2 border-[#f3e691] transition-all hover:bg-[#f3e691] hover:text-black"
                            style={{
                              backgroundColor: 'rgba(23, 26, 33, 0.9)',
                              color: '#f3e691',
                            }}
                          >
                            <span className="text-xl font-bold">▶</span>
                          </button>
                        </>
                      )}

                      {/* Image Counter */}
                      {project.images.length > 1 && (
                        <div
                          className="absolute bottom-2 right-2 px-2 py-1 text-xs font-pixel border border-[#f3e691]"
                          style={{
                            backgroundColor: 'rgba(23, 26, 33, 0.9)',
                            color: '#f3e691',
                          }}
                        >
                          {(imageIndices[index] || 0) + 1} / {project.images.length}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="pixel-subtitle text-lg sm:text-xl font-bold mb-2" style={{ color: '#f3e691' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#c7d5e0] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-3 py-1 border-2 border-[#66c0f4] font-pixel"
                          style={{
                            backgroundColor: 'rgba(23, 26, 33, 0.6)',
                            color: '#66c0f4',
                            boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit px-6 py-2 text-sm font-pixel border-2 border-[#a4d007] transition-all duration-200 cursor-pointer"
                    style={{
                      backgroundColor: '#a4d007',
                      color: '#000',
                      textShadow: '1px 1px 0px rgba(0, 0, 0, 0.2)',
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.4)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🎮 PLAY NOW
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
