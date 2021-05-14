<template>
  <div id="app" class="page">
    <router-view />
    <navigation v-if="isVisibleFooter"/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation
  },
  computed: {
    isVisibleFooter() {
      return this.$route.name !== 'Auth' && this.$route.name !== 'Login' && this.$route.name !== 'Registration'
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
