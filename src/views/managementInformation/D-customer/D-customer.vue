<template>
  <div>
    <div class="search">
      <el-input size="mini" style="width: 180px" v-model="input" placeholder="请输入内容" />
      <el-input size="mini" style="width: 180px; margin: 0 10px" v-model="input" placeholder="请输入内容" />
      <el-input size="mini" style="width: 180px; margin: 0 10px" v-model="input" placeholder="请输入内容" />
      <el-input size="mini" style="width: 180px; margin: 0 10px" v-model="input" placeholder="请输入内容" />
      <el-button size="mini" type="primary" icon="el-icon-search">搜索</el-button>
      <el-button size="mini" type="primary" icon="el-icon-error">重置</el-button>
    </div>
    <div>
      <vxe-table size="mini" align="center" border show-header-overflow :row-config="{ isHover: true }" show-overflow
        :data="tableData">
        <vxe-column type="seq" title="序号" width="60" />
        <vxe-column field="account" title="账号" />
        <vxe-column field="name" title="名字" />
        <vxe-column field="userType" title="用户类型" />
        <vxe-column field="phone" title="电话" />
        <vxe-column title="状态">
          <template #default="{ row }">
            <vxe-switch v-model="input" open-label="正常" close-label="不可用" disabled></vxe-switch>
          </template>
        </vxe-column>
        <vxe-column title="操作">
          <template #default="{ row }">
            <vxe-button content="编辑" @click="editUser(row)"></vxe-button>
            <vxe-button content="删除"></vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
    <el-dialog title="修改" :visible.sync="dialogVisible" width="30%">
      <el-form label-position="left" ref="form" :model="sizeForm" label-width="70px" size="mini">
        <el-form-item label="账号">
          <el-input v-model="sizeForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="sizeForm.psw"></el-input>
        </el-form-item>
        <el-form-item label="名字">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="sizeForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-select v-model="sizeForm.userType" placeholder="请选择用户类型">
            <el-option label="毕业生" value="3"></el-option>
            <el-option label="招聘人员" value="2"></el-option>
            <el-option label="管理员" value="1"></el-option>
          </el-select>
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
export default {
  data () {
    return {
      dialogVisible: false,
      input: '',
      sizeForm: {
        account: '',
        name: '',
        phone: '',
        userType: ''
      },
      tableData: [
        {
          id: 10001,
          account: 'stu1',
          name: '小红',
          userType: '毕业生',
          phone: '111',
          psw: '000000'
        },
        {
          id: 10001,
          account: 'hr1',
          name: '腾讯',
          userType: '招聘人员',
          phone: '222',
          psw: '000000'
        },
        {
          id: 10001,
          account: '201861687',
          name: '管理员',
          userType: '管理员',
          phone: '333',
          psw: '000000'
        },
      ],
    }
  },
  components: {},
  methods: {
    editUser (row) {
      this.dialogVisible = true
      this.sizeForm = row
    }
  },
}
</script>

<style lang="less" scoped>
.search {
  // height: 100px;
  margin-bottom: 10px;
}
</style>
