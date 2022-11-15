import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/other', name: 'Other', component: () => import('@/components/QuestionPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
