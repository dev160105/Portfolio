'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const contactMethods = [
    {
      label: 'EMAIL',
      value: 'devdalsania1601@gmail.com',
      href: 'mailto:devdalsania1601@gmail.com',
      icon: '✉'
    },
    {
      label: 'GITHUB',
      value: 'github.com/dev160105',
      href: 'https://github.com/dev160105',
      icon: '⚙'
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/dev-dalsania',
      href: 'https://www.linkedin.com/in/dev-dalsania-b681352b6/',
      icon: '🔗'
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
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="pixel-title text-2xl sm:text-3xl md:text-4xl text-center mb-12"
          style={{ color: '#f3e691', textShadow: '2px 2px 0px rgba(0, 0, 0, 0.9)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ▶ GET IN TOUCH ◀
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Main Message */}
          <motion.div
            variants={itemVariants}
            className="p-8 border-t-4 border-t-[#66c0f4] border-x-0 border-b-0 backdrop-blur-lg text-center"
            style={{
              backgroundColor: 'rgba(23, 26, 33, 0.35)',
              boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
            }}
          >
            <p className="text-base sm:text-lg text-[#c7d5e0] leading-relaxed font-sans mb-6">
              Have a project in mind? Want to collaborate? Just want to say hi? Feel free to reach out!
            </p>
            <p className="text-sm sm:text-base text-[#66c0f4] font-pixel" style={{ textShadow: '1px 1px 0px rgba(0, 0, 0, 0.8)' }}>
              I'm always open to new opportunities and interesting conversations.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : '_blank'}
                rel={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                variants={itemVariants}
                className="p-6 border-t-4 border-t-[#66c0f4] border-x-0 border-b-0 backdrop-blur-lg transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: 'rgba(23, 26, 33, 0.35)',
                  boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.4)',
                  backgroundColor: 'rgba(102, 192, 244, 0.15)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="text-3xl"
                    style={{ color: '#f3e691', textShadow: '2px 2px 0px rgba(0, 0, 0, 0.8)' }}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="pixel-subtitle text-sm sm:text-base font-bold mb-1 break-words"
                      style={{ color: '#f3e691' }}
                    >
                      {method.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#66c0f4] break-all hover:text-[#a4d007] transition-colors" style={{ textShadow: '1px 1px 0px rgba(0, 0, 0, 0.6)' }}>
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="p-8 border-t-4 border-t-[#a4d007] border-x-0 border-b-0 backdrop-blur-lg text-center transition-all duration-200"
            style={{
              boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
              backgroundColor: 'rgba(23, 26, 33, 0.35)',
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '6px 6px 0px rgba(0, 0, 0, 0.4)',
            }}
          >
            <p className="text-sm sm:text-base text-[#c7d5e0] font-sans mb-4">
              Whether it's a quick question or a full project proposal, I'm here to help!
            </p>
            <motion.a
              href="mailto:devdalsania1601@gmail.com?subject=Hey%20Dev%20Dalsania!&body=I%20wanted%20to%20reach%20out..."
              className="inline-block px-8 py-3 border-2 border-[#a4d007] text-[#a4d007] font-pixel text-sm font-bold transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: 'rgba(164, 208, 7, 0.1)',
                textShadow: '1px 1px 0px rgba(0, 0, 0, 0.8)',
              }}
              whileHover={{
                backgroundColor: '#a4d007',
                color: '#000',
                scale: 1.08,
                boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              ✉️ SEND EMAIL
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
