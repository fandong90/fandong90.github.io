const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin     = require("webpack-manifest-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
    rules: [
    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
               test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader'
                ]
       },
       {
           test:/\.vue$/,
           loader:'vue-loader'
       }
   ]
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
    port: 8085,
  }
};