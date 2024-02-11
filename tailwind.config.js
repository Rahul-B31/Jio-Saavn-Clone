/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
    extend: {

      colors: {
        'darkblue' : '#0F172A'
   },
    },

    
  },
  plugins: [],
}
