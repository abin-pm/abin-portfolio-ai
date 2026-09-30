import type { Config } from 'tailwindcss';

// A theme colour stored as RGB channels, so opacity modifiers like `bg-cream/95` keep working.
const c = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Values live in app/globals.css (:root and .dark) so the theme can switch.
      colors: {
        cream: { DEFAULT: c('cream'), alt: c('cream-alt') },
        surface: c('surface'),
        ink: { DEFAULT: c('ink'), soft: c('ink-soft') },
        muted: c('muted'),
        subtle: c('subtle'),
        sage: {
          DEFAULT: c('sage'),
          dark: c('sage-dark'),
          light: c('sage-light'),
          band: c('sage-band'),
          border: 'var(--sage-border)',
        },
        'on-sage': c('on-sage'),
        border: { DEFAULT: c('border'), strong: c('border-strong') },
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
