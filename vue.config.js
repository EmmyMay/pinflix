module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: 'https://pinflixx.herokuapp.com'
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