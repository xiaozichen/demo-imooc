import Vue from 'vue'
import Router from 'vue-router'
import goods from './../views/goods' // @ src目录
import goods1 from './../views/goods1'
import hotTitle from '../views/hotTitle'
import Image from './../views/image'
import cart from './../views/cart'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/goods/:goodId',
      name: 'goods',
      components: {
        default: goods,
        myTitle: hotTitle,
        myImage: Image
      }
    },
    {
      path: '/good/:goodId/user/:user',
      name: 'good',
      component: goods
    },
    {
      path: '/goods1/',
      name: 'goods1',
      component: goods1,
      children: [
        {
          path: 'title',
          name: 'title',
          component: hotTitle
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/cart/:cartId',
      name: 'cart_parm',
      component: cart
    }
  ]
})
