<template>
  <div class="registered">
    <div class="title">荆州学院就业信息系统注册</div>
    <div class="data">
      <el-form
        style="margin: 10px"
        ref="sizeForm"
        :rules="rules"
        :model="sizeForm"
        label-width="80px"
        size="mini"
      >
        <el-form-item label="用户类型">
          <el-select
            v-model="sizeForm.type"
            @change="changeType"
            placeholder="请选择用户类型"
          >
            <el-option label="管理员" value="1"></el-option>
            <el-option label="企业" value="2"></el-option>
            <el-option label="毕业生" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="企业名称"
          v-if="sizeForm.type == '2'"
          prop="enterpriseName"
        >
          <el-input v-model="sizeForm.enterpriseName"></el-input>
        </el-form-item>
        <el-form-item label="班级" v-if="sizeForm.type == '3'" prop="class">
          <el-input v-model="sizeForm.class"></el-input>
        </el-form-item>
        <el-form-item
          label="企业招聘负责人"
          v-if="sizeForm.type == '2'"
          prop="name"
        >
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item
          label="姓名"
          v-if="sizeForm.type == '3' || sizeForm.type == '1'"
          prop="name"
        >
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item
          label="姓名"
          v-if="sizeForm.type == '3' || sizeForm.type == '1'"
          prop="sex"
        >
          <el-radio-group v-model="sizeForm.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          label="电话"
          v-if="
            sizeForm.type == '2' || sizeForm.type == '3' || sizeForm.type == '1'
          "
          prop="phone"
        >
          <el-input v-model="sizeForm.phone"></el-input>
        </el-form-item>
        <el-form-item
          label="企业地址"
          v-if="sizeForm.type == '2'"
          prop="region"
        >
          <el-input v-model="sizeForm.region"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button size="mini" type="primary" @click="onSubmit('sizeForm')"
            >立即注册</el-button
          >
          <el-button size="mini" @click="resetForm('sizeForm')">重置</el-button>
          <el-button size="mini" @click="login()">返回登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registered } from '@/api/request.js'
export default {
  data() {
    var checkphone = (rule, value, callback) => {
      // let phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
      if (value == '') {
        callback(new Error('请输入手机号'))
      } else if (!this.isCellPhone(value)) {
        // 引入methods中封装的检查手机格式的方法
        callback(new Error('请输入正确的手机号!'))
      } else {
        callback()
      }
    }
    return {
      sizeForm: {
        enterpriseName: '', //企业名称
        name: '', //企业招聘负责人或者管理员姓名或者学生姓名
        sex: '', //性别
        class: '', //学生班级
        region: '', //企业地址
        type: '1', //用户类型
        phone: '', //电话
      },
      rules: {
        enterpriseName: [
          { required: true, message: '请输入企业名称', trigger: 'blur' },
        ],
        class: [{ required: true, message: '请输入班级', trigger: 'blur' }],
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
        phone: [{ required: true, validator: checkphone, trigger: 'blur' }],
        region: [
          { required: true, message: '请输入所在企业地址', trigger: 'blur' },
        ],
      },
    }
  },
  components: {},
  methods: {
    // 返回登录页
    login() {
      this.$router.push('/login')
    },
    changeType() {
      this.resetForm('sizeForm')
    },
    // 检查手机号
    isCellPhone(val) {
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(val)) {
        return false
      } else {
        return true
      }
    },
    onSubmit(formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          registered(that.sizeForm)
            .then((res) => {
              if (res.data.status == 1) {
                that.$message.success(res.data.msg)
                that.$router.push('/login')
              } else {
                that.$message.error(res.data.msg)
              }
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="less" scoped>
.registered {
  position: relative;
  display: block;
  // padding: 0;
  // margin: 0;
  width: 100%;
  height: 100vh;
  // background-color: pink;
  background: url('../../assets/zhuce_bg.jpg') no-repeat;
  background-size: 100% 100%;
  .title {
    width: 100vh;
    position: absolute;
    left: 50%;
    top: 6.1%;
    transform: translateX(-50%);
    font-size: 24px;
    text-align: center;
    // color: #fff;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .data {
    width: 100vh;
    // height: 100%;
    position: absolute;
    top: 11%;
    left: 50%;
    transform: translateX(-50%);
    // transform: translateY(-80%);
    background-color: rgba(255, 255, 255, 0.7);
  }
}
</style>
