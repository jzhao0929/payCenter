<template>
  <el-container>
  <div class="error-box">
    <div class="error-code">
      <div class="animated bounceInDown">500</div>
    </div>
    <div class="error-title">
      抱歉，服务器开小差了！
    </div>
    <div class="error-content">
        <p>原因：服务器报错</p>
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
