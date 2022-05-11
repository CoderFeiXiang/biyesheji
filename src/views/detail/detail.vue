<template>
  <div style="height: 2000px; background-color: #ffff">
    <div>
      <navbar />
      <div style="position: relative">
        <div class="job-banner">
          <div class="inner home-inner">
            <div style="margin: 0 80px; display: flex">
              <div style="width: 70%">
                <div style="
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 14px;
                    line-height: 20px;
                    height: 20px;
                  ">
                  招聘中
                </div>
                <div class="name">
                  <h1 title="高级地图数据产品经理">高级地图数据产品经理</h1>
                  <span class="salary">22-30K</span>
                </div>
                <p>
                  <em>武汉</em>
                  <el-divider direction="vertical" />
                  <em>3-5年</em>
                  <el-divider direction="vertical" />
                  <em>本科</em>
                </p>
                <p v-show="type == '3'">
                  <el-button style="
                      background-color: #00d8cb;
                      border: 1px solid #00d8cb;
                      color: #fff;
                    ">投递简历</el-button>
                </p>
              </div>
              <div class="tag-container-new">
                <el-tag style="margin: 5px" class="tagText" v-for="item in employeeBenefits" :key="item" :type="item"
                  effect="plain">
                  {{ item }}
                </el-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="mybox">
      <div id="box" class="box" v-if="boxshow">
        <div class="job-banner" style="height: 120px">
          <div class="inner home-inner">
            <div style="margin: 0 80px; display: flex">
              <div style="width: 70%">
                <div class="name">
                  <h1 title="高级地图数据产品经理">高级地图数据产品经理</h1>
                  <span class="salary">22-30K</span>
                </div>
                <!-- <div>感兴趣</div> -->
                <p v-show="type == '3'">
                  <el-button style="
                      background-color: #00d8cb;
                      border: 1px solid #00d8cb;
                      color: #fff;
                    ">投递简历</el-button>
                </p>
              </div>
              <div class="tag-container-new">
                <el-tag style="margin: 5px" class="tagText" v-for="item in employeeBenefits" :key="item" :type="item"
                  effect="plain">
                  {{ item }}
                </el-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div style="display: flex">
      <div class="job-detail">
        <div class="detail-op">
          <div class="detail-figure">
            <img
              src="https://img.bosszhipin.com/beijin/upload/avatar/20220301/607f1f3d68754fd0c5f97b479fc7ce684400f869c20e0ee3662e01a0c6f3699f6026eed81122daae_s.png?x-oss-process=image/resize,w_100,limit_0"
              alt />
          </div>
          <h2 class="name">
            陈俞桦
            <i class="icon-vip"></i>
          </h2>
          <p class="gray">HR</p>
        </div>
        <div class="detail-content">
          <div class="job-sec">
            <h3>职位描述</h3>
            <div class="text">
              【岗位职责】：
              <p v-for="item in 3" :key="item">{{ item }}</p>
              【岗位职责】：
              <p v-for="item in 3" :key="item">{{ item }}</p>
              <h3>公司介绍</h3>
              <div class="text fold-text"></div>
              <h3>工商信息</h3>
              <el-descriptions title="常相伴（武汉）科技有限公司">
                <el-descriptions-item label="法定代表人：">kooriookami</el-descriptions-item>
                <el-descriptions-item label="注册资金：">18100000000</el-descriptions-item>
                <el-descriptions-item label="成立日期：">苏州市</el-descriptions-item>
                <el-descriptions-item label="企业类型：">
                  <el-tag size="small">学校</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="经营状态：">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
              </el-descriptions>
              <a style="float: right; margin: -40px 20px 0 0; color: #5dd5c8" href="javaScript:;">查看全部</a>
              <h3>工作地址</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="job-sider">
        <div class="sider-company">
          <p class="title">公司基本信息</p>
          <div class="company-info">
            <a href="javaScript:;" title="伴伴">
              <img
                src="https://img.bosszhipin.com/beijin/upload/com/workfeel/20210922/7bf6f160950405e94c64067da096b4e193c7ab264afdbfc373ebbcb0f9fe16aebc98317da336d322.jpg?x-oss-process=image/resize,w_120,limit_0"
                alt />
            </a>
            <a style="color: " href="javaScript:;" title="伴伴招聘"> 伴伴 </a>
          </div>
          <p>
            <i class="el-icon-data-line" />
            不需要融资
          </p>
          <p>
            <i class="el-icon-user" />
            500-999人
          </p>
          <p>
            <i class="el-icon-full-screen" />
            移动互联网
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  data () {
    return {
      employeeBenefits: [
        '节日福利',
        '员工旅游',
        '带薪年假',
        '股票期权',
        '年终奖',
        '定期体检',
      ], //员工福利
      boxshow: false,
      type: '',
    }
  },
  components: { navbar },
  created () {
    this.listenerFunction()
    window.scrollTo({
      top: 0,
    })
    this.type = sessionStorage.getItem('type')
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.listenerFunction)
  },
  mounted () { },
  methods: {
    togglebox () {
      this.boxshow = true
      document.getElementById('box').style.display = 'none'
    },
    listenerFunction (e) {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    handleScroll () {
      if (window.pageYOffset >= 288 && this.boxshow == false) {
        this.togglebox()
      }
      if (window.pageYOffset <= 288) {
        this.boxshow = false
      }
    },
  },
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.mybox-enter-active,
.mybox-leave-active {
  /* opacity 透明度 */
  transition: opacity 0.6s;
}
/* .fade-leave-active, 2.1.8 版本以下 */
.mybox-enter,
.mybox-leave-to {
  opacity: 0;
}

.box {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 150px;
  background: #444c60;
  z-index: 9999;
}

.job-banner {
  height: 28vh;
  padding: 24px 0;
  // border: 1px solid red;
  background: #444c60
    url(https://static.zhipin.com/zhipin-geek/v509/web/geek/images/detail-bg.jpg)
    center center no-repeat;
  color: #fff;
  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 22px;
    line-height: 20px;
  }

  .inner {
    width: 1184px;
  }
  .home-inner {
    max-width: 1184px;
  }
  .name {
    font-size: 32px;
    line-height: 45px;
    padding: 8px 0;
    color: #fff;
    font-weight: 400;
    h1 {
      line-height: 45px;
      vertical-align: middle;
      font-size: 32px;
      max-width: 380px;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      font-weight: 400;
      margin-right: 10px;
      overflow: hidden;
    }
  }
  .salary {
    display: inline-block;
    vertical-align: middle;
    color: #fa6a43;
    height: 42px;
    font-size: 30px;
    line-height: 42px;
    font-weight: 600;
  }
}
.tag-container-new {
  // line-height: 0;
  // margin-top: 32px;
  // // padding-left: 50px;
  // text-align: right;
  // box-sizing: border-box;
  // width: 504px;
  // position: relative;
  // float: right;
  .tagText {
    background-color: transparent;
    border-radius: 15px;
    border: 1px solid #5ed5c8;
    color: #5ed5c8;
  }
}
.job-detail {
  width: 70%;
  // border: 1px solid pink;
  border-right: 1px #f5f7f9 solid;
  margin-left: 80px;
  .detail-op {
    .detail-figure {
      float: left;
      img {
        margin-right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        vertical-align: top;
        border: none;
      }
    }
    .name {
      margin-top: 5px;
      font-size: 20px;
      color: #424a5e;
      font-weight: 400;
    }
    .gray {
      color: #9fa3af;
    }
  }
  .detail-content {
    clear: left;
    .job-sec {
      position: relative;
      h3 {
        font-weight: 700;
        font-size: 15px;
        color: #424a5e;
        line-height: 50px;
        padding: 0 0 10px 0;
        margin-bottom: 0;
        background: url(https://static.zhipin.com/zhipin-geek/v509/web/geek/images/line-sec.png)
          0 45px no-repeat;
      }
      .text {
        word-break: break-all;
        word-wrap: break-word;
        color: #61687c;
        line-height: 36px;
      }
      .fold-text {
        max-height: 180px;
      }
    }
  }
}
.job-sider {
  width: 30%;
  padding: 20px 50px;
  // border: 1px solid black;
  .sider-company {
    .title {
      line-height: 25px;
      margin-bottom: 25px;
      font-size: 15px;
      font-weight: 500;
      color: #414a60;
    }
    img {
      width: 60px;
      height: 60px;
      float: left;
      margin-right: 18px;
      border-radius: 10px;
      border: none;
    }
    p {
      line-height: 20px;
      margin-bottom: 26px;
      color: #414a60;
      font-size: 14px;
      i {
        font-size: 20px;
        display: inline-block;
        vertical-align: -4px;
        height: 17px;
        margin-right: 25px;
      }
    }
  }
  .company-info {
    overflow: hidden;
    line-height: 60px;
    margin-bottom: 27px;
    a {
      color: #3e4a60;
    }
    a:hover {
      color: #00d7c6;
    }
  }
}
</style>
