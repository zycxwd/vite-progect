import { createRouter, createWebHistory } from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'
import { isMobileTerminal } from '../utils/flexible'
const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})
export default router
