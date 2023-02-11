<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        {{
          $route.query.type == '1' || type == '1'
            ? '管理员'
            : $route.query.type == '2' || type == '2'
            ? 'HR'
            : $route.query.type == '3' || type == '3'
            ? '小骆同学'
            : ''
        }},你好
      </div>
      <div class="city"></div>
      <div class="nav">
        <ul>
          <li
            @click="itemClick(item)"
            class="item"
            v-for="(item, index) in navData"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="user-nav">
        <div class="btns">
          <slot name="upload"></slot>
          <div class="search">
            <el-input
              v-if="$route.path == '/detail'"
              class="sear"
              size="small"
              placeholder="搜索职位、公司"
              v-model="searchPosition"
            >
              <i
                @click="searchPost"
                slot="suffix"
                class="el-input__icon el-icon-search"
              ></i>
            </el-input>
          </div>
          <div>
            <el-link
              @click="managementInformation($route.query.id, $route.query.type)"
              v-if="$route.query.type == '1' || type == '1'"
              :underline="false"
              style="color: #fff; font-size: 16px"
            >
              信息管理
            </el-link>
            <el-link
              v-if="$route.query.type == '2' || type == '2'"
              :underline="false"
              @click="recruitment($route.query.id, $route.query.type)"
              style="color: #fff; font-size: 16px"
              >我要招聘
            </el-link>
            <el-link
              v-if="$route.query.type == '2' || type == '2'"
              :underline="false"
              @click="resumesReceived($route.query.id, $route.query.type)"
              style="color: #fff; font-size: 16px; margin-left: 30px"
              >收到简历</el-link
            >
            <el-link
              @click="myResume($route.query.id, $route.query.type)"
              v-if="$route.query.type == '3' || type == '3'"
              :underline="false"
              style="color: #fff; font-size: 16px"
            >
              我的简历</el-link
            >
          </div>
          <slot name="xinxi"></slot>
        </div>
      </div>
      <div
        style="
          height: 49px;
          line-height: 49px;
          color: #fff;
          font-size: 16px;
          margin-left: 11%;
          cursor: pointer;
        "
        @click="logOut"
      >
        退出
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navData: ['首页', '职位', '校园', '公司', '资讯', '发现'],
      searchPosition: '',
      type: '',
    }
  },
  components: {},
  created() {
    this.type = sessionStorage.getItem('type')
  },
  methods: {
    // 招聘人员-》收到简历界面
    resumesReceived(id, type) {
      this.$router.push({
        path: '/resumesReceived',
        query: {
          id,
          type,
        },
      })
    },
    // 招聘人员-》我要招聘界面
    recruitment(id, type) {
      this.$router.push({
        path: '/recruitment',
        query: {
          id,
          type,
        },
      })
    },
    // 退出登录
    logOut() {
      sessionStorage.clear()
      this.$router.push('/login')
    },
    itemClick(item) {
      if (item == '校园') {
        window.location.href = 'https://www.jzxy.net.cn/'
      }
      if (item == '首页') {
        this.$router.push({
          path: '/home',
          query: {
            id: sessionStorage.getItem('id'),
            type: sessionStorage.getItem('type'),
          },
        })
      }
    },
    searchPost() {
      alert('搜索')
    },
    // 管理员--》信息管理
    managementInformation(id, type) {
      this.$router.push({
        path: '/A-Business/A-Business',
        query: {
          id,
          type,
        },
      })
    },
    myResume(id, type) {
      this.$router.push({
        path: '/resume',
        query: {
          id,
          type,
        },
      })
    },
    // 文件上传
    // handleRemove(file, fileList) {
    //   console.log(file, fileList)
    // },
    // handlePreview(file) {
    //   console.log(file)
    // },
    // handleExceed(files, fileList) {
    //   this.$message.warning(
    //     `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
    //       files.length + fileList.length
    //     } 个文件`
    //   )
    // },
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`)
    // },
  },
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.header {
  display: flex;
  height: 47px;
  background-color: #202329;
  border: 1px solid transparent;
  .logo {
    display: block;
    // width: 180px;
    height: 36px;
    line-height: 36px;
    margin: 5px;
    margin-left: 60px;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    color: #00d7c6;
  }
  .city {
    width: 150px;
  }
  .nav {
    font-size: 0;
    float: left;
    margin-left: 15px;
    height: 49px;
    line-height: 49px;
    ul {
      li {
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        color: #00d7c6;
        margin: 0 20px;
        cursor: pointer;
      }
    }
  }
  .user-nav {
    float: right;
    margin-left: 5px;
    height: 49px;
    line-height: 49px;
    .btns {
      // margin-left: 100px;
      .input-with-select .el-input-group__prepend {
        background-color: #fff;
      }
      display: flex;
      .el-button--primary {
        color: #fff;
        background-color: #202329;
        border-color: #202329;
        font-size: 14px;
      }
      .el-button--primary :hover {
        color: #00d7c6;
      }
      .el-button {
        margin-right: 20px;
      }
      .zhaopin {
        .el-link.el-link--default {
          color: #fff;
        }
      }
      .el-link.el-link--default :hover {
        color: #00d7c6;
      }
      .search {
        color: #fff;
        .sear {
          width: 180px;
          margin: 0 5px;
        }
        .el-icon-search:before {
          cursor: pointer !important;
        }
      }
    }
  }
}
</style>
