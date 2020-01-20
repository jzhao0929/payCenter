import user from './user'
import order from './order'
import task from './task'
import dataCount from './dataCount'
import userCenter from './userCenter'
import workOrder from './workOrderManage'
import superManage from './super'

const appRoutes = [
  ...user,
  ...order,
  ...task,
  ...dataCount,
  ...userCenter,
  ...workOrder,
  ...superManage
]

export default appRoutes