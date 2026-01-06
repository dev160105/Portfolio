'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/dev160105' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dev-dalsania-b681352b6/' },
    { label: 'Email', href: 'mailto:devdalsania1601@gmail.com' },
  ];

  return (
    <footer className="py-12 px-4 border-t-4 border-t-[#66c0f4] backdrop-blur-xl" style={{ 
      backgroundColor: 'rgba(23, 26, 33, 0.35)',
      boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
    }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-sm text-slate-500 font-sans">
            © 2026 Dev Dalsania. Crafted in Montreal.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#66c0f4] hover:text-[#f3e691] font-pixel transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
