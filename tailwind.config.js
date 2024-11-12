/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#0070f3',
        'primary-light':'#0099ff',
        'primary-dark':'#0052cc',
        'primary-light-hover':'#0099ff',
        'primary-dark-hover':'#0052cc',
        'primary-light-active':'#0099ff',
        'primary-dark-active':'#0052cc',
      },
      fontFamily:{
        'poppins':'Poppins',
      },
    },
  },
  plugins: [],
}

