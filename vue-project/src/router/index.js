import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailLayanan from '@/views/components/common/DetailLayanan.vue'
import DetailBlog from '@/views/components/common/DetailBlog.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
        {
      path: '/detail-layanan/:id',
      name: 'detail-layanan',
      component: DetailLayanan,
    },
        {
      path: '/detail-blog/:id',
      name: 'detail-blog',
      component: DetailBlog,
    },
  ],
})

export default router
