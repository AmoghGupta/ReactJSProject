const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module:{
    // babel setup with webpack
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  // source map
  devtool: 'cheap-module-eval-source-map'
};

//loader
