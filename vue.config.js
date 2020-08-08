module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'PinFlix'
        return args
      })
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        indexPath: path.resolve('dist/i.html'),
        staticDir: path.resolve('dist'),
        routes: ['/', '/a', '/b'],
      }),
    ]
  }
}