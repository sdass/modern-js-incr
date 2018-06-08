//this file obviates typing webpack
module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
 

  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env'],
          }
      }
    ]
  }
};
