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
        <vxe-column field="enterpriseName" title="企业名称" />
        <vxe-column field="jobName" title="职位名称" />
        <vxe-column field="jobRequirements" title="职位要求" show-overflow="ellipsis" />
        <vxe-column field="region" title="工作地点" />
        <vxe-column field="number" title="招聘名额" />
        <vxe-column field="money" title="薪资（k）" />
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
        {
          id: 10001,
          enterpriseName: '华为',
          jobName: 'java开发',
          jobRequirements: '*******',
          region: '武汉',
          number: '3',
          money: '8-10',
        },
        {
          id: 10002,
          enterpriseName: '腾讯',
          jobName: '大数据分析',
          jobRequirements: '*****',
          region: '上海',
          number: '5',
          money: '12-15',
        },
        {
          id: 10003,
          enterpriseName: '阿里',
          jobName: 'java架构师',
          jobRequirements: '****',
          region: '深圳',
          number: '2',
          money: '15-18',
        },
        {
          id: 10004,
          enterpriseName: '微软',
          jobName: 'c++开发工程师',
          jobRequirements: '****',
          region: '北京',
          number: '6',
          money: '20-25',
        },
      ],
    }
  },
  components: {},
  methods: {},
}
</script>

<style lang="less" scoped>
.search {
  // height: 100px;
  margin-bottom: 10px;
}
</style>
