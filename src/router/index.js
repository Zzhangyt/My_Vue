import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/test',
    name: 'testVue',
    component: () => import('../views/test/testVue')
  }
]

const router = new VueRouter({
  routes
})

export default router
