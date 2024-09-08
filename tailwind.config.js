/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'ASpaceBlack', 'sans-serif'],
      },
      // Add custom font if you have specific names for the fonts
      fontFamily: {
        aSpaceBlack: ['ASpaceBlack', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
