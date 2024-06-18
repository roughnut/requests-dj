/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*/*.css}"],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    container: {
      center: true,
    extend: {},
  },
},
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'p': { fontSize: theme('fontSize.2xl') },
  })})]
}}