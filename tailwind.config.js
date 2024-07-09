
module.exports = {
  content: ["./static/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        // => @media (min-width: 500px) { ... }
  
        'md': '700px',
        // => @media (min-width: 700px) { ... }
  
        'lg': '900px',
        // => @media (min-width: 900px) { ... }
        'xl': '1100px',
        // => @media (min-width: 1100px) { ... }
      },
      colors: {
        'custom-Orange': '#FF4900',
        'card-color':'#3C3C3C',
        'Custom-Transparent':'#000000d6'

      },
    },
  },
  plugins: [],
}