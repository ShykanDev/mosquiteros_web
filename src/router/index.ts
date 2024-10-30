import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/beneficios',
      name: 'beneficts',
      component: () => import('../views/Beneficts.vue'),
    },
    {
      path: '/imagenes',
      name: 'images',
      component: () => import('../views/ImagesView.vue'),
    },
  ],
})

export default router
