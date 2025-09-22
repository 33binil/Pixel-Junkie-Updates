/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'scroll': 'scroll 30s linear infinite'
      },
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