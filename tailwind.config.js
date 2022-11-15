/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  boxShadow: {
    '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
    'lg': [
        '0px 58px 23px rgba(121, 113, 234, 0.01)',
        '0px 32px 19px rgba(121, 113, 234, 0.05)',
        '0px 14px 14px rgba(121, 113, 234, 0.09)',
        '0px 4px 8px rgba(121, 113, 234, 0.1)',
        '0px 0px 0px rgba(121, 113, 234, 0.1)'

       
    ],
  },
  theme: {
    extend: {
      fontFamily:{
        Poppins:["Poppins","sans-serif"]
      },
      colors:{
        'active':"#7971EA",
        'activebg':"#00D27A"
      },
      fontSize: {
        sm: '1rem',
      
      }
    },
  },
  plugins: [],
}
