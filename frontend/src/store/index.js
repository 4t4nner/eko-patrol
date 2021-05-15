import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeRootePage: '',
    isLoggedIn: false,
    profileInfo: {},
    activeLocationInfo: {},
    currentLocations: []
  },
  getters: {
    currentLocations(state) {
      return state.currentLocations
    },
    activeLocationInfo(state) {
      return state.activeLocationInfo
    },
    activeRootePage(state) {
      return state.activeRootePage
    },
    isLoggedIn(state) {
      return state.isLoggedIn
    },
    profileInfo(state) {
      return state.profileInfo
    },
  },
  mutations: {
    SET_CURRENT_LOCATIONS(state, data) {
      state.currentLocations = data
    },
    SET_LOCATION_INFO(state, data) {
      state.activeLocationInfo = data
    },
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
    GET_CURRENT_LOCATIONS(context) {
      fetch(`http://192.168.88.235:8000/location/?org=${context.state.profileInfo.id}&participant_id=${context.state.profileInfo.id}`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data) {
            context.commit('SET_CURRENT_LOCATIONS', data)
          }
        })
        .catch((e) => {
          console.error(e)
        })
    },
    ADD_LOCATION(context, data) {
      fetch('http://192.168.88.235:8000/location', {
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
            router.push('/clear')
          }
        })
        .catch((e) => {
          console.error(e)
        })
    },
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
            localStorage.setItem('profile-info', JSON.stringify(data))
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
            localStorage.setItem('profile-info', JSON.stringify(data))
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
      localStorage.removeItem('profile-info')
      router.push('/')
    }
  }
})
