module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: 'http://localhost:3000'
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'PinFlix'
        return args
      })
  }
}