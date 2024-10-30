/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'allura': ['Allura', 'cursive'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),

  ],
}
