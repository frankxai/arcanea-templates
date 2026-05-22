/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          void: '#0b0e14',
          deep: '#121826',
          surface: '#1a2332',
          raised: '#242f42',
          elevated: '#2d3a52',
          overlay: '#364562',
          border: '#242f42',
          borderBright: '#364562',
        },
        brand: {
          atlanteanTeal: '#00bcd4',
          cosmicBlue: '#0d47a1',
          arcaneanGold: '#ffd700',
          aquamarine: '#7fffd4',
        },
        elements: {
          crystal: '#7fffd4',
          fire: '#ff6b35',
          water: '#78a6ff',
          wind: '#00ff88',
          void: '#9966ff',
        }
      },
      fontFamily: {
        display: ['var(--font-geist-sans)', 'Geist', 'system-ui', 'sans-serif'],
        body: ['var(--font-geist-sans)', 'Geist', 'system-ui', 'sans-serif'],
        editorial: ['var(--font-instrument-serif)', 'Instrument Serif', 'serif'],
        mono: ['var(--font-geist-mono)', 'Geist Mono', 'monospace'],
      },
      animation: {
        'shimmer-sweep': 'shimmer-sweep 2.5s infinite linear',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      keyframes: {
        'shimmer-sweep': {
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
