import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/pages/FrontPage/index'
import SingleCard from '@/pages/SingleCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/card',
      name: 'SingleCard',
      component: SingleCard
    }
  ]
})
