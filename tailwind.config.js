/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'primary-dark': '#171d25',
        'secondary-dark': '#1b2838',
        'card-bg': '#1e2329',
        'accent-blue': '#66c0f4',
        'accent-dark-blue': '#417a9b',
        'steam-border': '#3c4f62',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'steam': '0 0 20px rgba(0, 0, 0, 0.5)',
        'steam-hover': '0 0 30px rgba(102, 192, 244, 0.3)',
      },
    },
  },
  plugins: [],
}
