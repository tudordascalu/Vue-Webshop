import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FrontPage from '@/components/FrontPage'
// import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Front page',
      component: FrontPage
    },
    // {
    //   path: '/products',
    //   name: 'ProductBox',
    //   component: Product
    // }
  ]
})
