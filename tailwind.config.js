/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        accent: "#FFD050",
        lightAccent: "#FBF6EA",
        dark: "#232536",
        secondary: "#592EA9",
        lightSecondary: "#F4F0F8",
         mediumGray: "#6D6E76"
      },
      textColor: {
        dark: "#232536",
        accent: "#FFD050",
        standart: "#6D6E76",
        secondary: "#592EA9"
      },
      borderColor: {
        mediumGray: "#6D6E76"
      },
      fontFamily: {
        main: ['Sen', 'sans-serif'],
        secondary: ['Inter', 'sans-serif;']
      }
    },
  },
  plugins: [],
}

