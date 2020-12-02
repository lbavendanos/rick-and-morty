import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/character',
    name: 'character',
    component: () =>
      import(/* webpackChunkName: "character" */ '../views/Character.vue')
  },
  {
    path: '/location',
    name: 'location',
    component: () =>
      import(/* webpackChunkName: "location" */ '../views/Location.vue')
  },
  {
    path: '/episode',
    name: 'episode',
    component: () =>
      import(/* webpackChunkName: "Episode" */ '../views/Episode.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
