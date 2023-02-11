<template>
  <div>
    <navbar />
    <div style="position: relative">
      <div style="position: absolute; top: 0; left: 42%; color: #faae00">
        公告：
      </div>
      <div class="shuffling">
        <div
          :class="{ anim: isRoll === true }"
          v-for="(item, index) in contentData"
          :key="index"
          @click="lookShuffling(contentData)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <!-- <template slot="upload">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传简历</el-button>
        </el-upload>
      </template> -->
    <!-- <template slot="zhaopin">
      </template> -->
    <searchbox />
    <el-divider class="underline">热招职位</el-divider>
    <div class="content">
      <div class="title">
        <div v-for="(item, index) in titleContent" :key="index">
          <span
            style="cursor: pointer; padding-bottom: 5px"
            :class="{ curr: active == index }"
            @click="getTitle(item, index)"
            >{{ item }}</span
          >
        </div>
      </div>
      <div class="details">
        <ul>
          <li v-for="item in 8" :key="item" @click="getItemDetail(item)">
            <div class="top">
              <a href="javaScript:;">
                <div style="display: flex">
                  <p style="margin-left: 18px; font-size: 20px">
                    Bsp驱动开发工程师
                  </p>
                  <div>
                    <i class="el-icon-chat-line-round infoHover"></i>
                  </div>
                  <p style="margin-left: auto; color: #fd7240">18-35K</p>
                </div>
                <p
                  style="
                    color: #8d92a1;
                    font-size: 13px;
                    margin-left: 18px;
                    margin-top: 5px;
                  "
                >
                  武汉 |
                  <span style="margin: 0 5px">经验不限</span>
                  <span style="margin-left: 5px">
                    <el-divider direction="vertical"></el-divider> 本科
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
                <span>中科创达软件</span>
                <el-divider direction="vertical"></el-divider>
                <span>计算机软件</span>
                <el-divider direction="vertical"></el-divider>
                <span>已上市</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import searchbox from '@/components/searchbox.vue'
export default {
  data() {
    return {
      isRoll: false,
      contentData: [
        '荆州学院最新就业政策',
        '荆州人才引进计划',
        '关于华为来我校举行招聘会相关信息',
        '六月招聘会',
      ],
      type: null,
      username: '',
      IT_Deatils: [], //默认展示IT信息
      active: 0,
      titleContent: [
        'IT·互联网',
        '金融',
        '房地产·建筑',
        '教育培训',
        '娱乐传媒',
        '医疗健康',
        '法律咨询',
        '供应链·物流',
      ],
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
      hotposition: {
        IT: [],
        financial: [], //金融
        building: [],
        education: [],
        media: [], //传媒
        medical: [], //医疗
        legalAdvice: [], //法律咨询
        logistics: [], //物流
      },
    }
  },
  components: {
    navbar,
    searchbox,
  },
  mounted() {
    setInterval(this.scroll, 2000)
  },
  created() {
    window.scrollTo({
      top: 0,
    })
    // this.type = sessionStorage.getItem('type')
    // this.username = sessionStorage.getItem('username')
  },
  methods: {
    //查看就业政策
    lookShuffling(data) {},
    scroll() {
      this.isRoll = true
      setTimeout(() => {
        this.contentData.push(this.contentData[0])
        this.contentData.shift()
        this.isRoll = false
      }, 500)
    },
    getItemDetail(item) {
      let that = this
      this.$router.push({
        path: '/detail',
        query: {
          id: item,
          type: that.$route.query.type,
        },
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    getTitle(detail, number) {
      this.active = number
      console.log(detail)
    },
  },
}
</script>

<style lang="less" scoped>
.shuffling {
  position: absolute;
  top: 0;
  left: 45%;
  cursor: pointer;
  color: #faae00;
  text-align: left;
  height: 20px;
  overflow: hidden;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
.curr {
  color: #00d7c6;
  border-bottom: 3px solid #00d7c6;
}
.el-button--primary {
  font-size: 14px;

  background-color: #202329;
  border-color: #202329;
}
.el-button--primary:hover {
  color: #00d7c6;
}
.underline {
  width: 15%;
  margin: 24px auto;
  margin-top: 60px;
  .el-divider__text {
    display: block;
    width: 120px;
    font-size: 24px;
    text-align: center;
    padding: 0;
    margin: 0;
    background-color: rgb(245, 245, 245);
  }
}
.content {
  width: 90%;
  margin: 0 auto;
  .el-tabs__nav-wrap {
    background-color: #fff;
  }
  .title {
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #8d92a1;
    background-color: #fff;
    div {
      flex: 1;
      span {
        // width: 100px;
        margin-right: 60px;
      }
    }
  }
  .details {
    margin-top: 10px;
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
      color: #409eff;
    }
  }
}
</style>
