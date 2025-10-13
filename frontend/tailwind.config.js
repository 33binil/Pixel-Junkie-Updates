/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'font-dela',
    'font-alata',
    'font-big-shoulders',
    'font-alumni-sans',
    'font-afacad',
    'font-architects-daughter',
    'font-alegreya', // ✅ added
  ],
  theme: {
    extend: {
      fontFamily: {
        'dela': ['Dela Gothic One', 'sans-serif'],
        'alata': ['Alata', 'sans-serif'],
        'big-shoulders': ['Big Shoulders Display', 'sans-serif'],
        'alumni-sans': ['Alumni Sans', 'sans-serif'],
        'afacad': ['Afacad', 'sans-serif'],
        'architects-daughter': ['Architects Daughter', 'cursive'],
        'alegreya': ['Alegreya', 'serif'], // ✅ added
      },
    },
  },
  plugins: [],
}