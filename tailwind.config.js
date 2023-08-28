import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: { 
      colors: {
        black: {
          1000: '#0f1d27'
        },
        blue: {
          cyan: '#0ff',
        },
        purple: {
          100: '#BB86FC'
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
