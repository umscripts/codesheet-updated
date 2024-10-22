/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Secondary: "#e7ebee",
        txtSecondary: "#666666"
        // txtSecondary: "#3F3F3F"
      }
    },
  },
  plugins: [],
}