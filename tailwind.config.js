/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)', /* slate-800 */
        input: 'var(--color-input)', /* slate-800 */
        ring: 'var(--color-ring)', /* cyan-400 */
        background: 'var(--color-background)', /* slate-950 */
        foreground: 'var(--color-foreground)', /* white */
        primary: {
          DEFAULT: 'var(--color-primary)', /* slate-950 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* slate-900 */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-800 */
          foreground: 'var(--color-muted-foreground)', /* slate-400 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* cyan-400 */
          foreground: 'var(--color-accent-foreground)', /* slate-950 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* slate-900 */
          foreground: 'var(--color-popover-foreground)', /* white */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* slate-900 */
          foreground: 'var(--color-card-foreground)', /* white */
        },
        surface: {
          DEFAULT: 'var(--color-surface)', /* violet-500 */
          foreground: 'var(--color-surface-foreground)', /* white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-500 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)', /* slate-950 */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        cta: {
          DEFAULT: 'var(--color-cta)', /* gold-500 */
          foreground: 'var(--color-cta-foreground)', /* slate-950 */
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        headline: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        'unit': 'var(--spacing-unit)',
        '13': '13px',
        '21': '21px',
        '34': '34px',
        '55': '55px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}