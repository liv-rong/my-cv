export const routes = [
  {
    path: '/',
    name: 'base-layout',
    component: () => import('@/layouts/BaseLayout/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home/index.vue'),
        meta: {
          title: 'home',
          icon: 'NavigationIcon'
        }
      },
      {
        path: '/resumes',
        name: 'resumes',
        component: () => import('@/pages/resumes/index.vue'),
        meta: {
          title: 'resumes',
          icon: 'resumes'
        }
      },
      {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('@/pages/edit/index.vue'),
        meta: {
          title: 'edit',
          icon: 'edit'
        }
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/error-pages/404/index.vue'),
        meta: {
          title: '404',
          icon: 'NotFoundIcon'
        }
      }
    ]
  }
]
