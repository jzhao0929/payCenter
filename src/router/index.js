/**
 * made by jzhao.
 **/

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/leftRightLayout'
import appRoutes from './router.all.js'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/common/dashboard'),
      meta: {
        label: '首页',
        path: '/dashboard'
      }
    }, ...appRoutes]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/common/login')
  },
  {
    path: '/Err401',
    name: 'Err401',
    component: () => import('@/views/common/401')
  },
  {
    path: '/Err403',
    name: 'Err403',
    component: () => import('@/views/common/403')
  },
  {
    path: '/Err404',
    name: 'Err404',
    component: () => import('@/views/common/404')
  },
  {
    path: '/Err500',
    name: 'Err500',
    component: () => import('@/views/common/500')
  }
]

export const asyncRoutes = [

  /** when your routing map is too long, you can split it into small modules **/
  ...appRoutes,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/Err404', hidden: true }
]

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router