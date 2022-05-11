<template>
  <div style="height: 100%">
    <div>
      <navbar />
    </div>
    <div>
      <el-container>
        <el-aside width="200px">
          <el-menu background-color="#545c64" text-color="#fff" active-text-color="#00daca"
            :default-active="$route.path" class="el-menu-vertical-demo" router>
            <el-submenu :index="index" v-for="(item,index) in Routers" :key="index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.label}}</span>
              </template>
              <el-menu-item-group v-show="item.children">
                <el-menu-item v-for="(ite,inde) in item.children" :key="inde" :index="ite.path">
                  {{ite.label}}
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
  data () {
    return {
      Routers: [
        {
          label: '学生管理',
          icon: 'el-icon-user-solid',
          children: [
            { label: '学生信息列表', path: '/A-Business/A-Business' },
          ],
        },
        {
          label: '企业管理',
          icon: 'el-icon-s-custom',
          children: [
            { label: '企业信息列表', path: '/B-Extension/B-Extension' },
            { label: '企业招聘信息列表', path: '/C-Management/C-Management' },
          ]
        },
        {
          label: '系统设置',
          icon: 'el-icon-s-tools',
          children: [
            { label: '系统人员管理', path: '/D-customer/D-customer' },
          ]
        }
      ],
    }
  },
  components: {
    navbar,
  },
  created () {
  },
  methods: {
  },
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
