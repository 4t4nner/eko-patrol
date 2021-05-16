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
        ? 'Выберите локацию'
        : 'Локаций нет'
    },
    currentLocationList() {
      return this.$store.getters.currentLocations.filter((location) => {
        if (
          this.$route.name === 'Search locations' &&
          location.status === 'active'
        ) {
          return location
        }
        if (
          this.$route.name === 'Search appraisal' &&
          location.status === 'prepare' &&
          this.$store.getters.profileInfo.id !== location.org.id
        ) {
          return location
        }
        if (
          this.$route.name === 'Search reconciliation' &&
          location.status === 'finish' &&
          this.$store.getters.profileInfo.id !== location.org.id
        ) {
          return location
        }
        if (
          this.$route.name === 'History' &&
          location.status === 'history' &&
          (this.$store.getters.profileInfo.id === location.org.id ||
            location.subscribedUsers.some(
              (user) => this.$store.getters.profileInfo.id === user.id
            ))
        ) {
          return location
        }
      })
    }
  },
  async created() {
    await this.$store.dispatch('GET_LOCATIONS')
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

<style lang="scss">
.location-list {
  position: relative;
  min-height: 440px;
  height: calc(100vh - 60px);
  padding: 0 20px;
  background: url('../assets/img/shop-bg.svg') top center no-repeat;
  background-size: cover;
  overflow-x: hidden;
  text-align: center;

  .location-list-title {
    font-size: 18px;
    line-height: 20px;
  }
}
</style>
