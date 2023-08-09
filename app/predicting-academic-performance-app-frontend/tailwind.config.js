/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        custom: '#003f72',
        container: '#f4f4fa',
        search: '#e8ebf1',
        approved: '#6d9984',
        failed: '#ee5d50',
        legend: '#e7e7f3',
        hover: {
          custom: '#0269bd',
        },
      },
    },
  },
  plugins: [],
}
