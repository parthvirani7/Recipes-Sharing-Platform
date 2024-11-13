/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#f5efe6',
          100: '#e6dfd6',
          200: '#d6cfc6',
        }
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
};