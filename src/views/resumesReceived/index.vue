<template>
  <div style="height:100vh">
    <navbar />
    <div class="topTit">
      公司名
    </div>
    <div class="search">
      <el-input size="mini" style="width:180px" v-model="input" placeholder="请输入内容" />
      <el-input size="mini" style="width:180px;margin:0 10px" v-model="input" placeholder="请输入内容" />
      <el-button size="mini" type="primary" icon="el-icon-search">搜索</el-button>
      <el-button size="mini" type="primary" icon="el-icon-error">重置</el-button>
    </div>
    <div class="content">
      <vxe-table align="center" size="mini" border show-header-overflow show-overflow :row-config="{isHover: true}"
        :data="tableData">
        <vxe-column type="seq" title="序号" width="60"></vxe-column>
        <vxe-column field="college" title="学院"></vxe-column>
        <vxe-column field="class" title="班级"></vxe-column>
        <vxe-column field="name" title="姓名"></vxe-column>
        <vxe-column field="age" title="年龄"></vxe-column>
        <vxe-column field="sex" title="性别"></vxe-column>
        <vxe-column field="address" title="操作">
          <template #default="{ row }">
            <vxe-button size="mini" @click="addRecruitment" content="详情"></vxe-button>
            <vxe-button size="mini" content="忽略"></vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
    <el-dialog title="求职者信息" :visible.sync="dialogVisible" width="30%">
      <el-form label-position="left" ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="姓名">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="生日">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="微信号">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="求职状态">
          <el-select v-model="sizeForm.region" placeholder="请选择职位类别">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <span @click="aaa($route.query.id, $route.query.type)">查看简历</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  data () {
    return {
      input: '',
      dialogVisible: false,
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      textarea: '',
      tableData: [
        { id: 10001, name: '张三', college: '信息工程学院', class: '计科5班', sex: '男', age: 20, address: 'test abc' },
        { id: 10002, name: '李四', college: '机械工程学院', class: '机械5班', sex: '男', age: 21, address: 'Guangzhou' },
        { id: 10003, name: '王五', college: '管理学院', class: '管理5班', sex: '女', age: 20, address: 'Shanghai' },
        { id: 10004, name: '老六', college: '外国语学院', class: '商英5班', sex: '女', age: 19, address: 'Shanghai' }
      ]
    }
  },
  components: {
    navbar
  },
  methods: {
    aaa (id, type) {
      this.$router.push({
        path: '/resume',
        query: {
          id,
          type,
        },
      })
    },
    addRecruitment () {
      this.dialogVisible = true
    }
  }
}
</script>

<style lang='less' scoped>
a {
  text-decoration: none;
  color: #000;
}
ul li {
  list-style: none;
  display: inline-block;
}
.topTit {
  height: 49px;
  line-height: 49px;
  font-size: 28px;
  // background-color: pink;
  text-align: center;
}
.search {
  height: 50px;
  margin: 0 50px;
  text-align: center;
  // background-color: black;
}
.content {
  margin: 0 50px;
}
</style>
