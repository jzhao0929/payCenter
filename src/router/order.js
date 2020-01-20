
import appLayout from '@/components/Layout'

const orderRoute = [
  {
    path: 'order',
    component: appLayout,
    meta: {
      label: '订单管理'
    },
    children: [{
      path: 'list',
      component: () => import('@/views/order/index'),
      meta: {
        label: '订单列表',
        path: '/order/list'
      },
      children: []
    }]
  }
]

export default orderRoute
