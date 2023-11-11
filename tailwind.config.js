/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter" : ['inter'],
        "zendots" : ['Zen Dots']
      },
      animation: {
        bouncing: 'bouncing 4s ease-in-out infinite',
        wegel: 'wegel 4s ease-in-out infinite',
      },
      keyframes: {
        bouncing: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%' : { transform: 'translateY(-16px)'}
        },
        wegel: {
          '0%, 100%': { transform: 'rotate(0)' },
          '50%' : { transform: 'rotate(15deg)'}
        }
      }
    },
  },
  plugins: [],
}