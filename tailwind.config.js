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
          50: '#f2f7f4',
          100: '#e1efe6',
          200: '#c5e0d1',
          300: '#9bc8b1',
          400: '#6ba88c',
          500: '#488c6f',
          600: '#346e55',
          700: '#2d5a47', // Deep Forest Green (Main)
          800: '#25483a',
          900: '#1e3c31',
          950: '#10221c',
        },
        accent: {
          50: '#fbf8eb',
          100: '#f5eece',
          200: '#ebdb9d',
          300: '#e0c364',
          400: '#d6aa37',
          500: '#c2922a', // Warm Gold
          600: '#a67220',
          700: '#85531e',
          800: '#6e431f',
          900: '#5e381d',
          950: '#361c0e',
        },
        cream: {
          DEFAULT: '#FDFBF7', // Luxury Background
          dark: '#F5F2EA'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}