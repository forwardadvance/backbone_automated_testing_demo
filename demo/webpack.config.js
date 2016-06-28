
module.exports = {
  entry: {
    app: "./source/app.js",
    specs: "./source/specs.js"
  },
  output: {

    filename: "./build/[name].build.js"
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
