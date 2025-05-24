/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './Navigation.{js,jsx,ts,tsx}',
  ],
  plugins: [],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      animation: {},
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: '#eaffff',
          foreground: '#1a1a1a',
        },
        background: '#0d1c11',
        border: '#1a332a',
        card: {
          DEFAULT: '#102314',
          foreground: '#e4f3f4',
        },
        destructive: {
          DEFAULT: '#26a879',
          foreground: '#ffffff',
        },
        foreground: '#a9ffea',
        input: '#243f34',
        muted: {
          DEFAULT: '#1a1e19',
          foreground: '#b3b3c0',
        },
        popover: {
          DEFAULT: '#1c1e19',
          foreground: '#e4f3f4',
        },
        primary: {
          DEFAULT: '#62dfa0',
          foreground: '#ffffff',
        },
        ring: '#274b36',
        secondary: {
          DEFAULT: '#1cd7a2',
          foreground: '#ffffff',
        },
      },
      filter: {
        dropShadowDark: 'drop-shadow(0 1px 1px rgb(255 255 255 / 1))',
        dropShadowLight: 'drop-shadow(0 1px 1px rgb(0 0 0 / 1))',
      },
      fontFamily: {
        mono: ['SpaceMono'],
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
      },
    },
  },
};
