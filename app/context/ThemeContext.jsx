'use client';

import { createContext, useContext, useState } from 'react';

const themes = {
  1: {
    name: 'Clouds 1',
    cloud: 'Clouds%201',
    primary: '#f3e691',
    secondary: '#66c0f4',
    accent: '#a4d007',
    cardBg: 'rgba(23, 26, 33, 0.35)',
    navBg: 'rgba(27, 40, 56, 0.3)',
  },
  2: {
    name: 'Clouds 2',
    cloud: 'Clouds%202',
    primary: '#ff9f43',
    secondary: '#ee5a6f',
    accent: '#ffa502',
    cardBg: 'rgba(23, 26, 33, 0.35)',
    navBg: 'rgba(27, 40, 56, 0.3)',
  },
  3: {
    name: 'Clouds 3',
    cloud: 'Clouds%203',
    primary: '#1dd1a1',
    secondary: '#00b894',
    accent: '#55efc4',
    cardBg: 'rgba(23, 26, 33, 0.35)',
    navBg: 'rgba(27, 40, 56, 0.3)',
  },
  4: {
    name: 'Clouds 4',
    cloud: 'Clouds%204',
    primary: '#a29bfe',
    secondary: '#74b9ff',
    accent: '#dfe6e9',
    cardBg: 'rgba(23, 26, 33, 0.35)',
    navBg: 'rgba(27, 40, 56, 0.3)',
  },
  5: {
    name: 'Clouds 5',
    cloud: 'Clouds%205',
    primary: '#fd79a8',
    secondary: '#e84393',
    accent: '#fab1a0',
    cardBg: 'rgba(23, 26, 33, 0.35)',
    navBg: 'rgba(27, 40, 56, 0.3)',
  },
  6: {
    name: 'Clouds 6',
    cloud: 'Clouds%206',
    primary: '#fdcb6e',
    secondary: '#f39c12',
    accent: '#ffb347',
    cardBg: 'rgba(23, 26, 33, 0.35)',
    navBg: 'rgba(27, 40, 56, 0.3)',
  },
  7: {
    name: 'Clouds 7',
    cloud: 'Clouds%207',
    primary: '#6c5ce7',
    secondary: '#a29bfe',
    accent: '#74b9ff',
    cardBg: 'rgba(23, 26, 33, 0.35)',
    navBg: 'rgba(27, 40, 56, 0.3)',
  },
  8: {
    name: 'Clouds 8',
    cloud: 'Clouds%208',
    primary: '#00b894',
    secondary: '#0984e3',
    accent: '#6c5ce7',
    cardBg: 'rgba(23, 26, 33, 0.35)',
    navBg: 'rgba(27, 40, 56, 0.3)',
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(1);

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, theme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
