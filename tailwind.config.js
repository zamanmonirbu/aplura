/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '400': '400px',
      },
      fontFamily: {
        average: ['Average', 'sans-serif'], 
      },
      colors: {
        primary: '#5C4033',  //light green
        secondary: '#231515', //brown dart
        seconHover: '#4a3731', //brown dart
        // third:'#0F2C4F', //main
        third: '#7E8C4F', //main
        fourth: '#FFFFFF', //white
        fifth: '#0B2B3C',   //deep
        sixth: '#EB8317'
      },
    },
  },
  plugins: [],
}
