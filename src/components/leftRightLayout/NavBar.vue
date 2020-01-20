<template>
  <div class="route-header">
    <i @click="changeCollapse" :class="['mt-11', 'float-left', !collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"></i>
    <div class="mt-11 tools">
      <el-dropdown @command="handleCommand">
        <i class="fa fa-user color-white el-dropdown-link">
          {{ userInfo.name }}<i class="el-icon-arrow-down el-icon--right"></i>
        </i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false
    }
  },
  props: ['userInfo'],
  methods: {
    changeCollapse() {
      this.collapse = !this.collapse
      this.$emit('changeCollapse', this.collapse)
    },
    handleCommand(command) {
      switch(command){
        case 'logout': this.logout(); break;
        case 'changePwd': return;
        default: break;
      }
    },
    logout() {
      this.$confirm('确定要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.localStorage.removeItem("access_token")
        this.$router.push('/login')
      }).catch(() => {
           
      });
    }
  }
}
</script>

<style scoped>
  .mt-11 {
    margin-top: 9px;
  }
  .float-left {
    float: left;
    cursor: pointer;
    color: #666;
    font-size: 23px;
  }
  .route-header {
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    width: calc(100% - 20px);
    background: #fff;
    color: #666;
    font-size: 20px;
    /* border-bottom: 1px solid #d8d8d8; */
    z-index: 2;
  }
  .tools {
    display: inline-block;
    float: right;
  }
  .tools>li {
    list-style: none;
  }
  .tools>* {
    margin-right: 20px;
  }
  .user > * {
    margin-right: 5px;
  }
  .user span {
    font-size: 16px;
  }
</style>
