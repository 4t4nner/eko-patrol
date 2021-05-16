<template>
  <div id="app" class="page">
    <router-view />
    <navigation v-if="isVisibleFooterAndHeader" />
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  computed: {
    isVisibleFooterAndHeader() {
      return (
        this.$route.name !== 'Auth' &&
        this.$route.name !== 'Login' &&
        this.$route.name !== 'Registration'
      )
    }
  },
  async created() {
    const profileInfo = localStorage.getItem('profile-info')
    if (profileInfo) {
      this.$store.commit('SET_PROFILE_INFO', JSON.parse(profileInfo))
      this.$store.commit('SET_LOGGED_IN', true)
      await this.$store.dispatch('GET_LOCATIONS')
    } else {
      await this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import 'assets/styles/global';

#app {
  max-width: 425px;
  width: 100%;
  margin: 0 auto;
}
</style>
