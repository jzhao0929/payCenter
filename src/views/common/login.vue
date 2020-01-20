<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">管理员登录</div>
      <div class="shadow"></div>
      <div class="login-form">
        <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'change'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'change'
        }]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if(valid){
          //这里是登陆接口的代码
          // this.$axios.post('/login', this.loginForm).then(res => {

          // }).catch(() => {

          // })
          this.$message.success('登录成功')
          window.localStorage.setItem('access_token', 'kajsfnklajdslkfa')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/img/bg.png');
    background-size: cover;
    overflow: hidden;
  }
  .login-box {
    margin: 120px auto 0 auto;
    min-height: 420px;
    max-width: 420px;
    padding: 40px;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    /* overflow-x: hidden; */
    box-sizing: border-box;
  }
  .login-title {
    margin: 10px 0 0 -58px;
    padding: 18px 10px 18px 60px;
    background: #189F92;
    position: relative;
    color: #fff;
    font-size: 16px;
  }
  .shadow {
    width: 0;
    border-left: 18px solid transparent;
    border-top: 10px solid #000;
    margin: 0 0 0 -58px;
  }
  .login-form {
    margin-top: 20px;
  }
  .login-form >>> input {
    border: 1px solid #DCDEE0;
    vertical-align: middle;
    border-radius: 3px;
    height: 50px;
    padding: 0px 16px;
    font-size: 14px;
    color: #555555;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }
  .login-form >>> button {
    display: inline-block;
    padding: 12px 24px;
    margin: 0px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    color: #ffffff;
    background-color: #189F92;
    border-radius: 3px;
    border: none;
    -webkit-appearance: none;
    outline: none;
    width: 100%;
  }
</style>