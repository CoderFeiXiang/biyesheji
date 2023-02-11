<template>
  <div>
    <div class="search">
      <el-input
        class="searchInput"
        size="mini"
        v-model="search.enterpriseName"
        placeholder="请输入企业名称"
      />
      <el-input
        size="mini"
        class="searchInput"
        v-model="search.name"
        placeholder="请输入负责人姓名"
      />
      <el-input
        size="mini"
        class="searchInput"
        v-model="search.phone"
        placeholder="请输入电话"
      />
      <el-select
        size="mini"
        class="searchInput"
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
        @click="clearSearch"
        size="mini"
        type="primary"
        icon="el-icon-error"
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
        <vxe-column field="enterpriseName" title="企业名称" />
        <vxe-column field="name" title="招聘负责人" />
        <vxe-column field="phone" title="电话" />
        <vxe-column title="账号状态">
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
            <vxe-button content="编辑" @click="editData(row)"></vxe-button>
            <vxe-button content="删除"></vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="企业名称">
          <el-input v-model="sizeForm.enterpriseName"></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="sizeForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="账号状态">
          <el-switch
            v-model="sizeForm.states"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="可用"
            inactive-text="不可用"
            active-value="1"
            inactive-value="0"
          />
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
      title: '',
      dialogVisible: false,
      sizeForm: {
        name: '',
        enterpriseName: '',
        phone: '',
        states: '',
      },
      input: '',
      search: {
        enterpriseName: '',
        name: '',
        phone: '',
        states: '',
        type: 2,
      },
      tableData: [],
    }
  },
  components: {},
  created() {
    this.getCompany(this.search)
  },
  methods: {
    // 重置
    clearSearch() {
      this.search = {
        enterpriseName: '',
        name: '',
        phone: '',
        states: '',
        type: 2,
      }
      this.getCompany(this.search)
    },
    // 搜索
    searchData() {
      this.getCompany(this.search)
    },
    getCompany(data) {
      userData(data)
        .then((res) => {
          if (res.data.status == 1) {
            this.tableData = res.data.data
          }
        })
        .catch((err) => {})
    },
    editData(row) {
      this.title = '修改'
      this.dialogVisible = true
      this.sizeForm = {
        name: row.name,
        enterpriseName: row.enterpriseName,
        phone: row.phone,
        states: row.status,
      }
    },
  },
}
</script>

<style lang="less" scoped>
.search {
  // height: 100px;
  margin-bottom: 10px;
  .searchInput {
    width: 180px;
    margin: 0 10px;
  }
}
</style>
