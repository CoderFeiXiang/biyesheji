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
      <vxe-table size="mini" align="center" border show-header-overflow :row-config="{isHover: true}" show-overflow
        :data="tableData">
        <vxe-column type="seq" title="序号" width="60" />
        <vxe-column field="name" title="企业名称" />
        <vxe-column field="officer" title="招聘负责人" />
        <vxe-column field="phone" title="电话" />
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      tableData: [
        { id: 10001, name: '华为', officer: '华为招聘', phone: '1111', age: 28, address: 'test abc' },
        { id: 10002, name: '腾讯', officer: '腾讯招聘', phone: '2222', age: 22, address: 'Guangzhou' },
        { id: 10003, name: '阿里', officer: '阿里招聘', phone: '3333', age: 32, address: 'Shanghai' },
        { id: 10004, name: '微软', officer: '微软招聘', phone: '4444', age: 24, address: 'Shanghai' }
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
</style>
