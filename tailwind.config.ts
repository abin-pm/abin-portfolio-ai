import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: '#1E1E1E',
          surface: '#252526',
          text: '#D4D4D4',
          blue: '#569CD6',
          green: '#6A9955',
          purple: '#C586C0'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(86, 156, 214, 0.2), 0 8px 30px rgba(0,0,0,0.25)'
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite'
      }
    }
  },
  plugins: []
};

export default config;
