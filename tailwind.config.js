/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#e3357a',      // Primary pink color used for buttons, logo, and highlights
        brandCream: '#faf5f2',     // Light cream background tone
        brandDark: '#3d251e',      // Warm dark brown/charcoal for text
      },
    },
  },
  plugins: [],
}