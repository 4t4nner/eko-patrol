import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

const url = 'http://192.168.88.235:8000'

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
    }
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
    CHANGE_LOCATION_STATUS(context, data) {
      fetch(`${url}/location/${data.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({status: data.status})
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data) {
            console.log('success')
          }
        })
        .catch((e) => {
          console.error(e)
        })
      if (data.status === 'active' || data.status === 'history') {
        router.push('/search')
      }
      if (data.status === 'finish') {
        router.push('/profile')
      }
    },
    ADD_PARTICIPANT_TO_LOCATION(context, data) {
      const currentData = {participant_id: context.state.profileInfo.id, location_id: data}
      fetch(`${url}/location/participant`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentData)
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data) {
            router.push('/profile')
          }
        })
        .catch((e) => {
          console.error(e)
        })
    },
    UPDATE_USER_INFO(context) {
      fetch(
        `${url}/user?id=${context.state.profileInfo.id}`
      )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data) {
            context.commit('SET_PROFILE_INFO', data)
          }
        })
        .catch((e) => {
          console.error(e)
        })
    },
    GET_LOCATIONS(context) {
      fetch(`${url}/location`)
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
      fetch(`${url}/location`, {
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
            router.push('/profile')
          }
        })
        .catch((e) => {
          console.error(e)
        })
    },
    REGISTRATION(context, data) {
      fetch(`${url}/user`, {
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
      fetch(
        `${url}/auth?login=${data.login}&password=${data.password}`
      )
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
