import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-vazirmatn)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        vazirmatn: ['var(--font-vazirmatn)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.625' }],
        lg: ['1.125rem', { lineHeight: '1.625' }],
        xl: ['1.25rem', { lineHeight: '1.625' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.375' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.25' }],
        '6xl': ['3.75rem', { lineHeight: '1.25' }],
      },
      lineHeight: {
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      colors: {
        primary: {
          50: '#e6f2f8',
          100: '#cce5f1',
          200: '#99cbe3',
          300: '#66b1d5',
          400: '#3397c7',
          500: '#0A3D62',
          600: '#08314f',
          700: '#06253c',
          800: '#041829',
          900: '#020c16',
        },
        secondary: {
          50: '#e6f4ff',
          100: '#cce9ff',
          200: '#99d3ff',
          300: '#66bdff',
          400: '#33a7ff',
          500: '#1E90FF',
          600: '#1873cc',
          700: '#125699',
          800: '#0c3a66',
          900: '#061d33',
        },
      },
    },
  },
  plugins: [],
}
export default config


