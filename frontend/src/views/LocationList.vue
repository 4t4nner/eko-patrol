<template>
  <div class="location-list">
    <Header />
    <div class="location-list-wrapper">
      <div class="location-list-title">{{ locationListTitle }}</div>
      <router-link
        v-for="location of currentLocationList"
        :key="location.id"
        :to="linkToLocation(location.id)"
      >
        <compact-event-card :locationInfo="location" />
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
      return this.currentLocationList.length > 0
        ? 'Выберите ивент'
        : 'Ивентов нет'
    },
    currentLocationList() {
      return this.$store.getters.currentLocations.filter((location) => {
        if (this.$route.name === 'Search locations') {
          return location.status === 'active'
        } else if (this.$route.name === 'Search appraisal') {
          return location.status === 'finish'
        } else if (this.$route.name === 'Search reconciliation') {
          return location.status === 'prepare'
        } else if (this.$route.name === 'History') {
          return location.status === 'history'
        } else {
          return location
        }
      })
    }
  },
  mounted() {
    if (this.$route.name === 'History') {
      this.$store.commit('SET_ACTIVE_ROOTE_PAGE', '/history')
    }
  },
  methods: {
    linkToLocation(id) {
      return this.$route.path + `/${id}` // подставляю locationId
    }
  }
}
</script>

<style lang="scss" scoped>
.location-list {
  position: relative;
  min-height: 440px;
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
