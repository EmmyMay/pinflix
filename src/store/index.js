import Vue from 'vue'
import Vuex from 'vuex'
import twitter from './modules/twitter'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    twitter
  }
})