/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Rubik Wet Paint"', 'cursive'],
        'display': ['"Patua One"', 'sans-serif'],
        'body': ['"Roboto Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
