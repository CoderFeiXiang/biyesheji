<template>
  <div id="searchbox">
    <div class="search-input">
      <el-input
        @keyup.enter.native="enterClick"
        v-model="input"
        placeholder="搜索职位、公司"
        class="input"
      />
      <el-button
        style="background-color: #6adbcf; border-color: #6adbcf"
        size="mini"
        type="primary"
        icon="el-icon-search"
        @click="searchClick"
        >搜索</el-button
      >
    </div>
    <div class="hotsearch">
      <span style="color: rgb(175, 175, 175); font-size: 16px">热门职位:</span>
      <a
        href="javascript:;"
        v-for="(item, index) in hotData"
        :key="index"
        @click="selectHot(item)"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      hotData: [
        'web前端',
        'Java',
        '销售',
        '产品经理',
        '服务员',
        '行政',
        'iOS',
        'Android',
      ],
    }
  },
  components: {},
  mounted() {
    // window.addEventListener('keyup', this.enterClick)
  },
  methods: {
    searchClick() {
      alert('111')
    },
    enterClick(val) {
      debugger
      alert('111')
    },
    selectHot(val) {},
  },
}
</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
a {
  color: #00d7c6;
  text-decoration: none;
}
#searchbox {
  margin: 50px 300px 20px;
  .search-input {
    display: flex;
    .input {
      box-shadow: 0 0 8px -5px;
      color: rgb(175, 175, 175);
    }
  }
  .hotsearch {
    display: flex;
    margin-top: 10px;
    a {
      font-size: 14px;
      margin-left: 20px;
      margin-top: 3px;
    }
  }
}
</style>
