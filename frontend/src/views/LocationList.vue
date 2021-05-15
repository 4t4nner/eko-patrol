<template>
  <div class="location-list">
    <Header />
    <div class="location-list-wrapper">
      <div class="location-list-title">{{ locationListTitle }}</div>
        <router-link :to="linkToLocation">
          <compact-event-card />
        </router-link>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import CompactEventCard from '../components/CompactEventCard'

export default {
  name: 'LocationList',
  components: {
    Header,
    CompactEventCard
  },
  computed: {
    locationListTitle() {
      return this.$route.name === 'History'
        ? 'Ваши завершенные ивенты'
        : 'Выберите ивент'
    },
    linkToLocation() {
      return this.$route.path + '/3' // подставляю locationId
    }
  },
  mounted() {
    if (this.$route.name === 'History') {
      this.$store.commit('SET_ACTIVE_ROOTE_PAGE', '/history')
    }
  }
}
</script>

<style lang="scss" scoped>
.location-list {
  position: relative;
  height: calc(100vh - 60px);
  padding: 0 20px;
  overflow-x: hidden;
  text-align: center;

  .location-list-title {
    font-size: 18px;
    line-height: 20px;
  }
}
</style>
