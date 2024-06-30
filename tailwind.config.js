/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'calc-100vh-minus-80px': 'calc(100vh - 81px)',
      },
    },
    screens: {
      'sm': '440px', 
      'md': '700px',
      'lg': '900px',
      'xl': '1100px',
    }
  },
  plugins: [],
}

