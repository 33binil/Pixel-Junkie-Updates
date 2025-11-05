/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Font families
    'font-dela',
    'font-alata',
    'font-big-shoulders',
    'font-alumni-sans',
    'font-afacad',
    'font-architects-daughter',
    'font-alegreya',
    
    // Text sizes
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl',
    'md:text-xs', 'md:text-sm', 'md:text-base', 'md:text-lg', 'md:text-xl', 'md:text-2xl', 'md:text-3xl', 'md:text-4xl', 'md:text-5xl', 'md:text-6xl', 'md:text-7xl', 'md:text-8xl', 'md:text-9xl',
    'lg:text-xs', 'lg:text-sm', 'lg:text-base', 'lg:text-lg', 'lg:text-xl', 'lg:text-2xl', 'lg:text-3xl', 'lg:text-4xl', 'lg:text-5xl', 'lg:text-6xl', 'lg:text-7xl', 'lg:text-8xl', 'lg:text-9xl',
    
    // Custom text sizes
    'text-[10px]', 'text-[12px]', 'text-[14px]', 'text-[16px]', 'text-[18px]', 'text-[20px]', 'text-[24px]', 'text-[28px]', 'text-[32px]', 'text-[36px]', 'text-[40px]', 'text-[48px]', 'text-[56px]', 'text-[64px]', 'text-[72px]', 'text-[80px]', 'text-[90px]', 'text-[100px]', 'text-[120px]', 'text-[140px]', 'text-[160px]', 'text-[180px]', 'text-[200px]', 'text-[220px]', 'text-[240px]', 'text-[260px]', 'text-[280px]', 'text-[300px]',
    'md:text-[10px]', 'md:text-[12px]', 'md:text-[14px]', 'md:text-[16px]', 'md:text-[18px]', 'md:text-[20px]', 'md:text-[24px]', 'md:text-[28px]', 'md:text-[32px]', 'md:text-[36px]', 'md:text-[40px]', 'md:text-[48px]', 'md:text-[56px]', 'md:text-[64px]', 'md:text-[72px]', 'md:text-[80px]', 'md:text-[90px]', 'md:text-[100px]', 'md:text-[120px]', 'md:text-[140px]', 'md:text-[160px]', 'md:text-[180px]', 'md:text-[200px]', 'md:text-[220px]', 'md:text-[240px]', 'md:text-[260px]', 'md:text-[280px]', 'md:text-[300px]',
    'lg:text-[10px]', 'lg:text-[12px]', 'lg:text-[14px]', 'lg:text-[16px]', 'lg:text-[18px]', 'lg:text-[20px]', 'lg:text-[24px]', 'lg:text-[28px]', 'lg:text-[32px]', 'lg:text-[36px]', 'lg:text-[40px]', 'lg:text-[48px]', 'lg:text-[56px]', 'lg:text-[64px]', 'lg:text-[72px]', 'lg:text-[80px]', 'lg:text-[90px]', 'lg:text-[100px]', 'lg:text-[120px]', 'lg:text-[140px]', 'lg:text-[160px]', 'lg:text-[180px]', 'lg:text-[200px]', 'lg:text-[220px]', 'lg:text-[240px]', 'lg:text-[260px]', 'lg:text-[280px]', 'lg:text-[300px]',
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
        'alegreya': ['Alegreya', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontSize: true,
  },
  important: true,
}