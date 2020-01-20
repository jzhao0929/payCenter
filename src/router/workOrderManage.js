
import appLayout from '@/components/Layout'

const workOrderRoute = [
  {
    path: 'workOrderManage',
    component: appLayout,
    meta: {
      label: '用户中心'
    },
    children: [{
      path: 'commercialOrderList',
      component: () => import('@/views/workOrderManage/commercialOrderList'),
      meta: {
        label: '商户工单',
        path: '/workOrderManage/commercialOrderList'
      },
      children: []
    },{
      path: 'codeCommercialOrderList',
      component: () => import('@/views/workOrderManage/codeCommercialOrderList'),
      meta: {
        label: '码商工单',
        path: '/workOrderManage/codeCommercialOrderList'
      },
      children: []
    }]
  }
]

export default workOrderRoute
