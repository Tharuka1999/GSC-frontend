/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'catamaran': ['Catamaran', 'sans-serif'],
      'nokora': ['Nokora', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'merriweather': ['Merriweather Sans', 'sans-serif']
    }
  },
  plugins: [],
}

