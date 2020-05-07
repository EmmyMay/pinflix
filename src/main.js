import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import meta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(meta);

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  vuetify,

  created() {
    if (localStorage.getItem('light-mode') == "false") {
      this.$vuetify.theme.dark = true;
    } else if (localStorage.getItem('light-mode') == "true") {
      this.$vuetify.theme.dark = false;
    }



  },

  render: h => h(App)
}).$mount('#app')