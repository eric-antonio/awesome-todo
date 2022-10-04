
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Caminhos da nossa pagina ou url's
      {
        // Pagina principal
        path: '',
        component: () => import('pages/PageTodo.vue')
      },
      {
        // Pagina de Configuraçoes!
        path: '/settings',
        component: () => import('pages/PageSettings.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
