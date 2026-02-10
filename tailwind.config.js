/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'vanity-pink': '#FF69B4',
        'vanity-pink-light': '#FFB6D9',
        'vanity-pink-dark': '#C71585',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
