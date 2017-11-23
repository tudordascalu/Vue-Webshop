import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FrontPage from '@/components/FrontPage'
import Cart from '@/components/Cart'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Front page',
      component: FrontPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    }
  ]
})

