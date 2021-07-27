const path = require('path')

module.exports = {
  outputDir: './build',
  //publicPath: './',本地liveserver看生产环境时用
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/conponents')
  }
}
