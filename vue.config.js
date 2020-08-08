const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');
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
        indexPath: path.resolve('public/index.html'),
        staticDir: path.resolve('dist'),
        routes: ['/', '/maintwi', '/maintik', '/admin', '/upload'],
        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          injectProperty: '__prerender',
          inject: {},
          renderAfterDocumentEvent: 'render-ready',
        })
      }),

    ],

  }
}