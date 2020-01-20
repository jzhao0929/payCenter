
import appLayout from '@/components/Layout'

const userRoute = [
  {
    path: 'user',
    component: appLayout,
    meta: {
      label: '用户管理'
    },
    children: [{
      path: 'list',
      component: () => import('@/views/user/index'),
      meta: {
        label: '用户列表',
        path: '/user/list'
      },
      children: []
    }]
  }
]

export default userRoute
