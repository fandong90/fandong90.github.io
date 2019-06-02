/** config  webpack moudle.rules loader */

module.exports={
  config:[
    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.scss/,
        use:[
          {loader:'css-loader'}
          ,
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
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
       },
       {
         test:/\.md$/,
         use:[
           {
          loader: 'vue-loader', 
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
         },
         {
          // 这里用到的就是刚写的那个 loader
          loader: require.resolve('./md-loader/index.js')
         }
        ]
      }
   ]
};