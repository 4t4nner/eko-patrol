import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeRootePage: '',
    isLoggedIn: false,
    profileInfo: {}
  },
  getters: {
    activeRootePage(state) {
      return state.activeRootePage
    },
    isLoggedIn(state) {
      return state.isLoggedIn
    }
  },
  mutations: {
    SET_ACTIVE_ROOTE_PAGE(state, data) {
      state.activeRootePage = data
    },
    SET_PROFILE_INFO(state, data) {
      state.profileInfo = data
    },
    SET_LOGGED_IN(state, data) {
      state.isLoggedIn = data
    }
  },
  actions: {
    REGISTRATION(context, data) {
      fetch('http://192.168.88.235:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data) {
            context.commit('SET_PROFILE_INFO', data)
            context.commit('SET_LOGGED_IN', true)
            router.push('/profile')
          }
        })
        .catch((e) => {
          console.error(e)
        })
    },
    LOGIN(context, data) {
      fetch(`http://192.168.88.235:8000/auth?login=${data.login}&password=${data.password}`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data) {
            context.commit('SET_PROFILE_INFO', data)
            context.commit('SET_LOGGED_IN', true)
            router.push('/profile')
          }
        })
        .catch((e) => {
          console.error(e)
        })
    },
    LOGOUT(context) {
      context.commit('SET_LOGGED_IN', false)
      context.commit('SET_PROFILE_INFO', {})
      router.push('/')
    }
  }
})
