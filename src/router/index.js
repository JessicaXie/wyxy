import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Login from '../pages/login/Login'
import Topic from '../pages/topic/Topic'
import Items from '../pages/items/Items'
import Ucenter from '../pages/ucenter/Ucenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/items',
      name: 'Items',
      component: Items,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/ucenter',
      name: 'Ucenter',
      component: Ucenter,
      meta: {
        showFooter: true
      }
      // children: [
      //   {
      //     path: '/ucenter/login',
      //     name: 'Login',
      //     component: Login,
      //     meta: {
      //       showFooter: true
      //     }
      //   }
      // ]
    },
    {
      path: '/',
      redirect: '/home'
    }

  ]
})
