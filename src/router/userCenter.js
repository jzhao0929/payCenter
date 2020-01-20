
import appLayout from '@/components/Layout'

const userCenterRoute = [
  {
    path: 'userCenter',
    component: appLayout,
    meta: {
      label: '用户中心'
    },
    children: [{
      path: 'message',
      component: () => import('@/views/userCenter/message'),
      meta: {
        label: '用户信息',
        path: '/userCenter/message'
      },
      children: []
    },{
      path: 'edit',
      component: () => import('@/views/userCenter/edit'),
      meta: {
        label: '修改信息',
        path: '/userCenter/edit'
      },
      children: []
    },{
      path: 'securitySetting',
      component: () => import('@/views/userCenter/securitySetting'),
      meta: {
        label: '安全设置',
        path: '/userCenter/securitySetting'
      },
      children: []
    }]
  }
]

export default userCenterRoute
