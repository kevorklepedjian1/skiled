/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#13183F',
        lightBlue: '#666CA3',
        gray: '#83869A',
        pink: '#F74780',
        lightPink: '#FFA7C3',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
