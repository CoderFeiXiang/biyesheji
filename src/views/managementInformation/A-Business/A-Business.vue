<template>
  <div>
    <div class="search">
      <el-input
        size="mini"
        style="width: 180px"
        v-model="search.name"
        placeholder="请输入姓名"
      />
      <el-select
        style="width: 180px; margin: 0 10px"
        size="mini"
        v-model="search.sex"
        placeholder="请选择性别"
      >
        <el-option label="男" value="1" />
        <el-option label="女" value="0" />
      </el-select>
      <el-input
        size="mini"
        style="width: 180px; margin: 0 10px"
        v-model="search.college"
        placeholder="请输入学院"
      />
      <el-input
        size="mini"
        style="width: 180px; margin: 0 10px"
        v-model="search.class"
        placeholder="请输入班级"
      />
      <el-button
        @click="searchStudent"
        size="mini"
        type="primary"
        icon="el-icon-search"
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
        ref="tableData"
        size="mini"
        align="center"
        border
        show-header-overflow
        :row-config="{ isHover: true }"
        show-overflow
        :data="tableData"
      >
        <vxe-column type="seq" title="序号" width="60" />
        <vxe-column field="name" title="姓名" />
        <vxe-column field="sex" title="性别">
          <template #default="{ row }">
            {{ row.sex == '1' ? '男' : '女' }}
          </template>
        </vxe-column>
        <vxe-column field="college" title="学院" />
        <vxe-column field="class" title="班级" />
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
            <vxe-button content="编辑" @click="editDia(row)"></vxe-button>
            <vxe-button content="删除"></vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
      <div class="pager">
        <vxe-pager
          size="mini"
          :layouts="[
            'Sizes',
            'PrevJump',
            'PrevPage',
            'Number',
            'NextPage',
            'NextJump',
            'FullJump',
            'Total',
          ]"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="totalResult"
        >
        </vxe-pager>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="学生姓名">
          <el-input v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学生性别">
          <el-select v-model="sizeForm.sex" placeholder="请选择活动区域">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学院">
          <el-input v-model="sizeForm.college"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="sizeForm.class"></el-input>
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
      search: {
        name: '',
        sex: '',
        college: '',
        class: '',
        type: 3,
      },
      sizeForm: {
        name: '',
        sex: '',
        college: '',
        class: '',
      },
      currentPage: 1,
      pageSize: 10,
      totalResult: 2,
      input: '',
      tableData: [],
      dialogVisible: false,
      title: '',
    }
  },
  components: {},
  created() {
    this.getStudentData(this.search)
  },
  methods: {
    // 编辑
    editDia(row) {
      this.title = '编辑'
      this.dialogVisible = true
      this.sizeForm = {
        name: row.name,
        sex: row.sex,
        college: row.college,
        class: row.class,
        states: row.states,
      }
    },
    // 重置
    clearSearch() {
      this.search = {
        name: '',
        sex: '',
        college: '',
        class: '',
        type: 3,
      }
      this.getStudentData(this.search)
    },
    // 查找学生
    searchStudent() {
      this.getStudentData(this.search)
    },
    // 获取学生信息
    getStudentData(data) {
      let that = this
      userData(data)
        .then((res) => {
          that.tableData = res.data.data
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
.pager {
  // width: 100%;
  // position: fixed;
  // bottom: 10px;
}
</style>
