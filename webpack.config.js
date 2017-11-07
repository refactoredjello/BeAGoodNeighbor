const path = require('path');
module.exports = {
  entry: './client/components/App.jsx',
  output: {
    path: path.resolve('./client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
        query: {
          presets:[ "es2015", "react" ]
        } 
      }
    ]
  }
}