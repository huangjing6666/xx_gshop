/*
路由器对象模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
// import MSite from '../pages/Msite/Msite'
// import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

// 什么使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: resolve => require(['../pages/Msite/Msite'], resolve),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: resolve => require(['../pages/Search/Search'], resolve),
      meta: {
        //显示footer
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
