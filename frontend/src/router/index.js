import Vue from 'vue'
import store from '../store/index'
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
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile/:locationId',
    name: 'Profile location id',
    component: () => import(/* webpackChunkName: "profile location id" */ '../views/Location.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/search/locations',
    name: 'Search locations',
    component: () => import(/* webpackChunkName: "search locations" */ '../views/LocationList.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/search/locations/:locationId',
    name: 'Search locations id',
    component: () => import(/* webpackChunkName: "search locations id" */ '../views/Location.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/search/reconciliation',
    name: 'Search reconciliation',
    component: () => import(/* webpackChunkName: "search reconciliation" */ '../views/LocationList.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/search/reconciliation/:locationId',
    name: 'Search reconciliation id',
    component: () => import(/* webpackChunkName: "search reconciliation id" */ '../views/Location.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */ '../views/LocationList.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/history/:locationId',
    name: 'History id',
    component: () => import(/* webpackChunkName: "history id" */ '../views/Location.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/offer',
    name: 'Offer',
    component: () => import(/* webpackChunkName: "offer" */ '../views/Location.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/comments',
    name: 'Comments',
    component: () => import(/* webpackChunkName: "comments" */ '../views/Comments.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/clear',
    name: 'Clear',
    component: () => import(/* webpackChunkName: "comments" */ '../views/Clear.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
