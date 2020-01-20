<template>
  <div>
    <el-container class="wrapper">
    <el-container class="down-container">
      <side-bar :collapse="collapse" :width='width' :menu="menu"></side-bar>
      <el-main class="content" :style="{left: width +'px', width: 'calc(100% - ' + width + 'px)'}">
        <nav-bar @changeCollapse="handleChangeCollapse" :userInfo="userInfo"></nav-bar>
        <div class="route-content" :key="key">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from './NavBar'
import SideBar from './SideBar'

export default {
  components: {
      NavBar,
      SideBar
  },
  data () {
    return {
      key: 0,
      width: 220,
      collapse: false,
      versionVisible: false,
      imgsrc: require('../../assets/img/ued.png'),
      userInfo: {
        name: 'admin'
      },
      menu: [{
        id: '1',
        raw: {
          name: '后台首页',
          value: '/dashboard',
          icon: 'iconfont icon-shouye1-copy'
        },
        children: []
      },{
        id: '2',
        raw: {
          name: '用户管理',
          value: '/user',
          icon: 'iconfont icon-shebei'
        },
        children: [{
          id: '2-1',
          raw: {
            name: '用户列表',
            value: '/user/list'
          },
          children: []
        }]
      },{
        id: '3',
        raw: {
          name: '订单管理',
          value: '/order',
          icon: 'iconfont icon-shu'
        },
        children: [{
          id: '3-1',
          raw: {
            name: '订单列表',
            value: '/order/list'
          },
          children: []
        }]
      },{
        id: '4',
        raw: {
          name: '任务大厅',
          value: '/task',
          icon: 'iconfont icon-guizeyinqing'
        },
        children: [{
          id: '4-1',
          raw: {
            name: '任务列表',
            value: '/task/list'
          },
          children: []
        },{
          id: '4-2',
          raw: {
            name: '任务订单',
            value: '/task/order'
          },
          children: []
        }]
      },{
        id: '5',
        raw: {
          name: '数据统计',
          value: '/dataCount',
          icon: 'iconfont icon-rili'
        },
        children: [{
          id: '5-1',
          raw: {
            name: '今日数据',
            value: '/dataCount/today'
          },
          children: []
        },{
          id: '5-2',
          raw: {
            name: '历史数据',
            value: '/dataCount/history'
          },
          children: []
        }]
      },{
        id: '6',
        raw: {
          name: '用户中心',
          value: '/userCenter',
          icon: 'iconfont icon-rili'
        },
        children: [{
          id: '6-1',
          raw: {
            name: '用户信息',
            value: '/userCenter/message'
          },
          children: []
        },{
          id: '6-2',
          raw: {
            name: '修改信息',
            value: '/userCenter/edit'
          },
          children: []
        },{
          id: '6-3',
          raw: {
            name: '安全设置',
            value: '/userCenter/securitySetting'
          },
          children: []
        }]
      },{
        id: '7',
        raw: {
          name: '工单管理',
          value: '/workOrderManage',
          icon: 'iconfont icon-rili'
        },
        children: [{
          id: '7-1',
          raw: {
            name: '商户工单',
            value: '/workOrderManage/commercialOrderList'
          },
          children: []
        },{
          id: '7-2',
          raw: {
            name: '码商工单',
            value: '/workOrderManage/codeCommercialOrderList'
          },
          children: []
        }]
      },{
        id: '8',
        raw: {
          name: '超级管理',
          value: '/super',
          icon: 'iconfont icon-rili'
        },
        children: [{
          id: '8-1',
          raw: {
            name: '系统设置',
            value: '/super/system'
          },
          children: []
        },{
          id: '8-2',
          raw: {
            name: '用户设置',
            value: '/super/user'
          },
          children: []
        },{
          id: '8-3',
          raw: {
            name: 'API设置',
            value: '/super/api'
          },
          children: []
        },{
          id: '8-4',
          raw: {
            name: '安全设置',
            value: '/super/securitySetting'
          },
          children: []
        }]
      }]
    }
  },
  methods: {
    handleChangeCollapse(item) {
      this.collapse = item
      this.width = item ? 64 : 220
    }
  }
}
</script>

<style scoped>
  .tags {
    /* position: absolute; */
    top: 50px;
    height: 30px;
    margin: 10px 0;
  }
  /* content */
  .content {
    position: absolute;
    top: 0;
    overflow-x: hidden;
    height: 100%;
    background-color: #fff;
  }
  .route-content {
    position: absolute;
    top: 80px;
    height: calc(100% - 80px);
    width: calc(100% - 40px);
  }
</style>