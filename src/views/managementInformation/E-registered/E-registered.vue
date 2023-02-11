<template>
  <div>
    <div class="search">
      <el-input
        size="mini"
        style="width: 180px"
        v-model="search.name"
        placeholder="请输入申请人"
      />
      <el-input
        size="mini"
        style="width: 180px; margin: 0 10px"
        v-model="search.phone"
        placeholder="请输入电话"
      />
      <el-select
        style="margin: 0 10px"
        size="mini"
        v-model="search.type"
        placeholder="请选择申请类型"
      >
        <el-option label="企业" value="2"> </el-option>
        <el-option label="学生" value="3"> </el-option>
        <el-option label="管理员" value="1"> </el-option>
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
        <vxe-column field="name" title="申请人" />
        <vxe-column title="企业名称(班级)">
          <template #default="{ row }">
            <span v-if="row.enterpriseName != ''">{{
              row.enterpriseName
            }}</span>
            <span v-else>{{ row.class }}</span>
          </template>
        </vxe-column>
        <vxe-column field="type" title="用户类型">
          <template #default="{ row }">
            {{
              row.type == 1
                ? '管理员'
                : row.type == 2
                ? '企业'
                : row.type == 3
                ? '毕业生'
                : ''
            }}
          </template>
        </vxe-column>
        <vxe-column field="phone" title="电话" />
        <vxe-column title="操作">
          <template #default="{ row }">
            <vxe-button content="查看" @click="editUser(row)"></vxe-button>
            <vxe-button content="拒绝"></vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
    <el-dialog title="信息" :visible.sync="dialogVisible" width="30%">
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
          <el-select v-model="sizeForm.type" placeholder="请选择用户类型">
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
import { applicationForm } from '@/api/request'
export default {
  data() {
    return {
      search: {
        name: '',
        phone: '',
        type: '',
      },
      dialogVisible: false,
      input: '',
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
    this.getApplicationForm(this.search)
  },
  methods: {
    // 搜索
    searchData() {
      this.getApplicationForm(this.search)
    },
    // 重置
    clearSearch() {
      this.search = {
        name: '',
        phone: '',
        type: '',
      }
      this.getApplicationForm(this.search)
    },
    // 获取申请注册列表
    getApplicationForm(search) {
      applicationForm(search)
        .then((res) => {
          this.tableData = res.data.data
        })
        .catch((err) => {})
    },
    editUser(row) {
      this.dialogVisible = true
      this.sizeForm = row
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
