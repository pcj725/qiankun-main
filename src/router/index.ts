import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Kzt from '../views/kzt/index.vue'
import SubApp from '@/layout/components/SubAppContainer.vue'
import Login from '../views/login/index.vue'
import Layout from '../layout/index.vue'
import notFound from '../404.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/kzt',
        name: 'Kzt',
        component: Kzt,
      },
      // 子应用
      {
        path: '/:pathMatch(.*)*',
        name: 'SubApp',
        component: SubApp,
      },
    ],
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/404',
    name: '404',
    component: notFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
