'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// Animation constants for consistency and easier tweaking
const BUTTON_ANIMATION_CONFIG = {
  container: { delay: 0.8, type: 'spring', stiffness: 120 },
  gear: { duration: 0.3 },
  menu: { type: 'spring', stiffness: 200, damping: 20 },
};

const STYLE_CONFIG = {
  buttonBackground: 'rgba(23, 26, 33, 0.5)',
  menuBackground: 'rgba(23, 26, 33, 0.4)',
  buttonHoverBackground: 'rgba(102, 192, 244, 0.3)',
  menuBoxShadow: '4px 4px 0px rgba(0, 0, 0, 0.3)',
  gear: '⚙',
};

/**
 * ThemeSwitcher Component
 * 
 * Provides a floating UI panel for users to switch between available themes.
 * Features a collapsible menu with theme preview buttons and smooth animations.
 */
export default function ThemeSwitcher() {
  // Get theme context values
  const { currentTheme, setCurrentTheme, themes } = useTheme();
  const currentThemeData = themes[currentTheme];
  
  // Manage menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggle theme menu visibility
   */
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handle theme selection and close menu
   */
  const handleThemeSelect = (themeId) => {
    setCurrentTheme(parseInt(themeId));
    setIsOpen(false);
  };

  return (
    // Container with spring animation on mount
    <motion.div
      className="fixed bottom-5 right-5 z-40"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={BUTTON_ANIMATION_CONFIG.container}
    >
      {/* Toggle Button - Gear Icon */}
      <motion.button
        onClick={handleToggleMenu}
        className="p-3 border-t-2 border-t-[#66c0f4] border-x-0 border-b-0 transition-colors"
        style={{
          backgroundColor: STYLE_CONFIG.buttonBackground,
          color: currentThemeData.primary,
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: STYLE_CONFIG.buttonHoverBackground,
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme menu"
        aria-expanded={isOpen}
      >
        {/* Rotating gear icon */}
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={BUTTON_ANIMATION_CONFIG.gear}
          className="text-xl"
        >
          {STYLE_CONFIG.gear}
        </motion.div>
      </motion.button>

      {/* Theme Selection Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 w-48 border-2 rounded-lg p-4 space-y-2 backdrop-blur-xl"
            style={{
              backgroundColor: STYLE_CONFIG.menuBackground,
              borderColor: `${currentThemeData.primary}60`,
              boxShadow: STYLE_CONFIG.menuBoxShadow,
            }}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={BUTTON_ANIMATION_CONFIG.menu}
            role="menu"
          >
            {/* Menu Header */}
            <p
              className="text-xs font-pixel text-center tracking-widest mb-3"
              style={{
                color: currentThemeData.primary,
                textShadow: `0 0 8px ${currentThemeData.primary}40`,
              }}
            >
              CHOOSE THEME
            </p>

            {/* Theme Options Grid */}
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(themes).map(([id, theme]) => {
                const isActive = currentTheme === parseInt(id);
                
                return (
                  <motion.button
                    key={id}
                    onClick={() => handleThemeSelect(id)}
                    className="relative p-2 border-2 rounded transition-all"
                    style={{
                      backgroundColor: isActive ? `${theme.primary}45` : `${theme.primary}20`,
                      borderColor: isActive ? `${theme.primary}` : `${theme.primary}50`,
                      color: theme.primary,
                      boxShadow: isActive ? `0 0 12px ${theme.primary}50` : 'none',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Select ${theme.name} theme`}
                    aria-current={isActive ? 'true' : 'false'}
                    role="menuitem"
                  >
                    <span className="text-xs font-pixel font-bold">{id}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Display Current Theme Name */}
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
