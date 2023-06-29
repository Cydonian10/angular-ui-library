/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important:true,
  theme: {
    extend: {
      colors:{
        primary:colors.cyan,
        success:colors.green,
        danger:colors.red
      }
    },
  },
  plugins: [],
}