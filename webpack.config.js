module.exports = {
  entry: ['babel-polyfill', "./js/three/app.js"],
  output: {
    filename: "./dist/bear.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  watch: true
}
