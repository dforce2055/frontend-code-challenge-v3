/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./views/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#11555F',
        'primary-hover': '#0e4851',
        black: '#081F32',
        secondary: '#34c759',
      },

      fontFamily: {
        'sans': ['Montserrat', "sans-serif"],
        'body': ['Montserrat', "sans-serif"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    
  ],
}
