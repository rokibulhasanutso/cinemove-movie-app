/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          dark: '#04152d',
          darken: '#041226',
          darker: '#020c1b',
          light: '#173d77',
          lighter: '#1c4b91',
          pink: '#da2f68',
          orange: '#f89e00',
        }
      }
    },
  },
  plugins: [],
}
