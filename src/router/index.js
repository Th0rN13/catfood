import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/pages/FrontPage/index'
import SingleCard from '@/pages/SingleCard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: window.location.pathName,
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    }
  ]
})
