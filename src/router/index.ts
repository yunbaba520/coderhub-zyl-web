import { createRouter, createWebHashHistory } from 'vue-router'
import { localCache } from '@/utils/cache'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/notFound/not-found.vue')
    }
  ]
})
router.beforeEach((to, from) => {
  //跳转非login页面需要判断是否登录
  if (to.path !== '/login') {
    if (localCache.getCache('login/token')) {
      return true
    } else {
      return '/login'
    }
  }
})
export default router
