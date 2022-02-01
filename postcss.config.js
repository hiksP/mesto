const Autoprefixer = require('autoprefixer');
const Cssnano = require('cssnano');

module.exports = {
  plugins: [
    Autoprefixer,
    Cssnano({ preset: 'default' })
  ]
};