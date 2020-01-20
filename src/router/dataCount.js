
import appLayout from '@/components/Layout'

const dataCountRoute = [
  {
    path: 'dataCount',
    component: appLayout,
    meta: {
      label: '数据统计'
    },
    children: [{
      path: 'today',
      component: () => import('@/views/dataCount/today'),
      meta: {
        label: '今日数据',
        path: '/dataCount/today'
      },
      children: []
    },{
      path: 'history',
      component: () => import('@/views/dataCount/history'),
      meta: {
        label: '历史数据',
        path: '/dataCount/history'
      },
      children: []
    }]
  }
]

export default dataCountRoute
