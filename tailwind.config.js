/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['VT323', 'monospace'],
        'pixel-big': ['Press Start 2P', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'retro-dark': '#0b0f1a',
        'retro-card': '#1c1c2b',
        'retro-border': '#7df9ff',
        'retro-accent': '#ff9f43',
        'steam-bg': '#1b2838',
        'steam-card': '#171a21',
        'steam-text': '#c7d5e0',
        'steam-accent': '#66c0f4',
        'steam-warm': '#f3e691',
      },
      boxShadow: {
        'retro': '8px 8px 0px rgba(0, 0, 0, 1)',
        'retro-sm': '4px 4px 0px rgba(0, 0, 0, 1)',
        'retro-lg': '12px 12px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}