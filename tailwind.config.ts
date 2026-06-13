import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blackstone: {
          DEFAULT: '#0A0A0A',
          surface: '#121212',
          panel: '#1A1A1A',
          border: '#2A2A2A',
        },
        gold: '#D4AF37',
        charcoal: '#1A1A1A',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(212,175,55,0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(255,255,255,0.06), transparent 22%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
