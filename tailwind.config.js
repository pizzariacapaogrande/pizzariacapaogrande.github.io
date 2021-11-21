module.exports = {
  purge: [
    './public/**/*.html',
     './public/**/*.js',
     './src/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto Slab"', 'serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
