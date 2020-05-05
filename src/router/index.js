import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import maintwitter from '../views/maintwitter.vue'
import Parser from '../views/upload.vue'
import Test from '../views/test.vue'
import TikTok from '../views/maintiktok.vue'
import admin from '../views/admin.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home


  },
  {
    path: '/maintwi',
    name: 'Twitter',
    component: maintwitter
  },
  {

    path: '/upload',
    name: 'Parser',
    component: Parser,
    meta: {
      requiresAuth: true
    },
    // Before moving to this route check if there is a user token in vuex
    beforeEnter(to, from, next) {

      try {

        var hasPermission = localStorage.getItem('user');




        if (hasPermission == undefined) {
          next('/')
        } else {
          next()
        }
      } catch (e) {

        next({
          name: "Home" // back to safety route //
        })
      }
    }

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

  },
  {
    path: '/admin',
    name: 'Admin',
    component: admin

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem != undefined) {
    var loggedIn = localStorage.getItem('user');
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/');
  }
  next();

})
export default router