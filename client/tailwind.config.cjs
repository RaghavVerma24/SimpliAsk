/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary : '#243c5a', 
      secondary : {
        100: '#243c5a',
      }
    },
  },
  plugins: [],
}