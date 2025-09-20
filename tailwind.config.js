/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vogca: ['Vogca', 'sans-serif'],
        stint: ["Stint Ultra Expanded", "cursive"],
        insomatte: ["Insomatte"],
        mogilte: ["mogilte"],
        architect: ['"Architects Daughter"', 'cursive'],
        arbutus: ['"Arbutus"', 'serif'],
        pethra: ['Pethra'],
        abhaya: ['"Abhaya Libre"', 'serif'],
        lexend: ['"Lexend Giga"', 'sans-serif'],
        alegreya: ['"Alegreya SC"', 'serif'],
        afacad: ["Afacad", "sans-serif"],
      },
    },
  },
  plugins: [],
}