<template>
  <div class="location">
    <Header style="padding: 0 20px" />
    <div class="location-wrapper">
      <Map />
      <event-card />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Map from '../components/Map'
import EventCard from '../components/EventCard'

export default {
  name: 'Location',
  components: {
    Header,
    Map,
    EventCard
  },
  mounted() {
    if (this.$route.name === 'Offer') {
      this.$store.commit('SET_ACTIVE_ROOTE_PAGE', '/offer')
    }
  }
}
</script>

<style lang="scss">
.location {
  height: calc(100vh - 60px);
  overflow-x: hidden;
  text-align: center;
}
</style>
