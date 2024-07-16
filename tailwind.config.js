/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter var", sans-serif'],
      },
      colors: {

        // body
        'body-bg-dark': '#0f172a',
        'body-bg-light': '#f2f3fa',

        // card
        'nav-card-bg-dark': '#173a55',
        'nav-card-text-dark': '#13b1f8',
        'nav-card-bg-light': '#d7f2fe',
        'nav-card-text-light': '#0f89ca',

        // text
        'main-text-h1-light': '#0f172a',
        'main-text-h1-dark': '#ffffff',
        
        // border
      },
    },
  },
  plugins: [],
}