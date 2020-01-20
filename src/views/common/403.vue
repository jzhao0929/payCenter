<template>
  <el-container>
  <div class="error-box">
    <div class="error-code">
      <div class="animated tada">403</div>
    </div>
    <div class="error-title">
      抱歉，你越权访问！
    </div>
    <div class="error-content">
        <p>原因：服务器拒绝或禁止访问</p>
    </div>
    <div class="error-btn">
      <el-button type="warning" plain @click="change('/')">返回首页</el-button>
    </div>
  </div>
  </el-container>
</template>

<script>
/**
 * made by jzhao.
 **/
export default {
  methods: {
    change (path) {
      this.$router.push(path)
    }
  }
}
</script>
