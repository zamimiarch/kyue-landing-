import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#0e0c10',
        surface: '#1a1720',
        'surface-2': '#231f2a',
        cream: '#f5f0eb',
        'cream-muted': '#b8b0a8',
        coral: '#e8856a',
        'coral-dark': '#c96b50',
        gold: '#c4a882',
        muted: '#6b6475',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.4,0,0.2,1) both',
        'count-up': 'countUp 1s ease-out both',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
