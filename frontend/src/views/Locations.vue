<template>
  <div class="locations">
    <Header />
    <div class="locations-wrapper">
      <div class="locations-title">Выберите ивент</div>
      <compact-event-card />
      <compact-event-card />
      <compact-event-card />
      <compact-event-card />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import CompactEventCard from '../components/CompactEventCard'

export default {
  name: 'Locations',
  components: {
    Header,
    CompactEventCard
  }
}
</script>

<style lang="scss" scoped>
.locations {
  position: relative;
  height: calc(100vh - 60px);
  padding: 0 20px;
  overflow-x: hidden;
  text-align: center;

  .locations-title {
    font-size: 18px;
    line-height: 20px;
  }
}
</style>
