import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailLayanan from '@/views/components/common/DetailLayanan.vue'
import DetailBlog from '@/views/components/common/DetailBlog.vue'
import Layout from '@/views/components/layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
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
   {
      path: '/',
      component: Layout,
      redirect: '/beranda',
      children: [
        { path: 'beranda', component: () => import('@/components/page/Home.vue') },
        { path: 'tentang', component: () => import('@/components/page/About.vue') },
        { path: 'galeri', component: () => import('@/components/page/Gallery.vue') },
        { path: 'layanan', component: () => import('@/components/page/Service.vue') },
        { path: 'blog', component: () => import('@/components/page/Blog.vue') },
        { path: 'kontak', component: () => import('@/components/page/Contact.vue') },
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.path === '/' && !to.hash) {
      return { top: 0 }
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

export default router