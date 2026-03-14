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
        indigo: { DEFAULT: '#6366f1', light: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.12)', hover: 'rgba(99,102,241,0.35)' },
        cyan: { DEFAULT: '#22d3ee' },
        violet: { DEFAULT: '#a78bfa', light: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.15)' },
        neural: {
          bg: '#080810',
          surface: 'rgba(99,102,241,0.04)',
          border: 'rgba(99,102,241,0.12)',
          'border-hover': 'rgba(99,102,241,0.35)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'ai-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(167,139,250,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(167,139,250,0.5)' },
        },
        'draw-line': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
        'ticker-slow': 'ticker 36s linear infinite',
        gradient: 'gradient 6s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        'ai-pulse': 'ai-pulse 3s ease-in-out infinite',
        'draw-line': 'draw-line 1s ease-out forwards',
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
