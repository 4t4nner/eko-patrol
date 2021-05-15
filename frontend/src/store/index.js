import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import location from "./modules/location";
import locationList from "./modules/locationList";
import login from "./modules/login";
import profile from "./modules/profile";
import registration from "./modules/registration";
import search from "./modules/search";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeRootePage: ''
  },
  getters: {
    activeRootePage(state) {
      return state.activeRootePage
    }
  },
  mutations: {
    SET_ACTIVE_ROOTE_PAGE(state, data) {
      state.activeRootePage = data
    }
  },
  actions: {},
  modules: {
    auth,
    location,
    locationList,
    login,
    profile,
    registration,
    search,
  }
})
