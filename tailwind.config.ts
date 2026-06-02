import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#0A192F', // Required Royal Blue
          950: '#051020', // Required Darker shade
        },
        accent: {
          50: '#fffbea',
          100: '#fff4c4',
          200: '#ffe99e',
          300: '#ffe066', // Required
          400: '#ffdb4d', // Required
          500: '#FFD700', // Required Gold
          600: '#e6c200', // Required
          700: '#b39700',
          800: '#806c00',
          900: '#4d4100',
          950: '#262000',
        },
        royal: '#0A192F',
        gold: '#FFD700',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'marquee': 'marquee 60s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(255, 215, 0, 0)' },
        },
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(10, 25, 47, 0.15)',
        'gold': '0 10px 40px -10px rgba(255, 215, 0, 0.3)',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
      })
    })
  ],
};

export default config;
