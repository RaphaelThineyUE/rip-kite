/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#11141D',
        charcoal: '#36343A',
        slate: '#75797E',
        steel: '#929292',
        cloud: '#E3E5E5',
        'fujin-orange': '#CB5C24',
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
