
import appLayout from '@/components/Layout'

const taskRoute = [
  {
    path: 'task',
    component: appLayout,
    meta: {
      label: '任务大厅'
    },
    children: [{
      path: 'list',
      component: () => import('@/views/task/index'),
      meta: {
        label: '任务列表',
        path: '/task/list'
      },
      children: []
    },{
      path: 'order',
      component: () => import('@/views/task/order'),
      meta: {
        label: '任务订单',
        path: '/task/order'
      },
      children: []
    }]
  }
]

export default taskRoute
