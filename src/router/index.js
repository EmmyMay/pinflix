import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import maintwitter from '../views/maintwitter.vue'
import Parser from '../views/upload.vue'
import Test from '../views/test.vue'
import TikTok from '../views/maintiktok.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,

    getTweets() {
      console.log("Hello");
    }
  },
  {
    path: '/maintwi',
    name: 'Twitter',
    component: maintwitter
  },
  {

    path: '/upload',
    name: 'Parser',
    component: Parser

  },
  {

    path: '/test',
    name: 'Test',
    component: Test

  },
  {
    path: '/maintik',
    name: TikTok,
    component: TikTok

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router