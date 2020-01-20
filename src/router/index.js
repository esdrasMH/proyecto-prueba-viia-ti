import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/MainMenu.vue'),
  },
  {
    path: '/base-module/:id',
    name: 'Modulo base',
    component: () => import('../views/BaseModule.vue'),
  },
  {
    path: '/user-profile',
    name: 'Perfil',
    component: () => import('../views/UserProfile.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
