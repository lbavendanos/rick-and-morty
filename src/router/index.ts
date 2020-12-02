import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/characters',
    name: 'character',
    redirect: { name: 'character.index' },
    component: () =>
      import(
        /* webpackChunkName: "character" */ '@/views/Character/Character.vue'
      ),
    children: [
      {
        path: '',
        name: 'character.index',
        component: () =>
          import(
            /* webpackChunkName: "character-index" */ '@/views/Character/CharacterIndex.vue'
          )
      }
    ]
  },
  {
    path: '/locations',
    name: 'location',
    redirect: { name: 'location.index' },
    component: () =>
      import(
        /* webpackChunkName: "location" */ '@/views/Location/Location.vue'
      ),
    children: [
      {
        path: '',
        name: 'location.index',
        component: () =>
          import(
            /* webpackChunkName: "location-index" */ '@/views/Location/LocationIndex.vue'
          )
      }
    ]
  },
  {
    path: '/episodes',
    name: 'episode',
    redirect: { name: 'episode.index' },
    component: () =>
      import(/* webpackChunkName: "episode" */ '@/views/Episode/Episode.vue'),
    children: [
      {
        path: '',
        name: 'episode.index',
        component: () =>
          import(
            /* webpackChunkName: "episode-index" */ '@/views/Episode/EpisodeIndex.vue'
          )
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
