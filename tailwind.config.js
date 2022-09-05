/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary': '#4667c8',
      'primaryText': '#ffffff',
      'bg': '#f6f6f6',
      'bgText': '#424242',
    },
    fontFamily: {
      "sans": ["Poppins", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      variants: {
        textColor: ['hover']
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(18rem, 1fr))',
      }
    },
  },
  plugins: [],
}
