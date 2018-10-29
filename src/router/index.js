import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/pages/FrontPage/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    }
  ]
})
