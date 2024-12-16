/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'sea_green': {
        DEFAULT: '#09814a', 
        100: '#021a0f', 
        200: '#04331e', 
        300: '#054d2d', 
        400: '#07673c', 
        500: '#09814a', 
        600: '#0ec673', 
        700: '#2ef099', 
        800: '#74f5bb', 
        900: '#b9fadd'
      }, 
      'gunmetal': {
        DEFAULT: '#272d2d',
        100: '#080909', 
        200: '#0f1111', 
        300: '#171a1a', 
        400: '#1e2323', 
        500: '#272d2d', 
        600: '#4e5959', 
        700: '#768787', 
        800: '#a3afaf', 
        900: '#d1d7d7'
      }, 
      'saffron': {
        DEFAULT: '#f9c846', 
        100: '#3e2e02', 
        200: '#7d5c04', 
        300: '#bb8b06', 
        400: '#f7b80a', 
        500: '#f9c846', 
        600: '#fad56d', 
        700: '#fcdf91', 
        800: '#fdeab6', 
        900: '#fef4da'
      }, 
      'slate_blue': {
        DEFAULT: '#7067cf', 
        100: '#120f2f', 
        200: '#231e5f', 
        300: '#352d8e', 
        400: '#473cbd', 
        500: '#7067cf', 
        600: '#8d86d9', 
        700: '#a9a4e2', 
        800: '#c6c3ec', 
        900: '#e2e1f5'
      }, 
      'amaranth_purple': {
        DEFAULT: '#a4243b', 
        100: '#21070c', 
        200: '#410e18', 
        300: '#621523', 
        400: '#821d2f', 
        500: '#a4243b', 
        600: '#d23350', 
        700: '#dd667c', 
        800: '#e999a8', 
        900: '#f4ccd3'
      }
    }
    },
  },
  plugins: [],
}

