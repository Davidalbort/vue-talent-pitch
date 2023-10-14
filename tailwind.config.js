/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    stroke: (theme) => ({
      white: theme('colors.white')
    }),
    extend: {},
    colors: {
      blue: {
        primary: '#1a237e'
      },
      text: {
        nav: '#9fa8da'
      },
      button: {
        primary: '#de1c7d'
      }
    }
  },
  plugins: []
}
