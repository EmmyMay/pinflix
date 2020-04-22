import Vue from 'vue'
import Vuex from 'vuex'
import twitter from './modules/twitter'
import tiktok from './modules/tiktok'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    twitter,
    tiktok
  }
})