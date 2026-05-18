/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'bitzup': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
        '400': '400ms',
      },
      fontSize: {
        'xs': ['12px', '1.5'],
        'sm': ['14px', '1.5'],
        'base': ['16px', '1.5'],
        'lg': ['18px', '1.5'],
        'xl': ['24px', '1.4'],
        '2xl': ['32px', '1.3'],
        '3xl': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        eyebrow: '0.04em',
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        border: 'var(--border)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        'brand-green': 'var(--brand-green)',
        'brand-green-d': 'var(--brand-green-d)',
        'brand-red': 'var(--brand-red)',
        'brand-amber': 'var(--brand-amber)',
        'brand-blue': 'var(--brand-blue)',
        'trading-up': 'var(--trading-up)',
        'trading-down': 'var(--trading-down)',
      },
      zIndex: {
        'base': '0',
        'dropdown': '100',
        'sticky': '200',
        'modal': '1000',
        'toast': '1100',
      },
    },
  },
  plugins: [],
}
