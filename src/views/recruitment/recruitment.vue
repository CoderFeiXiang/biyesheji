<template>
  <div style="height: 100vh">
    <navbar />
    <div class="topTit">湖北省荆州市智慧城市科技股份有限公司（荆州分公司）</div>
    <div class="search">
      <el-input
        size="mini"
        style="width: 180px"
        v-model="input"
        placeholder="请输入内容"
      />
      <el-input
        size="mini"
        style="width: 180px; margin: 0 10px"
        v-model="input"
        placeholder="请输入内容"
      />
      <el-button size="mini" type="primary" icon="el-icon-search"
        >搜索</el-button
      >
      <el-button size="mini" type="primary" icon="el-icon-error"
        >重置</el-button
      >
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-circle-plus"
        @click="addRecruitment"
        >添加招聘</el-button
      >
    </div>
    <div class="content">
      <div class="details">
        <ul>
          <li
            v-for="(item, index) in data"
            :key="index"
            @click="getItemDetail(item)"
          >
            <div class="top">
              <a href="javaScript:;">
                <div style="display: flex">
                  <p style="margin-left: 18px; font-size: 20px">
                    {{ item.zhiweimingc }}
                  </p>
                  <div style="margin: 2px 0 0 8px; color: red">
                    <i class="el-icon-delete infoHover"></i>
                  </div>
                  <p style="margin-left: auto; color: #fd7240">
                    {{ item.money }}
                  </p>
                </div>
                <p
                  style="
                    color: #8d92a1;
                    margin-left: 18px;
                    font-size: 13px;
                    margin-top: 5px;
                  "
                >
                  {{ item.region }} |
                  <span style="margin: 0 5px">{{ item.jinyan }}</span>
                  <span style="margin-left: 5px">
                    <el-divider direction="vertical"></el-divider
                    >{{ item.xueli }}
                  </span>
                </p>
              </a>
              <el-divider class="underline2"></el-divider>
            </div>
            <div class="company">
              <a href="javaScript:;">
                <p>
                  <i class="el-icon-office-building"></i>
                </p>
              </a>
              <a href="javaScript:;">
                <span>{{ item.gongsi }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>{{ item.zhuanye }}</span>
                <el-divider direction="vertical"></el-divider>
                <span>{{ item.shansghi }}</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog title="添加招聘信息" :visible.sync="dialogVisible" width="30%">
      <el-form
        label-position="left"
        ref="form"
        :model="sizeForm"
        label-width="80px"
        size="mini"
      >
        <el-form-item label="职位名称">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="薪资">
          <el-input style="width: 60px" v-model="sizeForm.name" /> -
          <el-input style="width: 60px" v-model="sizeForm.name" /> k
        </el-form-item>
        <el-form-item label="职位名称">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="经验">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="学历">
          <el-input v-model="sizeForm.name" />
        </el-form-item>
        <el-form-item label="职位类别">
          <el-select v-model="sizeForm.region" placeholder="请选择职位类别">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任职要求">
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="textarea"
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
import navbar from '@/components/navbar.vue'
export default {
  data() {
    return {
      input: '',
      dialogVisible: false,
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      textarea: '',
      data: [
        {
          zhiweimingc: 'Bsp驱动开发工程师',
          money: '18k-35k',
          region: '荆州',
          jinyan: '经验不限',
          xueli: '本科',
          gongsi: '智慧城市科技',
          zhuanye: '计算机软件',
          shansghi: '已上市',
        },
        {
          zhiweimingc: 'Java开发工程师',
          money: '20k-35k',
          region: '荆州',
          jinyan: '3-5年',
          xueli: '本科及以上',
          gongsi: '智慧城市科技',
          zhuanye: '计算机软件',
          shansghi: '已上市',
        },
        {
          zhiweimingc: 'Web前端工程师',
          money: '15k-25k',
          region: '荆州',
          jinyan: '经验不限',
          xueli: '本科',
          gongsi: '智慧城市科技',
          zhuanye: '计算机软件',
          shansghi: '已上市',
        },
        {
          zhiweimingc: 'C++开发工程师',
          money: '25k-40k',
          region: '荆州',
          jinyan: '经验不限',
          xueli: '本科',
          gongsi: '智慧城市科技',
          zhuanye: '计算机软件',
          shansghi: '已上市',
        },
        {
          zhiweimingc: '测试开发',
          money: '12k-20k',
          region: '荆州',
          jinyan: '3-5年',
          xueli: '本科',
          gongsi: '智慧城市科技',
          zhuanye: '计算机软件',
          shansghi: '已上市',
        },
        {
          zhiweimingc: '系统集成工程师',
          money: '18k-35k',
          region: '荆州',
          jinyan: '经验不限',
          xueli: '本科',
          gongsi: '智慧城市科技',
          zhuanye: '计算机软件',
          shansghi: '已上市',
        },
        {
          zhiweimingc: '产品管理经理',
          money: '18k-35k',
          region: '荆州',
          jinyan: '3-5年',
          xueli: '本科',
          gongsi: '智慧城市科技',
          zhuanye: '计算机软件',
          shansghi: '已上线',
        },
      ],
    }
  },
  components: {
    navbar,
  },
  methods: {
    addRecruitment() {
      this.dialogVisible = true
    },
  },
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #000;
}
ul li {
  list-style: none;
  display: inline-block;
}
.topTit {
  height: 49px;
  line-height: 49px;
  font-size: 28px;
  // background-color: pink;
  text-align: center;
}
.search {
  height: 50px;
  margin: 0 50px;
  text-align: center;
  // background-color: black;
}
.content {
  width: 90%;
  margin: 0 auto;
  .details {
    margin-top: 10px;
    // margin: 10px 50px 0;
    ul {
      align-items: center;
      justify-content: space-between;
      li {
        display: inline-block;
        width: 32%;
        height: 130px;
        margin-right: 15px;
        margin-bottom: 10px;
        background-color: #fff;
        .top {
          margin-top: 10px;
          padding-right: 5px;
          .el-icon-chat-line-round:before {
            color: #00d7c6;
            margin-left: 8px;
          }
        }
        .underline2 {
          width: 90%;
          margin: 15px auto;
        }
        .company {
          display: flex;
          // margin-top: 30px;
          color: #61687c;
          font-size: 15px;
          .el-icon-office-building:before {
            margin-left: 18px;
          }
        }
      }
    }
    .infoHover:hover {
      // color: #fff;
    }
  }
}
</style>
