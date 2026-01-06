import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

export const metadata = {
  title: 'Dev Dalsania - Creative Engineer',
  description: 'Portfolio of Dev Dalsania, a Full Stack Developer and Creative Engineer based in Montreal. Building intuitive interfaces and scalable systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0f1419] text-[#c7d5e0]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
