import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/modules/auth/views/Login.vue'
import StockDashboardView from '@/modules/dashboard/views/Stock.vue'

const routes = [
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: StockDashboardView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router