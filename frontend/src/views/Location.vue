<template>
  <div class="location">
    <Header style="padding: 0 20px" />
    <div class="location-wrapper">
      <Map @setCoords="setCoordsHandler" />
      <event-card
        @inputSelected="inputSelected"
        @inputRadio="inputRadio"
        @inputDate="inputDate"
        @inputOrganized="inputOrganized"
        @inputReward="inputReward"
        @inputSlider="inputSlider"
        @addLocationHandler="addLocation"
      />
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
  data() {
    return {
      coords: [],
      selected: '',
      radio: 1,
      date: new Date(),
      organized: '',
      reward: '',
      slider: ''
    }
  },
  created() {
    if (this.$route.params.locationId) {
      const data = this.$store.getters.currentLocations.find(
        (location) => location.id === Number(this.$route.params.locationId)
      )
      if (data) {
        this.$store.commit('SET_LOCATION_INFO', data)
      }
    } else {
      this.$store.commit('SET_LOCATION_INFO', {})
    }
  },
  mounted() {
    if (this.$route.name === 'Offer') {
      this.$store.commit('SET_ACTIVE_ROOTE_PAGE', '/offer')
    }
  },
  methods: {
    addLocation() {
      const payload = {
        geotag: this.coords,
        start_date: new Date(),
        end_date: this.date,
        org: this.$store.getters.profileInfo.id,
        contamination: this.radio,
        status: 'start', // end or whatever
        reward: Number(this.reward), // награда
        square: Number(this.slider), // площадь
        availability: this.selected
      }
      this.$store.dispatch('ADD_LOCATION', payload)
    },
    setCoordsHandler(val) {
      this.coords = val.slice()
    },
    inputSelected(val) {
      this.selected = val
    },
    inputRadio(val) {
      this.radio = val
    },
    inputDate(val) {
      this.date = val
    },
    inputOrganized(val) {
      this.organized = val
    },
    inputReward(val) {
      this.reward = val
    },
    inputSlider(val) {
      this.slider = val
    }
  }
}
</script>

<style lang="scss">
.location {
  min-height: 440px;
  height: calc(100vh - 60px);
  background: url("../assets/img/offer-bg.svg") top center no-repeat;
  background-size: cover;
  overflow-x: hidden;
  text-align: center;
}
</style>
