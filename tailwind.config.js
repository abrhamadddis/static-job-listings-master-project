/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        bgHeaderDesktop: "url('../images/bg-header-desktop.svg')" ,
        bgHeaderMobile: "url('../images/bg-header-mobile.svg')",
      },
      colors: {
        primary:{
          desaturatedDarkCyan : "hsl(180, 29%, 50%)", 
        },
        neutral:{
          lightGrayishCyan: "hsl(180, 52%, 96%)",
          lightGrayishCyan: "hsl(180, 31%, 95%)",
          darkGrayishCyan: "hsl(180, 8%, 52%)",
          veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
        }
        
      },
      fontFamily:{
        sans: ['Overpass', 'sans-serif']
      },
      fontWeight: {
        normal: '500',
        bold: '700'
      }
    },
  },
  plugins: [],
}

