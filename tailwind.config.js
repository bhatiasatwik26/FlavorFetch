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
      keyframes: {
        breath: {
          '0%, 100%': { backgroundColor: '#b6b6b628' },
          '50%': { backgroundColor: '#7e7e7e5d' },
        },
      },
      animation: {
        breath: 'breath 1s linear infinite',
      },
    },
    screens: {
      'sm': '440px', 
      'md': '700px',
      'lg': '900px',
      'xl': '1100px',
    },
  },
  plugins: [],
};
