<template>
  <div>
    <div class="search">
      <el-input size="mini" style="width:180px" v-model="input" placeholder="请输入内容" />
      <el-input size="mini" style="width:180px;margin:0 10px" v-model="input" placeholder="请输入内容" />
      <el-input size="mini" style="width:180px;margin:0 10px" v-model="input" placeholder="请输入内容" />
      <el-input size="mini" style="width:180px;margin:0 10px" v-model="input" placeholder="请输入内容" />
      <el-button size="mini" type="primary" icon="el-icon-search">搜索</el-button>
      <el-button size="mini" type="primary" icon="el-icon-error">重置</el-button>
    </div>
    <div>
      <vxe-table ref="tableData" size="mini" align="center" border show-header-overflow :row-config="{isHover: true}"
        show-overflow :data="tableData">
        <vxe-column type="seq" title="序号" width="60" />
        <vxe-column field="name" title="姓名" />
        <vxe-column field="sex" title="性别" />
        <vxe-column field="college" title="学院" />
        <vxe-column field="class" title="班级" />
        <vxe-column title="状态">
          <template #default="{ row }">
            <vxe-switch v-model="input" open-label="正常" close-label="不可用" disabled></vxe-switch>
          </template>
        </vxe-column>
        <vxe-column title="操作">
          <template #default="{ row }">
            <vxe-button content="编辑"></vxe-button>
            <vxe-button content="删除"></vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
      <div class="pager">
        <vxe-pager size="mini"
          :layouts="['Sizes', 'PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'FullJump', 'Total']"
          :current-page="currentPage" :page-size="pageSize" :total="totalResult">
        </vxe-pager>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      totalResult: 4,
      input: '',
      tableData: [
        { id: 10001, name: '张三', college: '信息工程学院', class: '计科5班', sex: '男', address: 'test abc' },
        { id: 10002, name: '李四', college: '机械工程学院', class: '机械5班', sex: '男', address: 'Guangzhou' },
        { id: 10003, name: '王五', college: '管理学院', class: '管理5班', sex: '女', address: 'Shanghai' },
        { id: 10004, name: '老六', college: '外国语学院', class: '商英5班', sex: '女', address: 'Shanghai' }
      ]
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
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
