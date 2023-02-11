<template>
  <div style="height: 100%">
    <div>
      <navbar />
    </div>
    <div>
      <el-container>
        <el-aside width="200px">
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#00daca"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            router
          >
            <el-submenu
              style="overflow: hidden"
              :index="index"
              v-for="(item, index) in Routers"
              :key="index"
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.label }}</span>
              </template>
              <el-menu-item-group v-show="item.children">
                <el-menu-item
                  v-for="(ite, inde) in item.children"
                  :key="inde"
                  :index="ite.path"
                >
                  <i :class="ite.icon"></i>
                  <span>{{ ite.label }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <!-- <el-header style="height:50px">
            <navbar />
          </el-header> -->
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  data() {
    return {
      Routers: [
        {
          label: '学生管理',
          icon: 'el-icon-user-solid',
          children: [
            {
              label: '学生信息列表',
              path: '/A-Business/A-Business',
              icon: 'el-icon-tickets',
            },
          ],
        },
        {
          label: '企业管理',
          icon: 'el-icon-s-custom',
          children: [
            {
              label: '企业信息列表',
              path: '/B-Extension/B-Extension',
              icon: 'el-icon-office-building',
            },
            {
              label: '企业招聘信息列表',
              path: '/C-Management/C-Management',
              icon: 'el-icon-tickets',
            },
          ],
        },
        {
          label: '系统设置',
          icon: 'el-icon-s-tools',
          children: [
            {
              label: '管理员管理',
              path: '/D-customer/D-customer',
              icon: 'el-icon-user',
            },
            {
              label: '申请注册管理',
              path: '/E-registered/E-registered',
              icon: 'el-icon-loading',
            },
          ],
        },
        {
          label: '招聘会信息通告',
          icon: 'el-icon-s-custom',
          children: [
            {
              label: '信息列表',
              path: '/F-jobFFairInfo/F-jobFFairInfo',
              icon: 'el-icon-tickets',
            },
          ],
        },
      ],
    }
  },
  components: {
    navbar,
  },
  created() {},
  methods: {},
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #545c64;
  color: #333;
  height: 50px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 92vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
