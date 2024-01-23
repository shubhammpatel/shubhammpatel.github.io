import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT:      '#955E0C',
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        'fira-code': ['Fira Code', ...fontFamily.serif],
      }
    },
  },
  plugins: [],
}

