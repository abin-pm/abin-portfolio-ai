import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#f7f6f3', alt: '#faf9f5' },
        surface: '#ffffff',
        ink: { DEFAULT: '#1c1c19', soft: '#33322c' },
        muted: '#6b6a63',
        subtle: '#9c9a8e',
        sage: {
          DEFAULT: '#6f7f63',
          dark: '#5a6951',
          light: '#e7ebe0',
          band: '#e9ede3',
          border: 'rgba(111,127,99,0.25)',
        },
        border: { DEFAULT: '#e5e2d9', strong: '#d3cfc2' },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-newsreader)', 'Georgia', 'ui-serif', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
        'ticker-slow': 'ticker 36s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
