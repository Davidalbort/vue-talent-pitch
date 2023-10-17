/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    stroke: (theme) => ({
      white: theme('colors.white')
    }),
    extend: {
      backgroundImage: {
        aside: "url('src/assets/aside.png')"
      }
    },
    colors: {
      blue: {
        primary: '#1a237e',
        secondary: '#2196F3'
      },
      gray: {
        primary: '#E8EAF6',
        secondary: '#666666',
        third: '#212121',
        fourth: '#FAFAFA'
      },
      green: {
        primary: '#8BC34A'
      },
      white: {
        primary: '#FFFBFC',
        secondary: '#E3F2FD'
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
