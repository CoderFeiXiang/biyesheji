import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Home'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/detail/detail'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('@/views/resume/resume'),
  },
  {
    path: '/registered',
    name: 'Registered',
    component: () => import('@/views/registered/Registered'),
  },
  {
    path: '/managementInformation',
    name: 'ManagementInformation',
    component: () => import('@/views/managementInformation/index'),
    children: [
      {
        path: '/A-Business/A-Business',
        component: () =>
          import('@/views/managementInformation/A-Business/A-Business.vue'),
      },
      {
        path: '/B-Extension/B-Extension',
        component: () =>
          import('@/views/managementInformation/B-Extension/B-Extension.vue'),
      },
      {
        path: '/C-Management/C-Management',
        component: () =>
          import('@/views/managementInformation/C-Management/C-Management.vue'),
      },
      {
        path: '/D-customer/D-customer',
        component: () =>
          import('@/views/managementInformation/D-customer/D-customer.vue'),
      },
      {
        path: '/E-registered/E-registered',
        component: () =>
          import('@/views/managementInformation/E-registered/E-registered.vue'),
      },
      {
        path: '/F-jobFFairInfo/F-jobFFairInfo',
        component: () =>
          import(
            '@/views/managementInformation/F-jobFFairInfo/F-jobFFairInfo.vue'
          ),
      },
    ],
  },
  {
    path: '/recruitment',
    name: 'Recruitment',
    component: () => import('@/views/recruitment/recruitment'),
  },
  {
    path: '/resumesReceived',
    name: 'ResumesReceived',
    component: () => import('@/views/resumesReceived/index'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (!sessionStorage.getItem('id') && !sessionStorage.getItem('type')) {
    if (to.path !== '/login') {
      if (to.path == '/registered') {
        next()
      } else {
        next('/login')
        alert('请先登录')
      }
    }
  }
  next()
})

export default router
