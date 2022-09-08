/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary': 'var(--primary)',
      'primaryText': 'var(--primaryText)',
      'primaryShadow': 'var(--primaryShadow)',
      'bg': 'var(--bg)',
      'bgText': 'var(--bgText)',
    },
    fontFamily: {
      "sans": ["Poppins", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      variants: {
        textColor: ['hover']
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(20rem, 1fr))',
      }
    },
  },
  plugins: [],
}
