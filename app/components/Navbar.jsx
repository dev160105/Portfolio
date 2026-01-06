'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '→ Home', href: '#home' },
    { label: '→ Projects', href: '#projects' },
    { label: '→ Tech Stack', href: '#techstack' },
    { label: '→ About', href: '#about' },
    { label: '→ Contact', href: '#contact' },
    { label: '📄 RESUME', href: '/Resume/Dev_Dalsania_Resume.pdf', isExternal: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-b-[#66c0f4] backdrop-blur-lg py-3" style={{
      backgroundColor: 'rgba(23, 26, 33, 0.3)',
      boxShadow: '0 4px 0px rgba(0, 0, 0, 0.2)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2.5">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="px-3 py-1.5 text-sm font-pixel border-t-2 border-t-[#66c0f4] border-x-0 border-b-0 transition-colors"
              style={{
                backgroundColor: item.isExternal ? 'rgba(164, 208, 7, 0.2)' : 'rgba(23, 26, 33, 0.5)',
                color: item.isExternal ? '#a4d007' : '#c7d5e0',
              }}
              whileHover={{
                backgroundColor: item.isExternal ? 'rgba(164, 208, 7, 0.4)' : 'rgba(102, 192, 244, 0.3)',
                color: item.isExternal ? '#a4d007' : '#66c0f4',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1.5 border-t-2 border-t-[#66c0f4] border-x-0 border-b-0"
          style={{
            backgroundColor: 'rgba(23, 26, 33, 0.5)',
            color: '#f3e691',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-base"
          >
            ☰
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden border-t-2 border-t-[#66c0f4] mt-2 pt-2"
          style={{ backgroundColor: 'rgba(23, 26, 33, 0.5)' }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pb-2 space-y-1.5 flex flex-col items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="text-center px-3 py-1.5 text-sm font-pixel border-t-2 border-x-0 border-b-0 transition-colors w-fit"
                style={{
                  backgroundColor: item.isExternal ? 'rgba(164, 208, 7, 0.2)' : 'rgba(23, 26, 33, 0.5)',
                  borderTopColor: item.isExternal ? '#a4d007' : '#66c0f4',
                  color: item.isExternal ? '#a4d007' : '#c7d5e0',
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
