const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin     = require("webpack-manifest-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const rules = require('./rules.config');
module.exports = {
  mode: 'development',
  entry: {
    app:path.resolve(__dirname,'..','src/main.js')
  },
  watch: true,
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname ,'..','dist'),
  },
  module: {
    rules: rules.config
  },
  plugins:[
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
         template:'index.template.html',
         filename:'index.html',
         inject:true
     }),
     new ManifestPlugin(),
     new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx','.vue'],
    alias:{
        '@': path.resolve(__dirname,'..','src')
    }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname,'..','dist'),
    host: 'localhost',
    port: 8086,
  }
};