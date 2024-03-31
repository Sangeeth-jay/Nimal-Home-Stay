/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title': '#36384A',
        'common': '#5D6071',
      },
      fontFamily: {
        'istok': ['Istok Web', 'sans-serif'],
        'indie': ['Indie Flower', 'cursive'],
        'domine': ['Domine', 'serif'],
      }
    },
  },
  plugins: [],
}

