import NProgress from 'nprogress'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

router.beforeEach((_, __, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router

export function setupRouter(app: App) {
  app.use(router)
}
