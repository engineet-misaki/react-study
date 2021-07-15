var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: "./js/layouts/script.js",

  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },

  devServer: {
    contentBase: "dist",
    port: 3000
  },
  
};


//TODO SCSSのコンパイル入れる