<template>
  <div class="offer">
    <Header style="padding: 0 20px" />
    <div class="offer-wrapper">
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
  name: 'Offer',
  components: {
    Header,
    Map,
    EventCard
  }
}
</script>

<style lang="scss">
.offer {
  height: calc(100vh - 60px);
  overflow-x: hidden;
  text-align: center;
}
</style>
