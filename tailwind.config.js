/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          brightColor: "#90EE90",
          backgroundColor: "#33B864"
      }
    },
  },
  plugins: [],
}

