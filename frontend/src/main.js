import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
