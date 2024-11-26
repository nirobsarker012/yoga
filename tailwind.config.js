/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding: "20px",
      },

      screens:{
        "sm": "576px",
        "md" : "768px",
        "lg": "992px",
        "xl": "1200px",
        "2xl" : "1490px",
      },

      fontFamily:{
        viga:["Viga", "sans-serif"],
        pt:["PT Serif", "serif"],
        "ar":["Arsenal", "sans-serif"],
      }
    },
  },
  plugins: [],
}