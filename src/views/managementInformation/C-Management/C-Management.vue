<template>
  <div>
    <div class="search">
      <el-input
        size="mini"
        style="width: 180px"
        v-model="input"
        placeholder="请输入企业名称"
      />
      <el-input
        size="mini"
        style="width: 180px; margin: 0 10px"
        v-model="input"
        placeholder="请输入职位名称"
      />
      <el-input
        size="mini"
        style="width: 180px; margin: 0 10px 0 0"
        v-model="input"
        placeholder="请输入工作地点"
      />
      <el-button size="mini" type="primary" icon="el-icon-search"
        >搜索</el-button
      >
      <el-button size="mini" type="primary" icon="el-icon-error"
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
        <vxe-column field="jobName" title="职位名称" />
        <vxe-column
          field="jobRequirements"
          title="职位要求"
          show-overflow="ellipsis"
        />
        <vxe-column field="region" title="工作地点" />
        <vxe-column field="number" title="招聘名额" />
        <vxe-column field="money" title="薪资（k）" />
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
  data() {
    return {
      input: '',
      tableData: [
        {
          id: 10001,
          enterpriseName: '湖北省荆州市智慧城市科技股份有限公司（荆州分公司）',
          jobName: 'Bsp驱动开发工程师',
          jobRequirements: '*******',
          region: '荆州',
          number: '3',
          money: '8-10',
        },
        {
          id: 10002,
          enterpriseName: '湖北省荆州市智慧城市科技股份有限公司（荆州分公司）',
          jobName: 'Java开发工程师',
          jobRequirements: '*****',
          region: '荆州',
          number: '8',
          money: '18-35',
        },
        {
          id: 10003,
          enterpriseName: '湖北省荆州市智慧城市科技股份有限公司（荆州分公司）',
          jobName: 'Web前端工程师',
          jobRequirements: '****',
          region: '荆州',
          number: '2',
          money: '15k-25',
        },
        {
          id: 10004,
          enterpriseName: '湖北省荆州市智慧城市科技股份有限公司（荆州分公司）',
          jobName: 'C++开发工程师',
          jobRequirements: '****',
          region: '荆州',
          number: '6',
          money: '25-40',
        },
        {
          id: 10004,
          enterpriseName: '湖北省荆州市智慧城市科技股份有限公司（荆州分公司）',
          jobName: '测试开发',
          jobRequirements: '****',
          region: '荆州',
          number: '5',
          money: '12-20',
        },
        {
          id: 10004,
          enterpriseName: '湖北省荆州市智慧城市科技股份有限公司（荆州分公司）',
          jobName: '系统集成工程师',
          jobRequirements: '****',
          region: '荆州',
          number: '2',
          money: '18-35',
        },
        {
          id: 10004,
          enterpriseName: '湖北省荆州市智慧城市科技股份有限公司（荆州分公司）',
          jobName: '产品管理经理',
          jobRequirements: '****',
          region: '荆州',
          number: '6',
          money: '18-35',
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
