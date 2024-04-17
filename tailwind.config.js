/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mob': { 'raw': '(max-height: 767px)' },
      }
    },
  },
  plugins: [],
}

