/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003dff',
        secondary: '#464b51',
        third: '#3c76fa',
        light: '#89aee3',
      },

    },
  },
  plugins: [],
}