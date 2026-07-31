/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        base: '#0D1117',
        surface: '#161B22',
        surface2: '#1C232D',
        foreground: '#F4F6F8',
        muted: '#8B96A5',
        mint: '#00E5A8',
        blue: '#22C1FF',
        violet: '#8B7BFF',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        floatSlow: { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-10px) rotate(0.6deg)' } },
        pulseDot: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.35 } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.08)' },
          '66%': { transform: 'translate(-2%, 3%) scale(0.96)' },
        },
        twinkle: {
          '0%,100%': { opacity: 0.15, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(1.4)' },
        },
        gridPan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
      },
      animation: {
        'fade-up': 'fadeUp .7s ease-out both',
        float: 'floatY 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        drift: 'drift 16s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        'grid-pan': 'gridPan 6s linear infinite',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(0,229,168,0.35)',
        glowBlue: '0 0 60px -12px rgba(34,193,255,0.35)',
      },
    },
  },
  plugins: [],
}
