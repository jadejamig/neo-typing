/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#fff4e0',
        main: '#FD9745',
        mainAccent: '#fc7303',
      },
      borderRadius: {
        base: '5px'
      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(0,0,0,1)',
        bottom: '0px 2px 0px 0px rgba(0,0,0,1)',
        bottom4px: '0px 4px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        monsterrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

