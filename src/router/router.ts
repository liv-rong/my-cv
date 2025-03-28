import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './index.ts'

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
  next()
})

router.afterEach((to) => {
  // SiteUtils.setDocumentTitle(to.meta.title)
  // processRouteTag(to)
  NProgress.done()
})

export default router

// export * from './prefix'
