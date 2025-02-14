import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModifyPlantView from '../views/ModifyPlantView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/plants/:id',
      name: 'modify-plant',
      component: ModifyPlantView
    }
  ]
})

export default router
