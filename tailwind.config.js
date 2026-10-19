/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7b3e94',
          purpleDark: '#4e1e61',
          purpleLight: '#9b5db6',
          gold: '#f9a826',
          dark: '#0e0b12',
          darkCard: '#181422',
          darkBorder: '#282038',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        rock: ['Permanent Marker', 'cursive'],
      },
    },
  },
  plugins: [],
};
