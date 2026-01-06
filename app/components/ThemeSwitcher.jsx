'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { currentTheme, setCurrentTheme, themes } = useTheme();
  const currentThemeData = themes[currentTheme];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
    >
      {/* Gear Icon Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 border-t-2 border-t-[#66c0f4] border-x-0 border-b-0 transition-colors"
        style={{
          backgroundColor: 'rgba(23, 26, 33, 0.5)',
          color: currentThemeData.primary,
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: 'rgba(102, 192, 244, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl"
        >
          ⚙
        </motion.div>
      </motion.button>

      {/* Pop-up Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 w-48 border-2 rounded-lg p-4 space-y-2 backdrop-blur-xl"
            style={{
              backgroundColor: 'rgba(23, 26, 33, 0.4)',
              borderColor: `${currentThemeData.primary}60`,
              boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
            }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Header */}
            <p
              className="text-xs font-pixel text-center tracking-widest mb-3"
              style={{
                color: currentThemeData.primary,
                textShadow: `0 0 8px ${currentThemeData.primary}40`,
              }}
            >
              CHOOSE THEME
            </p>

            {/* Grid */}
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(themes).map(([id, theme]) => {
                const isActive = currentTheme === parseInt(id);
                return (
                  <motion.button
                    key={id}
                    onClick={() => {
                      setCurrentTheme(parseInt(id));
                      setIsOpen(false);
                    }}
                    className="relative p-2 border-2 rounded transition-all"
                    style={{
                      backgroundColor: isActive ? `${theme.primary}45` : `${theme.primary}20`,
                      borderColor: isActive ? `${theme.primary}` : `${theme.primary}50`,
                      color: theme.primary,
                      boxShadow: isActive ? `0 0 12px ${theme.primary}50` : 'none',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xs font-pixel font-bold">{id}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Current Theme Name */}
            <p
              className="text-xs font-pixel text-center mt-3 pt-3 border-t-2"
              style={{
                color: currentThemeData.secondary,
                borderColor: `${currentThemeData.primary}40`,
              }}
            >
              {currentThemeData.name}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
