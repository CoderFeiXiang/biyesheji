<template>
  <div>
    <div class="search">
      <el-input
        size="mini"
        style="width: 180px"
        v-model="search.jyzdTitle"
        placeholder="请输入名称"
      />
      <el-input
        size="mini"
        style="width: 180px; margin: 0 10px"
        v-model="search.region"
        placeholder="请输入招聘地点"
      />
      <el-date-picker
        size="mini"
        style="width: 180px; margin: 0 10px 0 0"
        v-model="search.data"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
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
      <el-button
        @click="addJobFair"
        size="mini"
        type="primary"
        icon="el-icon-error"
        >添加招聘会信息</el-button
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
        <vxe-column field="jyzdTitle" title="名称" />
        <vxe-column field="time" title="招聘时间">
          <template #default="{ row }">
            {{ row.startTime }} ~ {{ row.endTime }}
          </template>
        </vxe-column>
        <vxe-column field="region" title="招聘地点" />
        <vxe-column field="teacher" title="负责老师" />
        <vxe-column field="phone" title="老师电话" />
        <vxe-column title="操作">
          <template #default="{ row }">
            <vxe-button content="查看" @click="editUser(row)"></vxe-button>
            <vxe-button content="删除"></vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <el-form
        label-position="left"
        ref="form"
        :model="sizeForm"
        label-width="70px"
        size="mini"
      >
        <el-form-item label="单位名称">
          <el-input v-model="sizeForm.account"></el-input>
        </el-form-item>
        <el-form-item label="单位地址">
          <el-input v-model="sizeForm.psw"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="sizeForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="招聘人数">
          <el-input v-model="sizeForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="sizeForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="单位简介">
          <el-input
            v-model="sizeForm.phone"
            type="textarea"
            :rows="2"
          ></el-input>
        </el-form-item>
        <el-form-item label="招聘条件">
          <el-input
            v-model="sizeForm.phone"
            type="textarea"
            :rows="2"
          ></el-input>
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
import { jobFairInformation } from '@/api/request'
export default {
  data() {
    return {
      search: {
        jyzdTitle: '',
        region: '',
        data: '',
      },
      title: '',
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
    this.getJobFairInformation(this.search)
  },
  methods: {
    // 搜索
    searchData() {
      this.getJobFairInformation(this.search)
    },
    // 重置
    clearSearch() {
      this.getJobFairInformation(this.search)
    },
    // 获取就业信息
    getJobFairInformation(search) {
      jobFairInformation(search)
        .then((res) => {
          if (res.data.status == 0) {
            for (let i in res.data.data) {
              let start = res.data.data[i].startTime.substring(0, 10)
              let end = res.data.data[i].endTime.substring(0, 10)
              res.data.data[i].startTime = start
              res.data.data[i].endTime = end
            }
            this.tableData = res.data.data
          }
        })
        .catch((err) => {})
    },
    addJobFair() {
      this.title = '发布招聘会信息'
      this.dialogVisible = true
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
