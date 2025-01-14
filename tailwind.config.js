/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
const {colors} = require("tailwindcss/colors");
module.exports = {
  important: true,
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...fontFamily.sans],
        robotoslab: ["Roboto Slab", ...fontFamily.sans],
        montserrat: ["Montserrat", ...fontFamily.sans],
        lisubosa: ["Lisu Bosa", ...fontFamily.serif],
        robotoserif: ["Roboto Serif", ...fontFamily.serif]
      },
      colors: {
        ...colors,
        headings: "#e1a000"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0, 0, 0);' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        expand: {
          '0%': {
            width: '10%;'
          },
          '100%': {
            width: '100%'
          }
        }
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
        expand: 'expand 200ms ease-in-out forwards'
      },
    },
  },
  plugins: [],
}

