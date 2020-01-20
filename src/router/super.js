
import appLayout from '@/components/Layout'

const superRoute = [
  {
    path: 'super',
    component: appLayout,
    meta: {
      label: '超级管理'
    },
    children: [{
      path: 'system',
      component: () => import('@/views/super/system'),
      meta: {
        label: '系统设置',
        path: '/super/system'
      },
      children: []
    },{
      path: 'user',
      component: () => import('@/views/super/user'),
      meta: {
        label: '用户设置',
        path: '/super/user'
      },
      children: []
    },{
      path: 'api',
      component: () => import('@/views/super/api'),
      meta: {
        label: 'api设置',
        path: '/super/api'
      },
      children: []
    },{
      path: 'securitySetting',
      component: () => import('@/views/super/securitySetting'),
      meta: {
        label: '安全设置',
        path: '/super/securitySetting'
      },
      children: []
    }]
  }
]

export default superRoute
