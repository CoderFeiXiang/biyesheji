<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
      label-position="left">
      <div class="title-container">
        <h3 class="title">就业信息登录系统</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-user-solid"></i>
        </span>
        <el-input ref="username" v-model="loginForm.username" placeholder="账号" name="username" type="text" tabindex="1"
          auto-complete="on" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock"></i>
        </span>
        <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" placeholder="密码"
          name="password" tabindex="2" auto-complete="on" @keyup.enter.native="handleLogin" />
        <span :class="look" @click="showPwd" style="color:#fff">
          <i :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-radio-group v-model="loginForm.type" style="margin-bottom:10px">
        <el-radio :label="3">学生</el-radio>
        <el-radio :label="2">招聘人员</el-radio>
        <el-radio :label="1">管理员</el-radio>
      </el-radio-group>
      <el-button :loading="loading" type="primary" style="width: 100%; margin-bottom:30px"
        @click.native.prevent="handleLogin" @keyup.native.enter="handleLogin">登录</el-button>
      <div @click="goRegistered" class="registered">还没有账号？点此注册</div>
    </el-form>
  </div>
</template>

<script>
import { Login, stuData } from '@/api/request.js'
export default {
  name: 'Home',
  components: {},
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value.length <= 0) {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length <= 0) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      checked: 1,
      loginForm: {
        username: '',
        password: '',
        type: 3
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername },
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      look: 'el-icon-sunny',
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    // 注册弹窗
    goRegistered () {
      this.$router.push('/registered')
      // this.dialogVisible = true
    },
    showPwd () {
      if (this.passwordType === 'password') {
        this.look = 'el-icon-moon'
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
        this.look = 'el-icon-sunny'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin () {
      let that = this
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          that.loading = true
          Login(that.loginForm)
            .then((res) => {
              console.log(res)
              if (res.data.status == 0) {
                that.$message({
                  message: res.data.msg,
                  type: 'success',
                  duration: 1000
                })
                that.loading = false
                sessionStorage.setItem('id', that.loginForm.username)
                sessionStorage.setItem('type', that.loginForm.type)
                that.$router.push({
                  path: '/home',
                  query: {
                    id: that.loginForm.username,
                    type: that.loginForm.type
                  }
                })
              } else {
                that.$message.error(res.data.msg)
                that.loading = false
              }
            })
            .catch((err) => {
              that.loading = false
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
  created () {
  },
}
</script>

<style lang="less">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
@supports (-webkit-mask: none) and (not (cater-color: #fff)) {
  .login-container .el-input input {
    color: #fff;
  }
}

/* reset element-ui css */
.login-container {
  height: 100vh;
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #fff;
      height: 47px;
      caret-color: #fff;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #283443 inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .registered {
    float: right;
    margin-top: -20px;
    font-size: 14px;
    cursor: pointer;
    color: #007bd7;
    border-bottom: 1px solid #007bd7;
  }
}
</style>

<style lang="less" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    font-size: 18px;
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 10px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }
}
</style>




<!--
 <style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  background: url('../../assets/login.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  border: 1px solid transparent;
  background-color: #cccccc;
  // padding-bottom: -2px;
}
.login-wrapper {
  // background-color: #fff;
  width: 358px;
  height: 570px;
  border-radius: 15px;
  padding: 0 50px;
  margin-left: 50%;
  margin-top: 50px;
  margin-bottom: 28px;
  transform: translateX(-50%);
}
.header {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: url('../../assets/login.jpg');

  color: #fff;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>
