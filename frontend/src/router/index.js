import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/profile/:locationId',
    name: 'Profile location id',
    component: () => import(/* webpackChunkName: "profile location id" */ '../views/Location.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/search/locations',
    name: 'Search locations',
    component: () => import(/* webpackChunkName: "search locations" */ '../views/LocationList.vue')
  },
  {
    path: '/search/locations/:locationId',
    name: 'Search locations id',
    component: () => import(/* webpackChunkName: "search locations id" */ '../views/Location.vue')
  },
  {
    path: '/search/reconciliation',
    name: 'Search reconciliation',
    component: () => import(/* webpackChunkName: "search reconciliation" */ '../views/LocationList.vue')
  },
  {
    path: '/search/reconciliation/:locationId',
    name: 'Search reconciliation id',
    component: () => import(/* webpackChunkName: "search reconciliation id" */ '../views/Location.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */ '../views/LocationList.vue')
  },
  {
    path: '/history/:locationId',
    name: 'History id',
    component: () => import(/* webpackChunkName: "history id" */ '../views/Location.vue')
  },
  {
    path: '/offer',
    name: 'Offer',
    component: () => import(/* webpackChunkName: "offer" */ '../views/Location.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
