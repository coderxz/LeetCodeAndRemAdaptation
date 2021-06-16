const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 192//根据ui图纸计算
})
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    },
  }
}