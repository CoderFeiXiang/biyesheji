<template>
  <div>
    <div class="search">
      <el-input
        size="mini"
        style="width: 180px"
        v-model="search.userId"
        placeholder="请输入账号"
      />
      <el-input
        size="mini"
        style="width: 180px; margin: 0 10px"
        v-model="search.name"
        placeholder="请输入名字"
      />
      <el-input
        size="mini"
        style="width: 180px; margin: 0 10px"
        v-model="search.phone"
        placeholder="请输入电话"
      />
      <el-select
        size="mini"
        style="width: 180px; margin: 0 10px"
        v-model="search.states"
        placeholder="请选择帐号状态"
      >
        <el-option label="可用" value="1"> </el-option>
        <el-option label="不可用" value="0"> </el-option>
      </el-select>
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-search"
        @click="searchData"
        >搜索</el-button
      >
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-error"
        @click="clearSearch"
        >重置</el-button
      >
    </div>
    <div>
      <vxe-table
        size="mini"
        align="center"
        border
        show-header-overflow
        :row-config="{ isHover: true }"
        show-overflow
        :data="tableData"
      >
        <vxe-column type="seq" title="序号" width="60" />
        <vxe-column field="userId" title="账号" />
        <vxe-column field="name" title="名字" />
        <vxe-column field="phone" title="电话" />
        <vxe-column title="状态">
          <template #default="{ row }">
            <el-switch
              v-model="row.states"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="可用"
              inactive-text="不可用"
              active-value="1"
              inactive-value="0"
              disabled
            />
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
      <el-form
        label-position="left"
        ref="form"
        :model="sizeForm"
        label-width="70px"
        size="mini"
      >
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
        <el-button size="mini" type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { userData } from '@/api/request'
export default {
  data() {
    return {
      dialogVisible: false,
      input: '',
      search: {
        userId: '',
        name: '',
        phone: '',
        type: 1,
        states: '',
      },
      sizeForm: {
        account: '',
        name: '',
        phone: '',
        userType: '',
      },
      tableData: [],
    }
  },
  components: {},
  created() {
    this.getAdmin(this.search)
  },
  methods: {
    // 重置
    clearSearch() {
      this.search = {
        userId: '',
        name: '',
        phone: '',
        type: 1,
        states: '',
      }
      this.getAdmin(this.search)
    },
    // 搜索
    searchData() {
      this.getAdmin(this.search)
    },
    editUser(row) {
      this.dialogVisible = true
      this.sizeForm = row
    },
    getAdmin(search) {
      userData(search)
        .then((res) => {
          if (res.data.status == 1) {
            this.tableData = res.data.data
          }
        })
        .catch((err) => {})
    },
  },
}
</script>

<style lang="less" scoped>
.search {
  // height: 100px;
  margin-bottom: 10px;
}
</style>
