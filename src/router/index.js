import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
