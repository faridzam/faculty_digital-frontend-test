import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/modules/auth/views/Login.vue'
import StockDashboardView from '@/modules/dashboard/views/Stock.vue'
import { checkAuth } from '../utils/auth'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: StockDashboardView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _, next) => {
  if (to.path === '/login' && await checkAuth() === true) {
    next({ path: '/dashboard' })
  } else if(to.path === '/dashboard' && await checkAuth() === false) {
    next({path: '/login'})
  } else {
    next()
  } 
})

export default router