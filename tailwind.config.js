/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(221, 100%, 96%)',
          100: 'hsl(221, 100%, 92%)',
          200: 'hsl(221, 100%, 85%)',
          300: 'hsl(221, 100%, 75%)',
          400: 'hsl(221, 100%, 65%)',
          500: 'hsl(221, 83%, 53%)',
          600: 'hsl(221, 90%, 48%)',
          700: 'hsl(221, 90%, 40%)',
          800: 'hsl(221, 90%, 30%)',
          900: 'hsl(221, 90%, 20%)',
          950: 'hsl(221, 90%, 10%)',
        },
        accent: {
          50: 'hsl(262, 100%, 96%)',
          100: 'hsl(262, 100%, 92%)',
          200: 'hsl(262, 100%, 85%)',
          300: 'hsl(262, 100%, 75%)',
          400: 'hsl(262, 100%, 65%)',
          500: 'hsl(262, 83%, 64%)',
          600: 'hsl(262, 83%, 58%)',
          700: 'hsl(262, 90%, 48%)',
          800: 'hsl(262, 90%, 35%)',
          900: 'hsl(262, 90%, 25%)',
          950: 'hsl(262, 90%, 15%)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};