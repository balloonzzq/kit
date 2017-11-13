const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const root = path.resolve(__dirname, '..')

module.exports = {
  entry: {
    main: path.join(root, 'src/index.js'),
    vendor: ['vue'],
  }, // 入口文件路径
  output: {
    path: path.join(root, 'dist'), // 出口目录
    filename: '[name].bundle.js', // 出口文件名
  },
  resolve: {
    // 配置目录别名
    alias: {
      // vue.js = vue.common.js + compiler.js，而如果要使用 template 这个属性的话就一定要用 compiler.js
      'vue': 'vue/dist/vue.js',
      // 在任意目录下require('components/example')相当于require('项目根目录/src/components/example')
      components: path.join(root, 'src/components'),
      views: path.join(root, 'src/views'),
      styles: path.join(root, 'src/styles'),
      store: path.join(root, 'src/store'),
      router: path.join(root, 'src/router'),
      plugins: path.join(root, 'src/plugins'),
    },
    // 引用js和vue文件可以省略后缀名
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /.js/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        use: ['css-loader', 'style-loader', 'stylus-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue-project',
      template: path.join(root, 'index.html'), // 模板文件
      inject: 'body' // js的script注入到body底部
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // 指定公共 bundle 的名称
    }),
  ],
}