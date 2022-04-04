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
        'q-purple-dark'  : '#302E4F',
       }),
       textColor: theme => ({
        ...theme('colors'),
        'q-pink' : '#FFF2FF',
        'q-purple': '#6A61F1',
        'q-purple-muted' : '#5F5E90',
        'q-purple-light' : '#BEBCF8',
       }),
      width: {
        '88': '22rem',
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
      },
    },
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '2rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
