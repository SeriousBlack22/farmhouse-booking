/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f8f6',
          100: '#e0e9e4',
          200: '#c1d4ca',
          300: '#9ab8aa',
          400: '#739c89',
          500: '#568271',
          600: '#3f6354',
          700: '#335043',
          800: '#2a3f36',
          900: '#24352e',
          950: '#111c17',
        },
        secondary: {
          50: '#fcf8f3',
          100: '#f8efe2',
          200: '#f0dcc0',
          300: '#e6c397',
          400: '#dba46a',
          500: '#d28a4a',
          600: '#c3723d',
          700: '#a25a34',
          800: '#834a31',
          900: '#6b3e2b',
          950: '#391e15',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
} 