module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'q-pink' : '#FFF2FF',
        'q-purple': '#6A61F1',
        'q-purple-light' : '#9996EF',
       }),
      width: {
        '128': '32rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
