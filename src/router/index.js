import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Stock6Sign2403fm',
      name: 'Stock6Sign2403fm',
      component: () => import('../views/HomeViewfm.vue')
    },
    {
      path: '/Stock6Sign2403go',
      name: 'Stock6Sign2403go',
      component: () => import('../views/HomeViewgo.vue')
    },
    {
      path: '/Stock6Sign2403djm',
      name: 'Stock6Sign2403djm',
      component: () => import('../views/HomeViewdjm.vue')
    }
  ]
})

export default router
