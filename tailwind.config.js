/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      colors: {
        "custom-color":"hsl(212, 45%, 89%)",
        "heading-color":"hsl(218, 44%, 22%)",
        "info-color":"hsl(220, 15%, 55%)",
      },
      boxShadow:{
        "custom-shadow":"45px 48px 55px -21px rgba(0,0,0,0.1)",
      }
    },
  },
  plugins: [],
}

