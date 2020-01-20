<template>
  <el-container>
  <div class="error-box">
    <div class="error-code">
      <div class="animated wobble">404</div>
    </div>
    <div class="error-title">
      抱歉，你访问的页面已丢失！
    </div>
    <div class="error-content">
        <p>原因：网址不完整或存在多余的的字符</p>
        <p>网址已失效</p>
        <p>可能页面已删除</p>
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
