const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  // 用于标记编译后的文件与编译前的文件对应位置，便于调试
  // devtool: 'source-map',
  devServer: {
    historyApiFallback: true, // 404的页面会自动跳转到/页面
    inline: true, // 文件改变自动刷新页面
    progress: true, // 显示编译进度
    port: 3000, // 服务器端口
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})