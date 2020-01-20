<template>
  <el-container>
  <div class="error-box">
    <div class="error-code">
      <div class="animated tada">401</div>
    </div>
    <div class="error-title">
      抱歉，你不能访问！
    </div>
    <div class="error-content">
        <p>原因：你的会话已过期或已注销</p>
    </div>
    <div class="error-btn">
      <el-button type="warning" plain @click="change()">重新登录</el-button>
    </div>
  </div>
  </el-container>
</template>

<script>
/**
 * made by jzhao.
 **/
import Vue from 'vue'
export default {
  methods: {
    change () {
      // 先退出，在登录
      this.$axios.delete('/user/logout').then(res => {
        window.localStorage.removeItem("access_token")
        window.localStorage.removeItem("username")
        this.$router.push('/login')
      })
    }
  }
}
</script>
